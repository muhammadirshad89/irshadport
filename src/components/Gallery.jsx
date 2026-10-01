import { useMemo, useState } from 'react';
import Filters from './Filters.jsx';
import MediaCard from './MediaCard.jsx';
import { categoriesOf } from '../lib/media.js';

// Masonry gallery with optional category filters.
export default function Gallery({ items, filterLabel }) {
  const [cat, setCat] = useState('All');
  const cats = useMemo(() => categoriesOf(items), [items]);
  const shown = cat === 'All' ? items : items.filter((p) => p.category === cat);
  return (
    <>
      <Filters options={cats} value={cat} onChange={setCat} label={filterLabel} />
      <div className="masonry">
        {shown.map((p, i) => (
          <MediaCard key={p.id} item={p} list={shown} index={i} />
        ))}
      </div>
    </>
  );
}
