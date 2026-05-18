import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-[var(--color-subtle)]">
      <div className="mx-auto max-w-4xl px-6 py-10 text-sm text-[var(--color-muted)] sm:px-8">
        <p>
          © {new Date().getFullYear()}{" "}
          <span className="gradient-text font-medium">{profile.name}</span>.
          Hecho con Next.js y Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
