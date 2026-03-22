const STORAGE_KEY = "harvardResumeBuilder.v2";
const PREVIEW_SECTION_ORDER_DEFAULT = [
  "summary",
  "education",
  "experience",
  "leadership",
  "projects",
  "skills",
  "courses",
  "trainings",
  "honors",
];

const translations = {
  en: {
    "hero.subtitle":
      "Build an ATS-ready Harvard-style resume in seconds. No account and fully editable.",
    "form.title": "Resume Builder",
    "form.description":
      "Use tabs to complete each section. Preview updates instantly.",
    "actions.save": "Save",
    "actions.clear": "Clear",
    "actions.download": "Download PDF",
    "actions.themeDark": "Dark",
    "actions.themeLight": "Light",
    "saveFiles.title": "Save Files",
    "saveFiles.slotName": "Slot name",
    "saveFiles.select": "Select a saved slot",
    "saveFiles.save": "Save Slot",
    "saveFiles.load": "Load Slot",
    "saveFiles.delete": "Delete Slot",
    "saveFiles.rename": "Rename Slot",
    "saveFiles.empty": "No save files yet.",
    "saveFiles.savedAt": "Saved",
    "saveFiles.slotPlaceholder": "My Resume Slot",
    "saveFiles.customizeLayout": "Customize Layout",
    "saveFiles.hideLayout": "Hide Layout Controls",
    "saveFiles.customizeOrder": "CV section order",
    "saveFiles.dragHint":
      "Drag sections to customize the Harvard CV paper order.",
    "saveFiles.confirmLoad":
      "Load selected save file? Unsaved edits will be replaced.",
    "saveFiles.confirmDelete": "Delete selected save file?",
    "saveFiles.confirmOverwrite":
      "A slot with that name already exists. Replace it?",
    "saveFiles.saved": "Save file updated.",
    "saveFiles.loaded": "Save file loaded.",
    "saveFiles.deleted": "Save file deleted.",
    "saveFiles.renamed": "Save file renamed.",
    "privacy.title": "Privacy First",
    "privacy.localOnly":
      "Resume data stays in your browser. Personal profile can sync to your own MySQL.",
    "privacy.noAccount": "No sign up and no registration required.",
    "privacy.editAnytime":
      "Edit, duplicate, and adapt for any role in minutes.",
    "preview.title": "Live Preview",
    "preview.description": "Harvard-style and ATS-compatible structure.",
    "layout.standard": "Standard Harvard CV",
    "layout.withPhoto": "Harvard CV with Photo",
    "section.personal": "Personal",
    "section.education": "Education",
    "section.experience": "Experience",
    "section.projects": "Projects",
    "section.leadership": "Leadership & Activities",
    "section.honors": "Honors & Achievements",
    "section.courses": "Courses & Certifications",
    "section.trainings": "Trainings & Seminars",
    "section.skills": "Skills",
    "tools.title": "Career Tools",
    "tools.ats": "ATS Meter",
    "tools.jobMatch": "Job Match Analyzer",
    "tools.salary": "Salary Transparency",
    "add.education": "Add Education",
    "add.experience": "Add Experience",
    "add.projects": "Add Project",
    "add.leadership": "Add Leadership",
    "add.honors": "Add Honor",
    "add.courses": "Add Course",
    "add.trainings": "Add Training",
    remove: "Remove",
    "entry.education": "Education Entry",
    "entry.experience": "Experience Entry",
    "entry.projects": "Project Entry",
    "entry.leadership": "Leadership Entry",
    "entry.honors": "Honor Entry",
    "entry.courses": "Course Entry",
    "entry.trainings": "Training Entry",
    "empty.preview":
      "Start filling in sections to generate your resume preview.",
    "clear.confirm": "Clear all locally saved resume data?",
    "save.success": "Saved locally and synced to MySQL.",
    "save.localOnly": "Saved locally. MySQL sync failed.",
    "preview.summary": "Professional Summary",
    "preview.education": "Education",
    "preview.experience": "Experience",
    "preview.projects": "Projects",
    "preview.leadership": "Leadership & Activities",
    "preview.honors": "Honors & Achievements",
    "preview.courses": "Courses & Certifications",
    "preview.trainings": "Trainings & Seminars",
    "preview.skills": "Skills",
    "preview.languages": "Languages",
    "preview.certifications": "Certifications",
    "preview.interests": "Interests",
    "labels.fullName": "Full Name",
    "labels.professionalTitle": "Professional Title",
    "labels.email": "Email",
    "labels.phone": "Phone",
    "labels.location": "Location",
    "labels.website": "Website or LinkedIn",
    "labels.github": "GitHub",
    "labels.summary": "Professional Summary",
    "labels.photo": "Profile Photo (Optional)",
    "labels.school": "School",
    "labels.degree": "Degree / Program",
    "labels.company": "Company",
    "labels.role": "Role",
    "labels.projectName": "Project Name",
    "labels.projectRole": "Your Role",
    "labels.tech": "Tools / Technologies",
    "labels.link": "Link",
    "labels.start": "Start",
    "labels.end": "End",
    "labels.details": "Achievements / Details (one point per line)",
    "labels.organization": "Organization",
    "labels.title": "Title",
    "labels.issuer": "Issuer",
    "labels.date": "Date",
    "labels.organizer": "Organizer",
    "labels.skills": "Core Skills (one point per line)",
    "labels.aiWorkflowTitle": "Workflow Title",
    "labels.aiWorkflowBullets": "Bullet Points (one point per line)",
    "labels.languages": "Languages",
    "labels.certifications": "Certifications",
    "labels.interests": "Interests",
    "skills.aiWorkflowHeading": "Artificial Intelligence Workflow",
    "skills.aiWorkflowAdd": "Add AI Workflow",
    "skills.aiWorkflowEntry": "AI Workflow Entry",
    "tools.ats.heading": "ATS Meter Checker",
    "tools.ats.desc":
      "Score your resume structure and keyword readiness before sending applications.",
    "tools.ats.run": "Run ATS Check",
    "tools.ats.custom": "Optional: paste resume text",
    "tools.job.heading": "Job Match Analyzer",
    "tools.job.desc":
      "Paste a job title and description to estimate your CV match by keywords.",
    "tools.job.run": "Analyze Match",
    "tools.job.input": "Job title + job description",
    "tools.salary.heading": "Salary Transparency",
    "tools.salary.desc":
      "Contribute anonymous salary data locally and view aggregate insights.",
    "tools.salary.submit": "Submit salary information",
    "tools.salary.clear": "Clear salary records",
    "tools.salary.note":
      "Only anonymous aggregate data is displayed in this browser.",
    "tools.salary.country": "Country",
    "tools.salary.city": "City",
    "tools.salary.role": "Current role",
    "tools.salary.seniority": "Seniority",
    "tools.salary.contract": "Contract type",
    "tools.salary.modality": "Work modality",
    "tools.salary.currency": "Currency",
    "tools.salary.amount": "Gross salary",
    "tools.salary.years": "Years of experience",
    "tools.salary.other": "Additional context",
    "ph.fullName": "Jane Doe",
    "ph.professionalTitle": "Data Analyst",
    "ph.email": "jane.doe@email.com",
    "ph.phone": "+1 123 456 7890",
    "ph.location": "New York, NY",
    "ph.website": "linkedin.com/in/janedoe",
    "ph.github": "github.com/janedoe",
    "ph.summary": "Results-driven professional with experience in...",
    "ph.school": "Harvard University",
    "ph.degree": "B.S. in Computer Science",
    "ph.company": "ABC Company",
    "ph.role": "Software Engineer",
    "ph.projectName": "Inventory Dashboard",
    "ph.projectRole": "Full-Stack Developer",
    "ph.tech": "PHP, MySQL, JavaScript",
    "ph.link": "https://project-link.com",
    "ph.start": "Aug 2022",
    "ph.end": "May 2026 / Present",
    "ph.details": "Built a scalable module used by 10+ teams",
    "ph.organization": "Student Council",
    "ph.title": "Dean's List",
    "ph.issuer": "University",
    "ph.date": "Mar 2026",
    "ph.organizer": "Tech Community",
    "ph.skills": "Project management, SQL, Stakeholder communication",
    "ph.aiWorkflowTitle": "AI Resume Tailoring Workflow",
    "ph.aiWorkflowBullets":
      "Analyze job description requirements\nMap skills and achievements\nGenerate tailored resume bullet points",
    "ph.languages": "English (Fluent), Spanish (Conversational)",
    "ph.certifications": "Google Data Analytics Certificate",
    "ph.interests": "Community mentoring, AI for social impact",
  },
  es: {
    "hero.subtitle":
      "Crea un CV estilo Harvard y compatible con ATS en minutos.",
    "form.title": "Constructor de CV",
    "form.description":
      "Usa pestanas para completar cada seccion. La vista previa se actualiza al instante.",
    "actions.save": "Guardar",
    "actions.clear": "Limpiar",
    "actions.download": "Descargar PDF",
    "actions.themeDark": "Oscuro",
    "actions.themeLight": "Claro",
    "saveFiles.title": "Archivos Guardados",
    "saveFiles.slotName": "Nombre del archivo",
    "saveFiles.select": "Selecciona un archivo guardado",
    "saveFiles.save": "Guardar Archivo",
    "saveFiles.load": "Cargar Archivo",
    "saveFiles.delete": "Eliminar Archivo",
    "saveFiles.rename": "Renombrar Archivo",
    "saveFiles.empty": "No hay archivos guardados.",
    "saveFiles.savedAt": "Guardado",
    "saveFiles.slotPlaceholder": "Mi CV Slot",
    "saveFiles.customizeLayout": "Personalizar Diseno",
    "saveFiles.hideLayout": "Ocultar Controles de Diseno",
    "saveFiles.customizeOrder": "Orden de secciones del CV",
    "saveFiles.dragHint":
      "Arrastra secciones para personalizar el orden del CV Harvard.",
    "saveFiles.confirmLoad":
      "Cargar archivo seleccionado? Los cambios sin guardar se reemplazaran.",
    "saveFiles.confirmDelete": "Eliminar archivo guardado seleccionado?",
    "saveFiles.confirmOverwrite":
      "Ya existe un archivo con ese nombre. Reemplazarlo?",
    "saveFiles.saved": "Archivo guardado actualizado.",
    "saveFiles.loaded": "Archivo guardado cargado.",
    "saveFiles.deleted": "Archivo guardado eliminado.",
    "saveFiles.renamed": "Archivo guardado renombrado.",
    "privacy.title": "Privacidad Primero",
    "privacy.localOnly":
      "Los datos se guardan en tu navegador. El perfil personal puede sincronizarse con tu MySQL.",
    "privacy.noAccount": "Sin registro y sin crear cuenta.",
    "privacy.editAnytime":
      "Edita y adapta tu CV para cualquier vacante rapidamente.",
    "preview.title": "Vista Previa",
    "preview.description": "Estructura estilo Harvard y compatible con ATS.",
    "layout.standard": "CV Harvard Estandar",
    "layout.withPhoto": "CV Harvard con Foto",
    "section.personal": "Personal",
    "section.education": "Educacion",
    "section.experience": "Experiencia",
    "section.projects": "Proyectos",
    "section.leadership": "Liderazgo y Actividades",
    "section.honors": "Honores y Logros",
    "section.courses": "Cursos y Certificaciones",
    "section.trainings": "Capacitaciones y Seminarios",
    "section.skills": "Habilidades",
    "tools.title": "Herramientas de Carrera",
    "tools.ats": "Medidor ATS",
    "tools.jobMatch": "Analizador de Vacante",
    "tools.salary": "Transparencia Salarial",
    "add.education": "Agregar Educacion",
    "add.experience": "Agregar Experiencia",
    "add.projects": "Agregar Proyecto",
    "add.leadership": "Agregar Liderazgo",
    "add.honors": "Agregar Honor",
    "add.courses": "Agregar Curso",
    "add.trainings": "Agregar Capacitacion",
    remove: "Eliminar",
    "entry.education": "Registro de Educacion",
    "entry.experience": "Registro de Experiencia",
    "entry.projects": "Registro de Proyecto",
    "entry.leadership": "Registro de Liderazgo",
    "entry.honors": "Registro de Honor",
    "entry.courses": "Registro de Curso",
    "entry.trainings": "Registro de Capacitacion",
    "empty.preview":
      "Empieza a completar secciones para generar tu vista previa.",
    "clear.confirm": "Limpiar todos los datos guardados localmente?",
    "save.success": "Guardado localmente y sincronizado en MySQL.",
    "save.localOnly": "Guardado localmente. Fallo la sincronizacion MySQL.",
    "preview.summary": "Resumen Profesional",
    "preview.education": "Educacion",
    "preview.experience": "Experiencia",
    "preview.projects": "Proyectos",
    "preview.leadership": "Liderazgo y Actividades",
    "preview.honors": "Honores y Logros",
    "preview.courses": "Cursos y Certificaciones",
    "preview.trainings": "Capacitaciones y Seminarios",
    "preview.skills": "Habilidades",
    "preview.languages": "Idiomas",
    "preview.certifications": "Certificaciones",
    "preview.interests": "Intereses",
    "labels.fullName": "Nombre Completo",
    "labels.professionalTitle": "Titulo Profesional",
    "labels.email": "Correo",
    "labels.phone": "Telefono",
    "labels.location": "Ubicacion",
    "labels.website": "Sitio web o LinkedIn",
    "labels.github": "GitHub",
    "labels.summary": "Resumen Profesional",
    "labels.photo": "Foto de Perfil",
    "labels.school": "Institucion",
    "labels.degree": "Titulo / Programa",
    "labels.company": "Empresa",
    "labels.role": "Cargo",
    "labels.projectName": "Nombre del Proyecto",
    "labels.projectRole": "Tu Rol",
    "labels.tech": "Herramientas / Tecnologias",
    "labels.link": "Enlace",
    "labels.start": "Inicio",
    "labels.end": "Fin",
    "labels.details": "Logros / Detalles (un punto por linea)",
    "labels.organization": "Organizacion",
    "labels.title": "Titulo",
    "labels.issuer": "Institucion",
    "labels.date": "Fecha",
    "labels.organizer": "Organizador",
    "labels.skills": "Habilidades clave (un punto por linea)",
    "labels.languages": "Idiomas",
    "labels.certifications": "Certificaciones",
    "labels.interests": "Intereses",
    "tools.ats.heading": "Medidor ATS",
    "tools.ats.desc": "Evalua la estructura y palabras clave de tu CV.",
    "tools.ats.run": "Ejecutar analisis ATS",
    "tools.ats.custom": "Opcional: pega texto del CV",
    "tools.job.heading": "Analizador de Vacante",
    "tools.job.desc":
      "Pega el titulo y descripcion de una vacante para estimar el match por palabras clave.",
    "tools.job.run": "Analizar Match",
    "tools.job.input": "Titulo del puesto + descripcion",
    "tools.salary.heading": "Transparencia Salarial",
    "tools.salary.desc":
      "Agrega datos anonimos y revisa estadisticas agregadas locales.",
    "tools.salary.submit": "Enviar informacion salarial",
    "tools.salary.clear": "Limpiar registros salariales",
    "tools.salary.note":
      "Solo se muestran datos anonimos agregados en este navegador.",
    "tools.salary.country": "Pais",
    "tools.salary.city": "Ciudad",
    "tools.salary.role": "Rol actual",
    "tools.salary.seniority": "Senioridad",
    "tools.salary.contract": "Tipo de contrato",
    "tools.salary.modality": "Modalidad",
    "tools.salary.currency": "Moneda",
    "tools.salary.amount": "Salario bruto",
    "tools.salary.years": "Anos de experiencia",
    "tools.salary.other": "Contexto adicional",
    "ph.fullName": "Juana Perez",
    "ph.professionalTitle": "Analista de Datos",
    "ph.email": "juana.perez@email.com",
    "ph.phone": "+34 600 000 000",
    "ph.location": "Madrid, Espana",
    "ph.website": "linkedin.com/in/juanaperez",
    "ph.github": "github.com/juanaperez",
    "ph.summary": "Profesional orientada a resultados con experiencia en...",
    "ph.school": "Universidad Nacional",
    "ph.degree": "Ingenieria en Sistemas",
    "ph.company": "Empresa ABC",
    "ph.role": "Desarrolladora de Software",
    "ph.projectName": "Panel de Inventario",
    "ph.projectRole": "Desarrolladora Full-Stack",
    "ph.tech": "PHP, MySQL, JavaScript",
    "ph.link": "https://enlace-proyecto.com",
    "ph.start": "Ago 2022",
    "ph.end": "May 2026 / Actual",
    "ph.details": "Desarrolle un modulo escalable usado por 10+ equipos",
    "ph.organization": "Consejo Estudiantil",
    "ph.title": "Lista del Decano",
    "ph.issuer": "Universidad",
    "ph.date": "Mar 2026",
    "ph.organizer": "Comunidad Tech",
    "ph.skills": "Gestion de proyectos, SQL, Comunicacion con stakeholders",
    "ph.languages": "Espanol (Nativo), Ingles (Avanzado)",
    "ph.certifications": "Certificado en Analitica de Datos de Google",
    "ph.interests": "Mentoria comunitaria, IA para impacto social",
  },
  tl: {
    "hero.subtitle":
      "Gumawa ng Harvard-style resume na ATS-ready sa loob ng ilang minuto.",
    "form.title": "Resume Builder",
    "form.description": "Gamitin ang tabs para punan ang bawat seksyon.",
    "actions.save": "I-save",
    "actions.clear": "I-clear",
    "actions.download": "I-download PDF",
    "actions.themeDark": "Madilim",
    "actions.themeLight": "Maliwanag",
    "saveFiles.title": "Save Files",
    "saveFiles.slotName": "Pangalan ng slot",
    "saveFiles.select": "Pumili ng saved slot",
    "saveFiles.save": "Save Slot",
    "saveFiles.load": "Load Slot",
    "saveFiles.delete": "Delete Slot",
    "saveFiles.rename": "Rename Slot",
    "saveFiles.empty": "Wala pang save file.",
    "saveFiles.savedAt": "Na-save",
    "saveFiles.slotPlaceholder": "Resume Slot",
    "saveFiles.customizeLayout": "Ayusin ang Layout",
    "saveFiles.hideLayout": "Itago ang Layout Controls",
    "saveFiles.customizeOrder": "Ayos ng CV sections",
    "saveFiles.dragHint":
      "I-drag ang sections para ayusin ang Harvard CV order.",
    "saveFiles.confirmLoad":
      "I-load ang napiling save file? Mapapalitan ang unsaved changes.",
    "saveFiles.confirmDelete": "Burahin ang napiling save file?",
    "saveFiles.confirmOverwrite":
      "May slot na gamit ang pangalang ito. I-replace ito?",
    "saveFiles.saved": "Na-update ang save file.",
    "saveFiles.loaded": "Na-load ang save file.",
    "saveFiles.deleted": "Nabura ang save file.",
    "saveFiles.renamed": "Napalitan ang pangalan ng save file.",
    "privacy.title": "Privacy Muna",
    "privacy.localOnly":
      "Nasa browser mo lang ang data; puwedeng mag-sync sa sarili mong MySQL.",
    "privacy.noAccount": "Walang sign up at walang registration.",
    "privacy.editAnytime": "Madaling i-edit para sa iba-ibang trabaho.",
    "preview.title": "Live Preview",
    "preview.description": "Harvard-style at ATS-compatible na format.",
    "layout.standard": "Standard Harvard CV",
    "layout.withPhoto": "Harvard CV na may Larawan",
    "section.personal": "Personal",
    "section.education": "Edukasyon",
    "section.experience": "Karanasan",
    "section.leadership": "Pamumuno at Aktibidad",
    "section.projects": "Mga Proyekto",
    "section.skills": "Skills",
    "section.courses": "Mga Kurso at Sertipikasyon",
    "section.trainings": "Trainings at Seminar",
    "section.honors": "Parangal at Achievement",
    "tools.title": "Career Tools",
    "tools.ats": "ATS Meter",
    "tools.jobMatch": "Job Match Analyzer",
    "tools.salary": "Salary Transparency",
  },
};

