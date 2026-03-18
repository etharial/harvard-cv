<?php

declare(strict_types=1);

// Database configuration (EDM Finals style)
define('DB_HOST', getenv('DB_HOST') ?: 'localhost');
define('DB_USER', getenv('DB_USER') ?: 'root');
define('DB_PASS', getenv('DB_PASS') ?: '');
define('DB_NAME', getenv('DB_NAME') ?: 'harvard_cv');
define('DB_PORT', (int) (getenv('DB_PORT') ?: 3306));

// Create mysqli connection
$conn = mysqli_connect(DB_HOST, DB_USER, DB_PASS, DB_NAME, DB_PORT);

// Check connection
if (!$conn) {
    die('Connection failed: ' . mysqli_connect_error());
}

mysqli_set_charset($conn, 'utf8mb4');

// Create personal profile table if it does not exist
$createPersonalProfilesTable = "CREATE TABLE IF NOT EXISTS personal_profiles (
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci";

mysqli_query($conn, $createPersonalProfilesTable);

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

/**
 * Returns a shared PDO connection for endpoints already using PDO.
 */
function resume_db(): PDO
{
    static $pdo = null;

    if ($pdo instanceof PDO) {
        return $pdo;
    }

    $dsn = sprintf('mysql:host=%s;port=%d;dbname=%s;charset=utf8mb4', DB_HOST, DB_PORT, DB_NAME);

    $pdo = new PDO($dsn, DB_USER, DB_PASS, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false,
    ]);

    return $pdo;
}
