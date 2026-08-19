import { motion } from "framer-motion";
import { fadeUp } from "../../hooks/useScrollAnimation";

export default function About() {
  return (
    <section id="about" className="w-full bg-bg-soft px-6 py-20 md:py-32">
      <motion.div
        className="mx-auto flex max-w-4xl flex-col items-center gap-10 md:flex-row md:items-start"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeUp}
      >
        <div className="h-40 w-40 flex-shrink-0 overflow-hidden rounded-full border-2 border-accent md:h-56 md:w-56">
          <img src="/src/assets/images/profile.jpg" alt="Chala Fokora" className="h-full w-full object-cover" />
        </div>

        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-text md:text-3xl">About Me</h2>
          <p className="mt-4 text-text-muted leading-relaxed">
            I'm Chala Fokora, a student of Electrical and Computer Engineering
            at Addis Ababa University, and a full-stack developer. I build
            web applications that solve real problems, from marketplaces to
            logistics platforms, combining my engineering background with
            practical software development.
          </p>
        </div>
      </motion.div>
    </section>
  );
}