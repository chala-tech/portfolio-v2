import { motion, AnimatePresence } from "framer-motion";

export default function ProjectModal({ project, onClose }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 z-[150] flex items-center justify-center bg-black/70 p-6 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="max-w-lg rounded-2xl border border-white/10 bg-bg-soft p-8"
          >
            <h3 className="text-2xl font-bold text-text">{project.title}</h3>
            <p className="mt-4 text-text-muted leading-relaxed">{project.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-accent/10 px-3 py-1 text-xs text-accent">{tag}</span>
              ))}
            </div>

            <div className="mt-6 flex gap-4">
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="rounded-full bg-accent px-5 py-2 text-sm font-medium text-bg">
                View on GitHub
              </a>
              <button onClick={onClose} className="rounded-full border border-white/20 px-5 py-2 text-sm text-text">
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}