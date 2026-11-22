---
title: Informativa sulla privacy — SplitFinito
lang: it
---

# Informativa sulla privacy — SplitFinito

**Ultimo aggiornamento:** 5 novembre 2026 · versione 1.0

Altre lingue: [English](privacy) · [Español](privacidad) · [Français](confidentialite) · [Deutsch](datenschutz) · [Português](privacidade)

SplitFinito è un'app per iPhone e Android per dividere le spese con amici, coinquilini e compagni di
viaggio, pubblicata da **Aissa Apps**. Non ha account né un database centrale: i tuoi gruppi vivono sul
tuo telefono e sui telefoni delle persone che ne fanno parte. Questa informativa spiega con precisione
che cosa significa per i tuoi dati.

## 1. Titolare del trattamento

- **Titolare:** Aissa Bamogo Redondo (lavoratrice autonoma, Spagna), che opera come Aissa Apps (marchio
  Chispapps)
- **Contatto, anche per la privacy:** aissa.b.code@gmail.com

## 2. In breve

- **Nessun account.** Non ti chiediamo mai email, numero di telefono o password.
- **I tuoi gruppi restano nel tuo gruppo.** Spese, nomi, note, commenti e foto degli scontrini sono
  salvati sul tuo telefono e sui telefoni dei membri di ciascun gruppo. Non ne abbiamo copia e non
  possiamo leggerli.
- **Una cassetta postale cifrata, non un database.** Per portare le modifiche da un telefono all'altro,
  il nostro relay conserva copie cifrate end-to-end solo finché tutti i membri non le hanno ricevute (al
  massimo 60 giorni; le foto degli scontrini al massimo 90 giorni). Non può decifrarle.
