import React from "react";

import IndustryCard from "./IndustryCard";
import { data } from "@/config/data";
import Slideup from "../../SlideUp";

const IndustriesSection = () => {
  return (
    <section className="relative w-full h-full mt-16 ">
      <div className="flex flex-col items-center justify-center w-full ">
        <div className="w-full lg:max-w-screen-2xl ">
          <div className="flex flex-col items-center justify-center w-full h-full px-2 mb-12 md:px-4 ">
            <div className="flex flex-col items-center py-16 space-y-5">
              <div className="flex items-center space-x-4">
                <h1 className="text-2xl font-medium lg:text-5xl md:text-4xl">
                  INDUSTRY
                </h1>
                <h1 className="text-2xl font-medium lg:text-5xl md:text-4xl text-emerald-500">
                  OUTLOOK
                </h1>
              </div>
              <p className="w-4/5 text-sm text-center lg:w-3/5 lg:text-xl md:text-lg">
                We go beyond your expectations with our personalized solutions
                tailor-made for each industry
              </p>
            </div>
            <Slideup index={0}>
              <div className="grid grid-cols-2 gap-4 xl:gap-8 xl:grid-cols-6 md:grid-cols-3">
                {data.industries.map((industry: any, index: number) => (
                  <IndustryCard
                    title={industry.title}
                    image={industry.icon}
                    id={index}
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

export default IndustriesSection;
