# Portfolio — Marta González

Portfolio personal construido con **Next.js 15**, **TypeScript** y **Tailwind CSS v4**. Diseño minimalista con modo claro/oscuro, totalmente responsivo y optimizado para desplegar en Vercel con un solo clic.

---

## Stack

- [Next.js 15](https://nextjs.org/) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- Tipografía [Inter](https://fonts.google.com/specimen/Inter) vía `next/font`
- Sin dependencias externas para iconos ni theming (todo es código propio)

---

## Cómo correr el proyecto en local

```bash
# 1. Instala dependencias
npm install

# 2. Arranca el servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador.

---

## Cómo editar tu información

Todo el contenido del portfolio está en **un único archivo** que puedes editar sin tocar componentes:

```
src/data/profile.ts
```

Allí encontrarás:

- `name`, `role`, `tagline`, `location`, `email`
- `socials` (LinkedIn, GitHub)
- `about` — array de párrafos para la sección "Sobre mí"
- `skills` — lista de tecnologías
- `experience` — array de empleos (rol, empresa, periodo, descripción, stack)

Edita ese archivo, guarda, y los cambios se reflejan automáticamente en la web.

### Cambiar colores

Los colores están centralizados en `src/app/globals.css` (variables CSS `--color-background`, `--color-foreground`, `--color-muted`, `--color-subtle`). Tiene dos paletas: una para modo claro y otra para `.dark`.

---

## Desplegar en Vercel

### Opción A — Desde la web de Vercel (recomendada)

1. Sube este proyecto a un repo de **GitHub** (público o privado).
2. Ve a [vercel.com/new](https://vercel.com/new) e inicia sesión con tu cuenta de GitHub.
3. Selecciona el repositorio y pulsa **Import**.
4. Vercel detecta que es Next.js automáticamente — **no toques nada**, solo dale a **Deploy**.
5. En menos de un minuto tendrás una URL pública (`https://tu-portfolio.vercel.app`).

Cada `git push` a la rama principal redeploya la web automáticamente.

### Opción B — Desde la terminal (CLI)

```bash
# 1. Instala la CLI de Vercel (solo la primera vez)
npm install -g vercel

# 2. Despliega
vercel

# 3. Cuando termines de probar, despliega a producción
vercel --prod
```

### Dominio personalizado (opcional)

Si quieres usar `tudominio.com` en lugar de `tu-portfolio.vercel.app`:

1. En el dashboard de Vercel, abre el proyecto → **Settings** → **Domains**.
2. Añade tu dominio y sigue las instrucciones DNS que te indique.
3. Vercel se encarga del HTTPS automáticamente.

---

## Estructura del proyecto

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css      ← Estilos globales + variables de color
│   │   ├── layout.tsx       ← Layout raíz (fuentes, metadata, theme script)
│   │   └── page.tsx         ← Página principal (compone las secciones)
│   ├── components/
│   │   ├── Header.tsx       ← Navegación sticky con toggle de tema
│   │   ├── Hero.tsx         ← Sección de entrada (nombre, rol, CTAs)
│   │   ├── About.tsx        ← Sobre mí + stack
│   │   ├── Experience.tsx   ← Lista de experiencia profesional
│   │   ├── Contact.tsx      ← Enlaces de contacto
│   │   ├── Footer.tsx
│   │   ├── ThemeToggle.tsx  ← Botón de modo claro/oscuro
│   │   └── Icons.tsx        ← Iconos SVG inline
│   └── data/
│       └── profile.ts       ← TODO el contenido editable está aquí
├── public/                  ← Imágenes estáticas (favicon, og-image…)
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

---

## Próximos pasos sugeridos

- Añadir un favicon en `public/favicon.ico`.
- Añadir una imagen Open Graph en `public/og.png` y referenciarla en `layout.tsx` para que se vea bonito al compartir en redes.
- Si quieres añadir una sección de "Proyectos", crea `src/components/Projects.tsx` y un array `projects` en `profile.ts`, luego añádelo en `src/app/page.tsx`.

---

Hecho con Next.js + Tailwind CSS.
