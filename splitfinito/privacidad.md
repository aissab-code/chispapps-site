---
title: Política de privacidad — SplitFinito
lang: es
---

# Política de privacidad — SplitFinito

**Última actualización:** 5 de noviembre de 2026 · versión 1.0

Otros idiomas: [English](privacy) · [Français](confidentialite) · [Deutsch](datenschutz) · [Italiano](privacy-it) · [Português](privacidade)

SplitFinito es una aplicación para iPhone y Android para compartir gastos con amigos, compañeros de piso
y de viaje, publicada por **Aissa Apps**. No tiene cuentas ni una base de datos central: tus grupos
viven en tu móvil y en los móviles de las personas que forman parte de ellos. Esta política explica con
exactitud qué significa eso para tus datos.

## 1. Responsable

- **Responsable del tratamiento:** Aissa Bamogo Redondo (autónoma, España), que opera como Aissa Apps
  (marca Chispapps)
- **Contacto, también para cuestiones de privacidad:** aissa.b.code@gmail.com

## 2. En pocas palabras

- **Sin cuenta.** Nunca te pedimos correo electrónico, teléfono ni contraseña.
- **Tus grupos se quedan en tu grupo.** Los gastos, nombres, notas, comentarios y fotos de tickets se
  guardan en tu móvil y en los móviles de los miembros de cada grupo. No tenemos ninguna copia y no
  podemos leerlos.
- **Un buzón cifrado, no una base de datos.** Para llevar los cambios de un móvil a otro, nuestro
  servidor de intercambio (el «relay») guarda copias cifradas de extremo a extremo solo hasta que todos
  los miembros las reciben (como mucho 60 días; las fotos de tickets, como mucho 90 días). No puede
  descifrarlas.
