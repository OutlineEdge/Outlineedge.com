"use client";
import { useFaqStore } from "@/utils/store";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

type Props = {
  question: string;
  answer: string;
  id: any;
};
const FaqCard = ({ question, answer, id }: Props) => {
  const [active, setActive] = useState<boolean>(false);
  const faqId = useFaqStore((state) => state.faqId);
  const faqIsOpen = useFaqStore((state) => state.faqIsOpen);
  const setFaqIsOpen = useFaqStore((state) => state.setFaqIsOpen);
  const setFaqId = useFaqStore((state) => state.setFaqId);

  return (
    <div className="relative z-10 w-full rounded-lg shadow-md bg-slate-100 shadow-gray-400">
      <div className="flex items-center justify-between p-6 ">
        <div className="flex flex-col items-start space-y-1">
          <p className="text-base font-semibold text-gray-800 lg:text-xl md:text-lg">
            {question}
          </p>

          {faqId === id && active === true ? (
            <p className="py-2 pr-2 text-sm font-light text-gray-700 lg:text-lg md:text-base">
              {answer}
            </p>
          ) : null}
        </div>
        <button
          onClick={() => {
            setActive(!active);
            setFaqIsOpen(!faqIsOpen);
            setFaqId(id);
          }}
        >
          {faqId === id && active === true ? (
            <FontAwesomeIcon
              icon={faMinus}
              className="py-[2px] px-[3px] border-2 border-black rounded-full"
            />
          ) : (
            <FontAwesomeIcon
              icon={faPlus}
              className="py-[2px] px-[3px] border-2 border-black rounded-full"
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default FaqCard;
