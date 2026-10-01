import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';
import { skills } from '../data/content.js';

export default function Skills() {
  return (
    <section className="section theme-dark" id="skills" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading id="skills-title" eyebrow="Tools" title="Software and skills." />
        <div className="grid-4">
          {skills.map((g, i) => (
            <Reveal key={g.group} delay={i * 70} className="skillcard">
              <h3>{g.group}</h3>
              <ul className="tags">{g.items.map((s) => <li key={s}>{s}</li>)}</ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
