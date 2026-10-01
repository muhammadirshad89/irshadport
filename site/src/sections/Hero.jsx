import Icon from '../components/Icon.jsx';
import { profile } from '../data/profile.js';
import { hero } from '../data/content.js';

export default function Hero() {
  return (
    <section className="hero theme-dark" id="top" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__text">
          <p className="eyebrow anim" style={{ '--d': '0ms' }}>Also known as {profile.alias} · {profile.location}</p>
          <h1 id="hero-title" className="anim" style={{ '--d': '80ms' }}>
            <span className="h1__name">{profile.name}</span>
            <span className="sr-only"> — </span>
            <span className="h1__role">{hero.role}</span>
          </h1>
          <p className="lead anim" style={{ '--d': '160ms' }}>{hero.intro}</p>
          <div className="hero__cta anim" style={{ '--d': '240ms' }}>
            <a className="btn" href="#work">View my work <Icon name="arrow" size={18} /></a>
            <a className="btn btn--ghost" href="#contact">Hire me</a>
            <a className="btn btn--cv" href={profile.resume} download type="application/pdf"><Icon name="download" size={18} /> {profile.resumeLabel}</a>
          </div>
          <dl className="stats anim" style={{ '--d': '320ms' }}>
            {hero.stats.map((s) => (
              <div key={s.label}><dt>{s.label}</dt><dd>{s.value}</dd></div>
            ))}
          </dl>
        </div>
        <div className="hero__photo anim" style={{ '--d': '200ms' }}>
          <div className="frame">
            <img src={profile.photo} alt={profile.photoAlt} width="462" height="450" fetchPriority="high" />
          </div>
        </div>
      </div>
    </section>
  );
}
