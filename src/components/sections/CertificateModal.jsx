import { motion, AnimatePresence } from "framer-motion";

export default function CertificateModal({ certificate, onClose }) {
  return (
    <AnimatePresence>
      {certificate && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 z-[150] flex items-center justify-center bg-black/80 p-6 backdrop-blur-sm">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3 }} onClick={(e) => e.stopPropagation()} className="max-h-[85vh] max-w-3xl overflow-hidden rounded-xl border border-white/10 bg-bg-soft">
            <img src={certificate.image} alt={certificate.title} className="max-h-[70vh] w-full object-contain" />
            <div className="p-5 text-center">
              <h3 className="text-lg font-semibold text-text">{certificate.title}</h3>
              <p className="text-sm text-text-muted">{certificate.subtitle}</p>
              <button onClick={onClose} className="mt-4 rounded-full border border-white/20 px-5 py-2 text-sm text-text">
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}