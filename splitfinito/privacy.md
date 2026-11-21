---
title: Privacy Policy — SplitFinito
lang: en
---

# Privacy Policy — SplitFinito

**Last updated:** 5 November 2026 · version 1.0

Other languages: [Español](privacidad) · [Français](confidentialite) · [Deutsch](datenschutz) · [Italiano](privacy-it) · [Português](privacidade)

SplitFinito is an app for iPhone and Android for sharing expenses with friends, flatmates and travel
companions, published by **Aissa Apps**. It has no accounts and no central database: your groups live
on your phone and on the phones of the people in them. This policy explains exactly what that means for
your data.

## 1. Who is responsible

- **Controller:** Aissa Bamogo Redondo (sole trader, Spain), trading as Aissa Apps (brand Chispapps)
- **Contact, also for privacy matters:** aissa.b.code@gmail.com

## 2. The short version

- **No account.** We never ask for your email address, phone number or a password.
- **Your groups stay with your group.** Expenses, names, notes, comments and receipt photos are stored
  on your phone and on the phones of the members of each group. We have no copy and cannot read them.
- **An encrypted mailbox, not a database.** To deliver changes between phones, our relay keeps
  end-to-end encrypted copies only until every member has received them (at most 60 days; receipt photos
  at most 90 days). It cannot decrypt them.
