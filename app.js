/* =====================================================================
   Lebenslaufdaten – Inhalt 1:1 aus der PDF-Fassung (Ströer, CRM-Datenanalyse).
   Struktur identisch zum bisherigen AWS-Antwortformat: { data: [ ... ] }.
   Jeder Eintrag: kategorie, titel, untertitel, zeitraum, beschreibung ODER punkte[].
   Zum Zurückschalten auf die AWS-API: siehe ladeAusAWS() unten.
===================================================================== */
const LEBENSLAUF = {
  data: [
    /* ---------- KURZPROFIL ---------- */
    {
      kategorie: "KURZPROFIL",
      titel: "Wirtschaftsinformatik-Student",
      untertitel: "",
      zeitraum: "",
      beschreibung: "Wirtschaftsinformatik-Student mit ausgeprägter Affinität zu IT-Systemen, Datenbanken und Datenanalyse. Praxis in Microsoft Excel inkl. Power Query und Power Pivot, in SQL und Datenmodellierung sowie in der Arbeit mit einem ERP-/CRM-System (Microsoft Dynamics 365 Business Central), für das ich eigene Funktionen entwickelt habe. Strukturiert, sorgfältig und mit Freude daran, neue Tools direkt an konkreten Aufgaben zu lernen. Deutsch (Muttersprache), Englisch (C1)."
    },

    /* ---------- AUSBILDUNG ---------- */
    {
      kategorie: "AUSBILDUNG",
      titel: "B.Sc. Wirtschaftsinformatik",
      untertitel: "Technische Hochschule Köln, Campus Gummersbach",
      zeitraum: "",
      beschreibung: "Relevante Module: Datenbanksysteme (Note 1,0), Datenbanken und Datenmanagement, Betriebliche Anwendungssysteme (Microsoft Dynamics 365 Business Central), Informations- und Prozessmanagement, Softwareentwicklung, Mathematik I/II (inkl. Statistik)"
    },
    {
      kategorie: "AUSBILDUNG",
      titel: "Allgemeine Hochschulreife (Abitur)",
      untertitel: "Werner-Heisenberg-Gymnasium Leverkusen",
      zeitraum: "2022",
      beschreibung: ""
    },

    /* ---------- PROJEKTE ---------- */
    {
      kategorie: "PROJEKTE",
      titel: "BA1-Praktikum – Datenanalyse-Add-in für Microsoft Dynamics 365 Business Central",
      untertitel: "",
      zeitraum: "TH Köln",
      punkte: [
        "Aufbau eines dimensionalen Datenmodells (Star-Schema) in Excel mit komplexen Formeln und anschließende Umsetzung in Business Central mit AL",
        "Automatisierte Auswertung von Abwesenheitsdaten inkl. Testfällen zur Prüfung der Datenqualität"
      ]
    },
    {
      kategorie: "PROJEKTE",
      titel: "Beratungsprojekt – Prozessanalyse & Automatisierungspotenziale (Business Engineering)",
      untertitel: "",
      zeitraum: "TH Köln",
      punkte: [
        "Analyse und Modellierung von Geschäftsprozessen (BPMN 2.0) sowie Identifikation von Optimierungs- und Automatisierungspotenzialen"
      ]
    },
    {
      kategorie: "PROJEKTE",
      titel: "Full-Stack-Cloud-Projekt – Persönliche Website auf AWS",
      untertitel: "",
      zeitraum: "Eigenprojekt",
      punkte: [
        "Aufbau und Anbindung einer relationalen Datenbank (Amazon RDS); Datenabfragen mit SQL und DBeaver"
      ]
    },

    /* ---------- PRAKTISCHE ERFAHRUNG ---------- */
    {
      kategorie: "PRAKTISCHE ERFAHRUNG",
      titel: "Vasiljević & Sin",
      untertitel: "Aushilfe – Auftragsabwicklung & Büroorganisation · Pančevo, Serbien",
      zeitraum: "07.2024 – 09.2024",
      punkte: [
        "Telefonische Auftragsannahme und sorgfältige Erfassung sowie Prüfung der Bestelldaten im System",
        "Verwaltung und Prüfung von Rechnungen und Lohnunterlagen; Koordination mit Lager und Speditionen"
      ]
    },
    {
      kategorie: "PRAKTISCHE ERFAHRUNG",
      titel: "Bayer Gastronomie",
      untertitel: "Servicekraft – Event- & Stadionservice · Leverkusen, Deutschland",
      zeitraum: "08.2023 – 05.2025",
      punkte: [
        "Service- und teamorientiertes Arbeiten unter hohem Zeitdruck bei Bayer-04-Heimspielen in der BayArena (bis zu 30.000 Zuschauer)"
      ]
    },
    {
      kategorie: "PRAKTISCHE ERFAHRUNG",
      titel: "Private Nachhilfe (Mathematik, Englisch, Geografie)",
      untertitel: "Selbstständiger Tutor · Leverkusen, Deutschland",
      zeitraum: "08.2020 – 02.2025",
      punkte: [
        "Verständliche Vermittlung komplexer Inhalte für Schüler der 5. bis 12. Klasse"
      ]
    },

    /* ---------- ENGAGEMENT & AKTIVITÄTEN ---------- */
    {
      kategorie: "ENGAGEMENT & AKTIVITÄTEN",
      titel: "Basketball – SSV Lützenkirchen",
      untertitel: "",
      zeitraum: "Leverkusen, Deutschland",
      punkte: [
        "Eigene Mannschaft mit Freunden aufgebaut; Organisation und Koordination des regelmäßigen Trainingsbetriebs"
      ]
    },

    /* ---------- KENNTNISSE & INTERESSEN ---------- */
    {
      kategorie: "KENNTNISSE & INTERESSEN",
      titel: "Excel & Datenanalyse",
      untertitel: "", zeitraum: "",
      beschreibung: "Excel (sehr gute Kenntnisse) inkl. Power Query und Power Pivot, komplexe Formeln, Datenprüfung und Plausibilisierung"
    },
    {
      kategorie: "KENNTNISSE & INTERESSEN",
      titel: "Datenbanken & Modellierung",
      untertitel: "", zeitraum: "",
      beschreibung: "SQL, relationale Datenbanken, dimensionale Datenmodellierung (Star-Schema), DBeaver"
    },
    {
      kategorie: "KENNTNISSE & INTERESSEN",
      titel: "CRM-/ERP-Systeme",
      untertitel: "", zeitraum: "",
      beschreibung: "Microsoft Dynamics 365 Business Central (AL, VS Code)"
    },
    {
      kategorie: "KENNTNISSE & INTERESSEN",
      titel: "Automatisierung & Programmierung",
      untertitel: "", zeitraum: "",
      beschreibung: "Python, Java, C, Kotlin · Prozessmodellierung (BPMN 2.0)"
    },
    {
      kategorie: "KENNTNISSE & INTERESSEN",
      titel: "Microsoft 365",
      untertitel: "", zeitraum: "",
      beschreibung: "Excel, PowerPoint, Word, Outlook, Teams"
    },
    {
      kategorie: "KENNTNISSE & INTERESSEN",
      titel: "Sprachen",
      untertitel: "", zeitraum: "",
      beschreibung: "Deutsch (Muttersprache) · Serbisch (Muttersprache) · Englisch (C1) · Spanisch (B2)"
    },
    {
      kategorie: "KENNTNISSE & INTERESSEN",
      titel: "Interessen",
      untertitel: "", zeitraum: "",
      beschreibung: "Datenanalyse · Prozessautomatisierung (Power Platform) · CRM-Systeme · Cloud-Technologien · Basketball"
    }
  ]
};

