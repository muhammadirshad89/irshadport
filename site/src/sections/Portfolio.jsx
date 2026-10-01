import SectionHeading from '../components/SectionHeading.jsx';
import Gallery from '../components/Gallery.jsx';
import { archive } from '../lib/media.js';

export default function Portfolio() {
  return (
    <section className="section theme-light" id="portfolio" aria-labelledby="portfolio-title">
      <div className="container">
        <SectionHeading id="portfolio-title" eyebrow="Portfolio" title="More design work." />
        <Gallery items={archive} filterLabel="Filter portfolio" />
      </div>
    </section>
  );
}
