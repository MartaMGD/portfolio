import { profile } from "@/data/profile";

export function Highlights() {
  return (
    <section
      id="highlights"
      className="border-t border-[var(--color-subtle)] py-20"
    >
      <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--color-foreground)]">
        IA aplicada & trabajo destacado
      </h2>
      <p className="mt-4 max-w-2xl text-sm text-[var(--color-muted)]">
        Una selección de proyectos donde combino una base sólida de producto con
        la nueva frontera del software impulsado por IA.
      </p>

      <ul className="mt-10 grid gap-4 sm:grid-cols-2">
        {profile.showcase.map((item) => (
          <li
            key={item.title}
            className="group relative overflow-hidden rounded-2xl border border-[var(--color-subtle)] bg-[var(--color-card)]/60 p-6 backdrop-blur-sm transition-all hover:border-[var(--color-accent-to)]/60 hover:shadow-lg hover:shadow-[var(--color-glow)]"
          >
            <span className="mb-3 inline-block rounded-full bg-gradient-to-r from-[var(--color-accent-from)] to-[var(--color-accent-to)] px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white">
              {item.category}
            </span>
            <h3 className="text-base font-semibold leading-tight">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-[var(--color-foreground)]/75">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
