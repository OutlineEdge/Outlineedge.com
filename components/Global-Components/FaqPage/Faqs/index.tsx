import React from "react";
import FaqCard from "./FaqCard";
import { data } from "@/config/data";

const Faqs = () => {
  return (
    <section className="relative w-full h-full mt-16 ">
      <div className="flex flex-col items-center justify-center w-full ">
        <div className="w-full lg:max-w-screen-2xl ">
          <div className="flex flex-col items-center justify-center w-full h-full px-2 mb-12 md:px-4 ">
            <div className="flex flex-col items-center py-16 space-y-5">
              <div className="flex items-center space-x-4">
                <h1 className="text-2xl font-medium lg:text-4xl md:text-3xl">
                  FREQUENT
                </h1>
                <h1 className="text-2xl font-medium lg:text-4xl md:text-3xl text-emerald-500">
                  QUESTIONS
                </h1>
              </div>
              <p className="w-4/5 text-sm text-center lg:w-3/5 lg:text-xl md:text-lg"></p>
            </div>

            <div className="flex flex-col items-center w-full space-y-8">
              {data.faqs.map((faq: any, index: number) => (
                <FaqCard
                  question={faq.question}
                  answer={faq.answer}
                  id={index}
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

export default Faqs;
