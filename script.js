// ================================================================
//  SVG ICON LIBRARY (inline, no dependencies)
// ================================================================
const SVG = {
  github:   `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>`,
  external: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`,
  arrow:    `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>`,
  mail:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  back:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>`,
  cap:      `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
  calendar: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>`,
  download: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
};


// ================================================================
//  HELPERS
// ================================================================
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => root.querySelectorAll(sel);

function esc(str) {
  const d = document.createElement("div");
  d.textContent = str;
  return d.innerHTML;
}

const FONT_STACKS = {
  "System Sans": "'Segoe UI', 'Verdana', 'Tahoma', sans-serif",
  "Modern Sans": "'Inter', 'Arial', 'Helvetica Neue', sans-serif",
  "Display Tech": "'Orbitron', 'Segoe UI', sans-serif",
  "Humanist": "'Trebuchet MS', 'Segoe UI', sans-serif",
  "Monospace UI": "'Cascadia Code', 'Consolas', monospace",
  "JetBrains Mono": "'JetBrains Mono', 'Consolas', monospace"
};

function normalizeSiteData() {
  if (!SITE.customization) SITE.customization = {};
  if (!SITE.customization.palette) {
    SITE.customization.palette = {
      bg: "#10131e",
      card: "#1a1f2e",
      sec: "#202739",
      border: "#2a3550",
      fg: "#e8ecff",
      muted: "#8f9ab8",
      primary: "#2dd4bf",
      accent: "#a78bfa"
    };
  }
  if (!SITE.customization.fonts) {
    SITE.customization.fonts = {
      display: FONT_STACKS["Display Tech"],
      body: FONT_STACKS["System Sans"],
      mono: FONT_STACKS["Monospace UI"]
    };
  }
  if (!SITE.customization.sectionVisibility) {
    SITE.customization.sectionVisibility = { projects: true, skills: true, about: true, contact: true };
  }
  if (!SITE.availability) SITE.availability = { enabled: false, text: "", ctaLabel: "", ctaHref: "#contact" };
  if (!SITE.recruiterMode) SITE.recruiterMode = { enabled: false, headline: "", summary: "", bullets: [], ctaLabel: "", ctaHref: "" };
  if (!Array.isArray(SITE.timeline)) SITE.timeline = [];
  if (!Array.isArray(SITE.testimonials)) SITE.testimonials = [];
  if (!SITE.customization.aiAssistant) {
    SITE.customization.aiAssistant = {
      enabled: true,
      name: "Nova",
      greeting: "Hi! I am Nova, Tuur's portfolio assistant. Ask me about projects, skills, or contact info.",
      startOpen: false,
      mode: "web-llm",
      localModel: "Qwen2.5-0.5B-Instruct-q4f16_1-MLC",
      knowledgeNotes: ""
    };
  }
  if (SITE.customization.aiAssistant.mode === "local-llm") SITE.customization.aiAssistant.mode = "web-llm";
  if (!Array.isArray(SITE.customization.styleProfiles)) SITE.customization.styleProfiles = [];
  if (!Array.isArray(SITE.customization.pageTemplates)) SITE.customization.pageTemplates = [];
  if (!Array.isArray(SITE.customization.builderSectionPrefabs)) SITE.customization.builderSectionPrefabs = [];
  SITE.customization.builderSectionPrefabs = SITE.customization.builderSectionPrefabs
    .filter(p => p && p.section)
    .map(p => ({ name: p.name || "Section Prefab", section: normalizeBuilderSection(p.section) }));
  if (!SITE.customization.styleProfiles.length) {
    SITE.customization.styleProfiles = [{
      id: "cyber-core",
      name: "Cyber Core",
      palette: JSON.parse(JSON.stringify(SITE.customization.palette)),
      fonts: JSON.parse(JSON.stringify(SITE.customization.fonts))
    }];
  }
  if (!SITE.customization.currentStyleProfile) SITE.customization.currentStyleProfile = SITE.customization.styleProfiles[0].id;
  let compareBaseId = "";
  let isolateToken = "";
  try {
    const params = new URLSearchParams(window.location.search);
    const qp = params.get("styleProfile");
    compareBaseId = params.get("compareBase") || "";
    isolateToken = params.get("isolateToken") || "";
    if (qp && SITE.customization.styleProfiles.some(sp => sp.id === qp)) {
      SITE.customization.currentStyleProfile = qp;
    }
  } catch (_e) {}
  const active = getStyleProfileById(SITE.customization.currentStyleProfile) || SITE.customization.styleProfiles[0];
  if (active) {
    let palette = JSON.parse(JSON.stringify(active.palette || SITE.customization.palette));
    let fonts = JSON.parse(JSON.stringify(active.fonts || SITE.customization.fonts));
    if (compareBaseId && isolateToken) {
      const base = getStyleProfileById(compareBaseId);
      if (base) {
        palette = JSON.parse(JSON.stringify(base.palette || palette));
        fonts = JSON.parse(JSON.stringify(base.fonts || fonts));
        if (isolateToken.indexOf("font-") === 0) {
          const k = isolateToken.replace("font-", "");
          if (active.fonts && active.fonts[k]) fonts[k] = active.fonts[k];
        } else if (active.palette && active.palette[isolateToken]) {
          palette[isolateToken] = active.palette[isolateToken];
        }
      }
    }
    SITE.customization.palette = palette;
    SITE.customization.fonts = fonts;
  }
  if (!Array.isArray(SITE.customPages)) SITE.customPages = [];
  SITE.customPages = SITE.customPages.map((page, i) => {
    const blocks = Array.isArray(page.blocks) ? page.blocks : [];
    const fallback = blocks.length ? blocks : (page.content ? [{ type: "text", title: "Overview", body: page.content }] : []);
    return {
      id: page.id || `custom-page-${i + 1}`,
      title: page.title || "Custom Page",
      navLabel: page.navLabel || page.title || "Page",
      layout: page.layout || "stack",
      visible: page.visible !== false,
      styleProfile: page.styleProfile || "",
      theme: page.theme || { inherit: true, primary: "", accent: "", card: "" },
      blocks: fallback.map(normalizeCustomBlock)
    };
  });
  if (!Array.isArray(SITE.pages)) {
    SITE.pages = [{
      id: "home",
      title: "Home",
      sections: [
        newBuilderSection("hero", true),
        newBuilderSection("project-grid", true),
        newBuilderSection("skills", true),
        newBuilderSection("about", true),
        newBuilderSection("contact", true)
      ]
    }];
  }
  SITE.pages.forEach(page => {
    if (!Array.isArray(page.sections)) page.sections = [];
    page.sections = page.sections.map(normalizeBuilderSection);
  });
  SITE.skills.forEach(cat => {
    cat.items.forEach(item => {
      if (typeof item.score !== "number") {
        item.score = typeof item.pct === "number" ? +(item.pct / 20).toFixed(1) : 3;
      }
      item.score = Math.max(0, Math.min(5, +item.score || 0));
    });
  });
}

function getStyleProfileById(id) {
  return (SITE.customization && SITE.customization.styleProfiles || []).find(sp => sp.id === id);
}

function normalizeCustomBlock(block) {
  const t = (block && block.type) || "text";
  if (t === "bullet") return { type: "bullet", title: block.title || "Highlights", items: Array.isArray(block.items) ? block.items : [] };
  if (t === "cta") return { type: "cta", title: block.title || "Call To Action", body: block.body || "", label: block.label || "Contact", href: block.href || "#contact" };
  if (t === "stats") return { type: "stats", title: block.title || "Stats", items: Array.isArray(block.items) ? block.items : [] };
  if (t === "quote") return { type: "quote", title: block.title || "Quote", body: block.body || "", label: block.label || "" };
  if (t === "media") return { type: "media", title: block.title || "Media", src: block.src || "", alt: block.alt || "", caption: block.caption || "" };
  if (t === "divider") return { type: "divider", title: block.title || "Divider" };
  return { type: "text", title: block.title || "Section", body: block.body || "" };
}

