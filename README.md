# 陳又銓 Leo Chen — Personal website

Responsive, static portfolio with project details, experience, theme switching, and print-friendly résumé.

## Deploy

In Settings → Pages, set **Build and deployment → Source** to **GitHub Actions**. The `Deploy personal website to GitHub Pages` workflow publishes `public/` on every push to `main`; it can also be run manually from Actions.

Website: https://ycchen12.github.io/

## Edit

- `public/index.html`: content
- `public/style.css`: layout, themes, responsive and print styles
- `public/app.js`: theme, navigation and print behavior

All assets use relative paths and work at the website root. No build dependencies are required.
