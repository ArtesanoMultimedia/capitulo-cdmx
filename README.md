# capitulo-cdmx

Proyecto Astro con Tailwind CSS y View Transitions para una experiencia web cinematográfica.

## 🚀 Características

- **Estética oscura y cinematográfica**: Tema negro con tipografía serif elegante (Playfair Display)
- **View Transitions**: Transiciones suaves entre páginas
- **Animaciones al scroll**: Efectos visuales activados por Intersection Observer
- **Diseño responsive**: Optimizado para todos los dispositivos
- **Integración con WhatsApp**: Botón de contacto directo

## 📦 Instalación

```bash
npm install
```

## 🛠️ Comandos

```bash
npm run dev      # Inicia el servidor de desarrollo
npm run build    # Construye el proyecto para producción
npm run preview  # Vista previa del build de producción
```

## ⚙️ Configuración

### Código Secreto
El código secreto para acceder a la página de historia está definido en `src/pages/index.astro`:
```javascript
const SECRET_CODE = 'incendio';
```

### WhatsApp
El número de WhatsApp debe ser actualizado en `src/pages/historia.astro` (línea 103):
```astro
href="https://wa.me/5215512345678?text=..."
```
Cambia `5215512345678` por tu número real en formato internacional (sin + ni espacios).

## 📁 Estructura del Proyecto

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro      # Layout base con View Transitions
│   ├── pages/
│   │   ├── index.astro        # Página de entrada con código secreto
│   │   └── historia.astro     # Página narrativa principal
├── astro.config.mjs           # Configuración de Astro
├── tailwind.config.mjs        # Configuración de Tailwind
└── package.json
```

## 🎨 Páginas

### Index (`/`)
Pantalla de bienvenida con input para código secreto. Usa el código "incendio" para acceder.

### Historia (`/historia`)
Página narrativa con:
- Título principal "Nos hacemos incendio: CDMX"
- Secciones con animaciones al scroll
- Grid de tarjetas (Globo, Cena, Spa)
- Botón de WhatsApp para agendar cita

## 🌐 Despliegue

El proyecto puede ser desplegado en cualquier plataforma que soporte sitios estáticos:
- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

```bash
npm run build
# Los archivos generados estarán en ./dist
```