function newContentBlock(type) {
  return normalizeCustomBlock({ type });
}

function newBuilderSection(type, stableAnchor = false) {
  const labels = {
    hero: "Hero",
    "project-grid": "Projects",
    skills: "Skills",
    about: "About",
    contact: "Contact",
    text: "Text Section",
    cta: "Call To Action",
    timeline: "Timeline",
    testimonials: "Testimonials",
    availability: "Availability",
    recruiter: "Recruiter Snapshot"
  };
  const anchors = { hero: "home", "project-grid": "projects", skills: "skills", about: "about", contact: "contact", timeline: "timeline", testimonials: "testimonials", availability: "availability", recruiter: "recruiter" };
  const id = stableAnchor ? (anchors[type] || type) : `${type}-${Math.random().toString(36).slice(2, 8)}`;
  return {
    id,
    type,
    visible: true,
    navLabel: labels[type] || type,
    settings: { width: "boxed", padding: "normal", align: "left", background: "default", blockLayout: "grid", blockSurface: "card", theme: { inherit: true, primary: "", accent: "", card: "", bg: "" } },
    content: { title: labels[type] || type, text: "", ctaLabel: "", ctaHref: "#contact" },
    blocks: type === "text" ? [newContentBlock("text")] : (type === "cta" ? [newContentBlock("cta")] : [])
  };
}

function normalizeBuilderSection(section) {
  const sec = section || newBuilderSection("text");
  sec.type = sec.type || "text";
  sec.id = sec.id || `${sec.type}-${Math.random().toString(36).slice(2, 8)}`;
  sec.visible = sec.visible !== false;
  sec.navLabel = sec.navLabel || (sec.content && sec.content.title) || sec.type;
  sec.settings = sec.settings || {};
  sec.settings.width = sec.settings.width || "boxed";
  sec.settings.padding = sec.settings.padding || "normal";
  sec.settings.align = sec.settings.align || "left";
  sec.settings.background = sec.settings.background || "default";
  sec.settings.blockLayout = sec.settings.blockLayout || "grid";
  sec.settings.blockSurface = sec.settings.blockSurface || "card";
  sec.settings.theme = sec.settings.theme || { inherit: true, primary: "", accent: "", card: "", bg: "" };
  sec.settings.theme.inherit = sec.settings.theme.inherit !== false;
  sec.settings.theme.primary = sec.settings.theme.primary || "";
  sec.settings.theme.accent = sec.settings.theme.accent || "";
  sec.settings.theme.card = sec.settings.theme.card || "";
  sec.settings.theme.bg = sec.settings.theme.bg || "";
  sec.content = sec.content || {};
  sec.content.title = sec.content.title || sec.navLabel;
  if (!Array.isArray(sec.blocks)) {
    sec.blocks = [];
    if (["text", "cta"].includes(sec.type) && (sec.content.text || sec.content.ctaLabel)) {
      sec.blocks.push(normalizeCustomBlock({
        type: sec.type === "cta" ? "cta" : "text",
        title: sec.content.title,
        body: sec.content.text,
        label: sec.content.ctaLabel,
        href: sec.content.ctaHref
      }));
    }
  }
  sec.blocks = sec.blocks.map(normalizeCustomBlock);
  return sec;
}

function renderCustomBlock(block) {
  if (block.type === "divider") {
    return `<div class="custom-divider"><span>${esc(block.title || "")}</span></div>`;
  }
  if (block.type === "quote") {
    return `<blockquote class="custom-block custom-quote">
      <p>"${esc(block.body || "")}"</p>
      ${block.label ? `<footer>${esc(block.label)}</footer>` : ""}
    </blockquote>`;
  }
  if (block.type === "media") {
    const src = block.src || "";
    const isVideo = /\.(mp4|webm|ogg)$/i.test(src);
    return `<article class="custom-block custom-media">
      <h3>${esc(block.title)}</h3>
      ${src ? (isVideo
        ? `<video controls muted playsinline preload="metadata"><source src="${esc(src)}"></video>`
        : `<img src="${esc(src)}" alt="${esc(block.alt || block.title || "")}" loading="lazy">`) : ""}
      ${block.caption ? `<p>${esc(block.caption)}</p>` : ""}
    </article>`;
  }
  if (block.type === "bullet") {
    return `<article class="custom-block">
      <h3>${esc(block.title)}</h3>
      <ul class="custom-bullet-list">
        ${(block.items || []).map(item => `<li>${esc(item)}</li>`).join("")}
      </ul>
    </article>`;
  }
  if (block.type === "cta") {
    return `<article class="custom-block custom-block-cta">
      <h3>${esc(block.title)}</h3>
      <p>${esc(block.body)}</p>
      <a class="btn-primary" href="${esc(block.href || "#")}">${esc(block.label || "Learn More")}</a>
    </article>`;
  }
  if (block.type === "stats") {
    return `<article class="custom-block">
      <h3>${esc(block.title)}</h3>
      <div class="custom-stats">
        ${(block.items || []).map(item => `<div class="custom-stat"><p class="custom-stat-value">${esc(item.value || "")}</p><p class="custom-stat-label">${esc(item.label || "")}</p></div>`).join("")}
      </div>
    </article>`;
  }
  return `<article class="custom-block">
    <h3>${esc(block.title)}</h3>
    ${(block.body || "").split("\n\n").filter(Boolean).map(p => `<p>${esc(p)}</p>`).join("")}
  </article>`;
}

function renderBuilderBlocks(sec) {
  const blocks = Array.isArray(sec.blocks) ? sec.blocks.filter(Boolean) : [];
  if (!blocks.length) return "";
  const layout = sec.settings && sec.settings.blockLayout ? sec.settings.blockLayout : "grid";
  const surface = sec.settings && sec.settings.blockSurface ? sec.settings.blockSurface : "card";
  return `<div class="builder-block-grid builder-block-${esc(layout)} builder-surface-${esc(surface)} anim d2">${blocks.map(renderCustomBlock).join("")}</div>`;
}

function renderBuilderSectionStyle(sec) {
  const theme = sec.settings && sec.settings.theme ? sec.settings.theme : null;
  if (!theme || theme.inherit !== false) return "";
  const parts = [];
  if (theme.primary) parts.push(`--primary:${theme.primary}`);
  if (theme.accent) parts.push(`--accent:${theme.accent}`);
  if (theme.card) parts.push(`--card:${theme.card}`);
  if (theme.bg) parts.push(`--bg:${theme.bg};background-color:${theme.bg}`);
  return parts.length ? ` style="${esc(parts.join(";"))}"` : "";
}

function renderPageThemeStyle(page) {
  const profile = page && page.styleProfile ? getStyleProfileById(page.styleProfile) : null;
  const profilePalette = profile && profile.palette ? profile.palette : null;
  const t = page && page.theme ? page.theme : { inherit: true };
  if (t.inherit !== false && !profilePalette) return "";
  const parts = [];
  if (profilePalette) {
    ["bg", "card", "sec", "border", "fg", "muted", "primary", "accent"].forEach(k => {
      if (profilePalette[k]) parts.push(`--${k}:${profilePalette[k]}`);
    });
  }
  if (t.primary) parts.push(`--primary:${t.primary}`);
  if (t.accent) parts.push(`--accent:${t.accent}`);
  if (t.card) parts.push(`--card:${t.card}`);
  return parts.join(";");
}

function applyThemeFromSite() {
  const root = document.documentElement;
  const palette = SITE.customization && SITE.customization.palette ? SITE.customization.palette : {};
  const fonts = SITE.customization && SITE.customization.fonts ? SITE.customization.fonts : {};
  const keys = ["bg", "card", "sec", "border", "fg", "muted", "primary", "accent"];
  keys.forEach(k => {
    if (palette[k]) root.style.setProperty(`--${k}`, palette[k]);
  });
  if (fonts.display) root.style.setProperty("--font-display", fonts.display);
  if (fonts.body) root.style.setProperty("--font-body", fonts.body);
  if (fonts.mono) root.style.setProperty("--font-mono", fonts.mono);
}

