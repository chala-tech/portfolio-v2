import { motion } from "framer-motion";
import { socials } from "../../data/socials";
import { fadeUp } from "../../hooks/useScrollAnimation";

export default function Contact() {
  return (
    <section id="contact" className="w-full bg-bg-soft px-6 py-20 md:py-32">
      <motion.div className="mx-auto max-w-2xl text-center" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} variants={fadeUp}>
        <h2 className="text-2xl font-bold text-text md:text-3xl">Let's Connect</h2>
        <p className="mt-2 text-text-muted">Feel free to reach out through any of these platforms.</p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">
          {socials.map((social) => {
            const Icon = social.icon;
            return (
              <a key={social.label} href={social.url} target="_blank" rel="noopener noreferrer" title={social.label} className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-xl text-text-muted transition hover:scale-110 hover:border-current" style={{ "--hover-color": social.color }} onMouseEnter={(e) => (e.currentTarget.style.color = social.color)} onMouseLeave={(e) => (e.currentTarget.style.color = "")}>
                <Icon />
              </a>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}