---
title: Privacy Policy — MinuteFlow
lang: en
---

# Privacy Policy — MinuteFlow

**Last updated:** 20 November 2026

MinuteFlow is an iPhone app that records meetings and turns them into a transcript, notes and
action items with artificial intelligence. It is published by **Aissa Apps**. This policy explains
what happens to your information, and to the information of the people you record.

We comply with the EU General Data Protection Regulation (**GDPR**) and Spanish data protection law.

---

## 1. Who is responsible

- **Controller:** Aissa Bamogo Redondo (sole trader, Spain), trading as Aissa Apps
- **Contact:** aissa.b.code@gmail.com

---

## 2. The short version

- Your recordings, transcripts and notes are stored **on your iPhone**. There is no MinuteFlow
  account and no cloud copy of your library.
- **No meeting content leaves your iPhone until you process a meeting, ask a question or
  share.** Automatic processing is off unless you switch it on, and recording never shares
  anything by itself.
- When a meeting is processed, the recording goes to our processing server in the EU and to
  **Google's Gemini AI**. Our server deletes it as soon as your iPhone has the result.
- **Google Drive is optional.** If you connect it, MinuteFlow can only see the files it creates,
  and files go straight from your iPhone to Google, never through our server.
- No ads, no analytics, no tracking, and we never sell data.

---

## 3. Recording other people

Meetings contain other people's voices and words. Before each recording MinuteFlow reminds you to
tell everyone that you are recording (you can hide the reminder). **You decide what to record and
why, and it is up to you to have the participants' consent or another lawful basis** — in many
countries recording a conversation without telling the others is not allowed, and many employers
have rules about recording meetings and about AI tools.

We process the content of your recordings only to give you the transcript, notes and answers you
ask for, as described below. We do not listen to recordings, read transcripts or use them for
anything else.

---

## 4. What stays on your iPhone

The following is stored only in MinuteFlow's private storage on your iPhone:

- the **audio recordings** and any audio files you import;
- **transcripts, notes, decisions and action items**, including your edits;
- meeting titles, participants, speaker names, bookmarks and the notes you type;
- your questions to **Ask** and the answers;
- your **share history** (what you shared, when, to which app or Drive folder, and the email
  addresses you shared with);
- your settings, your monthly AI budget and the cost of each processed meeting;
- **reminders** for action items, which your iPhone shows as local notifications.

iOS stores this data encrypted on your iPhone. If you back up your iPhone (to iCloud or a
computer), the backup includes it, under Apple's terms for backups.

Two secrets are kept in the **iOS Keychain** on this iPhone only: the access token for the
processing server, and — if you connect Google Drive — your Google sign-in tokens and the
account's email address.

---

## 5. Connecting to the processing server

To use the AI features, MinuteFlow connects once to the MinuteFlow processing server with an
**invite code**. The server then stores, for your installation:

- a random device ID;
- the device name your iPhone reports to apps (on current iOS versions this is usually just
  "iPhone");
- a one-way hash of the access token (never the token itself) and the date of connection;
- your **AI usage**: the date, time and cost of each processing run and question, so that the
  monthly spending limit can be enforced.

These records contain no meeting content. Our server also uses your IP address, in memory only,
to limit how many requests can be made; it does not store it. We keep them while the service runs, so the spending
limit keeps working; write to us and we delete them.

If you connect the app to a server run by somebody else — for example your employer — that
operator, not us, is responsible for what happens on that server.

---

## 6. When a meeting is processed

A meeting is processed when you start it with **Transcribe & summarise** (or **Create notes**),
after MinuteFlow has shown you the estimated cost. Meetings you marked as **confidential** need a
second confirmation. If you switch on **Process new recordings automatically** (Settings → AI &
languages, off by default), new recordings and imported audio files are processed as soon as they
are saved — except confidential ones, which always wait for you.

**What is sent:** the audio of that meeting, and the details that help produce good notes: the
title, participant names, languages, the language and level of detail you want for the notes, the
meeting's start time and time zone, your bookmarks and their labels, the notes you typed, and the
name you go by (if you set one, so that "my actions" can be found). When notes are made from a
transcript that is already on your iPhone (for example after you edit it), that transcript, with
the speaker names you confirmed, is sent instead of the audio, together with the same details.