function buildNavItems(isIndex) {
  const builderPage = SITE.pages && SITE.pages[0];
  if (builderPage && Array.isArray(builderPage.sections) && builderPage.sections.length) {
    const items = builderPage.sections
      .filter(sec => sec.visible !== false && sec.navLabel)
      .map(sec => ({
        href: isIndex ? `#${sec.id}` : `index.html#${sec.id}`,
        label: sec.navLabel || sec.content?.title || "Section"
      }));
    (SITE.customPages || []).filter(p => p.visible !== false).forEach(p => {
      items.push({ href: isIndex ? `#${p.id}` : `index.html#${p.id}`, label: p.navLabel || p.title || "Page" });
    });
    items.push({ href: "resume.html", label: "Résumé" });
    return items;
  }
  const vis = SITE.customization.sectionVisibility || {};
  let base = [
    { href: isIndex ? "#projects" : "index.html#projects", label: "Projects", show: vis.projects !== false },
    { href: isIndex ? "#skills" : "index.html#skills", label: "Skills", show: vis.skills !== false },
    { href: isIndex ? "#about" : "index.html#about", label: "About", show: vis.about !== false },
    { href: isIndex ? "#contact" : "index.html#contact", label: "Contact", show: vis.contact !== false }
  ];
  const custom = (SITE.customPages || []).filter(p => p.visible !== false).map(p => ({
    href: isIndex ? `#${p.id}` : `index.html#${p.id}`,
    label: p.navLabel || p.title || "Page"
  }));
  base = base.filter(i => i.show !== false);
  base.push(...custom);
  base.push({ href: "resume.html", label: "Résumé" });
  return base;
}

function renderNav() {
  const nav = $("#nav-links");
  const mobile = $("#mobile-nav");
  if (!nav || !mobile) return;
  const isIndex = !!$("#hero-content");
  const items = buildNavItems(isIndex);
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  nav.innerHTML = items.map(item => {
    const isResume = currentPath === "resume.html" && item.href === "resume.html";
    return `<li><a href="${esc(item.href)}"${isResume ? ' class="active"' : ""}>${esc(item.label)}</a></li>`;
  }).join("");
  mobile.innerHTML = items.map(item => `<a href="${esc(item.href)}">${esc(item.label)}</a>`).join("");
}

normalizeSiteData();
applyThemeFromSite();
renderNav();

function createRuleReply(question) {
  const q = (question || "").toLowerCase();
  if (!q.trim()) return "Ask me anything about Tuur's projects, skills, background, or contact details.";
  if (q.includes("contact") || q.includes("email") || q.includes("reach")) {
    const email = (SITE.contact.links || []).find(l => (l.icon || "").toLowerCase() === "mail");
    return email ? `You can contact Tuur at ${email.handle}. You can also use the contact section links.` : "Check the Contact section for all available channels.";
  }
  if (q.includes("skill") || q.includes("stack") || q.includes("tech")) {
    const top = (SITE.skills || []).slice(0, 2).map(c => `${c.category}: ${(c.items || []).map(i => i.name).slice(0, 3).join(", ")}`).join(" | ");
    return top ? `Top skill areas: ${top}.` : "Skills are listed in the Skills section.";
  }
  if (q.includes("project") || q.includes("work") || q.includes("portfolio")) {
    const featured = (SITE.projects || []).filter(p => p.featured).slice(0, 3).map(p => p.title);
    if (featured.length) return `Featured projects include: ${featured.join(", ")}. Open the Projects section to explore all details.`;
    return `There are ${(SITE.projects || []).length} projects listed. Open the Projects section to browse them.`;
  }
  if (q.includes("resume") || q.includes("cv")) {
    return "Use the Resume page or the Download CV button in the hero section.";
  }
  if (q.includes("about") || q.includes("background") || q.includes("who")) {
    return (SITE.hero && SITE.hero.bio) ? SITE.hero.bio : "See the About section for background details.";
  }
  const match = (SITE.projects || []).find(p => q.includes((p.id || "").toLowerCase()) || q.includes((p.title || "").toLowerCase()));
  if (match) return `${match.title}: ${match.description || "Open the project card for full details."}`;
  return "I can help with projects, skills, contact info, resume, and background. Try: 'best project', 'how to contact', or 'top skills'.";
}

function bestSkillSummary() {
  const skills = (SITE.skills || []).flatMap(cat => (cat.items || []).map(item => ({
    category: cat.category,
    name: item.name,
    score: +item.score || 0
  }))).sort((a, b) => b.score - a.score);
  if (!skills.length) return "";
  const top = skills.slice(0, 3).map(s => `${s.name} (${s.score.toFixed(1)}/5)`).join(", ");
  return `Tuur's strongest listed skills are ${top}.`;
}

function projectSummary() {
  const featured = (SITE.projects || []).filter(p => p.featured).slice(0, 3);
  const picks = featured.length ? featured : (SITE.projects || []).slice(0, 3);
  return picks.map(p => `${p.title}: ${p.description || p.subtitle || "portfolio project"}`).join(" ");
}

function formatPossessive(name) {
  return String(name || "Tuur").endsWith("s") ? `${name}'` : `${name}'s`;
}

function strongestSkill() {
  return (SITE.skills || []).flatMap(cat => (cat.items || []).map(item => ({
    category: cat.category,
    name: item.name,
    score: +item.score || 0
  }))).sort((a, b) => b.score - a.score)[0];
}

function hasAny(q, words) {
  return words.some(w => q.includes(w));
}

function createGroundedReply(question) {
  const raw = question || "";
  const q = raw.toLowerCase().trim();
  const name = SITE.name || "Tuur";
  const his = formatPossessive(name);
  const aiName = (SITE.customization && SITE.customization.aiAssistant && SITE.customization.aiAssistant.name) || "Nova";
  const role = (SITE.hero && SITE.hero.roles && SITE.hero.roles[0]) || "game developer";
  const bio = (SITE.hero && SITE.hero.bio) || "";
  const notes = SITE.customization && SITE.customization.aiAssistant && SITE.customization.aiAssistant.knowledgeNotes
    ? SITE.customization.aiAssistant.knowledgeNotes
    : "";
  if (/^(hi|hello|hey|yo|sup|good morning|good afternoon|good evening)\b/.test(q.trim())) {
    return `Hi! I am ${aiName}. Ask me about ${his} projects, skills, background, resume, or contact details.`;
  }
  if (hasAny(q, ["who are you", "what are you", "your name", "are you ai", "are you nova"])) {
    return `I am ${aiName}, a small portfolio assistant for ${name}. I can answer questions using the information on this site.`;
  }
  if ((q.includes("two words") || q.includes("2 words")) && hasAny(q, ["describe", "summarize", "sum up"])) {
    return "Gameplay technologist.";
  }
  if (q.includes("different words") || q.includes("different two words") || q.includes("another two words")) {
    return "AI craftsman.";
  }
  if ((q.includes("one word") || q.includes("1 word")) && hasAny(q, ["describe", "summarize", "sum up"])) {
    return "Builder.";
  }
  if (q.includes("one sentence") && hasAny(q, ["describe", "summarize", "introduce"])) {
    return `${name} is a gameplay and AI programmer who builds responsive game systems and intelligent behaviors.`;
  }
  const projectMatch = (SITE.projects || []).find(p =>
    q.includes((p.id || "").toLowerCase()) ||
    (p.title || "").toLowerCase().split(/\s+/).some(word => word.length > 4 && q.includes(word))
  );
  if (projectMatch) {
    return `${projectMatch.title} is one of ${name}'s projects. ${projectMatch.description || ""} It uses ${projectMatch.tags ? projectMatch.tags.join(", ") : projectMatch.subtitle || "his game development stack"}.`;
  }
  if (q.includes("best skill") || q.includes("strongest") || q.includes("good at")) {
    const best = strongestSkill();
    if (best) return `${his} strongest listed skill is ${best.name} (${best.score.toFixed(1)}/5), under ${best.category}. ${bestSkillSummary()}`;
    return `${his} strongest areas are gameplay programming, AI systems, and engine work.`;
  }
  if (hasAny(q, ["introduce", "who is he", "who is tuur", "about him", "his background", "background"])) {
    return `${name} is a ${role} focused on gameplay and AI programming. ${bio} ${notes ? "Extra context: " + notes : ""}`.trim();
  }
  if (hasAny(q, ["describe him", "summarize him", "sum him up"])) {
    return `${name} is a systems-minded gameplay programmer with a strong focus on AI and responsive game feel.`;
  }
  if (q.includes("project") || q.includes("work") || q.includes("portfolio")) {
    return `A good snapshot of ${name}'s work: ${projectSummary()}`;
  }
  if (q.includes("contact") || q.includes("email") || q.includes("hire") || q.includes("reach")) {
    const email = (SITE.contact.links || []).find(l => (l.icon || "").toLowerCase() === "mail");
    return email ? `You can reach ${name} at ${email.handle}. The contact section also has the rest of his links.` : `Use the contact section to reach ${name}.`;
  }
  if (q.includes("resume") || q.includes("cv")) {
    return `${his} resume is available from the Resume page and the Download CV button.`;
  }
  return `I can answer from ${his} portfolio. Try asking about his projects, strongest skills, background, resume, or contact details.`;
}

