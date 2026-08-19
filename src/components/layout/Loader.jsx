import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.6, ease: "easeInOut" }} className="fixed inset-0 z-[200] flex items-center justify-center bg-bg">
          <motion.span initial={{ opacity: 0, letterSpacing: "0.5em" }} animate={{ opacity: 1, letterSpacing: "0.1em" }} transition={{ duration: 1, ease: "easeOut" }} className="text-2xl font-bold text-text">
            CHALA FOKORA
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}