const defaultState = {
  theme: getDefaultTheme(),
  language: "en",
  activeSectionTab: "personal",
  cvLayout: "standard",
  activeToolTab: "ats",
  personal: {
    fullName: "",
    professionalTitle: "",
    email: "",
    phone: "",
    location: "",
    website: "",
    github: "",
    summary: "",
    photoDataUrl: "",
  },
  education: [emptyEducation()],
  experience: [emptyExperience()],
  projects: [emptyProject()],
  leadership: [emptyLeadership()],
  honors: [emptyHonor()],
  courses: [emptyCourse()],
  trainings: [emptyTraining()],
  skills: "",
  aiWorkflow: [emptyAiWorkflow()],
  languages: "",
  certifications: "",
  interests: "",
  sectionOrder: [...PREVIEW_SECTION_ORDER_DEFAULT],
  showSectionOrderControls: false,
  saveSlots: {},
  selectedSaveSlot: "",
  jobDescription: "",
  salaryRecords: [],
};

let state = loadState();

const languageToggle = document.getElementById("languageToggle");
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const saveFilesPanel = document.getElementById("saveFilesPanel");

const personalSection = document.getElementById("personalSection");
const educationSection = document.getElementById("educationSection");
const experienceSection = document.getElementById("experienceSection");
const projectsSection = document.getElementById("projectsSection");
const leadershipSection = document.getElementById("leadershipSection");
const honorsSection = document.getElementById("honorsSection");
const coursesSection = document.getElementById("coursesSection");
const trainingsSection = document.getElementById("trainingsSection");
const skillsSection = document.getElementById("skillsSection");
const preview = document.getElementById("resumePreview");
const cvLayoutTabs = document.getElementById("cvLayoutTabs");

const debouncedSave = debounce(() => persistState(false), 500);

