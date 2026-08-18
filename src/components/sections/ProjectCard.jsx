export default function ProjectCard({ title, description, github, demo, tags }) {
  return (
    <div className="group rounded-xl border border-white/10 bg-bg-soft p-6 transition hover:border-accent/50 hover:shadow-[0_0_20px_-5px_var(--color-accent)]">
      <h3 className="text-xl font-semibold text-text">{title}</h3>
      <p className="mt-2 text-sm text-text-muted leading-relaxed">
        {description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="rounded-full bg-accent/10 px-3 py-1 text-xs text-accent">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-5 flex gap-4 text-sm">
        <a href={github} target="_blank" rel="noopener noreferrer" className="text-text-muted underline decoration-dotted hover:text-accent">
          GitHub
        </a>
        {demo && (
          <a href={demo} target="_blank" rel="noopener noreferrer" className="text-text-muted underline decoration-dotted hover:text-accent">
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}