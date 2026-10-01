const paths = {
  design: 'M12 19l7-7 3 3-7 7-3-3z M18 13l-1.5-7.5L2 2l3.5 14.5L13 18z M2 2l7.6 7.6',
  social: 'M4 4h16v12H8l-4 4z',
  film: 'M4 4h16v16H4z M4 9h16 M4 15h16 M9 4v16 M15 4v16',
  camera: 'M3 7h4l2-3h6l2 3h4v13H3z M12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
  layers: 'M12 2l10 5-10 5L2 7z M2 12l10 5 10-5 M2 17l10 5 10-5',
  print: 'M6 9V3h12v6 M6 18H4v-7h16v7h-2 M6 14h12v7H6z',
  arrow: 'M5 12h14 M13 6l6 6-6 6',
  up: 'M12 19V5 M6 11l6-6 6 6',
  download: 'M12 3v12 M7 10l5 5 5-5 M4 21h16',
  mail: 'M3 5h18v14H3z M3 6l9 7 9-7',
  phone: 'M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z',
  chat: 'M21 12a8 8 0 0 1-12 7l-5 1 1.5-4.5A8 8 0 1 1 21 12z',
  external: 'M14 4h6v6 M20 4l-9 9 M18 14v6H4V6h6',
  close: 'M5 5l14 14 M19 5L5 19',
  prev: 'M15 5l-7 7 7 7',
  next: 'M9 5l7 7-7 7',
  menu: 'M4 7h16 M4 12h16 M4 17h16',
};

export default function Icon({ name, size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d={paths[name]} />
    </svg>
  );
}
