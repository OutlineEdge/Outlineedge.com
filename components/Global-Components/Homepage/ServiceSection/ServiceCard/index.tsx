"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

interface Props {
  title: string;
  image: string;
  icon: string;
  description: string;
  id: string | number;
  href: string;
  query: string;
}

const ServiceCard = ({
  title,
  image,
  icon,
  description,
  id,
  href,
  query,
}: Props) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative m-auto overflow-hidden bg-black group xl:w-[28rem] xl:h-[18rem] border border-gray-300 hover:shadow-2xl hover:shadow-black hover:border-gray-500 w-[22rem] h-[14rem] hover:scale-105 transition duration-100 ease-in-out transform ">
      <Image
        fill
        className="object-contain w-full h-full duration-700 transform bg-white backdrop-opacity-100"
        src={image}
        alt={image}
      />
      <div className="absolute bottom-0 flex justify-center w-full text-base font-semibold text-white xl:text-lg group-hover:hidden">
        <p className="w-full p-4 text-center shadow-lg bg-black/50 backdrop-blur">
          {title}
        </p>
      </div>
      <div className="absolute w-full h-full duration-200 transform shadow-2xl bg-black/40 inset-y-full group-hover:-inset-y-0 backdrop-blur-md"></div>
      <Link
        href={{
          pathname: href,
          query: { id: query },
        }}
        shallow={true}
        className="absolute flex flex-col w-full h-full mt-24 duration-200 transform cursor-pointer bg-gradient-to-t from-black inset-y-3/4 group-hover:-inset-y-0 group-hover:mt-0 "
      >
        <div className="absolute flex flex-col justify-start w-full px-4 mt-10 space-y-4 left-2">
          <div className="flex items-center space-x-4 ">
            <Image
              width={500}
              height={500}
              className="object-contain w-10 h-10 p-1 bg-white rounded-full "
              src={icon}
              alt={icon}
            />
            <p className="font-serif text-sm font-semibold text-center text-white capitalize xl:text-base">
              {title}
            </p>
          </div>
          <p className="pr-6 font-serif text-xs text-left text-white lg:text-sm ">
            {description}
          </p>
        </div>
        <div className="absolute flex justify-center w-full cursor-pointer bottom-4">
          <Link
            href={{
              pathname: href,
              query: { id: query },
            }}
            shallow={true}
            className="flex items-center justify-center px-2 text-sm text-black bg-white lg:py-1 lg:px-4 lg:text-base w-fit rounded-3xl hover:bg-gray-300 group"
          >
            <div className="no-underline group-hover:text-cyan-600">
              More Insight
            </div>
            <ChevronRight className=" group-hover:text-cyan-600" />
          </Link>
        </div>
      </Link>
    </div>
  );
};

export default ServiceCard;
