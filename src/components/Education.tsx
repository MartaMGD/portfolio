import { profile } from "@/data/profile";

export function Education() {
  return (
    <section
      id="education"
      className="border-t border-[var(--color-subtle)] py-20"
    >
      <h2 className="text-xs font-semibold uppercase tracking-[0.25em] gradient-text">
        Formación
      </h2>
      <ul className="mt-8 space-y-4">
        {profile.education.map((item) => (
          <li
            key={item.title}
            className="flex flex-col gap-1 rounded-xl border border-[var(--color-subtle)] bg-[var(--color-card)]/60 p-4 backdrop-blur-sm sm:flex-row sm:items-baseline sm:justify-between"
          >
            <div>
              <p className="text-base font-medium">{item.title}</p>
              <p className="text-sm text-[var(--color-muted)]">
                {item.institution}
              </p>
            </div>
            <p className="font-mono text-xs text-[var(--color-muted)] sm:text-sm">
              {item.period}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
