import SectionHeading from '../components/SectionHeading.jsx';
import Gallery from '../components/Gallery.jsx';
import { latest } from '../lib/media.js';
import { profile } from '../data/profile.js';

export default function LatestWork() {
  return (
    <section className="section theme-dark" id="latest" aria-labelledby="latest-title">
      <div className="container">
        <SectionHeading id="latest-title" eyebrow="Fresh from the desk" title="Latest Work: Last 3 Months" intro="Designs I have created recently. This section is updated regularly." />
        {latest.length ? (
          <Gallery items={latest} filterLabel="Filter latest work" />
        ) : (
          <div className="empty">
            <p>New work is being added here.</p>
            {profile.behance && <a className="btn btn--ghost" href={profile.behance} target="_blank" rel="noopener noreferrer">See my work on Behance</a>}
          </div>
        )}
      </div>
    </section>
  );
}
