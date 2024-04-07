import { ChevronRight, MoveRight } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  setSidebarOpen?: (event: boolean) => void;
}

const GetInTouch = ({ setSidebarOpen }: Props) => {
  const pathname = usePathname();
  return (
    <Link
      href="/contact-us"
      className={`relative flex items-center p-2  border-2 border-gray-300 h-10 w-44 rounded-3xl group ${
        String(pathname) === "/contact-us"
          ? "bg-[#238f91]"
          : "bg-white hover:bg-[#238f91]"
      }`}
      onClick={() =>
        setSidebarOpen !== undefined ? setSidebarOpen(false) : null
      }
    >
      <ChevronRight
        className={`h-6 w-7  rounded-full relative  ${
          String(pathname) === "/contact-us"
            ? "bg-white text-[#238f91] translate-x-[8.4rem] "
            : "bg-cyan-600 group-hover:bg-white duration-500 ease-in-out transition-all transform translate-x-0 group-hover:translate-x-[8.4rem] group-hover:text-[#238f91]"
        }`}
      />
      <p
        className={`relative w-full text-center   no-underline font-medium text-base  ${
          String(pathname) === "/contact-us"
            ? "-translate-x-6 text-white"
            : "text-black group-hover:text-white duration-500 ease-in-out translate-x-0 group-hover:-translate-x-6 transition-all transform"
        }`}
      >
        GET IN TOUCH
      </p>
    </Link>
  );
};

export default GetInTouch;
