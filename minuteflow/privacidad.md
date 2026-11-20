---
title: Política de privacidad — MinuteFlow
lang: es
---

# Política de privacidad — MinuteFlow

**Última actualización:** 20 de noviembre de 2026

MinuteFlow es una app para iPhone que graba reuniones y las convierte en transcripción, acta y
tareas con inteligencia artificial. La publica **Aissa Apps**. Esta política explica qué ocurre con
tu información y con la de las personas que grabas.
La app está en inglés, así que los nombres de botones y menús aparecen aquí tal como se ven en ella.

Cumplimos el Reglamento General de Protección de Datos de la UE (**RGPD**) y la normativa española
de protección de datos.

---

## 1. Responsable

- **Responsable del tratamiento:** Aissa Bamogo Redondo (autónoma, España), con el nombre comercial
  Aissa Apps
- **Contacto:** aissa.b.code@gmail.com

---

## 2. En resumen

- Tus grabaciones, transcripciones y actas se guardan **en tu iPhone**. No hay cuenta de MinuteFlow
  ni copia de tu biblioteca en la nube.
- **Ningún contenido de tus reuniones sale de tu iPhone hasta que procesas una reunión, haces una
  pregunta o compartes.** El procesamiento automático está desactivado salvo que lo actives, y
  grabar nunca comparte nada por sí solo.
- Cuando se procesa una reunión, la grabación va a nuestro servidor de procesamiento en la UE y a
  la **IA Gemini de Google**. Nuestro servidor la borra en cuanto tu iPhone tiene el resultado.
- **Google Drive es opcional.** Si lo conectas, MinuteFlow solo puede ver los archivos que crea, y
  los archivos van directamente de tu iPhone a Google, nunca a través de nuestro servidor.
- Sin anuncios, sin analítica, sin seguimiento, y nunca vendemos datos.

---

## 3. Grabar a otras personas

Las reuniones contienen la voz y las palabras de otras personas. Antes de cada grabación MinuteFlow
te recuerda que avises a todos de que estás grabando (puedes ocultar el aviso). **Tú decides qué
grabas y para qué, y te corresponde contar con el consentimiento de los participantes u otra base
legal**: en muchos países no está permitido grabar una conversación sin avisar a los demás, y muchas
empresas tienen normas sobre grabar reuniones y sobre herramientas de IA.

Tratamos el contenido de tus grabaciones solo para darte la transcripción, el acta y las respuestas
que pides, como se describe abajo. No escuchamos grabaciones, no leemos transcripciones y no las
usamos para nada más.

---

## 4. Qué se queda en tu iPhone

Lo siguiente se guarda solo en el almacenamiento privado de MinuteFlow en tu iPhone:

- las **grabaciones de audio** y los archivos de audio que importes;
- **transcripciones, actas, decisiones y tareas**, con tus cambios;
- títulos de reuniones, participantes, nombres de los interlocutores, marcadores y las notas que
  escribes;
- tus preguntas en **Ask** y sus respuestas;
- tu **historial de envíos** (qué compartiste, cuándo, a qué app o carpeta de Drive, y las
  direcciones de correo con las que compartiste);
- tus ajustes, tu presupuesto mensual de IA y el coste de cada reunión procesada;
- los **recordatorios** de tareas, que tu iPhone muestra como notificaciones locales.

iOS guarda estos datos cifrados en tu iPhone. Si haces copia de seguridad del iPhone (en
iCloud o en un ordenador), la copia los incluye, según las condiciones de Apple para las copias.

Dos secretos se guardan en el **llavero de iOS** solo en este iPhone: el token de acceso al servidor
de procesamiento y, si conectas Google Drive, tus tokens de inicio de sesión de Google y el correo
de esa cuenta.

---

## 5. Conexión con el servidor de procesamiento

Para usar las funciones de IA, MinuteFlow se conecta una vez al servidor de procesamiento de
MinuteFlow con un **código de invitación**. Después el servidor guarda, para tu instalación:

- un identificador de dispositivo aleatorio;
- el nombre de dispositivo que tu iPhone comunica a las apps (en las versiones actuales de iOS suele
  ser simplemente "iPhone");
- un hash irreversible del token de acceso (nunca el token) y la fecha de conexión;
- tu **uso de IA**: la fecha, la hora y el coste de cada procesamiento y pregunta, para poder
  aplicar el límite de gasto mensual.

