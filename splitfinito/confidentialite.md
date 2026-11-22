---
title: Politique de confidentialité — SplitFinito
lang: fr
---

# Politique de confidentialité — SplitFinito

**Dernière mise à jour :** 5 novembre 2026 · version 1.0

Autres langues : [English](privacy) · [Español](privacidad) · [Deutsch](datenschutz) · [Italiano](privacy-it) · [Português](privacidade)

SplitFinito est une application pour iPhone et Android qui permet de partager des dépenses entre amis,
colocataires ou compagnons de voyage, publiée par **Aissa Apps**. Elle n'a ni comptes ni base de données
centrale : vos groupes vivent sur votre téléphone et sur ceux des personnes qui en font partie. Cette
politique explique précisément ce que cela implique pour vos données.

## 1. Responsable du traitement

- **Responsable :** Aissa Bamogo Redondo (entrepreneuse individuelle, Espagne), exerçant sous le nom
  Aissa Apps (marque Chispapps)
- **Contact, y compris pour la protection des données :** aissa.b.code@gmail.com

## 2. L'essentiel

- **Pas de compte.** Nous ne vous demandons jamais d'adresse e-mail, de numéro de téléphone ni de mot de
  passe.
- **Vos groupes restent dans votre groupe.** Les dépenses, noms, notes, commentaires et photos de
  tickets sont enregistrés sur votre téléphone et sur ceux des membres de chaque groupe. Nous n'en avons
  aucune copie et ne pouvons pas les lire.
- **Une boîte aux lettres chiffrée, pas une base de données.** Pour transmettre les modifications d'un
  téléphone à l'autre, notre relais conserve des copies chiffrées de bout en bout uniquement jusqu'à ce
  que tous les membres les aient reçues (60 jours au maximum ; 90 jours au maximum pour les photos de
  tickets). Il ne peut pas les déchiffrer.
- **Pas de publicité, pas de statistiques, pas de pistage, pas d'IA, et nous ne vendons jamais de
  données.**
