// =============================================================================
// PROFILE DATA — Edita este archivo para personalizar tu portfolio.
// =============================================================================

export const profile = {
  // ----- DATOS BÁSICOS -----
  name: "Marta González",
  role: "Frontend Software Engineer",
  tagline:
    "Construyo interfaces web limpias, accesibles y performantes con React, TypeScript y Next.js.",
  location: "España",
  email: "m.gonzalez@atrinium.com",

  // ----- ENLACES -----
  socials: {
    linkedin: "https://www.linkedin.com/in/marta-gonzalez/", // ← edita la URL
    github: "https://github.com/martagonzalez", // ← edita la URL
  },

  // ----- SOBRE MÍ -----
  about: [
    "Soy desarrolladora frontend especializada en construir productos web modernos con React, TypeScript y Next.js. Me apasiona el detalle, la calidad del código y crear experiencias que se sientan rápidas, accesibles y elegantes.",
    "Trabajo a diario con monorepos grandes, sistemas de diseño y arquitecturas escalables. Disfruto colaborando en equipo, revisando código y dejando las bases listas para que otros puedan construir encima sin fricción.",
    "Fuera del teclado, me gusta aprender de diseño de producto y mantenerme al día con todo lo que se mueve en el ecosistema frontend.",
  ],

  // ----- SKILLS / STACK -----
  skills: [
    "React",
    "TypeScript",
    "Next.js",
    "Chakra UI",
    "Tailwind CSS",
    "Node.js",
    "Git",
    "Testing (Vitest, Playwright)",
    "i18n (Lingui)",
  ],

  // ----- EXPERIENCIA -----
  experience: [
    {
      company: "Atrinium",
      role: "Frontend Software Engineer",
      period: "2024 — Actualidad",
      location: "Remoto",
      description:
        "Desarrollo del frontend de Hermes, una plataforma SaaS para el sector asegurador. Trabajo con Next.js, TypeScript, Chakra UI y un monorepo Turborepo. Implementación de features end-to-end, revisión de PRs y mantenimiento del sistema de diseño.",
      stack: ["Next.js", "TypeScript", "Chakra UI", "Turborepo", "Lingui"],
    },
    {
      company: "Empresa Anterior",
      role: "Frontend Developer",
      period: "2022 — 2024",
      location: "Ubicación",
      description:
        "Descripción breve del rol: qué construiste, con qué stack y qué impacto tuvo. Sustituye este texto por tu experiencia real.",
      stack: ["React", "TypeScript", "Redux"],
    },
    {
      company: "Primera Empresa",
      role: "Junior Frontend Developer",
      period: "2020 — 2022",
      location: "Ubicación",
      description:
        "Primera experiencia profesional. Describe los proyectos en los que participaste y lo que aprendiste.",
      stack: ["JavaScript", "HTML", "CSS"],
    },
  ],
} as const;

export type Profile = typeof profile;
