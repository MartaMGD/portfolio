import { profile } from "@/data/profile";

export function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-[var(--color-subtle)] py-20"
    >
      <h2 className="text-xs font-medium uppercase tracking-widest text-[var(--color-muted)]">
        Experiencia
      </h2>
      <ol className="mt-8 space-y-12">
        {profile.experience.map((job) => (
          <li key={`${job.company}-${job.period}`} className="group">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-lg font-medium tracking-tight">
                {job.role}{" "}
                <span className="text-[var(--color-muted)]">· {job.company}</span>
              </h3>
              <p className="text-xs text-[var(--color-muted)] sm:text-sm">
                {job.period}
              </p>
            </div>
            <p className="mt-1 text-sm text-[var(--color-muted)]">
              {job.location}
            </p>
            <p className="mt-4 text-base leading-relaxed text-[var(--color-foreground)]/85">
              {job.description}
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {job.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full bg-[var(--color-subtle)]/60 px-2.5 py-0.5 text-xs text-[var(--color-foreground)]/75"
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
