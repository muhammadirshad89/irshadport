import SectionHeading from '../components/SectionHeading.jsx';
import MediaCard from '../components/MediaCard.jsx';
import { videos } from '../lib/media.js';

export default function Videos() {
  return (
    <section className="section theme-dark" id="video" aria-labelledby="video-title">
      <div className="container">
        <SectionHeading id="video-title" eyebrow="Video" title="Video editing and production." intro="Press play to watch. Videos load only when you open them." />
        <div className="grid-video">
          {videos.map((p, i) => (
            <MediaCard key={p.id} item={p} list={videos} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
