"use client";
import Image from "next/image";
import { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
interface Props {
  id: string;
  number: number;
  title: string;
  icon: string;
}

const Ticker = ({ className, ...rest }: any) => {
  const [viewPortEntered, setViewPortEntered] = useState(false);
  return (
    <CountUp {...rest} start={viewPortEntered ? null : 0}>
      {({ countUpRef }: any) => {
        return (
          <VisibilitySensor
            active={!viewPortEntered}
            onChange={(isVisible: any) => {
              if (isVisible) {
                setViewPortEntered(true);
              }
            }}
            delayedCall
          >
            <h4 className={className} ref={countUpRef} />
          </VisibilitySensor>
        );
      }}
    </CountUp>
  );
};

const SummaryCard = ({ id, number, title, icon }: Props) => {
  return (
    <div className="w-40 h-40 transition-all duration-200 ease-in-out transform bg-white rounded-lg shadow-md aspect-square shadow-slate-400 hover:scale-110 md:w-48 md:h-48 hover:border hover:border-emerald-300">
      <div className="flex flex-col items-center justify-center w-full h-full space-y-2">
        <Image
          className="object-center w-12 h-12 "
          width={500}
          height={500}
          src={icon}
          alt={icon}
        />
        <div className="flex items-center text-2xl font-bold md:text-3xl">
          {/* <Ticker className="count" end={number} /> */}
          <CountUp end={number} redraw={true}>
            {({ countUpRef, start }) => (
              <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
              </VisibilitySensor>
            )}
          </CountUp>
          <p>+</p>
        </div>
        <h2 className="text-sm font-medium text-center md:text-lg">{title}</h2>
      </div>
    </div>
  );
};

export default SummaryCard;
