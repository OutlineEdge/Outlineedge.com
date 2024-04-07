"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useAnimation, Variant } from "framer-motion";

const TextReveal = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.3,
        staggerChildren: 0.08,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const isInView = useInView(ref, { once: false });
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  const line = "Opportunity, Challenge, Achievement, & Growth.";
  return (
    <motion.h3
      className="py-2 text-base font-semibold text-center text-white xl:text-3xl md:text-left md:text-xl"
      variants={sentence}
      initial="hidden"
      animate={controls}
      ref={ref}
    >
      {line.split("").map((char, index) => (
        <motion.span key={char + "-" + index} variants={letter}>
          {char}
        </motion.span>
      ))}
    </motion.h3>
  );
};

export default TextReveal;
