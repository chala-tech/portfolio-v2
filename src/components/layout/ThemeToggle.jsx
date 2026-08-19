import { useTheme } from "../../hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button onClick={toggle} className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-text-muted transition hover:border-accent hover:text-accent">
      {theme === "dark" ? "☀️" : "🌙"}
    </button>
  );
}