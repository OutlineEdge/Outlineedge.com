import { data } from "@/config/data";
import React from "react";
import SummaryCard from "./SummaryCard";
import Slideup from "../../SlideUp";


const SummarySection = () => {
  return (
    <section className="relative w-full h-full mt-16 ">
      <div className="flex flex-col items-center justify-center w-full ">
        <div className="w-full lg:max-w-screen-2xl ">
          <div className="flex flex-col items-center justify-center w-full h-full px-2 mb-12 md:px-4 ">
            <div className="flex flex-col items-center py-16 space-y-5">
              <div className="flex items-center space-x-4">
                <h1 className="text-2xl font-medium lg:text-5xl md:text-4xl">
                  OUR JOURNEY
                </h1>
                <h1 className="text-2xl font-medium lg:text-5xl md:text-4xl text-emerald-500">
                  SO FAR
                </h1>
              </div>
              <p className="w-full text-sm text-center lg:text-xl md:text-lg">
                A brief rundown of our accomplishments
              </p>
            </div>
            <Slideup index={0}>
              <div className="grid grid-cols-2 gap-4 xl:grid-cols-6 md:grid-cols-3 xl:gap-8">
                {data.summary.map((value: any, index: number) => (
                  <SummaryCard
                    id={"1"}
                    number={value.number}
                    title={value.title}
                    icon={value.icon}
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

export default SummarySection;
