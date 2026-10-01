/*
  ADD NEW WORK HERE  (one entry per project)
  ------------------------------------------------------------
  1. Copy the file into the matching folder:
       public/portfolio/latest/          -> images shown in "Latest Work"
       public/portfolio/graphic-design/  -> older images
       public/portfolio/video/           -> video files (and video posters)
  2. Add an entry to the `projects` array below.

  Fields
    title        (required) Project name
    file         (required) File name inside the folder above, or a full https:// URL
    type         'image' (default) or 'video'
    category     e.g. 'Social Media', 'Poster', 'Brochure', 'Banner', 'Branding', 'Video'
                 Filter buttons are generated from the categories you use.
    date         optional, 'YYYY-MM' (e.g. '2026-09'). Newest first.
    description  optional short text
    client       optional, only if you want to credit one
    alt          optional accessibility text for images (falls back to the title)
    thumb        optional smaller image for the grid (see `npm run optimize`)
    poster       optional image shown before a video plays
    duration     optional video length in seconds (used only in the sitemap)
    youtube      optional YouTube video id, used instead of `file` for hosted videos
    latest       true  -> appears in "Latest Work" (images only)
    featured     true  -> appears in "Selected Work" at the top (keep to ~6)

  Example (delete the slashes to use):
  // { title: 'Medical Camp Flyer', file: 'medical-camp-flyer.jpg', category: 'Print',
  //   date: '2026-09', latest: true, featured: true,
  //   description: 'Flyer for a hospital medical camp.' },
  // { title: 'Doctor Awareness Message', type: 'video', file: 'awareness-message.mp4',
  //   poster: 'awareness-message.jpg', category: 'Video', date: '2026-08' },
*/
export const projects = [
  // ===== LATEST WORK: LAST 3 MONTHS (latest: true) =====
  {
    title: "World Patient Safety Day",
    file: 'world-patient-safety-day.webp',
    thumb: 'world-patient-safety-day-thumb.webp',
    width: 900,
    height: 900,
    category: 'Social Media',
    client: "BHY Hospital",
    alt: "Social media post for World Patient Safety Day, 17 September, showing a nurse pushing a patient in a wheelchair, with Urdu and English text and BHY Hospital branding.",
    description: "Social media design for World Patient Safety Day (17 September) for BHY Hospital, in Urdu and English.",
    latest: true,
  },
  {
    title: "Independence Day Invitation",
    file: 'independence-day-invitation.webp',
    thumb: 'independence-day-invitation-thumb.webp',
    width: 900,
    height: 1350,
    category: 'Event Design',
    client: "BHY Hospital",
    alt: "Invitation card from BHY Hospital for the Independence Day of Pakistan ceremony, with the flag, Minar-e-Pakistan and a programme schedule.",
    description: "Event invitation card for BHY Hospital's Independence Day of Pakistan ceremony, with the programme schedule.",
    latest: true,
  },
  {
    title: "14 August Event Backdrop",
    file: 'independence-day-backdrop.webp',
    thumb: 'independence-day-backdrop-thumb.webp',
    width: 900,
    height: 490,
    category: 'Event Design',
    client: "BHY Hospital",
    alt: "Green 14 August Pakistan Independence Day backdrop with BHY Hospital and JPSD logos and the line Celebrating Freedom, Unity and National Pride.",
    description: "Event backdrop design for the 14 August Independence Day celebration at BHY Hospital.",
    latest: true,
  },
  {
    title: "14 August Badge",
    file: 'independence-day-badge.webp',
    thumb: 'independence-day-badge-thumb.webp',
    width: 706,
    height: 706,
    category: 'Event Design',
    client: "BHY Hospital",
    alt: "Circular green 14 August Pakistan Independence Day badge with the BHY Hospital logo.",
    description: "Circular badge design for the 14 August Independence Day event at BHY Hospital.",
    latest: true,
  },
  // ===== OLDER WORK =====
  {
    title: "Heart Attack Awareness",
    file: 'heart-attack-awareness.webp',
    thumb: 'heart-attack-awareness-thumb.webp',
    width: 900,
    height: 900,
    category: 'Social Media',
    client: "BHY Hospital",
    alt: "Urdu health awareness graphic about heart attack symptoms, with an anatomical heart and six symptom icons, with BHY Hospital branding.",
    description: "Urdu health awareness post on heart attack symptoms for BHY Hospital's social media channels.",
    featured: true,
  },
  {
    title: "Ramadan Health Services Post",
    file: 'ramadan-health-services.webp',
    thumb: 'ramadan-health-services-thumb.webp',
    width: 900,
    height: 900,
    category: 'Social Media',
    client: "BHY Hospital",
    alt: "Ramadan social media post with a golden crescent and lantern, listing hospital services in Urdu, with BHY Hospital branding.",
    description: "Ramadan social media post listing BHY Hospital services in Urdu.",
    featured: true,
  },
  {
    title: "Free Diabetes Medical Camp",
    file: 'free-diabetes-medical-camp.webp',
    thumb: 'free-diabetes-medical-camp-thumb.webp',
    width: 900,
    height: 1596,
    category: 'Medical Camp',
    client: "BHY Hospital",
    alt: "Announcement graphic for a free diabetes medical camp with Urdu and English text, a list of free services and a 50 percent HbA1c test discount.",
    description: "Announcement poster for a free diabetes medical camp at BHY Hospital, in Urdu and English.",
    featured: true,
  },
  {
    title: "Floor Directory Signage",
    file: 'floor-directory-signage.webp',
    thumb: 'floor-directory-signage-thumb.webp',
    width: 900,
    height: 232,
    category: 'Signage',
    description: "Hospital floor directory signage: outdoor sticker, 6 ft x 1.5 ft.",
    alt: "Colour-coded hospital floor directory sticker listing wards and departments for the 1st, 2nd and 3rd floors.",
    featured: true,
  },
  {
    title: "2nd Floor Ward Panel",
    file: 'second-floor-ward-panel.webp',
    thumb: 'second-floor-ward-panel-thumb.webp',
    width: 900,
    height: 1272,
    category: 'Signage',
    alt: "Blue wayfinding panel for the 2nd floor male and female ward, with hospital ward photographs.",
    description: "Wayfinding signage panel for the 2nd floor male and female wards of the hospital.",
  },
  // ===== VIDEOS =====
  {
    title: 'BHY Promotional Video',
    type: 'video',
    file: 'bhy-promotional-video.mp4',
    poster: 'bhy-promotional-video.webp',
    width: 720,
    height: 1280,
    duration: 57, // seconds
    ratio: '9 / 16',
    category: 'Video',
    client: 'BHY Hospital',
    alt: 'Thumbnail of the BHY Hospital promotional video, a vertical video edited for social media.',
    description: 'Vertical promotional video for BHY Hospital, edited for social media.',
    featured: true,
  },
  {
    title: '14 August Reel',
    type: 'video',
    file: '14-august-reel.mp4',
    poster: '14-august-reel.webp',
    width: 720,
    height: 1280,
    duration: 190,
    ratio: '9 / 16',
    category: 'Video',
    client: 'BHY Hospital',
    alt: 'Thumbnail of the 14 August Independence Day reel for BHY Hospital.',
    description: 'Independence Day (14 August) reel edited for BHY Hospital social media.',
  },
  {
    title: 'UNICEF Visit at BHY Hospital',
    type: 'video',
    file: 'unicef-visit.mp4',
    poster: 'unicef-visit.webp',
    width: 720,
    height: 1280,
    duration: 101,
    ratio: '9 / 16',
    category: 'Video',
    client: 'BHY Hospital',
    alt: 'Thumbnail of the UNICEF visit video with the BHY Hospital and JPSD logos on a blue title card.',
    description: 'Video of a UNICEF team visit to BHY Hospital, including a review of the OPD vaccination centre, with a branded title card and on-screen captions.',
  },
  {
    title: 'OPD Vaccination Center Video',
    type: 'video',
    file: 'vaccination-center.mp4',
    poster: 'vaccination-center.webp',
    width: 720,
    height: 1280,
    duration: 67,
    ratio: '9 / 16',
    category: 'Video',
    client: 'BHY Hospital',
    alt: 'Thumbnail of the BHY Hospital vaccination center video showing vaccine handling.',
    description: 'Short video on how the BHY Hospital OPD vaccination center works, from record keeping to vaccine preparation, with on-screen captions.',
  },
];
