import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-[var(--color-subtle)]">
      <div className="mx-auto max-w-3xl px-6 py-10 text-sm text-[var(--color-muted)] sm:px-8">
        <p>
          © {new Date().getFullYear()} {profile.name}. Hecho con Next.js y
          Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