- **Vous pouvez tout supprimer** via *Compte → Sauvegarde et données → Supprimer mes données*
  ([détails](#delete)).

## 3. Ce qui reste sur votre téléphone

L'application enregistre les éléments suivants **uniquement dans son stockage privé, sur votre
téléphone** :

- votre nom affiché et votre avatar (un emoji et une couleur), vos réglages et votre identité : une paire
  de clés cryptographiques générée sur votre téléphone à la première ouverture de l'application. Les clés
  secrètes sont conservées dans le trousseau sécurisé du téléphone (Keychain sur iOS, Keystore sur
  Android) ;
- pour chacun de vos groupes : son nom et ses réglages, les noms affichés et avatars des membres, les
  dépenses, remboursements, commentaires, notes, catégories, modèles, dépenses récurrentes, photos de
  tickets, les coordonnées de paiement que chaque membre choisit de partager avec le groupe (par exemple
  un nom PayPal.me, un numéro de téléphone ou un IBAN) et l'historique complet des modifications ;
- les brouillons, les taux de change en cache et vos préférences.

Chaque membre d'un groupe conserve sur son propre téléphone le même historique complet du groupe : c'est
ainsi que SplitFinito fonctionne sans serveur, et c'est pourquoi un téléphone perdu peut être restauré à
partir de celui d'un ami.

**Sauvegardes de l'appareil.** Selon les réglages de votre téléphone, la sauvegarde iCloud (iOS) ou la
sauvegarde Google (Android) peut inclure les fichiers de l'application ; ces sauvegardes sont gérées par
Apple ou Google selon leurs propres conditions. Vos clés secrètes sont stockées de façon à ne pas être
copiées sur d'autres appareils. Pour une copie que vous maîtrisez, utilisez *Compte → Sauvegarde et
données → Exporter une sauvegarde*, qui crée un fichier chiffré avec la phrase secrète de votre choix.

Nous, l'éditeur, n'avons accès à aucune de ces informations.

## 4. Ce que traite notre relais

Lorsque vous partagez un groupe avec d'autres personnes, les téléphones s'échangent les modifications via
un petit relais que nous exploitons sur Cloudflare Workers (Cloudflare, Inc.). Il fonctionne comme une
boîte aux lettres : il garde ce qu'un téléphone envoie jusqu'à ce que les autres le récupèrent, et il est
conçu pour ne pas pouvoir lire le contenu.

Pour chaque groupe partagé, le relais conserve :

- un identifiant de groupe aléatoire et une valeur dérivée du lien d'invitation en vigueur, qui permet
  aux nouveaux téléphones de prouver qu'ils détiennent ce lien (et non le lien lui-même) ;
- pour chaque téléphone inscrit dans le groupe : un identifiant d'appareil aléatoire créé par
  l'application (sans lien avec les identifiants matériels ni avec l'identifiant publicitaire du
  téléphone), la plateforme (iOS ou Android), la langue de l'application, votre jeton de notifications si
  vous les avez autorisées, votre choix *Afficher les détails* pour les notifications, une empreinte
  (hash) du jeton d'accès remis à ce téléphone, l'endroit où il en est de sa lecture et la date de sa
  dernière connexion ;
- des **enveloppes chiffrées** : chaque modification (une dépense, un remboursement, un commentaire…)
  est signée et chiffrée sur le téléphone de l'expéditeur avec la clé du groupe avant d'être envoyée,
  avec sa taille, son numéro d'ordre et son heure d'arrivée ;
- des **fichiers chiffrés** : photos de tickets et instantanés de l'historique, chiffrés de la même
  façon ;
- des compteurs quotidiens par groupe, qui protègent le service gratuit contre les abus.

La clé du groupe circule uniquement dans les liens d'invitation et reste sur les téléphones des membres ;
elle n'est jamais envoyée au relais. Ni nous, ni Cloudflare, ni personne en dehors du groupe ne peut lire
les enveloppes ou les fichiers.

**Durées de conservation sur le relais**

- Une enveloppe est supprimée dès que tous les téléphones inscrits du groupe l'ont reçue, et dans tous les
  cas **60 jours** après son arrivée.
- Les fichiers chiffrés sont supprimés au plus tard **90 jours** après leur envoi.
- La fiche d'un téléphone (identifiant d'appareil, jeton de notifications, langue et choix de
  notifications) est supprimée lorsque ce téléphone quitte le groupe, lorsqu'un membre le retire ou
  lorsqu'il utilise *Supprimer mes données*. Un téléphone qui ne s'est pas connecté depuis 90 jours ne
  retarde plus la suppression des enveloppes. Si le service de notifications signale qu'un jeton n'est
  plus valide (par exemple après la désinstallation de l'application), le relais l'efface.

**Données de connexion.** Comme tout service web, Cloudflare traite votre adresse IP et des données
techniques de la requête pour l'acheminer et protéger son réseau. Le code de notre relais n'enregistre
pas les adresses IP.

## 5. Notifications

Les notifications sont facultatives. Si vous les autorisez, l'application obtient un jeton de
notifications auprès de votre téléphone et l'enregistre sur le relais pour chaque groupe. Les
notifications passent par le service de notifications d'Expo (650 Industries, Inc.), qui les transmet au
service de notifications d'Apple ou à Firebase Cloud Messaging (Google).

Lorsqu'un membre enregistre une modification, son téléphone prépare un court texte pour chaque
destinataire, dans la langue de celui-ci, par exemple *« Marta a ajouté « Dîner » 40,00 € · vous devez
13,33 € »*, et l'envoie au relais avec la modification chiffrée. Le relais n'utilise ce texte **que si
le destinataire a activé *Afficher les détails*** (réglage par défaut) ; sinon il le jette et envoie une
phrase générique comme *« Il y a du nouveau dans un de vos groupes »*. Pendant l'acheminement d'une
notification détaillée, son texte (nom du groupe, noms des membres, description et montants) peut être lu
par le relais, par Expo et par Apple ou Google. Le relais ne conserve pas les textes des notifications.

Si vous préférez que les notifications que vous recevez ne contiennent aucun détail sur vos groupes,
désactivez *Compte → Notifications → Afficher les détails*, ou désactivez les notifications.
L'application fonctionne parfaitement sans elles et se met à jour à son ouverture.

## 6. Taux de change

Lorsque vous saisissez une dépense dans une autre devise, l'application télécharge des tables publiques
de taux de change auprès de ces services : cdn.jsdelivr.net (jsDelivr) et currency-api.pages.dev (le jeu
de données gratuit *currency-api*), api.frankfurter.dev (Frankfurter) et, en cas d'échec,
open.er-api.com (ExchangeRate-API). La requête ne contient que la devise de base (l'euro) et, pour une
dépense passée, une date : jamais de montants, de noms ni quoi que ce soit sur vos groupes. Ces services
reçoivent votre adresse IP du fait de la connexion, conformément à leurs propres politiques de
confidentialité. Le taux utilisé est enregistré dans la dépense : les téléphones des autres membres ne le
redemandent jamais.

## 7. Liens d'invitation, liens partagés et nos pages web

Un lien d'invitation (`https://chispapps.com/splitfinito/join/#…`) contient la clé du groupe dans la
partie située après le `#`. Les navigateurs n'envoient jamais cette partie à un serveur : notre hébergeur
web (GitHub Pages, de GitHub, Inc.) ne reçoit donc que l'adresse de la page, votre adresse IP et les
données habituelles du navigateur, comme pour n'importe quel site. La page d'invitation lit le nom du
groupe dans votre navigateur pour vous l'afficher et n'envoie le code nulle part.

**Toute personne qui possède un lien d'invitation peut rejoindre le groupe et lire tout son
historique** : ne le partagez qu'avec les personnes que vous souhaitez inviter. N'importe quel membre
peut renouveler le lien dans *Réglages du groupe → Réinitialiser le lien* ; les anciens liens ne
fonctionnent alors plus pour de nouveaux téléphones.

Les liens de dépenses partagées (`https://chispapps.com/splitfinito/i/#…`) ne contiennent que des
données chiffrées que seuls les membres du groupe peuvent lire.

Lorsque vous partagez un lien, un solde ou un récapitulatif via WhatsApp ou une autre application,
celle-ci traite le message selon ses propres conditions.

## 8. Ce que nous ne faisons pas

- Nous ne créons pas de comptes et ne demandons ni e-mail, ni numéro de téléphone, ni mot de passe.
- Si vous nous écrivez (Contact ou Signaler dans l'appli ouvrent votre propre appli de messagerie), nous recevons votre adresse e-mail et votre message et ne les utilisons que pour vous répondre. Nous ne vous ajoutons à aucune liste.
- Nous ne lisons pas vos contacts : les invitations sont des liens et des QR codes.
- Nous n'utilisons ni votre position ni votre micro.
- Nous n'affichons pas de publicité, n'utilisons pas d'identifiant publicitaire et n'intégrons aucun
  outil de statistiques, de rapports de plantage ou de pistage. Nous ne faisons pas de profilage.
- Nous ne vendons ni ne cédons de données à des annonceurs ou à des courtiers en données.
- Nous n'utilisons aucune forme d'intelligence artificielle.
- L'application n'a pas d'achats intégrés et ne traite aucun paiement. Les boutons de paiement ouvrent
  seulement d'autres applications (celle de votre banque ou de paiement, par exemple) ou copient des
  coordonnées ; ce qui s'y passe relève de ces applications.

## 9. Autorisations

- **Appareil photo** (facultatif) : pour scanner le QR code d'une invitation et photographier un ticket.
- **Photos** : le sélecteur de photos du système ne transmet à l'application que la photo choisie ;
  l'application n'a pas accès au reste de votre photothèque.
- **Face ID / empreinte** (facultatif) : pour verrouiller l'application. Les données biométriques ne
  quittent jamais le matériel sécurisé de votre téléphone et l'application ne les voit jamais.
- **Notifications** (facultatif) : voir la section 5.

## 10. Prestataires et transferts internationaux

Nous faisons appel à Cloudflare (hébergement du relais), Expo (acheminement des notifications), Apple et
Google (acheminement des notifications et distribution de l'application) et GitHub (pages web). Ils ne
traitent que les données limitées décrites ci-dessus : identifiants aléatoires, jetons de notifications,
contenu chiffré, données de connexion et, lorsque les détails sont activés, textes des notifications.
Nous choisissons des prestataires qui s'engagent à protéger les données à un niveau au moins équivalent à
celui de cette politique. Certains sont établis aux États-Unis ; les transferts reposent sur les garanties
qu'ils offrent, comme le cadre de protection des données UE–États-Unis ou les clauses contractuelles
types de la Commission européenne.

## 11. Bases juridiques

- Acheminer les modifications chiffrées, les fichiers et les notifications, et conserver à cette fin les
  identifiants d'appareil et les jetons de notifications : nécessaire à l'exécution du service que vous
  demandez (article 6, paragraphe 1, point b, du RGPD).
- Limites quotidiennes, protection contre les abus et données de connexion : notre intérêt légitime à
  maintenir un service gratuit sûr et disponible (article 6, paragraphe 1, point f, du RGPD).
- Les notifications ne sont envoyées que si vous les autorisez dans les réglages de votre téléphone ;
  vous pouvez retirer cette autorisation à tout moment.

## 12. Vos droits

Vous disposez d'un droit d'accès, de rectification et d'effacement, d'un droit à la limitation du
traitement, d'un droit d'opposition et d'un droit à la portabilité. La plupart s'exercent directement
dans l'application, puisque vos informations sont sur votre téléphone : exportez-les avec *Exporter une
sauvegarde* ou l'export CSV, corrigez votre nom dans votre profil et effacez-les avec *Supprimer mes
données*.

Le relais ne conserve que des identifiants aléatoires que nous ne pouvons pas rattacher à une personne.
Si vous nous écrivez, nous pourrons vous demander des informations affichées dans l'application pour
retrouver les bonnes fiches. Écrivez à aissa.b.code@gmail.com ; nous répondons dans un délai d'un mois.
Vous pouvez aussi introduire une réclamation auprès d'une autorité de protection des données, par exemple
la CNIL en France ([cnil.fr](https://www.cnil.fr)) ou, en Espagne, l'Agencia Española de Protección de
Datos ([aepd.es](https://www.aepd.es)).

## 13. Comment supprimer vos données {#delete}

Dans l'application, allez dans **Compte → Sauvegarde et données → Supprimer mes données** et confirmez.
Cette action :

1. supprime de ce téléphone tous vos groupes, dépenses, photos de tickets, brouillons, réglages, votre
   identité et vos clés ;
2. demande au relais d'effacer les fiches de ce téléphone (identifiant d'appareil, jeton de
   notifications, langue et choix de notifications) dans tous les groupes.

Les enveloppes chiffrées déjà envoyées sont supprimées selon le calendrier habituel (après livraison,
60 jours au maximum ; 90 jours au maximum pour les fichiers). Désinstaller l'application efface aussi
tout ce qui se trouve sur le téléphone, mais ne peut pas prévenir le relais : si possible, utilisez
d'abord *Supprimer mes données*.

Ce que nous ne pouvons pas supprimer : les copies de vos groupes que les autres membres conservent sur
leurs propres téléphones, puisque c'est justement le rôle de l'application. Vous pouvez quitter un
groupe, les autres membres peuvent vous en retirer, et chaque membre peut supprimer un groupe de son
propre téléphone. Si vous ne pouvez plus utiliser l'application, écrivez-nous : nous effacerons les fiches
du relais que nous pouvons identifier.

## 14. Mineurs

SplitFinito ne s'adresse pas aux enfants. Vous devez avoir au moins 16 ans pour l'utiliser (voir les
[Conditions d'utilisation](conditions)). Nous ne traitons pas sciemment de données de personnes de moins
de 16 ans ; si vous pensez qu'un enfant utilise l'application, contactez-nous.

## 15. Sécurité

- **Chiffrement de bout en bout :** chaque modification est signée avec Ed25519 et chiffrée avec
  XChaCha20-Poly1305 sous une clé aléatoire de 256 bits que seuls les membres du groupe possèdent ; les
  photos de tickets sont chiffrées de la même façon avant l'envoi.
- **En transit :** toutes les connexions au relais et aux autres services utilisent HTTPS (TLS).
- **Sur l'appareil :** les clés secrètes sont dans le trousseau sécurisé du téléphone ; vous pouvez
  ajouter un verrouillage par Face ID ou empreinte dans l'application. Les sauvegardes sont chiffrées avec
  une clé dérivée de votre phrase secrète (PBKDF2-SHA256).

Aucun système n'est parfaitement sûr : protégez votre téléphone par un verrouillage d'écran et partagez
les liens d'invitation avec prudence.

## 16. Modifications

Si cette politique change, la nouvelle version sera publiée ici avec une nouvelle date et l'application
vous signalera les changements importants. Voir aussi les [Conditions d'utilisation](conditions) et la
[page d'aide](aide).
