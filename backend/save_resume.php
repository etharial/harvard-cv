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
$encodedState = json_encode($state, JSON_UNESCAPED_UNICODE);

if ($encodedState === false) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'message' => 'Could not encode resume state']);
    exit;
}

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
        'INSERT INTO resume_snapshots (profile_key, resume_json)
         VALUES (:profile_key, :resume_json)
         ON DUPLICATE KEY UPDATE
            resume_json = VALUES(resume_json)'
    );

    $stmt->execute([
        ':profile_key' => 'owner',
        ':resume_json' => $encodedState,
    ]);

    echo json_encode(['ok' => true]);
} catch (Throwable $exception) {
    http_response_code(500);
    echo json_encode([
        'ok' => false,
        'message' => 'Database error while saving full resume.',
        'error' => $exception->getMessage(),
    ]);
}
