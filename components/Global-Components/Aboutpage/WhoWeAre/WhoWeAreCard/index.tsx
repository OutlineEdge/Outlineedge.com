"use client";
import { data } from "@/config/data";
import React, { useEffect, useState } from "react";
import TextExpander from "react-text-expander";
import { motion } from "framer-motion";

const WhoWeAreCard = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className="">
      <div className="flex flex-wrap items-start justify-center gap-4 lg:items-center md:space-x-8 xl:space-y-0 lg:flex-nowrap">
        <p className="block w-full p-4 text-sm text-justify md:w-1/2 lg:w-2/3 xl:text-lg md:p-0 md:text-base md:block lg:hidden xl:hidden">
          <TextExpander
            lines={6}
            showMoreLabel="Read more"
            showLessLabel="Show less"
            buttonClassName="text-emerald-600 font-bold"
          >
            {data.whoWeAre.description}
          </TextExpander>
        </p>
        <p className="hidden w-full p-4 text-sm text-justify md:w-1/2 lg:w-2/3 xl:text-lg md:p-0 md:text-base md:hidden lg:block xl:block">
          {data.whoWeAre.description}
        </p>
        <div className="grid order-first grid-cols-2 gap-2 overflow-hidden shadow-xl w-fit rounded-tl-2xl rounded-br-2xl h-fit shadow-slate-500 lg:order-none">
          {data.whoWeAre.images.map((image: any, index: number) => (
            <motion.img
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              transition={{ duration: 0.5 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              src={image}
              alt={image}
              key={index}
              className="object-cover w-32 h-32 shadow-lg lg:h-44 lg:w-44 aspect-square shadow-slate-500"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhoWeAreCard;
