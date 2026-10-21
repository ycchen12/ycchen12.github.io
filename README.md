# 陳又銓 Yu Chuan Chen — Personal website

Static academic portfolio migrated from the updated Yu Chuan Chen website: personal photo, publications, projects, and contact details, with a cream and blue layout and bundled fonts.

Includes the **Gaze-to-Body** and **AudioAvatar** publications, plus **Sheep Invader** and **Indoor Weather** project descriptions and demos. The navigation links to Publications, Projects, and a CV hosted on Google Drive. The introduction also links to email, GitHub, and CV.

## Deploy

In Settings → Pages, set **Build and deployment → Source** to **GitHub Actions**. The `Deploy personal website to GitHub Pages` workflow publishes `public/` on every push to `main`; it can also be run manually from Actions.

Website: https://ycchen12.github.io/

## Edit

- `public/index.html`: content
- `public/style.css`: layout, typography, responsive styles, and reduced-motion support
- `public/app.js`: Taipei clock and footer year
- `public/profile.jpg`: personal photo
- `public/sheep-invader.jpg`: Sheep Invader video thumbnail
- `public/indoor-weather.png`: Indoor Weather cover from the supplied project presentation
- `public/fonts/`: bundled Red Hat Display fonts

All assets use relative paths and work at the website root. No build dependencies or Sites hosting credentials are required.

## Preview locally

Run `python -m http.server 8000 --directory public` from the repository root and open `http://localhost:8000/`.
