"use client";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import BrandSlide from "./BrandSlide";
import { data } from "@/config/data";

const BrandsSection = () => {
  return (
    <section className="relative w-full h-full mt-16 ">
      <div className="flex flex-col items-center justify-center w-full ">
        <div className="w-full lg:max-w-screen-xl ">
          <div className="flex flex-col items-center justify-center w-full h-full px-2 mb-12 md:px-4 ">
            <div className="flex flex-col items-center py-16 space-y-5">
              <div className="grid md:items-center md:space-x-4 md:flex place-items-center">
                <h1 className="text-2xl font-medium lg:text-5xl md:text-4xl">
                  BRANDS WE
                </h1>
                <h1 className="text-2xl font-medium lg:text-5xl md:text-4xl text-emerald-500">
                  COLLABORATED WITH
                </h1>
              </div>
            </div>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 7000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Autoplay, Pagination, Navigation]}
              className="w-full h-full"
            >
              {data.brands.map((brand: any, index: number) => (
                <SwiperSlide className="pb-8" key={index}>
                  <BrandSlide data={brand.group} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
