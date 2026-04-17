# matthewsenick.com

Personal portfolio site for Matthew Senick. Vanilla HTML/CSS/JS — no frameworks, no build step, no dependencies.

Live at **[matthewsenick.com](https://matthewsenick.com)**

---

## Local Development

**Requirements:** Python 3 (for a local server) — or any static file server.

```bash
# Clone the repo
git clone https://github.com/Matts52/matts52.github.io.git
cd matts52.github.io

# Start a local server
python3 -m http.server 8000

# Open in browser
open http://localhost:8000
```

> The site fetches JSON data files at runtime via `fetch()`, so you need a local server — opening `index.html` directly in a browser will cause CORS errors on those requests.

**Alternatives to Python:**

```bash
npx serve .          # Node.js
php -S localhost:8000 # PHP
```

There is no build step. Edit files and refresh the browser.

---

## Updating Content

All site content is driven by JSON files in `data/`. Edit the relevant file and the section updates automatically.

| Section | File | Notes |
|---|---|---|
| Experience | `data/experience.json` | Renders as alternating timeline |
| Education | `data/education.json` | |
| Projects | `data/projects.json` | Set `"display": "true"` to show an entry |
| Speaking | `data/speaking.json` | Set `"upcoming": true` for the Coming Soon badge |
| Papers | `data/papers.json` | |
| Articles | `data/articles.json` | Nested `{ "medium": [], "substack": [] }`; set `"show": true` per entry |
| Contact | `data/contact.json` | |

---

## Deployment

Pushes to `main` deploy automatically via GitHub Pages. The `CNAME` file maps the custom domain.

---

## Directory Structure

```
/
├── index.html       # Page shell — section placeholders and navbar
├── index.js         # Initialization, dark mode, scroll progress, fade-in observer
├── styles.css       # All styles — design tokens, layout, components
├── 404.html         # Custom 404 page
│
├── scripts/
│   ├── gen_tiles.js # Data fetchers — one async function per section
│   └── gen_shapes.js
│
├── data/            # JSON content files
└── assets/
    ├── companies/   # Company and institution logos
    ├── icons/       # Tech stack and social icons
    ├── projects/    # Project screenshots
    ├── papers/      # Paper PDFs
    ├── files/       # Resume
    └── other/       # Avatar image
```
