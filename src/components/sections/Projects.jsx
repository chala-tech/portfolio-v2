import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { fadeUp, staggerContainer } from "../../hooks/useScrollAnimation";

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="w-full bg-bg px-6 py-20 md:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} variants={fadeUp}>
          <h2 className="text-center text-2xl font-bold text-text md:text-3xl">Projects</h2>
          <p className="mt-2 text-center text-text-muted">Things I've built to solve real problems.</p>
        </motion.div>

        <motion.div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={staggerContainer}>
          {projects.map((project) => (
            <motion.div key={project.title} variants={fadeUp}>
              <ProjectCard {...project} onClick={() => setSelected(project)} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}