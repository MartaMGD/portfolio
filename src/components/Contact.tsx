import { profile } from "@/data/profile";
import { ArrowIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

const PhoneIcon = (props: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    width="18"
    height="18"
    aria-hidden="true"
    {...props}
  >
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

export function Contact() {
  const items = [
    {
      href: `mailto:${profile.email}`,
      label: "Email",
      value: profile.email,
      Icon: MailIcon,
      external: false,
    },
    {
      href: `tel:${profile.phone.replace(/\s/g, "")}`,
      label: "Teléfono",
      value: profile.phone,
      Icon: PhoneIcon,
      external: false,
    },
    {
      href: profile.socials.linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/martagonzalezduque",
      Icon: LinkedInIcon,
      external: true,
    },
    {
      href: profile.socials.github,
      label: "GitHub",
      value: "Mis proyectos y código",
      Icon: GitHubIcon,
      external: true,
    },
  ];

  return (
    <section
      id="contact"
      className="border-t border-[var(--color-subtle)] py-20"
    >
      <h2 className="text-xs font-semibold uppercase tracking-[0.25em] gradient-text">
        Contacto
      </h2>
      <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--color-foreground)]/90">
        ¿Hablamos? Estoy abierta a oportunidades, colaboraciones o simplemente a
        compartir ideas. La forma más rápida de localizarme es por email.
      </p>

      <ul className="mt-10 grid gap-3 sm:grid-cols-2">
        {items.map(({ href, label, value, Icon, external }) => (
          <li key={label}>
            <a
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-4 rounded-2xl border border-[var(--color-subtle)] bg-[var(--color-card)]/60 p-4 backdrop-blur-sm transition-all hover:border-[var(--color-accent-to)] hover:shadow-md hover:shadow-[var(--color-glow)]"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-accent-from)] to-[var(--color-accent-to)] text-white">
                <Icon />
              </span>
              <span className="flex-1">
                <span className="block text-sm font-semibold">{label}</span>
                <span className="block truncate text-xs text-[var(--color-muted)]">
                  {value}
                </span>
              </span>
              <span className="text-[var(--color-muted)] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--color-accent-to)]">
                <ArrowIcon />
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
