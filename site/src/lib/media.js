import { projects } from '../data/portfolio.js';

const folderOf = (p) => (p.type === 'video' ? 'video' : p.latest ? 'latest' : 'graphic-design');
const isAbsolute = (f) => /^(https?:)?\/\//.test(f) || f.startsWith('/');
export const fileUrl = (p, f) => (!f ? null : isAbsolute(f) ? f : `/portfolio/${folderOf(p)}/${encodeURI(f)}`);

export const fullUrl = (p) => fileUrl(p, p.file);
export const thumbUrl = (p) => fileUrl(p, p.thumb || p.poster || (p.type === 'video' ? null : p.file));
export const posterUrl = (p) => fileUrl(p, p.poster);

export function formatDate(d) {
  if (!d) return '';
  const date = new Date(d.length === 7 ? `${d}-01T00:00:00` : d);
  return Number.isNaN(date.getTime()) ? '' : date.toLocaleDateString('en-GB', { month: 'short', year: 'numeric' });
}

export const all = projects
  .map((p, i) => ({ type: 'image', id: p.id || `p${i}`, ...p }))
  .sort((a, b) => (b.date || '').localeCompare(a.date || ''));

export const latest = all.filter((p) => p.latest && p.type !== 'video');
export const archive = all.filter((p) => !p.latest && p.type !== 'video');
export const videos = all.filter((p) => p.type === 'video');
export const featured = all.filter((p) => p.featured).slice(0, 6);
export const categoriesOf = (list) => [...new Set(list.map((p) => p.category).filter(Boolean))];
