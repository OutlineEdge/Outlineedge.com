"use client";
import { data } from "@/config/data";
import { motion, useScroll, useTransform } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";
interface Props {
  scale: any;
}
const Card2 = ({ scale }: Props) => {
  return (
    <VisibilitySensor>
      {({ isVisible }: any) => (
        <motion.div
          style={{ scale: scale }}
          className=" card xl:h-[40rem] h-[26rem] md:h-[35rem]"
          id="card1"
        >
          <div className="h-full overflow-hidden bg-white card-body rounded-3xl ">
            <div className="hidden w-full h-full lg:grid lg:grid-cols-2">
              <div className="flex flex-col justify-around gap-8 p-8 ">
                <div className="flex items-center gap-2">
                  <motion.div
                    className="border-l-[0.4rem] border-[#336d79] h-full"
                    initial="hidden"
                    whileInView={isVisible ? "visible" : "hidden"}
                    viewport={{ once: false }}
                    transition={{ duration: 1.5 }}
                    variants={{
                      visible: {
                        opacity: 1,
                        scale: 1.4,
                      },
                      hidden: {
                        opacity: 0,
                        scale: 1,
                      },
                    }}
                  />
                  <motion.h1
                    initial="hidden"
                    whileInView={isVisible ? "visible" : "hidden"}
                    viewport={{ once: false }}
                    transition={{ duration: 1.5 }}
                    variants={{
                      visible: {
                        opacity: 1,
                        fontSize: "85px",
                      },
                      hidden: {
                        opacity: 0,
                        fontSize: "50px",
                      },
                    }}
                    className="hidden px-2 font-bold md:hidden lg:block xl:block"
                  >
                    {data.howWeWork.content[1].title}
                  </motion.h1>
                </div>
                <motion.p
                  initial="hidden"
                  whileInView={isVisible ? "visible" : "hidden"}
                  viewport={{ once: false }}
                  transition={{ duration: 1 }}
                  variants={{
                    visible: {
                      opacity: 1,
                      scale: 1,
                    },
                    hidden: {
                      opacity: 0,
                      scale: 0,
                    },
                  }}
                  className="hidden text-base text-justify font-extralight xl:text-3xl md:text-xl md:hidden lg:block xl:block"
                >
                  {data.howWeWork.content[1].description}
                </motion.p>
              </div>
              <div className="relative hidden overflow-hidden md:hidden lg:block xl:block">
                <div className="absolute w-full h-full font-extrabold leading-tight pl-4 xl:text-[10rem] flex items-center justify-center bg-gray-900/60 text-white mix-blend-multiply z-10 md:text-[7rem]">
                  HOW WE WORK
                </div>
                <motion.img
                  initial="hidden"
                  whileInView={isVisible ? "visible" : "hidden"}
                  viewport={{ once: false }}
                  transition={{ duration: 2 }}
                  variants={{
                    visible: {
                      opacity: 1,
                      scale: 1.5,
                      x: "15%",
                    },
                    hidden: {
                      opacity: 0,
                      scale: 1,
                      x: 0,
                    },
                  }}
                  src={data.howWeWork.content[1].image}
                  alt={data.howWeWork.content[1].image}
                  className="absolute object-cover w-full h-full -z-5 group-hover:scale-125"
                />
              </div>
            </div>
            <div className="relative block w-full h-full overflow-hidden md:block lg:hidden xl:hidden">
              <div className="absolute z-10 flex flex-col items-center justify-center w-full h-full gap-4 p-4 leading-tight text-center text-white bg-gray-900/40 md:gap-8">
                <p className="text-3xl font-extrabold md:text-5xl">
                  {data.howWeWork.content[1].title}
                </p>
                <p className="text-lg md:text-2xl">
                  {data.howWeWork.content[1].description}
                </p>
              </div>
              <motion.img
                initial="hidden"
                whileInView={isVisible ? "visible" : "hidden"}
                viewport={{ once: false }}
                transition={{ duration: 2 }}
                variants={{
                  visible: {
                    scale: 1.5,
                    x: "10%",
                  },
                  hidden: {
                    scale: 1,
                    x: 0,
                  },
                }}
                src={data.howWeWork.content[1].image}
                alt={data.howWeWork.content[1].image}
                className="absolute object-cover w-full h-full -z-5 group-hover:scale-125"
              />
            </div>
          </div>
        </motion.div>
      )}
    </VisibilitySensor>
  );
};

export default Card2;