- **Niente pubblicità, statistiche, tracciamento o IA, e non vendiamo mai i dati.**
- **Puoi cancellare tutto** da *Account → Backup e dati → Elimina i miei dati* ([dettagli](#delete)).

## 3. Cosa resta sul tuo telefono

L'app salva quanto segue **solo nella sua memoria privata sul tuo telefono**:

- il tuo nome visualizzato e il tuo avatar (un'emoji e un colore), le tue impostazioni e la tua
  identità: una coppia di chiavi crittografiche generata sul telefono la prima volta che apri l'app. Le
  chiavi segrete sono custodite nel portachiavi sicuro del telefono (Keychain su iOS, Keystore su
  Android);
- per ciascun gruppo: nome e impostazioni, nomi visualizzati e avatar dei membri, spese, pagamenti,
  commenti, note, categorie, modelli, spese ricorrenti, foto degli scontrini, i dati di pagamento che
  ciascun membro sceglie di condividere con il gruppo (per esempio un nome PayPal.me, un numero di
  telefono o un IBAN) e la cronologia completa delle modifiche;
- bozze, tassi di cambio in cache e le tue preferenze.

Ogni membro di un gruppo conserva sul proprio telefono la stessa cronologia completa del gruppo: è così
che SplitFinito funziona senza server, ed è per questo che un telefono perso si può ripristinare da
quello di un amico.

**Backup del dispositivo.** A seconda delle impostazioni del telefono, il backup di iCloud (iOS) o il
backup di Google (Android) possono includere i file dell'app; questi backup sono gestiti da Apple o da
Google secondo le loro condizioni. Le tue chiavi segrete sono salvate in modo da non essere copiate su
altri dispositivi. Per una copia che controlli tu, usa *Account → Backup e dati → Esporta backup*, che
crea un file cifrato con una passphrase scelta da te.

Noi, come sviluppatori, non abbiamo accesso a nessuna di queste informazioni.

## 4. Cosa tratta il nostro relay

Quando condividi un gruppo con altre persone, i telefoni si scambiano le modifiche attraverso un piccolo
relay che gestiamo su Cloudflare Workers (Cloudflare, Inc.). Funziona come una cassetta postale: tiene
ciò che invia un telefono finché gli altri non lo ritirano, ed è progettato per non poterne leggere il
contenuto.

Per ogni gruppo condiviso il relay conserva:

- un identificativo casuale del gruppo e un valore derivato dal link d'invito attuale, con cui i nuovi
  telefoni dimostrano di avere il link (non il link stesso);
- per ogni telefono registrato nel gruppo: un identificativo di dispositivo casuale creato dall'app
  (senza relazione con gli identificativi hardware o con l'ID pubblicitario del telefono), la piattaforma
  (iOS o Android), la lingua dell'app, il tuo token per le notifiche se le hai consentite, la tua scelta
  *Mostra dettagli* per le notifiche, un hash del token di accesso assegnato a quel telefono, fin dove ha
  letto e quando si è collegato l'ultima volta;
- **buste cifrate**: ogni modifica (una spesa, un pagamento, un commento…) viene firmata e cifrata sul
  telefono di chi la invia con la chiave del gruppo prima di partire, insieme a dimensione, numero
  progressivo e ora di arrivo;
- **file cifrati**: foto degli scontrini e istantanee della cronologia, cifrate allo stesso modo;
- contatori giornalieri per gruppo, che proteggono il servizio gratuito dagli abusi.

La chiave del gruppo viaggia solo dentro i link d'invito e resta sui telefoni dei membri; non viene mai
inviata al relay. Né noi, né Cloudflare, né chiunque sia esterno al gruppo può leggere le buste o i file.

**Per quanto tempo il relay conserva i dati**

- Una busta viene eliminata appena tutti i telefoni registrati del gruppo l'hanno ricevuta e, in ogni
  caso, **60 giorni** dopo il suo arrivo.
- I file cifrati vengono eliminati al più tardi **90 giorni** dopo il caricamento.
- La scheda di un telefono (identificativo di dispositivo, token per le notifiche, lingua e scelta sulle
  notifiche) viene eliminata quando quel telefono esce dal gruppo, quando un membro lo rimuove o quando
  usa *Elimina i miei dati*. Un telefono che non si collega da 90 giorni non ritarda più l'eliminazione
  delle buste. Se il servizio di notifiche segnala che un token non è più valido (per esempio dopo la
  disinstallazione dell'app), il relay lo scarta.

**Dati di connessione.** Come ogni servizio web, Cloudflare tratta il tuo indirizzo IP e dati tecnici
della richiesta per consegnarla e proteggere la propria rete. Il codice del nostro relay non salva
indirizzi IP.

## 5. Notifiche

Le notifiche sono facoltative. Se le consenti, l'app ottiene dal telefono un token per le notifiche e lo
registra sul relay per ogni gruppo. Le notifiche vengono consegnate tramite il servizio di notifiche di
Expo (650 Industries, Inc.), che le passa all'Apple Push Notification service o a Firebase Cloud
Messaging (Google).

Quando un membro salva una modifica, il suo telefono prepara un breve testo per ogni destinatario, nella
sua lingua, per esempio *«Marta ha aggiunto "Cena" 40,00 € · devi 13,33 €»*, e lo invia al relay insieme
alla modifica cifrata. Il relay usa quel testo **solo se il destinatario ha attivato *Mostra
dettagli*** (impostazione predefinita); altrimenti lo scarta e invia una frase generica come *«Ci sono
novità in uno dei tuoi gruppi»*. Mentre una notifica dettagliata viene consegnata, il suo testo (nome del
gruppo, nomi dei membri, descrizione e importi) può essere letto dal relay, da Expo e da Apple o Google.
Il relay non conserva i testi delle notifiche.

Se preferisci che le notifiche che ricevi non mostrino dettagli sui tuoi gruppi, disattiva *Account →
Notifiche → Mostra dettagli*, oppure disattiva le notifiche. L'app funziona perfettamente anche senza e si
aggiorna quando la apri.

## 6. Tassi di cambio

Quando inserisci una spesa in un'altra valuta, l'app scarica tabelle pubbliche dei tassi di cambio da
questi servizi: cdn.jsdelivr.net (jsDelivr) e currency-api.pages.dev (il set di dati gratuito
*currency-api*), api.frankfurter.dev (Frankfurter) e, se non rispondono, open.er-api.com
(ExchangeRate-API). La richiesta contiene solo la valuta di base (l'euro) e, per una spesa passata, una
data: mai importi, nomi o informazioni sui tuoi gruppi. Questi servizi ricevono il tuo indirizzo IP come
parte della connessione, secondo le loro informative. Il tasso usato viene salvato nella spesa, così i
telefoni degli altri membri non lo richiedono di nuovo.

## 7. Link d'invito, link condivisi e le nostre pagine web

Un link d'invito (`https://chispapps.com/splitfinito/join/#…`) contiene la chiave del gruppo nella parte
dopo il `#`. I browser non inviano mai quella parte a un server, quindi il nostro hosting web (GitHub
Pages, di GitHub, Inc.) riceve solo l'indirizzo della pagina, il tuo indirizzo IP e i normali dati del
browser, come per qualsiasi sito. La pagina d'invito legge il nome del gruppo nel tuo browser per
mostrartelo e non invia il codice da nessuna parte.

**Chiunque abbia un link d'invito può entrare nel gruppo e leggerne tutta la cronologia**, quindi
condividilo solo con le persone che vuoi invitare. Qualsiasi membro può rinnovare il link da
*Impostazioni del gruppo → Reimposta link*; da quel momento i vecchi link non funzionano più per i nuovi
telefoni.

I link alle spese condivise (`https://chispapps.com/splitfinito/i/#…`) contengono solo dati cifrati che
possono leggere i membri del gruppo.

Quando condividi un link, un saldo o un riepilogo su WhatsApp o in un'altra app, quell'app tratta il
messaggio secondo le proprie condizioni.

## 8. Cosa non facciamo

- Non creiamo account e non ti chiediamo email, numero di telefono o password.
- Se ci scrivi (Contatti o Segnala nell'app aprono la tua app di posta), riceviamo il tuo indirizzo email e il tuo messaggio e li usiamo solo per risponderti. Non ti aggiungiamo a nessuna lista.
- Non leggiamo i tuoi contatti: gli inviti sono link e codici QR.
- Non usiamo la tua posizione né il microfono.
- Non mostriamo pubblicità, non usiamo l'ID pubblicitario e non includiamo strumenti di statistica,
  segnalazione dei crash o tracciamento. Non facciamo profilazione.
- Non vendiamo né cediamo dati a inserzionisti o intermediari di dati.
- Non usiamo alcuna forma di intelligenza artificiale.
- L'app non ha acquisti in-app e non gestisce pagamenti. I pulsanti di pagamento aprono solo altre app
  (per esempio quella della tua banca o di pagamento) o copiano dei dati; ciò che succede lì è regolato da
  quelle app.

## 9. Autorizzazioni

- **Fotocamera** (facoltativa): per inquadrare il codice QR di un invito e fotografare uno scontrino.
- **Foto**: il selettore di foto del sistema consegna all'app solo la foto che scegli; l'app non accede
  al resto della tua libreria.
- **Face ID / impronta** (facoltativa): per bloccare l'app. I dati biometrici non escono mai
  dall'hardware sicuro del telefono e l'app non li vede mai.
- **Notifiche** (facoltative): vedi la sezione 5.

## 10. Fornitori e trasferimenti internazionali

Ci avvaliamo di Cloudflare (hosting del relay), Expo (consegna delle notifiche), Apple e Google
(consegna delle notifiche e distribuzione dell'app) e GitHub (pagine web). Trattano solo i dati limitati
descritti sopra: identificativi casuali, token per le notifiche, contenuti cifrati, dati di connessione
e, se i dettagli sono attivi, testi delle notifiche. Scegliamo fornitori che si impegnano a proteggere i
dati con un livello almeno equivalente a quello di questa informativa. Alcuni hanno sede negli Stati
Uniti; i trasferimenti si basano sulle garanzie offerte da tali fornitori, come il quadro UE-USA per la
protezione dei dati o le clausole contrattuali tipo della Commissione europea.

## 11. Basi giuridiche

- Inoltrare modifiche cifrate, file e notifiche e conservare a tale scopo identificativi di dispositivo
  e token per le notifiche: necessario per fornirti il servizio che richiedi (art. 6, par. 1, lett. b,
  GDPR).
- Limiti giornalieri, protezione dagli abusi e dati di connessione: il nostro legittimo interesse a
  mantenere un servizio gratuito sicuro e disponibile (art. 6, par. 1, lett. f, GDPR).
- Le notifiche vengono inviate solo se le consenti nelle impostazioni del telefono; puoi revocare il
  permesso in qualsiasi momento.

## 12. I tuoi diritti

Hai diritto di accesso, rettifica e cancellazione, di limitazione e di opposizione al trattamento e alla
portabilità dei dati. Puoi esercitarne la maggior parte direttamente nell'app, perché le tue informazioni
sono sul tuo telefono: esportale con *Esporta backup* o con l'esportazione CSV, correggi il tuo nome nel
profilo e cancellale con *Elimina i miei dati*.

Il relay conserva solo identificativi casuali che non possiamo associare a una persona. Se ci scrivi,
potremmo chiederti alcuni dati mostrati nell'app per trovare le schede giuste. Scrivi a
aissa.b.code@gmail.com; rispondiamo entro un mese. Puoi anche presentare reclamo a un'autorità di
controllo, per esempio il Garante per la protezione dei dati personali
([garanteprivacy.it](https://www.garanteprivacy.it)) o, in Spagna, l'Agencia Española de Protección de
Datos ([aepd.es](https://www.aepd.es)).

## 13. Come cancellare i tuoi dati {#delete}

Nell'app vai su **Account → Backup e dati → Elimina i miei dati** e conferma. In questo modo:

1. vengono cancellati da questo telefono tutti i tuoi gruppi, le spese, le foto degli scontrini, le
   bozze, le impostazioni, la tua identità e le tue chiavi;
2. si chiede al relay di eliminare le schede di questo telefono (identificativo di dispositivo, token per
   le notifiche, lingua e scelta sulle notifiche) in tutti i gruppi.

Le buste cifrate già inviate vengono eliminate secondo il calendario normale (dopo la consegna, al
massimo dopo 60 giorni; i file al massimo dopo 90 giorni). Anche disinstallare l'app cancella tutto ciò
che c'è sul telefono, ma non può avvisare il relay: se puoi, usa prima *Elimina i miei dati*.

Cosa non possiamo cancellare: le copie dei tuoi gruppi che gli altri membri conservano sui propri
telefoni, perché conservarle è proprio lo scopo dell'app. Puoi uscire da un gruppo, gli altri membri
possono rimuoverti e ogni membro può eliminare un gruppo dal proprio telefono. Se non puoi più usare
l'app, scrivici e cancelleremo le schede del relay che riusciamo a identificare.

## 14. Minori

SplitFinito non è rivolta ai bambini. Per usarla devi avere almeno 16 anni (vedi i [Termini di
utilizzo](termini)). Non trattiamo consapevolmente dati di persone con meno di 16 anni; se pensi che un
minore stia usando l'app, contattaci.

## 15. Sicurezza

- **Cifratura end-to-end:** ogni modifica viene firmata con Ed25519 e cifrata con XChaCha20-Poly1305 con
  una chiave casuale a 256 bit che hanno solo i membri del gruppo; le foto degli scontrini vengono cifrate
  allo stesso modo prima del caricamento.
- **In transito:** tutte le connessioni con il relay e con gli altri servizi usano HTTPS (TLS).
- **Sul dispositivo:** le chiavi segrete sono nel portachiavi sicuro del telefono; nell'app puoi
  aggiungere un blocco con Face ID o impronta. I file di backup sono cifrati con una chiave derivata dalla
  tua passphrase (PBKDF2-SHA256).

Nessun sistema è perfettamente sicuro: proteggi il telefono con un blocco schermo e condividi i link
d'invito con attenzione.

## 16. Modifiche

Se questa informativa cambia, pubblicheremo qui la nuova versione con una nuova data e l'app ti avviserà
delle modifiche importanti. Vedi anche i [Termini di utilizzo](termini) e la [pagina di
assistenza](assistenza).
