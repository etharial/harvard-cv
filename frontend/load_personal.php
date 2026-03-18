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

    $stmt = $pdo->prepare(
        'SELECT
            full_name,
            professional_title,
            email,
            phone,
            location,
            website,
            github,
            summary
         FROM personal_profiles
         WHERE profile_key = :profile_key
         LIMIT 1'
    );

    $stmt->execute([':profile_key' => 'owner']);
    $row = $stmt->fetch();

    if (!$row) {
        echo json_encode(['ok' => true, 'personal' => null]);
        exit;
    }

    echo json_encode([
        'ok' => true,
        'personal' => [
            'fullName' => (string) $row['full_name'],
            'professionalTitle' => (string) $row['professional_title'],
            'email' => (string) $row['email'],
            'phone' => (string) $row['phone'],
            'location' => (string) $row['location'],
            'website' => (string) $row['website'],
            'github' => (string) $row['github'],
            'summary' => (string) $row['summary'],
        ],
    ]);
} catch (Throwable $exception) {
    http_response_code(500);
    echo json_encode([
        'ok' => false,
        'message' => 'Database error. Check config.php and MySQL credentials.',
    ]);
}
