export default function Filters({ options, value, onChange, label }) {
  if (options.length < 2) return null;
  return (
    <div className="filters" role="group" aria-label={label}>
      {['All', ...options].map((o) => (
        <button key={o} type="button" className="chip" aria-pressed={value === o} onClick={() => onChange(o)}>
          {o}
        </button>
      ))}
    </div>
  );
}
