import { profile } from "@/data/profile";

export function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-[var(--color-subtle)] py-20"
    >
      <h2 className="text-xs font-semibold uppercase tracking-[0.25em] gradient-text">
        Experiencia
      </h2>
      <ol className="mt-10 space-y-12">
        {profile.experience.map((job) => (
          <li
            key={`${job.company}-${job.period}`}
            className="relative pl-6 sm:pl-8"
          >
            <span
              aria-hidden
              className="absolute left-0 top-2 h-3 w-3 rounded-full bg-gradient-to-br from-[var(--color-accent-from)] to-[var(--color-accent-to)] shadow-md shadow-[var(--color-glow)]"
            />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-semibold tracking-tight">
                {job.role}{" "}
                <span className="font-normal text-[var(--color-muted)]">
                  · {job.company}
                </span>
              </h3>
              <p className="font-mono text-xs text-[var(--color-muted)] sm:text-sm">
                {job.period}
              </p>
            </div>
            <p className="mt-1 text-sm text-[var(--color-muted)]">
              {job.location} · {job.summary}
            </p>
            <p className="mt-4 text-base leading-relaxed text-[var(--color-foreground)]/85">
              {job.description}
            </p>
            <ul className="mt-4 space-y-2">
              {job.bullets.map((bullet, idx) => (
                <li
                  key={idx}
                  className="relative pl-5 text-sm leading-relaxed text-[var(--color-foreground)]/80 before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-gradient-to-br before:from-[var(--color-accent-from)] before:to-[var(--color-accent-to)]"
                >
                  {bullet}
                </li>
              ))}
            </ul>
            <ul className="mt-5 flex flex-wrap gap-2">
              {job.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full bg-[var(--color-subtle)]/50 px-2.5 py-0.5 text-xs text-[var(--color-foreground)]/80"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
