import SectionHeading from '../components/SectionHeading.jsx';
import MediaCard from '../components/MediaCard.jsx';
import { videos } from '../lib/media.js';

export default function Videos() {
  return (
    <section className="section theme-dark" id="video" aria-labelledby="video-title">
      <div className="container">
        <SectionHeading id="video-title" eyebrow="Video" title="Video editing: promotional videos and reels." intro="Reels, promotional videos and awareness content edited for BHY Hospital. Press play to watch; videos never autoplay and load only when you open them." />
        <div className="grid-video">
          {videos.map((p, i) => (
            <article key={p.id} className="vitem">
              <MediaCard item={p} list={videos} index={i} />
              <h3 className="vitem__title">{p.title}</h3>
              {p.description && <p className="vitem__text">{p.description}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
