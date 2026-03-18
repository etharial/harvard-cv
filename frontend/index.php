<!doctype html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Harvard Resume Builder</title>
	<meta name="description" content="Create ATS-friendly Harvard-style resumes in English or Spanish. Everything stays in your browser and exports as a clean PDF.">
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&family=Source+Serif+4:wght@400;600;700&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="styles.css">
</head>
<body>
	<header class="topbar">
		<div class="brand-wrap">
			<h1 class="brand">Harvard Resume Builder</h1>
			<p class="subtitle" data-i18n="hero.subtitle"></p>
		</div>
		<button id="languageToggle" class="language-toggle" type="button">EN</button>
	</header>

	<main class="app-layout">
		<section class="panel form-panel">
			<div class="panel-header">
				<h2 data-i18n="form.title"></h2>
				<p data-i18n="form.description"></p>
			</div>

			<div class="toolbar">
				<button id="saveBtn" class="btn btn-secondary" type="button" data-i18n="actions.save"></button>
				<button id="clearBtn" class="btn btn-ghost" type="button" data-i18n="actions.clear"></button>
				<button id="downloadBtn" class="btn btn-primary" type="button" data-i18n="actions.download"></button>
			</div>

			<div class="privacy-box">
				<h3 data-i18n="privacy.title"></h3>
				<ul>
					<li data-i18n="privacy.localOnly"></li>
					<li data-i18n="privacy.noAccount"></li>
					<li data-i18n="privacy.editAnytime"></li>
				</ul>
			</div>

			<form id="resumeForm" novalidate>
				<nav class="section-tabs" id="sectionTabs" aria-label="Resume sections">
					<button type="button" class="section-tab active" data-tab-target="personal" data-i18n="section.personal"></button>
					<button type="button" class="section-tab" data-tab-target="education" data-i18n="section.education"></button>
					<button type="button" class="section-tab" data-tab-target="experience" data-i18n="section.experience"></button>
					<button type="button" class="section-tab" data-tab-target="leadership" data-i18n="section.leadership"></button>
					<button type="button" class="section-tab" data-tab-target="projects" data-i18n="section.projects"></button>
					<button type="button" class="section-tab" data-tab-target="skills" data-i18n="section.skills"></button>
					<button type="button" class="section-tab" data-tab-target="courses" data-i18n="section.courses"></button>
					<button type="button" class="section-tab" data-tab-target="trainings" data-i18n="section.trainings"></button>
					<button type="button" class="section-tab" data-tab-target="honors" data-i18n="section.honors"></button>
				</nav>

				<section class="form-section tab-panel active" id="personalSection" data-tab-panel="personal"></section>
				<section class="form-section dynamic-section tab-panel" id="educationSection" data-tab-panel="education"></section>
				<section class="form-section dynamic-section tab-panel" id="experienceSection" data-tab-panel="experience"></section>
				<section class="form-section dynamic-section tab-panel" id="leadershipSection" data-tab-panel="leadership"></section>
				<section class="form-section dynamic-section tab-panel" id="projectsSection" data-tab-panel="projects"></section>
				<section class="form-section tab-panel" id="skillsSection" data-tab-panel="skills"></section>
				<section class="form-section dynamic-section tab-panel" id="coursesSection" data-tab-panel="courses"></section>
				<section class="form-section dynamic-section tab-panel" id="trainingsSection" data-tab-panel="trainings"></section>
				<section class="form-section dynamic-section tab-panel" id="honorsSection" data-tab-panel="honors"></section>
			</form>

			<section class="form-section tools-area">
				<div class="section-head">
					<h3 data-i18n="tools.title"></h3>
				</div>
				<nav class="tool-tabs" id="toolTabs" aria-label="Career tools">
					<button type="button" class="tool-tab active" data-tool-target="ats" data-i18n="tools.ats"></button>
					<button type="button" class="tool-tab" data-tool-target="job" data-i18n="tools.jobMatch"></button>
					<button type="button" class="tool-tab" data-tool-target="salary" data-i18n="tools.salary"></button>
				</nav>

				<div class="tool-panel active" id="atsPanel" data-tool-panel="ats"></div>
				<div class="tool-panel" id="jobMatchPanel" data-tool-panel="job"></div>
				<div class="tool-panel" id="salaryPanel" data-tool-panel="salary"></div>
			</section>
		</section>

		<section class="panel preview-panel">
			<div class="preview-head">
				<h2 data-i18n="preview.title"></h2>
				<p data-i18n="preview.description"></p>
			</div>
			<article id="resumePreview" class="resume-preview" aria-live="polite"></article>
		</section>
	</main>

	<script src="script.js"></script>
</body>
</html>
