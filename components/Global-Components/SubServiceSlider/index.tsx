"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SDCard from "../SDCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";

interface Props {
  data: any[];
}
const SubServiceSlider = ({ data }: Props) => {
  const swiperRef: any = useRef();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1920,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  return (
    <div className="xl:w-[74rem] lg:w-[49rem] sm:w-[20rem] w-80 relative h-full md:w-96">
      <div className="relative flex flex-col items-center justify-center w-full ">
        <div className="absolute z-10 flex items-center justify-between w-full cursor-pointer ">
          <button
            className="relative hover:text-cyan-700 md:right-10 right-4"
            onClick={() => swiperRef.current?.slickPrev()}
          >
            <ChevronLeft className="lg:h-10 lg:w-10 " />
          </button>
          <button
            className="relative hover:text-cyan-700 md:left-10 left-4"
            onClick={() => swiperRef.current?.slickNext()}
          >
            <ChevronRight className="lg:h-10 lg:w-10 " />
          </button>
        </div>

        <div className="relative z-0 w-full h-full ml-2 overflow-hidden ">
          <Slider ref={swiperRef} {...settings}>
            {data.map((sdData: any, index: number) => (
              <SDCard
                title={sdData.title}
                description1={sdData.description1}
                description2={sdData.description2}
                image={sdData.image}
                key={index}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default SubServiceSlider;
