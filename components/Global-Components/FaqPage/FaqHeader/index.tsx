"use client";

import { data } from "@/config/data";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useInView,
  Variants,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import * as React from "react";

const variants: Variants = {
  initial: { opacity: 0, scale: 3, rotateY: 180 },
  animate: {
    opacity: 1,
    scale: 1,
    rotateY: 0,
  },
  exit: { opacity: 0, scale: 2.5, rotateY: -180 },
};

interface Props {
  text: string;
  color: string;
}
export const AnimateText = ({ text, color }: Props) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });
  useEffect(() => {
    if (isInView) {
      controls.start("animate");
    } else {
      controls.start("initial");
    }
  }, [isInView, controls]);

  return (
    <>
      {String(text)
        .split("")
        .map((letter: string, index: number) => (
          <AnimatePresence key={index}>
            <motion.h1
              ref={ref}
              variants={variants}
              initial="initial"
              animate={controls}
              exit="exit"
              transition={{ duration: index !== 0 ? index - 0.9 : 0.5 }}
              className={`text-2xl font-medium xl:text-7xl md:text-5xl ${color}`}
            >
              {letter}
            </motion.h1>
          </AnimatePresence>
        ))}
    </>
  );
};

const FaqHeader = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <section className="relative flex flex-col items-center justify-center w-screen h-screen overflow-hidden md:items-start ">
      <Image
        fill
        alt={data.faqHeader.image}
        src={data.faqHeader.image}
        className="absolute z-0 object-cover w-full h-full"
      />
      <div className="relative w-full h-full bg-black/60" />
      <div className="absolute flex flex-col items-center w-full px-8 space-y-12 text-center z-5 md:text-justify md:px-0 xl:left-24 md:left-14 md:items-start">
        <div className="flex space-x-2 mt-[10%] lg:mt-0">
          {/* <AnimatePresence>
            <motion.h1
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="text-2xl font-medium text-white xl:text-7xl md:text-5xl"
            ></motion.h1>
          </AnimatePresence> */}
          <AnimateText text={data.faqHeader.title[0]} color={"text-white"} />
          <AnimateText
            text={data.faqHeader.title[1]}
            color={"text-emerald-500"}
          />
        </div>
        <div className="flex flex-col w-[90%] lg:w-full">
          <p className="w-full text-sm text-center text-white font-base xl:text-xl lg:w-1/2 md:text-left md:text-base">
            {data.faqHeader.description1}
          </p>
          {data.faqHeader.description2 !== "" ||
          data.faqHeader.description2 !== undefined ? (
            <p className="w-full text-sm text-center text-white font-base xl:text-xl lg:w-1/2 md:text-left md:text-base">
              {data.faqHeader.description2}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default FaqHeader;
