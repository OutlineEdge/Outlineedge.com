import React from "react";
import ExpertiseCard from "./ExpertiseCard";
import { data } from "@/config/data";

const OurExpertise = () => {
  return (
    <section className="relative w-full h-full">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="w-full lg:max-w-screen-2xl lg:mt-12 ">
          <div className="flex flex-col items-center justify-center w-full h-full px-2 mb-12 md:px-4 ">
            <div className="flex flex-col items-center py-8">
              <div className="flex items-center space-x-4">
                <h1 className="text-2xl font-medium lg:text-5xl md:text-4xl">
                  OUR
                </h1>
                <h1 className="text-2xl font-medium lg:text-5xl md:text-4xl text-emerald-500">
                  EXPERTISE
                </h1>
              </div>
            </div>
            <div className="flex flex-col divide-y-2">
              {data.ourExpertise.contents.map((sub: any, index: number) => (
                <ExpertiseCard
                  title={sub.title}
                  description={sub.description}
                  image={sub.image}
                  order={sub.order}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurExpertise;
