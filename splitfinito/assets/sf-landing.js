/*
 * SplitFinito landing pages: /splitfinito/join/ (invite links) and /splitfinito/i/ (events bundles).
 *
 * Everything happens in the browser. The link payload lives in the URL fragment (after "#"), which
 * browsers never send to the server. This script reads it, shows the group name (invite links only),
 * and builds the "Open in SplitFinito" button. It never sends the fragment anywhere: there is no
 * fetch, no XHR, no beacon, no analytics, and the pages also forbid network calls through their
 * Content-Security-Policy (connect-src 'none').
 *
 * Fragment formats (see app/src/domain/links.ts, which is the source of truth):
 *   invite: 1.g.<gid 22>.<K 43>.<S 22>.<name base64url utf-8>[.m.<memberId>]
 *   bundle: 1.e.<gid 22>.<nonce 32>.<cipher>
 *
 * Plain ES2015 with no dependencies, so it runs in every in-app browser (WhatsApp, Telegram...) and
 * in Node's vm module for the unit tests (site/tests/landing.test.mjs).
 */
(function (root) {
  'use strict';

  // ---------------------------------------------------------------------------------- constants

  /** Numeric App Store id (App Store Connect > App Information > Apple ID). Replace before launch. */
  var APPLE_ID = '6834373013';
  var ANDROID_PACKAGE = 'com.aissaapps.splitfinito';
  var PLAY_URL = 'https://play.google.com/store/apps/details?id=' + ANDROID_PACKAGE;
  var SCHEME = 'splitfinito';
  var JOIN_URL = 'https://chispapps.com/splitfinito/join/';
  var IMPORT_URL = 'https://chispapps.com/splitfinito/i/';
  var LANGS = ['es', 'en', 'fr', 'de', 'it', 'pt'];
  var DEFAULT_LANG = 'en';
  var FIELD = /^[A-Za-z0-9_-]+$/;
  var NAME_MAX = 60;
  var HINT_DELAY_MS = 1500;
  var B64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_';

  // ---------------------------------------------------------------------------------- strings

  var COMMON = {
    en: {
      tagline: 'Split it. Finito.',
      perks: 'Free · No account · No limits · No ads',
      open: 'Open in SplitFinito',
      openPlain: 'Button not working? Try this link',
      hint: 'Nothing happened? Install SplitFinito first, then come back and tap the button again.',
      installTitle: 'Don’t have the app yet?',
      copied: 'Link copied',
      copyFailed: 'Couldn’t copy. Copy the link from the address bar instead.',
      desktop: 'On a computer? Open this link on your phone instead.',
      appStoreSub: 'for iPhone',
      appStoreSoon: 'Coming soon to the App Store',
      googlePlaySub: 'for Android',
      privacyLink: 'Privacy',
      termsLink: 'Terms',
      helpLink: 'Help'
    },
    es: {
      tagline: 'Divídelo. Finito.',
      perks: 'Gratis · Sin cuenta · Sin límites · Sin anuncios',
      open: 'Abrir en SplitFinito',
      openPlain: '¿No funciona el botón? Prueba con este enlace',
      hint: '¿No ha pasado nada? Instala primero SplitFinito y vuelve a pulsar el botón.',
      installTitle: '¿Aún no tienes la app?',
      copied: 'Enlace copiado',
      copyFailed: 'No se ha podido copiar. Cópialo desde la barra de direcciones.',
      desktop: '¿Estás en un ordenador? Abre este enlace en tu móvil.',
      appStoreSub: 'para iPhone',
      appStoreSoon: 'Muy pronto en el App Store',
      googlePlaySub: 'para Android',
      privacyLink: 'Privacidad',
      termsLink: 'Términos',
      helpLink: 'Ayuda'
    },
    fr: {
      tagline: 'Partagez. Finito.',
      perks: 'Gratuit · Sans compte · Sans limite · Sans pub',
      open: 'Ouvrir dans SplitFinito',
      openPlain: 'Le bouton ne marche pas ? Essayez ce lien',
      hint: 'Rien ne se passe ? Installez d’abord SplitFinito, puis revenez appuyer sur le bouton.',
      installTitle: 'Vous n’avez pas encore l’app ?',
      copied: 'Lien copié',
      copyFailed: 'Copie impossible. Copiez le lien depuis la barre d’adresse.',
      desktop: 'Sur un ordinateur ? Ouvrez plutôt ce lien sur votre téléphone.',
      appStoreSub: 'pour iPhone',
      appStoreSoon: 'Bientôt sur l’App Store',
      googlePlaySub: 'pour Android',
      privacyLink: 'Confidentialité',
      termsLink: 'Conditions',
      helpLink: 'Aide'
    },
    de: {
      tagline: 'Teilen. Finito.',
      perks: 'Kostenlos · Ohne Konto · Ohne Limits · Ohne Werbung',
      open: 'In SplitFinito öffnen',
      openPlain: 'Button funktioniert nicht? Probier diesen Link',
      hint: 'Nichts passiert? Installiere zuerst SplitFinito und tippe dann noch einmal auf den Button.',
      installTitle: 'Du hast die App noch nicht?',
      copied: 'Link kopiert',
      copyFailed: 'Kopieren nicht möglich. Kopiere den Link aus der Adressleiste.',
      desktop: 'Am Computer? Öffne diesen Link lieber auf deinem Handy.',
      appStoreSub: 'für iPhone',
      appStoreSoon: 'Bald im App Store',
      googlePlaySub: 'für Android',
      privacyLink: 'Datenschutz',
      termsLink: 'Nutzungsbedingungen',
      helpLink: 'Hilfe'
    },
    it: {
      tagline: 'Dividi. Finito.',
      perks: 'Gratis · Senza account · Senza limiti · Senza pubblicità',
      open: 'Apri in SplitFinito',
      openPlain: 'Il pulsante non funziona? Prova questo link',
      hint: 'Non è successo niente? Installa prima SplitFinito, poi torna qui e tocca di nuovo il pulsante.',
      installTitle: 'Non hai ancora l’app?',
      copied: 'Link copiato',
      copyFailed: 'Impossibile copiare. Copia il link dalla barra degli indirizzi.',
      desktop: 'Sei al computer? Apri questo link sul telefono.',
      appStoreSub: 'per iPhone',
      appStoreSoon: 'Presto su App Store',
      googlePlaySub: 'per Android',
      privacyLink: 'Privacy',
      termsLink: 'Termini',
      helpLink: 'Assistenza'
    },
    pt: {
      tagline: 'Divide. Finito.',
      perks: 'Grátis · Sem conta · Sem limites · Sem anúncios',
      open: 'Abrir no SplitFinito',
      openPlain: 'O botão não funciona? Experimenta este link',
      hint: 'Não aconteceu nada? Instala primeiro o SplitFinito e depois volta a tocar no botão.',
      installTitle: 'Ainda não tens a app?',
      copied: 'Link copiado',
      copyFailed: 'Não foi possível copiar. Copia o link a partir da barra de endereço.',
      desktop: 'Estás num computador? Abre este link no telemóvel.',
      appStoreSub: 'para iPhone',
      appStoreSoon: 'Em breve na App Store',
      googlePlaySub: 'para Android',
      privacyLink: 'Privacidade',
      termsLink: 'Termos',
      helpLink: 'Ajuda'
    }
  };

  var PAGES = {
    join: {
      en: {
        docTitle: 'Join a group · SplitFinito',
        titleNamed: 'Join “{name}”',
        titleGeneric: 'Join a group on SplitFinito',
        lead: 'You’re invited to share expenses in this group. Open the invite in SplitFinito to see every cost and add your own.',
        seat: 'This link keeps a seat for you in the group.',
        installSteps: 'Install SplitFinito: it’s free and needs no account. Then tap the invite link again, or copy it and paste it in the app.',
        copy: 'Copy invite link',
        invalid: 'This invite link is incomplete. Ask whoever sent it for a new one.',
        emptyLead: 'Open an invite link from a friend to join their group, or create your own group in the app.',
        privacy: 'Your invite code never leaves this page: it stays in your browser and is never sent to any server.'
      },
      es: {
        docTitle: 'Únete a un grupo · SplitFinito',
        titleNamed: 'Únete a «{name}»',
        titleGeneric: 'Únete a un grupo en SplitFinito',
        lead: 'Te han invitado a compartir gastos en este grupo. Abre la invitación en SplitFinito para ver todos los gastos y añadir los tuyos.',
        seat: 'Este enlace te guarda un sitio en el grupo.',
        installSteps: 'Instala SplitFinito: es gratis y no necesitas cuenta. Después vuelve a tocar el enlace de invitación, o cópialo y pégalo en la app.',
        copy: 'Copiar enlace de invitación',
        invalid: 'Este enlace de invitación está incompleto. Pide uno nuevo a quien te lo envió.',
        emptyLead: 'Abre el enlace de invitación que te haya enviado un amigo para unirte a su grupo, o crea tu propio grupo en la app.',
        privacy: 'Tu código de invitación nunca sale de esta página: se queda en tu navegador y no se envía a ningún servidor.'
      },
      fr: {
        docTitle: 'Rejoindre un groupe · SplitFinito',
        titleNamed: 'Rejoignez « {name} »',
        titleGeneric: 'Rejoignez un groupe sur SplitFinito',
        lead: 'On vous invite à partager des dépenses dans ce groupe. Ouvrez l’invitation dans SplitFinito pour voir toutes les dépenses et ajouter les vôtres.',
        seat: 'Ce lien vous réserve une place dans le groupe.',
        installSteps: 'Installez SplitFinito : c’est gratuit et sans compte. Touchez ensuite à nouveau le lien d’invitation, ou copiez-le et collez-le dans l’app.',
        copy: 'Copier le lien d’invitation',
        invalid: 'Ce lien d’invitation est incomplet. Demandez-en un nouveau à la personne qui vous l’a envoyé.',
        emptyLead: 'Ouvrez le lien d’invitation envoyé par un ami pour rejoindre son groupe, ou créez votre propre groupe dans l’app.',
        privacy: 'Votre code d’invitation ne quitte jamais cette page : il reste dans votre navigateur et n’est envoyé à aucun serveur.'
      },
      de: {
        docTitle: 'Gruppe beitreten · SplitFinito',
        titleNamed: 'Tritt „{name}“ bei',
        titleGeneric: 'Tritt einer Gruppe in SplitFinito bei',
        lead: 'Du wurdest eingeladen, in dieser Gruppe Ausgaben zu teilen. Öffne die Einladung in SplitFinito, um alle Ausgaben zu sehen und deine eigenen einzutragen.',
        seat: 'Dieser Link hält dir einen Platz in der Gruppe frei.',
        installSteps: 'Installiere SplitFinito – kostenlos und ohne Konto. Tippe danach erneut auf den Einladungslink oder kopiere ihn und füge ihn in der App ein.',
        copy: 'Einladungslink kopieren',
        invalid: 'Dieser Einladungslink ist unvollständig. Bitte die Person, die ihn geschickt hat, um einen neuen.',
        emptyLead: 'Öffne den Einladungslink, den du bekommen hast, um der Gruppe beizutreten, oder erstelle in der App deine eigene Gruppe.',
        privacy: 'Dein Einladungscode verlässt diese Seite nie: Er bleibt in deinem Browser und wird an keinen Server gesendet.'
      },
      it: {
        docTitle: 'Unisciti a un gruppo · SplitFinito',
        titleNamed: 'Unisciti a «{name}»',
        titleGeneric: 'Unisciti a un gruppo su SplitFinito',
        lead: 'Ti hanno invitato a dividere le spese in questo gruppo. Apri l’invito in SplitFinito per vedere tutte le spese e aggiungere le tue.',
        seat: 'Questo link ti tiene un posto nel gruppo.',
        installSteps: 'Installa SplitFinito: è gratis e non serve un account. Poi tocca di nuovo il link d’invito, oppure copialo e incollalo nell’app.',
        copy: 'Copia il link d’invito',
        invalid: 'Questo link d’invito è incompleto. Chiedine uno nuovo a chi te l’ha mandato.',
        emptyLead: 'Apri il link d’invito che ti hanno mandato per unirti al gruppo, oppure crea il tuo gruppo nell’app.',
        privacy: 'Il tuo codice d’invito non lascia mai questa pagina: resta nel browser e non viene inviato a nessun server.'
      },
      pt: {
        docTitle: 'Junta-te a um grupo · SplitFinito',
        titleNamed: 'Junta-te a «{name}»',
        titleGeneric: 'Junta-te a um grupo no SplitFinito',
        lead: 'Recebeste um convite para partilhar despesas neste grupo. Abre o convite no SplitFinito para veres todas as despesas e juntares as tuas.',
        seat: 'Este link guarda-te um lugar no grupo.',
        installSteps: 'Instala o SplitFinito: é grátis e não precisas de conta. Depois toca outra vez no link do convite, ou copia-o e cola-o na app.',
        copy: 'Copiar link do convite',
        invalid: 'Este link de convite está incompleto. Pede um novo a quem to enviou.',
        emptyLead: 'Abre o link de convite que te enviaram para entrares no grupo, ou cria o teu próprio grupo na app.',
        privacy: 'O teu código de convite nunca sai desta página: fica no teu navegador e não é enviado para nenhum servidor.'
      }
    },
    import: {
      en: {
        docTitle: 'Shared cost · SplitFinito',
        titleGeneric: 'A shared cost is waiting for you',
        lead: 'Someone in your SplitFinito group sent you an update: an expense, a payment or a change. Open it in the app to add it to the group.',
        member: 'Only members of the group can read it. Not in the group yet? Ask for the invite link first, then open this link again.',
        installSteps: 'Install SplitFinito: it’s free and needs no account. Join the group with its invite link, then tap this link again.',
        copy: 'Copy link',
        invalid: 'This link is incomplete or damaged. Ask for it to be sent again.',
        emptyLead: 'This page opens updates shared from SplitFinito, but the link you used is empty.',
        privacy: 'The contents are encrypted. They never leave this page, and this page cannot read them either.'
      },
      es: {
        docTitle: 'Gasto compartido · SplitFinito',
        titleGeneric: 'Tienes un gasto compartido esperándote',
        lead: 'Alguien de tu grupo de SplitFinito te ha enviado una novedad: un gasto, un pago o un cambio. Ábrela en la app para añadirla al grupo.',
        member: 'Solo los miembros del grupo pueden leerla. ¿Aún no estás en el grupo? Pide primero el enlace de invitación y vuelve a abrir este enlace.',
        installSteps: 'Instala SplitFinito: es gratis y no necesitas cuenta. Únete al grupo con su enlace de invitación y vuelve a tocar este enlace.',
        copy: 'Copiar enlace',
        invalid: 'Este enlace está incompleto o dañado. Pide que te lo vuelvan a enviar.',
        emptyLead: 'Esta página abre las novedades compartidas desde SplitFinito, pero el enlace que has usado está vacío.',
        privacy: 'El contenido está cifrado. Nunca sale de esta página y esta página tampoco puede leerlo.'
      },
      fr: {
        docTitle: 'Dépense partagée · SplitFinito',
        titleGeneric: 'Une dépense partagée vous attend',
        lead: 'Quelqu’un de votre groupe SplitFinito vous a envoyé une mise à jour : une dépense, un remboursement ou une modification. Ouvrez-la dans l’app pour l’ajouter au groupe.',
        member: 'Seuls les membres du groupe peuvent la lire. Pas encore dans le groupe ? Demandez d’abord le lien d’invitation, puis rouvrez ce lien.',
        installSteps: 'Installez SplitFinito : c’est gratuit et sans compte. Rejoignez le groupe avec son lien d’invitation, puis touchez à nouveau ce lien.',
        copy: 'Copier le lien',
        invalid: 'Ce lien est incomplet ou abîmé. Demandez qu’on vous le renvoie.',
        emptyLead: 'Cette page ouvre les mises à jour partagées depuis SplitFinito, mais le lien utilisé est vide.',
        privacy: 'Le contenu est chiffré. Il ne quitte jamais cette page, et cette page ne peut pas le lire non plus.'
      },
      de: {
        docTitle: 'Geteilte Ausgabe · SplitFinito',
        titleGeneric: 'Eine geteilte Ausgabe wartet auf dich',
        lead: 'Jemand aus deiner SplitFinito-Gruppe hat dir ein Update geschickt: eine Ausgabe, eine Zahlung oder eine Änderung. Öffne es in der App, um es zur Gruppe hinzuzufügen.',
        member: 'Nur Mitglieder der Gruppe können es lesen. Noch nicht in der Gruppe? Frag zuerst nach dem Einladungslink und öffne dann diesen Link erneut.',
        installSteps: 'Installiere SplitFinito – kostenlos und ohne Konto. Tritt der Gruppe über ihren Einladungslink bei und tippe dann erneut auf diesen Link.',
        copy: 'Link kopieren',
        invalid: 'Dieser Link ist unvollständig oder beschädigt. Bitte darum, ihn noch einmal zu schicken.',
        emptyLead: 'Diese Seite öffnet geteilte SplitFinito-Updates, aber der verwendete Link ist leer.',
        privacy: 'Der Inhalt ist verschlüsselt. Er verlässt diese Seite nie, und auch diese Seite kann ihn nicht lesen.'
      },
      it: {
        docTitle: 'Spesa condivisa · SplitFinito',
        titleGeneric: 'Ti aspetta una spesa condivisa',
        lead: 'Qualcuno del tuo gruppo SplitFinito ti ha mandato un aggiornamento: una spesa, un pagamento o una modifica. Aprilo nell’app per aggiungerlo al gruppo.',
        member: 'Solo i membri del gruppo possono leggerlo. Non sei ancora nel gruppo? Chiedi prima il link d’invito, poi riapri questo link.',
        installSteps: 'Installa SplitFinito: è gratis e non serve un account. Entra nel gruppo con il suo link d’invito, poi tocca di nuovo questo link.',
        copy: 'Copia il link',
        invalid: 'Questo link è incompleto o danneggiato. Chiedi di rimandartelo.',
        emptyLead: 'Questa pagina apre gli aggiornamenti condivisi da SplitFinito, ma il link che hai usato è vuoto.',
        privacy: 'Il contenuto è cifrato. Non lascia mai questa pagina e nemmeno questa pagina può leggerlo.'
      },
      pt: {
        docTitle: 'Despesa partilhada · SplitFinito',
        titleGeneric: 'Tens uma despesa partilhada à tua espera',
        lead: 'Alguém do teu grupo do SplitFinito enviou-te uma novidade: uma despesa, um pagamento ou uma alteração. Abre-a na app para a juntar ao grupo.',
        member: 'Só os membros do grupo a podem ler. Ainda não estás no grupo? Pede primeiro o link do convite e depois volta a abrir este link.',
        installSteps: 'Instala o SplitFinito: é grátis e não precisas de conta. Entra no grupo com o link do convite e depois toca outra vez neste link.',
        copy: 'Copiar link',
        invalid: 'Este link está incompleto ou danificado. Pede que to enviem outra vez.',
        emptyLead: 'Esta página abre as novidades partilhadas a partir do SplitFinito, mas o link que usaste está vazio.',
        privacy: 'O conteúdo está cifrado. Nunca sai desta página e esta página também não o consegue ler.'
      }
    }
  };

  /** Legal page slugs under /splitfinito/ per language (Jekyll serves foo.md at /splitfinito/foo). */
  var LEGAL = {
    en: { privacy: 'privacy', terms: 'terms', help: 'support' },
    es: { privacy: 'privacidad', terms: 'terminos', help: 'soporte' },
    fr: { privacy: 'confidentialite', terms: 'conditions', help: 'aide' },
    de: { privacy: 'datenschutz', terms: 'nutzungsbedingungen', help: 'hilfe' },
    it: { privacy: 'privacy-it', terms: 'termini', help: 'assistenza' },
    pt: { privacy: 'privacidade', terms: 'termos', help: 'ajuda' }
  };

  // ---------------------------------------------------------------------------------- pure helpers

  /** First supported UI language from a navigator.languages-style list (es, en, fr, de, it, pt), else en. */
  function pickLang(list) {
    var arr = Array.isArray(list) ? list : list ? [list] : [];
    for (var i = 0; i < arr.length; i++) {
      if (typeof arr[i] !== 'string') continue;
      var primary = arr[i].toLowerCase().split(/[-_]/)[0];
      if (LANGS.indexOf(primary) !== -1) return primary;
    }
    return DEFAULT_LANG;
  }

  /** base64url (no padding; '+' and '/' tolerated like the app codec) to an array of byte values. Throws on bad input. */
  function decodeBase64Url(s) {
    var clean = String(s).replace(/=+$/, '');
    var out = [];
    var buffer = 0;
    var bits = 0;
    for (var i = 0; i < clean.length; i++) {
      var c = clean.charAt(i);
      var v = c === '+' ? 62 : c === '/' ? 63 : B64.indexOf(c);
      if (v < 0) throw new Error('invalid base64url character');
      buffer = ((buffer << 6) | v) & 0xffffff;
      bits += 6;
      if (bits >= 8) {
        bits -= 8;
        out.push((buffer >> bits) & 0xff);
      }
    }
    return out;
  }

  /** UTF-8 bytes to a string. Malformed sequences become U+FFFD, like TextDecoder's default mode. */
  function utf8Decode(bytes) {
    var Dec = root.TextDecoder;
    if (typeof Dec === 'function') {
      try {
        return new Dec('utf-8').decode(new Uint8Array(bytes));
      } catch (e) {
        /* fall through to the manual decoder */
      }
    }
    return utf8DecodeManual(bytes);
  }

  function utf8DecodeManual(bytes) {
    var out = '';
    var i = 0;
    while (i < bytes.length) {
      var b = bytes[i];
      var need = 0;
      var cp = 0;
      var min = 0;
      if (b < 0x80) {
        out += String.fromCharCode(b);
        i++;
        continue;
      } else if (b >= 0xc2 && b <= 0xdf) {
        need = 1; cp = b & 0x1f; min = 0x80;
      } else if (b >= 0xe0 && b <= 0xef) {
        need = 2; cp = b & 0x0f; min = 0x800;
      } else if (b >= 0xf0 && b <= 0xf4) {
        need = 3; cp = b & 0x07; min = 0x10000;
      } else {
        out += '�';
        i++;
        continue;
      }
      var j = 1;
      for (; j <= need; j++) {
        var nb = bytes[i + j];
        if (nb === undefined || (nb & 0xc0) !== 0x80) break;
        cp = (cp << 6) | (nb & 0x3f);
      }
      if (j <= need || cp < min || cp > 0x10ffff || (cp >= 0xd800 && cp <= 0xdfff)) {
        out += '�';
        i += Math.max(1, j);
        continue;
      }
      out += String.fromCodePoint(cp);
      i += need + 1;
    }
    return out;
  }

  /** Display-safe group name: no control or bidi-override characters, collapsed spaces, at most 60 characters. */
  function cleanName(s) {
    var out = String(s == null ? '' : s)
      .replace(/[\u0000-\u001f\u007f-\u009f‎‏‪-‮⁦-⁩﻿]/g, '')
      .replace(/\s+/g, ' ')
      .trim();
    var chars = Array.from(out);
    if (chars.length > NAME_MAX) out = chars.slice(0, NAME_MAX - 1).join('').replace(/\s+$/, '') + '…';
    return out;
  }

  function stripHash(fragment) {
    return String(fragment == null ? '' : fragment).replace(/^#/, '');
  }

  function fieldOk(v, len) {
    return typeof v === 'string' && FIELD.test(v) && (len === undefined || v.length === len);
  }

  /**
   * Validate an invite fragment with the same rules as decodeInviteFragment (app/src/domain/links.ts).
   * Returns only what the page displays: never the group key or the invite secret.
   */
  function parseInvite(fragment) {
    var f = stripHash(fragment);
    if (!f) return { ok: false, reason: 'empty' };
    var parts = f.split('.');
    if (parts[0] !== '1' || parts[1] !== 'g' || parts.length < 6) return { ok: false, reason: 'invalid' };
    if (!fieldOk(parts[2], 22) || !fieldOk(parts[3], 43) || !fieldOk(parts[4], 22)) return { ok: false, reason: 'invalid' };
    var name;
    try {
      name = utf8Decode(decodeBase64Url(parts[5] || ''));
    } catch (e) {
      return { ok: false, reason: 'invalid' };
    }
    var result = { ok: true, gid: parts[2], name: cleanName(name), hasSeat: false };
    if (parts[6] === 'm' && parts[7]) {
      if (!fieldOk(parts[7])) return { ok: false, reason: 'invalid' };
      result.hasSeat = true;
    }
    return result;
  }

  /** Validate an events-bundle fragment with the same rules as decodeBundleFragment. Returns only the group id. */
  function parseBundle(fragment) {
    var f = stripHash(fragment);
    if (!f) return { ok: false, reason: 'empty' };
    var parts = f.split('.');
    if (parts.length !== 5 || parts[0] !== '1' || parts[1] !== 'e') return { ok: false, reason: 'invalid' };
    if (!fieldOk(parts[2], 22) || !fieldOk(parts[3], 32) || !fieldOk(parts[4])) return { ok: false, reason: 'invalid' };
    return { ok: true, gid: parts[2] };
  }

  /** 'ios' | 'android' | 'other' from the user agent (iPadOS reports a Mac UA with touch points). */
  function detectPlatform(ua, maxTouchPoints) {
    var s = String(ua || '');
    if (/android/i.test(s)) return 'android';
    if (/iphone|ipad|ipod/i.test(s)) return 'ios';
    if (/macintosh/i.test(s) && Number(maxTouchPoints) > 1) return 'ios';
    return 'other';
  }

  /** App Store link, or null while the numeric Apple id has not been filled in. */
  function appStoreUrl(appleId) {
    var id = String(appleId == null ? '' : appleId);
    return /^[0-9]{6,12}$/.test(id) ? 'https://apps.apple.com/app/id' + id : null;
  }

  function hostFor(kind) {
    return kind === 'import' ? 'i' : 'join';
  }

  /** Custom-scheme link handed to the installed app, e.g. splitfinito://join#1.g... (or splitfinito:// when empty). */
  function schemeUrl(kind, fragment) {
    var f = stripHash(fragment);
    return f ? SCHEME + '://' + hostFor(kind) + '#' + f : SCHEME + '://';
  }

  /**
   * Chrome-on-Android intent link. Android's Intent.parseUri splits at the LAST '#', so the payload
   * fragment survives and the app receives splitfinito://join#<fragment> (what classifyLink expects).
   * When the app is missing, Chrome opens S.browser_fallback_url (the Play Store page).
   */
  function intentUrl(kind, fragment) {
    var f = stripHash(fragment);
    var data = f ? hostFor(kind) + '#' + f : '';
    return (
      'intent://' + data +
      '#Intent;scheme=' + SCHEME +
      ';package=' + ANDROID_PACKAGE +
      ';S.browser_fallback_url=' + encodeURIComponent(PLAY_URL) +
      ';end'
    );
  }

  /** The two "open" targets for a platform: primary button and optional plain-scheme alternative. */
  function openUrls(kind, fragment, platform) {
    if (platform === 'android') return { primary: intentUrl(kind, fragment), alternative: schemeUrl(kind, fragment) };
    return { primary: schemeUrl(kind, fragment), alternative: null };
  }

  /** The canonical https link (what the copy button copies and what the app shares). */
  function canonicalUrl(kind, fragment) {
    var f = stripHash(fragment);
    return (kind === 'import' ? IMPORT_URL : JOIN_URL) + (f ? '#' + f : '');
  }

  /** All UI strings for a language and page kind, with English fallback for any missing key. */
  function strings(lang, kind) {
    var l = LANGS.indexOf(lang) === -1 ? DEFAULT_LANG : lang;
    var page = PAGES[kind === 'import' ? 'import' : 'join'];
    var out = {};
    var k;
    for (k in COMMON.en) out[k] = COMMON.en[k];
    for (k in page.en) out[k] = page.en[k];
    for (k in COMMON[l]) out[k] = COMMON[l][k];
    for (k in page[l]) out[k] = page[l][k];
    return out;
  }

  /** Links to the privacy policy, terms and help page in the page language. */
  function legalLinks(lang) {
    var l = LANGS.indexOf(lang) === -1 ? DEFAULT_LANG : lang;
    var s = COMMON[l];
    var slugs = LEGAL[l];
    return {
      privacy: { href: '/splitfinito/' + slugs.privacy, label: s.privacyLink },
      terms: { href: '/splitfinito/' + slugs.terms, label: s.termsLink },
      help: { href: '/splitfinito/' + slugs.help, label: s.helpLink }
    };
  }

  /** Content of Safari's Smart App Banner meta tag, or null while there is no Apple id. */
  function smartBannerContent(appleId, argumentUrl) {
    if (!appStoreUrl(appleId)) return null;
    return 'app-id=' + String(appleId) + (argumentUrl ? ', app-argument=' + argumentUrl : '');
  }

  // ---------------------------------------------------------------------------------- DOM helpers

  /** Render "Join “{name}”" with the name as a separate text node (never parsed as HTML). */
  function setTitleWithName(el, template, name, doc) {
    var at = template.indexOf('{name}');
    el.textContent = '';
    if (at === -1) {
      el.textContent = template;
      return;
    }
    el.appendChild(doc.createTextNode(template.slice(0, at)));
    var span = doc.createElement('span');
    span.className = 'group-name';
    span.textContent = name;
    el.appendChild(span);
    el.appendChild(doc.createTextNode(template.slice(at + '{name}'.length)));
  }

  function legacyCopy(text, doc) {
    try {
      var ta = doc.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.style.position = 'fixed';
      ta.style.top = '0';
      ta.style.opacity = '0';
      doc.body.appendChild(ta);
      ta.select();
      var ok = doc.execCommand('copy');
      doc.body.removeChild(ta);
      return !!ok;
    } catch (e) {
      return false;
    }
  }

  /** Copy text to the clipboard (local only). Resolves to true on success. */
  function copyText(text, win, doc) {
    var nav = win && win.navigator;
    if (nav && nav.clipboard && typeof nav.clipboard.writeText === 'function') {
      return nav.clipboard.writeText(text).then(
        function () { return true; },
        function () { return legacyCopy(text, doc); }
      );
    }
    return Promise.resolve(legacyCopy(text, doc));
  }

  /**
   * After tapping "Open", wait `delay` ms. If the page is still visible the app probably is not
   * installed, so call onFire (which reveals the install hint). Leaving the page cancels it.
   * Returns a cancel function.
   */
  function armFallbackHint(doc, win, onFire, delay) {
    var done = false;
    var timer = null;
    function cleanup() {
      done = true;
      if (timer !== null) win.clearTimeout(timer);
      doc.removeEventListener('visibilitychange', onVisibility);
      win.removeEventListener('pagehide', cancel);
    }
    function cancel() {
      if (!done) cleanup();
    }
    function onVisibility() {
      if (doc.visibilityState === 'hidden') cancel();
    }
    doc.addEventListener('visibilitychange', onVisibility);
    win.addEventListener('pagehide', cancel);
    timer = win.setTimeout(function () {
      if (done) return;
      var visible = doc.visibilityState !== 'hidden';
      cleanup();
      if (visible) onFire();
    }, typeof delay === 'number' ? delay : HINT_DELAY_MS);
    return cancel;
  }

  function byId(doc, id) {
    return doc.getElementById(id);
  }

  function show(el, visible) {
    if (el) el.hidden = !visible;
  }

  function pageKind(doc) {
    return doc.documentElement.getAttribute('data-page') === 'import' ? 'import' : 'join';
  }

  /** Insert the Smart App Banner meta while the <head> is still being parsed (iOS Safari only uses it). */
  function insertSmartBanner(doc, win) {
    var kind = pageKind(doc);
    var fragment = stripHash(win.location.hash);
    var parsed = kind === 'import' ? parseBundle(fragment) : parseInvite(fragment);
    var content = smartBannerContent(APPLE_ID, parsed.ok ? canonicalUrl(kind, fragment) : null);
    if (!content || !doc.head) return null;
    var meta = doc.createElement('meta');
    meta.setAttribute('name', 'apple-itunes-app');
    meta.setAttribute('content', content);
    doc.head.appendChild(meta);
    return content;
  }

  /** Wire the page. Returns a summary of what was decided (used by the tests). */
  function init(doc, win) {
    var nav = win.navigator || {};
    var lang = pickLang(nav.languages && nav.languages.length ? nav.languages : [nav.language]);
    var kind = pageKind(doc);
    var S = strings(lang, kind);
    var fragment = stripHash(win.location.hash);
    var parsed = kind === 'import' ? parseBundle(fragment) : parseInvite(fragment);
    var platform = detectPlatform(nav.userAgent, nav.maxTouchPoints);

    doc.documentElement.setAttribute('lang', lang);
    doc.title = S.docTitle;

    var nodes = doc.querySelectorAll('[data-i18n]');
    for (var i = 0; i < nodes.length; i++) {
      var key = nodes[i].getAttribute('data-i18n');
      if (Object.prototype.hasOwnProperty.call(S, key)) nodes[i].textContent = S[key];
    }

    var links = legalLinks(lang);
    var names = ['privacy', 'terms', 'help'];
    for (var n = 0; n < names.length; n++) {
      var a = byId(doc, 'link-' + names[n]);
      if (a) {
        a.setAttribute('href', links[names[n]].href);
        a.textContent = links[names[n]].label;
      }
    }

    // Store buttons: only the relevant one on phones, both on computers.
    var ios = byId(doc, 'store-ios');
    var android = byId(doc, 'store-android');
    var appStore = appStoreUrl(APPLE_ID);
    if (ios) {
      if (appStore) {
        ios.setAttribute('href', appStore);
        ios.removeAttribute('aria-disabled');
      } else {
        ios.removeAttribute('href');
        ios.setAttribute('aria-disabled', 'true');
        var sub = byId(doc, 'store-ios-sub');
        if (sub) sub.textContent = S.appStoreSoon;
      }
    }
    if (android) android.setAttribute('href', PLAY_URL);
    show(ios, platform !== 'android');
    show(android, platform !== 'ios');
    show(byId(doc, 'desktop'), platform === 'other');

    var title = byId(doc, 'title');
    var lead = byId(doc, 'lead');
    show(byId(doc, 'seat'), false);
    show(byId(doc, 'member'), kind === 'import' && parsed.ok);
    show(byId(doc, 'invalid'), parsed.reason === 'invalid');
    if (title) {
      if (kind === 'join' && parsed.ok && parsed.name) setTitleWithName(title, S.titleNamed, parsed.name, doc);
      else title.textContent = S.titleGeneric;
    }
    if (lead && parsed.reason === 'empty') lead.textContent = S.emptyLead;
    if (kind === 'join' && parsed.ok && parsed.hasSeat) show(byId(doc, 'seat'), true);

    // Open-in-app button: for a valid link, or a plain "open the app" for an empty one.
    var openBlock = byId(doc, 'open-block');
    var open = byId(doc, 'open');
    var plain = byId(doc, 'open-plain');
    var hint = byId(doc, 'hint');
    var canOpen = parsed.ok || parsed.reason === 'empty';
    show(openBlock, canOpen);
    if (canOpen && open) {
      var urls = openUrls(kind, parsed.ok ? fragment : '', platform);
      open.setAttribute('href', urls.primary);
      if (plain) {
        if (urls.alternative) plain.setAttribute('href', urls.alternative);
        show(plain, !!urls.alternative);
      }
      var cancelHint = null;
      open.addEventListener('click', function () {
        if (cancelHint) cancelHint();
        cancelHint = armFallbackHint(doc, win, function () { show(hint, true); }, HINT_DELAY_MS);
      });
    }

    // Copy the canonical link (useful after installing: paste it in the app).
    var copy = byId(doc, 'copy');
    var status = byId(doc, 'copy-status');
    show(copy, parsed.ok);
    if (parsed.ok && copy) {
      copy.addEventListener('click', function () {
        copyText(canonicalUrl(kind, fragment), win, doc).then(function (ok) {
          if (status) status.textContent = ok ? S.copied : S.copyFailed;
        });
      });
    }

    return { lang: lang, kind: kind, platform: platform, ok: parsed.ok, reason: parsed.reason || null };
  }

  // ---------------------------------------------------------------------------------- exports + boot

  var api = {
    APPLE_ID: APPLE_ID,
    ANDROID_PACKAGE: ANDROID_PACKAGE,
    PLAY_URL: PLAY_URL,
    JOIN_URL: JOIN_URL,
    IMPORT_URL: IMPORT_URL,
    LANGS: LANGS.slice(),
    pickLang: pickLang,
    decodeBase64Url: decodeBase64Url,
    utf8Decode: utf8Decode,
    utf8DecodeManual: utf8DecodeManual,
    cleanName: cleanName,
    parseInvite: parseInvite,
    parseBundle: parseBundle,
    detectPlatform: detectPlatform,
    appStoreUrl: appStoreUrl,
    schemeUrl: schemeUrl,
    intentUrl: intentUrl,
    openUrls: openUrls,
    canonicalUrl: canonicalUrl,
    strings: strings,
    legalLinks: legalLinks,
    smartBannerContent: smartBannerContent,
    setTitleWithName: setTitleWithName,
    copyText: copyText,
    armFallbackHint: armFallbackHint,
    insertSmartBanner: insertSmartBanner,
    init: init
  };
  root.SplitFinitoLanding = api;

  var doc = root.document;
  if (doc && root.location && doc.documentElement) {
    try {
      insertSmartBanner(doc, root);
    } catch (e) {
      /* the banner is optional */
    }
    var run = function () {
      init(doc, root);
    };
    if (doc.readyState === 'loading') doc.addEventListener('DOMContentLoaded', run);
    else run();
  }
})(typeof globalThis !== 'undefined' ? globalThis : this);
