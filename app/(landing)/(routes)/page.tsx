"use client";
import BrandsSection from "@/components/Global-Components/Homepage/BrandsSection";
import GlobalServiceSection from "@/components/Global-Components/Homepage/GlobalServiceSection";
import HeroSection from "@/components/Global-Components/Homepage/HeroSection";
import IndustriesSection from "@/components/Global-Components/Homepage/IndustriesSection";
import OurExpertise from "@/components/Global-Components/Homepage/OurExpertise";
import ServiceSection from "@/components/Global-Components/Homepage/ServiceSection";
import SummarySection from "@/components/Global-Components/Homepage/SummarySection";
import React, { useEffect } from "react";

const Homepage = () => {
  return (
    <div className="overflow-hidden ">
      <HeroSection />
      <ServiceSection />
      <OurExpertise />
      <IndustriesSection />
      <SummarySection />
      <GlobalServiceSection />
      {/* <BrandsSection /> */}
    </div>
  );
};

export default Homepage;
