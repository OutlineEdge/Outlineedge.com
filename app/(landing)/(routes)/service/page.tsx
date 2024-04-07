import Header from "@/components/Global-Components/Header";
import ServiceHeader from "@/components/Global-Components/Servicespage/ServiceHeader";
import ServicesSection from "@/components/Global-Components/Servicespage/ServicesSection";
import { data } from "@/config/data";
import React from "react";

const Service = () => {
  return (
    <div className="">
      <div className="fixed w-full h-full pattern-cross pattern-gray-500 pattern-bg-white pattern-size-6 pattern-opacity-20 -z-5"></div>

      <ServiceHeader />
      <ServicesSection />
    </div>
  );
};

export default Service;
