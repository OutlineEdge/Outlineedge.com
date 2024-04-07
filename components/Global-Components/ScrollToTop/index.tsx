import { ChevronUp } from "lucide-react";
import React from "react";

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="absolute right-5 bottom-20 md:right-9 md:bottom-24">
      <button
        onClick={scrollToTop}
        className="p-2 text-white rounded-full bg-emerald-700 hover:bg-emerald-500"
      >
        <ChevronUp />
      </button>
    </div>
  );
};

export default ScrollToTop;
