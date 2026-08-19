// fade + scale + blur-in, retriggers every time it enters view
export const fadeUp = {
  hidden: { opacity: 0, y: 50, scale: 0.95, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

// staggers children (used on the Projects grid)
export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};