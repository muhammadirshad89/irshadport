import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';
import { experience } from '../data/content.js';

export default function Experience() {
  return (
    <section className="section theme-light" id="experience" aria-labelledby="exp-title">
      <div className="container">
        <SectionHeading id="exp-title" eyebrow="Experience" title="Where I have worked." />
        <ol className="timeline">
          {experience.map((e, i) => (
            <Reveal as="li" key={e.company} delay={i * 60} className="timeline__item">
              <p className="timeline__dates">{e.dates}</p>
              <div>
                <h3>{e.company}</h3>
                <p className="timeline__role">{e.role}</p>
                <ul>{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