boot();

async function boot() {
  bindUIActions();
  applyTheme();
  applyStaticTranslations();
  await hydrateResumeFromDatabase();
  renderAll();
}

function bindUIActions() {
  themeToggle.addEventListener("click", () => {
    state.theme = state.theme === "dark" ? "light" : "dark";
    applyTheme();
    persistState(false);
    applyStaticTranslations();
  });

  languageToggle.addEventListener("click", () => {
    const order = ["en", "es", "tl"];
    const idx = order.indexOf(state.language);
    state.language = order[(idx + 1) % order.length];
    persistState(false);
    applyStaticTranslations();
    renderAll();
  });

  bindSectionTabs();
  bindCvLayoutTabs();
}

function bindCvLayoutTabs() {
  if (!cvLayoutTabs) {
    return;
  }

  const tabs = cvLayoutTabs.querySelectorAll(".cv-layout-tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const layout = clean(tab.getAttribute("data-cv-layout"));
      state.cvLayout = layout === "withPhoto" ? "withPhoto" : "standard";
      persistState(false);
      applyCvLayoutTabState();
      renderPreview();
    });
  });

  applyCvLayoutTabState();
}

function applyCvLayoutTabState() {
  if (!cvLayoutTabs) {
    return;
  }

  cvLayoutTabs.querySelectorAll(".cv-layout-tab").forEach((tab) => {
    tab.classList.toggle(
      "active",
      tab.getAttribute("data-cv-layout") === state.cvLayout,
    );
  });
}

function handleClearResume() {
  const ok = window.confirm(t("clear.confirm"));
  if (!ok) {
    return;
  }

  const currentSlots = state.saveSlots || {};
  state = structuredClone(defaultState);
  state.education = [emptyEducation()];
  state.experience = [emptyExperience()];
  state.projects = [emptyProject()];
  state.leadership = [emptyLeadership()];
  state.honors = [emptyHonor()];
  state.courses = [emptyCourse()];
  state.trainings = [emptyTraining()];
  state.aiWorkflow = [emptyAiWorkflow()];
  state.sectionOrder = [...PREVIEW_SECTION_ORDER_DEFAULT];
  state.saveSlots = currentSlots;
  persistState(false);
  renderAll();
}

function handleDownloadPdf() {
  window.print();
}

function bindSectionTabs() {
  const tabs = document.querySelectorAll(".section-tab");
  const panels = document.querySelectorAll("[data-tab-panel]");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.getAttribute("data-tab-target");
      state.activeSectionTab = target || "personal";
      tabs.forEach((tNode) => tNode.classList.toggle("active", tNode === tab));
      panels.forEach((panel) => {
        panel.classList.toggle(
          "active",
          panel.getAttribute("data-tab-panel") === state.activeSectionTab,
        );
      });
      persistState(false);
    });
  });

  applySectionTabState();
}

function bindToolTabs() {
  const tabs = document.querySelectorAll(".tool-tab");
  const panels = document.querySelectorAll("[data-tool-panel]");

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.getAttribute("data-tool-target");
      state.activeToolTab = target || "ats";
      tabs.forEach((tNode) => tNode.classList.toggle("active", tNode === tab));
      panels.forEach((panel) => {
        panel.classList.toggle(
          "active",
          panel.getAttribute("data-tool-panel") === state.activeToolTab,
        );
      });
      persistState(false);
    });
  });

  applyToolTabState();
}

function applySectionTabState() {
  document.querySelectorAll(".section-tab").forEach((tab) => {
    tab.classList.toggle(
      "active",
      tab.getAttribute("data-tab-target") === state.activeSectionTab,
    );
  });

  document.querySelectorAll("[data-tab-panel]").forEach((panel) => {
    panel.classList.toggle(
      "active",
      panel.getAttribute("data-tab-panel") === state.activeSectionTab,
    );
  });
}

function applyToolTabState() {
  document.querySelectorAll(".tool-tab").forEach((tab) => {
    tab.classList.toggle(
      "active",
      tab.getAttribute("data-tool-target") === state.activeToolTab,
    );
  });

  document.querySelectorAll("[data-tool-panel]").forEach((panel) => {
    panel.classList.toggle(
      "active",
      panel.getAttribute("data-tool-panel") === state.activeToolTab,
    );
  });
}

function renderAll() {
  renderSaveFilesPanel();
  renderPersonalSection();
  renderDynamicSection("education", educationSection, [
    { key: "school", type: "text" },
    { key: "degree", type: "text" },
    { key: "location", type: "text" },
    { key: "start", type: "text" },
    { key: "end", type: "text" },
    { key: "details", type: "textarea" },
  ]);
  renderDynamicSection("experience", experienceSection, [
    { key: "company", type: "text" },
    { key: "role", type: "text" },
    { key: "location", type: "text" },
    { key: "start", type: "text" },
    { key: "end", type: "text" },
    { key: "details", type: "textarea" },
  ]);
  renderDynamicSection("leadership", leadershipSection, [
    { key: "organization", type: "text" },
    { key: "role", type: "text" },
    { key: "location", type: "text" },
    { key: "start", type: "text" },
    { key: "end", type: "text" },
    { key: "details", type: "textarea" },
  ]);
  renderDynamicSection("projects", projectsSection, [
    { key: "projectName", type: "text" },
    { key: "projectRole", type: "text" },
    { key: "tech", type: "text" },
    { key: "link", type: "text" },
    { key: "start", type: "text" },
    { key: "end", type: "text" },
    { key: "details", type: "textarea" },
  ]);
  renderSkillsSection();
  renderDynamicSection("courses", coursesSection, [
    { key: "title", type: "text" },
    { key: "issuer", type: "text" },
    { key: "date", type: "text" },
    { key: "details", type: "textarea" },
  ]);
  renderDynamicSection("trainings", trainingsSection, [
    { key: "title", type: "text" },
    { key: "organizer", type: "text" },
    { key: "date", type: "text" },
    { key: "details", type: "textarea" },
  ]);
  renderDynamicSection("honors", honorsSection, [
    { key: "title", type: "text" },
    { key: "issuer", type: "text" },
    { key: "date", type: "text" },
    { key: "details", type: "textarea" },
  ]);
  renderPreview();
  applySectionTabState();
  applyCvLayoutTabState();
}

function renderSaveFilesPanel() {
  if (!saveFilesPanel) {
    return;
  }

  state.sectionOrder = sanitizeSectionOrder(state.sectionOrder);

  const slotKeys = Object.keys(state.saveSlots || {}).sort((a, b) =>
    a.localeCompare(b),
  );

  saveFilesPanel.innerHTML = `
    <h3>${t("saveFiles.title")}</h3>
    <div class="save-files-row">
      <input id="saveSlotNameInput" type="text" placeholder="${t("saveFiles.slotPlaceholder")}">
      <select id="saveSlotSelect">
        <option value="">${t("saveFiles.select")}</option>
        ${slotKeys
          .map(
            (key) =>
              `<option value="${esc(key)}" ${state.selectedSaveSlot === key ? "selected" : ""}>${esc(key)}</option>`,
          )
          .join("")}
      </select>
    </div>
    <div class="save-files-actions">
      <button id="saveSlotBtn" class="btn btn-secondary" type="button">${t("saveFiles.save")}</button>
      <button id="loadSlotBtn" class="btn btn-ghost" type="button">${t("saveFiles.load")}</button>
      <button id="deleteSlotBtn" class="btn btn-ghost" type="button">${t("saveFiles.delete")}</button>
      <button id="renameSlotBtn" class="btn btn-ghost" type="button">${t("saveFiles.rename")}</button>
    </div>
    <div class="save-files-secondary-actions">
      <button id="clearResumeBtn" class="btn btn-ghost" type="button">${t("actions.clear")}</button>
      <button id="downloadPdfBtn" class="btn btn-primary" type="button">${t("actions.download")}</button>
    </div>
    <div class="save-files-list">${renderSaveSlotSummary(slotKeys)}</div>
    <div class="save-files-layout-toggle-wrap">
      <button id="toggleLayoutControlsBtn" class="btn btn-ghost save-files-layout-toggle" type="button">
        ${state.showSectionOrderControls ? t("saveFiles.hideLayout") : t("saveFiles.customizeLayout")}
      </button>
    </div>
    <div class="save-files-order">
      <p class="save-files-order-title">${t("saveFiles.customizeOrder")}</p>
      <p class="save-files-order-hint">${t("saveFiles.dragHint")}</p>
      <div class="section-order-list ${state.showSectionOrderControls ? "active" : ""}" id="sectionOrderList">
        ${state.sectionOrder
          .map(
            (sectionKey) => `
              <button class="section-order-item" type="button" draggable="true" data-section-key="${esc(sectionKey)}">
                <span class="section-order-handle" aria-hidden="true">::</span>
                <span>${esc(getPreviewSectionLabel(sectionKey))}</span>
              </button>
            `,
          )
          .join("")}
      </div>
    </div>
  `;

  const slotNameInput = document.getElementById("saveSlotNameInput");
  const slotSelect = document.getElementById("saveSlotSelect");

  slotNameInput.value = state.selectedSaveSlot || "";

  slotSelect.addEventListener("change", (event) => {
    state.selectedSaveSlot = clean(event.target.value);
    persistState(false);
    slotNameInput.value = state.selectedSaveSlot;
  });

  document.getElementById("saveSlotBtn").addEventListener("click", async () => {
    const slotName = clean(slotNameInput.value || state.selectedSaveSlot);
    if (!slotName) {
      window.alert(t("saveFiles.slotName"));
      return;
    }

    state.saveSlots[slotName] = {
      savedAt: new Date().toISOString(),
      state: buildSaveSnapshot(),
    };
    state.selectedSaveSlot = slotName;
    persistState(false);
    renderSaveFilesPanel();
    await finalizeSlotMutation("saveFiles.saved");
  });

  document.getElementById("loadSlotBtn").addEventListener("click", () => {
    const slotName = clean(slotSelect.value || state.selectedSaveSlot);
    if (!slotName || !state.saveSlots[slotName]) {
      return;
    }

    if (!window.confirm(t("saveFiles.confirmLoad"))) {
      return;
    }

    const snapshot = state.saveSlots[slotName].state;
    applySnapshotToState(snapshot);
    state.selectedSaveSlot = slotName;
    persistState(false);
    applyStaticTranslations();
    renderAll();
    window.alert(t("saveFiles.loaded"));
  });

  document
    .getElementById("deleteSlotBtn")
    .addEventListener("click", async () => {
      const slotName = clean(slotSelect.value || state.selectedSaveSlot);
      if (!slotName || !state.saveSlots[slotName]) {
        return;
      }

      if (!window.confirm(t("saveFiles.confirmDelete"))) {
        return;
      }

      delete state.saveSlots[slotName];
      if (state.selectedSaveSlot === slotName) {
        state.selectedSaveSlot = "";
      }
      persistState(false);
      renderSaveFilesPanel();
      await finalizeSlotMutation("saveFiles.deleted");
    });

  document
    .getElementById("renameSlotBtn")
    .addEventListener("click", async () => {
      const currentSlotName = clean(
        slotSelect.value || state.selectedSaveSlot || slotNameInput.value,
      );

      if (!currentSlotName || !state.saveSlots[currentSlotName]) {
        window.alert(t("saveFiles.select"));
        return;
      }

      let nextSlotName = clean(slotNameInput.value);
      if (!nextSlotName || nextSlotName === currentSlotName) {
        const promptedName = window.prompt(
          t("saveFiles.slotName"),
          currentSlotName,
        );
        nextSlotName = clean(promptedName);
      }

      if (!nextSlotName) {
        window.alert(t("saveFiles.slotName"));
        return;
      }

      if (
        currentSlotName !== nextSlotName &&
        state.saveSlots[nextSlotName] &&
        !window.confirm(t("saveFiles.confirmOverwrite"))
      ) {
        return;
      }

      state.saveSlots[nextSlotName] = state.saveSlots[currentSlotName];
      if (nextSlotName !== currentSlotName) {
        delete state.saveSlots[currentSlotName];
      }
      state.selectedSaveSlot = nextSlotName;
      persistState(false);
      renderSaveFilesPanel();
      await finalizeSlotMutation("saveFiles.renamed");
    });

  document
    .getElementById("clearResumeBtn")
    .addEventListener("click", handleClearResume);
  document
    .getElementById("downloadPdfBtn")
    .addEventListener("click", handleDownloadPdf);

  document
    .getElementById("toggleLayoutControlsBtn")
    .addEventListener("click", () => {
      state.showSectionOrderControls = !state.showSectionOrderControls;
      persistState(false);
      renderSaveFilesPanel();
    });

  bindSectionOrderInteractions();
}

