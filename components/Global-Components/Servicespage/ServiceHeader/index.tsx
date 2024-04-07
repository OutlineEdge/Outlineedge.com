"use client";
import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import { data } from "@/config/data";

const ServiceHeader = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="relative flex flex-col items-center justify-center w-full h-screen overflow-hidden md:items-start">
      <Image
        fill
        alt={data.serviceHeader.image}
        src={data.serviceHeader.image}
        className="absolute z-0 object-cover w-full h-full"
      />
      <div className="relative w-full h-full bg-black/60" />
      <div className="absolute flex flex-col items-center w-full px-8 space-y-12 text-center z-5 md:text-justify md:px-0 xl:left-24 md:left-14 md:items-start">
        <div className="flex space-x-2 mt-[10%] lg:mt-0">
          <h1 className="text-2xl font-medium text-white xl:text-7xl md:text-5xl ">
            <Typewriter
              options={{
                strings: data.serviceHeader.title,
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
        </div>
        <div className="flex flex-col w-[90%] lg:w-full">
          <p className="text-sm text-center text-white font-base xl:text-xl lg:w-1/2 md:text-left md:text-base">
            {data.serviceHeader.description1}
          </p>
          {data.serviceHeader.description2 !== "" ||
          data.serviceHeader.description2 !== undefined ? (
            <p className="text-sm text-center text-white font-base xl:text-xl lg:w-1/2 md:text-left md:text-base">
              {data.serviceHeader.description2}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default ServiceHeader;
