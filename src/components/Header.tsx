import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { href: "#about", label: "Sobre mí" },
  { href: "#highlights", label: "Highlights" },
  { href: "#experience", label: "Experiencia" },
  { href: "#contact", label: "Contacto" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-subtle)]/60 bg-[var(--color-background)]/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-4xl items-center justify-end px-6 sm:px-8">
        <nav className="flex items-center gap-1 sm:gap-2">
          <ul className="hidden items-center gap-1 sm:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-full px-3 py-2 text-sm text-[var(--color-foreground)]/70 transition-colors hover:bg-[var(--color-subtle)]/50 hover:text-[var(--color-accent-to)]"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
