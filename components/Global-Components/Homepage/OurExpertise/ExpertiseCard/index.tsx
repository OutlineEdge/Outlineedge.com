"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface Props {
  title: string;
  description: string;
  image: string;
  order: string;
}

const ExpertiseCard = ({ title, description, image, order }: Props) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      transition={{ duration: 1 }}
      variants={{
        visible: {
          opacity: 1,
          x: 0,
        },
        hidden: {
          opacity: 0,
          x: String(order).toLowerCase() === "last" ? -100 : 100,
        },
      }}
      className="grid p-2 md:items-center md:grid-cols-5"
    >
      <Image
        src={image}
        alt={image}
        width={500}
        height={500}
        className="object-contain w-full h-32 md:col-span-2 md:h-48 "
      />
      <div
        className={`flex flex-col space-y-4 md:col-span-3 ${
          order.toLowerCase() === "last" ? "md:order-first" : "md:order-last"
        }`}
      >
        <h1
          className={`lg:text-xl font-semibold text-center text-base ${
            order.toLowerCase() === "last" ? "md:text-right " : "md:text-left "
          }`}
        >
          {title}
        </h1>
        <p
          className={`lg:text-base font-light text-justify text-xs ${
            order.toLowerCase() === "last" ? "md:text-right" : "md:text-left"
          }`}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default ExpertiseCard;
