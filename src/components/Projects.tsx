import { profile } from "@/data/profile";
import { ArrowIcon, GitHubIcon } from "./Icons";

export function Projects() {
  return (
    <section
      id="proyectos"
      className="border-t border-[var(--color-subtle)] py-20"
    >
      <h2 className="text-xs font-semibold uppercase tracking-[0.25em] gradient-text">
        Proyectos personales
      </h2>
      <p className="mt-4 max-w-2xl text-sm text-[var(--color-muted)]">
        Lo que construyo fuera del trabajo para explorar stack, dominio y diseño.
      </p>

      <ol className="mt-10 space-y-6">
        {profile.projects.map((project) => (
          <li
            key={project.name}
            className="group relative overflow-hidden rounded-2xl border border-[var(--color-subtle)] bg-[var(--color-card)]/60 backdrop-blur-sm transition-all hover:border-[var(--color-accent-to)]/60 hover:shadow-lg hover:shadow-[var(--color-glow)]"
          >
            {project.preview && (
              <div className="relative aspect-[16/9] overflow-hidden border-b border-[var(--color-subtle)] bg-[var(--color-subtle)]/30">
                <video
                  src={project.preview}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  aria-label={`Preview de ${project.name}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            )}

            <div className="p-6 sm:p-8">
              <div className="flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-wider">
                <span className="rounded-full bg-gradient-to-r from-[var(--color-accent-from)] to-[var(--color-accent-to)] px-2.5 py-0.5 text-white">
                  {project.status}
                </span>
                <span className="font-mono text-[var(--color-muted)]">
                  {project.year}
                </span>
              </div>

              <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
                {project.name}
              </h3>
              <p className="mt-1 text-sm text-[var(--color-muted)]">
                {project.tagline}
              </p>

              <p className="mt-5 text-base leading-relaxed text-[var(--color-foreground)]/85">
                {project.description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full bg-[var(--color-subtle)]/50 px-2.5 py-0.5 text-xs text-[var(--color-foreground)]/80"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                <ProjectLink
                  href={project.repo}
                  icon={<GitHubIcon />}
                  label="Código"
                />
                {project.live && (
                  <ProjectLink
                    href={project.live}
                    icon={<ArrowIcon />}
                    label="Ver demo"
                    primary
                  />
                )}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

type ProjectLinkProps = {
  href: string;
  icon: React.ReactNode;
  label: string;
  primary?: boolean;
};

function ProjectLink({ href, icon, label, primary = false }: ProjectLinkProps) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all";
  const variant = primary
    ? "bg-gradient-to-r from-[var(--color-accent-from)] to-[var(--color-accent-to)] text-white shadow-md shadow-[var(--color-glow)] hover:shadow-lg"
    : "border border-[var(--color-subtle)] text-[var(--color-foreground)]/85 hover:border-[var(--color-accent-to)]/60 hover:text-[var(--color-accent-to)]";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${variant}`}
    >
      {icon}
      {label}
    </a>
  );
}
