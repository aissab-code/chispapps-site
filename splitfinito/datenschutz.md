---
title: Datenschutzerklärung — SplitFinito
lang: de
---

# Datenschutzerklärung — SplitFinito

**Stand:** 5. November 2026 · Version 1.0

Andere Sprachen: [English](privacy) · [Español](privacidad) · [Français](confidentialite) · [Italiano](privacy-it) · [Português](privacidade)

SplitFinito ist eine App für iPhone und Android, mit der du Ausgaben mit Freunden, Mitbewohnern und
Reisebegleitungen teilst. Herausgeberin ist **Aissa Apps**. Die App hat keine Konten und keine zentrale
Datenbank: Deine Gruppen liegen auf deinem Handy und auf den Handys der Menschen, die zu ihnen gehören.
Diese Erklärung beschreibt genau, was das für deine Daten bedeutet.

## 1. Verantwortliche Stelle

- **Verantwortliche:** Aissa Bamogo Redondo (Einzelunternehmerin, Spanien), handelnd als Aissa Apps
  (Marke Chispapps)
- **Kontakt, auch in Datenschutzfragen:** aissa.b.code@gmail.com

## 2. Das Wichtigste in Kürze

- **Kein Konto.** Wir fragen nie nach E-Mail-Adresse, Telefonnummer oder Passwort.
- **Deine Gruppen bleiben in deiner Gruppe.** Ausgaben, Namen, Notizen, Kommentare und Belegfotos werden
  auf deinem Handy und auf den Handys der Mitglieder der jeweiligen Gruppe gespeichert. Wir haben keine
  Kopie und können sie nicht lesen.
- **Ein verschlüsselter Briefkasten, keine Datenbank.** Damit Änderungen von einem Handy zum anderen
  kommen, bewahrt unser Relay Ende-zu-Ende-verschlüsselte Kopien nur so lange auf, bis alle Mitglieder
  sie erhalten haben (höchstens 60 Tage; Belegfotos höchstens 90 Tage). Es kann sie nicht entschlüsseln.
