"use client";
import { motion } from "framer-motion";

interface Props {
  title: string;
  description: string;
  image: string;
  order: string;
}

const WCUCard = ({ title, description, image, order }: Props) => {
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
      className="relative p-4 group md:w-72 xl:w-80 border before:absolute before:-bottom-2 before:-right-2 before:h-4 before:w-4 before:border-b before:border-r before:transition-all before:duration-300 before:ease-in-out after:absolute after:-top-2 after:-left-2 after:h-4 after:w-4 after:border-t after:border-l after:transition-all after:duration-300 after:ease-in-out hover:before:h-[calc(100%+16px)] hover:before:w-[calc(100%+16px)] hover:after:h-[calc(100%+16px)] hover:after:w-[calc(100%+16px)] after:border-emerald-500 border-emerald-400 before:border-emerald-500 rounded-lg after:rounded-md before:rounded-md shadow-xl w-[80%] bg-white"
    >
      <div className="flex flex-col items-center">
        <img
          src={image}
          alt={image}
          className={`object-cover lg:h-[13rem] rounded-md w-full h-40 ${
            order.toLowerCase() === "last" ? "order-last" : "order-first"
          }`}
        />
        <div className="flex flex-col mt-2 md:space-y-6">
          <p
            className={`xl:text-xl font-bold text-sm md:text-lg  ${
              order.toLowerCase() === "last" ? "text-right" : "text-center"
            }`}
          >
            {title}
          </p>
          <p
            className={`xl:text-base font-light text-xs md:text-sm ${
              order.toLowerCase() === "last" ? "text-right" : "text-justify "
            }`}
          >
            {" "}
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default WCUCard;
