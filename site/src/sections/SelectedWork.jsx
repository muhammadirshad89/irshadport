import SectionHeading from '../components/SectionHeading.jsx';
import MediaCard from '../components/MediaCard.jsx';
import { featured } from '../lib/media.js';

export default function SelectedWork() {
  return (
    <section className="section theme-light" id="work" aria-labelledby="work-title">
      <div className="container">
        <SectionHeading id="work-title" eyebrow="Selected work" title="A few projects I am proud of." />
        <div className="masonry">
          {featured.map((p, i) => (
            <MediaCard key={p.id} item={p} list={featured} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