function isBadAiReply(text) {
  if (!text || text.length < 12) return true;
  const clean = text.toLowerCase();
  const words = clean.split(/\s+/).filter(Boolean);
  if (words.length < 4) return true;
  const counts = {};
  for (const w of words) counts[w] = (counts[w] || 0) + 1;
  const mostRepeated = Math.max(...Object.values(counts));
  if (mostRepeated > Math.max(4, words.length * 0.28)) return true;
  if (/(snoopy|undefined|null|portfolio facts:|question:)/i.test(text)) return true;
  return false;
}

let _llmPipeline = null;
let _llmModelLoaded = "";
let _webLLMEngine = null;
let _webLLMModelLoaded = "";
async function getLocalPipeline(modelId) {
  if (_llmPipeline && _llmModelLoaded === modelId) return _llmPipeline;
  const mod = await import("https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.2");
  _llmPipeline = await mod.pipeline("text2text-generation", modelId);
  _llmModelLoaded = modelId;
  return _llmPipeline;
}

async function getWebLLMEngine(modelId, onProgress) {
  if (_webLLMEngine && _webLLMModelLoaded === modelId) return _webLLMEngine;
  if (!navigator.gpu) throw new Error("WebGPU is not available in this browser");
  const webllm = await import("https://esm.run/@mlc-ai/web-llm");
  _webLLMEngine = await webllm.CreateMLCEngine(modelId, {
    initProgressCallback: function(report) {
      if (!onProgress) return;
      const text = report && (report.text || report.progress ? `Loading model ${Math.round((report.progress || 0) * 100)}%` : "");
      if (text) onProgress(text);
    }
  });
  _webLLMModelLoaded = modelId;
  return _webLLMEngine;
}

function withTimeout(promise, ms) {
  return new Promise((resolve, reject) => {
    const id = setTimeout(() => reject(new Error("timeout")), ms);
    promise.then(v => { clearTimeout(id); resolve(v); }).catch(e => { clearTimeout(id); reject(e); });
  });
}

function buildAssistantContext() {
  const featured = (SITE.projects || []).filter(p => p.featured).slice(0, 6).map(p => `${p.title}: ${p.description || ""}`).join(" || ");
  const skills = (SITE.skills || []).map(c => `${c.category}: ${(c.items || []).map(i => i.name).join(", ")}`).join(" || ");
  const about = SITE.hero && SITE.hero.bio ? SITE.hero.bio : "";
  const contact = (SITE.contact && SITE.contact.links ? SITE.contact.links : []).map(l => `${l.label}: ${l.handle}`).join(" || ");
  const notes = SITE.customization && SITE.customization.aiAssistant && SITE.customization.aiAssistant.knowledgeNotes
    ? SITE.customization.aiAssistant.knowledgeNotes
    : "";
  return `Portfolio facts: ${featured}. Skills: ${skills}. About: ${about}. Contact: ${contact}. Custom notes: ${notes}`;
}

async function createAssistantReply(question, cfg, history, onProgress) {
  const grounded = createGroundedReply(question);
  if ((cfg && cfg.mode) === "web-llm") {
    try {
      const modelId = (cfg && cfg.localModel) || "Qwen2.5-0.5B-Instruct-q4f16_1-MLC";
      const engine = await withTimeout(getWebLLMEngine(modelId, onProgress), 45000);
      const recent = (history || []).slice(-8).map(m => `${m.role}: ${m.content}`).join("\n");
      const messages = [
        {
          role: "system",
          content:
            `You are ${cfg.name || "Nova"}, a friendly AI assistant on Tuur Bellers' portfolio website. ` +
            `Answer naturally like a small language model, but stay grounded in the portfolio facts. ` +
            `If the user asks about you, say you are Nova, the portfolio assistant. ` +
            `If the user asks for a format like two words, one sentence, or short answer, obey it. ` +
            `Do not invent projects, employers, awards, or contact info.`
        },
        {
          role: "user",
          content:
            `Portfolio context:\n${buildAssistantContext()}\n\n` +
            `Recent conversation:\n${recent}\n\n` +
            `Reliable fallback answer if needed: ${grounded}\n\n` +
            `User question: ${question}`
        }
      ];
      const completion = await withTimeout(engine.chat.completions.create({
        messages: messages,
        temperature: 0.35,
        top_p: 0.9,
        max_tokens: 140
      }), 30000);
      const text = completion && completion.choices && completion.choices[0] && completion.choices[0].message
        ? (completion.choices[0].message.content || "").trim()
        : "";
      return isBadAiReply(text) ? grounded : text;
    } catch (_e) {
      return grounded || createRuleReply(question);
    }
  }
  return grounded || createRuleReply(question);
}

function mountAssistantWidget() {
  const cfg = SITE.customization && SITE.customization.aiAssistant ? SITE.customization.aiAssistant : {};
  if (cfg.enabled === false) return;
  if (!document.body) return;
  const existing = document.getElementById("ai-assistant");
  if (existing) existing.remove();
  const root = document.createElement("div");
  root.id = "ai-assistant";
  root.className = "ai-assistant" + (cfg.startOpen ? " open" : "");
  root.innerHTML = `
    <button class="ai-orb" id="ai-orb" aria-label="Open AI assistant">
      <span class="ai-core"></span>
      <span class="ai-ring"></span>
    </button>
    <section class="ai-panel" id="ai-panel" aria-live="polite">
      <header class="ai-head">
        <span>${esc(cfg.name || "Nova")}</span>
        <button class="ai-close" id="ai-close" aria-label="Close chat">×</button>
      </header>
      <div class="ai-mode">Mode: ${(cfg.mode || "web-llm") === "web-llm" ? "Real Browser LLM" : ((cfg.mode || "web-llm") === "browser-ai" ? "Grounded Portfolio AI" : "Simple fallback")}</div>
      <div class="ai-log" id="ai-log"></div>
      <form class="ai-input-row" id="ai-form">
        <input id="ai-input" type="text" placeholder="Ask about projects, skills, contact..." />
        <button type="submit">Send</button>
      </form>
      <div class="ai-foot-note">Disable this assistant anytime in editor Settings.</div>
    </section>
  `;
  document.body.appendChild(root);
  const log = document.getElementById("ai-log");
  const chatHistory = [];
  function pushMsg(text, who) {
    const line = document.createElement("div");
    line.className = "ai-msg " + (who === "me" ? "me" : "bot");
    line.textContent = text;
    log.appendChild(line);
    log.scrollTop = log.scrollHeight;
    if (who === "me" || who === "bot") chatHistory.push({ role: who === "me" ? "user" : "assistant", content: text });
    if (chatHistory.length > 12) chatHistory.splice(0, chatHistory.length - 12);
    return line;
  }
  pushMsg(cfg.greeting || "Hi! Ask me anything about this portfolio.", "bot");
  document.getElementById("ai-orb").addEventListener("click", () => root.classList.toggle("open"));
  document.getElementById("ai-close").addEventListener("click", () => root.classList.remove("open"));
  document.getElementById("ai-form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const input = document.getElementById("ai-input");
    const value = (input.value || "").trim();
    if (!value) return;
    pushMsg(value, "me");
    input.value = "";
    const thinkingText = (cfg.mode || "web-llm") === "web-llm" ? "Thinking..." : "Checking portfolio facts...";
    pushMsg(thinkingText, "bot");
    const pending = log.lastElementChild;
    const reply = await createAssistantReply(value, cfg, chatHistory, function(status) {
      if (pending) pending.textContent = status;
    });
    if (pending) {
      pending.textContent = reply;
      const last = chatHistory[chatHistory.length - 1];
      if (last && last.role === "assistant") last.content = reply;
    }
  });
}

