import { motion } from "framer-motion";
import { skills } from "../../data/skills";
import { fadeUp, staggerContainer } from "../../hooks/useScrollAnimation";

export default function Skills() {
  return (
    <section id="skills" className="w-full bg-bg-soft px-6 py-20 md:py-32">
      <div className="mx-auto max-w-4xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} variants={fadeUp}>
          <h2 className="text-center text-2xl font-bold text-text md:text-3xl">Skills</h2>
          <p className="mt-2 text-center text-text-muted">Technologies I work with.</p>
        </motion.div>

        <motion.div className="mt-12 grid grid-cols-3 gap-6 sm:grid-cols-4" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={staggerContainer}>
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div key={skill.name} variants={fadeUp} className="flex flex-col items-center gap-2 rounded-xl border border-white/10 p-4 transition hover:border-accent/50">
                <Icon className="text-3xl text-accent" />
                <span className="text-xs text-text-muted">{skill.name}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}