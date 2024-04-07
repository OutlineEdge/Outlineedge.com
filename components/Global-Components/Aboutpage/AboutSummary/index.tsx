import React from "react";
import Slideup from "../../SlideUp";
import AboutSummaryCard from "./AboutSummaryCard";
import { data } from "@/config/data";

const AboutSummary = () => {
  return (
    <section className="relative w-full h-full mt-16 ">
      <div className="flex flex-col items-center justify-center w-full ">
        <div className="w-full lg:max-w-screen-2xl ">
          <div className="flex flex-col items-center justify-center w-full h-full px-2 mb-12 md:px-14 xl:px-6 ">
            {/* <div className="flex flex-col items-center py-16 space-y-5">
              <div className="flex items-center space-x-4">
                <h1 className="text-2xl font-medium lg:text-5xl md:text-4xl">
                  ABOUT
                </h1>
                <h1 className="text-2xl font-medium lg:text-5xl md:text-4xl text-emerald-500">
                  SUMMARY
                </h1>
              </div>
              <p className="w-4/5 text-sm text-center lg:w-3/5 lg:text-xl md:text-lg">

              </p>
            </div> */}
            <Slideup index={0}>
              <div className="grid grid-cols-1 gap-8 px-4 lg:grid-cols-3 lg:px-0">
                {data.aboutSummary.map((about: any, index: number) => (
                  <AboutSummaryCard
                    icon={about.icon}
                    title={about.title}
                    description={about.description}
                    key={index}
                    index={index}
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

export default AboutSummary;
