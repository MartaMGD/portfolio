import { profile } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="border-t border-[var(--color-subtle)] py-20">
      <h2 className="text-xs font-medium uppercase tracking-widest text-[var(--color-muted)]">
        Sobre mí
      </h2>
      <div className="mt-8 space-y-5 text-base leading-relaxed text-[var(--color-foreground)]/85">
        {profile.about.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-10">
        <h3 className="text-xs font-medium uppercase tracking-widest text-[var(--color-muted)]">
          Stack
        </h3>
        <ul className="mt-4 flex flex-wrap gap-2">
          {profile.skills.map((skill) => (
            <li
              key={skill}
              className="rounded-full border border-[var(--color-subtle)] px-3 py-1 text-sm text-[var(--color-foreground)]/80"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
