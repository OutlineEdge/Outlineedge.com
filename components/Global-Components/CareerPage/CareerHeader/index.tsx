"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useAnimation, Variant } from "framer-motion";

import { data } from "@/config/data";
import Image from "next/image";
import "./style.scss";
import TypeWriter from "./TypeWriter";
import TextReveal from "./TextReveal";

const CareerHeader = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <section className="relative flex flex-col items-center justify-center w-screen overflow-hidden lg:h-screen bg-slate-400 md:items-start md:h-[30rem] h-screen">
      <Image
        fill
        alt={data.careerHeader.image}
        src={data.careerHeader.image}
        className="absolute z-0 object-cover w-full h-full "
      />
      <div className="relative w-full h-full bg-black/60" />
      <div className="absolute flex flex-col items-center w-full px-8 space-y-8 text-center z-5 md:text-justify md:px-0 xl:left-24 md:left-14 md:items-start">
        <div className="flex space-x-2 mt-[10%] lg:mt-0">
          <h1 className="text-2xl font-medium text-white xl:text-7xl md:text-5xl ">
            <TypeWriter
              text={[data.careerHeader.title[0], data.careerHeader.title[1]]}
              className="text-4xl"
              repeatDelay={10000}
            />
          </h1>
        </div>
        <div className="flex flex-col w-[90%] lg:w-full">
          <TextReveal />
          <p className="text-sm text-center text-white font-base xl:text-xl lg:w-1/2 md:text-left md:text-base">
            {data.careerHeader.description1}
          </p>
          {data.careerHeader.description2 !== "" ||
          data.careerHeader.description2 !== undefined ? (
            <p className="text-sm text-center text-white font-base xl:text-xl lg:w-1/2 md:text-left md:text-base">
              {data.careerHeader.description2}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default CareerHeader;
