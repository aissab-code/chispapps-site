---
title: Política de privacidad — The Botanical Eye
lang: es
---

# Política de privacidad — The Botanical Eye (El Ojo Botánico)

**Última actualización:** 14 de octubre de 2026

Esta política explica qué hace The Botanical Eye («la app») con los datos personales. La app
identifica plantas a partir de una foto, revisa su salud, guarda en tu teléfono un jardín con
tus plantas y te recuerda cuándo cuidarlas.

Cumplimos el Reglamento General de Protección de Datos (**RGPD**) y la normativa española de
protección de datos.

---

## 1. Responsable

- **Responsable:** Aissa Bamogo Redondo (autónoma, España)
- **Contacto:** aissa.b.code@gmail.com

---

## 2. No creas ninguna cuenta

La app no tiene registro, ni inicio de sesión, ni contraseña. La primera vez que la abres crea
un **identificador aleatorio** para tu instalación (un UUID). Sus ocho primeros caracteres
aparecen en **Perfil › Tu ID**, por ejemplo `3FA8-5F64`.

Nunca te pedimos ni recibimos tu email ni tu teléfono.

---

## 3. Lo que se queda en tu teléfono

Esto se guarda solo en tu dispositivo y nunca se sube a nuestros servidores:

- **Tu jardín:** las fotos de plantas que guardas, sus nombres y apodos, tus notas,
  diagnósticos, consejos de cuidado, historial de progreso y las preguntas que hiciste sobre
  cada planta con sus respuestas.
- **Tus recordatorios:** tu teléfono los programa como notificaciones locales.
- El nombre que escribes en tu perfil, tus ajustes de idioma y apariencia, y tus contadores de
  escaneos y preguntas gratis.

**Perfil › Borrar todos mis datos** elimina todo esto de tu teléfono de una vez.

Todo lo de este apartado se borra al desinstalar la app o al borrar sus datos.

---

## 4. Lo que guardamos en nuestros servidores

Nuestro servidor funciona sobre Supabase. Asociado al identificador aleatorio de tu
instalación guardamos:

- **Registro de la instalación:** el identificador, la plataforma (iOS o Android) y cuándo se
  abrió la app por primera y por última vez.
- **Contadores de uso:** cuántos análisis hizo ese identificador cada día, y un recuento
  diario asociado a un **resumen irreversible (hash) de tu dirección IP** (nunca guardamos la
  dirección). Sirven para evitar abusos y se borran pasada una semana aproximadamente.
- **Acceso gratuito que te damos:** si te regalamos Premium, el nombre con el que te
  anotamos y las fechas de inicio y fin.
- **Códigos de colaboradores:** si canjeas el código de un colaborador —por ejemplo, el
  código de «1 mes gratis» de un influencer— registramos qué colaborador era y los importes
  de los pagos posteriores, para pagarle una comisión sobre tu suscripción durante un máximo
  de 12 meses. El colaborador solo ve totales: cuántas personas usaron su código y cuánto ha
  ganado. Nunca quién eres.

- **Denuncias de contenido de IA:** si pulsas **Denunciar** en un resultado o una respuesta,
  guardamos lo que dijo la IA (y tu pregunta, si es una respuesta), el nombre de la planta, el
  motivo que elegiste, el identificador de tu instalación y el idioma, la plataforma y la
  versión de la app. Leemos las denuncias para encontrar y corregir resultados erróneos,
  ofensivos o peligrosos. No se incluye ninguna foto.

**No** guardamos las fotos de plantas que escaneas ni las preguntas que haces (salvo que
denuncies una respuesta, como se indica arriba).

---

## 5. Inteligencia artificial

La app usa inteligencia artificial —los **modelos Gemini de Google**— para identificar
plantas, valorar su salud y redactar consejos de cuidado.

- **Cada identificación, diagnóstico y consejo lo genera la IA**, no una persona. Nadie los
  revisa antes de que los veas.
- **La IA puede equivocarse.** No confíes en la app para decidir si una planta se puede comer,
  tocar o tener cerca de niños o mascotas. Algunas plantas son tóxicas. Consulta a un
  profesional antes de actuar en cualquier cosa importante.
- **Sin decisiones automatizadas sobre ti.** La app no toma decisiones con efectos jurídicos o
  similares (art. 22 RGPD).
- **Puedes denunciar contenido de IA.** Cada resultado y cada respuesta tienen un enlace
  **Denunciar**; en el apartado 4 se explica qué contiene una denuncia.
- **No** usamos tus fotos, tus preguntas ni tus resultados para entrenar modelos de IA.

---

## 6. Fotos de plantas, preguntas y análisis con IA

Cuando escaneas una planta, la foto viaja desde la app a nuestro servidor, que la reenvía a la
**API Gemini de Google** junto con tu idioma y, si sigues el progreso de una planta guardada,
los diagnósticos anteriores de esa planta. Antes, la app reduce la foto (unos 1600 píxeles en
el lado largo). El resultado vuelve a tu teléfono. Solo conservamos la foto mientras dura esa
petición y nunca la guardamos.

