"use client";

import { data } from "@/config/data";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import "./style.scss";
import { AnimatedTitle } from "./AnimatedTitle";

const PolicyConditionHeader = () => {
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
        alt={data.policyHeader.image}
        src={data.policyHeader.image}
        className="absolute z-0 object-cover w-full h-full"
      />
      <div className="relative w-full h-full bg-black/60" />
      <div className="absolute flex flex-col items-center w-full px-8 space-y-12 text-center z-5 md:text-justify md:px-0 xl:left-24 md:left-14 md:items-start">
        <div className="flex space-x-2 mt-[10%] lg:mt-0">
          <AnimatedTitle color={"text-white"}>
            {data.policyHeader.title[0]}
          </AnimatedTitle>
          <AnimatedTitle color={"text-emerald-500"}>
            {data.policyHeader.title[1]}
          </AnimatedTitle>
        </div>
        <div className="flex flex-col w-[90%] lg:w-full">
          <p className="w-full text-sm text-center text-white font-base xl:text-xl lg:w-1/2 md:text-left md:text-base">
            {data.policyHeader.description1}
          </p>
          {data.policyHeader.description2 !== "" ||
          data.policyHeader.description2 !== undefined ? (
            <p className="w-full text-sm text-center text-white font-base xl:text-xl lg:w-1/2 md:text-left md:text-base">
              {data.policyHeader.description2}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default PolicyConditionHeader;
