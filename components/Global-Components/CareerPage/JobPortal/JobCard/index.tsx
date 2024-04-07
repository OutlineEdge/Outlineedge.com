"use client";
import { useCareerStore } from "@/utils/store";
import ReactCountryFlag from "react-country-flag";
import {
  Briefcase,
  CheckCheck,
  CircleDollarSign,
  Clock,
  CornerDownRight,
  CornerRightUp,
  CornerUpRight,
  CreativeCommons,
  HeartHandshake,
  HelpingHand,
  Laptop2,
  PencilLine,
  PersonStanding,
  Terminal,
  TextCursor,
  User,
  UserCog,
  UserSquare,
} from "lucide-react";

interface Props {
  position: string;
  experience: string;
  created_at: any;
  number_of_positions: string;
  requirements: string[];
  responsibilities: string[];
  requiredSkills: string[];
  role: string;
  technologies: string[];
  ourOffers: string[];
  salary_usd: number;
  salary_bdt: number;
  form_link: string;
  deadline: string;
  index: string;
}
const JobCard = ({
  position,
  experience,
  created_at,
  number_of_positions,
  requirements,
  responsibilities,
  requiredSkills,
  role,
  technologies,
  ourOffers,
  salary_usd,
  salary_bdt,
  form_link,
  deadline,
  index,
}: Props) => {
  const careerId = useCareerStore((state) => state.careerId);
  const careerIsOpen = useCareerStore((state) => state.careerIsOpen);
  const setCareerIsOpen = useCareerStore((state) => state.setCareerIsOpen);
  const setCareerId = useCareerStore((state) => state.setCareerId);

  return (
    <div className="w-full p-4 bg-white border border-l-4 rounded-xl border-slate-300 border-l-cyan-500">
      <div className="flex flex-col space-y-4">
        <div className="flex items-end justify-between">
          <div className="flex flex-col space-y-4">
            <div className="flex flex-wrap items-center space-x-2 text-lg md:text-2xl">
              <span className="font-bold">Position:</span>
              <h1 className="font-semibold text-gray-700">{position}</h1>
            </div>
            <div className="flex items-center space-x-2 text-base md:text-lg">
              <span className="font-bold">Experience :</span>
              <p className="font-semibold text-gray-700"> {experience}</p>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center space-x-2 text-sm ">
                <Clock /> <p>{created_at.toLocaleDateString(`ja-JP`)}</p>{" "}
              </div>
              <div className="flex items-center space-x-2 text-sm ">
                <Briefcase /> <p>Vacancy : {number_of_positions}</p>
              </div>
              <div className="flex items-center space-x-2 text-sm text-red-500">
                <Clock /> <p className="text-black">Deadline : {deadline}</p>{" "}
              </div>
            </div>
            <button
              className="flex gap-2 md:text-lg font-semibold text-white bg-[#06b6d4] md:w-40 rounded-3xl items-center md:h-10 justify-center text-sm w-32 h-8"
              onClick={() => {
                setCareerId(index);
                setCareerIsOpen(!careerIsOpen);
              }}
            >
              {careerId === index && careerIsOpen === true ? (
                <CornerRightUp className="w-4 h-4 md:w-6 md:h-6" />
              ) : (
                <CornerDownRight className="w-4 h-4 md:w-6 md:h-6" />
              )}
              <p>Description</p>
            </button>
          </div>

          <a
            href={form_link}
            target="_blank"
            className="flex items-center justify-center flex-shrink-0 w-24 h-8 gap-2 text-xs font-semibold text-black bg-transparent border-2 border-gray-600 md:text-lg md:w-40 rounded-3xl md:h-10 hover:text-white hover:bg-blue-700"
          >
            Apply Now
          </a>
        </div>
        {careerId === index && careerIsOpen === true && (
          <div className="flex flex-col space-y-8">
            {role && (
              <div className="flex flex-col space-y-4">
                <div className="flex items-start space-x-2 text-base font-bold md:text-xl">
                  <User /> <p>Role</p>
                </div>
                <p className="text-sm md:text-lg">{role}</p>
              </div>
            )}
            {requiredSkills !== undefined && requiredSkills.length > 0 && (
              <div className="flex flex-col space-y-4">
                <div className="flex items-start space-x-2 text-base font-bold md:text-xl">
                  <UserCog /> <p>Required Skills</p>
                </div>
                <div className="flex flex-col w-full ml-2 space-y-2">
                  {requiredSkills.map(
                    (requiredSkill: string, index: number) => (
                      <div className="flex items-center gap-2" key={index}>
                        <Terminal className="hidden md:block " />
                        <li className="ml-4 text-xs list-disc md:text-base md:list-none md:ml-0">
                          {requiredSkill}
                        </li>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
            {requirements !== undefined && requirements.length > 0 && (
              <div className="flex flex-col space-y-4">
                <div className="flex items-start space-x-2 text-base font-bold md:text-xl">
                  <UserSquare /> <p>Requirements</p>
                </div>
                <div className="flex flex-col ml-2 space-y-2">
                  {requirements.map((requirement: string, index: number) => (
                    <div className="flex items-center gap-2" key={index}>
                      <CheckCheck className="hidden md:block " />
                      <li className="ml-4 text-xs list-disc md:text-base md:list-none md:ml-0">
                        {requirement}
                      </li>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {responsibilities !== undefined && responsibilities.length > 0 && (
              <div className="flex flex-col space-y-4">
                <div className="flex items-start space-x-2 text-base font-bold md:text-xl">
                  <CreativeCommons /> <p>Responsibilities</p>
                </div>
                <div className="flex flex-col ml-2 space-y-2">
                  {responsibilities.map(
                    (responsibility: string, index: number) => (
                      <div className="flex items-center gap-2" key={index}>
                        <PencilLine className="hidden md:block " />
                        <li className="ml-4 text-xs list-disc md:text-base md:list-none md:ml-0">
                          {responsibility}
                        </li>
                      </div>
                    )
                  )}
                </div>
              </div>
            )}
            {ourOffers !== undefined && ourOffers.length > 0 && (
              <div className="flex flex-col space-y-4">
                <div className="flex items-start space-x-2 text-base font-bold md:text-xl">
                  <HeartHandshake /> <p>Our Offers</p>
                </div>
                <div className="flex flex-col ml-2 space-y-2">
                  {ourOffers.map((ourOffer: string, index: number) => (
                    <div className="flex items-center gap-2" key={index}>
                      <HelpingHand className="hidden md:block " />
                      <li className="ml-4 text-xs list-disc md:text-base md:list-none md:ml-0">
                        {ourOffer}
                      </li>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {technologies !== undefined && technologies.length > 0 && (
              <div className="flex flex-col space-y-4">
                <div className="flex items-start space-x-2 text-base font-bold md:text-xl">
                  <Laptop2 /> <p>Technologies</p>
                </div>
                <div className="flex flex-wrap ml-2 space-x-2">
                  {technologies.map((technologie: string, index: number) => (
                    <p
                      key={index}
                      className={`py-1 md:py-2 bg-slate-200 rounded-3xl md:px-4 text-xs md:text-base px-2 ${
                        index === 0 ? "mt-2 ml-2" : null
                      }`}
                    >
                      {technologie}
                    </p>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-col space-y-4">
              <div className="flex items-start space-x-2 text-base font-bold md:text-xl">
                <CircleDollarSign /> <p>Salary</p>
              </div>
              {!salary_bdt || !salary_usd ? (
                <p className="ml-6 text-lg md:text-xl">Negotiable</p>
              ) : (
                <div className="flex flex-col ml-4 space-y-2">
                  <div className="flex items-center gap-2">
                    {" "}
                    <ReactCountryFlag
                      svg
                      countryCode={"us"}
                      style={{
                        fontSize: "1.5em",
                        lineHeight: "1.5em",
                      }}
                    />
                    <p className="text-xl">${salary_usd}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    {" "}
                    <ReactCountryFlag
                      svg
                      countryCode={"bd"}
                      style={{
                        fontSize: "1.5em",
                        lineHeight: "1.5em",
                      }}
                    />
                    <p className="text-xl">{salary_bdt} TK</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobCard;
