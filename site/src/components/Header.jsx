import { useEffect, useState } from 'react';
import Icon from './Icon.jsx';
import { profile } from '../data/profile.js';

export default function Header({ links }) {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const on = () => setSolid(window.scrollY > 24);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className={`header ${solid || open ? 'is-solid' : ''}`}>
      <div className="container header__bar">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>
          <span className="brand__mark" aria-hidden="true">{profile.initials.slice(0, 2)}</span>
          <span>{profile.shortName}</span>
        </a>
        <button className="menu-btn" aria-expanded={open} aria-controls="site-nav" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>
          <Icon name={open ? 'close' : 'menu'} />
        </button>
        <nav id="site-nav" className={`nav ${open ? 'is-open' : ''}`} aria-label="Primary">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a className="btn btn--small" href="#contact" onClick={() => setOpen(false)}>Hire me</a>
        </nav>
      </div>
    </header>
  );
}
