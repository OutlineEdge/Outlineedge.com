import AboutSummary from "@/components/Global-Components/Aboutpage/AboutSummary";
import VisionariesSection from "@/components/Global-Components/Aboutpage/VisionariesSection";
import WhatWeDeliver from "@/components/Global-Components/Aboutpage/WhatWeDeliver";
import WhoWeAre from "@/components/Global-Components/Aboutpage/WhoWeAre";
import Header from "@/components/Global-Components/Header";
import { data } from "@/config/data";
import React from "react";

const About = () => {
  return (
    <div className="overflow-hidden ">
      {/* <div className="fixed w-full h-full pattern-wavy pattern-gray-400 pattern-bg-white pattern-size-4 pattern-opacity-20 -z-5"></div> */}

      <Header
        image={data.aboutHeader.image}
        description1={data.aboutHeader.description1}
        title={data.aboutHeader.title}
        description2={data.aboutHeader.description2}
      />
      <AboutSummary />
      <WhoWeAre />
      <WhatWeDeliver />
      <VisionariesSection />
    </div>
  );
};

export default About;
