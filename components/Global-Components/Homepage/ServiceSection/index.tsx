import { data } from "@/config/data";
import ServiceCard from "./ServiceCard";
import { twMerge } from "tailwind-merge";
import Slideup from "../../SlideUp";

const ServiceSection = () => {
  return (
    <section className="relative w-full h-full mt-16 ">
      <div className="flex flex-col items-center justify-center w-full ">
        <div className="w-full lg:max-w-screen-2xl ">
          <div className="flex flex-col items-center justify-center w-full h-full px-2 mb-12 md:px-4 ">
            <div className="flex flex-col items-center py-16 space-y-5">
              <div className="flex items-center space-x-4">
                <h1 className="text-2xl font-medium lg:text-5xl md:text-4xl">
                  OUR
                </h1>
                <h1 className="text-2xl font-medium lg:text-5xl md:text-4xl text-emerald-500">
                  SERVICES
                </h1>
              </div>
              <p className="w-4/5 text-sm text-center lg:w-3/5 lg:text-xl md:text-lg">
                End-to-End strategic partner with efficient and on-demand
                design, engineering, and development services
              </p>
            </div>
            <Slideup index={0}>
              <div className="grid grid-cols-1 gap-4 2xl:grid-cols-3 md:grid-cols-2">
                {data.services.map((service: any, index: number) => (
                  <ServiceCard
                    title={service.title}
                    image={service.image}
                    icon={service.icon}
                    description={service.description}
                    id={index}
                    key={index}
                    href={service.href}
                    query={service.query}
                  />
                ))}
              </div>
            </Slideup>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
