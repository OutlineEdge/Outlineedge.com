"use client";
import React, { useEffect, useState } from "react";
import { data } from "@/config/data";
import Link from "next/link";
import {
  Facebook,
  Linkedin,
  LucideLink,
  Twitter,
  X,
  Youtube,
} from "lucide-react";
import Subscribe from "./Subscribe";
import ScrollToTop from "../ScrollToTop";
import { Popover, Whisper, Button, ButtonToolbar } from "rsuite";

const MapPopOver = (
  <Popover>
    <div className="w-full md:w-96 h-96 ">
      <iframe
        width="100%"
        height="100%"
        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=26%20Broadway%20934%20934,%20New%20York,%20NY%2010004,%20USA+(Xfosoft)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      >
        <a href="https://www.maps.ie/population/">Population mapping</a>
      </iframe>
    </div>
  </Popover>
);

const FooterSection = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <section className="relative bottom-0 w-full h-full mt-4">
      <div className="relative flex flex-col items-center w-full h-full py-4 space-y-2 bg-slate-200">
        <div className="grid justify-center w-full grid-cols-2 gap-4 p-4 overflow-hidden lg:gap-12 xl:grid-cols-4 lg:grid-cols-3 md:gap-8">
          <div className="flex flex-col justify-center order-3 space-y-4 text-gray-800 xl:order-none active:text-gray-800 focus:text-gray-800">
            {" "}
            <Whisper
              placement="top"
              trigger="hover"
              controlId="control-id-hover-enterable"
              speaker={MapPopOver}
              enterable
            >
              <button
                className="text-xs text-justify md:text-sm lg:text-base"
                data-tooltip-id="my-tooltip"
              >
                <strong>Address : </strong>
                <em className="hover:text-[#2a9597]">{data.footer.address1}</em>
              </button>
            </Whisper>
            <p className="text-xs text-justify md:text-sm lg:text-base">
              <strong>Contact : </strong> {data.footer.contact_number}
            </p>
            <div className="flex flex-wrap items-center space-x-1 text-xs text-justify md:text-sm lg:text-base md:flex-nowrap">
              <strong> HR : </strong>{" "}
              <a
                className="hover:text-[#2a9597] text-[12px] sm:text-xs text-justify md:text-sm lg:text-base"
                href={`mailto:${data.footer.email1}`}
              >
                {data.footer.email1}
              </a>
            </div>
            <div className="flex flex-wrap items-center space-x-1 text-xs text-justify md:text-sm lg:text-base md:flex-nowrap">
              <strong> Email : </strong>{" "}
              <a
                className="hover:text-[#2a9597] text-[12px] sm:text-xs text-justify md:text-sm lg:text-base"
                href={`mailto:${data.footer.email2}`}
              >
                {data.footer.email2}
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <Link
                href={data.footer.facebook}
                target="_blank"
                className="p-1 rounded-full md:p-4 bg-slate-800 hover:bg-sky-600 hover:text-transparent"
              >
                <Facebook className="fill-white " />
              </Link>
              <Link
                href={data.footer.twitter}
                target="_blank"
                className="p-1 rounded-full md:p-4 bg-slate-800 hover:bg-blue-600 hover:text-transparent"
              >
                <X className="text-white fill-white" />
              </Link>
              <Link
                href={data.footer.facebook}
                target="_blank"
                className="p-1 rounded-full md:p-4 bg-slate-800 hover:bg-sky-700 hover:text-transparent"
              >
                <Linkedin className="fill-white " />
              </Link>
              <Link
                href={data.footer.facebook}
                target="_blank"
                className="p-1 rounded-full md:p-4 bg-slate-800 hover:bg-red-600 hover:text-black"
              >
                <Youtube className="fill-white " />
              </Link>
            </div>
          </div>
          <div className="flex flex-col justify-start order-4 space-y-4 text-gray-800 xl:order-none active:text-gray-800 focus:text-gray-800">
            <p className="space-y-2 text-xs text-justify md:text-sm lg:text-base">
              <strong className="underline ">Useful Links</strong>
              <div className="flex flex-col space-y-2">
                {data.footer.useful_links.map((link: any, index: number) => (
                  <Link
                    href={link.href}
                    key={index}
                    className="flex items-center gap-2 hover:text-emerald-600 hover:underline active:text-gray-800 focus:text-gray-800"
                  >
                    <LucideLink className="w-4 h-4" />
                    {link.title}
                  </Link>
                ))}
              </div>
            </p>
          </div>
          <div className="flex flex-col justify-start order-1 space-y-4 text-gray-800 xl:order-none active:text-gray-800 focus:text-gray-800">
            <p className="space-y-2 text-xs text-justify md:text-sm lg:text-base">
              <strong className="underline">Services</strong>
              <div className="flex flex-col space-y-2">
                {data.footer.services.map((link: any, index: number) => (
                  <Link
                    href={{
                      pathname: link.href,
                      query: { id: link.query },
                    }}
                    shallow={true}
                    key={index}
                    className="flex items-center gap-2 break-words hover:text-emerald-600 hover:underline active:text-gray-800 focus:text-gray-800"
                  >
                    <LucideLink className="w-4 h-4" />
                    {String(link.title)}
                  </Link>
                ))}
              </div>
            </p>
          </div>
          <div className="flex flex-col justify-start order-2 space-y-4 text-gray-800 xl:order-none active:text-gray-800 focus:text-gray-800">
            <p className="space-y-2 text-xs text-justify md:text-sm lg:text-base">
              <strong className="underline">Support</strong>
              <div className="flex flex-col space-y-2">
                {data.footer.support.map((link: any, index: number) => (
                  <Link
                    href={link.href}
                    key={index}
                    className="flex items-center gap-2 hover:text-emerald-600 hover:underline active:text-gray-800 focus:text-gray-800"
                  >
                    <LucideLink className="w-4 h-4" />
                    {link.title}
                  </Link>
                ))}
                <Subscribe />
              </div>
            </p>
          </div>
        </div>
        <div className="w-full h-1 border-t-2 border-slate-300" />
        <span className="px-2 text-center ">
          Copyright ©️ 2023 Xfosoft IT Solutions - All Rights Reserved
        </span>
      </div>
      <ScrollToTop />
    </section>
  );
};

export default FooterSection;
