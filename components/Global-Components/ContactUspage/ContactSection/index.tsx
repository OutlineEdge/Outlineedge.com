import React from "react";
import ContactInfo from "../ContactInfo";
import ContactForm from "../ContactForm";
import { data } from "@/config/data";

import Slideup from "../../SlideUp";

const ContactSection = () => {
  return (
    <section className="relative w-full h-full mt-16 ">
      <div className="flex flex-col items-center justify-center w-full ">
        <div className="w-full lg:max-w-screen-2xl ">
          <div className="flex flex-col items-center justify-center w-full h-full px-2 mb-12 md:px-4 ">
            <div className="flex flex-col items-center py-16 space-y-5">
              <div className="flex items-center space-x-4">
                <h1 className="text-2xl font-medium lg:text-5xl md:text-4xl">
                  BOOK AN
                </h1>
                <h1 className="text-2xl font-medium lg:text-5xl md:text-4xl text-emerald-500">
                  APPOINTMENT
                </h1>
              </div>
              <p className="w-4/5 text-sm text-center lg:w-3/5 lg:text-xl md:text-lg"></p>
            </div>

            <div className="grid items-center gap-6 lg:grid-cols-2 ">
              <ContactInfo />
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
