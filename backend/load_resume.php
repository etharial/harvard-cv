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

    $stmt = $pdo->prepare(
        'SELECT resume_json
         FROM resume_snapshots
         WHERE profile_key = :profile_key
         LIMIT 1'
    );

    $stmt->execute([':profile_key' => 'owner']);
    $row = $stmt->fetch();

    if (!$row) {
        echo json_encode(['ok' => true, 'state' => null]);
        exit;
    }

    $state = json_decode((string) $row['resume_json'], true);
    if (!is_array($state)) {
        echo json_encode(['ok' => true, 'state' => null]);
        exit;
    }

    echo json_encode(['ok' => true, 'state' => $state]);
} catch (Throwable $exception) {
    http_response_code(500);
    echo json_encode([
        'ok' => false,
        'message' => 'Database error while loading full resume.',
    ]);
}