Estos registros no contienen nada de tus reuniones. Nuestro servidor también usa tu dirección IP,
solo en memoria, para limitar cuántas peticiones se pueden hacer; no la guarda. Los conservamos mientras funcione el servicio,
para que el límite de gasto siga funcionando; escríbenos y los borramos.

Si conectas la app a un servidor gestionado por otra persona o entidad (por ejemplo, tu empresa),
es ese operador, y no nosotros, quien responde de lo que ocurre en ese servidor.

---

## 6. Cuando se procesa una reunión

Una reunión se procesa cuando la inicias con **Transcribe & summarise** (o **Create notes**),
después de que MinuteFlow te muestre el coste estimado. Las reuniones marcadas como
**confidenciales** piden una segunda confirmación. Si activas **Process new recordings
automatically** (Settings → AI & languages, desactivado por defecto), las nuevas grabaciones y los
archivos de audio importados se procesan en cuanto se guardan, salvo los confidenciales, que
siempre te esperan.

**Qué se envía:** el audio de esa reunión y los datos que ayudan a hacer un buen acta: el título,
los nombres de los participantes, los idiomas, el idioma y el nivel de detalle que quieres para el
acta, la hora de inicio y la zona horaria, tus marcadores y sus etiquetas, las notas que escribiste
y el nombre con el que te identificas (si lo configuraste, para encontrar "mis tareas"). Cuando
el acta se hace a partir de una transcripción que ya está en tu iPhone (por ejemplo, tras
editarla), se envía esa transcripción, con los nombres de interlocutores que confirmaste, en lugar
del audio, junto con los mismos datos.

**A dónde va:** a nuestro servidor de procesamiento en **Google Cloud en Bélgica (UE)**, que divide
las grabaciones largas en partes y las envía a la IA Gemini de Google (ver sección 8).

**Cuánto tiempo se queda:** el audio, las partes, los resultados y los datos de la reunión
enviados con ellos se borran de nuestro servidor **en cuanto tu iPhone confirma que ha guardado el
resultado**. Lo que quede, por ejemplo si no vuelves a abrir la app, se borra automáticamente a las
**48 horas** (en casos excepcionales, hasta 3 días).

**Registros del servidor:** nuestro servidor solo registra información técnica, como el tipo de
evento, identificadores internos, tamaños de archivo, duraciones, recuentos, costes y códigos de
error. Nunca registra audio, transcripciones, actas, preguntas, nombres ni tokens. Nuestro
proveedor de alojamiento, Google Cloud, guarda además registros estándar de peticiones (hora,
dirección IP, la dirección solicitada y el agente de usuario que envía tu iPhone). Ambos se
conservan un máximo de 30 días, por seguridad y para resolver problemas.

---

## 7. Cuando usas Ask

Cuando haces una pregunta sobre una reunión o sobre toda tu biblioteca, MinuteFlow elige en tu
iPhone las partes relevantes de tus reuniones y las envía con tu pregunta: títulos y fechas de las
reuniones, nombres de los interlocutores, fragmentos de la transcripción, actas (incluidas las
notas que escribiste y las tareas con sus responsables y plazos) y el nombre con el que te
identificas, si lo configuraste. Nuestro servidor
lo envía a Gemini y devuelve la respuesta con citas. **Ni la pregunta ni la respuesta se guardan en
nuestro servidor**; solo su coste se suma a tu total mensual.

---

## 8. Inteligencia artificial (Google Gemini)

MinuteFlow usa los **modelos Gemini de Google** para transcribir grabaciones, distinguir a los
interlocutores, redactar actas y responder preguntas.

