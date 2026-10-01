import SectionHeading from '../components/SectionHeading.jsx';
import Reveal from '../components/Reveal.jsx';
import Icon from '../components/Icon.jsx';
import { services } from '../data/content.js';

export default function Services() {
  return (
    <section className="section theme-dark" id="services" aria-labelledby="services-title">
      <div className="container">
        <SectionHeading id="services-title" eyebrow="Services" title="What I can do for your brand." intro="Everything below comes from work I have done for hospitals, schools and non-profit organizations." />
        <div className="grid-3">
          {services.map((s, i) => (
            <Reveal as="article" key={s.title} delay={(i % 3) * 80} className="service">
              <span className="service__icon"><Icon name={s.icon} size={24} /></span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
