// Builds the app landing pages: repasito/, thebotanicaleye/, truckrouteplanner/, ludora/ (index.html each).
// Text comes from the English store listings; legal links point at the existing pages next to each index.
// Run from the repo root: node _tools/make-app-pages.js
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

// Stroke icons, 24x24 (same style as the home page).
const ICONS = {
  camera: '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3Z"/><circle cx="12" cy="13" r="3.5"/>',
  pen: '<path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"/>',
  check: '<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',
  chat: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',
  lock: '<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
  leaf: '<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.5 19 2c1 2 2 4.2 2 8 0 5.5-4.8 10-10 10Z"/><path d="M2 21c0-3 1.9-5.5 5.1-6.1 2.4-.5 4.9-2 5.9-3.9"/>',
  pulse: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  help: '<circle cx="12" cy="12" r="9"/><path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3"/><path d="M12 17h.01"/>',
  book: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5Z"/><path d="M4 19.5A2.5 2.5 0 0 0 6.5 22H20v-5"/>',
  bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.9 1.9 0 0 0 3.4 0"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  list: '<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>',
  coins: '<circle cx="8" cy="8" r="6"/><path d="M18.1 10.4A6 6 0 1 1 10.4 18.1"/><path d="M7 6h1v4"/>',
  shield: '<path d="M12 2 3 7v6c0 5 3.8 8.7 9 9 5.2-.3 9-4 9-9V7l-9-5Z"/><path d="m9 12 2 2 4-4"/>',
  map: '<path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3Z"/><path d="M9 3v15M15 6v15"/>',
  file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6M8 13h8M8 17h5"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  trophy: '<path d="M6 9H4a2 2 0 0 1 0-4h2M18 9h2a2 2 0 0 0 0-4h-2"/><path d="M6 3h12v7a6 6 0 0 1-12 0Z"/><path d="M9 21h6M12 16v5"/>',
  offline: '<path d="M2 2l20 20"/><path d="M8.5 16.4a5 5 0 0 1 7 0M5 12.9a10 10 0 0 1 5.2-2.7M19 12.9a10 10 0 0 0-2-1.5M2 8.8a15 15 0 0 1 4.2-2.7M22 8.8A15 15 0 0 0 10.7 5"/><path d="M12 20h.01"/>',
  truck: '<path d="M3 17h2m14 0h2M5 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0M15 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0"/><path d="M9 17h6M3 17V6h11v11M14 9h4l3 4v4"/>',
};
const svg = (name) => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]}</svg>`;

const APPLE = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16.4 12.6c0-2.6 2.1-3.8 2.2-3.9-1.2-1.8-3.1-2-3.7-2-1.6-.2-3.1.9-3.9.9-.8 0-2-.9-3.4-.9-1.7 0-3.3 1-4.2 2.6-1.8 3.1-.5 7.7 1.3 10.2.9 1.2 1.9 2.6 3.2 2.6 1.3-.1 1.8-.8 3.3-.8 1.6 0 2 .8 3.4.8 1.4 0 2.3-1.3 3.1-2.5 1-1.4 1.4-2.8 1.4-2.9-.1 0-2.7-1-2.7-4.1ZM13.9 4.9c.7-.9 1.2-2 1.1-3.2-1 0-2.3.7-3 1.6-.7.8-1.3 2-1.1 3.1 1.1.1 2.3-.6 3-1.5Z"/></svg>';
const PLAY = '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#34a853" d="M3.6 2.3 13.4 12l-9.8 9.7c-.4-.2-.6-.7-.6-1.2V3.5c0-.5.2-1 .6-1.2Z"/><path fill="#fbbc04" d="m16.8 15.4-3.4-3.4 3.4-3.4 3.8 2.2c1.1.6 1.1 1.8 0 2.4Z"/><path fill="#ea4335" d="M3.6 21.7 13.4 12l3.4 3.4L5 22.1c-.5.3-1 .1-1.4-.4Z"/><path fill="#4285f4" d="M3.6 2.3c.4-.5.9-.7 1.4-.4l11.8 6.7-3.4 3.4Z"/></svg>';

const APPS = [
  {
    dir: 'repasito',
    name: 'Repasito',
    category: 'Education',
    accent: '#e8641c', accentSoft: 'rgba(232,100,28,.13)',
    title: 'Repasito: AI homework helper for parents',
    description: 'Repasito checks your child\'s homework from a photo and explains every mistake in plain words, so you can help at home.',
    headline: 'Homework checked from a photo, explained in plain words.',
    lead: 'Take a photo of your child\'s homework. In seconds Repasito shows what is right, what is wrong and why, marked on the sheet itself, so you can help at home.',
    ios: 'https://apps.apple.com/app/id6812275331',
    android: 'https://play.google.com/store/apps/details?id=com.repasito.homework',
    chips: ['Free to start', 'No sign-up', 'No ads', '8 languages'],
    media: { video: 'media/repasito-promo-en.mp4', poster: 'media/repasito-promo-poster.jpg', label: 'Repasito promo video' },
    featTitle: 'Help with homework, without the guesswork.',
    featSub: 'From a photo of the page to an explanation your child understands.',
    features: [
      ['camera', 'Snap the homework', 'Take a photo or pick one from your library, up to 5 pages at a time.'],
      ['pen', 'Reads real handwriting', 'Handwritten and printed exercises, with the subject and the maths method the school uses.'],
      ['check', 'Right, wrong and why', 'Every answer is marked on the sheet itself, with a clear explanation for each mistake.'],
      ['chat', 'Ask it another way', 'Something unclear? Ask the assistant and it explains it differently.'],
      ['users', 'A profile for each child', 'Avatars instead of photos, history and progress by subject, streaks and achievements.'],
      ['lock', 'Private by default', 'No sign-up, no password and no ads. Children\'s names stay on your phone and homework photos are not kept.'],
    ],
    plans: [
      { name: 'Free', price: 'Free forever', items: ['10 pages every week', 'Every subject and every feature', 'A profile for each child'] },
      { name: 'Repasito Plus', price: 'Monthly or yearly · yearly plan starts with a 7-day free trial', hl: true, items: ['Up to 200 pages a week', 'For busy families with several children', 'Cancel anytime in your store account'] },
    ],
    note: 'Repasito uses artificial intelligence and can make mistakes. It is a help for parents and guardians, not a replacement for teachers.',
    legal: [
      ['support', 'Help', 'English'], ['soporte', 'Ayuda', 'Español'],
      ['privacy', 'Privacy policy', 'English'], ['privacidad', 'Política de privacidad', 'Español'],
      ['delete-data', 'Delete your data', 'English · Español'], ['partners/', 'Partners', 'Schools, creators and friends'],
    ],
  },
  {
    dir: 'thebotanicaleye',
    name: 'The Botanical Eye',
    category: 'Lifestyle',
    accent: '#1f7a55', accentSoft: 'rgba(31,122,85,.13)',
    title: 'The Botanical Eye: plant identifier and care',
    description: 'Identify any plant from a photo, check its health and get a personal care plan with gentle reminders.',
    headline: 'Save your plant with just one photo.',
    lead: 'Photograph a leaf or a flower and learn what it is, how healthy it looks and how to care for it. A calm field guide and plant companion in your pocket.',
    ios: 'https://apps.apple.com/app/id6821145242',
    android: 'https://play.google.com/store/apps/details?id=com.aissaapps.botanicaleye',
    chips: ['Free to start', 'Light and dark mode', '26 languages'],
    media: { video: 'media/botanicaleye-promo-en.mp4', poster: 'media/botanicaleye-promo-poster.jpg', label: 'The Botanical Eye promo video' },
    featTitle: 'Everything your plants need, at a glance.',
    featSub: 'Identify, diagnose and care, with honest answers when the AI is unsure.',
    features: [
      ['leaf', 'Identify in seconds', 'Point the camera or pick a photo and see what the plant is.'],
      ['pulse', 'Check its health', 'Spots, yellow leaves, pests, too much or too little water.'],
      ['sun', 'Care at a glance', 'Water, light, temperature, soil and the seasons for that plant.'],
      ['help', 'Honest when unsure', 'It tells you when it is not certain, shows what else it could be and how to tell them apart.'],
      ['book', 'Your collection', 'Name your plants, add notes, search, and follow their progress with new photos.'],
      ['bell', 'Never forget care', 'A daily schedule and gentle reminders for watering, feeding and repotting.'],
    ],
    plans: [
      { name: 'Free', price: 'Free forever', items: ['5 scans a week', '3 questions a day', 'Your plant collection'] },
      { name: 'Premium', price: 'Monthly or yearly · cancel anytime', hl: true, items: ['Unlimited scans and questions', 'Full care plans for every plant', 'Reminders for every plant'] },
    ],
    note: 'Results come from AI and can be wrong. Never use the app to decide whether a plant is safe to eat or touch. Your photos are analysed and not kept on our servers.',
    legal: [
      ['support', 'Help', 'English'], ['soporte', 'Ayuda', 'Español'],
      ['privacy', 'Privacy policy', 'English'], ['privacidad', 'Política de privacidad', 'Español'],
      ['terms', 'Terms of use', 'English'], ['terminos', 'Condiciones de uso', 'Español'],
      ['partners/', 'Partners', 'Garden centres, creators and friends'],
    ],
  },
  {
    dir: 'truckrouteplanner',
    name: 'Truck Route Planner',
    storeName: 'Planificador de ruta camión',
    category: 'Navigation',
    accent: '#1d4fd8', accentSoft: 'rgba(29,79,216,.12)',
    title: 'Truck Route Planner: driving times, breaks and tolls for trucks in Europe',
    description: 'Truck Route Planner turns two addresses into a complete trip plan for heavy vehicles in Europe: breaks, rests, tolls, fuel and national rules.',
    headline: 'Two addresses in. A complete truck trip plan out.',
    lead: 'Breaks and rests under Regulation (EC) No 561/2006, tolls by country, fuel and total cost, and the national rules on your route, for heavy vehicles across Europe.',
    ios: 'https://apps.apple.com/app/id6820071243',
    android: 'https://play.google.com/store/apps/details?id=com.aissaapps.planificador',
    chips: ['Free', 'No account', 'No ads', '24 EU languages'],
    media: { img: 'media/screen.jpg', alt: 'Truck Route Planner trip plan with breaks, tolls and costs', caption: 'Shown in Spanish. The app follows your phone\'s language.' },
    featTitle: 'Built for the rules professional drivers work under.',
    featSub: 'Plan the whole trip before the engine starts.',
    features: [
      ['clock', 'Driving times and breaks', '45-minute breaks and daily rests under Regulation (EC) No 561/2006, including split breaks and reduced daily rests.'],
      ['list', 'Stop plan', 'The time and kilometre of every mandatory break and rest, for one or two drivers.'],
      ['coins', 'Tolls, fuel and cost', 'Estimated tolls by country from weight, axles and EURO class, plus fuel and total cost per kilometre.'],
      ['shield', 'National rules', 'Driving bans, low-emission zones and winter equipment for every country on the route.'],
      ['map', 'Map and alerts', 'Route map with the stops, and a reminder on your phone before each mandatory break.'],
      ['file', 'Report and GPX', 'A text report of the plan and GPX export for your navigation device.'],
    ],
    note: 'Results are planning estimates and are not legally binding. Always check current traffic restrictions, toll rates and vehicle limits, and your actual tachograph records. This is not a government app; see the official sources we use.',
    legal: [
      ['support.html', 'Help', 'Soporte / Support'],
      ['privacy-en.html', 'Privacy policy', 'English'], ['privacy.html', 'Política de privacidad', 'Español and 22 more languages'],
      ['sources.html', 'Official sources', 'Fuentes oficiales'],
    ],
  },
  {
    dir: 'ludora',
    name: 'Ludora',
    category: 'Games',
    accent: '#7c3aed', accentSoft: 'rgba(124,58,237,.13)',
    title: 'Ludora: classic puzzle arcade',
    description: 'Six classic puzzles in one glowing lounge: Sudoku, Mahjong, Cascade, Lantern, Solitaire and Fusion. Daily challenges, no ads, fully offline.',
    headline: 'Six classic puzzles in one glowing lounge.',
    lead: 'Sudoku, Mahjong, Cascade, Lantern, Solitaire and Fusion, rebuilt with care in a retro-futuristic arcade style. Perfect for a two-minute break or a long evening.',
    ios: null, // App Store review pending: shown as "coming soon"
    android: 'https://play.google.com/store/apps/details?id=com.aissaapps.ludora',
    chips: ['No ads', 'No in-app purchases', 'Fully offline', '25 languages'],
    media: { img: 'media/screen.jpg', alt: 'Ludora Mahjong board', caption: 'Mahjong, one of six games in Ludora.' },
    featTitle: 'A fresh challenge every day.',
    featSub: 'Classic games, fair progress and nothing that gets in the way of play.',
    features: [
      ['grid', 'Six games, one lounge', 'Sudoku, Mahjong solitaire, Cascade falling blocks, Lantern, Solitaire and Fusion number merges.'],
      ['calendar', 'Daily challenges', 'Six daily puzzles, the same for everyone, plus three optional goals. No punishment for taking a break.'],
      ['trophy', 'Progress that means something', 'Personal bests, player levels, 43 achievements and unlockable themes, boards and card backs.'],
      ['offline', 'Play anywhere', 'Works completely offline. Your progress is saved on your device and resumes where you left off.'],
      ['shield', 'No ads, no purchases', 'No account, no ads and no in-app purchases. Just the games.'],
      ['globe', 'Made to feel good', 'Smooth animations with a reduced-motion option, large touch targets and 25 languages.'],
    ],
    legal: [
      ['support', 'Help', 'English'],
      ['privacy', 'Privacy policy', 'English'], ['privacidad', 'Política de privacidad', 'Español'],
    ],
  },
];

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function store(kind, url) {
  const label = kind === 'ios' ? ['Download on the', 'App Store'] : ['Get it on', 'Google Play'];
  const icon = kind === 'ios' ? APPLE : PLAY;
  if (!url) return `<span class="store soon" aria-disabled="true">${icon}<span><small>Coming soon to the</small><b>${label[1]}</b></span></span>`;
  return `<a class="store" href="${url}" rel="noopener">${icon}<span><small>${label[0]}</small><b>${label[1]}</b></span></a>`;
}

function media(a) {
  const m = a.media;
  if (m.video && m.wide) {
    return `<div><div class="screen"><video controls playsinline preload="metadata" poster="${m.poster}" aria-label="${esc(m.label)}"><source src="${m.video}" type="video/mp4"></video></div><p class="caption">Watch the short tour (with sound)</p></div>`;
  }
  if (m.video) {
    return `<div><div class="phone"><video controls playsinline preload="metadata" poster="${m.poster}" aria-label="${esc(m.label)}"><source src="${m.video}" type="video/mp4"></video></div><p class="caption">Watch the short tour (with sound)</p></div>`;
  }
  return `<div><div class="phone shot"><img src="${m.img}" alt="${esc(m.alt)}" width="540" loading="eager"></div><p class="caption">${esc(m.caption)}</p></div>`;
}

function page(a) {
  const others = APPS.filter((o) => o !== a).map((o) => `<a href="/${o.dir}/">${esc(o.name)}</a>`).join('');
  const plans = a.plans ? `
  <section id="pricing">
    <div class="wrap">
      <span class="eyebrow">Pricing</span>
      <h2 class="title">Free to start. Upgrade only if you need more.</h2>
      <div class="plans">
        ${a.plans.map((p) => `<div class="plan${p.hl ? ' hl' : ''}"><h3>${esc(p.name)}</h3><p class="price">${esc(p.price)}</p><ul>${p.items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul></div>`).join('\n        ')}
      </div>
      ${a.note ? `<p class="note">${esc(a.note)}</p>` : ''}
    </div>
  </section>` : (a.note ? `
  <section style="padding-bottom:0">
    <div class="wrap"><p class="note" style="margin:0">${esc(a.note)}</p></div>
  </section>` : '');

  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="theme-color" content="#ffffff">
<title>${esc(a.title)}</title>
<meta name="description" content="${esc(a.description)}">
<meta property="og:title" content="${esc(a.title)}">
<meta property="og:description" content="${esc(a.description)}">
<meta property="og:image" content="https://chispapps.com/${a.dir}/${a.media.poster || a.media.img}">
<meta property="og:url" content="https://chispapps.com/${a.dir}/">
<link rel="icon" href="media/icon.jpg">
<link rel="apple-touch-icon" href="media/icon.jpg">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap">
<link rel="stylesheet" href="/assets/app.css">
<style>:root { --accent: ${a.accent}; --accent-soft: ${a.accentSoft}; }</style>
</head>
<body>
<header class="nav">
  <div class="wrap">
    <a class="brand" href="/" aria-label="Chispapps home">Chisp<span class="app">apps</span></a>
    <nav class="links" aria-label="Page">
      <a href="#features">Features</a>${a.plans ? '\n      <a href="#pricing">Pricing</a>' : ''}
      <a href="#help">Help and legal</a>
    </nav>
    <a class="back" href="/#apps">All apps</a>
  </div>
</header>
<main>
  <section class="hero">
    <div class="wrap${a.media.wide ? ' wide' : ''}">
      <div>
        <div class="app-id"><img src="media/icon.jpg" alt="" width="64" height="64"><div><span class="cat">${esc(a.category)}</span><b>${esc(a.name)}</b></div></div>
        <h1>${esc(a.headline)}</h1>
        <p class="lead">${esc(a.lead)}</p>
        <div class="stores">${store('ios', a.ios)}${store('android', a.android)}</div>
        ${a.storeName ? `<p class="caption" style="text-align:left">In the stores as “${esc(a.storeName)}”.</p>` : ''}
        <div class="chips">${a.chips.map((c) => `<span>${esc(c)}</span>`).join('')}</div>
      </div>
      ${media(a)}
    </div>
  </section>
  <section id="features" class="feat-sec">
    <div class="wrap">
      <span class="eyebrow">Features</span>
      <h2 class="title">${esc(a.featTitle)}</h2>
      <p class="sub">${esc(a.featSub)}</p>
      <div class="features">
        ${a.features.map(([i, h, p]) => `<article class="feature"><span class="icon">${svg(i)}</span><h3>${esc(h)}</h3><p>${esc(p)}</p></article>`).join('\n        ')}
      </div>
    </div>
  </section>${plans}
  <section id="help">
    <div class="wrap">
      <span class="eyebrow">Help and legal</span>
      <h2 class="title">Questions, privacy and your data.</h2>
      <div class="legal">
        ${a.legal.map(([href, b, s]) => `<a href="${href}"><b>${esc(b)}</b><span>${esc(s)}</span></a>`).join('\n        ')}
      </div>
      <p class="contact">Anything else? Write to <a href="mailto:aissa.b.code@gmail.com">aissa.b.code@gmail.com</a>. We read every message.</p>
    </div>
  </section>
</main>
<footer>
  <div class="wrap">
    <a class="brand" href="/" style="font-size:1rem">Chisp<span class="app">apps</span></a>
    <nav aria-label="Other apps">${others}</nav>
    <span>© 2026 Chispapps · chispapps.com</span>
  </div>
</footer>
</body>
</html>
`;
}

for (const a of APPS) {
  const out = path.join(ROOT, a.dir, 'index.html');
  fs.writeFileSync(out, page(a));
  console.log('wrote', path.relative(ROOT, out));
}
