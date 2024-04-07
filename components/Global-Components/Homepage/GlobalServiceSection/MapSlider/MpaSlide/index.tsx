"use client";
import React, { useEffect, useState } from "react";
import ReactCountryFlag from "react-country-flag";
interface Props {
  continent: string;
  countries: string[];
}
const MapSlide = ({ continent, countries }: Props) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className="flex-[0_0_100%]  aspect-video w-full  mx-4  relative  xl:h-48 h-full">
      <div className="flex flex-col items-center p-4 space-y-4">
        <h1 className="text-sm font-bold md:text-xl">{continent}</h1>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:flex xl:justify-center ">
          {countries.map((country: any, index: number) => (
            <div
              key={index}
              className={`flex flex-col items-center w-40 h-full py-6 rounded-lg shadow-lg cursor-pointer hover:scale-110 shadow-gray-400 ${country.color}`}
            >
              <ReactCountryFlag
                svg
                countryCode={String(country.code)}
                style={{
                  fontSize: "2.2em",
                  lineHeight: "1.5em",
                }}
              />
              <span className="text-sm text-center">{country.country}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MapSlide;