mountAssistantWidget();

function renderExtrasSections() {
  const out = [];
  if (SITE.availability && SITE.availability.enabled) {
    out.push(`
      <section class="availability-banner">
        <div class="container availability-inner">
          <p>${esc(SITE.availability.text || "")}</p>
          ${SITE.availability.ctaLabel ? `<a class="btn-primary" href="${esc(SITE.availability.ctaHref || "#contact")}">${esc(SITE.availability.ctaLabel)}</a>` : ""}
        </div>
      </section>`);
  }
  if (SITE.recruiterMode && SITE.recruiterMode.enabled) {
    out.push(`
      <section id="recruiter" class="section">
        <div class="container">
          <p class="sec-num anim">// HIRE</p>
          <h2 class="sec-title anim d1">${esc(SITE.recruiterMode.headline || "RECRUITER SNAPSHOT")}</h2>
          <div class="recruiter-card anim d2">
            <p>${esc(SITE.recruiterMode.summary || "")}</p>
            <ul>${(SITE.recruiterMode.bullets || []).filter(Boolean).map(b => `<li>${esc(b)}</li>`).join("")}</ul>
            ${SITE.recruiterMode.ctaLabel ? `<a class="btn-primary" href="${esc(SITE.recruiterMode.ctaHref || "#contact")}">${esc(SITE.recruiterMode.ctaLabel)}</a>` : ""}
          </div>
        </div>
      </section>`);
  }
  if ((SITE.timeline || []).length) {
    out.push(`
      <section id="timeline" class="section">
        <div class="container">
          <p class="sec-num anim">// TIMELINE</p>
          <h2 class="sec-title anim d1">JOURNEY</h2>
          <div class="timeline-list">
            ${SITE.timeline.map((t, i) => `<article class="timeline-item anim d${(i % 4) + 1}"><p class="timeline-date">${esc(t.date || "")}</p><h3>${esc(t.title || "")}</h3><p>${esc(t.text || "")}</p></article>`).join("")}
          </div>
        </div>
      </section>`);
  }
  if ((SITE.testimonials || []).length) {
    out.push(`
      <section id="testimonials" class="section">
        <div class="container">
          <p class="sec-num anim">// REFERENCES</p>
          <h2 class="sec-title anim d1">TESTIMONIALS</h2>
          <div class="testimonial-grid">
            ${SITE.testimonials.map((t, i) => `<blockquote class="testimonial-card anim d${(i % 4) + 1}"><p>"${esc(t.quote || "")}"</p><footer>${esc(t.name || "")}${t.role ? ` — ${esc(t.role)}` : ""}</footer></blockquote>`).join("")}
          </div>
        </div>
      </section>`);
  }
  return out.join("");
}

function renderProjectCards() {
  return SITE.projects.map((p, i) => {
    const thumb = p.thumb
      ? `<div class="proj-thumb"${p.video ? ` data-video="${esc(p.video)}"` : ""}>
           <img src="${esc(p.thumb)}" alt="${esc(p.title)}" loading="lazy">
           <div class="proj-thumb-fade"></div>
         </div>`
      : `<div class="proj-thumb">
           <div class="proj-thumb-ph grid-bg"><span>${esc(p.title)}</span></div>
           <div class="proj-thumb-fade"></div>
         </div>`;
    const statusCls = p.status === "ongoing" ? "p-tag-ongoing" : "p-tag-done";
    let linksHTML = `<a class="p-link" href="project.html?id=${esc(p.id)}">${SVG.arrow}Details</a>`;
    if (p.detail && p.detail.links) {
      p.detail.links.forEach(l => {
        const icon = SVG[l.icon] || SVG.external;
        linksHTML += `<a class="p-link" href="${esc(l.url)}" target="_blank" rel="noopener">${icon}${esc(l.label)}</a>`;
      });
    }
    return `
      <article class="proj-card anim d${(i % 4) + 1}" data-tags="${esc(p.tags.join(" "))}">
        ${thumb}
        <div class="proj-body">
          <p class="proj-title">${esc(p.title)}</p>
          <p class="proj-sub">${esc(p.subtitle)}</p>
          <p class="proj-desc">${esc(p.description)}</p>
          <div class="proj-tags">
            ${p.tags.map(t => `<span class="p-tag">${esc(t)}</span>`).join("")}
            <span class="p-tag ${statusCls}">${esc(p.status)}</span>
          </div>
          <div class="proj-links">${linksHTML}</div>
        </div>
      </article>`;
  }).join("");
}

function renderSkillsGrid() {
  return SITE.skills.map((cat, i) => `
    <div class="sk-card anim d${(i % 4) + 1}">
      <p class="sk-cat">${esc(cat.category)}</p>
      ${cat.items.map(s => `
        <div class="sk-item">
          <div class="sk-row"><span class="sk-name">${esc(s.name)}</span><span class="sk-pct">${(+s.score || 0).toFixed(1)}/5</span></div>
          <div class="sk-scale">
            ${Array.from({ length: 5 }, (_, idx) => {
              const slot = idx + 1;
              const score = +s.score || 0;
              const active = score >= slot ? "active" : "";
              const half = !active && score >= slot - 0.5 ? "half" : "";
              return `<span class="sk-dot ${active || half}"></span>`;
            }).join("")}
          </div>
        </div>`).join("")}
    </div>`).join("");
}

function renderBuilderSection(section, index) {
  const sec = normalizeBuilderSection(section);
  const num = String(index + 1).padStart(2, "0");
  const title = sec.content?.title || sec.navLabel || sec.type;
  const shellClass = [
    "section",
    "builder-section",
    `builder-${sec.type}`,
    `builder-bg-${sec.settings.background}`,
    `builder-pad-${sec.settings.padding}`,
    `builder-align-${sec.settings.align}`
  ].join(" ");
  const containerClass = sec.settings.width === "full" ? "builder-container-full" : (sec.settings.width === "wide" ? "container builder-container-wide" : "container");

  if (sec.type === "hero") {
    const names = SITE.name.split(" ");
    const projectSection = SITE.pages?.[0]?.sections?.find(item => item.type === "project-grid" && item.visible !== false);
    const projectHref = projectSection ? `#${projectSection.id}` : "#projects";
    const socialHTML = SITE.contact.links.map(c =>
      `<a class="s-btn" href="${esc(c.href)}"${c.href.startsWith("mailto") ? "" : ' target="_blank" rel="noopener"'} aria-label="${esc(c.label)}">${SVG[c.icon] || ""}</a>`
    ).join("");
    return `<section id="${esc(sec.id)}" class="hero grid-bg builder-hero"${renderBuilderSectionStyle(sec)}>
      <div class="hero-content" id="hero-content">
        <p class="hero-label h-in">${esc(SITE.hero.label)}</p>
        <h1 class="hero-name h-in2">${esc(names[0])} <span class="neon">${esc(names.slice(1).join(" "))}</span></h1>
        <div class="hero-roles h-in2"><span id="role-text"></span><span class="cursor"></span></div>
        <p class="hero-bio h-in3">${esc(SITE.hero.bio)}</p>
        <div class="hero-cta h-in3">
          <a class="btn-cta primary" href="${esc(projectHref)}">View Projects</a>
          <a class="btn-cta" href="${esc(SITE.resume.file)}" target="_blank">${SVG.download} Download CV</a>
        </div>
        <div class="hero-social h-in4">${socialHTML}</div>
        ${renderBuilderBlocks(sec)}
      </div>
    </section>`;
  }
  if (sec.type === "project-grid") {
    const tags = [...new Set(SITE.projects.flatMap(p => p.tags))].sort();
    return `<section id="${esc(sec.id)}" class="${shellClass}"${renderBuilderSectionStyle(sec)}>
      <div class="${containerClass}">
        <p class="sec-num anim">// ${num}</p>
        <h2 class="sec-title anim d1">${esc(title.toUpperCase())}</h2>
        <div class="filter-row anim d2" id="filter-row">
          <button class="f-btn active" data-filter="all">All</button>
          ${tags.map(tag => `<button class="f-btn" data-filter="${esc(tag)}">${esc(tag)}</button>`).join("")}
        </div>
        <div class="proj-grid" id="proj-grid">${renderProjectCards()}</div>
        ${renderBuilderBlocks(sec)}
      </div>
    </section>`;
  }
  if (sec.type === "skills") {
    return `<section id="${esc(sec.id)}" class="${shellClass}"${renderBuilderSectionStyle(sec)}>
      <div class="${containerClass}">
        <p class="sec-num anim">// ${num}</p>
        <h2 class="sec-title anim d1">${esc(title.toUpperCase())}</h2>
        <div class="skills-grid" id="skills-grid">${renderSkillsGrid()}</div>
        ${renderBuilderBlocks(sec)}
      </div>
    </section>`;
  }
  if (sec.type === "about") {
    return `<section id="${esc(sec.id)}" class="${shellClass}"${renderBuilderSectionStyle(sec)}>
      <div class="${containerClass}">
        <p class="sec-num anim">// ${num}</p>
        <h2 class="sec-title anim d1">${esc(title.toUpperCase())}</h2>
        <div class="about-grid" id="about-grid">
          <div class="ab-card anim-left">${SITE.about.bio.map(p => `<p>${esc(p)}</p>`).join("")}</div>
          <div class="ab-card anim-right">
            <p class="edu-head">EDUCATION</p>
            ${SITE.about.education.map(e => `
              <div class="edu-item">
                <p class="edu-deg">${SVG.cap} ${esc(e.degree)}</p>
                <p class="edu-school">${esc(e.school)}</p>
                <p class="edu-year">${SVG.calendar} ${esc(e.years)}</p>
                <p class="edu-detail">${esc(e.detail)}</p>
              </div>`).join("")}
          </div>
        </div>
        ${renderBuilderBlocks(sec)}
      </div>
    </section>`;
  }
  if (sec.type === "contact") {
    return `<section id="${esc(sec.id)}" class="${shellClass}"${renderBuilderSectionStyle(sec)}>
      <div class="${containerClass}">
        <p class="sec-num anim">// ${num}</p>
        <h2 class="sec-title anim d1">${esc(title.toUpperCase())}</h2>
        <p class="contact-sub anim d2">${esc(SITE.contact.sub)}</p>
        <div class="contact-list" id="contact-list">${SITE.contact.links.map((c, i) => `
          <a class="c-link anim d${i + 1}" href="${esc(c.href)}"${c.href.startsWith("mailto") ? "" : ' target="_blank" rel="noopener"'}>
            <div class="c-icon">${SVG[c.icon] || ""}</div>
            <div><p class="c-label">${esc(c.label)}</p><p class="c-handle">${esc(c.handle)}</p></div>
          </a>`).join("")}</div>
        ${renderBuilderBlocks(sec)}
      </div>
    </section>`;
  }
  if (sec.type === "timeline" && (SITE.timeline || []).length) {
    return `<section id="${esc(sec.id)}" class="${shellClass}"${renderBuilderSectionStyle(sec)}><div class="${containerClass}">
      <p class="sec-num anim">// ${num}</p><h2 class="sec-title anim d1">${esc(title.toUpperCase())}</h2>
      <div class="timeline-list">${SITE.timeline.map((t, i) => `<article class="timeline-item anim d${(i % 4) + 1}"><p class="timeline-date">${esc(t.date || "")}</p><h3>${esc(t.title || "")}</h3><p>${esc(t.text || "")}</p></article>`).join("")}</div>
      ${renderBuilderBlocks(sec)}
    </div></section>`;
  }
  if (sec.type === "testimonials" && (SITE.testimonials || []).length) {
    return `<section id="${esc(sec.id)}" class="${shellClass}"${renderBuilderSectionStyle(sec)}><div class="${containerClass}">
      <p class="sec-num anim">// ${num}</p><h2 class="sec-title anim d1">${esc(title.toUpperCase())}</h2>
      <div class="testimonial-grid">${SITE.testimonials.map((t, i) => `<blockquote class="testimonial-card anim d${(i % 4) + 1}"><p>"${esc(t.quote || "")}"</p><footer>${esc(t.name || "")}${t.role ? ` - ${esc(t.role)}` : ""}</footer></blockquote>`).join("")}</div>
      ${renderBuilderBlocks(sec)}
    </div></section>`;
  }
  if (sec.type === "availability" && SITE.availability && SITE.availability.enabled) {
    return `<section id="${esc(sec.id)}" class="availability-banner builder-availability"${renderBuilderSectionStyle(sec)}><div class="container availability-inner"><p>${esc(SITE.availability.text || "")}</p>${SITE.availability.ctaLabel ? `<a class="btn-primary" href="${esc(SITE.availability.ctaHref || "#contact")}">${esc(SITE.availability.ctaLabel)}</a>` : ""}</div>${renderBuilderBlocks(sec)}</section>`;
  }
  if (sec.type === "recruiter" && SITE.recruiterMode && SITE.recruiterMode.enabled) {
    return `<section id="${esc(sec.id)}" class="${shellClass}"${renderBuilderSectionStyle(sec)}><div class="${containerClass}">
      <p class="sec-num anim">// ${num}</p><h2 class="sec-title anim d1">${esc((SITE.recruiterMode.headline || title).toUpperCase())}</h2>
      <div class="recruiter-card anim d2"><p>${esc(SITE.recruiterMode.summary || "")}</p><ul>${(SITE.recruiterMode.bullets || []).filter(Boolean).map(b => `<li>${esc(b)}</li>`).join("")}</ul>${SITE.recruiterMode.ctaLabel ? `<a class="btn-primary" href="${esc(SITE.recruiterMode.ctaHref || "#contact")}">${esc(SITE.recruiterMode.ctaLabel)}</a>` : ""}</div>
      ${renderBuilderBlocks(sec)}
    </div></section>`;
  }
  return `<section id="${esc(sec.id)}" class="${shellClass}"${renderBuilderSectionStyle(sec)}>
    <div class="${containerClass}">
      <p class="sec-num anim">// ${num}</p>
      <h2 class="sec-title anim d1">${esc(title.toUpperCase())}</h2>
      ${renderBuilderBlocks(sec) || `<div class="custom-block anim d2">
        ${sec.content?.text ? sec.content.text.split("\n\n").map(p => `<p>${esc(p)}</p>`).join("") : ""}
        ${sec.content?.ctaLabel ? `<a class="btn-primary" href="${esc(sec.content.ctaHref || "#contact")}">${esc(sec.content.ctaLabel)}</a>` : ""}
      </div>`}
    </div>
  </section>`;
}

function renderBuilderPage() {
  const page = SITE.pages && SITE.pages[0];
  if (!page || !Array.isArray(page.sections) || !page.sections.length) return false;
  const root = $("#page-root");
  if (!root) return false;
  ["home", "projects", "skills", "about", "contact", "extras-root", "custom-pages-root"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = "none";
  });
  const customPagesHTML = (SITE.customPages || []).filter(page => page.visible !== false).map((customPage, i) => `
    <section id="${esc(customPage.id)}" class="section">
      <div class="container">
        <p class="sec-num anim">// ${String(page.sections.length + i + 1).padStart(2, "0")}</p>
        <h2 class="sec-title anim d1">${esc((customPage.title || "Custom Page").toUpperCase())}</h2>
        <div class="custom-page-content custom-page-content-${esc(customPage.layout || "stack")} anim d2" style="${renderPageThemeStyle(customPage)}">
          ${(customPage.blocks || []).map(renderCustomBlock).join("")}
        </div>
      </div>
    </section>
  `).join("");
  root.innerHTML = page.sections.filter(sec => sec.visible !== false).map(renderBuilderSection).join("") + customPagesHTML;
  return true;
}

function initIndexInteractions() {
  const roleEl = $("#role-text");
  const roles = SITE.hero && Array.isArray(SITE.hero.roles) ? SITE.hero.roles.filter(Boolean) : [];
  if (roleEl && roles.length) {
    let ri = 0, ci = 0, deleting = false;
    function typeStep() {
      if (!deleting) {
        roleEl.textContent = roles[ri].slice(0, ++ci);
        if (ci === roles[ri].length) { deleting = true; setTimeout(typeStep, 2000); return; }
        setTimeout(typeStep, 90);
      } else {
        roleEl.textContent = roles[ri].slice(0, --ci);
        if (ci === 0) { deleting = false; ri = (ri + 1) % roles.length; setTimeout(typeStep, 400); return; }
        setTimeout(typeStep, 45);
      }
    }
    setTimeout(typeStep, 1200);
  }
  $$("#filter-row .f-btn").forEach(btn => {
    btn.addEventListener("click", () => filterProjects(btn.dataset.filter || "all", btn));
  });
}


// ================================================================
//  INDEX PAGE — render hero, projects, skills, about, contact
// ================================================================
const heroEl = $("#hero-content");
if (heroEl) {
  const builderRendered = renderBuilderPage();
  if (builderRendered) {
    initIndexInteractions();
  } else {
  const vis = SITE.customization.sectionVisibility || {};
  const sectionIds = ["projects", "skills", "about", "contact"];
  sectionIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = vis[id] === false ? "none" : "";
  });

  // ---- Hero --------------------------------------------------
  const names = SITE.name.split(" ");
  const socialHTML = SITE.contact.links.map(c =>
    `<a class="s-btn" href="${esc(c.href)}"${c.href.startsWith("mailto") ? "" : ' target="_blank" rel="noopener"'} aria-label="${esc(c.label)}">${SVG[c.icon] || ""}</a>`
  ).join("");

  heroEl.innerHTML = `
    <p class="hero-label h-in">${esc(SITE.hero.label)}</p>
    <h1 class="hero-name h-in2">${esc(names[0])} <span class="neon">${esc(names.slice(1).join(" "))}</span></h1>
    <div class="hero-roles h-in2"><span id="role-text"></span><span class="cursor"></span></div>
    <p class="hero-bio h-in3">${esc(SITE.hero.bio)}</p>
    <div class="hero-cta h-in3">
      <a class="btn-cta primary" href="#projects">View Projects</a>
      <a class="btn-cta" href="${esc(SITE.resume.file)}" target="_blank">${SVG.download} Download CV</a>
    </div>
    <div class="hero-social h-in4">${socialHTML}</div>`;

  // ---- Typing animation --------------------------------------
  const roleEl = $("#role-text");
  const roles = SITE.hero.roles;
  let ri = 0, ci = 0, deleting = false;
  function typeStep() {
    if (!deleting) {
      roleEl.textContent = roles[ri].slice(0, ++ci);
      if (ci === roles[ri].length) { deleting = true; setTimeout(typeStep, 2000); return; }
      setTimeout(typeStep, 90);
    } else {
      roleEl.textContent = roles[ri].slice(0, --ci);
      if (ci === 0) { deleting = false; ri = (ri + 1) % roles.length; setTimeout(typeStep, 400); return; }
      setTimeout(typeStep, 45);
    }
  }
  setTimeout(typeStep, 1200);

  // ---- Skills ------------------------------------------------
  if (vis.skills !== false) $("#skills-grid").innerHTML = SITE.skills.map((cat, i) => `
    <div class="sk-card anim d${(i % 4) + 1}">
      <p class="sk-cat">${esc(cat.category)}</p>
      ${cat.items.map(s => `
        <div class="sk-item">
          <div class="sk-row"><span class="sk-name">${esc(s.name)}</span><span class="sk-pct">${(+s.score || 0).toFixed(1)}/5</span></div>
          <div class="sk-scale">
            ${Array.from({ length: 5 }, (_, idx) => {
              const slot = idx + 1;
              const score = +s.score || 0;
              const active = score >= slot ? "active" : "";
              const half = !active && score >= slot - 0.5 ? "half" : "";
              return `<span class="sk-dot ${active || half}"></span>`;
            }).join("")}
          </div>
        </div>`).join("")}
    </div>`).join("");

    // ---- Filter buttons ----------------------------------------
    const allTags = [...new Set(SITE.projects.flatMap(p => p.tags))].sort();
    const filterRow = $("#filter-row");

    // Attach event listener to the existing hardcoded "All" button
    const allBtn = filterRow.querySelector('[data-filter="all"]');
    if (allBtn) {
        allBtn.addEventListener("click", () => filterProjects("all", allBtn));
    }

    allTags.forEach(tag => {
        const b = Object.assign(document.createElement("button"), { className: "f-btn", textContent: tag });
        b.dataset.filter = tag;
        b.addEventListener("click", () => filterProjects(tag, b));
        filterRow.appendChild(b);
    });

  // ---- Project cards -----------------------------------------
  if (vis.projects !== false) $("#proj-grid").innerHTML = SITE.projects.map((p, i) => {
    const thumb = p.thumb
      ? `<div class="proj-thumb"${p.video ? ` data-video="${esc(p.video)}"` : ""}>
           <img src="${esc(p.thumb)}" alt="${esc(p.title)}" loading="lazy">
           <div class="proj-thumb-fade"></div>
         </div>`
      : `<div class="proj-thumb">
           <div class="proj-thumb-ph grid-bg"><span>${esc(p.title)}</span></div>
           <div class="proj-thumb-fade"></div>
         </div>`;

    const statusCls = p.status === "ongoing" ? "p-tag-ongoing" : "p-tag-done";

    // Auto-generate card links: "See more" + external links from detail
    let linksHTML = `<a class="p-link" href="project.html?id=${esc(p.id)}">${SVG.arrow}Details</a>`;
    if (p.detail && p.detail.links) {
      p.detail.links.forEach(l => {
        const icon = SVG[l.icon] || SVG.external;
        linksHTML += `<a class="p-link" href="${esc(l.url)}" target="_blank" rel="noopener">${icon}${esc(l.label)}</a>`;
      });
    }

    return `
      <article class="proj-card anim d${(i % 4) + 1}" data-tags="${esc(p.tags.join(" "))}">
        ${thumb}
        <div class="proj-body">
          <p class="proj-title">${esc(p.title)}</p>
          <p class="proj-sub">${esc(p.subtitle)}</p>
          <p class="proj-desc">${esc(p.description)}</p>
          <div class="proj-tags">
            ${p.tags.map(t => `<span class="p-tag">${esc(t)}</span>`).join("")}
            <span class="p-tag ${statusCls}">${esc(p.status)}</span>
          </div>
          <div class="proj-links">${linksHTML}</div>
        </div>
      </article>`;
  }).join("");

  // ---- About -------------------------------------------------
  if (vis.about !== false) $("#about-grid").innerHTML = `
    <div class="ab-card anim-left">
      ${SITE.about.bio.map(p => `<p>${esc(p)}</p>`).join("")}
    </div>
    <div class="ab-card anim-right">
      <p class="edu-head">EDUCATION</p>
      ${SITE.about.education.map(e => `
        <div class="edu-item">
          <p class="edu-deg">${SVG.cap} ${esc(e.degree)}</p>
          <p class="edu-school">${esc(e.school)}</p>
          <p class="edu-year">${SVG.calendar} ${esc(e.years)}</p>
          <p class="edu-detail">${esc(e.detail)}</p>
        </div>`).join("")}
    </div>`;

  // ---- Contact -----------------------------------------------
  if (vis.contact !== false) $("#contact-sub").textContent = SITE.contact.sub;
  if (vis.contact !== false) $("#contact-list").innerHTML = SITE.contact.links.map((c, i) => `
    <a class="c-link anim d${i + 1}" href="${esc(c.href)}"${c.href.startsWith("mailto") ? "" : ' target="_blank" rel="noopener"'}>
      <div class="c-icon">${SVG[c.icon] || ""}</div>
      <div>
        <p class="c-label">${esc(c.label)}</p>
        <p class="c-handle">${esc(c.handle)}</p>
      </div>
    </a>`).join("");

  const extrasRoot = $("#extras-root");
  if (extrasRoot) {
    extrasRoot.innerHTML = renderExtrasSections();
  }

  const customRoot = $("#custom-pages-root");
  customRoot.innerHTML = (SITE.customPages || []).filter(page => page.visible !== false).map((page, i) => `
    <section id="${esc(page.id)}" class="section">
      <div class="container">
        <p class="sec-num anim">// ${String(5 + i).padStart(2, "0")}</p>
        <h2 class="sec-title anim d1">${esc((page.title || "Custom Page").toUpperCase())}</h2>
        <div class="custom-page-content custom-page-content-${esc(page.layout || "stack")} anim d2" style="${renderPageThemeStyle(page)}">
          ${(page.blocks || []).map(renderCustomBlock).join("")}
        </div>
      </div>
    </section>
  `).join("");
  }
}


