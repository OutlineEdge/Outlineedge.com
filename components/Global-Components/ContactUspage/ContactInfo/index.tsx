"use client";
import { data } from "@/config/data";
import { Mail, MapPin, Phone, Smartphone } from "lucide-react";
import React from "react";
import ReactCountryFlag from "react-country-flag";

const ContactInfo = () => {
  return (
    <div className="flex flex-col items-start px-4 space-y-6 text-black md:space-y-12">
      <div className="flex items-start space-x-4 group">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-4">
            <Smartphone className="w-6 h-6 lg:w-8 lg:h-8 group-hover:text-emerald-500" />
            <h1 className="text-sm md:text-xl lg:text-2xl">Give us a call</h1>
          </div>
          <div className="flex items-center ml-2 space-x-4">
            <ReactCountryFlag
              svg
              countryCode={"us"}
              style={{
                fontSize: "2.2em",
                lineHeight: "1.5em",
              }}
            />
            <p className="text-base font-light lg:text-xl">
              {" "}
              {data.contactInfo.phone1}
            </p>
          </div>
          <div className="flex items-center ml-2 space-x-4">
            <ReactCountryFlag
              svg
              countryCode={"bd"}
              style={{
                fontSize: "2.2em",
                lineHeight: "1.5em",
              }}
            />
            <p className="text-base font-light lg:text-xl">
              {" "}
              {data.contactInfo.phone2}
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-start space-x-4 group">
        <Mail className="w-6 h-6 lg:w-8 lg:h-8 group-hover:text-emerald-500" />
        <div className="flex flex-col space-y-2">
          <h1 className="text-sm md:text-xl lg:text-2xl">Send us an email</h1>
          <p className="text-base font-light lg:text-xl">
            {" "}
            {data.contactInfo.email1}
          </p>
          <p className="text-base font-light lg:text-xl">
            {" "}
            {data.contactInfo.email2}
          </p>
        </div>
      </div>
      <div className="flex items-start space-x-4 group">
        <MapPin className="w-8 h-8 group-hover:text-emerald-500" />
        <div className="flex flex-col space-y-2">
          <h1 className="text-sm md:text-xl lg:text-2xl">Location</h1>
          <p className="w-1/2 text-base font-light lg:text-xl">
            {" "}
            {data.contactInfo.address}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
