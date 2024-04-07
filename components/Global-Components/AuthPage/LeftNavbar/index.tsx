"use client";
import images from "@/config/images";
import {
  AlignJustify,
  BarChart,
  BarChartIcon,
  Briefcase,
  Cross,
  Home,
  SendHorizonal,
  SubscriptIcon,
  Table,
  X,
} from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import NavBtn from "./NavBtn";

const LeftNavbar = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [path, setPath] = useState<string>("");
  const pathname = usePathname();
  useEffect(() => {
    if (pathname === "/dashboard") {
      setPath("Dashboard");
    }
    if (pathname === "/dashboard/post-job") {
      setPath("POST JOB");
    }
    if (pathname === "/dashboard/jobs") {
      setPath("ALL JOBS");
    }
    if (pathname === "/dashboard/subscribe") {
      setPath("Subscriptions");
    }
  }, [pathname]);
  return (
    <div className="min-h-screen bg-gray-50/50">
      <ToastContainer />
      <aside
        className={`bg-gradient-to-br from-gray-800 to-gray-900  fixed inset-0 z-30  h-full w-72  transition-transform duration-300 translate-x-0 ${
          isOpen === false
            ? "hidden md:hidden lg:block xl:block"
            : "block md:block lg:hidden xl:hidden"
        }`}
      >
        <div className="relative border-b border-white/20">
          <a className="flex items-center gap-4 px-8 py-6" href="#/">
            <h6 className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-white">
              XFOSOFT DASHBOARD
            </h6>
          </a>
        </div>
        <div className="m-4">
          <ul className="flex flex-col gap-1 mb-4">
            <NavBtn title={"Dashboard"} activeTitle={path} href={"/dashboard"}>
              <Home />
            </NavBtn>
            <NavBtn
              title={"Post Job"}
              activeTitle={path}
              href={"/dashboard/post-job"}
            >
              <Briefcase />
            </NavBtn>
            <NavBtn
              title={"All Jobs"}
              activeTitle={path}
              href={"/dashboard/jobs"}
            >
              <Table />
            </NavBtn>
            <NavBtn
              title={"Subscriptions"}
              activeTitle={path}
              href={"/dashboard/subscribe"}
            >
              <SendHorizonal />
            </NavBtn>
          </ul>
          <ul className="flex flex-col gap-1 mb-4">
            <li className="mx-3.5 mt-4 mb-2">
              <p className="block font-sans text-sm antialiased font-black leading-normal text-white uppercase opacity-75">
                User Action
              </p>
            </li>
            <li>
              <button
                className="flex items-center w-full gap-4 px-4 py-3 font-sans text-xs font-bold text-white capitalize transition-all rounded-lg middle none center disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-white/10 active:bg-white/30"
                type="button"
                onClick={() =>
                  signOut({ redirect: true, callbackUrl: "/auth/login" })
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="w-5 h-5 text-inherit"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <p className="block font-sans text-base antialiased font-medium leading-relaxed capitalize text-inherit">
                  sign out
                </p>
              </button>
            </li>
          </ul>
        </div>
      </aside>
      <div className="p-4 xl:ml-80">
        <nav className="block w-full max-w-full px-0 py-1 text-white transition-all bg-transparent shadow-none rounded-xl">
          <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
            <div className="w-full capitalize">
              <nav
                aria-label="breadcrumb"
                className="flex items-center justify-between w-full "
              >
                <ol className="flex flex-wrap items-center w-full p-0 transition-all bg-transparent rounded-md bg-opacity-60">
                  <li className="flex items-center font-sans text-sm antialiased font-normal leading-normal transition-colors duration-300 cursor-pointer text-blue-gray-900 hover:text-light-blue-500">
                    <a href="#">
                      <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-900 transition-all opacity-50 hover:text-blue-500 hover:opacity-100">
                        dashboard
                      </p>
                    </a>
                    <span className="mx-2 font-sans text-sm antialiased font-normal leading-normal text-gray-500 pointer-events-none select-none">
                      /
                    </span>
                  </li>
                  <li className="flex items-center font-sans text-sm antialiased font-normal leading-normal text-blue-900 transition-colors duration-300 cursor-pointer hover:text-blue-500">
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                      {path === "Dashboard" ? "" : path.toLowerCase()}
                    </p>
                  </li>
                </ol>
                <button
                  className="relative middle float-right none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] rounded-lg text-xs text-gray-500 hover:bg-blue-gray-500/10 active:bg-blue-gray-500/30 grid xl:hidden"
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                      stroke-width="3"
                      className="w-6 h-6 text-blue-gray-500"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </button>
              </nav>
              <h6 className="block my-4 font-sans text-3xl antialiased font-semibold leading-relaxed tracking-normal text-gray-900">
                {path}
              </h6>
            </div>
          </div>
        </nav>
        {children}
        <div className="flex flex-wrap justify-center my-12">
          Copyright ©️ 2023 Xfosoft IT Solutions - All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default LeftNavbar;