// ================================================================
//  PROJECT DETAIL PAGE
// ================================================================
const detailEl = $("#project-detail");
if (detailEl) {
  const id = new URLSearchParams(window.location.search).get("id");
  const proj = SITE.projects.find(p => p.id === id);

  if (!proj || !proj.detail) {
    detailEl.innerHTML = `
      <div style="padding:120px 0 60px;text-align:center;">
        <h1 style="font-family:var(--font-display);color:var(--primary);margin-bottom:16px;">Project not found</h1>
        <a class="btn-outline" href="index.html#projects">${SVG.back} Back to projects</a>
      </div>`;
  } else {
    document.title = `${proj.title} — Tuur Bellers`;
    const d = proj.detail;
    const statusCls = proj.status === "ongoing" ? "p-tag-ongoing" : "p-tag-done";

    // Hero: image/media + info in two columns
    const heroMedia = proj.thumb
      ? `<div class="detail-media"><img src="${esc(proj.thumb)}" alt="${esc(proj.title)}"></div>`
      : "";

    const heroGrid = proj.thumb ? "detail-hero" : "detail-hero detail-hero--no-media";

    // Demo video
    let videoHTML = "";
    if (d.demoVideo) {
      videoHTML = `
        <div class="detail-video anim">
          <h2>DEMO</h2>
          <video controls muted loop playsinline preload="metadata"${d.demoVideo.poster ? ` poster="${esc(d.demoVideo.poster)}"` : ""}>
            <source src="${esc(d.demoVideo.src)}" type="video/mp4"/>
          </video>
        </div>`;
    }

    // Sections
    const sectionsHTML = d.sections.map(sec => {
      const colsHTML = sec.columns.map(col => {
        let body = "";
        if (col.text) {
          body = col.text.split("\n\n").map(p => `<p>${esc(p)}</p>`).join("");
        }
        if (col.items) {
          body = `<ul>${col.items.map(li => `<li>${esc(li)}</li>`).join("")}</ul>`;
        }
        return `<div class="detail-card"><h2>${esc(col.title)}</h2>${body}</div>`;
      }).join("");

      const cls = sec.layout === "two-col" ? "detail-two-col anim" : "anim";
      return `<div class="${cls}">${colsHTML}</div>`;
    }).join("");

    // Bottom links
    const linksHTML = d.links.map(l => {
      const icon = SVG[l.icon] || SVG.external;
      return `<a class="btn-outline" href="${esc(l.url)}" target="_blank" rel="noopener">${icon} ${esc(l.label)}</a>`;
    }).join("");

    detailEl.innerHTML = `
      <div class="${heroGrid}">
        ${heroMedia}
        <div class="detail-info">
          <a class="detail-back" href="index.html#projects">${SVG.back} Back to projects</a>
          <h1>${esc(proj.title)}</h1>
          <p class="detail-lede">${esc(d.lede)}</p>
          <p class="detail-meta">${esc(d.date)}</p>
          <div class="detail-tags">
            ${proj.tags.map(t => `<span class="p-tag">${esc(t)}</span>`).join("")}
            <span class="p-tag ${statusCls}">${esc(proj.status)}</span>
          </div>
        </div>
      </div>

      ${videoHTML}

      <div class="detail-sections">${sectionsHTML}</div>

      <div class="detail-links">
        ${linksHTML}
        <a class="btn-outline" href="index.html#projects">${SVG.back} All projects</a>
      </div>`;
  }
}


