"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { AnimatedTitle } from "../PolicyConditionPage/PolicyConditionHeader/AnimatedTitle";
interface Props {
  image: string;
  description1: string;
  description2: string;
  title: string[];
}

const Header = ({ image, description1, description2, title }: Props) => {
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
        alt={image}
        src={image}
        className="absolute z-0 object-cover w-full h-full"
      />
      <div className="relative w-full h-full bg-black/60" />
      <div className="absolute flex flex-col items-center w-full px-8 space-y-12 text-center z-5 md:text-justify md:px-0 xl:left-24 md:left-14 md:items-start">
        <div className="flex space-x-2 mt-[10%] lg:mt-0">
          <AnimatedTitle color={"text-white"}>
            {title[0]}
          </AnimatedTitle>
          <AnimatedTitle color={"text-emerald-500"}>
            {title[1]}
          </AnimatedTitle>
          {/* <h1 className="text-2xl font-medium text-white xl:text-7xl md:text-5xl ">
            {title[0]}
          </h1>
          <h1 className="text-2xl font-medium text-emerald-500 xl:text-7xl md:text-5xl">
            {title[1]}
          </h1> */}
        </div>
        <div className="flex flex-col w-[90%] lg:w-full">
          <p className="w-full text-sm text-center text-white font-base xl:text-xl lg:w-1/2 md:text-left md:text-base">
            {description1}
          </p>
          {description2 !== "" || description2 !== undefined ? (
            <p className="w-full text-sm text-center text-white font-base xl:text-xl lg:w-1/2 md:text-left md:text-base">
              {description2}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Header;