Cuando **haces una pregunta sobre una planta**, la app envía tu pregunta a nuestro servidor
junto con lo que ya sabe de esa planta (su nombre, salud, diagnóstico y consejos de cuidado) y
tus últimas preguntas y respuestas sobre ella. Nuestro servidor reenvía ese texto a la API
Gemini; no se envía ninguna foto. La respuesta vuelve a tu teléfono y no guardamos ni la
pregunta ni la respuesta.

Antes de que la primera foto salga de tu teléfono, la app te lo explica, te dice que la recibe
Google y te pide permiso. Si eliges «Ahora no», no se envía nada.

Google trata la petición según sus propias condiciones: <https://ai.google.dev/gemini-api/terms>
y <https://policies.google.com/privacy>. Usamos el servicio de pago de Gemini, con el que
Google no usa el contenido para mejorar sus productos.

> Fotografía solo la planta. Todo lo demás que salga en la imagen —una cara, un documento, el
> interior de tu casa— se envía con ella. Del mismo modo, no incluyas datos personales en tus
> preguntas.

---

## 7. Base legal

| Finalidad | Base legal (RGPD) |
| --- | --- |
| Analizar las fotos que envías y responder a tus preguntas | Ejecución de un contrato, art. 6.1.b |
| Revisar el contenido de IA que denuncias | Interés legítimo en que las respuestas de la IA sean correctas y seguras, y normas de las tiendas para apps con IA, art. 6.1.f |
| Límites de uso y prevención de abusos | Interés legítimo en mantener el servicio disponible, art. 6.1.f |
| Regalar Premium a las personas que elegimos | Interés legítimo, art. 6.1.f |
| Pagar la comisión al colaborador cuyo código canjeaste | Interés legítimo en gestionar el programa de colaboradores, art. 6.1.f |
| Registros fiscales y contables | Obligación legal, art. 6.1.c |

**No** usamos tus datos para publicidad ni para elaborar perfiles, y **no** los vendemos.

---

## 8. Quién más trata los datos

- **Supabase, Inc.** — aloja nuestra base de datos y funciones de servidor. <https://supabase.com/privacy>
- **Google LLC (API Gemini)** — analiza las fotos de plantas y responde a preguntas sobre
  ellas. <https://policies.google.com/privacy>
- **RevenueCat, Inc.** — registra qué suscripción tienes, asociada al identificador de tu
  instalación. <https://www.revenuecat.com/privacy>
- **Apple** y **Google Play** — distribuyen la app y cobran los pagos. Nunca vemos tus datos
  de pago. <https://www.apple.com/legal/privacy/> · <https://policies.google.com/privacy>

La app no contiene SDK de publicidad ni de analítica de terceros.

---

## 9. Transferencias internacionales

Estos proveedores pueden tratar datos en la Unión Europea, el Reino Unido, Estados Unidos u
otros países donde operan. Las transferencias fuera del EEE se amparan en el Marco de
Privacidad de Datos UE-EE. UU. o en las Cláusulas Contractuales Tipo de la Comisión Europea.

---

## 10. Conservación

- **Fotos de plantas y preguntas:** no las conservamos; solo durante los segundos que dura el
  análisis.
- **Denuncias de contenido de IA:** 12 meses; después se borran.
- **Contadores de uso y hashes de IP:** una semana aproximadamente.
- **Registro de la instalación y accesos regalados:** hasta que nos pidas borrarlos.
- **Registros de códigos de colaboradores:** el tiempo que exija la normativa fiscal y contable.
- **Copias de seguridad:** los datos borrados desaparecen de las copias en un máximo de 30 días.
- **Datos en tu teléfono:** hasta que borres los datos de la app o la desinstales.

---

## 11. Tus derechos

Puedes pedirnos acceso a tus datos, rectificarlos, suprimirlos, limitar u oponerte a su
tratamiento, o recibirlos en un formato portable.

Escribe a **aissa.b.code@gmail.com** e incluye **tu ID** de Perfil › Tu ID, para que podamos
encontrar tus registros. Respondemos en un máximo de 30 días.

También puedes reclamar ante la **Agencia Española de Protección de Datos**
(<https://www.aepd.es>) o ante la autoridad de control de tu país.

---

## 12. Menores

La app es para todos los públicos y no está dirigida a menores. No recogemos a sabiendas
datos personales de menores de 14 años. Si crees que tenemos datos de un menor, escribe a
**aissa.b.code@gmail.com** y los borraremos.

---

## 13. Seguridad

- Cifrado TLS en todas las comunicaciones.
- Tablas de la base de datos protegidas con seguridad a nivel de fila; la app solo llega a las
  funciones que necesita.
- Todas las claves de proveedores están en el servidor; ninguna se puede leer desde la app.

Ningún sistema es perfectamente seguro. Si una brecha afecta a tus datos, te avisaremos a ti
y a la autoridad de control como exigen los arts. 33 y 34 RGPD.

---

## 14. Cambios

Actualizamos esta política cuando cambia la app. La fecha de arriba siempre refleja el último
cambio.

---

## 15. Contacto

aissa.b.code@gmail.com
