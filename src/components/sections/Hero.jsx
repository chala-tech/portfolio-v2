import { motion } from "framer-motion";
import MagneticButton from "../layout/MagneticButton";
import { useTypewriter } from "../../hooks/useTypewriter";

export default function Hero() {
  const role = useTypewriter("Full-Stack Developer", 70);

  return (
    <section id="home" className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-bg px-6 py-32 text-center">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:48px_48px]" />

      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} className="relative z-10 flex flex-col items-center">
        <div className="h-28 w-28 overflow-hidden rounded-full border-2 border-accent md:h-36 md:w-36">
          <img src="/src/assets/images/profile.jpg" alt="Chala Fokora" className="h-full w-full object-cover" />
        </div>

        <p className="mt-6 h-5 text-sm uppercase tracking-[0.3em] text-accent">{role}<span className="animate-pulse">|</span></p>
        <h1 className="mt-3 text-5xl font-bold leading-tight text-text sm:text-6xl md:text-7xl">Hi, I'm Chala Fokora</h1>
        <p className="mt-6 max-w-xl text-base text-text-muted md:text-lg">
          I'm an Electrical & Computer Engineering student at Addis Ababa University who builds full-stack web applications — from marketplaces to logistics platforms.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <MagneticButton href="#projects" className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-bg hover:opacity-90">
            View My Work
          </MagneticButton>
          <MagneticButton href="#contact" className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-text hover:border-accent hover:text-accent">
            Get In Touch
          </MagneticButton>
        </div>
      </motion.div>
    </section>
  );
}