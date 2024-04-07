import Image from "next/image";
import React from "react";
interface Props {
  icon: string;
  title: string;
  description: string;
  index: number;
}
const AboutSummaryCard = ({ icon, title, description, index }: Props) => {
  return (
    <div
      className={`transition-all duration-300 ease-in-out hover:bg-gradient-to-t from-slate-300 via-slate-100 to-slate-100 hover:rounded-xl hover:scale-110 hover:shadow-lg hover:shadow-slate-600  ${
        index === 1 && "md:border-x-2 border-x-0"
      }`}
    >
      <div className="flex flex-col items-center p-6 space-y-2 text-center lg:space-y-4 lg:p-8 xl:text-justify">
        <img src={icon} alt={icon} className="w-16 h-16" />
        <h1 className="text-lg font-semibold xl:text-3xl">{title}</h1>
        <p className="text-xs text-gray-900 xl:text-base md:text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};

export default AboutSummaryCard;