- **Sin anuncios, sin analítica, sin rastreo, sin IA y nunca vendemos datos.**
- **Puedes borrarlo todo** en *Tú → Copia de seguridad y datos → Borrar mis datos* ([detalles](#delete)).

## 3. Lo que se queda en tu móvil

La app guarda lo siguiente **solo en su almacenamiento privado de tu móvil**:

- tu nombre visible y tu avatar (un emoji y un color), tus ajustes y tu identidad: un par de claves
  criptográficas que se generan en tu móvil la primera vez que abres la app. Las claves secretas se
  guardan en el llavero seguro del teléfono (Keychain en iOS, Keystore en Android);
- de cada uno de tus grupos: su nombre y sus ajustes, los nombres visibles y avatares de los miembros,
  los gastos, pagos, comentarios, notas, categorías, plantillas, gastos periódicos, fotos de tickets, los
  datos de pago que cada miembro decida compartir con el grupo (por ejemplo, un usuario de PayPal.me, un
  teléfono para Bizum o un IBAN) y el historial completo de cambios;
- borradores, tipos de cambio en caché y tus preferencias.

Cada miembro de un grupo guarda en su propio móvil el mismo registro completo de ese grupo: así funciona
SplitFinito sin servidor, y por eso un móvil perdido se puede recuperar desde el de un amigo.

**Copias de seguridad del teléfono.** Según los ajustes de tu móvil, la copia de iCloud (iOS) o la copia
de seguridad de Google (Android) pueden incluir los archivos de la app; Apple o Google gestionan esas
copias según sus propias condiciones. Tus claves secretas se guardan de forma que no se copian a otros
dispositivos. Si quieres una copia que controles tú, usa *Tú → Copia de seguridad y datos → Exportar
copia de seguridad*, que crea un archivo cifrado con la contraseña que elijas.

Nosotros, como desarrolladores, no tenemos acceso a nada de esto.

## 4. Lo que trata nuestro relay

Cuando compartes un grupo con otras personas, los móviles se intercambian los cambios a través de un
pequeño servidor de intercambio que gestionamos en Cloudflare Workers (Cloudflare, Inc.). Funciona como
un buzón: guarda lo que envía un móvil hasta que lo recogen los demás, y está diseñado para no poder leer
el contenido.

De cada grupo compartido, el relay guarda:

- un identificador aleatorio del grupo y un valor derivado del enlace de invitación vigente que permite a
  los móviles nuevos demostrar que tienen el enlace (no el enlace en sí);
- de cada móvil registrado en el grupo: un identificador de dispositivo aleatorio creado por la app (sin
  relación con los identificadores de hardware ni con el identificador publicitario del teléfono), la
  plataforma (iOS o Android), el idioma de la app, tu token de notificaciones si las has permitido, tu
  elección de *Mostrar detalles* en las notificaciones, un hash del token de acceso que se le dio a ese
  móvil, hasta dónde ha leído y cuándo se conectó por última vez;
- **sobres cifrados**: cada cambio (un gasto, un pago, un comentario…) se firma y se cifra en el móvil
  de quien lo envía con la clave del grupo antes de salir, junto con su tamaño, su número de orden y la
  hora de llegada;
- **archivos cifrados**: fotos de tickets e instantáneas del historial, cifradas de la misma manera;
- contadores diarios por grupo, que protegen el servicio gratuito frente a abusos.

La clave del grupo solo viaja dentro de los enlaces de invitación y se queda en los móviles de los
miembros; nunca se envía al relay. Ni nosotros, ni Cloudflare, ni nadie ajeno al grupo puede leer los
sobres ni los archivos.

**Cuánto tiempo guarda las cosas el relay**

- Un sobre se borra en cuanto todos los móviles registrados del grupo lo han recibido y, en cualquier
  caso, **60 días** después de llegar.
- Los archivos cifrados se borran como mucho **90 días** después de subirse.
- El registro de un móvil (identificador de dispositivo, token de notificaciones, idioma y elección de
  notificaciones) se borra cuando ese móvil sale del grupo, cuando un miembro lo quita o cuando usa
  *Borrar mis datos*. Un móvil que no se conecta durante 90 días deja de retrasar el borrado de los
  sobres. Si el servicio de notificaciones indica que un token ya no es válido (por ejemplo, porque has
  desinstalado la app), el relay lo descarta.

**Datos de conexión.** Como cualquier servicio web, Cloudflare trata tu dirección IP y datos técnicos de
la petición para entregarla y proteger su red. El código de nuestro relay no guarda direcciones IP.

## 5. Notificaciones

Las notificaciones son opcionales. Si las permites, la app obtiene un token de notificaciones de tu móvil
y lo registra en el relay para cada grupo. Las notificaciones se entregan a través del servicio de
notificaciones de Expo (650 Industries, Inc.), que las pasa al servicio de notificaciones de Apple o a
Firebase Cloud Messaging (Google).

Cuando un miembro guarda un cambio, su móvil prepara un texto breve para cada destinatario en su idioma,
por ejemplo *«Marta ha añadido "Cena" 40,00 € · debes 13,33 €»*, y lo envía al relay junto con el cambio
cifrado. El relay usa ese texto **solo si el destinatario tiene activado *Mostrar detalles*** (la opción
por defecto); si no, lo descarta y envía una frase genérica como *«Hay novedades en uno de tus grupos»*.
Mientras se entrega una notificación con detalles, su texto (nombre del grupo, nombres de los miembros,
descripción e importes) puede ser leído por el relay, por Expo y por Apple o Google. El relay no guarda
los textos de las notificaciones.

Si prefieres que las notificaciones que recibes no muestren detalles de tus grupos, desactiva *Tú →
Notificaciones → Mostrar detalles*, o desactiva las notificaciones. La app funciona perfectamente sin
ellas y se actualiza cuando la abres.

## 6. Tipos de cambio

Cuando apuntas un gasto en otra moneda, la app descarga tablas públicas de tipos de cambio de estos
servicios: cdn.jsdelivr.net (jsDelivr) y currency-api.pages.dev (el conjunto de datos gratuito
*currency-api*), api.frankfurter.dev (Frankfurter) y, si fallan, open.er-api.com (ExchangeRate-API). La
petición solo contiene la moneda base (el euro) y, para un gasto pasado, una fecha: nunca importes,
nombres ni nada sobre tus grupos. Estos servicios reciben tu dirección IP como parte de la conexión,
según sus propias políticas de privacidad. El tipo usado se guarda dentro del gasto, así que los móviles
de los demás miembros nunca vuelven a pedirlo.

## 7. Enlaces de invitación, enlaces compartidos y nuestras páginas web

Un enlace de invitación (`https://chispapps.com/splitfinito/join/#…`) lleva la clave del grupo en la
parte que va detrás de `#`. Los navegadores nunca envían esa parte a un servidor, así que nuestro
alojamiento web (GitHub Pages, de GitHub, Inc.) solo recibe la dirección de la página, tu dirección IP y
los datos normales del navegador, como en cualquier web. La página de invitación lee el nombre del grupo
dentro de tu navegador para enseñártelo y nunca envía el código a ningún sitio.

**Cualquiera que tenga un enlace de invitación puede unirse al grupo y leer todo su historial**, así que
compártelo solo con las personas a las que quieras invitar. Cualquier miembro puede cambiar el enlace en
*Ajustes del grupo → Restablecer enlace*; a partir de ese momento los enlaces antiguos dejan de servir
para móviles nuevos.

Los enlaces de gastos compartidos (`https://chispapps.com/splitfinito/i/#…`) solo contienen datos
cifrados que pueden leer los miembros del grupo.

Cuando compartes un enlace, un saldo o un resumen por WhatsApp u otra app, esa app trata el mensaje según
sus propias condiciones.

## 8. Lo que no hacemos

- No creamos cuentas ni te pedimos correo, teléfono o contraseña.
- Si nos escribes (Contacto o Denunciar en la app abren tu propia app de correo), recibimos tu dirección de correo y tu mensaje y solo los usamos para responderte. No te añadimos a ninguna lista.
- No leemos tus contactos: las invitaciones son enlaces y códigos QR.
- No usamos tu ubicación ni tu micrófono.
- No mostramos anuncios, no usamos el identificador publicitario ni incluimos herramientas de analítica,
  informes de errores o rastreo. No elaboramos perfiles.
- No vendemos ni cedemos datos a anunciantes ni a intermediarios de datos.
- No usamos inteligencia artificial de ningún tipo.
- La app no tiene compras integradas ni procesa pagos. Los botones de pago solo abren otras apps (como la
  de tu banco o tu app de pagos) o copian datos; lo que pase allí se rige por esas apps.

## 9. Permisos

- **Cámara** (opcional): para escanear el código QR de una invitación y fotografiar un ticket.
- **Fotos**: el selector de fotos del sistema solo entrega a la app la foto que eliges; la app no accede
  al resto de tu galería.
- **Face ID / huella** (opcional): para bloquear la app. Los datos biométricos nunca salen del hardware
  seguro de tu móvil y la app nunca los ve.
- **Notificaciones** (opcional): consulta el apartado 5.

## 10. Proveedores y transferencias internacionales

Usamos Cloudflare (alojamiento del relay), Expo (entrega de notificaciones), Apple y Google (entrega de
notificaciones y distribución de la app) y GitHub (páginas web). Solo tratan los datos limitados que se
describen arriba: identificadores aleatorios, tokens de notificaciones, contenido cifrado, datos de
conexión y, si los detalles están activados, textos de notificaciones. Elegimos proveedores que se
comprometen a proteger los datos con un nivel al menos equivalente al de esta política. Algunos tienen su
sede en Estados Unidos; las transferencias se basan en las garantías que ofrecen esos proveedores, como
el Marco de Privacidad de Datos UE-EE. UU. o las cláusulas contractuales tipo de la Comisión Europea.

## 11. Base jurídica

- Transmitir los cambios cifrados, archivos y notificaciones, y conservar los identificadores de
  dispositivo y tokens de notificaciones con ese fin: es necesario para prestarte el servicio que pides
  (artículo 6.1.b del RGPD).
- Límites diarios, protección frente a abusos y datos de conexión: nuestro interés legítimo en mantener
  un servicio gratuito seguro y disponible (artículo 6.1.f del RGPD).
- Las notificaciones solo se envían si las permites en los ajustes de tu móvil; puedes retirar ese
  permiso cuando quieras.

## 12. Tus derechos

Tienes derecho a acceder a tus datos, rectificarlos y suprimirlos, a limitar u oponerte a su tratamiento
y a la portabilidad. Casi todos estos derechos los puedes ejercer directamente en la app, porque tu
información está en tu móvil: expórtala con *Exportar copia de seguridad* o con la exportación CSV,
corrige tu nombre en tu perfil y bórrala con *Borrar mis datos*.

El relay solo guarda identificadores aleatorios que no podemos asociar a una persona. Si nos escribes,
puede que te pidamos datos que muestra la app para encontrar los registros correctos. Escribe a
aissa.b.code@gmail.com; respondemos en el plazo de un mes. También puedes reclamar ante una autoridad de
protección de datos; en España, la Agencia Española de Protección de Datos ([aepd.es](https://www.aepd.es)).

## 13. Cómo borrar tus datos {#delete}

En la app, ve a **Tú → Copia de seguridad y datos → Borrar mis datos** y confirma. Esto:

1. borra de este móvil todos tus grupos, gastos, fotos de tickets, borradores, ajustes, tu identidad y
   tus claves; y
2. pide al relay que borre los registros de este móvil (identificador de dispositivo, token de
   notificaciones, idioma y elección de notificaciones) en todos los grupos.

Los sobres cifrados que ya hayas enviado se borran según el calendario normal (al entregarse, como mucho
a los 60 días; los archivos, como mucho a los 90 días). Desinstalar la app también borra todo lo que hay
en el móvil, pero no puede avisar al relay; si puedes, usa antes *Borrar mis datos*.

Lo que no podemos borrar: las copias de tus grupos que los demás miembros guardan en sus propios móviles,
porque conservarlas es precisamente la función de la app. Puedes salir de un grupo, los demás miembros
pueden quitarte de él y cada miembro puede borrar un grupo de su propio móvil. Si ya no puedes usar la
app, escríbenos y borraremos los registros del relay que podamos identificar.

## 14. Menores

SplitFinito no está dirigida a menores. Para usarla tienes que tener al menos 16 años (consulta los
[Términos de uso](terminos)). No tratamos a sabiendas datos de menores de 16 años; si crees que un menor
está usando la app, ponte en contacto con nosotros.

## 15. Seguridad

- **Cifrado de extremo a extremo:** cada cambio se firma con Ed25519 y se cifra con XChaCha20-Poly1305
  con una clave aleatoria de 256 bits que solo tienen los miembros del grupo; las fotos de tickets se
  cifran igual antes de subirse.
- **En tránsito:** todas las conexiones con el relay y con los demás servicios usan HTTPS (TLS).
- **En el móvil:** las claves secretas están en el llavero seguro del teléfono; puedes añadir en la app
  un bloqueo con Face ID o huella. Las copias de seguridad se cifran con una clave derivada de tu
  contraseña (PBKDF2-SHA256).

Ningún sistema es totalmente seguro: protege tu móvil con un bloqueo de pantalla y comparte los enlaces
de invitación con cuidado.

## 16. Cambios

Si esta política cambia, publicaremos aquí la nueva versión con una nueva fecha y la app te avisará de
los cambios importantes. Consulta también los [Términos de uso](terminos) y la [página de ayuda](soporte).