async function finalizeSlotMutation(successMessageKey) {
  const syncResult = await syncResumeToDatabase();
  if (syncResult.ok) {
    window.alert(t(successMessageKey));
    return;
  }

  const remoteConfirmed = await verifyRemoteSlotSync();
  if (remoteConfirmed) {
    window.alert(t(successMessageKey));
    return;
  }

  window.alert(
    `${t(successMessageKey)}\n${t("save.localOnly")}\n${syncResult.message}`,
  );
}

async function verifyRemoteSlotSync() {
  try {
    const response = await fetch("../backend/load_resume.php", {
      method: "GET",
      headers: { Accept: "application/json" },
    });

    if (!response.ok) {
      return false;
    }

    const payload = await response.json().catch(() => ({}));
    if (!payload || payload.ok !== true || !payload.state) {
      return false;
    }

    const remoteSlots =
      payload.state.saveSlots && typeof payload.state.saveSlots === "object"
        ? payload.state.saveSlots
        : {};
    const localSlots =
      state.saveSlots && typeof state.saveSlots === "object"
        ? state.saveSlots
        : {};

    if (!haveSameSlotNames(localSlots, remoteSlots)) {
      return false;
    }

    const expectedSelected = clean(state.selectedSaveSlot || "");
    const remoteSelected = clean(payload.state.selectedSaveSlot || "");

    return !expectedSelected || expectedSelected === remoteSelected;
  } catch (error) {
    return false;
  }
}

function haveSameSlotNames(localSlots, remoteSlots) {
  const localKeys = Object.keys(localSlots).sort((a, b) => a.localeCompare(b));
  const remoteKeys = Object.keys(remoteSlots).sort((a, b) =>
    a.localeCompare(b),
  );

  if (localKeys.length !== remoteKeys.length) {
    return false;
  }

  return localKeys.every((key, index) => key === remoteKeys[index]);
}

function bindSectionOrderInteractions() {
  const orderItems = document.querySelectorAll(".section-order-item");
  let draggedSectionKey = "";

  orderItems.forEach((item) => {
    item.addEventListener("dragstart", () => {
      draggedSectionKey = item.dataset.sectionKey || "";
      item.classList.add("dragging");
    });

    item.addEventListener("dragend", () => {
      draggedSectionKey = "";
      item.classList.remove("dragging");
      document
        .querySelectorAll(".section-order-item")
        .forEach((node) => node.classList.remove("drag-over"));
    });

    item.addEventListener("dragover", (event) => {
      event.preventDefault();
      item.classList.add("drag-over");
    });

    item.addEventListener("dragleave", () => {
      item.classList.remove("drag-over");
    });

    item.addEventListener("drop", (event) => {
      event.preventDefault();
      item.classList.remove("drag-over");
      const targetSectionKey = item.dataset.sectionKey || "";

      if (
        !draggedSectionKey ||
        !targetSectionKey ||
        draggedSectionKey === targetSectionKey
      ) {
        return;
      }

      const order = sanitizeSectionOrder(state.sectionOrder);
      const fromIndex = order.indexOf(draggedSectionKey);
      const toIndex = order.indexOf(targetSectionKey);
      if (fromIndex < 0 || toIndex < 0) {
        return;
      }

      const moved = order.splice(fromIndex, 1)[0];
      order.splice(toIndex, 0, moved);
      state.sectionOrder = order;
      persistState(false);
      renderSaveFilesPanel();
      renderPreview();
    });
  });
}

function getPreviewSectionLabel(sectionKey) {
  if (sectionKey === "summary") {
    return t("preview.summary");
  }
  return t(`preview.${sectionKey}`);
}

function sanitizeSectionOrder(order) {
  const seen = new Set();
  const source = Array.isArray(order) ? order : [];
  const result = [];

  source.forEach((key) => {
    const cleaned = clean(key);
    if (!PREVIEW_SECTION_ORDER_DEFAULT.includes(cleaned) || seen.has(cleaned)) {
      return;
    }
    seen.add(cleaned);
    result.push(cleaned);
  });

  PREVIEW_SECTION_ORDER_DEFAULT.forEach((key) => {
    if (!seen.has(key)) {
      result.push(key);
    }
  });

  return result;
}

function renderSaveSlotSummary(slotKeys) {
  if (!slotKeys.length) {
    return t("saveFiles.empty");
  }

  return slotKeys
    .slice(0, 4)
    .map((key) => {
      const savedAt = state.saveSlots[key]?.savedAt;
      const dateLabel = savedAt ? new Date(savedAt).toLocaleString() : "";
      return `${esc(key)} - ${t("saveFiles.savedAt")}: ${esc(dateLabel)}`;
    })
    .join("<br>");
}

function buildSaveSnapshot() {
  const snapshot = getSanitizedStateForSave();
  return {
    ...snapshot,
    saveSlots: {},
    selectedSaveSlot: "",
  };
}

function applySnapshotToState(snapshot) {
  const currentSlots = state.saveSlots || {};

  state = {
    ...structuredClone(defaultState),
    ...snapshot,
    cvLayout: snapshot.cvLayout === "withPhoto" ? "withPhoto" : "standard",
    personal: {
      ...structuredClone(defaultState.personal),
      ...(snapshot.personal || {}),
    },
    education: sanitizeArray(snapshot.education, emptyEducation),
    experience: sanitizeArray(snapshot.experience, emptyExperience),
    projects: sanitizeArray(snapshot.projects, emptyProject),
    leadership: sanitizeArray(snapshot.leadership, emptyLeadership),
    honors: sanitizeArray(snapshot.honors, emptyHonor),
    courses: sanitizeArray(snapshot.courses, emptyCourse),
    trainings: sanitizeArray(snapshot.trainings, emptyTraining),
    aiWorkflow: sanitizeArray(snapshot.aiWorkflow, emptyAiWorkflow),
    sectionOrder: sanitizeSectionOrder(snapshot.sectionOrder),
    salaryRecords: Array.isArray(snapshot.salaryRecords)
      ? snapshot.salaryRecords
      : [],
    saveSlots: currentSlots,
  };
}

