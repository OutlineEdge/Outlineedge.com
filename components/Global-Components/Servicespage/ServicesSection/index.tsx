"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import SoftwareDevelopmentSection from "./SoftwareDevelopmentSection";
import ITRecruitmentSection from "./ITRecruitmentSection";
import SoftwareQualitySection from "./SoftwareQualitySection";
import AiSolutionSection from "./AiSolutionSection";
import MaintenanceSupportSection from "./MaintenanceSupportSection";
import UiUxSection from "./UiUxSection";
import WCUSection from "./WCUSection";
import OurGoalsSection from "./OurGoalsSection";
import StackedCarousel from "../../StackedCarousel";
const ServicesSection = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    scrollToElement(id);
  }, [id]);

  const scrollToElement = (elementId: any) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({
        behavior: "instant",
        block: "center",
      });
    }
  };

  return (
    <div className="flex flex-col ">
      <WCUSection />
      {/* <OurGoalsSection /> */}
      <StackedCarousel />
      <SoftwareDevelopmentSection />
      <ITRecruitmentSection />
      <SoftwareQualitySection />
      <AiSolutionSection />
      <MaintenanceSupportSection />
      <UiUxSection />
    </div>
  );
};

export default ServicesSection;
