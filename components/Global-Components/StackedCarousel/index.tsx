"use client";
import React, { useRef } from "react";
import "./style.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import { data } from "@/config/data";
import Card1 from "./Card1";
import Card2 from "./Card2";
import Card3 from "./Card3";

const StackedCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <section
      className="sticky flex flex-col items-center w-full h-full space-y-4"
      ref={targetRef}
    >
      <div className="relative w-full h-full mt-10 lg:h-full">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <div className="w-full lg:max-w-screen-2xl ">
            <div className="flex flex-col items-center justify-center w-full h-full px-2 md:px-4 ">
              <div className="flex flex-col items-center justify-center space-y-5">
                {/* <div className="flex flex-wrap items-center justify-center space-x-4">
                  <h1 className="text-2xl font-medium lg:text-6xl md:text-4xl">
                    {data.howWeWork.title[0].toUpperCase()}
                  </h1>
                  <h1 className="text-2xl font-medium lg:text-6xl md:text-4xl text-emerald-500">
                    {data.howWeWork.title[1].toUpperCase()}
                  </h1>
                </div> */}
                <p className="w-4/5 text-sm text-center lg:w-4/5 lg:text-lg md:text-base">
                  {/* {data.aiSolutions.description} */}
                </p>
              </div>

              <div className="container ">
                <ul id="cards">
                  <Card1 scale={scale} />
                  <Card2 scale={scale} />
                  <Card3 scale={scale} />
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StackedCarousel;
