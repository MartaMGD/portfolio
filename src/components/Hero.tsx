import { profile } from "@/data/profile";
import { GitHubIcon, LinkedInIcon, MailIcon, MapPinIcon } from "./Icons";

export function Hero() {
  return (
    <section id="top" className="pb-20 pt-24 sm:pt-32">
      <p className="mb-6 text-sm text-[var(--color-muted)]">
        Hola, soy
      </p>
      <h1 className="text-4xl font-medium tracking-tight sm:text-5xl">
        {profile.name}.
      </h1>
      <p className="mt-3 text-xl text-[var(--color-muted)] sm:text-2xl">
        {profile.role}
      </p>
      <p className="mt-8 max-w-xl text-base leading-relaxed text-[var(--color-foreground)]/80">
        {profile.tagline}
      </p>

      <div className="mt-8 flex items-center gap-2 text-sm text-[var(--color-muted)]">
        <MapPinIcon />
        <span>{profile.location}</span>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 rounded-full bg-[var(--color-foreground)] px-5 py-2.5 text-sm font-medium text-[var(--color-background)] transition-opacity hover:opacity-90"
        >
          <MailIcon />
          Escríbeme
        </a>
        <a
          href={profile.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--color-subtle)] px-5 py-2.5 text-sm font-medium transition-colors hover:bg-[var(--color-subtle)]"
        >
          <LinkedInIcon />
          LinkedIn
        </a>
        <a
          href={profile.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--color-subtle)] px-5 py-2.5 text-sm font-medium transition-colors hover:bg-[var(--color-subtle)]"
        >
          <GitHubIcon />
          GitHub
        </a>
      </div>
    </section>
  );
}
