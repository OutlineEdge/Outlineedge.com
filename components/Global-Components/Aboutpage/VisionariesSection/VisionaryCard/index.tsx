"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  image: string;
  description: string;
  title: string;
  name: string;
}

const VisionaryCard = ({ image, description, title, name }: Props) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
      variants={{
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: 50 },
      }}
      className="relative p-4 bg-[#eaeaeb] w-[80%] border before:absolute before:-bottom-2 before:-right-2 before:h-4 before:w-4 before:border-b before:border-r before:transition-all before:duration-300 before:ease-in-out after:absolute after:-top-2 after:-left-2 after:h-4 after:w-4 after:border-t after:border-l after:transition-all after:duration-300 after:ease-in-out hover:before:h-[calc(100%+16px)] hover:before:w-[calc(100%+16px)] hover:after:h-[calc(100%+16px)] hover:after:w-[calc(100%+16px)] after:border-emerald-500 border-emerald-400 before:border-emerald-500 rounded-lg after:rounded-md before:rounded-md"
    >
      <div className="flex flex-wrap justify-center md:space-x-4 lg:flex-nowrap lg:justify-start">
        <Image
          src={image}
          alt={image}
          width={500}
          height={500}
          className="object-cover w-16 h-16 rounded-full md:h-24 md:w-24 "
        />
        <div className="flex flex-col items-center mt-2 space-y-3 lg:items-start">
          <h1 className="text-lg font-bold md:text-2xl">{name}</h1>
          <p className="text-sm font-bold md:text-lg text-[#0d2b2c]">{title}</p>
          <p className="text-xs text-justify text-gray-800 md:text-base">
            {" "}
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default VisionaryCard;
