// =============================================================================
// PROFILE DATA — Edita este archivo para personalizar tu portfolio.
// =============================================================================

export const profile = {
  // ----- DATOS BÁSICOS -----
  name: "Marta González",
  role: "Frontend × IA · 4 años construyendo producto",
  tagline:
    "Frontend developer con +4 años construyendo un SaaS B2B multi-tenant para el sector asegurador. Especializada en React, Next.js y TypeScript, integrando capacidades de LLMs y agentes basados en MCP en interfaces en producción.",
  location: "Málaga, España · Híbrido",
  email: "gonzalezduquemarta@gmail.com",
  phone: "+34 611 146 057",
  photo: "/marta.png",

  // ----- ENLACES -----
  socials: {
    linkedin: "https://linkedin.com/in/martagonzalezduque",
    github: "https://github.com/MartaMGD",
  },

  // ----- HIGHLIGHTS RÁPIDOS -----
  highlights: [
    { value: "+4 años", label: "Construyendo el mismo SaaS desde cero" },
    { value: "9", label: "Locales en producción · ~3.100 strings" },
    { value: "C1", label: "Inglés certificado Cambridge" },
  ],

  // ----- SOBRE MÍ -----
  about: [
    "Frontend developer con más de 4 años dando forma a un SaaS B2B multi-tenant para el sector asegurador — desde la arquitectura inicial hasta una plataforma que da servicio a varias aseguradoras europeas.",
    "Miembro del equipo fundador del producto en Atrinium. Tomé decisiones de arquitectura frontend clave, lideré features complejas de cero a producción y establecí estándares de documentación y revisión de código que mejoraron la consistencia del equipo.",
    "Actualmente integrando APIs de LLMs (Claude, OpenAI) y agentes basados en MCP directamente en producto — combinando una base sólida de producto con la nueva frontera del software impulsado por IA.",
  ],

  // ----- STACK TÉCNICO (agrupado) -----
  skillGroups: [
    {
      title: "Core",
      items: ["React", "Next.js", "TypeScript", "JS ES6+"],
    },
    {
      title: "IA & APIs",
      items: ["Claude API", "Agentes IA", "MCP", "REST APIs", "TanStack Query"],
    },
    {
      title: "Estado & UI",
      items: ["Zustand", "Redux", "Chakra UI", "Tailwind", "Emotion", "Storybook"],
    },
    {
      title: "Tooling",
      items: ["Turborepo", "Lingui i18n", "Sentry", "Git / GitHub", "Figma", "Confluence"],
    },
  ],

  // ----- LO QUE APORTO -----
  strengths: [
    "Code review",
    "Refactoring",
    "Mentoring",
    "Arquitectura",
    "i18n a escala",
    "Multi-tenant",
    "Design systems",
    "Clean code",
    "Prompt engineering",
    "UX para LLMs",
  ],

  // ----- IDIOMAS -----
  languages: [
    { name: "Español", level: "Nativo" },
    { name: "Inglés", level: "C1 Cambridge" },
    { name: "Francés", level: "Intermedio" },
  ],

  // ----- TRABAJO DESTACADO + IA -----
  showcase: [
    {
      category: "IA",
      title: "Especialista en Claude (Anthropic)",
      description:
        "Construcción de agentes conversacionales y workflows agénticos sobre la Claude API, con dominio práctico de gestión de contexto, tool use, streaming y razonamiento multi-paso.",
    },
    {
      category: "IA",
      title: "MCP (Model Context Protocol)",
      description:
        "Implementación de servidores y clientes MCP para conectar agentes de IA con herramientas externas, sistemas de archivos y APIs — permitiendo a los agentes actuar sobre sistemas reales, no solo responder.",
    },
    {
      category: "IA",
      title: "Integración Frontend × IA",
      description:
        "Interfaces React + TypeScript que dialogan con agentes Claude en tiempo real — respuestas en streaming, gestión de estado conversacional y patrones de UX pensados específicamente para interacciones con IA dentro de un SaaS regulado.",
    },
    {
      category: "Atrinium",
      title: "Sistema granular de permisos",
      description:
        "Diseñé y entregué un modelo de control de acceso multi-capa sobre un sistema de roles existente, incluyendo una interfaz simplificada de permisos directos para usuarios que no encajan en ningún rol. Owner de los flujos ATTACH / DETACH, permisos de siniestros y operaciones de comités.",
    },
    {
      category: "Atrinium",
      title: "i18n a escala de producción",
      description:
        "Mantenimiento de ~3.100 strings fuente en 9 locales a través de Lingui + un Translation Manager externo, incluyendo el pipeline de sincronización que usa todo el equipo.",
    },
    {
      category: "Atrinium",
      title: "Dashboards en tiempo real",
      description:
        "Dashboards de pólizas y recibos filtrables sobre WebSockets de Laravel Reverb — rangos de fecha, filtros de estado, tablas paginadas con TanStack Table y una abstracción compartida BaseTable reutilizada en toda la plataforma.",
    },
  ],

  // ----- PROYECTOS PERSONALES -----
  projects: [
    {
      name: "bio-shelf",
      tagline: "Catálogo de cosmética natural curada",
      year: "2026",
      status: "En desarrollo",
      description:
        "E-commerce demo con 40 productos curados (5 categorías, sellos eco como orgánico, vegano y cruelty-free), favoritos y carrito persistentes, modo bilingüe ES/EN y formulario de contacto tipado con Zod. Hero con video en loop, parallax sutil y reveals en scroll. Pensado para enseñar arquitectura frontend moderna en un dominio que me interesa.",
      preview: "/bio-shelf-preview.mp4",
      stack: [
        "Next.js 16",
        "TypeScript",
        "Chakra UI v3",
        "TanStack Query",
        "Zustand",
        "Lingui",
        "motion",
        "React Hook Form",
        "Zod",
      ],
      repo: "https://github.com/MartaMGD/bio-shelf",
      live: undefined,
    },
  ],

  // ----- EXPERIENCIA -----
  experience: [
    {
      company: "Atrinium",
      role: "Frontend Developer Senior",
      period: "Abril 2022 — Actualidad",
      location: "Málaga · Híbrido",
      summary: "SaaS B2B para el sector asegurador",
      description:
        "Hermes — plataforma multi-tenant para gestión de pólizas, recibos y siniestros usada por varias aseguradoras europeas. Miembro del equipo fundador de producto: participé en la construcción desde sus primeras versiones hasta la arquitectura actual, adaptándolo según la empresa escalaba a nuevos tenants y mercados regulatorios.",
      bullets: [
        "Decisiones de arquitectura frontend clave: migración de Redux a TanStack Query, bases del sistema de componentes con Storybook y theming multi-tenant para 9 marcas localizadas desde un único código.",
        "Features complejas de cero a producción: formularios dinámicos con validación condicional, dashboards en tiempo real sobre WebSockets, sistema granular de permisos y operaciones de siniestros.",
        "Trabajo directo con clientes y stakeholders no técnicos, traduciendo requisitos regulatorios y de negocio a soluciones técnicas limpias.",
        "Prototipado e integración de APIs de LLMs (Anthropic, OpenAI) en el producto para features conversacionales y copilots para operadores.",
      ],
      stack: [
        "Next.js",
        "TypeScript",
        "Chakra UI",
        "TanStack Query",
        "Zustand",
        "Lingui",
        "Turborepo",
        "Laravel Reverb",
      ],
    },
  ],

  // ----- FORMACIÓN -----
  education: [
    {
      title: "Grado Superior en Desarrollo de Aplicaciones Web",
      institution: "Instituto FOC",
      period: "2025 — Actualidad",
    },
    {
      title: "Especialista en Diseño UX / UI",
      institution: "La Gauss Málaga",
      period: "2023 — 2024",
    },
    {
      title: "Bootcamp Full Stack",
      institution: "Codespace Academy",
      period: "2021 — 2022",
    },
    {
      title: "Grado en Comunicación Audiovisual",
      institution: "Universidad de Málaga",
      period: "2014 — 2018",
    },
  ],
} as const;

export type Profile = typeof profile;