**Where it goes:** to our processing server on **Google Cloud in Belgium (EU)**, which splits long
recordings into parts and sends them to Google's Gemini AI (see section 8).

**How long it stays:** the audio, the parts, the results and the meeting details sent with them
are deleted from our server **as soon as your iPhone confirms it has saved the result**. Anything
left behind — for example if you never open the app again — is deleted automatically after
**48 hours** (in rare cases up to 3 days).

**Server logs:** our server logs only technical information, such as the type of event, internal
IDs, file sizes, durations, counts, costs and error codes. It never logs audio, transcripts, notes,
questions, names or tokens. Our hosting provider, Google Cloud, also keeps standard request logs
(time, IP address, the address requested and the user agent your iPhone sends). Both are kept for
up to 30 days, for security and troubleshooting.

---

## 7. When you use Ask

When you ask a question about one meeting or your whole library, MinuteFlow picks the relevant
parts of your meetings on your iPhone and sends them with your question: meeting titles and dates,
speaker names, transcript excerpts, notes (including the notes you typed and action items with
their owners and due dates) and the name you go by, if you set one. Our server sends this to Gemini and returns the
answer with citations. **Neither the question nor the answer is stored on our server**; only its
cost is added to your monthly total.

---

## 8. Artificial intelligence (Google Gemini)

MinuteFlow uses **Google's Gemini models** to transcribe recordings, tell speakers apart, write
notes and answer questions.

