import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="w-full bg-bg px-6 py-20 md:py-32">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-2xl font-bold text-text md:text-3xl">
          Projects
        </h2>
        <p className="mt-2 text-center text-text-muted">
          Things I've built to solve real problems.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}