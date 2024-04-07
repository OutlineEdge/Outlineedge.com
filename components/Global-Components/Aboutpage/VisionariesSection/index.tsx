import React from "react";
import Slideup from "../../SlideUp";
import VisionaryCard from "./VisionaryCard";
import { data } from "@/config/data";

const VisionariesSection = () => {
  return (
    <section className="relative w-full h-full mt-16 ">
      <div className="flex flex-col items-center justify-center w-full ">
        <div className="w-full lg:max-w-screen-2xl ">
          <div className="flex flex-col items-center justify-center w-full h-full px-2 mb-12 md:px-4 ">
            <div className="flex flex-col items-center py-16 space-y-5">
              <div className="flex items-center space-x-4">
                <h1 className="text-2xl font-medium lg:text-5xl md:text-4xl">
                  OUR
                </h1>
                <h1 className="text-2xl font-medium lg:text-5xl md:text-4xl text-emerald-500">
                  VISIONARIES
                </h1>
              </div>
              <p className="w-4/5 text-sm text-center lg:w-3/5 lg:text-xl md:text-lg">

              </p>
            </div>

            <Slideup index={0}>
              <div className="flex flex-col items-center space-y-8">
                {data.visionaries.map((visionary: any, index: number) => (
                  <VisionaryCard
                    image={visionary.image}
                    description={visionary.description}
                    title={visionary.title}
                    name={visionary.name}
                    key={index}
                  />
                ))}
              </div>
            </Slideup>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionariesSection;
