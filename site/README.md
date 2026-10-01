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

**Latest Work: Last 3 Months** contains the entries marked `latest: true` in `src/data/portfolio.js`. To move a design in or out, change that flag and move its two files (`name.webp` and `name-thumb.webp`) between `public/portfolio/latest/` and `public/portfolio/graphic-design/`. No dates are shown because none were provided; add `date: '2026-09'` (real dates only) to any entry to show one.

## Before you publish
1. **Photo / CV:** overwrite `public/profile/irshad-portrait.jpg` or `public/resume/Syyed_Muhummad_Irshad_Resume.pdf` (same names) to update them.
2. **Links:** `src/data/profile.js` holds contact details. WhatsApp is set to 923218100537; `linkedin`, `instagram`, `youtube` are `null` (hidden) until you add them.
3. **Domain:** the canonical domain is `https://irshadport.vercel.app/`. It is set in `index.html`, `public/robots.txt` and `public/sitemap.xml`. If you move to a custom domain, replace it in those three files and in `src/data/profile.js` (`siteUrl`).

## SEO notes
- Metadata, Open Graph / Twitter tags and JSON-LD (WebSite, ProfilePage, Person) live in `index.html`. Keep the name, job title and phone there in step with `src/data/profile.js`.
- `public/og-image.jpg` (1200x630) is the social sharing image.
- `public/sitemap.xml` lists the one page plus its images and videos. When you add work in `portfolio.js`, add the matching `<image:image>` / `<video:video>` entry and update `<lastmod>`.
- Give every new project a meaningful `title`, `alt` and `description`, and a real `date: 'YYYY-MM'` for Latest Work. Do not use made-up dates.
- `public/404.html` is the not-found page; `vercel.json` sets caching and basic security headers.

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
