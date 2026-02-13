# 📂 PROYECTO: PROTOCOLO INCENDIO
**Tipo:** Experiencia Web Cinematográfica (Single Page Application)
**Stack:** Astro + Tailwind CSS + Vanilla JS (Audio Sync)
**Vibe:** "Christopher Nolan Romántico". Oscuro, elegante, misterioso, emocional.

---

## 1. GUIÓN DE NARRACIÓN (VOZ EN OFF)
**Instrucciones para grabación:** Tono íntimo, ritmo pausado, cerca del micrófono. Respetar los silencios.

**(Inicio - Silencio o música ambiental *in crescendo*)**

"Falta ya muy poco para que el cristal de la pantalla... se convierta en piel.

Lo que esconde este vale no es solamente un plan.
Es un acto de rebeldía contra el tiempo y la distancia. **Nos lo merecemos.**

Quiero proponerte un juego. Un juego en el que tú y yo conspiramos contra ellos para salirnos con la nuestra.
Porque hoy no podemos tocarnos,
pero muy pronto estaremos piel con piel...
y todo lo que hemos imaginado será real.
Todo.

Esto será un nuevo capítulo de nuestra historia.
Y no puedo escribirlo solo.
Imagina todo lo que podríamos hacer:

**(Cambio de tono: Evocador y descriptivo)**

Perdernos en un **escape room**, como nos perdimos la primera noche, y caminar hasta encontrarnos. Poner a prueba el ingenio, la calma y esa forma nuestra de entendernos bajo presión... o de reírnos si no nos entendemos.

O tener la **cena romántica** de San Valentín perfecta que hoy no podemos tener. Porque nosotros no necesitamos un día para celebrar lo que sentimos. Lo hacemos siempre.

También podemos desconectar las pantallas y crear algo tangible. Ensuciarnos las manos, reírnos, equivocarnos, volver a empezar… Ponernos artesanos y creativos en uno de esos **talleres** que mezclan cena, vino y cerámica o pintura. Con suerte, nos podremos llevar algo único que será muy nuestro.

O se me ocurre parar el reloj. Detener el tiempo en un **spa**, en un masaje, en un silencio compartido donde el mundo se quede fuera y solo estemos nosotros disfrutando de un tratamiento en pareja.

**(Pausa larga - Clímax emocional)**

Lo quiero todo contigo.
Todo.
Siempre con amor.
Siempre con risas.
Siempre.

**(Cierre - Vuelta a la calma)**

Todo esto son posibilidades.
Porque el regalo no es solo lo que hagamos.
El regalo también es decidir juntos cómo se escribirá este capítulo... porque me encanta pensar en el futuro y hacer planes contigo.

Si te parece bien…
podemos empezar a escribirlo.

Me gustaría invitarte a una cita para conspirar juntos.
Podría ser ahora mismo,
aunque para hoy ya tenemos plan.
¿Qué tal mañana?
¿Qué te parece si me escribes ahora y elegimos fecha?"

---

## 2. ESCALETA VISUAL (TIMELINE)
Sincronización exacta entre el audio y lo que ocurre en pantalla.

| Tiempo (aprox) | Fase | Audio (Cue) | Fondo Visual | Elementos UI (Overlay) |
| :--- | :--- | :--- | :--- | :--- |
| **00:00 - 00:15** | **INTRO** | "Falta ya muy poco..." | Negro Absoluto | Texto Terminal:<br>`> Iniciando protocolo...`<br>`> Sincronizando husos horarios...` |
| **00:15 - 00:30** | **CONTEXTO** | "Quiero proponerte un juego..." | Negro Absoluto | Fade out terminal. Aparece título sutil: `CAPÍTULO: CDMX` |
| **00:30 - 00:45** | **PLAN A** | "Perdernos en un escape room..." | **Img: Misterio/Pasillo** (Oscura) | **Ficha Técnica:**<br>`[OPCIÓN A: EL ENIGMA]`<br>`Status: Reto de complicidad`<br>`Inv: Enigma Rooms / Escape 60` |
| **00:45 - 00:55** | **PLAN B** | "O tener la cena romántica..." | **Img: Cena/Luces** (Bokeh) | **Ficha Técnica:**<br>`[OPCIÓN B: CELEBRACIÓN]`<br>`Status: San Valentín Real`<br>`Inv: Rosetta / Ling Ling / Blanco Colima` |
| **00:55 - 01:05** | **PLAN C** | "Desconectar... talleres..." | **Img: Manos/Barro** (Textura) | **Ficha Técnica:**<br>`[OPCIÓN C: CREACIÓN]`<br>`Status: Tangible`<br>`Inv: Huerto Roma / Art&Wine` |
| **01:05 - 01:15** | **PLAN D** | "Parar el reloj... spa..." | **Img: Agua/Vapor** (Calma) | **Ficha Técnica:**<br>`[OPCIÓN D: PAUSA]`<br>`Status: Tiempo detenido`<br>`Inv: Hela Spa / Remède` |
| **01:15 - 01:25** | **CLÍMAX** | "Lo quiero todo contigo..." | Fundido a Negro | Pantalla limpia. Solo oscuridad y la voz. |
| **01:25 - 01:35** | **EXTRAS** | "Todo esto son posibilidades..." | Negro | **Aparición de las 3 Tarjetas de Extras** (Brindis, Grabación, Sorpresa) |
| **01:35 - FIN** | **CIERRE** | "Me gustaría invitarte..." | Negro | Las tarjetas se mantienen. Aparece el **Botón Final**: `[ ACEPTAR CITA DE MAÑANA ]` |

---

## 3. BRIEFING TÉCNICO DE DESARROLLO

### A. Estilo y Dirección de Arte
* **Colores:**
    * Fondo: `bg-zinc-950` (Casi negro).
    * Texto Principal: `text-zinc-100` (Blanco roto).
    * Acentos/Líneas: `border-amber-200` (Oro pálido, opacidad baja).
* **Tipografía:**
    * **Emocional (Títulos):** *Playfair Display* (Serif).
    * **Técnica (Datos/UI):** *Courier Prime*, *Geist Mono* o similar (Monospace).
* **Imágenes:** Deben tener una capa de oscurecimiento (`bg-black/60`) o `mix-blend-mode: overlay` para que el texto blanco resalte siempre.

### B. Funcionalidad Core (Audio-Driven)
* **Inicio:** Pantalla negra con input de código. Al validar, el navegador permite reproducir el audio (`narracion.mp3`).
* **Sincronización:** Un script JS debe escuchar el `audio.currentTime`.
    * Si `currentTime > 30` -> Cambiar clase del contenedor a `bg-escape`.
    * Si `currentTime > 45` -> Cambiar clase a `bg-dinner`.
    * (Y así sucesivamente).
* **Transiciones:** Todas los cambios de fondo deben tener `transition-duration-1000` (1 segundo) para un efecto *crossfade* suave.

### C. Componentes Especiales

#### 1. Ficha Técnica (Overlay)
Durante la narración de los planes, debe aparecer en una esquina (ej: bottom-left) una caja de texto estilo "expediente secreto" con tipografía monoespaciada: