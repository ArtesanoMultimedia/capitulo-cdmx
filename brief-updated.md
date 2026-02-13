# 📂 PROYECTO: "ALQUIMIA / PROTOCOLO INCENDIO"
**Tipo:** Experiencia Web Cinematográfica (Audio-Driven Single Page Application)
**Estética:** Neo-Classical Digital / Abstract Art / Generative Design
**Tech Stack:** Astro, Tailwind CSS, GSAP (GreenSock), Canvas API / SVG Filters.

---

## 1. CONCEPTO VISUAL Y DIRECCIÓN DE ARTE
El proyecto abandona la fotografía de stock para abrazar el **Motion Graphics Abstracto**.
La narrativa visual se basa en **Dos Orbes de Luz (Tú y Ella)** que interactúan, orbitan, chocan y se transforman según la narración.

### Sistema de Diseño
* **Colores:**
    * `bg-coal`: `#101010` (Carbón profundo, textura de papel granulado sutil).
    * `text-cream`: `#F5F1E6` (Color hueso/papel antiguo).
    * `accent-gold`: `#D4AF37` (Oro viejo metálico).
* **Tipografía:**
    * **Emocional (Títulos):** *Playfair Display* (Serif). Elegante, itálica para énfasis.
    * **Técnica (Datos UI):** *Geist Mono* o *Courier Prime*. Pequeña, para coordenadas y metadatos.
* **Metáfora Visual (Core):**
    * Uso de **Filtros SVG (Gooey Effect)** para simular que los orbes son líquidos y se fusionan al tocarse.
    * Uso de **Partículas** para simular fuego/atmósfera.

---

## 2. LÓGICA DE INICIO (AUDIO UNLOCK)
**CRÍTICO:** Los navegadores bloquean el autoplay. El audio NO debe arrancar al cargar la página.

1.  **Estado 0 (Silencio):** Pantalla oscura. Un punto de luz "respira" en el centro. Input para código.
2.  **Interacción:** Usuario introduce código + Click en "ENTRAR".
3.  **Trigger:**
    * Desbloqueo del `AudioContext`.
    * `audio.play()` inicia inmediatamente.
    * El punto de luz explota (Flash suave) y da paso a la experiencia.

---

## 3. ESCALETA DE SINCRONIZACIÓN (TIMELINE)
La web es una "película" controlada por el tiempo del audio (`audio.currentTime`).

| Tiempo | Audio (Cue) | Estado Visual (Motion Graphics) | Elementos UI (Texto Overlay) |
| :--- | :--- | :--- | :--- |
| **0:00 - 0:32** | *(Piano Romántico Intro)* | **Fase 0: La Órbita.** Dos orbes de luz orbitan lentamente en el vacío, sin tocarse. | Título sutil (Fade In/Out):<br>*NOS HACEMOS INCENDIO* |
| **0:32** | "Falta ya muy poco..." | **Fase 1: La Barrera.** Aparece una línea vertical fina entre los orbes. Vibran al intentar cruzarla. | `> DISTANCIA: CRÍTICA` |
| **0:38** | "Lo que esconde este vale..." | La línea empieza a doblarse/romper. | `> INICIANDO PROTOCOLO...` |
| **0:58** | "...piel con piel." | **Fase 2: La Fusión.** Los orbes rompen la barrera y chocan. Se fusionan en uno solo gigante (Efecto Líquido/Gooey). | `> ESTADO: FUSIÓN` |
| **1:09** | "Nuevo capítulo..." | El orbe único se estabiliza y pulsa luz dorada. | `> CAPÍTULO: 01` |
| **1:21** | "Escape room..." | **Fase 3: El Laberinto.** Fondo dibuja líneas geométricas complejas. El orbe se divide en dos y navega el laberinto. | `[OPCIÓN A: EL ENIGMA]`<br>`Status: Complicidad` |
| **1:41** | "Cena romántica..." | **Fase 4: El Fuego.** Fondo oscuro. Partículas doradas suben (brasas/champán). Luz cálida parpadeante. | `[OPCIÓN B: CELEBRACIÓN]`<br>`Status: Fuego` |
| **1:54** | "Crear algo tangible..." | **Fase 5: La Materia.** Animación viscosa/orgánica. Texturas de arcilla digital manchan la pantalla. | `[OPCIÓN C: CREACIÓN]`<br>`Status: Tangible` |
| **2:22** | "Parar el reloj..." | **Fase 6: El Agua.** Slow motion total. Ondas concéntricas (Ripples) distorsionan el fondo. Azul profundo. | `[OPCIÓN D: PAUSA]`<br>`Status: Tiempo Detenido` |
| **2:37** | "Lo quiero todo contigo." | **Fase 7: El Centro.** Zoom in lento hacia un color crema cálido (papel). | Pantalla limpia. |
| **2:48** | "Cualquier plan es bueno..." | Aparece tu firma digital trazándose sola (SVG Path Animation). | `Firma: Carlos` |
| **2:56** | "Escenas fijadas..." | **Fase 8: El Manifiesto.** Diseño editorial/tipográfico. Lista elegante. | `> ARCHIVO: FIJOS` |
| **3:08** | "...un brindis..." | Icono animado minimalista: Dos copas chocando. | `ITEM: BRINDIS` |
| **3:20** | "...filmación..." | Overlay de cámara "REC" (esquinas y punto rojo parpadeando). | `ITEM: DOCUMENTAL` |
| **3:25** | "...regalo sorpresa..." | Icono animado: Un candado o sobre lacrado que palpita. | `ITEM: CLASIFICADO` |
| **3:40** | "El regalo es decidir..." | Vuelta a los dos orbes orbitando tranquilos. | `> CONSPIRACIÓN: PENDIENTE` |
| **4:01** | "Invitarte a una cita..." | Aparece el texto final: *¿CONSPIRAMOS?* | |
| **4:11** | "¿Qué tal mañana?" | Aparece el **BOTÓN FINAL**. | Botón: `[ SÍ, MAÑANA ]` |

---

## 4. BRIEFING TÉCNICO DE IMPLEMENTACIÓN

### A. Estructura de Componentes (Astro)
1.  `Layout.astro`: Contiene las fuentes y estilos globales.
2.  `IntroOverlay.astro`: El input de código inicial. Maneja el evento `click` para desbloquear audio.
3.  `Experience.astro`: El contenedor principal.
    * `<audio>`: Elemento oculto con el archivo mp3.
    * `<canvas>` o `<div id="stage">`: Donde ocurren las animaciones GSAP.
    * `UIOverlay.astro`: Capa superior absoluta para textos y datos técnicos.

### B. Animaciones (GSAP Timeline)
Usar `gsap.timeline()` pausada inicialmente. Al validar el código, hacer `audio.play()` y `timeline.play()`.
*Importante:* Sincronizar, no confiar solo en `duration`. Usar `audio.currentTime` en un `requestAnimationFrame` para asegurar que si el audio salta, la animación también (opcional, pero recomendado).

**Ejemplo de lógica para el "Efecto Gooey" (Fusión):**
```css
/* CSS Filter para fusión líquida */
.gooey-container {
  filter: url('#goo');
}
```

```html
<svg style="visibility: hidden; position: absolute;" width="0" height="0">
  <filter id="goo">
    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
    <feComposite in="SourceGraphic" in2="goo" operator="atop"/>
  </filter>
</svg>
```

C. Textos Técnicos (UI Overlay)
Los textos que indican el lugar (ej: [OPCIÓN A]) deben tener una animación de "mecanografía" (typewriter effect) cada vez que aparecen, para reforzar la idea de "datos cargando".

D. Assets
narracion_final.mp3 (Duración aprox: 4:20).

Fuentes: Playfair Display y Geist Mono (Google Fonts).

5. GUION DE NARRACIÓN (Referencia para Tiempos)
0:01 (Música de piano romántico intro).
0:32 Falta ya muy poco para que el cristal de la pantalla se convierta en piel.
0:38 Lo que esconde este vale no es solamente un plan.
0:42 Es un acto de rebeldía contra el tiempo y la distancia.
0:46 Nos lo merecemos.
0:50 Quiero proponerte un juego, un juego en el que tú y yo conspiramos contra ellos para salirnos con la nuestra.
0:58 Porque hoy no podemos tocarnos, pero muy pronto estaremos piel con piel.
1:04 Y todo lo que hemos imaginado será real, todo.
1:09 Esto será un nuevo capítulo en nuestra historia.
1:13 Y no puedo escribirlo solo.
1:17 Imagina todo lo que podríamos hacer.
1:21 Perdernos en un escape room, como nos perdimos aquella primera noche.
1:26 Y caminar hasta encontrarnos.
1:29 Poner a prueba el ingenio, la calma y esa forma nuestra de entendernos bajo presión.
1:36 O de reírnos si no nos entendemos.
1:41 O tener la cena romántica de San Valentín perfecta que hoy no podemos tener.
1:46 Porque nosotros no necesitamos un día para celebrar lo que sentimos, lo hacemos siempre.
1:54 También podemos desconectar las pantallas y crear algo tangible
1:59 Ensuciarnos las manos, reírnos, equivocarnos, volver a empezar.
2:06 Ponernos artesanos y creativos en uno de esos talleres que mezclan cena, vino y cerámica o pintura.
2:15 Con suerte nos podremos llevar algo único que será muy nuestro y existirá porque lo hicimos juntos.
2:22 O se me ocurre parar el reloj.
2:26 Detener el tiempo en un spa, en un masaje, en un silencio compartido donde el mundo se quede fuera y solo estemos nosotros disfrutando de un tratamiento en pareja.
2:37 Lo quiero todo contigo, todo.
2:42 Siempre con amor, siempre con risas, siempre contigo.
2:48 Porque sé que cualquier plan es bueno si es contigo.
2:52 Por eso estás en todos mis planes.
2:56 Aunque propongo una historia abierta, hay algunas escenas que he fijado.
3:02 La primera escena está ocurriendo ahora mismo, mientras me oyes.
3:08 Otras que habrá seguro, sea cual sea el plan, son un brindis por los amores que la distancia convierte en incendio.
3:20 Una filmación para documentar la experiencia.
3:25 Y un regalo sorpresa, una escena post-créditos que no puedo desvelarte todavía.
3:33 El resto es abierto, lo que he propuesto antes son solamente posibilidades.
3:40 Porque el regalo no es solo lo que hagamos, el regalo también es decidir juntos cómo se escribirá este capítulo.
3:49 Porque me encanta imaginar el futuro contigo y todavía más construirlo.
3:57 Si te parece bien, podemos empezar a escribirlo.
4:01 Me gustaría invitarte a una cita para conspirar juntos.
4:06 Podría ser ahora mismo, aunque para hoy ya tenemos plan.
4:11 ¿Qué tal mañana?
4:15 Escríbeme y elegimos el momento.