export const staggerContainer = {
  hidden: { opacity: 1 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 * i },
  }),
};

export const staggerChild = {
  hidden: {
    opacity: 0,
    y: 16,
    transition: {},
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      velocity: 2,
      duration: 0.35,
      damping: 10,
      ease: "easeOut",
    },
  },
};

export const revealVariants = {
  visible: (i = 1) => ({
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -400, duration: 0.5, ease: "easeOut" },
      staggerChildren: 0.075,
      delayChildren: 0.09 * i,
    },
  }),
  hidden: {
    y: -16,
    opacity: 0,
  },
};
