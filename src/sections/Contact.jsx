import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import { profile } from '../data/profile.js';

export default function Contact() {
  const ext = { target: '_blank', rel: 'noopener noreferrer' };
  const socials = [
    ['Behance', profile.behance],
    ['Portfolio site', profile.website],
    ['LinkedIn', profile.linkedin],
    ['Instagram', profile.instagram],
    ['YouTube', profile.youtube],
  ].filter(([, href]) => href);

  return (
    <section className="section contact theme-dark" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 id="contact-title" className="contact__title">Have a project in mind? Let&rsquo;s create something that stands out.</h2>
          <p className="lead">Based in Karachi, Pakistan, I take on graphic design, social media content and video editing projects. Send me your brief by WhatsApp or email.</p>
        </Reveal>
        <Reveal delay={100} className="contact__actions">
          <a className="btn btn--cv" href={profile.resume} download type="application/pdf"><Icon name="download" size={18} /> {profile.resumeLabel}</a>
          <a className="btn" href={`mailto:${profile.email}`}><Icon name="mail" size={18} /> {profile.email}</a>
          {profile.whatsapp && (
            <a className="btn btn--ghost" href={`https://wa.me/${profile.whatsapp}`} {...ext}><Icon name="chat" size={18} /> WhatsApp</a>
          )}
          {profile.phones.map((p) => (
            <a key={p.href} className="btn btn--ghost" href={p.href}><Icon name="phone" size={18} /> {p.label}</a>
          ))}
        </Reveal>
        <Reveal delay={160} className="contact__links">
          {socials.map(([label, href]) => (
            <a key={label} className="link-quiet" href={href} {...ext}>{label} <Icon name="external" size={15} /></a>
          ))}
        </Reveal>
        {profile.whatsapp && (
          <Reveal delay={200}>
            <p className="contact__note">
              Need a portfolio or creative website?{' '}
              <a className="inline-link" href={`https://wa.me/${profile.whatsapp}`} {...ext}>Message me on WhatsApp</a>.
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
