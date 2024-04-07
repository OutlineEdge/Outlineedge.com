"use client";
import { Button } from "@/components/ui/button";
import { data } from "@/config/data";
import images from "@/config/images";
import { useNavbarStore, useSubNavbarStore } from "@/utils/store";
import { AlignJustify, ChevronDown, ChevronUp, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import GetInTouch from "../../GetInTouch";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

const SmallNavbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const setId = useNavbarStore((state) => state.setId);
  const id = useNavbarStore((state) => state.id);
  const isOpen = useNavbarStore((state) => state.isOpen);
  const setIsOpen = useNavbarStore((state) => state.setIsOpen);

  const subId = useSubNavbarStore((state) => state.subId);
  const subIsOpen = useSubNavbarStore((state) => state.subIsOpen);
  const setSubIsOpen = useSubNavbarStore((state) => state.setSubIsOpen);
  const setSubId = useSubNavbarStore((state) => state.setSubId);

  const [scrollY, setScrollY] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;

    setScrollY(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (sidebarOpen) {
      document.documentElement.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "scroll";
    }
  }, [sidebarOpen]);

  return (
    <div
      className={`fixed z-20 block w-full bg-transparent  md:block lg:block xl:block 2xl:hidden  ${
        scrollY > 15 ? "bg-black/5 backdrop-blur-lg" : "backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center justify-between px-4 py-1">
        <Link href="/" className="relative w-32 h-20 ml-0 md:ml-10">
          <Image
            alt="logo"
            src={scrollY > 15 ? images.logo1 : images.logo2}
            className="h-6 mt-6" width={700} height={100}
          />
        </Link>

        <Button
          className={`bg-transparent hover:bg-transparent  ${
            scrollY > 15 ? "text-black" : "text-white"
          }`}
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen === true ? <X /> : <AlignJustify />}
        </Button>
      </div>
      {sidebarOpen && (
        <AnimatePresence>
          <motion.div
            initial={{ x: "100%" }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "100%",
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="relative flex flex-col w-full h-screen p-4 space-y-4 overflow-y-auto bg-white animate-fade-left animate-once animate-duration-500 animate-ease-in"
          >
            {data.navbar.map((nav: any, index: number) => (
              <div key={index}>
                <div>
                  <div className="flex items-center justify-between w-full">
                    <Link
                      href={nav.href}
                      className="text-lg font-medium text-gray-700 hover:text-cyan-600"
                      onClick={() => setSidebarOpen(false)}
                    >
                      {String(nav.title).toUpperCase()}
                    </Link>
                    {nav.subMenu.length > 0 &&
                      (isOpen === true && id === nav.title ? (
                        <ChevronUp
                          onClick={() => {
                            setId(nav.title);
                            setIsOpen(false);
                          }}
                        />
                      ) : (
                        <ChevronDown
                          onClick={() => {
                            setId(nav.title);
                            setIsOpen(true);
                          }}
                        />
                      ))}
                  </div>
                  <div className="border-b-[2px] border-gray-200 w-full py-1" />
                </div>

                {nav.subMenu.length > 0 &&
                  id === nav.title &&
                  isOpen === true && (
                    <div className="flex flex-col w-full p-4 space-y-2 bg-gray-100">
                      {nav.subMenu.map((sub: any, key: number) => (
                        <div key={key}>
                          <div className="flex justify-between">
                            <Link
                              href={{
                                pathname: sub.href,
                                query: { id: sub.query },
                              }}
                              shallow={true}
                              className="text-gray-600 hover:text-cyan-500"
                              onClick={() => setSidebarOpen(false)}
                            >
                              {String(sub.title).toUpperCase()}
                            </Link>
                            {sub.subLinks.length > 0 &&
                              (subIsOpen === true && subId === sub.title ? (
                                <ChevronUp
                                  onClick={() => {
                                    setSubId(sub.title);
                                    setSubIsOpen(false);
                                  }}
                                />
                              ) : (
                                <ChevronDown
                                  onClick={() => {
                                    setSubId(sub.title);
                                    setSubIsOpen(true);
                                  }}
                                />
                              ))}
                          </div>
                          {sub.subLinks.length > 0 &&
                            subId === sub.title &&
                            subIsOpen === true && (
                              <div className="flex flex-col w-full p-4 space-y-2 bg-gray-100">
                                {sub.subLinks.map(
                                  (subLink: any, sIndex: number) => (
                                    <div key={sIndex}>
                                      <p>{subLink.title}</p>
                                      <div className="border-b-[2px] border-gray-300 w-full py-1" />
                                    </div>
                                  )
                                )}
                              </div>
                            )}

                          <div className="border-b-[2px] border-gray-300 w-full py-1" />
                        </div>
                      ))}
                    </div>
                  )}
              </div>
            ))}
            <GetInTouch setSidebarOpen={setSidebarOpen} />
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default SmallNavbar;
