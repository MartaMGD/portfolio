import Image from "next/image";
import { profile } from "@/data/profile";
import { GitHubIcon, LinkedInIcon, MailIcon, MapPinIcon } from "./Icons";

export function Hero() {
  return (
    <section id="top" className="pb-20 pt-20 sm:pt-28">
      <div className="flex flex-col items-start gap-8 sm:flex-row sm:items-center sm:gap-10">
        <div className="relative shrink-0 animate-float">
          <div
            aria-hidden
            className="absolute -inset-2 rounded-full bg-gradient-to-br from-[var(--color-accent-from)] to-[var(--color-accent-to)] opacity-70 blur-xl"
          />
          <div className="relative h-32 w-32 overflow-hidden rounded-full border-2 border-[var(--color-accent-to)]/40 shadow-2xl sm:h-36 sm:w-36">
            <Image
              src={profile.photo}
              alt={`Foto de ${profile.name}`}
              width={300}
              height={300}
              priority
              className="absolute left-1/2 top-[-6%] h-[125%] w-auto max-w-none -translate-x-1/2 object-cover"
            />
          </div>
        </div>

        <div>
          <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-[var(--color-muted)]">
            Hola, soy
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            <span className="gradient-text">{profile.name}</span>
          </h1>
          <p className="mt-2 text-lg font-medium text-[var(--color-foreground)]/90 sm:text-xl">
            {profile.role}
          </p>
        </div>
      </div>

      <p className="mt-8 max-w-2xl text-base leading-relaxed text-[var(--color-foreground)]/85">
        {profile.tagline}
      </p>

      <div className="mt-6 flex items-center gap-2 text-sm text-[var(--color-muted)]">
        <MapPinIcon />
        <span>{profile.location}</span>
      </div>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a
          href={`mailto:${profile.email}`}
          className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-[var(--color-accent-from)] to-[var(--color-accent-to)] px-6 py-2.5 text-sm font-semibold text-[#1a0b2e] shadow-lg shadow-[var(--color-glow)] transition-transform hover:scale-[1.03]"
        >
          <MailIcon />
          Escríbeme
        </a>
        <a
          href={profile.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--color-subtle)] bg-[var(--color-card)]/60 px-5 py-2.5 text-sm font-medium backdrop-blur-sm transition-colors hover:border-[var(--color-accent-to)] hover:text-[var(--color-accent-to)]"
        >
          <LinkedInIcon />
          LinkedIn
        </a>
        <a
          href={profile.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--color-subtle)] bg-[var(--color-card)]/60 px-5 py-2.5 text-sm font-medium backdrop-blur-sm transition-colors hover:border-[var(--color-accent-to)] hover:text-[var(--color-accent-to)]"
        >
          <GitHubIcon />
          GitHub
        </a>
      </div>

      <dl className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {profile.highlights.map((item) => (
          <div
            key={item.value}
            className="rounded-2xl border border-[var(--color-subtle)] bg-[var(--color-card)]/60 p-5 backdrop-blur-sm"
          >
            <dt className="text-2xl font-semibold text-[var(--color-foreground)]">
              {item.value}
            </dt>
            <dd className="mt-1 text-xs text-[var(--color-muted)]">
              {item.label}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
