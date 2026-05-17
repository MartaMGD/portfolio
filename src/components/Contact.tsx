import { profile } from "@/data/profile";
import { ArrowIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./Icons";

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-[var(--color-subtle)] py-20"
    >
      <h2 className="text-xs font-medium uppercase tracking-widest text-[var(--color-muted)]">
        Contacto
      </h2>
      <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--color-foreground)]/85">
        ¿Hablamos? Estoy abierta a oportunidades, colaboraciones o simplemente a
        compartir ideas. La forma más rápida de localizarme es por email.
      </p>

      <ul className="mt-10 divide-y divide-[var(--color-subtle)] border-y border-[var(--color-subtle)]">
        <li>
          <a
            href={`mailto:${profile.email}`}
            className="group flex items-center justify-between gap-4 py-4 transition-colors hover:text-[var(--color-foreground)]"
          >
            <span className="flex items-center gap-3 text-sm">
              <MailIcon />
              <span className="font-medium">Email</span>
              <span className="text-[var(--color-muted)]">{profile.email}</span>
            </span>
            <span className="text-[var(--color-muted)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--color-foreground)]">
              <ArrowIcon />
            </span>
          </a>
        </li>
        <li>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 py-4 transition-colors hover:text-[var(--color-foreground)]"
          >
            <span className="flex items-center gap-3 text-sm">
              <LinkedInIcon />
              <span className="font-medium">LinkedIn</span>
              <span className="text-[var(--color-muted)]">
                Conecta conmigo profesionalmente
              </span>
            </span>
            <span className="text-[var(--color-muted)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--color-foreground)]">
              <ArrowIcon />
            </span>
          </a>
        </li>
        <li>
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 py-4 transition-colors hover:text-[var(--color-foreground)]"
          >
            <span className="flex items-center gap-3 text-sm">
              <GitHubIcon />
              <span className="font-medium">GitHub</span>
              <span className="text-[var(--color-muted)]">
                Mis proyectos y código
              </span>
            </span>
            <span className="text-[var(--color-muted)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--color-foreground)]">
              <ArrowIcon />
            </span>
          </a>
        </li>
      </ul>
    </section>
  );
}
