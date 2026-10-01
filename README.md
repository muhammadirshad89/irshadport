# Syyed Muhummad Irshad: Portfolio (React + Vite)

## Run locally
```
npm install
npm run dev        # development
npm run build      # production build into dist/
npm run preview    # preview the production build
```
Deploy to Vercel: push to GitHub, import the repo in Vercel (framework: Vite, build `npm run build`, output `dist`).

## What is already included
All portfolio files in `public/portfolio/` are your own uploaded designs and videos (resized to WebP for fast loading; videos re-encoded to 720p MP4 for the web). Your portrait is `public/profile/irshad-portrait.jpg`.

**Latest Work: Last 3 Months** contains the entries marked `latest: true` in `src/data/portfolio.js`. To move a design in or out, change that flag and move its two files (`name.webp` and `name-thumb.webp`) between `public/portfolio/latest/` and `public/portfolio/graphic-design/`. No dates are shown because none were provided; add `date: '2026-09'` to any entry to show one.

## Before you publish
1. **Photo:** to replace the portrait, overwrite `public/profile/irshad-portrait.jpg` (or change `photo` in `src/data/profile.js`). A portrait of at least 800px wide looks sharpest.
2. **Resume:** the current PDF is `public/resume/Syyed_Muhummad_Irshad_Resume.pdf`. Replace the file (same name) to update it.
3. **Links:** in `src/data/profile.js` add `whatsapp` (e.g. `'923218100537'`), `linkedin`, `instagram`, `youtube`. Anything left as `null` is hidden. Only your Behance and web portfolio are included for now, since those are the only links in your resume.
4. **Domain:** replace `YOUR-DOMAIN.com` in `index.html`, `public/robots.txt` and `public/sitemap.xml`. Add an `og:image` tag (see the comment in `index.html`).

## Add new work (about 1 minute)
1. Drop the file into `public/portfolio/latest/` (recent images), `public/portfolio/graphic-design/` (older images) or `public/portfolio/video/` (videos).
2. Add one entry to `src/data/portfolio.js` (the file explains every field and includes examples).

```js
{ title: 'Medical Camp Flyer', file: 'medical-camp-flyer.jpg', category: 'Print',
  date: '2026-09', latest: true, featured: true }
```
- `latest: true` puts an image in **Latest Work: Last 3 Months**. When a project is older than 3 months, change it to `latest: false` and move the file to `graphic-design/`.
- `featured: true` shows it in **Selected Work** (maximum 6).
- Filter buttons are created automatically from the categories you use.
- Sections with no content are hidden, except Latest Work, which shows a "new work is being added" note with your Behance link.

## Speed tips
- Resize images to about 2000px on the long side; run `npm run optimize` to create small WebP thumbnails, then add `thumb: 'name-thumb.webp'`.
- Compress videos (H.264 MP4, 720p or 1080p). For large videos use a `youtube: 'VIDEO_ID'` entry instead of a file.
- Videos are never autoplayed and load only when opened.
