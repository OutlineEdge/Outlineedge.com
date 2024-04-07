"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    id: 1,
    content: "SMART",
  },
  {
    id: 2,
    content: "SIMPLE",
  },
  {
    id: 3,
    content: "SCALABLE",
  },
];

const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((state) => {
        if (state >= items.length - 1) return 0;
        return state + 1;
      });
    }, 2000);
    return () => clearInterval(id);
  }, []);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <section className="relative flex flex-col items-center justify-center w-screen h-screen overflow-hidden md:items-start ">
      <video
        autoPlay
        loop
        muted
        className="absolute z-0 object-cover w-full h-full"
      >
        <source src="./header.mp4" type="video/mp4" />
      </video>
      <div className="relative w-full h-full bg-black/40" />
      <div className="absolute flex flex-col items-center w-full px-8 space-y-12 text-center z-5 md:text-justify md:px-0 xl:left-24 md:left-14 md:items-start">
        <div className="grid gap-2 md:grid-cols-2 w-fit ">
          <h1 className="text-3xl font-medium text-white lg:text-7xl md:text-5xl ">
            RE-IMAGINE
          </h1>
          <h1 className="text-3xl font-medium text-emerald-500 lg:text-7xl md:text-5xl">
            TOMORROW
          </h1>
        </div>
        <p className="relative grid grid-rows-2 gap-4 text-sm font-medium text-white xl:space-x-3 xl:items-center xl:flex md:text-left lg:text-2xl md:text-lg lg:gap-0">
          <div className="grid items-center gap-4 md:space-x-3 md:flex place-items-center lg:gap-0">
            <span className="">
              Spearhead the Future of Digital Transformation Through
            </span>

            <div className="relative flex items-center justify-center text-lg font-extrabold xl:w-40 text-emerald-400 xl:text-3xl lg:text-2xl lg:w-32 md:w-20 md:text-xl">
              <AnimatePresence>
                <motion.div
                  key={items[index].id}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ ease: "easeInOut" }}
                  className="absolute "
                >
                  {items[index].content}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <span>IT Solutions</span>
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
