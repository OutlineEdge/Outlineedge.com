"use client";

import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface Props {
  data: any[];
}
const InfiniteLooper = ({ data }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2000 }),
  ]);

  return (
    <div className="xl:w-[78.5rem] md:w-[48rem] sm:w-[30rem] w-80 relative h-full  px-12 lg:px-0">
      <div className="relative flex items-center w-full">
        <div
          className="relative z-0 w-full h-full overflow-hidden "
          ref={emblaRef}
        >
          <div className="flex items-center ">
            {data.map((sdData: any, index: number) => (
              <Image
                width={500}
                height={500}
                alt={sdData}
                src={sdData}
                key={index}
                className="object-cover w-8 h-8 mx-4 lg:mx-8 lg:h-12 lg:w-12"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfiniteLooper;
