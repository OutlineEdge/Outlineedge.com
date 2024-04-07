import Image from "next/image";
import React from "react";
interface Props {
  title: string;
  description1: string;
  description2: string;
  image: string;
}
const SDCard = ({ title, description1, description2, image }: Props) => {
  return (
    <div className="flex flex-col items-center p-4 space-y-6 border-2 border-dotted rounded-lg  md:h-[28rem] md:w-96 border-slate-500 aspect-square w-72 h-96 xl:h-[30rem] bg-white ml-3 md:ml-0">
      <Image
        width={500}
        height={500}
        src={image}
        alt={image}
        className="object-cover w-10 h-10 md:h-16 md:w-16"
      />
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-sm font-semibold text-center lg:text-xl">
          {title}
        </h1>
        <p className="text-xs text-center md:text-sm">{description1}</p>
        <p className="text-xs text-center md:text-sm">{description2}</p>
      </div>
    </div>
  );
};

export default SDCard;
