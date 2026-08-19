
export default function ProjectCard({ title, description, tags, onClick }) {
  return (
    <div onClick={onClick} className="group cursor-pointer rounded-xl border border-white/10 bg-bg-soft p-6 transition hover:border-accent/50 hover:shadow-[0_0_20px_-5px_var(--color-accent)]">
      <h3 className="text-xl font-semibold text-text">{title}</h3>
      <p className="mt-2 text-sm text-text-muted leading-relaxed">{description}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="rounded-full bg-accent/10 px-3 py-1 text-xs text-accent">{tag}</span>
        ))}
      </div>

      <p className="mt-5 text-sm text-text-muted underline decoration-dotted">Click to view details</p>
    </div>
  );
}