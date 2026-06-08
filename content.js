// ================================================================
//
//  content.js — Single source of truth for the entire portfolio.
//
//  To update the site, edit the data below. No HTML changes needed.
//  Adding a new project = add one object to SITE.projects. That's it.
//
// ================================================================

const SITE = {
  "name": "Tuur Bellers",
  "brand": "<TB/>",
  "hero": {
    "label": "// GAME DEVELOPER",
    "roles": [
      "Gameplay Programmer",
      "AI Systems Developer",
      "UE5 / Unity",
      "Research Engineer"
    ],
    "bio": "Gameplay & AI programming student at Howest DAE — building responsive gameplay systems and intelligent behaviors that make worlds feel alive."
  },
  "about": {
    "bio": [
      "I'm a gameplay & AI programming student at Howest DAE, passionate about building systems that surprise and delight players. From behavior trees and utility AI to tight gameplay loops, I care deeply about the feel of the final product.",
      "I enjoy prototyping fast, iterating with teams, and bridging the gap between technical constraints and creative vision. I've shipped a co-op brawler with a 6-person team and built standalone AI systems from scratch in C++.",
      "Currently finishing my graduation project on LLM-driven Behavior Trees in UE5. Open to internships and junior roles in gameplay or AI programming."
    ],
    "highlights": [
      "Strong C++ background; comfortable with C#",
      "Unity & Unreal Engine 5 experience",
      "AI systems: Utility AI, FSMs, Behavior Trees",
      "Collaborative, feedback-driven workflow"
    ],
    "education": [
      {
        "degree": "DAE — Gameplay & AI Programming",
        "school": "Howest University of Applied Sciences",
        "years": "2022 – present",
        "detail": "Specialization in gameplay systems, AI for games (FSM, Utility AI, Behavior Trees), C++, C#, Unity, and Unreal Engine 5."
      }
    ]
  },
  "contact": {
    "headline": "GET IN TOUCH",
    "sub": "Open to internship and junior roles in gameplay or AI programming. I reply fast.",
    "links": [
      {
        "label": "Email",
        "handle": "tuur.bellers@gmail.com",
        "href": "mailto:tuur.bellers@gmail.com",
        "icon": "mail"
      },
      {
        "label": "GitHub",
        "handle": "@TuBeStudio",
        "href": "https://github.com/TuBeStudio",
        "icon": "github"
      },
      {
        "label": "LinkedIn",
        "handle": "linkedin.com/in/tuur-bellers",
        "href": "https://www.linkedin.com/in/tuur-bellers",
        "icon": "linkedin"
      }
    ]
  },
  "skills": [
    {
      "category": "Game Engines",
      "items": [
        {
          "name": "Unity",
          "pct": 85,
          "score": 4.3
        },
        {
          "name": "Unreal Engine 5",
          "pct": 75,
          "score": 3
        }
      ]
    },
    {
      "category": "Programming",
      "items": [
        {
          "name": "C++",
          "pct": 80,
          "score": 4
        },
        {
          "name": "C#",
          "pct": 85,
          "score": 4.3
        }
      ]
    },
    {
      "category": "AI Systems",
      "items": [
        {
          "name": "Finite State Machines",
          "pct": 90,
          "score": 4
        },
        {
          "name": "Utility AI",
          "pct": 85,
          "score": 4.3
        },
        {
          "name": "Behavior Trees",
          "pct": 80,
          "score": 4
        }
      ]
    },
    {
      "category": "Tools",
      "items": [
        {
          "name": "Git / Perforce",
          "pct": 85,
          "score": 4
        },
        {
          "name": "Blender",
          "pct": 55,
          "score": 2.5
        },
        {
          "name": "Photoshop",
          "pct": 60,
          "score": 2.5
        }
      ]
    }
  ],
  "resume": {
    "file": "assets/resume.pdf"
  },
  "projects": [
    {
      "id": "utility-ai",
      "title": "Utility AI — Autonomous Agent",
      "subtitle": "C++",
      "status": "completed",
      "featured": true,
      "tags": [
        "C++",
        "AI",
        "Systems",
        "Solo"
      ],
      "thumb": "assets/utility-thumb.png",
      "video": "assets/utility-demo.mp4",
      "description": "Hybrid FSM + Utility AI for a zombie survival game. Context-aware decision-making for exploration, item collection, fleeing, and combat.",
      "detail": {
        "lede": "Hybrid FSM + Utility AI for a zombie survival game. The agent evaluates context each frame to explore, collect items, flee, or engage.",
        "date": "May 2025 – Jun 2025",
        "demoVideo": {
          "src": "assets/utility-demo.mp4",
          "poster": "assets/utility-thumb.png"
        },
        "sections": [
          {
            "layout": "two-col",
            "columns": [
              {
                "title": "Goal",
                "text": "Build an autonomous agent that survives through robust decision-making. I combined a high-level FSM (Explore / Attack / Flee) with a per-state Utility AI that scores actions and executes the best one every frame."
              },
              {
                "title": "My Role",
                "items": [
                  "Designed Utility AI (scoring & selection loop)",
                  "Integrated FSM states with action sets",
                  "Implemented item handling, survival priorities, steering",
                  "Built debug UI & tunables for iteration"
                ]
              }
            ]
          },
          {
            "layout": "single",
            "columns": [
              {
                "title": "Highlights",
                "items": [
                  "Context-aware action scoring (health, ammo, distance, threats)",
                  "Exploration vs. item seeking vs. combat prioritization",
                  "Partial observability + simple memory",
                  "Extensible action interface"
                ]
              }
            ]
          }
        ],
        "links": [
          {
            "label": "View Code",
            "url": "https://github.com/TuurBellersDAE/Zombie-Game-AI",
            "icon": "github"
          }
        ]
      },
      "caseStudy": {
        "problem": "",
        "role": "",
        "challenge": "",
        "solution": "",
        "result": "",
        "learnings": ""
      }
    },
    {
      "id": "shrimpact",
      "title": "Shrimpact",
      "subtitle": "Unity",
      "status": "completed",
      "featured": true,
      "tags": [
        "Unity",
        "C#",
        "Gameplay",
        "Team"
      ],
      "thumb": "assets/shrimpact-thumb.png",
      "video": "assets/shrimpact-demo.mp4",
      "description": "6-person team arena brawler. I designed and built reactive environmental hazards and a lightweight fish-school AI.",
      "detail": {
        "lede": "Two-player couch co-op arena brawler built by a 6-person team.",
        "date": "Feb 2025 – Jun 2025",
        "demoVideo": {
          "src": "assets/shrimpact-demo.mp4",
          "poster": "assets/shrimpact-thumb.png"
        },
        "sections": [
          {
            "layout": "two-col",
            "columns": [
              {
                "title": "My Role",
                "items": [
                  "Designed & built interactive environmental hazards",
                  "Created lightweight fish-school AI for ambient background",
                  "Collaborated with artist to connect animation and mechanics",
                  "Worked with the team to design the game"
                ]
              },
              {
                "title": "Tech Stack",
                "items": [
                  "Unity (C#), VS, Perforce",
                  "Team: 3 programmers, 1 tech artist, 2 style artists"
                ]
              }
            ]
          }
        ],
        "links": [
          {
            "label": "Play on itch.io",
            "url": "https://jelleadyns.itch.io/shrimpact",
            "icon": "external"
          }
        ]
      },
      "caseStudy": {
        "problem": "",
        "role": "",
        "challenge": "",
        "solution": "",
        "result": "",
        "learnings": ""
      }
    },
    {
      "id": "tower-defense",
      "title": "Tower Defense",
      "subtitle": "Unity",
      "status": "completed",
      "featured": true,
      "tags": [
        "Unity",
        "C#",
        "NavMesh",
        "Solo"
      ],
      "thumb": "assets/towerdefense-thumb.png",
      "video": "assets/towerdefense-demo.mp4",
      "description": "Solo prototype — resource harvesting, NPC trading, NavMesh ally recruitment, combat, and a hunger system.",
      "detail": {
        "lede": "My first Unity game: a solo-built tower defense prototype where I handled almost all of the programming and game design.",
        "date": "2025",
        "demoVideo": {
          "src": "assets/towerdefense-demo.mp4",
          "poster": "assets/towerdefense-thumb.png"
        },
        "sections": [
          {
            "layout": "two-col",
            "columns": [
              {
                "title": "Gameplay Loop",
                "items": [
                  "Gather wood from trees and earn gold by defeating enemies",
                  "Trade with an NPC to upgrade your tower's defenses and attacks",
                  "Hire allies from another NPC who march via NavMesh to assault the opposing tower",
                  "Hunt sheep to keep hunger and health in check while managing the battlefield"
                ]
              },
              {
                "title": "Tech Highlights",
                "items": [
                  "Unity C# prototype built primarily solo, using only minimal starter assets",
                  "NavMesh-based pathfinding for enemies and recruited allies",
                  "Interactable NPC flows for tower upgrades and ally recruitment",
                  "Lightweight resource and combat systems tuned for quick sessions",
                  "Small inventory system with limited functionality"
                ]
              }
            ]
          },
          {
            "layout": "single",
            "columns": [
              {
                "title": "Notes",
                "text": "This was my first Unity project, and the core game idea was entirely my own. I owned the programming and gameplay tuning end-to-end, from harvesting and economy balancing to NPC interactions and combat."
              }
            ]
          }
        ],
        "links": [
          {
            "label": "View Code",
            "url": "https://github.com/TuurBellersDAE/GEP_UnityProject",
            "icon": "github"
          }
        ]
      },
      "caseStudy": {
        "problem": "",
        "role": "",
        "challenge": "",
        "solution": "",
        "result": "",
        "learnings": ""
      }
    },
    {
      "id": "llm-bt-evolution",
      "title": "LLM-Guided BT Evolution",
      "subtitle": "UE5 / C++",
      "status": "ongoing",
      "featured": false,
      "tags": [
        "Unreal",
        "C++",
        "AI",
        "Research"
      ],
      "thumb": null,
      "video": null,
      "description": "Research: using Large Language Models to generate and evolve Behavior Trees at runtime in UE5, then export successful structures as reusable BT assets.",
      "detail": {
        "lede": "Research project exploring how Large Language Models can generate and evolve Behavior Trees at runtime in Unreal Engine 5.",
        "date": "2025 – Present",
        "demoVideo": null,
        "sections": [
          {
            "layout": "single",
            "columns": [
              {
                "title": "Research Question",
                "text": "How can a Large Language Model (LLM) be integrated into Unreal Engine 5 to dynamically generate and evolve NPC Behavior Trees at runtime — so that the resulting trees can later function independently as standard BT assets without requiring the LLM?"
              }
            ]
          },
          {
            "layout": "single",
            "columns": [
              {
                "title": "Methodology",
                "text": "A prototype Seeker NPC is built in Unreal Engine 5 using C++. Its core abilities — movement, observation, object inspection, and memory — are implemented as reusable Behavior Tree tasks and services providing perception data such as tagged objects, lighting, and visibility.\n\nDuring testing, an LLM receives structured sensory data describing what the NPC can see and which actions it can perform. Based on this input, the model generates short BT-like plans composed of predefined actions such as MoveTo, LookAt, or CheckUnder.\n\nThese plans are interpreted by a custom runtime system inside Unreal that validates and executes each instruction, while logging success rates, timing, and contextual factors. The most successful behaviors are exported as JSON Behavior Trees and then converted into native Unreal BT assets for reuse without any LLM connection."
              }
            ]
          },
          {
            "layout": "two-col",
            "columns": [
              {
                "title": "Hypotheses",
                "items": [
                  "LLMs can produce valid, interpretable Behavior Tree structures that run successfully in Unreal Engine",
                  "LLM-guided runtime evolution yields more adaptive, context-aware NPC behavior than static designer trees",
                  "Generated BTs can be exported as reusable assets functioning independently of the LLM"
                ]
              },
              {
                "title": "Experiment Parameters",
                "items": [
                  "Independent variable: BT generation method (LLM-guided vs manually authored)",
                  "Dependent variables: success rate, adaptability, stability, believability",
                  "Scenario: single NPC hide-and-seek test in UE5",
                  "Duration: ≈ 2 months"
                ]
              }
            ]
          },
          {
            "layout": "single",
            "columns": [
              {
                "title": "Expected Outcomes",
                "items": [
                  "Demonstrate that LLMs can author and evolve Behavior Trees live in UE5",
                  "Produce exportable BT assets replicating learned behavior without further LLM input",
                  "Establish groundwork for adaptive AI pipelines combining machine reasoning with designer control"
                ]
              }
            ]
          }
        ],
        "links": []
      },
      "caseStudy": {
        "problem": "",
        "role": "",
        "challenge": "",
        "solution": "",
        "result": "",
        "learnings": ""
      }
    }
  ],
  "customization": {
    "palette": {
      "bg": "#10131e",
      "card": "#1a1f2e",
      "sec": "#202739",
      "border": "#2a3550",
      "fg": "#e8ecff",
      "muted": "#8f9ab8",
      "primary": "#2dd4bf",
      "accent": "#a78bfa"
    },
    "fonts": {
      "display": "'Orbitron', 'Segoe UI', sans-serif",
      "body": "'Segoe UI', 'Verdana', 'Tahoma', sans-serif",
      "mono": "'Cascadia Code', 'Consolas', monospace"
    },
    "sectionVisibility": {
      "projects": true,
      "skills": true,
      "about": true,
      "contact": true
    },
    "aiAssistant": {
      "enabled": true,
      "name": "Nova",
      "greeting": "Hi! I am Nova, Tuur's portfolio assistant. Ask me about projects, skills, or contact info.",
      "startOpen": false
    },
    "pageTemplates": [],
    "styleProfiles": [
      {
        "id": "cyber-core",
        "name": "Cyber Core",
        "palette": {
          "bg": "#10131e",
          "card": "#1a1f2e",
          "sec": "#202739",
          "border": "#2a3550",
          "fg": "#e8ecff",
          "muted": "#8f9ab8",
          "primary": "#2dd4bf",
          "accent": "#a78bfa"
        },
        "fonts": {
          "display": "'Orbitron', 'Segoe UI', sans-serif",
          "body": "'Segoe UI', 'Verdana', 'Tahoma', sans-serif",
          "mono": "'Cascadia Code', 'Consolas', monospace"
        }
      }
    ],
    "currentStyleProfile": "cyber-core",
    "builderSectionPrefabs": []
  },
  "customPages": [],
  "availability": {
    "enabled": false,
    "text": "Open to internships and junior gameplay/AI roles.",
    "ctaLabel": "Contact",
    "ctaHref": "#contact"
  },
  "recruiterMode": {
    "enabled": false,
    "headline": "Recruiter Snapshot",
    "summary": "Short hiring-focused summary.",
    "bullets": [
      "Top skill",
      "Best project",
      "Availability"
    ],
    "ctaLabel": "Download CV",
    "ctaHref": "assets/resume.pdf"
  },
  "timeline": [],
  "testimonials": [],
  "pages": [
    {
      "id": "home",
      "title": "Home",
      "sections": [
        {
          "id": "home",
          "type": "hero",
          "visible": true,
          "navLabel": "Hero",
          "settings": {
            "width": "boxed",
            "padding": "normal",
            "align": "left",
            "background": "default",
            "blockLayout": "grid",
            "blockSurface": "card",
            "theme": {
              "inherit": true,
              "primary": "",
              "accent": "",
              "card": "",
              "bg": ""
            }
          },
          "content": {
            "title": "Hero",
            "text": "",
            "ctaLabel": "",
            "ctaHref": "#contact"
          },
          "blocks": []
        },
        {
          "id": "projects",
          "type": "project-grid",
          "visible": true,
          "navLabel": "Projects",
          "settings": {
            "width": "boxed",
            "padding": "normal",
            "align": "left",
            "background": "default",
            "blockLayout": "grid",
            "blockSurface": "card",
            "theme": {
              "inherit": true,
              "primary": "",
              "accent": "",
              "card": "",
              "bg": ""
            }
          },
          "content": {
            "title": "Projects",
            "text": "",
            "ctaLabel": "",
            "ctaHref": "#contact"
          },
          "blocks": []
        },
        {
          "id": "skills",
          "type": "skills",
          "visible": true,
          "navLabel": "Skills",
          "settings": {
            "width": "boxed",
            "padding": "normal",
            "align": "left",
            "background": "default",
            "blockLayout": "grid",
            "blockSurface": "card",
            "theme": {
              "inherit": true,
              "primary": "",
              "accent": "",
              "card": "",
              "bg": ""
            }
          },
          "content": {
            "title": "Skills",
            "text": "",
            "ctaLabel": "",
            "ctaHref": "#contact"
          },
          "blocks": []
        },
        {
          "id": "about",
          "type": "about",
          "visible": true,
          "navLabel": "About",
          "settings": {
            "width": "boxed",
            "padding": "normal",
            "align": "left",
            "background": "default",
            "blockLayout": "grid",
            "blockSurface": "card",
            "theme": {
              "inherit": true,
              "primary": "",
              "accent": "",
              "card": "",
              "bg": ""
            }
          },
          "content": {
            "title": "About",
            "text": "",
            "ctaLabel": "",
            "ctaHref": "#contact"
          },
          "blocks": []
        },
        {
          "id": "contact",
          "type": "contact",
          "visible": true,
          "navLabel": "Contact",
          "settings": {
            "width": "boxed",
            "padding": "normal",
            "align": "left",
            "background": "default",
            "blockLayout": "grid",
            "blockSurface": "card",
            "theme": {
              "inherit": true,
              "primary": "",
              "accent": "",
              "card": "",
              "bg": ""
            }
          },
          "content": {
            "title": "Contact",
            "text": "",
            "ctaLabel": "",
            "ctaHref": "#contact"
          },
          "blocks": []
        }
      ]
    }
  ]
};

// Live-preview support — when opened via editor.html the iframe adds ?draft=1
// so the page reads the editor's in-progress data from localStorage.
// On the published site this never triggers (no query param, no localStorage).
try {
  if (new URLSearchParams(window.location.search).has("draft")) {
    const _d = localStorage.getItem("portfolio-draft");
    if (_d) { const _p = JSON.parse(_d); for (const _k in _p) SITE[_k] = _p[_k]; }
  }
} catch (_e) { /* silently ignore */ }
