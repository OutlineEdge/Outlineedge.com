"use client";
import { useAnimation, useInView, motion } from "framer-motion";
import { useRef, useEffect } from "react";

interface Props {
  index: number;
  children: React.ReactNode;
}
const Slideup = ({ children, index }: Props) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);
  return (
    <motion.section
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 100 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate={controls}
      transition={{ duration: index === 0 ? 0.5 : index - 0.9 }}
    >
      {children}
    </motion.section>
  );
};

export default Slideup;
