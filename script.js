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


// ================================================================
//  INDEX PAGE — render hero, projects, skills, about, contact
// ================================================================
const heroEl = $("#hero-content");
if (heroEl) {
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
  $("#skills-grid").innerHTML = SITE.skills.map((cat, i) => `
    <div class="sk-card anim d${(i % 4) + 1}">
      <p class="sk-cat">${esc(cat.category)}</p>
      ${cat.items.map(s => `
        <div class="sk-item">
          <div class="sk-row"><span class="sk-name">${esc(s.name)}</span><span class="sk-pct">${s.pct}%</span></div>
          <div class="sk-track"><div class="sk-fill" data-pct="${s.pct}"></div></div>
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
  $("#proj-grid").innerHTML = SITE.projects.map((p, i) => {
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
  $("#about-grid").innerHTML = `
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
  $("#contact-sub").textContent = SITE.contact.sub;
  $("#contact-list").innerHTML = SITE.contact.links.map((c, i) => `
    <a class="c-link anim d${i + 1}" href="${esc(c.href)}"${c.href.startsWith("mailto") ? "" : ' target="_blank" rel="noopener"'}>
      <div class="c-icon">${SVG[c.icon] || ""}</div>
      <div>
        <p class="c-label">${esc(c.label)}</p>
        <p class="c-handle">${esc(c.handle)}</p>
      </div>
    </a>`).join("");
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
    // Fire skill-bar fills
    e.target.querySelectorAll(".sk-fill").forEach(f => { f.style.width = f.dataset.pct + "%"; });
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