function renderPersonalSection() {
  const fields = [
    "fullName",
    "professionalTitle",
    "email",
    "phone",
    "location",
    "website",
    "github",
    "summary",
  ];

  personalSection.innerHTML = `
    <div class="section-head"><h3>${t("section.personal")}</h3></div>
    <div class="grid-two" id="personalGrid"></div>
  `;

  const grid = personalSection.querySelector("#personalGrid");
  fields.forEach((field) => {
    const isSummary = field === "summary";
    const wrap = document.createElement("div");
    wrap.className = "input-wrap";
    if (isSummary) {
      wrap.style.gridColumn = "1 / -1";
    }

    wrap.innerHTML = `
      <label for="personal-${field}">${t(`labels.${field}`)}</label>
      ${
        isSummary
          ? `<textarea id="personal-${field}" placeholder="${t(`ph.${field}`)}"></textarea>`
          : `<input id="personal-${field}" type="text" placeholder="${t(`ph.${field}`)}">`
      }
    `;

    const control = wrap.querySelector(isSummary ? "textarea" : "input");
    control.value = state.personal[field] || "";
    control.addEventListener("input", (event) => {
      state.personal[field] = event.target.value;
      debouncedSave();
      renderPreview();
    });
    grid.appendChild(wrap);
  });

  const photoWrap = document.createElement("div");
  photoWrap.className = "input-wrap";
  photoWrap.style.gridColumn = "1 / -1";
  photoWrap.innerHTML = `
    <label for="personal-photo">${t("labels.photo")}</label>
    <input id="personal-photo" type="file" accept="image/*">
    ${clean(state.personal.photoDataUrl) ? `<button id="removePhotoBtn" class="btn btn-ghost" type="button" style="margin-top: 8px;">${t("remove")}</button>` : ""}
  `;
  grid.appendChild(photoWrap);

  const photoInput = document.getElementById("personal-photo");
  photoInput.addEventListener("change", (event) => {
    const [file] = event.target.files || [];
    if (!file) {
      return;
    }
    if (!file.type.startsWith("image/")) {
      window.alert("Please upload a valid image file.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      state.personal.photoDataUrl = clean(reader.result);
      persistState(false);
      renderAll();
    };
    reader.readAsDataURL(file);
  });

  const removePhotoBtn = document.getElementById("removePhotoBtn");
  if (removePhotoBtn) {
    removePhotoBtn.addEventListener("click", () => {
      state.personal.photoDataUrl = "";
      persistState(false);
      renderAll();
    });
  }
}

function renderDynamicSection(sectionKey, container, schema) {
  container.innerHTML = `
    <div class="section-head">
      <h3>${t(`section.${sectionKey}`)}</h3>
      <button class="add-btn" type="button">${t(`add.${sectionKey}`)}</button>
    </div>
    <div class="entries"></div>
  `;

  const entriesWrap = container.querySelector(".entries");
  container.querySelector(".add-btn").addEventListener("click", () => {
    state[sectionKey].push(createEntryBySection(sectionKey));
    persistState(false);
    renderAll();
  });

  let draggedIndex = null;

  state[sectionKey].forEach((entry, index) => {
    const block = document.createElement("div");
    block.className = "entry-block";
    block.draggable = true;
    block.dataset.index = String(index);
    block.innerHTML = `
      <div class="entry-header">
        <span class="entry-title">${t(`entry.${sectionKey}`)} ${index + 1}</span>
        <button class="remove-btn" type="button">${t("remove")}</button>
      </div>
      <div class="grid-two"></div>
    `;

    const removeBtn = block.querySelector(".remove-btn");
    removeBtn.disabled = state[sectionKey].length === 1;
    removeBtn.addEventListener("click", () => {
      state[sectionKey].splice(index, 1);
      if (!state[sectionKey].length) {
        state[sectionKey].push(createEntryBySection(sectionKey));
      }
      persistState(false);
      renderAll();
    });

    block.addEventListener("dragstart", () => {
      draggedIndex = index;
      block.classList.add("dragging");
    });

    block.addEventListener("dragend", () => {
      draggedIndex = null;
      block.classList.remove("dragging");
      container
        .querySelectorAll(".entry-block")
        .forEach((node) => node.classList.remove("drag-over"));
    });

    block.addEventListener("dragover", (event) => {
      event.preventDefault();
      block.classList.add("drag-over");
    });

    block.addEventListener("dragleave", () => {
      block.classList.remove("drag-over");
    });

    block.addEventListener("drop", (event) => {
      event.preventDefault();
      block.classList.remove("drag-over");

      const dropIndex = Number(block.dataset.index);
      if (
        draggedIndex === null ||
        Number.isNaN(dropIndex) ||
        draggedIndex === dropIndex
      ) {
        return;
      }

      const moved = state[sectionKey].splice(draggedIndex, 1)[0];
      state[sectionKey].splice(dropIndex, 0, moved);
      persistState(false);
      renderAll();
    });

    const grid = block.querySelector(".grid-two");
    schema.forEach((field) => {
      const wrap = document.createElement("div");
      wrap.className = "input-wrap";
      if (field.type === "textarea") {
        wrap.style.gridColumn = "1 / -1";
      }

      const id = `${sectionKey}-${index}-${field.key}`;
      wrap.innerHTML = `
        <label for="${id}">${t(`labels.${field.key}`)}</label>
        ${
          field.type === "textarea"
            ? `<textarea id="${id}" placeholder="${t(`ph.${field.key}`)}"></textarea>`
            : `<input id="${id}" type="text" placeholder="${t(`ph.${field.key}`)}">`
        }
      `;

      const control = wrap.querySelector(
        field.type === "textarea" ? "textarea" : "input",
      );
      control.value = entry[field.key] || "";
      control.addEventListener("input", (event) => {
        state[sectionKey][index][field.key] = event.target.value;
        debouncedSave();
        renderPreview();
      });
      grid.appendChild(wrap);
    });
    entriesWrap.appendChild(block);
  });
}

function renderSkillsSection() {
  skillsSection.innerHTML = `
    <div class="section-head"><h3>${t("section.skills")}</h3></div>
    <div class="input-wrap">
      <label for="skillsInput">${t("labels.skills")}</label>
      <textarea id="skillsInput" placeholder="${t("ph.skills")}"></textarea>
    </div>
    <div class="input-wrap">
      <label for="languagesInput">${t("labels.languages")}</label>
      <input id="languagesInput" type="text" placeholder="${t("ph.languages")}">
    </div>
    <div class="input-wrap">
      <label for="interestsInput">${t("labels.interests")}</label>
      <input id="interestsInput" type="text" placeholder="${t("ph.interests")}">
    </div>
    <div class="section-head">
      <h3>${t("skills.aiWorkflowHeading")}</h3>
      <button id="addAiWorkflowBtn" class="add-btn" type="button">${t("skills.aiWorkflowAdd")}</button>
    </div>
    <div id="aiWorkflowEntries" class="entries"></div>
  `;

  const skillsInput = document.getElementById("skillsInput");
  const languagesInput = document.getElementById("languagesInput");
  const interestsInput = document.getElementById("interestsInput");
  const addAiWorkflowBtn = document.getElementById("addAiWorkflowBtn");
  const aiWorkflowEntries = document.getElementById("aiWorkflowEntries");

  skillsInput.value = state.skills;
  languagesInput.value = state.languages;
  interestsInput.value = state.interests;

  skillsInput.addEventListener("input", (e) =>
    updateSimpleField("skills", e.target.value),
  );
  languagesInput.addEventListener("input", (e) =>
    updateSimpleField("languages", e.target.value),
  );
  interestsInput.addEventListener("input", (e) =>
    updateSimpleField("interests", e.target.value),
  );

  addAiWorkflowBtn.addEventListener("click", () => {
    state.aiWorkflow.push(emptyAiWorkflow());
    persistState(false);
    renderAll();
  });

  let draggedIndex = null;
  state.aiWorkflow.forEach((entry, index) => {
    const block = document.createElement("div");
    block.className = "entry-block";
    block.draggable = true;
    block.dataset.index = String(index);
    block.innerHTML = `
      <div class="entry-head">
        <h4>${t("skills.aiWorkflowEntry")} ${index + 1}</h4>
        <button class="remove-btn" type="button">${t("remove")}</button>
      </div>
      <div class="grid-two">
        <div class="input-wrap">
          <label for="aiWorkflow-${index}-title">${t("labels.aiWorkflowTitle")}</label>
          <input id="aiWorkflow-${index}-title" type="text" placeholder="${t("ph.aiWorkflowTitle")}">
        </div>
        <div class="input-wrap" style="grid-column: 1 / -1;">
          <label for="aiWorkflow-${index}-details">${t("labels.aiWorkflowBullets")}</label>
          <textarea id="aiWorkflow-${index}-details" placeholder="${t("ph.aiWorkflowBullets")}"></textarea>
        </div>
      </div>
    `;

    block.querySelector(".remove-btn").addEventListener("click", () => {
      state.aiWorkflow.splice(index, 1);
      if (!state.aiWorkflow.length) {
        state.aiWorkflow.push(emptyAiWorkflow());
      }
      persistState(false);
      renderAll();
    });

    const titleInput = block.querySelector(`#aiWorkflow-${index}-title`);
    const detailsInput = block.querySelector(`#aiWorkflow-${index}-details`);

    titleInput.value = entry.title || "";
    detailsInput.value = entry.details || "";

    titleInput.addEventListener("input", (event) => {
      state.aiWorkflow[index].title = event.target.value;
      debouncedSave();
      renderPreview();
    });

    detailsInput.addEventListener("input", (event) => {
      state.aiWorkflow[index].details = event.target.value;
      debouncedSave();
      renderPreview();
    });

    block.addEventListener("dragstart", () => {
      draggedIndex = index;
      block.classList.add("dragging");
    });

    block.addEventListener("dragend", () => {
      draggedIndex = null;
      block.classList.remove("dragging");
    });

    block.addEventListener("dragover", (event) => {
      event.preventDefault();
      block.classList.add("drag-over");
    });

    block.addEventListener("dragleave", () => {
      block.classList.remove("drag-over");
    });

    block.addEventListener("drop", () => {
      block.classList.remove("drag-over");
      if (draggedIndex === null || draggedIndex === index) {
        return;
      }

      const items = [...state.aiWorkflow];
      const [moved] = items.splice(draggedIndex, 1);
      items.splice(index, 0, moved);
      state.aiWorkflow = items;
      persistState(false);
      renderAll();
    });

    aiWorkflowEntries.appendChild(block);
  });
}

function renderAtsPanel() {
  atsPanel.innerHTML = `
    <div class="tool-card">
      <h4>${t("tools.ats.heading")}</h4>
      <p>${t("tools.ats.desc")}</p>
      <div class="input-wrap">
        <label for="atsCustomText">${t("tools.ats.custom")}</label>
        <textarea id="atsCustomText" placeholder="${t("tools.ats.custom")}"></textarea>
      </div>
      <div class="toolbar-inline">
        <button id="runAtsBtn" class="btn btn-primary" type="button">${t("tools.ats.run")}</button>
      </div>
      <div class="meter-wrap">
        <div class="meter-track"><div id="atsMeterBar" class="meter-bar"></div></div>
        <div class="meter-meta"><span id="atsScoreLabel">0 / 100</span><span id="atsBandLabel">Not analyzed</span></div>
      </div>
      <ul id="atsFeedback" class="analysis-list"></ul>
    </div>
  `;

  const runBtn = document.getElementById("runAtsBtn");
  const customText = document.getElementById("atsCustomText");
  runBtn.addEventListener("click", () => {
    const result = runAtsScan(customText.value);
    updateAtsResult(result);
  });

  updateAtsResult(runAtsScan(""));
}

function renderJobMatchPanel() {
  jobMatchPanel.innerHTML = `
    <div class="tool-card">
      <h4>${t("tools.job.heading")}</h4>
      <p>${t("tools.job.desc")}</p>
      <div class="input-wrap">
        <label for="jobDescInput">${t("tools.job.input")}</label>
        <textarea id="jobDescInput" placeholder="${t("tools.job.input")}"></textarea>
      </div>
      <div class="toolbar-inline">
        <button id="runJobMatchBtn" class="btn btn-primary" type="button">${t("tools.job.run")}</button>
      </div>
      <div class="result-box">
        <p id="jobMatchScore" class="result-score">0%</p>
        <div class="meter-track"><div id="jobMatchBar" class="meter-bar"></div></div>
        <div class="note" id="jobMatchMeta">No analysis yet.</div>
        <div class="chip-list" id="jobMatchedChips"></div>
        <div class="chip-list" id="jobMissingChips"></div>
      </div>
    </div>
  `;

  const jobInput = document.getElementById("jobDescInput");
  const runBtn = document.getElementById("runJobMatchBtn");
  jobInput.value = state.jobDescription || "";

  jobInput.addEventListener("input", (event) => {
    state.jobDescription = event.target.value;
    debouncedSave();
  });

  runBtn.addEventListener("click", () => {
    updateJobMatchResult(analyzeJobMatch(state.jobDescription));
  });
}

function renderSalaryPanel() {
  salaryPanel.innerHTML = `
    <div class="tool-card">
      <h4>${t("tools.salary.heading")}</h4>
      <p>${t("tools.salary.desc")}</p>
      <div class="salary-grid">
        <div class="input-wrap"><label for="salaryCountry">${t("tools.salary.country")}</label><input id="salaryCountry" type="text"></div>
        <div class="input-wrap"><label for="salaryCity">${t("tools.salary.city")}</label><input id="salaryCity" type="text"></div>
        <div class="input-wrap"><label for="salaryRole">${t("tools.salary.role")}</label><input id="salaryRole" type="text"></div>
        <div class="input-wrap"><label for="salarySeniority">${t("tools.salary.seniority")}</label><input id="salarySeniority" type="text"></div>
        <div class="input-wrap"><label for="salaryContract">${t("tools.salary.contract")}</label><input id="salaryContract" type="text"></div>
        <div class="input-wrap"><label for="salaryModality">${t("tools.salary.modality")}</label><input id="salaryModality" type="text"></div>
        <div class="input-wrap"><label for="salaryCurrency">${t("tools.salary.currency")}</label><input id="salaryCurrency" type="text" placeholder="USD"></div>
        <div class="input-wrap"><label for="salaryAmount">${t("tools.salary.amount")}</label><input id="salaryAmount" type="number" min="0" step="0.01"></div>
        <div class="input-wrap"><label for="salaryYears">${t("tools.salary.years")}</label><input id="salaryYears" type="number" min="0" step="0.1"></div>
      </div>
      <div class="input-wrap"><label for="salaryOther">${t("tools.salary.other")}</label><textarea id="salaryOther"></textarea></div>
      <div class="toolbar-inline">
        <button id="salarySubmitBtn" class="btn btn-primary" type="button">${t("tools.salary.submit")}</button>
        <button id="salaryClearBtn" class="btn btn-ghost" type="button">${t("tools.salary.clear")}</button>
      </div>
      <p class="note">${t("tools.salary.note")}</p>
      <div id="salaryStats" class="result-box"></div>
      <div id="salaryList" class="salary-list"></div>
    </div>
  `;

  document.getElementById("salarySubmitBtn").addEventListener("click", () => {
    const record = {
      country: clean(document.getElementById("salaryCountry").value),
      city: clean(document.getElementById("salaryCity").value),
      role: clean(document.getElementById("salaryRole").value),
      seniority: clean(document.getElementById("salarySeniority").value),
      contract: clean(document.getElementById("salaryContract").value),
      modality: clean(document.getElementById("salaryModality").value),
      currency: clean(document.getElementById("salaryCurrency").value || "USD"),
      amount: Number(document.getElementById("salaryAmount").value || 0),
      years: Number(document.getElementById("salaryYears").value || 0),
      other: clean(document.getElementById("salaryOther").value),
      createdAt: new Date().toISOString(),
    };

    if (
      !record.role ||
      !record.country ||
      !record.currency ||
      !(record.amount > 0)
    ) {
      window.alert("Please fill role, country, currency, and gross salary.");
      return;
    }

    state.salaryRecords.unshift(record);
    state.salaryRecords = state.salaryRecords.slice(0, 100);
    persistState(false);
    renderSalaryPanel();
  });

  document.getElementById("salaryClearBtn").addEventListener("click", () => {
    state.salaryRecords = [];
    persistState(false);
    renderSalaryPanel();
  });

  updateSalaryInsights();
}

function updateSalaryInsights() {
  const statsEl = document.getElementById("salaryStats");
  const listEl = document.getElementById("salaryList");
  const entries = state.salaryRecords || [];

  if (!entries.length) {
    statsEl.innerHTML = `<p class="note">No salary records yet.</p>`;
    listEl.innerHTML = "";
    return;
  }

  const latestCurrency = entries[0].currency;
  const sameCurrency = entries.filter(
    (entry) => entry.currency === latestCurrency,
  );
  const amounts = sameCurrency
    .map((entry) => entry.amount)
    .filter((amount) => amount > 0)
    .sort((a, b) => a - b);
  const min = amounts[0] || 0;
  const max = amounts[amounts.length - 1] || 0;
  const median =
    amounts.length % 2 === 1
      ? amounts[(amounts.length - 1) / 2]
      : (amounts[amounts.length / 2 - 1] + amounts[amounts.length / 2]) / 2;

  statsEl.innerHTML = `
    <p class="note">${sameCurrency.length} records in ${esc(latestCurrency)}</p>
    <p><strong>Min:</strong> ${formatMoney(min, latestCurrency)} | <strong>Median:</strong> ${formatMoney(median, latestCurrency)} | <strong>Max:</strong> ${formatMoney(max, latestCurrency)}</p>
  `;

  listEl.innerHTML = entries
    .slice(0, 8)
    .map(
      (entry) => `
    <div class="salary-item">
      <strong>${esc(entry.role)}</strong> - ${esc(entry.seniority || "n/a")}<br>
      ${esc(entry.country)}${entry.city ? `, ${esc(entry.city)}` : ""} | ${formatMoney(entry.amount, entry.currency)} | ${esc(entry.modality || "n/a")}
    </div>
  `,
    )
    .join("");
}

function runAtsScan(customText) {
  const resumeText = clean(customText) || getResumePlainText();
  const words = resumeText.split(/\s+/).filter(Boolean);
  const wordCount = words.length;

  const contactScore =
    [
      state.personal.email,
      state.personal.phone,
      state.personal.location,
      state.personal.website,
    ]
      .map(clean)
      .filter(Boolean).length * 5;
  const presentSections = [
    clean(state.personal.summary),
    hasEntries(state.education, ["school", "degree", "details"]),
    hasEntries(state.experience, ["company", "role", "details"]),
    hasEntries(state.projects, ["projectName", "details"]),
    hasEntries(state.leadership, ["organization", "role", "details"]),
    hasEntries(state.honors, ["title", "issuer", "date"]),
    clean(state.skills) || hasEntries(state.aiWorkflow, ["title", "details"]),
  ].filter(Boolean).length;
  const sectionScore = Math.round((presentSections / 7) * 30);

  const bulletCount = countBulletLines();
  const bulletScore = Math.min(20, Math.round((bulletCount / 12) * 20));

  const lengthScore =
    wordCount >= 350 && wordCount <= 900
      ? 20
      : wordCount < 350
        ? Math.max(0, Math.round((wordCount / 350) * 20))
        : Math.max(0, 20 - Math.round((wordCount - 900) / 60));

  const actionVerbs = [
    "built",
    "led",
    "designed",
    "improved",
    "launched",
    "optimized",
    "managed",
    "implemented",
    "developed",
    "analyzed",
  ];
  const verbHits = actionVerbs.filter((verb) =>
    resumeText.toLowerCase().includes(verb),
  ).length;
  const keywordScore = Math.min(10, verbHits * 2);

  const score = clamp(
    contactScore + sectionScore + bulletScore + lengthScore + keywordScore,
    0,
    100,
  );
  const tips = [];
  if (!clean(state.personal.email)) {
    tips.push("Add a professional email in contact details.");
  }
  if (presentSections < 6) {
    tips.push(
      "Complete more sections, especially Leadership, Honors, and Projects.",
    );
  }
  if (bulletCount < 8) {
    tips.push("Add measurable bullet points in experience and projects.");
  }
  if (wordCount < 300) {
    tips.push("Resume is short. Add more quantified achievements.");
  }
  if (wordCount > 1000) {
    tips.push("Resume may be too long. Keep it concise and targeted.");
  }

  return {
    score,
    band:
      score >= 80
        ? "Strong"
        : score >= 60
          ? "Good"
          : score >= 40
            ? "Needs work"
            : "Weak",
    tips: tips.length
      ? tips
      : ["Great baseline. Tailor keywords for each job description."],
  };
}

function updateAtsResult(result) {
  const bar = document.getElementById("atsMeterBar");
  const scoreLabel = document.getElementById("atsScoreLabel");
  const bandLabel = document.getElementById("atsBandLabel");
  const feedback = document.getElementById("atsFeedback");

  bar.style.width = `${result.score}%`;
  scoreLabel.textContent = `${result.score} / 100`;
  bandLabel.textContent = result.band;
  feedback.innerHTML = result.tips
    .map((tip) => `<li>${esc(tip)}</li>`)
    .join("");
}

function analyzeJobMatch(jobText) {
  const cleanedJob = clean(jobText);
  if (!cleanedJob) {
    return { score: 0, matched: [], missing: [], total: 0 };
  }

  const resumeKeywords = extractKeywords(getResumePlainText(), 80);
  const jobKeywords = extractKeywords(cleanedJob, 40);
  const resumeSet = new Set(resumeKeywords);
  const matched = jobKeywords.filter((key) => resumeSet.has(key));
  const missing = jobKeywords.filter((key) => !resumeSet.has(key));
  const score = jobKeywords.length
    ? Math.round((matched.length / jobKeywords.length) * 100)
    : 0;

  return { score, matched, missing, total: jobKeywords.length };
}

function updateJobMatchResult(result) {
  document.getElementById("jobMatchScore").textContent = `${result.score}%`;
  document.getElementById("jobMatchBar").style.width = `${result.score}%`;
  document.getElementById("jobMatchMeta").textContent =
    `Matched ${result.matched.length} of ${result.total} important keywords.`;

  document.getElementById("jobMatchedChips").innerHTML = result.matched
    .slice(0, 12)
    .map((item) => `<span class="chip good">${esc(item)}</span>`)
    .join("");
  document.getElementById("jobMissingChips").innerHTML = result.missing
    .slice(0, 12)
    .map((item) => `<span class="chip miss">${esc(item)}</span>`)
    .join("");
}

function renderPreview() {
  const personalForPreview = getSanitizedPersonalForSave();
  const isPhotoLayout = state.cvLayout === "withPhoto";
  const hasMainContent =
    hasPersonalContent(personalForPreview) ||
    hasEntries(state.education, ["school", "degree", "details"]) ||
    hasEntries(state.experience, ["company", "role", "details"]) ||
    hasEntries(state.projects, ["projectName", "projectRole", "details"]) ||
    hasEntries(state.leadership, ["organization", "role", "details"]) ||
    hasEntries(state.honors, ["title", "issuer", "date"]) ||
    hasEntries(state.courses, ["title", "issuer", "date"]) ||
    hasEntries(state.trainings, ["title", "organizer", "date"]) ||
    !!clean(state.skills) ||
    hasEntries(state.aiWorkflow, ["title", "details"]);

  if (!hasMainContent) {
    preview.classList.remove("with-photo-layout");
    preview.innerHTML = `<p class="empty-state">${t("empty.preview")}</p>`;
    return;
  }

  const contactParts = [
    personalForPreview.email,
    personalForPreview.phone,
    personalForPreview.location,
    personalForPreview.website,
    personalForPreview.github,
  ]
    .map(clean)
    .filter(Boolean);

  const sectionHtmlByKey = {
    summary: renderSummaryPreview(),
    education: renderEntryPreview("education", "preview.education", (item) => ({
      title: item.school,
      subtitle: [item.degree, item.location]
        .map(clean)
        .filter(Boolean)
        .join(" | "),
      date: formatDateRange(item.start, item.end),
      details: item.details,
    })),
    experience: renderEntryPreview(
      "experience",
      "preview.experience",
      (item) => ({
        title: item.company,
        subtitle: [item.role, item.location]
          .map(clean)
          .filter(Boolean)
          .join(" | "),
        date: formatDateRange(item.start, item.end),
        details: item.details,
      }),
    ),
    leadership: renderLeadershipPreview(),
    projects: renderEntryPreview("projects", "preview.projects", (item) => ({
      title: item.projectName,
      subtitleHtml: formatProjectSubtitle(item),
      date: formatDateRange(item.start, item.end),
      details: item.details,
    })),
    skills: renderSkillsPreview(),
    courses: renderDateRowSection("courses", "preview.courses", "issuer"),
    trainings: renderDateRowSection(
      "trainings",
      "preview.trainings",
      "organizer",
    ),
    honors: renderHonorsSection(),
  };

  const orderedSections = sanitizeSectionOrder(state.sectionOrder)
    .map((sectionKey) => sectionHtmlByKey[sectionKey] || "")
    .join("");

  const headerHtml = isPhotoLayout
    ? renderPreviewHeaderWithPhoto(personalForPreview, contactParts)
    : renderPreviewHeaderStandard(personalForPreview, contactParts);

  preview.classList.toggle("with-photo-layout", isPhotoLayout);

  preview.innerHTML = `
    ${headerHtml}
    ${orderedSections}
  `;
}

function renderPreviewHeaderStandard(personalForPreview, contactParts) {
  return `
    <h1 class="resume-name">${esc(clean(personalForPreview.fullName) || t("ph.fullName"))}</h1>
    ${clean(personalForPreview.professionalTitle) ? `<p class="resume-title">${esc(clean(personalForPreview.professionalTitle))}</p>` : ""}
    ${contactParts.length ? `<div class="resume-contact">${contactParts.map(esc).join(" | ")}</div>` : ""}
  `;
}

function renderPreviewHeaderWithPhoto(personalForPreview, contactParts) {
  const photo = clean(personalForPreview.photoDataUrl);
  const name = clean(personalForPreview.fullName) || t("ph.fullName");
  const initials = (name.match(/\b\w/g) || [])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return `
    <div class="resume-head-with-photo">
      <div class="resume-head-main">
        <h1 class="resume-name">${esc(name)}</h1>
        ${clean(personalForPreview.professionalTitle) ? `<p class="resume-title">${esc(clean(personalForPreview.professionalTitle))}</p>` : ""}
        ${contactParts.length ? `<div class="resume-contact">${contactParts.map(esc).join(" | ")}</div>` : ""}
      </div>
      <div class="resume-photo-wrap">
        ${photo ? `<img class="resume-photo" src="${esc(photo)}" alt="${esc(name)}">` : `<div class="resume-photo-placeholder">${esc(initials || "CV")}</div>`}
      </div>
    </div>
  `;
}

function renderSummaryPreview() {
  if (!clean(state.personal.summary)) {
    return "";
  }
  return `
    <section class="resume-section">
      <h3>${t("preview.summary")}</h3>
      <p>${esc(state.personal.summary.trim())}</p>
    </section>
  `;
}

function renderEntryPreview(sectionKey, headingKey, mapFn) {
  const items = state[sectionKey].filter((item) =>
    Object.values(item).some((value) => clean(value)),
  );
  if (!items.length) {
    return "";
  }

  return `
    <section class="resume-section">
      <h3>${t(headingKey)}</h3>
      ${items.map((item) => renderResumeItem(mapFn(item))).join("")}
    </section>
  `;
}

function renderLeadershipPreview() {
  const items = state.leadership.filter((item) =>
    Object.values(item).some((value) => clean(value)),
  );

  if (!items.length) {
    return "";
  }

  const mapLeadershipItem = (item) => ({
    title: item.organization,
    subtitle: [item.role, item.location].map(clean).filter(Boolean).join(" | "),
    date: formatDateRange(item.start, item.end),
    details: item.details,
  });

  if (items.length <= 3) {
    return `
      <section class="resume-section">
        <h3>${t("preview.leadership")}</h3>
        ${items.map((item) => renderResumeItem(mapLeadershipItem(item))).join("")}
      </section>
    `;
  }

  const groupedItems = chunkArray(items, 3);

  return `
    <section class="resume-section">
      <h3>${t("preview.leadership")}</h3>
      <div class="resume-multi-column">
        ${groupedItems
          .map(
            (group) => `
              <div class="resume-column">
                ${group.map((item) => renderResumeItem(mapLeadershipItem(item))).join("")}
              </div>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderSkillsPreview() {
  const technicalLines = parseSkillLines(state.skills);
  const languageLines = splitByCommaOrNewline(state.languages);
  const interestLines = splitByCommaOrNewline(state.interests);
  const aiWorkflowItems = state.aiWorkflow
    .map((item) => ({
      title: clean(item.title),
      bullets: splitByNewline(item.details),
    }))
    .filter((item) => item.title || item.bullets.length);

  if (
    !technicalLines.length &&
    !languageLines.length &&
    !interestLines.length &&
    !aiWorkflowItems.length
  ) {
    return "";
  }

  const blocks = [];
  if (technicalLines.length) {
    blocks.push(`
      <h4 class="resume-subheading">Technical Skills</h4>
      <ul class="resume-list">${technicalLines.map((line) => `<li>${esc(line)}</li>`).join("")}</ul>
    `);
  }

  if (languageLines.length) {
    blocks.push(`
      <h4 class="resume-subheading">${t("preview.languages")}</h4>
      <ul class="resume-list">${languageLines.map((line) => `<li>${esc(line)}</li>`).join("")}</ul>
    `);
  }

  if (interestLines.length) {
    blocks.push(`
      <h4 class="resume-subheading">${t("preview.interests")}</h4>
      <ul class="resume-list">${interestLines.map((line) => `<li>${esc(line)}</li>`).join("")}</ul>
    `);
  }

  if (aiWorkflowItems.length) {
    blocks.push(`
      <h4 class="resume-subheading">${t("skills.aiWorkflowHeading")}</h4>
      ${aiWorkflowItems
        .map(
          (item) => `
            <article class="resume-item resume-item-inline">
              ${item.title ? `<div class="resume-item-title">${esc(item.title)}</div>` : ""}
              ${item.bullets.length ? `<ul class="resume-list">${item.bullets.map((line) => `<li>${esc(line)}</li>`).join("")}</ul>` : ""}
            </article>
          `,
        )
        .join("")}
    `);
  }

  return `<section class="resume-section"><h3>${t("section.skills")}</h3>${blocks.join("")}</section>`;
}

function renderDateRowSection(sectionKey, headingKey, sourceKey) {
  const items = state[sectionKey].filter((item) =>
    Object.values(item).some((value) => clean(value)),
  );

  if (!items.length) {
    return "";
  }

  const rows = items
    .map((item) => {
      const dateText = clean(
        item.date || formatDateRange(item.start, item.end),
      );
      const titleText = clean(item.title || item.projectName || "");
      const sourceText = clean(item[sourceKey] || "");
      const detailLines = clean(item.details)
        .split("\n")
        .map(clean)
        .filter(Boolean);

      const titleWithQuotes =
        sectionKey === "courses" || sectionKey === "trainings"
          ? quoteTitle(titleText)
          : titleText;
      const mainText = [titleWithQuotes, sourceText]
        .filter(Boolean)
        .join(" - ");
      const detailsText = detailLines.length
        ? `<div>${detailLines.map((line) => esc(line)).join(" | ")}</div>`
        : "";

      if (!dateText && !mainText && !detailsText) {
        return "";
      }

      return `
        <div class="resume-row">
          <div class="resume-row-date">${esc(dateText)}</div>
          <div class="resume-row-text">${esc(mainText)}${detailsText}</div>
        </div>
      `;
    })
    .join("");

  return `
    <section class="resume-section">
      <h3>${t(headingKey)}</h3>
      <div class="resume-rows">${rows}</div>
    </section>
  `;
}

function renderHonorsSection() {
  const items = state.honors.filter((item) =>
    Object.values(item).some((value) => clean(value)),
  );

  if (!items.length) {
    return "";
  }

  return `
    <section class="resume-section">
      <h3>${t("preview.honors")}</h3>
      ${items
        .map((item) => {
          const title = clean(item.title);
          const source = [clean(item.issuer), clean(item.date)]
            .filter(Boolean)
            .join(" - ");
          const details = clean(item.details)
            .split("\n")
            .map(clean)
            .filter(Boolean);

          return `
            <article class="resume-item">
              <div class="resume-item-body">
                ${title ? `<strong>${esc(title)}</strong>` : ""}${source ? ` - ${esc(source)}` : ""}
              </div>
              ${details.length ? `<ul class="resume-list">${details.map((line) => `<li>${esc(line)}</li>`).join("")}</ul>` : ""}
            </article>
          `;
        })
        .join("")}
    </section>
  `;
}

function quoteTitle(value) {
  const title = clean(value);
  if (!title) {
    return "";
  }

  if (/^["'\u201c\u201d].*["'\u201c\u201d]$/.test(title)) {
    return title;
  }

  return `"${title}"`;
}

function parseSkillLines(value) {
  const raw = clean(value);
  if (!raw) {
    return [];
  }

  return raw.split("\n").map(clean).filter(Boolean);
}

function splitByNewline(value) {
  return clean(value)
    .split("\n")
    .map((line) => clean(line.replace(/^[-*•]\s*/, "")))
    .filter(Boolean);
}

function splitByCommaOrNewline(value) {
  return clean(value).split("\n").map(clean).filter(Boolean);
}

function chunkArray(items, chunkSize) {
  if (!Array.isArray(items) || chunkSize <= 0) {
    return [];
  }

  const chunks = [];
  for (let index = 0; index < items.length; index += chunkSize) {
    chunks.push(items.slice(index, index + chunkSize));
  }
  return chunks;
}

function renderResumeItem({ title, subtitle, subtitleHtml, date, details }) {
  const lines = clean(details).split("\n").map(clean).filter(Boolean);
  const safeSubtitleHtml = clean(subtitleHtml);
  const subtitleBlock = safeSubtitleHtml
    ? `<div class="resume-item-sub">${safeSubtitleHtml}</div>`
    : clean(subtitle)
      ? `<div class="resume-item-sub">${esc(clean(subtitle))}</div>`
      : "";

  return `
    <article class="resume-item">
      <div class="resume-item-top">
        <div>
          ${clean(title) ? `<div class="resume-item-title">${esc(clean(title))}</div>` : ""}
          ${subtitleBlock}
        </div>
        ${clean(date) ? `<div class="resume-item-date">${esc(clean(date))}</div>` : ""}
      </div>
      ${lines.length ? `<ul class="resume-list">${lines.map((line) => `<li>${esc(line)}</li>`).join("")}</ul>` : ""}
    </article>
  `;
}

function formatProjectSubtitle(item) {
  const parts = [item.projectRole, item.tech, item.link]
    .map(clean)
    .filter(Boolean);

  return parts.map((part) => `<em>${esc(part)}</em>`).join(" | ");
}

function createEntryBySection(sectionKey) {
  if (sectionKey === "education") return emptyEducation();
  if (sectionKey === "experience") return emptyExperience();
  if (sectionKey === "projects") return emptyProject();
  if (sectionKey === "leadership") return emptyLeadership();
  if (sectionKey === "honors") return emptyHonor();
  if (sectionKey === "courses") return emptyCourse();
  if (sectionKey === "trainings") return emptyTraining();
  return {};
}

function emptyEducation() {
  return {
    school: "",
    degree: "",
    location: "",
    start: "",
    end: "",
    details: "",
  };
}

function emptyExperience() {
  return {
    company: "",
    role: "",
    location: "",
    start: "",
    end: "",
    details: "",
  };
}

function emptyProject() {
  return {
    projectName: "",
    projectRole: "",
    tech: "",
    link: "",
    start: "",
    end: "",
    details: "",
  };
}

function emptyLeadership() {
  return {
    organization: "",
    role: "",
    location: "",
    start: "",
    end: "",
    details: "",
  };
}

function emptyHonor() {
  return { title: "", issuer: "", date: "", details: "" };
}

function emptyCourse() {
  return { title: "", issuer: "", date: "", details: "" };
}

function emptyTraining() {
  return { title: "", organizer: "", date: "", details: "" };
}

function emptyAiWorkflow() {
  return { title: "", details: "" };
}

function updateSimpleField(key, value) {
  state[key] = value;
  debouncedSave();
  renderPreview();
}

function countBulletLines() {
  const fields = [];
  [
    state.experience,
    state.projects,
    state.leadership,
    state.honors,
    state.courses,
    state.trainings,
    state.aiWorkflow,
  ].forEach((collection) => {
    collection.forEach((entry) => fields.push(entry.details || ""));
  });
  return fields.join("\n").split("\n").map(clean).filter(Boolean).length;
}

function getResumePlainText() {
  const personal = getSanitizedPersonalForSave();
  const chunks = [
    personal.fullName,
    personal.professionalTitle,
    personal.summary,
    personal.email,
    personal.phone,
    personal.location,
    personal.website,
    personal.github,
    state.skills,
    state.languages,
    state.certifications,
    state.interests,
  ];

  state.aiWorkflow.forEach((entry) => {
    chunks.push(entry.title || "");
    chunks.push(entry.details || "");
  });

  [
    state.education,
    state.experience,
    state.projects,
    state.leadership,
    state.honors,
    state.courses,
    state.trainings,
  ].forEach((collection) => {
    collection.forEach((entry) => {
      Object.values(entry).forEach((value) => chunks.push(String(value || "")));
    });
  });

  return chunks.map(clean).filter(Boolean).join(" ");
}

function extractKeywords(text, limit) {
  const stopwords = new Set([
    "the",
    "and",
    "with",
    "for",
    "that",
    "this",
    "from",
    "your",
    "you",
    "are",
    "was",
    "have",
    "has",
    "our",
    "their",
    "about",
    "into",
    "using",
    "para",
    "con",
    "por",
    "una",
    "las",
    "los",
    "del",
    "que",
    "como",
    "esta",
    "este",
    "sobre",
    "desde",
    "without",
    "into",
    "more",
    "less",
    "very",
    "also",
    "its",
    "can",
    "will",
    "job",
    "role",
    "team",
    "años",
    "anos",
  ]);

  const tokens = (text.toLowerCase().match(/[a-z0-9+#.-]{3,}/g) || []).filter(
    (token) => !stopwords.has(token),
  );
  const counts = new Map();
  tokens.forEach((token) => counts.set(token, (counts.get(token) || 0) + 1));
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit)
    .map(([token]) => token);
}

function applyStaticTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.getAttribute("data-i18n"));
  });
  document.title =
    state.language === "en"
      ? "Harvard Resume Builder"
      : state.language === "es"
        ? "Generador de CV Harvard"
        : "Tagabuo ng Harvard Resume";
  languageToggle.textContent = state.language.toUpperCase();
  const isDark = state.theme === "dark";
  const nextThemeLabel = isDark
    ? t("actions.themeLight")
    : t("actions.themeDark");
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute("aria-label", nextThemeLabel);
  themeToggle.setAttribute("title", nextThemeLabel);
  if (themeIcon) {
    themeIcon.className = isDark ? "fa-solid fa-sun" : "fa-solid fa-moon";
  }
  document.documentElement.lang = state.language;
}

