export const letterContainerVariants = {
  hidden: { transition: { staggerChildren: 0.015 } },
  visible: { transition: { staggerChildren: 0.03 } },
};

// Variants for animating each letter
export const letterVariants = {
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 200,
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 200,
    },
  },
};
