import Reveal from './Reveal.jsx';

export default function SectionHeading({ eyebrow, title, intro, id }) {
  return (
    <Reveal className="section-head">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{title}</h2>
      {intro && <p className="lead">{intro}</p>}
    </Reveal>
  );
}