- **Google acts as our processor.** We use Gemini's paid service. Google processes the requests
  under its
  [Data Processing Addendum for Products Where Google is a Data Processor](https://business.safety.google/processorterms/)
  and **does not use them to improve its products**. Google keeps prompts and responses for a
  limited time only to detect abuse and for legally required disclosures
  ([Gemini API terms](https://ai.google.dev/gemini-api/terms)).
- We send requests with storage turned off, delete uploaded audio from Google straight after use,
  and keep request logging in our Google project switched off.
- Google may process data in any country where it has facilities, with the transfer safeguards in
  that addendum.
- **AI can make mistakes.** Transcripts, notes, owners and deadlines are generated by AI, not by a
  person. MinuteFlow checks quotes, owners and deadlines against the transcript and marks anything
  it could not verify, and keeps AI suggestions apart from what was actually agreed. Check
  anything important against the recording.
- Speaker names suggested by the AI become names only when you confirm them. MinuteFlow does
  **not** create voiceprints or identify people by their voice.
- MinuteFlow makes no decisions about you with legal or similarly significant effects (GDPR
  Art. 22), and we do not use your recordings, transcripts or questions to train AI models.

---

## 9. Google Drive (optional)

You can use MinuteFlow without Google Drive. If you connect it, you sign in with Google in Apple's
secure sign-in sheet, and MinuteFlow asks for:

| Permission | Why |
| --- | --- |
| **See, edit, create and delete only the specific Google Drive files you use with this app** (`drive.file`) | To save the transcripts, notes and recordings you choose to upload, in a MinuteFlow folder. MinuteFlow cannot see any other file in your Drive. |
| **Your email address** | To show which Google account is connected. |
| **Basic sign-in** (`openid`) | To sign you in. |

How MinuteFlow handles your Google data:

- Your Google tokens stay in the **iOS Keychain** on your iPhone. Uploads go **directly from
  your iPhone to Google**. Our processing server never receives your Google tokens, your email
  address or your Drive files.
- MinuteFlow uploads **only after you review and confirm** a share. Nothing is uploaded
  automatically.
- New files are **private to you**. Other people get access only if you type their email address
  and confirm it, and Google's notification email to them is off unless you turn it on.
- **Disconnect** (Settings → Google Drive) revokes MinuteFlow's access at Google and deletes the
  tokens from your iPhone. You can also remove access at
  [myaccount.google.com/permissions](https://myaccount.google.com/permissions). Files already
  uploaded stay in your Drive until you delete them.
- We do not use Google user data for advertising, do not sell it, do not let people read it, and do
  not use it to train AI models.

MinuteFlow's use and transfer of information received from Google APIs adheres to the
[Google API Services User Data Policy](https://developers.google.com/terms/api-services-user-data-policy),
including the Limited Use requirements.

**Advanced:** if you set up your own Google Cloud sign-in client in Settings → Google Drive →
Advanced, sign-in goes through your Google Cloud project instead. Everything else in this section
stays the same.

---

## 10. Sharing with other apps

When you share with the iOS Share Sheet (for example Mail, WhatsApp, Messages, AirDrop or Files),
MinuteFlow creates the files on your iPhone and hands them to the app you choose. From then on that
app's privacy policy applies. MinuteFlow only notes in your share history that you handed the files
to that app.

---

## 11. What we do not do

- No MinuteFlow account: we never ask for your name, email address or phone number.
- No advertising, no analytics, no crash-reporting or tracking services, no advertising identifier.
- No access to your contacts, photos, location or calendar.
- No automatic sharing and no automatic uploads. Nobody gets an email about a meeting unless you
  share it with them and choose to notify them.
- We never sell data.

---

## 12. Permissions

| Permission | Used for |
| --- | --- |
| Microphone | Recording meetings. Only while you record. |
| Background audio | Keeping a recording going when the screen locks or you switch apps. |
| Notifications (optional) | Reminders for action items, created on your iPhone. |
| Local network | Only if you connect to a processing server on your own network. |
| Files (when you choose Import audio) | Reading the one audio file you pick. |

---

## 13. Legal bases

| Purpose | Legal basis (GDPR) |
| --- | --- |
| Transcribing, writing notes and answering the questions you ask; uploading to Drive when you confirm | Performance of a contract with you, Art. 6(1)(b) |
| Device records, spending limits, security and technical logs | Legitimate interest in running a secure, affordable service and preventing abuse, Art. 6(1)(f) |

For other people's voices and words in your recordings, you choose what to record and what to
process; we process that content only on your instruction, for the purposes above.

---

## 14. How long data is kept

| Data | Kept |
| --- | --- |
| Everything on your iPhone | Until you delete it, delete all MinuteFlow data, or delete the app |
| Audio, results and meeting details on our server | Until your iPhone confirms receipt; otherwise 48 hours (rarely up to 3 days) |
| Ask questions and answers on our server | Not stored |
| Device record and AI usage (date, time and cost) | While the service runs, or until you ask us to delete them |
| Server and hosting logs (Google Cloud) | Up to 30 days |
| Prompts and responses kept by Google for abuse detection | A limited period set by Google |
| Files you uploaded to Google Drive | In your Drive until you delete them |

---

## 15. Who else receives data

- **Google**: Gemini AI, and hosting of our processing server in Belgium. <https://policies.google.com/privacy>
- **Google Drive**, only if you connect it, under your own Google account.
- **Apple**, which distributes the app and, if you use iCloud Backup, stores your iPhone backups.
- The apps you choose in the Share Sheet.

Nobody else.

---

## 16. Deleting your data

- **One meeting:** delete it in the app.
- **Everything on this iPhone:** Settings → Privacy & data → **Delete all MinuteFlow data** (asks
  twice), or delete the app.
- **Our server:** meeting content is deleted on delivery (see section 6). To delete your device
  record and usage history, write to aissa.b.code@gmail.com.
- **Google Drive:** delete the files in your Drive; disconnect in the app or at
  myaccount.google.com/permissions.

---

## 17. Security

Connections to our server use HTTPS (plain HTTP is only allowed to a server on your own local
network). Access tokens are stored only as one-way hashes on the server and in the
Keychain on your iPhone. Each installation can only reach its own recordings and jobs. The Gemini
API key lives only on the server, never in the app.

---

## 18. Children

MinuteFlow is meant for adults and work use. It is not directed at children, and we do not
knowingly process children's data except as it may appear in a recording you make.

---

## 19. Your rights

You can ask us for access to, correction, deletion, restriction or a copy of your personal data,
and object to processing based on legitimate interest, by writing to aissa.b.code@gmail.com. Most
of your data is only on your iPhone, where you can see, export and delete it yourself. You can also
complain to your data protection authority (in Spain, the Agencia Española de Protección de Datos,
[aepd.es](https://www.aepd.es)).

---

## 20. Changes

If this policy changes, the new version will be published at this address with a new date.