function applyTheme() {
  document.body.classList.toggle("dark-mode", state.theme === "dark");
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return structuredClone(defaultState);
    }

    const parsed = JSON.parse(raw);
    return {
      ...structuredClone(defaultState),
      ...parsed,
      cvLayout: parsed.cvLayout === "withPhoto" ? "withPhoto" : "standard",
      theme: parsed.theme === "dark" ? "dark" : "light",
      personal: {
        ...structuredClone(defaultState.personal),
        ...(parsed.personal || {}),
      },
      education: sanitizeArray(parsed.education, emptyEducation),
      experience: sanitizeArray(parsed.experience, emptyExperience),
      projects: sanitizeArray(parsed.projects, emptyProject),
      leadership: sanitizeArray(parsed.leadership, emptyLeadership),
      honors: sanitizeArray(parsed.honors, emptyHonor),
      courses: sanitizeArray(parsed.courses, emptyCourse),
      trainings: sanitizeArray(parsed.trainings, emptyTraining),
      aiWorkflow: sanitizeArray(parsed.aiWorkflow, emptyAiWorkflow),
      sectionOrder: sanitizeSectionOrder(parsed.sectionOrder),
      saveSlots:
        parsed.saveSlots && typeof parsed.saveSlots === "object"
          ? parsed.saveSlots
          : {},
      selectedSaveSlot: clean(parsed.selectedSaveSlot || ""),
      salaryRecords: Array.isArray(parsed.salaryRecords)
        ? parsed.salaryRecords
        : [],
      showSectionOrderControls: false,
    };
  } catch (error) {
    return structuredClone(defaultState);
  }
}

