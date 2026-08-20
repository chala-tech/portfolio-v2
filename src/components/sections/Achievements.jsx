import { useState } from "react";
import { motion } from "framer-motion";
import { achievements } from "../../data/achievements";
import CertificateModal from "./CertificateModal";
import { fadeUp, staggerContainer } from "../../hooks/useScrollAnimation";

export default function Achievements() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="achievements" className="w-full bg-bg-soft px-6 py-20 md:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.3 }} variants={fadeUp}>
          <h2 className="text-center text-2xl font-bold text-text md:text-3xl">Achievements</h2>
          <p className="mt-2 text-center text-text-muted">Certifications and recognitions.</p>
        </motion.div>

        <motion.div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-5" initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.2 }} variants={staggerContainer}>
          {achievements.map((item) => (
            <motion.div
              key={item.title + item.subtitle}
              variants={fadeUp}
              onClick={() => setSelected(item)}
              className="group cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-bg transition hover:border-accent/50"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-black/20">
                <img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
              </div>
              <div className="p-3 text-center">
                <p className="text-xs font-medium text-text">{item.title}</p>
                <p className="text-[11px] text-text-muted">{item.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <CertificateModal certificate={selected} onClose={() => setSelected(null)} />
    </section>
  );
}