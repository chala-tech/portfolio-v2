import { socials } from "../../data/socials";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/10 bg-bg px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center md:flex-row md:justify-between md:text-left">
        <p className="text-sm text-text-muted">© {year} Chala Fokora. Built with React, Tailwind & Three.js.</p>

        <div className="flex gap-4">
          {socials.map((social) => (
            <a key={social.label} href={social.url} target="_blank" rel="noopener noreferrer" className="text-sm text-text-muted transition hover:text-accent">
              {social.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}