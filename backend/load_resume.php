<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'message' => 'Method not allowed']);
    exit;
}

require_once __DIR__ . '/config.php';

try {
    $pdo = resume_db();

    $pdo->exec(
        'CREATE TABLE IF NOT EXISTS resume_snapshots (
            id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            profile_key VARCHAR(50) NOT NULL UNIQUE,
            resume_json LONGTEXT NOT NULL,
            updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci'
    );

    $pdo->exec(
        'CREATE TABLE IF NOT EXISTS resume_save_slots (
            id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            profile_key VARCHAR(50) NOT NULL,
            slot_name VARCHAR(190) NOT NULL,
            slot_state_json LONGTEXT NOT NULL,
            saved_at DATETIME NULL,
            updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
            UNIQUE KEY uq_profile_slot (profile_key, slot_name),
            KEY idx_profile_key (profile_key)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci'
    );

    $resumeJsonColumn = resolveResumeStateColumn($pdo);

    $stmt = $pdo->prepare(
        "SELECT {$resumeJsonColumn}
         FROM resume_snapshots
         WHERE profile_key = :profile_key
         LIMIT 1"
    );

    $stmt->execute([':profile_key' => 'owner']);
    $row = $stmt->fetch();

    if (!$row) {
        echo json_encode(['ok' => true, 'state' => null]);
        exit;
    }

    $state = json_decode((string) $row[$resumeJsonColumn], true);
    if (!is_array($state)) {
        echo json_encode(['ok' => true, 'state' => null]);
        exit;
    }

    $slotStmt = $pdo->prepare(
        'SELECT slot_name, slot_state_json, saved_at
         FROM resume_save_slots
         WHERE profile_key = :profile_key
         ORDER BY slot_name ASC'
    );
    $slotStmt->execute([':profile_key' => 'owner']);

    $saveSlots = [];
    while ($slot = $slotStmt->fetch()) {
        $name = trim((string) ($slot['slot_name'] ?? ''));
        if ($name === '') {
            continue;
        }

        $slotState = json_decode((string) ($slot['slot_state_json'] ?? '{}'), true);
        if (!is_array($slotState)) {
            continue;
        }

        $savedAtIso = null;
        if (!empty($slot['saved_at'])) {
            $ts = strtotime((string) $slot['saved_at']);
            if ($ts !== false) {
                $savedAtIso = gmdate('c', $ts);
            }
        }

        $saveSlots[$name] = [
            'savedAt' => $savedAtIso,
            'state' => $slotState,
        ];
    }

    $state['saveSlots'] = $saveSlots;
    if (!isset($state['selectedSaveSlot']) || !is_string($state['selectedSaveSlot'])) {
        $state['selectedSaveSlot'] = '';
    }

    echo json_encode(['ok' => true, 'state' => $state]);
} catch (Throwable $exception) {
    http_response_code(500);
    echo json_encode([
        'ok' => false,
        'message' => 'Database error while loading full resume.',
        'error' => $exception->getMessage(),
    ]);
}

function resolveResumeStateColumn(PDO $pdo): string
{
    $tableExists = $pdo->query("SHOW TABLES LIKE 'resume_snapshots'")->fetchColumn();
    if ($tableExists === false) {
        return 'resume_json';
    }

    $columns = $pdo->query('SHOW COLUMNS FROM resume_snapshots')->fetchAll(PDO::FETCH_COLUMN);
    if (!is_array($columns)) {
        return 'resume_json';
    }

    if (in_array('resume_json', $columns, true)) {
        return 'resume_json';
    }

    if (in_array('state_json', $columns, true)) {
        return 'state_json';
    }

    return 'resume_json';
}
