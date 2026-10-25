// Generates the friend-instruction pages:
//   /repasito/friends/{,es/,en/,hu/}  and  /thebotanicaleye/friends/{,es/,en/,hu/}
// Run: node _tools/make-friends.js   (from the chispapps-site folder)
// Labels match the apps' own texts (Repasito src/i18n/locales, Plantapp app/translations.ts).
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');

const apps = {
  repasito: {
    name: 'Repasito',
    accent: '#4f46e5', accentSoft: '#eef0ff', accentInk: '#3730a3',
    ios: 'https://apps.apple.com/app/id6812275331',
    android: 'https://play.google.com/store/apps/details?id=com.repasito.homework',
    iosLive: true,
    sampleId: 'A1B2-C3D4',
    t: {
      es: {
        title: 'Cómo enviarme tu ID de Repasito',
        lead: 'Te he invitado a usar Repasito gratis. Para activarlo solo necesito tu ID de Repasito: un código corto que la app te asigna. Tardas un minuto.',
        gift: 'Qué recibes: páginas gratis cada semana para corregir deberes, sin pagar ni suscribirte.',
        s1h: 'Instala Repasito y ábrelo una vez', s1p: 'Descárgalo desde tu tienda de apps. No hace falta crear cuenta ni dar tu correo.',
        s2h: 'Entra en la pestaña «Perfil»', s2p: 'Es el último icono de la barra de abajo.',
        s3h: 'Busca «Tu ID de Repasito»', s3p: 'Verás un código como este. Tócalo para compartirlo.',
        s4h: 'Envíame el código', s4p: 'Mándamelo por WhatsApp, mensaje o correo a quien te invitó. Copia el código tal cual, con el guion.',
        s5h: 'Listo: cierra y vuelve a abrir la app', s5p: 'Cuando lo active (normalmente el mismo día), tus páginas gratis aparecen en «Inicio».',
        faqH: 'Preguntas rápidas',
        q1: '¿Es seguro compartir mi ID?', a1: 'Sí. Solo identifica la app en tu móvil: no incluye tu nombre, correo ni teléfono.',
        q2: 'He reinstalado la app o cambiado de móvil', a2: 'Cada instalación tiene un ID nuevo. Envíame el nuevo y lo activo otra vez.',
        q3: 'No veo el ID', a3: 'Comprueba que tienes conexión y abre «Perfil» de nuevo: el ID aparece en cuanto la app se conecta.',
        get: 'Descargar Repasito', ios: 'App Store (iPhone)', android: 'Google Play (Android)',
        langs: 'Idioma', footer: 'Repasito es una app de Chispapps.', privacy: 'Privacidad', privacyPath: 'privacidad',
      },
      en: {
        title: 'How to send me your Repasito ID',
        lead: "I've invited you to use Repasito for free. To switch it on I only need your Repasito ID: a short code the app gives you. It takes one minute.",
        gift: 'What you get: free pages every week to check homework, with no payment or subscription.',
        s1h: 'Install Repasito and open it once', s1p: 'Download it from your app store. No account or email needed.',
        s2h: 'Open the “Profile” tab', s2p: "It's the last icon in the bar at the bottom.",
        s3h: 'Find “Your Repasito ID”', s3p: 'You will see a code like this one. Tap it to share it.',
        s4h: 'Send me the code', s4p: 'Send it by WhatsApp, text or email to the person who invited you. Copy it exactly, dash included.',
        s5h: 'Done: close and reopen the app', s5p: 'Once I switch it on (usually the same day), your free pages show on “Home”.',
        faqH: 'Quick questions',
        q1: 'Is it safe to share my ID?', a1: "Yes. It only identifies the app on your phone: it doesn't contain your name, email or phone number.",
        q2: 'I reinstalled the app or changed phones', a2: 'Each install gets a new ID. Send me the new one and I will switch it on again.',
        q3: "I can't see the ID", a3: 'Check you are online and open “Profile” again: the ID appears as soon as the app connects.',
        get: 'Get Repasito', ios: 'App Store (iPhone)', android: 'Google Play (Android)',
        langs: 'Language', footer: 'Repasito is an app by Chispapps.', privacy: 'Privacy', privacyPath: 'privacy',
      },
      hu: {
        title: 'Így küldd el a Repasito-azonosítódat',
        lead: 'Meghívtalak, hogy ingyen használd a Repasitót. A bekapcsoláshoz csak a Repasito-azonosítódra van szükségem: egy rövid kódra, amit az alkalmazás ad. Egy percet vesz igénybe.',
        gift: 'Mit kapsz: minden héten ingyenes oldalakat a házi feladatok javításához, fizetés és előfizetés nélkül.',
        s1h: 'Telepítsd a Repasitót, és nyisd meg egyszer', s1p: 'Töltsd le az alkalmazásboltból. Nem kell fiók vagy e-mail-cím.',
        s2h: 'Nyisd meg a „Profil” fület', s2p: 'Ez az alsó sáv utolsó ikonja.',
        s3h: 'Keresd meg a „Repasito-azonosítód” részt', s3p: 'Egy ilyen kódot fogsz látni. Koppints rá a megosztáshoz.',
        s4h: 'Küldd el nekem a kódot', s4p: 'Küldd el WhatsAppon, üzenetben vagy e-mailben annak, aki meghívott. Pontosan másold, a kötőjellel együtt.',
        s5h: 'Kész: zárd be, és nyisd meg újra az alkalmazást', s5p: 'Amint bekapcsolom (általában még aznap), az ingyenes oldalaid megjelennek a „Kezdőlap” fülön.',
        faqH: 'Gyors kérdések',
        q1: 'Biztonságos megosztani az azonosítómat?', a1: 'Igen. Csak a telefonodon lévő alkalmazást azonosítja: nem tartalmazza a neved, e-mail-címed vagy telefonszámod.',
        q2: 'Újratelepítettem az alkalmazást, vagy telefont cseréltem', a2: 'Minden telepítés új azonosítót kap. Küldd el az újat, és újra bekapcsolom.',
        q3: 'Nem látom az azonosítót', a3: 'Ellenőrizd, hogy van-e internetkapcsolat, és nyisd meg újra a „Profil” fület: az azonosító megjelenik, amint az alkalmazás csatlakozik.',
        get: 'Repasito letöltése', ios: 'App Store (iPhone)', android: 'Google Play (Android)',
        langs: 'Nyelv', footer: 'A Repasito a Chispapps alkalmazása.', privacy: 'Adatvédelem', privacyPath: 'privacy',
      },
    },
    idLabel: { es: 'Tu ID de Repasito', en: 'Your Repasito ID', hu: 'Repasito-azonosítód' },
    tabLabel: { es: 'Perfil', en: 'Profile', hu: 'Profil' },
  },
  thebotanicaleye: {
    name: 'The Botanical Eye',
    accent: '#0f9488', accentSoft: '#e3f8f5', accentInk: '#115e59',
    ios: 'https://apps.apple.com/app/id6821145242',
    android: 'https://play.google.com/store/apps/details?id=com.aissaapps.botanicaleye',
    iosLive: true,
    sampleId: 'E5F6-A7B8',
    t: {
      es: {
        title: 'Cómo enviarme tu ID de The Botanical Eye',
        lead: 'Te he invitado a usar The Botanical Eye Premium gratis. Para activarlo solo necesito tu ID: un código corto que la app te asigna. Tardas un minuto.',
        gift: 'Qué recibes: Premium gratis, con hasta 40 escaneos de plantas por semana.',
        s1h: 'Instala The Botanical Eye y ábrelo una vez', s1p: 'Descárgalo desde tu tienda de apps. No hace falta crear cuenta ni dar tu correo.',
        s2h: 'Entra en la pestaña «Perfil»', s2p: 'Es el último icono de la barra de abajo.',
        s3h: 'Busca «Tu ID»', s3p: 'Verás un código como este. Tócalo para compartirlo.',
        s4h: 'Envíame el código', s4p: 'Mándamelo por WhatsApp, mensaje o correo a quien te invitó. Copia el código tal cual, con el guion.',
        s5h: 'Listo: cierra y vuelve a abrir la app', s5p: 'Cuando lo active (normalmente el mismo día), en «Perfil» verás tus escaneos de la semana.',
        faqH: 'Preguntas rápidas',
        q1: '¿Es seguro compartir mi ID?', a1: 'Sí. Solo identifica la app en tu móvil: no incluye tu nombre, correo ni teléfono.',
        q2: 'He reinstalado la app o cambiado de móvil', a2: 'Cada instalación tiene un ID nuevo. Envíame el nuevo y lo activo otra vez.',
        q3: '¿Cuánto tarda?', a3: 'Normalmente lo activo el mismo día. Después, cierra y vuelve a abrir la app para verlo.',
        get: 'Descargar The Botanical Eye', ios: 'App Store (iPhone)', android: 'Google Play (Android)', soon: 'próximamente',
        langs: 'Idioma', footer: 'The Botanical Eye es una app de Chispapps.', privacy: 'Privacidad', privacyPath: 'privacidad',
      },
      en: {
        title: 'How to send me your The Botanical Eye ID',
        lead: "I've invited you to use The Botanical Eye Premium for free. To switch it on I only need your ID: a short code the app gives you. It takes one minute.",
        gift: 'What you get: free Premium, with up to 40 plant scans a week.',
        s1h: 'Install The Botanical Eye and open it once', s1p: 'Download it from your app store. No account or email needed.',
        s2h: 'Open the “Profile” tab', s2p: "It's the last icon in the bar at the bottom.",
        s3h: 'Find “Your ID”', s3p: 'You will see a code like this one. Tap it to share it.',
        s4h: 'Send me the code', s4p: 'Send it by WhatsApp, text or email to the person who invited you. Copy it exactly, dash included.',
        s5h: 'Done: close and reopen the app', s5p: 'Once I switch it on (usually the same day), “Profile” shows your scans for the week.',
        faqH: 'Quick questions',
        q1: 'Is it safe to share my ID?', a1: "Yes. It only identifies the app on your phone: it doesn't contain your name, email or phone number.",
        q2: 'I reinstalled the app or changed phones', a2: 'Each install gets a new ID. Send me the new one and I will switch it on again.',
        q3: 'How long does it take?', a3: 'I usually switch it on the same day. Then close and reopen the app to see it.',
        get: 'Get The Botanical Eye', ios: 'App Store (iPhone)', android: 'Google Play (Android)', soon: 'coming soon',
        langs: 'Language', footer: 'The Botanical Eye is an app by Chispapps.', privacy: 'Privacy', privacyPath: 'privacy',
      },
      hu: {
        title: 'Így küldd el a The Botanical Eye-azonosítódat',
        lead: 'Meghívtalak, hogy ingyen használd a The Botanical Eye Premiumot. A bekapcsoláshoz csak az azonosítódra van szükségem: egy rövid kódra, amit az alkalmazás ad. Egy percet vesz igénybe.',
        gift: 'Mit kapsz: ingyenes Premiumot, hetente legfeljebb 40 növényszkenneléssel.',
        s1h: 'Telepítsd a The Botanical Eye-t, és nyisd meg egyszer', s1p: 'Töltsd le az alkalmazásboltból. Nem kell fiók vagy e-mail-cím.',
        s2h: 'Nyisd meg a „Profil” fület', s2p: 'Ez az alsó sáv utolsó ikonja.',
        s3h: 'Keresd meg az „Az azonosítód” részt', s3p: 'Egy ilyen kódot fogsz látni. Koppints rá a megosztáshoz.',
        s4h: 'Küldd el nekem a kódot', s4p: 'Küldd el WhatsAppon, üzenetben vagy e-mailben annak, aki meghívott. Pontosan másold, a kötőjellel együtt.',
        s5h: 'Kész: zárd be, és nyisd meg újra az alkalmazást', s5p: 'Amint bekapcsolom (általában még aznap), a „Profil” fülön látod a heti szkenneléseidet.',
        faqH: 'Gyors kérdések',
        q1: 'Biztonságos megosztani az azonosítómat?', a1: 'Igen. Csak a telefonodon lévő alkalmazást azonosítja: nem tartalmazza a neved, e-mail-címed vagy telefonszámod.',
        q2: 'Újratelepítettem az alkalmazást, vagy telefont cseréltem', a2: 'Minden telepítés új azonosítót kap. Küldd el az újat, és újra bekapcsolom.',
        q3: 'Mennyi ideig tart?', a3: 'Általában még aznap bekapcsolom. Utána zárd be, és nyisd meg újra az alkalmazást.',
        get: 'The Botanical Eye letöltése', ios: 'App Store (iPhone)', android: 'Google Play (Android)', soon: 'hamarosan',
        langs: 'Nyelv', footer: 'A The Botanical Eye a Chispapps alkalmazása.', privacy: 'Adatvédelem', privacyPath: 'privacy',
      },
    },
    idLabel: { es: 'Tu ID', en: 'Your ID', hu: 'Az azonosítód' },
    tabLabel: { es: 'Perfil', en: 'Profile', hu: 'Profil' },
  },
};

