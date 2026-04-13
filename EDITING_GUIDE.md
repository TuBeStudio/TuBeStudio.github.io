# Editing Guide

All content lives in **`content.js`**. You never need to touch HTML files.

---

## Add a new project (5 steps)

1. Open `content.js`
2. Find the `projects: [` array
3. Copy any existing project object (everything between `{ ... },`)
4. Paste it at the end of the array and edit the fields:
   - `id` — unique slug, used in the URL (`project.html?id=your-slug`)
   - `title`, `subtitle`, `description` — card text
   - `status` — `"completed"` or `"ongoing"`
   - `featured` — `true` to show on the home-page teaser (not currently filtered, but reserved)
   - `tags` — array of strings, also powers the filter buttons
   - `thumb` — path to thumbnail image (`"assets/my-thumb.png"`) or `null`
   - `video` — path to hover-preview video or `null`
   - `detail` — the full project page content (see below)
5. Save. Done. No new HTML file needed.

### Detail section structure

```js
detail: {
  lede: "One-paragraph summary shown at the top.",
  date: "Jan 2025 – Mar 2025",
  demoVideo: { src: "assets/my-demo.mp4", poster: "assets/my-thumb.png" },
  // or null if no video

  sections: [
    // Two-column layout
    {
      layout: "two-col",
      columns: [
        { title: "Column 1", text: "Paragraph text here." },
        { title: "Column 2", items: ["Bullet 1", "Bullet 2"] }
      ]
    },
    // Single full-width section
    {
      layout: "single",
      columns: [
        { title: "Highlights", items: ["Point A", "Point B"] }
      ]
    }
  ],

  links: [
    { label: "View Code", url: "https://github.com/...", icon: "github" },
    { label: "Play",      url: "https://...",            icon: "external" }
  ]
}
```

Available link icons: `github`, `external`, `arrow`, `mail`, `linkedin`, `download`.

---

## Edit existing content

| What                | Where in `content.js`         |
|---------------------|-------------------------------|
| Your name / brand   | `SITE.name`, `SITE.brand`     |
| Hero tagline roles  | `SITE.hero.roles` array       |
| Bio / About text    | `SITE.about.bio` array        |
| Skills              | `SITE.skills` array           |
| Contact links       | `SITE.contact.links` array    |
| Education           | `SITE.about.education` array  |
| Resume PDF path     | `SITE.resume.file`            |

---

## Add a new skill category

```js
{
  category: "Networking",
  items: [
    { name: "Photon",   pct: 70 },
    { name: "Mirror",   pct: 50 },
  ],
},
```

Drop it anywhere inside `SITE.skills`.

---

## File overview

| File           | Purpose                                    |
|----------------|--------------------------------------------|
| `content.js`   | All site content (edit this)               |
| `index.html`   | Single-page home (hero + projects + about) |
| `project.html` | Detail template (reads `?id=` from URL)    |
| `resume.html`  | Resume page with PDF embed                 |
| `styles.css`   | Stylesheet (design tokens at the top)      |
| `script.js`    | Rendering, animations, interactions        |