- **Google actúa como nuestro encargado del tratamiento.** Usamos el servicio de pago de Gemini.
  Google trata las peticiones según su
  [Anexo de tratamiento de datos para productos en los que Google es encargado del tratamiento](https://business.safety.google/processorterms/)
  y **no las usa para mejorar sus productos**. Google conserva las peticiones y respuestas durante
  un tiempo limitado solo para detectar abusos y para comunicaciones exigidas por ley
  ([condiciones de la API de Gemini](https://ai.google.dev/gemini-api/terms)).
- Enviamos las peticiones con el almacenamiento desactivado, borramos de Google el audio subido
  justo después de usarlo y mantenemos desactivado el registro de peticiones en nuestro proyecto de
  Google.
- Google puede tratar los datos en cualquier país en el que tenga instalaciones, con las garantías
  de transferencia de ese anexo.
- **La IA puede equivocarse.** Las transcripciones, actas, responsables y plazos los genera una IA,
  no una persona. MinuteFlow comprueba las citas, los responsables y los plazos con la
  transcripción, marca lo que no ha podido verificar y separa las sugerencias de la IA de lo que se
  acordó realmente. Comprueba lo importante con la grabación.
- Los nombres de interlocutores que sugiere la IA solo pasan a ser nombres cuando los confirmas.
  MinuteFlow **no** crea huellas de voz ni identifica a las personas por su voz.
- MinuteFlow no toma decisiones sobre ti con efectos jurídicos o similarmente significativos
  (art. 22 RGPD), y no usamos tus grabaciones, transcripciones ni preguntas para entrenar modelos de
  IA.

---

## 9. Google Drive (opcional)

Puedes usar MinuteFlow sin Google Drive. Si lo conectas, inicias sesión con Google en la ventana
segura de inicio de sesión de Apple, y MinuteFlow pide:

| Permiso | Para qué |
| --- | --- |
| **Ver, editar, crear y eliminar solo los archivos de Google Drive que uses con esta app** (`drive.file`) | Para guardar en una carpeta de MinuteFlow las transcripciones, actas y grabaciones que decidas subir. MinuteFlow no puede ver ningún otro archivo de tu Drive. |
| **Tu dirección de correo** | Para mostrar qué cuenta de Google está conectada. |
| **Inicio de sesión básico** (`openid`) | Para iniciar tu sesión. |

Cómo trata MinuteFlow tus datos de Google:

- Tus tokens de Google se quedan en el **llavero de iOS** de tu iPhone. Las subidas van
  **directamente de tu iPhone a Google**. Nuestro servidor de procesamiento nunca recibe tus tokens
  de Google, tu correo ni tus archivos de Drive.
- MinuteFlow sube archivos **solo después de que revises y confirmes** un envío. Nunca se sube nada
  automáticamente.
- Los archivos nuevos son **privados**. Otras personas solo obtienen acceso si escribes su correo y
  lo confirmas, y el aviso por correo de Google está desactivado salvo que lo actives.
- **Disconnect** (Settings → Google Drive) revoca el acceso de MinuteFlow en Google y borra los
  tokens de tu iPhone. También puedes quitar el acceso en
  [myaccount.google.com/permissions](https://myaccount.google.com/permissions). Los archivos ya
  subidos siguen en tu Drive hasta que los borres.
- No usamos los datos de usuario de Google para publicidad, no los vendemos, no dejamos que nadie
  los lea y no los usamos para entrenar modelos de IA.

El uso y la transferencia por parte de MinuteFlow de la información recibida de las API de Google
cumplen la
[Política de datos de usuario de los servicios de API de Google](https://developers.google.com/terms/api-services-user-data-policy),
incluidos los requisitos de uso limitado.

**Avanzado:** si configuras tu propio cliente de inicio de sesión de Google Cloud en Settings →
Google Drive → Advanced, el inicio de sesión pasa por tu proyecto de Google Cloud. Todo lo demás
de esta sección sigue igual.

---

## 10. Compartir con otras apps

Cuando compartes con la hoja de compartir de iOS (por ejemplo Mail, WhatsApp, Mensajes, AirDrop o
Archivos), MinuteFlow crea los archivos en tu iPhone y se los entrega a la app que eliges. A partir
de ahí se aplica la política de privacidad de esa app. MinuteFlow solo anota en tu historial de
envíos que entregaste los archivos a esa app.

---

## 11. Lo que no hacemos

- No hay cuenta de MinuteFlow: nunca pedimos tu nombre, correo ni teléfono.
- Sin publicidad, sin analítica, sin servicios de informes de errores ni de seguimiento, sin
  identificador publicitario.
- Sin acceso a tus contactos, fotos, ubicación ni calendario.
- Sin envíos ni subidas automáticos. Nadie recibe un correo sobre una reunión salvo que la compartas
  con esa persona y elijas avisarle.
- Nunca vendemos datos.

---

## 12. Permisos

| Permiso | Para qué |
| --- | --- |
| Micrófono | Grabar reuniones. Solo mientras grabas. |
| Audio en segundo plano | Seguir grabando cuando se bloquea la pantalla o cambias de app. |
| Notificaciones (opcional) | Recordatorios de tareas, creados en tu iPhone. |
| Red local | Solo si te conectas a un servidor de procesamiento en tu propia red. |
| Archivos (al elegir Import audio) | Leer el archivo de audio que eliges. |

---

## 13. Bases legales

| Finalidad | Base legal (RGPD) |
| --- | --- |
| Transcribir, redactar actas y responder a tus preguntas; subir a Drive cuando lo confirmas | Ejecución de un contrato contigo, art. 6.1.b |
| Registros de dispositivo, límites de gasto, seguridad y registros técnicos | Interés legítimo en ofrecer un servicio seguro y asequible y evitar abusos, art. 6.1.f |

En cuanto a la voz y las palabras de otras personas en tus grabaciones, tú eliges qué grabas y qué
procesas; tratamos ese contenido solo siguiendo tus instrucciones y para las finalidades
anteriores.

---

## 14. Plazos de conservación

| Datos | Se conservan |
| --- | --- |
| Todo lo que está en tu iPhone | Hasta que lo borres, borres todos los datos de MinuteFlow o elimines la app |
| Audio, resultados y datos de la reunión en nuestro servidor | Hasta que tu iPhone confirma la recepción; si no, 48 horas (excepcionalmente hasta 3 días) |
| Preguntas y respuestas de Ask en nuestro servidor | No se guardan |
| Registro de dispositivo y uso de IA (fecha, hora y coste) | Mientras funcione el servicio, o hasta que nos pidas borrarlos |
| Registros del servidor y del alojamiento (Google Cloud) | Hasta 30 días |
| Peticiones y respuestas que Google conserva para detectar abusos | Un tiempo limitado fijado por Google |
| Archivos que subiste a Google Drive | En tu Drive hasta que los borres |

---

## 15. Quién más recibe datos

- **Google**: la IA Gemini y el alojamiento de nuestro servidor de procesamiento en Bélgica. <https://policies.google.com/privacy>
- **Google Drive**, solo si lo conectas, con tu propia cuenta de Google.
- **Apple**, que distribuye la app y, si usas la copia de seguridad de iCloud, guarda las copias de
  tu iPhone.
- Las apps que elijas en la hoja de compartir.

Nadie más.

---

## 16. Borrar tus datos

- **Una reunión:** bórrala en la app.
- **Todo lo de este iPhone:** Settings → Privacy & data → **Delete all MinuteFlow data**
  (pregunta dos veces), o elimina la app.
- **Nuestro servidor:** el contenido de las reuniones se borra al entregarlo (ver sección 6). Para
  borrar tu registro de dispositivo y tu historial de uso, escribe a aissa.b.code@gmail.com.
- **Google Drive:** borra los archivos en tu Drive; desconéctalo en la app o en
  myaccount.google.com/permissions.

---

## 17. Seguridad

Las conexiones con nuestro servidor usan HTTPS (solo se permite HTTP sin cifrar con un servidor de
tu propia red local). Los tokens de acceso se guardan en el servidor solo como hashes
irreversibles, y en tu iPhone en el llavero. Cada instalación solo puede acceder a sus propias
grabaciones y trabajos. La clave de la API de Gemini está solo en el servidor, nunca en la app.

---

## 18. Menores

MinuteFlow está pensada para adultos y para el trabajo. No está dirigida a menores y no tratamos a
sabiendas datos de menores, salvo los que puedan aparecer en una grabación que hagas tú.

---

## 19. Tus derechos

Puedes pedirnos acceso, rectificación, supresión, limitación o una copia de tus datos personales, y
oponerte al tratamiento basado en el interés legítimo, escribiendo a aissa.b.code@gmail.com. La
mayoría de tus datos están solo en tu iPhone, donde puedes verlos, exportarlos y borrarlos tú
mismo. También puedes reclamar ante la autoridad de protección de datos (en España, la Agencia
Española de Protección de Datos, [aepd.es](https://www.aepd.es)).

---

## 20. Cambios

Si esta política cambia, la nueva versión se publicará en esta dirección con una nueva fecha.