const LANGS = ['es', 'en', 'hu'];

// Store pages in the reader's language: App Store by storefront country, Google Play by hl=.
const APPLE_STOREFRONT = { es: 'es', en: 'us', hu: 'hu' };
function storeLinks(app, lang) {
  return {
    ios: app.ios.replace('https://apps.apple.com/app/', 'https://apps.apple.com/' + APPLE_STOREFRONT[lang] + '/app/'),
    android: app.android + '&hl=' + lang,
  };
}

const LANG_NAMES = { es: 'Español', en: 'English', hu: 'Magyar' };
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function page(slug, app, lang) {
  const t = app.t[lang];
  const base = `/${slug}/friends/`;
  const stores = `
      <a class="store" href="${storeLinks(app, lang).android}">${esc(t.android)}</a>
      ${app.iosLive ? `<a class="store" href="${storeLinks(app, lang).ios}">${esc(t.ios)}</a>` : `<span class="store off">${esc(t.ios)} · ${esc(t.soon)}</span>`}`;
  const step = (n, h, p, extra = '') => `
    <li class="step"><span class="num">${n}</span><div><h2>${esc(h)}</h2><p>${esc(p)}</p>${extra}</div></li>`;
  const phone = `
      <div class="phone" aria-hidden="true">
        <div class="row"><span class="lbl">${esc(app.idLabel[lang])}</span><span class="code">${app.sampleId}</span></div>
        <div class="tabs"><span></span><span></span><span></span><span class="on">${esc(app.tabLabel[lang])}</span></div>
      </div>`;
  return `<!doctype html>
<html lang="${lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${esc(t.title)} · ${esc(app.name)}</title>
<meta name="description" content="${esc(t.lead)}">
<meta name="robots" content="noindex">
<link rel="canonical" href="https://chispapps.com${base}${lang}/">
${LANGS.map(l => `<link rel="alternate" hreflang="${l}" href="https://chispapps.com${base}${l}/">`).join('\n')}
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap">
<style>
  :root {
    --bg: #f6f8fc; --card: #ffffff; --line: #e4e8f1; --ink: #0b1530; --soft: #4a5671; --faint: #8893aa;
    --accent: ${app.accent}; --accent-soft: ${app.accentSoft}; --accent-ink: ${app.accentInk};
    --font: "Plus Jakarta Sans", "Segoe UI", -apple-system, system-ui, sans-serif;
    color-scheme: light;
  }
  * { box-sizing: border-box; }
  html, body { margin: 0; }
  body { background: var(--bg); color: var(--ink); font-family: var(--font); font-size: 16px; line-height: 1.55; -webkit-font-smoothing: antialiased; }
  .wrap { max-width: 640px; margin: 0 auto; padding-left: max(18px, env(safe-area-inset-left, 0px)); padding-right: max(18px, env(safe-area-inset-right, 0px)); padding-block: 20px 40px; }
  header { display: flex; justify-content: space-between; align-items: center; gap: 12px; flex-wrap: wrap; }
  .brand { font-weight: 800; letter-spacing: -0.02em; color: var(--ink); text-decoration: none; }
  .brand span { color: var(--accent); }
  .langs { display: flex; gap: 6px; }
  .langs a { font-size: .82rem; font-weight: 600; color: var(--soft); text-decoration: none; border: 1px solid var(--line); background: var(--card); border-radius: 999px; padding: 4px 10px; }
  .langs a[aria-current] { background: var(--ink); color: #fff; border-color: var(--ink); }
  h1 { font-size: clamp(1.6rem, 6.5vw, 2.2rem); line-height: 1.15; letter-spacing: -0.03em; margin: 28px 0 12px; text-wrap: balance; }
  .lead { color: var(--soft); margin: 0 0 16px; }
  .gift { background: var(--accent-soft); color: var(--accent-ink); border-radius: 14px; padding: 12px 14px; font-weight: 600; font-size: .95rem; margin: 0 0 22px; }
  .stores { display: flex; flex-wrap: wrap; gap: 10px; margin: 0 0 28px; }
  .store { display: inline-flex; align-items: center; border-radius: 12px; padding: 10px 16px; font-weight: 600; font-size: .92rem; text-decoration: none; background: var(--ink); color: #fff; }
  .store.off { background: var(--card); color: var(--faint); border: 1px dashed var(--line); }
  ol.steps { list-style: none; margin: 0; padding: 0; display: grid; gap: 12px; }
  .step { display: flex; gap: 14px; background: var(--card); border: 1px solid var(--line); border-radius: 16px; padding: 16px; }
  .num { flex: none; width: 32px; height: 32px; border-radius: 10px; display: grid; place-items: center; background: var(--accent); color: #fff; font-weight: 800; }
  .step h2 { font-size: 1.02rem; margin: 3px 0 4px; letter-spacing: -0.01em; }
  .step p { margin: 0; color: var(--soft); font-size: .95rem; }
  .step > div { min-width: 0; flex: 1; }
  .phone { margin-top: 12px; border: 2px solid var(--ink); border-radius: 18px; padding: 12px; max-width: 300px; background: var(--bg); }
  .phone .row { background: var(--card); border: 1px solid var(--line); border-radius: 12px; padding: 10px 12px; display: flex; flex-direction: column; gap: 2px; box-shadow: 0 0 0 3px var(--accent-soft); }
  .phone .lbl { font-size: .78rem; color: var(--faint); }
  .phone .code { font-family: ui-monospace, "SF Mono", Consolas, monospace; font-size: 1.25rem; font-weight: 700; letter-spacing: .06em; }
  .phone .tabs { display: flex; justify-content: space-between; align-items: center; margin-top: 12px; padding-top: 10px; border-top: 1px solid var(--line); }
  .phone .tabs span { width: 22px; height: 6px; border-radius: 3px; background: var(--line); }
  .phone .tabs span.on { width: auto; height: auto; background: var(--accent); color: #fff; font-size: .74rem; font-weight: 700; padding: 3px 9px; border-radius: 999px; }
  h3 { font-size: 1.05rem; margin: 30px 0 10px; }
  details { background: var(--card); border: 1px solid var(--line); border-radius: 14px; padding: 12px 14px; margin-bottom: 8px; }
  summary { font-weight: 600; cursor: pointer; }
  details p { margin: 8px 0 0; color: var(--soft); font-size: .95rem; }
  footer { margin-top: 30px; color: var(--faint); font-size: .85rem; display: flex; flex-wrap: wrap; gap: 6px 16px; }
  footer a { color: var(--soft); }
  a:focus-visible, summary:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }
</style>
</head>
<body>
<main class="wrap">
  <header>
    <a class="brand" href="/${slug}/">${esc(app.name)} <span>·</span> Chispapps</a>
    <nav class="langs" aria-label="${esc(t.langs)}">
      ${LANGS.map(l => `<a href="${base}${l}/" hreflang="${l}" lang="${l}"${l === lang ? ' aria-current="page"' : ''}>${l.toUpperCase()}</a>`).join('\n      ')}
    </nav>
  </header>
  <h1>${esc(t.title)}</h1>
  <p class="lead">${esc(t.lead)}</p>
  <p class="gift">${esc(t.gift)}</p>
  <div class="stores" aria-label="${esc(t.get)}">${stores}
  </div>
  <ol class="steps">${step(1, t.s1h, t.s1p)}${step(2, t.s2h, t.s2p)}${step(3, t.s3h, t.s3p, phone)}${step(4, t.s4h, t.s4p)}${step(5, t.s5h, t.s5p)}
  </ol>
  <h3>${esc(t.faqH)}</h3>
  <details><summary>${esc(t.q1)}</summary><p>${esc(t.a1)}</p></details>
  <details><summary>${esc(t.q2)}</summary><p>${esc(t.a2)}</p></details>
  <details><summary>${esc(t.q3)}</summary><p>${esc(t.a3)}</p></details>
  <footer><span>${esc(t.footer)}</span><a href="/${slug}/${t.privacyPath}">${esc(t.privacy)}</a><a href="/">chispapps.com</a></footer>
</main>
</body>
</html>
`;
}

