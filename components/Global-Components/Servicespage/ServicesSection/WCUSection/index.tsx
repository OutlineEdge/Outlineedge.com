"use client";
import Slideup from "@/components/Global-Components/SlideUp";
import { motion } from "framer-motion";
import WCUCard from "./WCUCard";
import { data } from "@/config/data";

const WCUSection = () => {
  return (
    <section className="relative w-full h-full overflow-hidden">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="w-full lg:mt-12 lg:max-w-screen-2xl">
          <div className="flex flex-col items-center justify-center w-full h-full px-2 mb-12 md:px-4 ">
            <div className="flex flex-col items-center py-8 space-y-5">
              <div className="flex items-center space-x-4">
                <h1 className="text-2xl font-medium lg:text-4xl md:text-3xl">
                  WHY CHOOSE
                </h1>
                <h1 className="text-2xl font-medium lg:text-4xl md:text-3xl text-emerald-500">
                  US?
                </h1>
              </div>
            </div>

            <Slideup index={0}>
              <div className="flex flex-wrap justify-center gap-6 lg:flex-nowrap">
                {data.WCU.map((sub: any, index: number) => (
                  <WCUCard
                    title={sub.title}
                    description={sub.description}
                    image={sub.image}
                    order={sub.order}
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

export default WCUSection;
