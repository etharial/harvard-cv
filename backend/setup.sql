-- Harvard CV database setup
-- Run this file in MySQL before starting the PHP app.

CREATE DATABASE IF NOT EXISTS harvard_cv
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE harvard_cv;

CREATE TABLE IF NOT EXISTS personal_profiles (
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

  CREATE TABLE IF NOT EXISTS resume_snapshots (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    profile_key VARCHAR(50) NOT NULL UNIQUE,
    resume_json LONGTEXT NOT NULL,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE IF NOT EXISTS resume_save_slots (
    id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    profile_key VARCHAR(50) NOT NULL,
    slot_name VARCHAR(190) NOT NULL,
    slot_state_json LONGTEXT NOT NULL,
    saved_at DATETIME NULL,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE KEY uq_profile_slot (profile_key, slot_name),
    KEY idx_profile_key (profile_key)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
