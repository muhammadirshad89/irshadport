import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';
import { about } from '../data/content.js';
import { profile } from '../data/profile.js';

export default function About() {
  return (
    <section className="section theme-light" id="about" aria-labelledby="about-title">
      <div className="container split">
        <SectionHeading id="about-title" eyebrow="About" title="Design, video and content, handled end to end." />
        <Reveal delay={100} className="prose">
          {about.paragraphs.map((p) => <p key={p}>{p}</p>)}
          <ul className="ticks">
            {about.facts.map((f) => <li key={f}>{f}</li>)}
          </ul>
          <dl className="personal" aria-label="Personal details">
            {profile.personal.map((d) => (
              <div key={d.label}><dt>{d.label}</dt><dd>{d.value}</dd></div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
