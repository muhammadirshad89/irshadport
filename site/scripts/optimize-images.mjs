// Optional helper: creates a lightweight WebP thumbnail next to each image
// in public/portfolio/latest and public/portfolio/graphic-design.
// Usage: npm run optimize
// Then add  thumb: 'yourfile-thumb.webp'  to the project entry (the full file is still used in the viewer).
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const dirs = ['public/portfolio/latest', 'public/portfolio/graphic-design'];
const exts = new Set(['.jpg', '.jpeg', '.png', '.webp']);

for (const dir of dirs) {
  if (!fs.existsSync(dir)) continue;
  for (const file of fs.readdirSync(dir)) {
    const { name, ext } = path.parse(file);
    if (!exts.has(ext.toLowerCase()) || name.endsWith('-thumb')) continue;
    const out = path.join(dir, `${name}-thumb.webp`);
    if (fs.existsSync(out)) continue;
    await sharp(path.join(dir, file)).resize({ width: 900, withoutEnlargement: true }).webp({ quality: 78 }).toFile(out);
    console.log('created', out);
  }
}
