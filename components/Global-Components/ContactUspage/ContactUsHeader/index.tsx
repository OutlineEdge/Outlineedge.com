"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { data } from "@/config/data";
import Image from "next/image";
import "./style.scss";
const items = [
  {
    id: 1,
    content: "DESIGN IT.",
  },
  {
    id: 2,
    content: "DEVELOP IT.",
  },
  {
    id: 3,
    content: "BUILD IT.",
  },
];

const ContactUsHeader = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((state) => {
        if (state >= items.length - 1) return 0;
        return state + 1;
      });
    }, 4000);
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
      <Image
        fill
        alt={data.contactUs.image}
        src={data.contactUs.image}
        className="absolute z-0 object-cover w-full h-full"
      />
      <div className="relative w-full h-full bg-black/60" />
      <div className="absolute flex flex-col items-center w-full px-8 space-y-12 text-center z-5 md:text-justify md:px-0 xl:left-24 md:left-14 md:items-start">
        <div className="flex space-x-2 mt-[10%] lg:mt-0">
          <h1 className="text-2xl font-medium text-white xl:text-7xl md:text-5xl ">
            {data.contactUs.title[0]}
          </h1>
          <h1 className="text-2xl font-medium text-emerald-500 xl:text-7xl md:text-5xl">
            {data.contactUs.title[1]}
          </h1>
        </div>
        <div className="flex flex-col w-[90%] lg:w-full">
          <p className="text-sm text-center text-white font-base xl:text-xl lg:w-1/2 md:text-left md:text-base">
            {data.contactUs.description1}
            <i className="not-italic">You envision it, We</i>
            <i className="inline-flex px-1 not-italic">
              <i className="text-sm font-bold text-center text-white xl:text-3xl md:text-left md:text-2xl ">
                <AnimatePresence>
                  <motion.i
                    key={items[index].id}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ ease: "easeInOut" }}
                    className="absolute not-italic text"
                    data-text={items[index].content}
                  >
                    {items[index].content}
                  </motion.i>
                </AnimatePresence>
              </i>
            </i>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactUsHeader;