- **No ads, no analytics, no tracking, no AI, and we never sell data.**
- **You can delete everything** with *Account → Backup and data → Delete my data* ([details](#delete)).

## 3. What stays on your phone

The app stores the following **only in its private storage on your phone**:

- your display name and avatar (an emoji and a colour), your settings, and your identity: a pair of
  cryptographic keys generated on your phone the first time you open the app. The secret keys are kept
  in the phone's secure keychain (iOS) or keystore (Android);
- for each of your groups: its name and settings, the members' display names and avatars, expenses,
  payments, comments, notes, categories, templates, recurring expenses, receipt photos, the payment
  details members choose to share with the group (for example a PayPal.me name, a phone number for
  Bizum or an IBAN) and the complete history of changes;
- drafts, cached exchange rates and your preferences.

Every member of a group keeps the same complete record of that group on their own phone: that is how
SplitFinito works without a server, and why a lost phone can be restored from a friend's phone.

**Device backups.** Depending on your phone settings, iCloud Backup (iOS) or Google's device backup
(Android) may include the app's files; those backups are handled by Apple or Google under their own
terms. Your secret keys are stored so that they are not copied to other devices. For a copy you control,
use *Account → Backup and data → Export backup*, which creates a file encrypted with a passphrase you
choose.

We, the developer, have no access to any of this information.

## 4. What our relay processes

When you share a group with other people, the phones exchange changes through a small relay that we
run on Cloudflare Workers (Cloudflare, Inc.). It works like a mailbox: it holds what one phone sends
until the others pick it up, and it is built so that it cannot read the content.

For each shared group the relay stores:

- a random group identifier and a value derived from the current invite link that lets new phones prove
  they hold the link (not the link itself);
- for each phone registered in the group: a random device identifier created by the app (unrelated to
  your phone's hardware identifiers or advertising ID), the platform (iOS or Android), the app language,
  your push notification token if you allowed notifications, your *Show details* notification choice, a
  hash of the access token given to that phone, how far it has read, and when it last connected;
- **encrypted envelopes**: each change (an expense, a payment, a comment…) is signed and encrypted on
  the sender's phone with the group key before it is sent, together with its size, sequence number and
  arrival time;
- **encrypted files**: receipt photos and history snapshots, encrypted in the same way;
- daily counters per group, used to protect the free service against abuse.

The group key travels only inside invite links and stays on the members' phones; it is never sent to the
relay. Neither we, nor Cloudflare, nor anyone outside the group can read the envelopes or the files.

**How long the relay keeps things**

- An envelope is deleted as soon as every registered phone of the group has received it, and in any
  case **60 days** after it arrived.
- Encrypted files are deleted at the latest **90 days** after upload.
- A phone's record (device identifier, push token, language and notification choice) is deleted when
  that phone leaves the group, when a member removes it, or when it uses *Delete my data*. A phone that
  has not connected for 90 days no longer holds back the deletion of envelopes. If the push service
  reports that a token is no longer valid (for example after you uninstall the app), the relay discards
  the token.

**Connection data.** Like any web service, Cloudflare processes your IP address and technical request
data to deliver each request and to protect its network. Our relay code does not store IP addresses.

## 5. Notifications

Notifications are optional. If you allow them, the app obtains a push token from your phone and
registers it with the relay for each group. Notifications are delivered through the Expo push service
(650 Industries, Inc.), which passes them to the Apple Push Notification service or to Firebase Cloud
Messaging (Google).

When a member saves a change, their phone prepares a short notification text for each recipient in the
recipient's language, for example *"Marta added 'Dinner' €40.00 · you owe €13.33"*, and sends it to the
relay together with the encrypted change. The relay uses that text **only if the recipient has turned on
*Show details*** (the default); otherwise it discards it and sends a generic line such as *"There is new
activity in one of your groups"*. While a detailed notification is being delivered, its text (group name,
member names, description and amounts) can be read by the relay, Expo, and Apple or Google. The relay does
not store notification texts.

If you prefer that no details about your groups appear in notifications sent to you, turn off *Account →
Notifications → Show details*, or turn notifications off. The app works fully without notifications and
updates when you open it.

## 6. Exchange rates

When you enter an expense in a different currency, the app downloads public exchange-rate tables from
these services: cdn.jsdelivr.net (jsDelivr) and currency-api.pages.dev (the free *currency-api* dataset),
api.frankfurter.dev (Frankfurter) and, if those fail, open.er-api.com (ExchangeRate-API). The request
contains only the base currency (euro) and, for a past expense, a date: never amounts, names or anything
about your groups. These services receive your IP address as part of the connection, under their own
privacy policies. The rate used is saved inside the expense, so the other members' phones never fetch it
again.

## 7. Invite links, shared links and our web pages

An invite link (`https://chispapps.com/splitfinito/join/#…`) carries the group key in the part after
the `#`. Browsers never send that part to a server, so our web host (GitHub Pages, GitHub, Inc.) only
receives the page address, your IP address and ordinary browser data, as with any website. The join page
reads the group name inside your browser to show it to you and never sends the code anywhere.

**Anyone who has an invite link can join the group and read its whole history**, so share it only with
the people you mean to invite. Any member can reset the link in *Group settings → Reset invite link*;
old links then stop working for new phones.

Links to shared costs (`https://chispapps.com/splitfinito/i/#…`) only contain encrypted data that
members of the group can read.

When you share a link, a balance or a summary through WhatsApp or another app, that app handles the
message under its own terms.

## 8. What we do not do

- We do not create accounts or ask for your email address, phone number or password.
- We do not read your contacts: invitations are links and QR codes.
- We do not use your location or your microphone.
- We do not show ads, use an advertising identifier, or include analytics, crash-reporting or tracking
  tools. We do not build profiles.
- We do not sell or share data with advertisers or data brokers.
- We do not use artificial intelligence in any form.
- The app has no in-app purchases and does not process payments. The payment buttons only open other
  apps (such as your bank or payment app) or copy details; what happens there is governed by those apps.

## 9. Permissions

- **Camera** (optional): to scan an invite QR code and to photograph a receipt.
- **Photos**: the system photo picker gives the app only the photo you choose; the app has no access to
  the rest of your library.
- **Face ID / fingerprint** (optional): to lock the app. Biometric data never leaves your phone's secure
  hardware and the app never sees it.
- **Notifications** (optional): see section 5.

## 10. Service providers and international transfers

We use Cloudflare (relay hosting), Expo (push delivery), Apple and Google (push delivery and app
distribution) and GitHub (web pages). They only process the limited data described above: random
identifiers, push tokens, encrypted content, connection data and, when details are on, notification
texts. We choose providers that commit to protecting data at a level at least equivalent to this policy.
Some of them are based in the United States; transfers rely on the safeguards those providers offer,
such as the EU–US Data Privacy Framework or the European Commission's standard contractual clauses.

## 11. Legal basis

- Relaying encrypted changes, files and notifications, and keeping device identifiers and push tokens for
  that purpose: necessary to provide the service you ask for (Article 6(1)(b) GDPR).
- Daily limits, abuse protection and connection data: our legitimate interest in keeping a free service
  secure and available (Article 6(1)(f) GDPR).
- Notifications are only sent if you allow them in your phone's settings; you can withdraw that
  permission at any time.

## 12. Your rights

You have the right to access, rectify and erase your data, to restrict or object to its processing and
to data portability. Most of these rights can be exercised directly in the app, because your information
is on your phone: export it with *Export backup* or the CSV export, correct your name in your profile,
and erase it with *Delete my data*.

The relay only holds random identifiers that we cannot link to a person. If you write to us, we may ask
for details shown in the app so that we can find the right records. Write to aissa.b.code@gmail.com; we
answer within one month. You can also complain to a data protection authority; in Spain, the Agencia
Española de Protección de Datos ([aepd.es](https://www.aepd.es)).

## 13. How to delete your data {#delete}

In the app, go to **Account → Backup and data → Delete my data** and confirm. This:

1. deletes from this phone all your groups, expenses, receipt photos, drafts, settings, your identity
   and your keys; and
2. asks the relay to delete this phone's records (device identifier, push token, language and
   notification choice) from every group.

Encrypted envelopes you have already sent are deleted on the normal schedule (once delivered, at most
60 days; files at most 90 days). Uninstalling the app also erases everything on the phone, but cannot
inform the relay; use *Delete my data* first if you can.

What we cannot delete: the copies of your groups that the other members keep on their own phones, since
keeping them is the purpose of the app. You can leave a group, other members can remove you from it, and
each member can delete a group from their own phone. If you can no longer use the app, write to us and we
will delete the relay records we can identify.

## 14. Children

SplitFinito is not directed at children. You must be at least 16 years old to use it (see the
[Terms of Use](terms)). We do not knowingly process data of anyone under 16; if you believe a child is
using the app, contact us.

## 15. Security

- **End-to-end encryption:** every change is signed with Ed25519 and encrypted with XChaCha20-Poly1305
  under a random 256-bit key that only the group's members have; receipt photos are encrypted the same
  way before upload.
- **In transit:** every connection to the relay and to the other services uses HTTPS (TLS).
- **At rest:** secret keys live in the phone's keychain or keystore; you can add a Face ID or fingerprint
  lock in the app. Backup files are encrypted with a key derived from your passphrase (PBKDF2-SHA256).

No system is perfectly secure: protect your phone with a screen lock and share invite links carefully.

## 16. Changes

If this policy changes, the new version will be published here with a new date, and the app will tell
you about significant changes. See also the [Terms of Use](terms) and the [help page](support).
