"use client";
import React, { useState } from "react";
import { MapData } from "./mapData";
import MapSlide from "./MpaSlide";
import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

const MapSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const handlePrevious = () => {
    emblaApi?.scrollPrev();
  };

  const handleNext = () => {
    emblaApi?.scrollNext();
  };

  return (
    <>
      <div className="xl:w-[80rem] xl:h-48  md:w-[50rem] sm:w-[30rem] w-[22rem] relative h-full -mt-14">
        <div className="relative flex items-center w-full">
          <button
            className="absolute z-10 cursor-pointer -left-5 md:left-0 hover:text-cyan-700"
            onClick={handlePrevious}
          >
            <ChevronLeft />
          </button>
          <button
            className="absolute z-10 cursor-pointer -right-5 md:right-0 hover:text-cyan-700"
            onClick={handleNext}
          >
            <ChevronRight />
          </button>
          <div
            className="relative z-0 w-full h-full overflow-hidden "
            ref={emblaRef}
          >
            <div className="flex items-center ">
              {MapData.map((slide: any, index: number) => (
                <MapSlide
                  continent={slide.continent.title}
                  countries={slide.continent.countries}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MapSlider;
