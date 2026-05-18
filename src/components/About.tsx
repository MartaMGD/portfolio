import { profile } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="border-t border-[var(--color-subtle)] py-20">
      <h2 className="text-xs font-semibold uppercase tracking-[0.25em] gradient-text">
        Sobre mí
      </h2>
      <div className="mt-8 space-y-5 text-base leading-relaxed text-[var(--color-foreground)]/90">
        {profile.about.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-12">
        <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-muted)]">
          Stack técnico
        </h3>
        <div className="mt-6 space-y-6">
          {profile.skillGroups.map((group) => (
            <div key={group.title}>
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[var(--color-foreground)]/60">
                {group.title}
              </p>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-[var(--color-subtle)] bg-[var(--color-card)]/60 px-3 py-1 text-sm text-[var(--color-foreground)]/85 backdrop-blur-sm transition-colors hover:border-[var(--color-accent-to)] hover:text-[var(--color-accent-to)]"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12 grid gap-10 sm:grid-cols-2">
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-muted)]">
            Lo que aporto
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {profile.strengths.map((s) => (
              <li
                key={s}
                className="rounded-md bg-gradient-to-r from-[var(--color-accent-from)]/15 to-[var(--color-accent-to)]/15 px-2.5 py-1 text-xs font-medium text-[var(--color-foreground)]/90"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-muted)]">
            Idiomas
          </h3>
          <ul className="mt-4 space-y-2">
            {profile.languages.map((lang) => (
              <li
                key={lang.name}
                className="flex items-baseline justify-between border-b border-dashed border-[var(--color-subtle)] pb-2 text-sm"
              >
                <span className="font-medium">{lang.name}</span>
                <span className="text-[var(--color-muted)]">{lang.level}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