document.addEventListener('DOMContentLoaded', () => {
  const fetchBtn = document.getElementById('fetchBtn');
  const sidebarSlot = document.getElementById('sidebar-content');
  const mainSlot = document.getElementById('main-content');

  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));

  // --- Kategorie -> Rolle (robust per Schlüsselwort) ---
  function rolle(kat) {
    const k = (kat || '').toLowerCase();
    if (k.includes('profil')) return 'profil';
    if (k.includes('kenntnis') || k.includes('interesse') || k.includes('skill')) return 'skills';
    if (k.includes('ausbildung') || k.includes('education') || k.includes('studium')) return 'ausbildung';
    return 'erfahrung';
  }

  const MAIN_ORDER = ['ausbildung', 'projekt', 'praktisch', 'erfahrung', 'engagement'];
  function mainRang(kat) {
    const k = (kat || '').toLowerCase();
    const i = MAIN_ORDER.findIndex((w) => k.includes(w));
    return i === -1 ? 99 : i;
  }

  // --- Render-Bausteine ---
  function koerper(e) {
    if (Array.isArray(e.punkte) && e.punkte.length) {
      return '<ul class="exp-punkte">' + e.punkte.map((p) => `<li>${esc(p)}</li>`).join('') + '</ul>';
    }
    return e.beschreibung ? `<p class="exp-desc">${esc(e.beschreibung)}</p>` : '';
  }

  function renderProfil(eintraege) {
    const text = eintraege.map((e) => `<p>${esc(e.beschreibung || e.titel)}</p>`).join('');
    return `<div class="profil-box">${text}</div>`;
  }

  function renderSkills(eintraege) {
    return eintraege.map((e) => `
      <div class="skill-item">
        <div class="skill-titel">${esc(e.titel)}</div>
        ${e.beschreibung ? `<div class="skill-desc">${esc(e.beschreibung)}</div>` : ''}
      </div>`).join('');
  }

  function renderAusbildung(eintraege) {
    return eintraege.map((e) => `
      <div class="edu-item">
        <div class="edu-zeit">${esc(e.zeitraum)}</div>
        <div class="edu-body">
          <div class="edu-titel">${esc(e.titel)}</div>
          ${e.untertitel ? `<div class="edu-sub">${esc(e.untertitel)}</div>` : ''}
          ${e.beschreibung ? `<p class="edu-desc">${esc(e.beschreibung)}</p>` : ''}
        </div>
      </div>`).join('');
  }

  function renderErfahrung(eintraege) {
    return eintraege.map((e) => `
      <div class="exp-item">
        <div class="exp-kopf">
          <span class="exp-titel">${esc(e.titel)}</span>
          ${e.zeitraum ? `<span class="exp-zeit">${esc(e.zeitraum)}</span>` : ''}
        </div>
        ${e.untertitel ? `<div class="exp-sub">${esc(e.untertitel)}</div>` : ''}
        ${koerper(e)}
      </div>`).join('');
  }

  function sidebarBlock(katName, rolleName, eintraege) {
    if (rolleName === 'profil') {
      return `<div class="sb-header" style="margin:0 30px 12px 30px;">${esc(katName)}</div>${renderProfil(eintraege)}`;
    }
    return `<div class="sb-section"><div class="sb-header">${esc(katName)}</div>${renderSkills(eintraege)}</div>`;
  }

  function mainBlock(katName, rolleName, eintraege) {
    const inhalt = rolleName === 'ausbildung' ? renderAusbildung(eintraege) : renderErfahrung(eintraege);
    return `
      <section class="main-section">
        <div class="section-header">${esc(katName)}</div>
        <div class="section-body">${inhalt}</div>
      </section>`;
  }

  // --- Aufbau aus einem { data: [...] }-Objekt ---
  function baueAuf(quelle) {
    const daten = Array.isArray(quelle.data) ? quelle.data : [];

    const kategorien = new Map();
    daten.forEach((item) => {
      const key = item.kategorie || 'Sonstiges';
      if (!kategorien.has(key)) kategorien.set(key, []);
      kategorien.get(key).push(item);
    });

    const sidebar = [];
    const main = [];
    for (const [kat, eintraege] of kategorien) {
      const r = rolle(kat);
      (r === 'profil' || r === 'skills' ? sidebar : main).push({ kat, r, eintraege });
    }

    sidebar.sort((a, b) => (a.r === 'profil' ? -1 : 1) - (b.r === 'profil' ? -1 : 1));
    main.sort((a, b) => mainRang(a.kat) - mainRang(b.kat));

    sidebarSlot.innerHTML = sidebar.map((s) => sidebarBlock(s.kat, s.r, s.eintraege)).join('');
    mainSlot.innerHTML = main.map((m) => mainBlock(m.kat, m.r, m.eintraege)).join('');
  }

  /* Optional: statt der lokalen Daten wieder von der AWS-API laden.
     Dazu in render() ladeAusAWS() aufrufen und die Daten dort pflegen. */
  async function ladeAusAWS() {
    const API_URL = 'https://7al9ptotsc.execute-api.eu-central-1.amazonaws.com/data';
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error('HTTP ' + res.status);
    return res.json();
  }

  function render() {
    baueAuf(LEBENSLAUF);
  }

  if (fetchBtn) {
    fetchBtn.addEventListener('click', () => {
      fetchBtn.textContent = 'Aktualisiert';
      render();
    });
  }

  render();
});