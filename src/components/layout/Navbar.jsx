import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-bg/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <span className="text-lg font-bold text-text">CF</span>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="text-sm text-text-muted transition hover:text-accent">
              {link.label}
            </a>
          ))}
          <ThemeToggle />
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button onClick={() => setOpen(!open)} className="text-text" aria-label="Toggle menu">
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {open && (
        <div className="flex flex-col gap-4 border-t border-white/10 px-6 py-4 md:hidden">
          {links.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setOpen(false)} className="text-sm text-text-muted transition hover:text-accent">
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}