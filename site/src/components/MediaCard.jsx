import { useInView } from '../lib/useInView.js';
import { fullUrl, thumbUrl, formatDate } from '../lib/media.js';
import { useViewer } from './ViewerContext.jsx';
import Icon from './Icon.jsx';

export default function MediaCard({ item, list, index }) {
  const open = useViewer();
  const [ref, seen] = useInView('300px');
  const isVideo = item.type === 'video';
  const thumb = thumbUrl(item);
  const date = formatDate(item.date);
  const ratio = isVideo ? item.ratio || '16 / 9' : null;
  const dims = item.width && item.height ? { width: item.width, height: item.height } : {};

  return (
    <button
      ref={ref}
      type="button"
      className={`card ${isVideo ? 'card--video' : ''}`}
      style={ratio ? { aspectRatio: ratio } : undefined}
      onClick={() => open(list, index)}
      aria-label={`${isVideo ? 'Play video' : 'View'}: ${item.title}`}
    >
      {thumb ? (
        <img src={thumb} alt={item.alt || item.title} loading="lazy" decoding="async" {...dims} />
      ) : isVideo && seen && !item.youtube ? (
        <video src={`${fullUrl(item)}#t=0.5`} muted playsInline preload="metadata" tabIndex={-1} aria-hidden="true" />
      ) : (
        <span className="card__blank" aria-hidden="true" />
      )}
      {isVideo && <span className="card__play" aria-hidden="true"><Icon name="film" size={22} /></span>}
      <span className="card__meta">
        <span className="card__title">{item.title}</span>
        <span className="card__sub">{[item.category, date].filter(Boolean).join(' · ')}</span>
      </span>
    </button>
  );
}
