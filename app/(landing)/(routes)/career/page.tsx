import CareerHeader from "@/components/Global-Components/CareerPage/CareerHeader";
import JobPortal from "@/components/Global-Components/CareerPage/JobPortal";
import React from "react";

const Career = () => {
  return (
    <div className="overflow-hidden">
      {/* <div className="fixed w-full h-full pattern-zigzag-3d pattern-gray-400 pattern-bg-white pattern-size-2 pattern-opacity-20 -z-5"></div> */}

      <CareerHeader />
      <JobPortal />
    </div>
  );
};

export default Career;
