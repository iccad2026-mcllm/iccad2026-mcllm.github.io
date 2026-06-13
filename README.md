# ICCAD 2026 Workshop — Website

Static website for the ICCAD 2026 Workshop, served via GitHub Pages.

- **Repo:** https://github.com/PopsicleTan/iccad-2026
- **Live URL (after deploy):** https://popsicletan.github.io/iccad-2026/

> Current content is **placeholder**, borrowed from the HALO 2020 workshop
> ([iccad-halo.github.io](https://iccad-halo.github.io)) for layout purposes.
> Replace the text in `index.html` with real ICCAD 2026 details — search for
> `PLACEHOLDER` / `TODO` comments.

## Structure

```
.
├── index.html      # single-page site (all sections)
├── css/style.css   # styles
├── js/main.js      # mobile nav toggle
├── .nojekyll       # serve files as-is (no Jekyll processing)
└── README.md
```

## Preview locally

```bash
cd /home/tankaixin/program/web
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy to GitHub Pages

```bash
cd /home/tankaixin/program/web
git init
git add .
git commit -m "Initial ICCAD 2026 workshop site"
git branch -M main
git remote add origin https://github.com/PopsicleTan/iccad-2026.git
git push -u origin main
```

Then on GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a
branch → Branch: `main` / `(root)`**. The site goes live at
`https://popsicletan.github.io/iccad-2026/` within a minute or two.