function sanitizeArray(value, factory) {
  if (!Array.isArray(value) || !value.length) {
    return [factory()];
  }
  return value.map((item) => ({ ...factory(), ...(item || {}) }));
}

function persistState(showToast) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(getSanitizedStateForSave()));
  if (showToast) {
    window.alert(t("save.success"));
  }
}

function getSanitizedStateForSave() {
  return {
    ...state,
    cvLayout: state.cvLayout === "withPhoto" ? "withPhoto" : "standard",
    theme: state.theme === "dark" ? "dark" : "light",
    personal: getSanitizedPersonalForSave(),
    saveSlots:
      state.saveSlots && typeof state.saveSlots === "object"
        ? state.saveSlots
        : {},
    selectedSaveSlot: clean(state.selectedSaveSlot || ""),
    sectionOrder: sanitizeSectionOrder(state.sectionOrder),
    showSectionOrderControls: Boolean(state.showSectionOrderControls),
  };
}

function getSanitizedPersonalForSave() {
  const personal = { ...state.personal };
  if (isBlockedProfessionalTitle(personal.professionalTitle)) {
    personal.professionalTitle = "";
  }
  return personal;
}

function isBlockedProfessionalTitle(value) {
  return clean(value).toLowerCase() === "bank";
}

function getDefaultTheme() {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

async function syncResumeToDatabase() {
  try {
    const response = await fetch("../backend/save_resume.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ state: getSanitizedStateForSave() }),
    });

    // Be tolerant of noisy PHP output: DB write can succeed even if JSON parsing fails.
    const rawBody = await response.text();
    let payload = {};
    if (clean(rawBody)) {
      try {
        payload = JSON.parse(rawBody);
      } catch (error) {
        payload = {};
      }
    }

    if (!response.ok) {
      return {
        ok: false,
        message:
          payload.message ||
          payload.error ||
          payload.details ||
          `HTTP ${response.status}`,
      };
    }

    if (typeof payload.ok === "boolean") {
      if (payload.ok) {
        return { ok: true, message: "" };
      }

      return {
        ok: false,
        message:
          payload.message ||
          payload.error ||
          payload.details ||
          "MySQL sync failed.",
      };
    }

    // For 2xx responses without a valid/expected JSON body, treat as success.
    return { ok: true, message: "" };
  } catch (error) {
    return {
      ok: false,
      message: error instanceof Error ? error.message : "Network error",
    };
  }
}

