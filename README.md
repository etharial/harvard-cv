# Harvard CV - Local Setup Guide

## Introduction

Harvard CV is a web-based resume builder that helps users create clean, ATS-friendly resumes using a Harvard-style layout. The app provides a guided form, instant preview, and export tools so users can build and update resumes quickly for internships, jobs, and academic applications.

## Site Features

- Harvard-style, ATS-compatible resume format.
- Tab-based form workflow for Personal, Education, Experience, Leadership, Projects, Skills, Courses, Trainings, and Honors.
- Real-time resume preview while typing.
- One-click PDF download.
- Bilingual interface support (English/Spanish/Filipino).
- Light and dark theme toggle.
- Save, load, and delete resume save slots.
- Privacy-first design with browser-based data handling and optional MySQL sync through backend endpoints.

This project is a PHP + MySQL web app with:

- Frontend: `frontend/index.php`, `frontend/script.js`, `frontend/styles.css`
- Backend API: `backend/*.php`
- Database setup script: `backend/setup.sql`

## 1. Prerequisites

Install these first:

- XAMPP (Apache + MySQL)
- VS Code
- A web browser (Chrome, Edge, Firefox)

## 2. Put the Project in XAMPP `htdocs`

1. Open your XAMPP installation folder.
   - Usually: `C:\xampp\htdocs`
2. Copy this folder into `htdocs`:
   - `harvard-cv`
3. Final path should look like:
   - `C:\xampp\htdocs\harvard-cv\frontend\index.php`

## 3. Start Apache and MySQL in XAMPP

1. Open **XAMPP Control Panel**.
2. Click **Start** for:
   - Apache
   - MySQL
3. Make sure both services show green/running status.

## 4. Create the Database (phpMyAdmin)

1. Open: `http://localhost/phpmyadmin`
2. Click **Import**.
3. Choose file: `C:\xampp\htdocs\harvard-cv\backend\setup.sql`
4. Click **Go**.

This creates the `harvard_cv` database and required tables.

## 5. Check Database Config (if needed)

Default DB config is in `backend/config.php`:

- Host: `localhost`
- User: `root`
- Password: empty (`''`)
- Database: `harvard_cv`
- Port: `3306`

If your MySQL credentials are different, update `backend/config.php`.

## 6. Open and Run in Browser

1. Open project in VS Code:
   - Folder: `C:\xampp\htdocs\harvard-cv`
2. In browser, open:
   - `http://localhost/harvard-cv/frontend/index.php`

You should now see the Harvard Resume Builder app.

## 7. Optional: Work with VS Code Efficiently

- Edit frontend UI files:
  - `frontend/index.php`
  - `frontend/styles.css`
  - `frontend/script.js`
- Edit backend endpoints:
  - `backend/load_resume.php`
  - `backend/save_resume.php`
  - `backend/load_personal.php`
  - `backend/save_personal.php`
- No Node.js build step is required.
- Refresh browser after saving changes.

## 8. Troubleshooting

- Page does not load:
  - Confirm Apache is running in XAMPP.
  - Confirm URL is exactly `http://localhost/harvard-cv/frontend/index.php`.
- Database connection error:
  - Confirm MySQL is running.
  - Confirm `harvard_cv` exists in phpMyAdmin.
  - Check credentials in `backend/config.php`.
- API save/load errors:
  - Ensure project is inside `htdocs`.
  - Ensure backend files are present in `backend/`.

## 9. Quick Start Summary

1. Start Apache + MySQL in XAMPP.
2. Import `backend/setup.sql` in phpMyAdmin.
3. Open `http://localhost/harvard-cv/frontend/index.php`.
