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

if (!is_array($payload) || !isset($payload['personal']) || !is_array($payload['personal'])) {
    http_response_code(422);
    echo json_encode(['ok' => false, 'message' => 'Invalid payload']);
    exit;
}

$personal = $payload['personal'];

$fullName = mb_substr(trim((string) ($personal['fullName'] ?? '')), 0, 150);
$professionalTitle = mb_substr(trim((string) ($personal['professionalTitle'] ?? '')), 0, 150);
$email = mb_substr(trim((string) ($personal['email'] ?? '')), 0, 190);
$phone = mb_substr(trim((string) ($personal['phone'] ?? '')), 0, 80);
$location = mb_substr(trim((string) ($personal['location'] ?? '')), 0, 150);
$website = mb_substr(trim((string) ($personal['website'] ?? '')), 0, 255);
$github = mb_substr(trim((string) ($personal['github'] ?? '')), 0, 255);
$summary = mb_substr(trim((string) ($personal['summary'] ?? '')), 0, 2000);

if ($fullName === '' && $email === '') {
    http_response_code(422);
    echo json_encode(['ok' => false, 'message' => 'Please provide at least full name or email']);
    exit;
}

try {
    $pdo = resume_db();

    $pdo->exec(
        'CREATE TABLE IF NOT EXISTS personal_profiles (
            id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
            profile_key VARCHAR(50) NOT NULL UNIQUE,
            full_name VARCHAR(150) NOT NULL,
            professional_title VARCHAR(150) NOT NULL,
            email VARCHAR(190) NOT NULL,
            phone VARCHAR(80) NOT NULL,
            location VARCHAR(150) NOT NULL,
            website VARCHAR(255) NOT NULL,
            github VARCHAR(255) NOT NULL,
            summary TEXT NOT NULL,
            updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci'
    );

    $stmt = $pdo->prepare(
        'INSERT INTO personal_profiles
            (profile_key, full_name, professional_title, email, phone, location, website, github, summary)
         VALUES
            (:profile_key, :full_name, :professional_title, :email, :phone, :location, :website, :github, :summary)
         ON DUPLICATE KEY UPDATE
            full_name = VALUES(full_name),
            professional_title = VALUES(professional_title),
            email = VALUES(email),
            phone = VALUES(phone),
            location = VALUES(location),
            website = VALUES(website),
            github = VALUES(github),
            summary = VALUES(summary)'
    );

    $stmt->execute([
        ':profile_key' => 'owner',
        ':full_name' => $fullName,
        ':professional_title' => $professionalTitle,
        ':email' => $email,
        ':phone' => $phone,
        ':location' => $location,
        ':website' => $website,
        ':github' => $github,
        ':summary' => $summary,
    ]);

    echo json_encode(['ok' => true]);
} catch (Throwable $exception) {
    http_response_code(500);
    echo json_encode([
        'ok' => false,
        'message' => 'Database error. Check config.php and MySQL credentials.',
        'error' => $exception->getMessage(),
    ]);
}