async function hydrateResumeFromDatabase() {
  const hasLocalStorage = !!localStorage.getItem(STORAGE_KEY);

  try {
    const response = await fetch("../backend/load_resume.php", {
      method: "GET",
      headers: { Accept: "application/json" },
    });

    const payload = await response.json().catch(() => ({}));
    if (!response.ok || payload.ok !== true || !payload.state) {
      return;
    }

    const remoteState = payload.state;

    // If we have localStorage, keep local slot edits and fill in any missing slots from db.
    if (hasLocalStorage) {
      const localSlots =
        state.saveSlots && typeof state.saveSlots === "object"
          ? state.saveSlots
          : {};
      const remoteSlots =
        remoteState.saveSlots && typeof remoteState.saveSlots === "object"
          ? remoteState.saveSlots
          : {};

      state.saveSlots = {
        ...remoteSlots,
        ...localSlots,
      };

      const preferredSelection = clean(
        state.selectedSaveSlot || remoteState.selectedSaveSlot || "",
      );
      state.selectedSaveSlot = state.saveSlots[preferredSelection]
        ? preferredSelection
        : "";
      persistState(false);
      return;
    }

    // If no localStorage, load entire state from database
    state = {
      ...structuredClone(defaultState),
      ...remoteState,
      cvLayout: remoteState.cvLayout === "withPhoto" ? "withPhoto" : "standard",
      personal: {
        ...structuredClone(defaultState.personal),
        ...(remoteState.personal || {}),
      },
      education: sanitizeArray(remoteState.education, emptyEducation),
      experience: sanitizeArray(remoteState.experience, emptyExperience),
      projects: sanitizeArray(remoteState.projects, emptyProject),
      leadership: sanitizeArray(remoteState.leadership, emptyLeadership),
      honors: sanitizeArray(remoteState.honors, emptyHonor),
      courses: sanitizeArray(remoteState.courses, emptyCourse),
      trainings: sanitizeArray(remoteState.trainings, emptyTraining),
      aiWorkflow: sanitizeArray(remoteState.aiWorkflow, emptyAiWorkflow),
      sectionOrder: sanitizeSectionOrder(remoteState.sectionOrder),
      saveSlots: remoteState.saveSlots || {},
      selectedSaveSlot: clean(remoteState.selectedSaveSlot || ""),
      salaryRecords: Array.isArray(remoteState.salaryRecords)
        ? remoteState.salaryRecords
        : [],
      showSectionOrderControls: false,
    };

    persistState(false);
  } catch (error) {
    // Ignore database hydration errors.
  }
}

function hasEntries(entries, keys) {
  return entries.some((entry) => hasSome(entry, keys));
}

function hasSome(entry, keys) {
  return keys.some((key) => clean(entry[key]));
}

function hasPersonalContent(personal = state.personal) {
  return Object.values(personal).some((value) => clean(value));
}

function isPersonalSectionEmpty() {
  return !hasPersonalContent();
}

function formatDateRange(start, end) {
  const left = clean(start);
  const right = clean(end);
  if (!left && !right) return "";
  if (left && right) return `${left} - ${right}`;
  return left || right;
}

function clean(value) {
  return String(value || "").trim();
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function formatMoney(amount, currency) {
  try {
    return new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: currency || "USD",
      maximumFractionDigits: 0,
    }).format(amount || 0);
  } catch (error) {
    return `${currency || "USD"} ${Number(amount || 0).toFixed(0)}`;
  }
}

function t(key) {
  return translations[state.language]?.[key] || translations.en[key] || key;
}

function esc(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function debounce(fn, waitMs) {
  let timer = null;
  return (...args) => {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => fn(...args), waitMs);
  };
}
