"use client";
import { data } from "@/config/data";
import images from "@/config/images";
import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import GetInTouch from "../../GetInTouch";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import LogoDark from "@/components/SVG/Logo/LogoDark";
import { usePathname } from "next/navigation";
import { Dropdown, Nav, Navbar, Popover, Whisper } from "rsuite";

const MediumNavbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [isOpenTitle, setIsOpenTitle] = useState(null);
  const pathname = usePathname();
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
  }, [scrollY]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className={cn(
        "fixed z-20 hidden w-full  md:hidden lg:hidden xl:hidden 2xl:block duration-300 transition-all transform ease-in-out",
        scrollY > 10
          ? "bg-white shadow-md  "
          : "bg-transparent backdrop-blur-sm"
      )}
    >
      <div className="flex items-center justify-between pr-6 xl:py-5 xl:pl-24 lg:pl-16 md:py-3">
        <Link href="/" className="relative">
        {scrollY > 10 ? <img src={images.logo1} className=" h-12 " alt=""/> : <img src={images.logo2} className=" h-12 " alt=""/> }
        </Link>

        <div className="flex items-center space-x-8 2xl:space-x-8">
          <div className="flex lg:mt-3 md:space-x-4 lg:space-x-8 md:mt-2">
            {data.navbar.map((nav: any, index: number) => (
              <NavigationMenu key={index}>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    {nav.subMenu.length > 0 ? (
                      <NavigationMenuTrigger className="bg-transparent group">
                        <Link
                          href={nav.href}
                          className={cn(
                            "relative font-normal transition duration-300 xl:text-xl md:text-sm",
                            scrollY > 10
                              ? "text-black hover:text-black active:text-black focus:text-black visited:text-black"
                              : "text-white hover:text-white focus:text-white active:text-white visited:text-white"
                          )}
                        >
                          <span>
                            {String(nav.title).toUpperCase()}
                            <span
                              className={`block lg:h-[0.4rem] xl:h-[0.5rem] transition-all duration-500  bg-cyan-500 rounded-lg text-white text-lg ${
                                nav.href === pathname
                                  ? "w-full "
                                  : "max-w-0 group-hover:max-w-full"
                              }`}
                            ></span>
                          </span>

                          <NavigationMenuContent>
                            <ul className="flex w-[400px] p-4 md:w-[400px] flex-col">
                              {nav.subMenu.map((sub: any, key: number) => (
                                <li key={key}>
                                  <NavigationMenuLink asChild>
                                    <Whisper
                                      placement="leftStart"
                                      trigger="hover"
                                      controlId="control-id-hover-enterable"
                                      speaker={
                                        sub.subLinks.length > 0 &&
                                        isOpenTitle === sub.title ? (
                                          <Popover>
                                            <div className="flex flex-col w-full h-full space-y-2 text-black">
                                              {sub.subLinks.map(
                                                (
                                                  subLink: any,
                                                  sIndex: number
                                                ) => (
                                                  <Link
                                                    href={subLink.href}
                                                    key={sIndex}
                                                  >
                                                    {String(
                                                      subLink.title
                                                    ).toUpperCase()}
                                                    <div className="py-1 mb-2 border-b-[2px] border-gray-200" />
                                                  </Link>
                                                )
                                              )}
                                            </div>
                                          </Popover>
                                        ) : (
                                          <Popover className="relative hidden"></Popover>
                                        )
                                      }
                                      enterable
                                      onEntered={() =>
                                        setIsOpenTitle(sub.title)
                                      }
                                    >
                                      <Link
                                        href={{
                                          pathname: sub.href,
                                          query: { id: sub.query },
                                        }}
                                        shallow={true}
                                        className={cn(
                                          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent  focus:bg-accent focus:text-emerald-600 hover:text-emerald-600"
                                        )}
                                      >
                                        {" "}
                                        <button className="w-full text-sm font-medium leading-none text-left">
                                          <span>
                                            {String(sub.title).toUpperCase()}
                                          </span>

                                          <div className="py-1 mb-2 border-b-[2px] border-gray-200" />
                                        </button>
                                      </Link>
                                    </Whisper>
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                          </NavigationMenuContent>
                        </Link>
                      </NavigationMenuTrigger>
                    ) : (
                      <NavigationMenuLink>
                        <Link
                          href={nav.href}
                          className={cn(
                            "relative font-normal transition duration-300 xl:text-xl  md:text-sm",
                            scrollY > 10
                              ? "text-black hover:text-black active:text-black focus:text-black visited:text-black"
                              : "text-white hover:text-white focus:text-white active:text-white visited:text-white"
                          )}
                        >
                          <span>
                            {String(nav.title).toUpperCase()}
                            <span
                              className={`block lg:h-[0.4rem] xl:h-[0.5rem] transition-all duration-500  bg-cyan-500 rounded-lg text-white text-lg ${
                                nav.href === pathname
                                  ? "w-full "
                                  : "max-w-0 group-hover:max-w-full"
                              }`}
                            ></span>
                          </span>
                        </Link>
                      </NavigationMenuLink>
                    )}
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            ))}
          </div>
          <GetInTouch />
        </div>
      </div>
    </div>
  );
};

export default MediumNavbar;