- **Keine Werbung, keine Analyse, kein Tracking, keine KI, und wir verkaufen niemals Daten.**
- **Du kannst alles löschen** unter *Konto → Backup und Daten → Meine Daten löschen* ([Details](#delete)).

## 3. Was auf deinem Handy bleibt

Die App speichert Folgendes **ausschließlich in ihrem privaten Speicher auf deinem Handy**:

- deinen Anzeigenamen und dein Avatar (ein Emoji und eine Farbe), deine Einstellungen und deine
  Identität: ein Paar kryptografischer Schlüssel, das beim ersten Öffnen der App auf deinem Handy erzeugt
  wird. Die geheimen Schlüssel liegen im sicheren Schlüsselspeicher des Telefons (Keychain unter iOS,
  Keystore unter Android);
- für jede deiner Gruppen: Name und Einstellungen, Anzeigenamen und Avatare der Mitglieder, Ausgaben,
  Zahlungen, Kommentare, Notizen, Kategorien, Vorlagen, wiederkehrende Ausgaben, Belegfotos, die
  Zahlungsangaben, die Mitglieder mit der Gruppe teilen möchten (zum Beispiel einen PayPal.me-Namen,
  eine Telefonnummer oder eine IBAN), und den vollständigen Änderungsverlauf;
- Entwürfe, zwischengespeicherte Wechselkurse und deine Einstellungen.

Jedes Mitglied einer Gruppe hat auf dem eigenen Handy denselben vollständigen Verlauf dieser Gruppe. So
funktioniert SplitFinito ohne Server, und deshalb lässt sich ein verlorenes Handy über das Handy eines
Freundes wiederherstellen.

**Geräte-Backups.** Je nach deinen Einstellungen können iCloud-Backup (iOS) oder das Google-Backup
(Android) die Dateien der App enthalten; diese Backups verwalten Apple bzw. Google nach ihren eigenen
Bedingungen. Deine geheimen Schlüssel werden so gespeichert, dass sie nicht auf andere Geräte kopiert
werden. Für eine Kopie, die du selbst in der Hand hast, nutze *Konto → Backup und Daten → Backup
exportieren*: Dabei entsteht eine Datei, die mit einer Passphrase deiner Wahl verschlüsselt ist.

Wir als Entwicklerin haben auf keine dieser Informationen Zugriff.

## 4. Was unser Relay verarbeitet

Wenn du eine Gruppe mit anderen teilst, tauschen die Handys Änderungen über ein kleines Relay aus, das
wir auf Cloudflare Workers (Cloudflare, Inc.) betreiben. Es funktioniert wie ein Briefkasten: Es bewahrt
auf, was ein Handy schickt, bis die anderen es abholen, und ist so gebaut, dass es den Inhalt nicht
lesen kann.

Für jede geteilte Gruppe speichert das Relay:

- eine zufällige Gruppenkennung und einen aus dem aktuellen Einladungslink abgeleiteten Wert, mit dem
  neue Handys nachweisen, dass sie den Link kennen (nicht den Link selbst);
- für jedes in der Gruppe registrierte Handy: eine zufällige, von der App erzeugte Gerätekennung (ohne
  Bezug zu Hardware-Kennungen oder zur Werbe-ID des Telefons), die Plattform (iOS oder Android), die
  App-Sprache, dein Push-Token, falls du Benachrichtigungen erlaubt hast, deine Einstellung *Details
  anzeigen* für Benachrichtigungen, einen Hash des Zugangstokens dieses Handys, bis wohin es gelesen hat
  und wann es sich zuletzt verbunden hat;
- **verschlüsselte Umschläge:** Jede Änderung (eine Ausgabe, eine Zahlung, ein Kommentar …) wird auf dem
  Handy des Absenders mit dem Gruppenschlüssel signiert und verschlüsselt, bevor sie verschickt wird –
  zusammen mit Größe, laufender Nummer und Ankunftszeit;
- **verschlüsselte Dateien:** Belegfotos und Verlaufsschnappschüsse, auf dieselbe Weise verschlüsselt;
- tägliche Zähler pro Gruppe, die den kostenlosen Dienst vor Missbrauch schützen.

Der Gruppenschlüssel reist nur in Einladungslinks mit und bleibt auf den Handys der Mitglieder; er wird
nie an das Relay geschickt. Weder wir noch Cloudflare noch sonst jemand außerhalb der Gruppe kann die
Umschläge oder Dateien lesen.

**Wie lange das Relay Daten aufbewahrt**

- Ein Umschlag wird gelöscht, sobald alle registrierten Handys der Gruppe ihn erhalten haben, spätestens
  aber **60 Tage** nach seinem Eingang.
- Verschlüsselte Dateien werden spätestens **90 Tage** nach dem Hochladen gelöscht.
- Der Eintrag eines Handys (Gerätekennung, Push-Token, Sprache und Benachrichtigungseinstellung) wird
  gelöscht, wenn dieses Handy die Gruppe verlässt, ein Mitglied es entfernt oder es *Meine Daten löschen*
  verwendet. Ein Handy, das sich 90 Tage lang nicht verbunden hat, hält das Löschen der Umschläge nicht
  mehr auf. Meldet der Push-Dienst, dass ein Token nicht mehr gültig ist (etwa nach dem Deinstallieren der
  App), verwirft das Relay das Token.

**Verbindungsdaten.** Wie jeder Webdienst verarbeitet Cloudflare deine IP-Adresse und technische
Anfragedaten, um jede Anfrage zuzustellen und das eigene Netz zu schützen. Der Code unseres Relays
speichert keine IP-Adressen.

## 5. Benachrichtigungen

Benachrichtigungen sind freiwillig. Wenn du sie erlaubst, erhält die App von deinem Handy ein Push-Token
und registriert es für jede Gruppe beim Relay. Zugestellt werden Benachrichtigungen über den Push-Dienst
von Expo (650 Industries, Inc.), der sie an den Apple Push Notification Service oder an Firebase Cloud
Messaging (Google) weitergibt.

Speichert ein Mitglied eine Änderung, erstellt sein Handy für jeden Empfänger einen kurzen Text in
dessen Sprache, etwa *„Marta hat ‚Abendessen‘ 40,00 € hinzugefügt · du schuldest 13,33 €“*, und schickt
ihn zusammen mit der verschlüsselten Änderung an das Relay. Das Relay verwendet diesen Text **nur, wenn
der Empfänger *Details anzeigen* eingeschaltet hat** (Standard); andernfalls verwirft es ihn und schickt
eine allgemeine Zeile wie *„Neue Aktivität in einer deiner Gruppen“*. Während eine ausführliche
Benachrichtigung zugestellt wird, können das Relay, Expo und Apple bzw. Google ihren Text (Gruppenname,
Namen der Mitglieder, Beschreibung und Beträge) lesen. Das Relay speichert keine Benachrichtigungstexte.

Wenn die Benachrichtigungen, die du bekommst, keine Details zu deinen Gruppen zeigen sollen, schalte
*Konto → Benachrichtigungen → Details anzeigen* aus oder deaktiviere Benachrichtigungen ganz. Die App
funktioniert auch ohne sie vollständig und aktualisiert sich, wenn du sie öffnest.

## 6. Wechselkurse

Wenn du eine Ausgabe in einer anderen Währung erfasst, lädt die App öffentliche Wechselkurstabellen von
diesen Diensten: cdn.jsdelivr.net (jsDelivr) und currency-api.pages.dev (der kostenlose Datensatz
*currency-api*), api.frankfurter.dev (Frankfurter) und, falls diese nicht erreichbar sind,
open.er-api.com (ExchangeRate-API). Die Anfrage enthält nur die Basiswährung (Euro) und bei einer
zurückliegenden Ausgabe ein Datum – niemals Beträge, Namen oder Informationen über deine Gruppen. Diese
Dienste erhalten im Rahmen der Verbindung deine IP-Adresse, gemäß ihren eigenen Datenschutzbestimmungen.
Der verwendete Kurs wird in der Ausgabe gespeichert, damit die Handys der anderen Mitglieder ihn nicht
erneut abrufen.

## 7. Einladungslinks, geteilte Links und unsere Webseiten

Ein Einladungslink (`https://chispapps.com/splitfinito/join/#…`) enthält den Gruppenschlüssel im Teil
nach dem `#`. Browser schicken diesen Teil nie an einen Server. Unser Webhoster (GitHub Pages, GitHub,
Inc.) erhält deshalb nur die Seitenadresse, deine IP-Adresse und die üblichen Browserdaten, wie bei
jeder Website. Die Einladungsseite liest den Gruppennamen in deinem Browser, um ihn dir anzuzeigen, und
schickt den Code nirgendwohin.

**Wer einen Einladungslink hat, kann der Gruppe beitreten und ihren gesamten Verlauf lesen.** Teile ihn
deshalb nur mit den Menschen, die du einladen willst. Jedes Mitglied kann den Link unter
*Gruppeneinstellungen → Link zurücksetzen* erneuern; alte Links funktionieren danach für neue Handys
nicht mehr.

Links zu geteilten Ausgaben (`https://chispapps.com/splitfinito/i/#…`) enthalten nur verschlüsselte
Daten, die ausschließlich Mitglieder der Gruppe lesen können.

Wenn du einen Link, einen Saldo oder eine Übersicht über WhatsApp oder eine andere App teilst,
verarbeitet diese App die Nachricht nach ihren eigenen Bedingungen.

## 8. Was wir nicht tun

- Wir legen keine Konten an und fragen weder nach E-Mail-Adresse noch nach Telefonnummer oder Passwort.
- Wir lesen keine Kontakte: Einladungen sind Links und QR-Codes.
- Wir nutzen weder deinen Standort noch dein Mikrofon.
- Wir zeigen keine Werbung, nutzen keine Werbe-ID und binden keine Analyse-, Absturzbericht- oder
  Tracking-Werkzeuge ein. Wir erstellen keine Profile.
- Wir verkaufen keine Daten und geben sie nicht an Werbetreibende oder Datenhändler weiter.
- Wir setzen keinerlei künstliche Intelligenz ein.
- Die App hat keine In-App-Käufe und wickelt keine Zahlungen ab. Die Zahlungsbuttons öffnen nur andere
  Apps (etwa deine Banking- oder Bezahl-App) oder kopieren Angaben; was dort geschieht, regeln diese
  Apps.

## 9. Berechtigungen

- **Kamera** (optional): zum Scannen des QR-Codes einer Einladung und zum Fotografieren eines Belegs.
- **Fotos:** Die Fotoauswahl des Systems übergibt der App nur das Foto, das du auswählst; auf den Rest
  deiner Mediathek hat die App keinen Zugriff.
- **Face ID / Fingerabdruck** (optional): zum Sperren der App. Biometrische Daten verlassen nie die
  sichere Hardware deines Handys, und die App sieht sie nie.
- **Benachrichtigungen** (optional): siehe Abschnitt 5.

## 10. Dienstleister und Übermittlungen in Drittländer

Wir nutzen Cloudflare (Betrieb des Relays), Expo (Zustellung von Benachrichtigungen), Apple und Google
(Zustellung von Benachrichtigungen und Vertrieb der App) sowie GitHub (Webseiten). Sie verarbeiten nur
die oben beschriebenen, begrenzten Daten: zufällige Kennungen, Push-Tokens, verschlüsselte Inhalte,
Verbindungsdaten und – wenn Details eingeschaltet sind – Benachrichtigungstexte. Wir wählen Dienstleister,
die sich zu einem Schutzniveau verpflichten, das mindestens dem dieser Erklärung entspricht. Einige haben
ihren Sitz in den USA; Übermittlungen stützen sich auf die Garantien dieser Anbieter, etwa den
EU-US-Datenschutzrahmen oder die Standardvertragsklauseln der Europäischen Kommission.

## 11. Rechtsgrundlagen

- Weiterleiten verschlüsselter Änderungen, Dateien und Benachrichtigungen sowie Speichern von
  Gerätekennungen und Push-Tokens zu diesem Zweck: erforderlich, um den von dir gewünschten Dienst zu
  erbringen (Art. 6 Abs. 1 lit. b DSGVO).
- Tageslimits, Missbrauchsschutz und Verbindungsdaten: unser berechtigtes Interesse, einen kostenlosen
  Dienst sicher und verfügbar zu halten (Art. 6 Abs. 1 lit. f DSGVO).
- Benachrichtigungen werden nur gesendet, wenn du sie in den Einstellungen deines Handys erlaubst; du
  kannst diese Erlaubnis jederzeit widerrufen.

## 12. Deine Rechte

Du hast das Recht auf Auskunft, Berichtigung und Löschung, auf Einschränkung der Verarbeitung, auf
Widerspruch und auf Datenübertragbarkeit. Die meisten dieser Rechte kannst du direkt in der App ausüben,
denn deine Informationen liegen auf deinem Handy: Exportiere sie mit *Backup exportieren* oder dem
CSV-Export, korrigiere deinen Namen im Profil und lösche sie mit *Meine Daten löschen*.

Das Relay speichert nur zufällige Kennungen, die wir keiner Person zuordnen können. Wenn du uns
schreibst, bitten wir dich unter Umständen um Angaben aus der App, damit wir die richtigen Einträge
finden. Schreib an aissa.b.code@gmail.com; wir antworten innerhalb eines Monats. Außerdem kannst du dich
bei einer Datenschutzaufsichtsbehörde beschweren, zum Beispiel bei der Behörde deines Wohnsitzlandes
oder in Spanien bei der Agencia Española de Protección de Datos ([aepd.es](https://www.aepd.es)).

## 13. So löschst du deine Daten {#delete}

Öffne in der App **Konto → Backup und Daten → Meine Daten löschen** und bestätige. Dadurch werden:

1. auf diesem Handy alle deine Gruppen, Ausgaben, Belegfotos, Entwürfe, Einstellungen, deine Identität
   und deine Schlüssel gelöscht und
2. das Relay aufgefordert, die Einträge dieses Handys (Gerätekennung, Push-Token, Sprache und
   Benachrichtigungseinstellung) in allen Gruppen zu löschen.

Bereits verschickte verschlüsselte Umschläge werden nach dem üblichen Zeitplan gelöscht (nach der
Zustellung, spätestens nach 60 Tagen; Dateien spätestens nach 90 Tagen). Auch das Deinstallieren der App
löscht alles auf dem Handy, kann aber das Relay nicht benachrichtigen; nutze daher, wenn möglich, vorher
*Meine Daten löschen*.

Was wir nicht löschen können: die Kopien deiner Gruppen, die die anderen Mitglieder auf ihren eigenen
Handys haben – sie aufzubewahren ist gerade der Zweck der App. Du kannst eine Gruppe verlassen, andere
Mitglieder können dich entfernen, und jedes Mitglied kann eine Gruppe von seinem eigenen Handy löschen.
Wenn du die App nicht mehr nutzen kannst, schreib uns; wir löschen dann die Relay-Einträge, die wir
zuordnen können.

## 14. Kinder

SplitFinito richtet sich nicht an Kinder. Du musst mindestens 16 Jahre alt sein, um die App zu nutzen
(siehe die [Nutzungsbedingungen](nutzungsbedingungen)). Wir verarbeiten nicht wissentlich Daten von
Personen unter 16 Jahren; wenn du glaubst, dass ein Kind die App nutzt, melde dich bei uns.

## 15. Sicherheit

- **Ende-zu-Ende-Verschlüsselung:** Jede Änderung wird mit Ed25519 signiert und mit XChaCha20-Poly1305
  unter einem zufälligen 256-Bit-Schlüssel verschlüsselt, den nur die Mitglieder der Gruppe haben;
  Belegfotos werden vor dem Hochladen genauso verschlüsselt.
- **Bei der Übertragung:** Alle Verbindungen zum Relay und zu den anderen Diensten nutzen HTTPS (TLS).
- **Auf dem Gerät:** Die geheimen Schlüssel liegen im sicheren Schlüsselspeicher des Telefons; in der
  App kannst du eine Sperre mit Face ID oder Fingerabdruck einschalten. Backup-Dateien werden mit einem
  aus deiner Passphrase abgeleiteten Schlüssel verschlüsselt (PBKDF2-SHA256).

Kein System ist vollkommen sicher: Schütze dein Handy mit einer Bildschirmsperre und teile
Einladungslinks mit Bedacht.

## 16. Änderungen

Ändert sich diese Erklärung, veröffentlichen wir die neue Fassung hier mit neuem Datum, und die App weist
dich auf wesentliche Änderungen hin. Siehe auch die [Nutzungsbedingungen](nutzungsbedingungen) und die
[Hilfeseite](hilfe).
