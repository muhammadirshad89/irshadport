import { useEffect, useRef } from 'react';
import Icon from './Icon.jsx';
import { formatDate, fullUrl, posterUrl } from '../lib/media.js';

export default function Viewer({ list, index, onIndex, onClose }) {
  const item = list[index];
  const box = useRef(null);
  const multi = list.length > 1;
  const go = (d) => onIndex((index + d + list.length) % list.length);

  useEffect(() => {
    const previous = document.activeElement;
    document.body.style.overflow = 'hidden';
    box.current?.querySelector('.viewer__close')?.focus();
    return () => { document.body.style.overflow = ''; previous?.focus?.(); };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowRight' && multi) go(1);
      else if (e.key === 'ArrowLeft' && multi) go(-1);
      else if (e.key === 'Tab') {
        const f = box.current?.querySelectorAll('button, a[href]');
        if (!f?.length) return;
        const first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  const date = formatDate(item.date);
  return (
    <div className="viewer" role="dialog" aria-modal="true" aria-label={item.title} ref={box}>
      <button className="viewer__backdrop" tabIndex={-1} aria-hidden="true" onClick={onClose} />
      <button className="viewer__btn viewer__close" onClick={onClose} aria-label="Close preview"><Icon name="close" /></button>
      {multi && <button className="viewer__btn viewer__nav viewer__prev" onClick={() => go(-1)} aria-label="Previous project"><Icon name="prev" /></button>}
      {multi && <button className="viewer__btn viewer__nav viewer__next" onClick={() => go(1)} aria-label="Next project"><Icon name="next" /></button>}
      <figure className="viewer__figure">
        <div className="viewer__media">
          {item.type === 'video' ? (
            item.youtube ? (
              <iframe key={item.id} title={item.title} src={`https://www.youtube-nocookie.com/embed/${item.youtube}`} allow="accelerometer; encrypted-media; picture-in-picture; fullscreen" allowFullScreen />
            ) : (
              <video key={item.id} src={fullUrl(item)} poster={posterUrl(item) || undefined} controls playsInline preload="metadata" />
            )
          ) : (
            <img key={item.id} src={fullUrl(item)} alt={item.alt || item.title} />
          )}
        </div>
        <figcaption>
          <strong>{item.title}</strong>
          <span>{[item.category, item.client, date].filter(Boolean).join(' · ')}</span>
          {item.description && <p>{item.description}</p>}
        </figcaption>
      </figure>
    </div>
  );
}
