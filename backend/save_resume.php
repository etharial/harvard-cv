<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'message' => 'Method not allowed']);
    exit;
}

require_once __DIR__ . '/config.php';

$rawBody = file_get_contents('php://input');
$payload = json_decode($rawBody ?: '{}', true);

if (!is_array($payload) || !isset($payload['state']) || !is_array($payload['state'])) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'message' => 'Invalid payload']);
    exit;
}

$state = $payload['state'];
$saveSlots = [];
if (isset($state['saveSlots']) && is_array($state['saveSlots'])) {
    $saveSlots = $state['saveSlots'];
}

$stateToPersist = $state;
$stateToPersist['saveSlots'] = new stdClass();

$encodedState = json_encode($stateToPersist, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);

if ($encodedState === false) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'message' => 'Could not encode resume state']);
    exit;
}

try {
    $pdo = resume_db();
    $pdo->beginTransaction();

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
        "INSERT INTO resume_snapshots (profile_key, {$resumeJsonColumn})
         VALUES (:profile_key, :resume_json)
         ON DUPLICATE KEY UPDATE
            {$resumeJsonColumn} = VALUES({$resumeJsonColumn})"
    );

    $stmt->execute([
        ':profile_key' => 'owner',
        ':resume_json' => $encodedState,
    ]);

    $deleteSlots = $pdo->prepare('DELETE FROM resume_save_slots WHERE profile_key = :profile_key');
    $deleteSlots->execute([':profile_key' => 'owner']);

    $slotStmt = $pdo->prepare(
        'INSERT INTO resume_save_slots (profile_key, slot_name, slot_state_json, saved_at)
         VALUES (:profile_key, :slot_name, :slot_state_json, :saved_at)
         ON DUPLICATE KEY UPDATE
            slot_state_json = VALUES(slot_state_json),
            saved_at = VALUES(saved_at),
            updated_at = CURRENT_TIMESTAMP'
    );

    foreach ($saveSlots as $slotName => $slotPayload) {
        $name = trim((string) $slotName);
        if ($name === '' || !is_array($slotPayload)) {
            continue;
        }

        $slotState = $slotPayload['state'] ?? null;
        if (!is_array($slotState)) {
            continue;
        }

        $savedAt = null;
        if (!empty($slotPayload['savedAt'])) {
            $ts = strtotime((string) $slotPayload['savedAt']);
            if ($ts !== false) {
                $savedAt = date('Y-m-d H:i:s', $ts);
            }
        }

        $slotStateJson = json_encode($slotState, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
        if ($slotStateJson === false) {
            continue;
        }

        $slotStmt->execute([
            ':profile_key' => 'owner',
            ':slot_name' => substr($name, 0, 190),
            ':slot_state_json' => $slotStateJson,
            ':saved_at' => $savedAt,
        ]);
    }

    $pdo->commit();

    echo json_encode(['ok' => true]);
} catch (Throwable $exception) {
    if (isset($pdo) && $pdo instanceof PDO && $pdo->inTransaction()) {
        $pdo->rollBack();
    }

    http_response_code(500);
    echo json_encode([
        'ok' => false,
        'message' => 'Database error while saving full resume.',
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

    // Fallback for very old/mismatched schemas.
    $pdo->exec('ALTER TABLE resume_snapshots ADD COLUMN resume_json LONGTEXT NOT NULL');
    return 'resume_json';
}
