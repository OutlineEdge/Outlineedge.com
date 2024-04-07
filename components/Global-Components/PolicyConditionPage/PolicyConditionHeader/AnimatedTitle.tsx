"use client";
import React, { useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useAnimation,
  useInView,
} from "framer-motion";
import { letterContainerVariants, letterVariants } from "./AnimationVariants";

export const AnimatedTitle = (props: { children: string; color: string }) => {
  const { children, color } = props;

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
    <AnimatePresence>
      {
        <motion.h2
          {...props}
          ref={ref}
          variants={letterContainerVariants}
          initial={"hidden"}
          animate={controls}
          exit={"hidden"}
          key={children}
          aria-label={children}
          aria-live={"polite"}
          whileInView="after"
          viewport={{ once: false }} // dont do this on production if it loops.
        >
          {children.split(" ").map((word: string, wordI: number) => (
            <div
              key={`word-${word}-${wordI}`}
              style={{
                display: "inline-block",
              }}
            >
              {Array.from(word).map((letter, index) => (
                <motion.span
                  key={`${index}-${letter}`}
                  className={`text-2xl font-medium  xl:text-7xl md:text-5xl ${color}`}
                  style={{
                    position: "relative",
                    display: "inline-block",
                    width: "auto",
                  }} // Position elements
                  variants={letterVariants}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
              {"\u00A0"}
            </div>
          ))}
        </motion.h2>
      }
    </AnimatePresence>
  );
};