// ================================================================
//  TAG FILTER
// ================================================================
function filterProjects(tag, btn) {
  $$(".f-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  $$(".proj-card").forEach(card => {
    const show = tag === "all" || card.dataset.tags.split(" ").includes(tag);
    card.style.display = show ? "" : "none";
  });
}


// ================================================================
//  HAMBURGER MENU
// ================================================================
const hamburger = $("#hamburger");
const mobileNav = $("#mobile-nav");
if (hamburger && mobileNav) {
  hamburger.addEventListener("click", () => {
    const open = mobileNav.classList.toggle("open");
    hamburger.classList.toggle("open", open);
    hamburger.setAttribute("aria-expanded", String(open));
  });
  $$("a", mobileNav).forEach(a => a.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    hamburger.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
  }));
}


// ================================================================
//  SCROLL ANIMATIONS (IntersectionObserver)
// ================================================================
const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add("in");
    io.unobserve(e.target);
  });
}, { threshold: 0.12 });

$$(".anim, .anim-left, .anim-right").forEach(el => io.observe(el));


// ================================================================
//  HOVER VIDEO PREVIEW (project cards)
// ================================================================
$$(".proj-thumb[data-video]").forEach(el => {
  const img = el.querySelector("img");
  if (!img) return;
  let vid = null;
  el.addEventListener("mouseenter", () => {
    if (!vid) {
      vid = Object.assign(document.createElement("video"), {
        src: el.dataset.video, muted: true, loop: true, playsInline: true,
      });
      vid.style.cssText = "position:absolute;inset:0;width:100%;height:100%;object-fit:cover;z-index:1";
    }
    el.appendChild(vid);
    vid.play().catch(() => {});
  });
  el.addEventListener("mouseleave", () => {
    if (vid) { vid.pause(); vid.remove(); }
  });
});


// ================================================================
//  YEAR
// ================================================================
const yearEl = $("#year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