function chooser(slug, app) {
  const base = `/${slug}/friends/`;
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(app.name)} · Friends</title>
<meta name="robots" content="noindex">
<script>
  (function () {
    var langs = (navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language || 'en']);
    var pick = 'en';
    for (var i = 0; i < langs.length; i++) {
      var l = String(langs[i]).slice(0, 2).toLowerCase();
      if (l === 'es' || l === 'hu' || l === 'en') { pick = l; break; }
    }
    location.replace('${base}' + pick + '/' + location.hash);
  })();
</script>
<style>body{font-family:system-ui,sans-serif;margin:0;padding:40px 18px;background:#f6f8fc;color:#0b1530;text-align:center}a{display:inline-block;margin:6px;padding:10px 16px;border-radius:12px;background:#0b1530;color:#fff;text-decoration:none;font-weight:600}</style>
</head>
<body>
<p>${esc(app.name)}</p>
${LANGS.map(l => `<a href="${base}${l}/" hreflang="${l}">${LANG_NAMES[l]}</a>`).join('\n')}
</body>
</html>
`;
}

for (const [slug, app] of Object.entries(apps)) {
  const dir = path.join(ROOT, slug, 'friends');
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), chooser(slug, app));
  for (const lang of LANGS) {
    fs.mkdirSync(path.join(dir, lang), { recursive: true });
    fs.writeFileSync(path.join(dir, lang, 'index.html'), page(slug, app, lang));
  }
  console.log(`${slug}/friends: index + ${LANGS.join(', ')}`);
}
