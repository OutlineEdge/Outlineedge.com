"use client";

import { fetchJobById } from "@/app/dashboard/_actions";
import {
  Briefcase,
  CheckCheck,
  CircleDollarSign,
  Clock,
  CornerDownRight,
  CornerRightUp,
  CreativeCommons,
  Eye,
  HeartHandshake,
  HelpingHand,
  Laptop2,
  Link,
  PencilLine,
  Terminal,
  User,
  UserCog,
  UserSquare,
} from "lucide-react";
import { useEffect, useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { Button, Modal, Placeholder } from "rsuite";

interface Props {
  id: string;
}

const ViewJob = ({ id }: Props) => {
  const [open, setOpen] = useState(false);
  const [overflow, setOverflow] = useState(true);
  const handleClose = () => setOpen(false);
  const [data, setData] = useState<any>();
  useEffect(() => {
    const getData = async () => {
      const job: any = await fetchJobById(id);
      setData(job.job);
    };
    if (open === true) {
      getData();
    }
    return () => {
      // here you can clean the effect in case the component gets unmonth before the async function ends
    };
  }, [open]);

  return (
    <>
      <button
        className="p-1 border border-gray-500 rounded-lg hover:bg-slate-500 hover:text-white"
        onClick={() => setOpen(true)}
      >
        <Eye />
      </button>
      {data !== undefined && (
        <Modal
          overflow={overflow}
          open={open}
          onClose={handleClose}
          className="lg:w-[60%] "
        >
          <Modal.Header>
            <Modal.Title className="font-bold ">{data.position}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="flex flex-col space-y-4">
              <div className="flex items-end justify-between">
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-2 text-sms">
                    <span className="font-bold">Experience :</span>
                    <p className="text-gray-700"> {data.experience} Years</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="flex items-center space-x-2 text-sm ">
                      <Clock />{" "}
                      <p>{data.created_at.toLocaleDateString(`ja-JP`)}</p>{" "}
                    </div>
                    <div className="flex items-center space-x-2 text-sm ">
                      <Briefcase /> <p>Vacancy {data.number_of_posts}</p>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-red-500">
                      <Clock />{" "}
                      <p className="text-black">Deadline : {data.deadline}</p>{" "}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col space-y-8 overflow-x-hidden">
                {data.role && (
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-start space-x-2 text-base font-bold md:text-xl">
                      <User /> <p>Role</p>
                    </div>
                    <p className="text-sm md:text-lg">{data.role}</p>
                  </div>
                )}
                {data.required_skills.length > 0 && (
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-start space-x-2 text-base font-bold md:text-xl">
                      <UserCog /> <p>Required Skills</p>
                    </div>
                    <div className="flex flex-col w-full ml-2 space-y-2">
                      {data.required_skills.map(
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
                {data.requirements.length > 0 && (
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-start space-x-2 text-base font-bold md:text-xl">
                      <UserSquare /> <p>Requirements</p>
                    </div>
                    <div className="flex flex-col ml-2 space-y-2">
                      {data.requirements.map(
                        (requirement: string, index: number) => (
                          <div className="flex items-center gap-2" key={index}>
                            <CheckCheck className="hidden md:block " />
                            <li className="ml-4 text-xs list-disc md:text-base md:list-none md:ml-0">
                              {requirement}
                            </li>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}
                {data.responsibilities.length > 0 && (
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-start space-x-2 text-base font-bold md:text-xl">
                      <CreativeCommons /> <p>Responsibilities</p>
                    </div>
                    <div className="flex flex-col ml-2 space-y-2">
                      {data.responsibilities.map(
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
                {data.our_offers.length > 0 && (
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-start space-x-2 text-base font-bold md:text-xl">
                      <HeartHandshake /> <p>Our Offers</p>
                    </div>
                    <div className="flex flex-col ml-2 space-y-2">
                      {data.our_offers.map(
                        (ourOffer: string, index: number) => (
                          <div className="flex items-center gap-2" key={index}>
                            <HelpingHand className="hidden md:block " />
                            <li className="ml-4 text-xs list-disc md:text-base md:list-none md:ml-0">
                              {ourOffer}
                            </li>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                )}
                {data.technologies.length > 0 && (
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-start space-x-2 text-base font-bold md:text-xl">
                      <Laptop2 /> <p>Technologies</p>
                    </div>
                    <div className="flex flex-wrap ml-2 space-x-2">
                      {data.technologies.map(
                        (technologie: string, index: number) => (
                          <p
                            key={index}
                            className={`py-1 md:py-2 bg-slate-200 rounded-3xl md:px-4 text-xs md:text-base px-2 ${
                              index === 0 ? "mt-2 ml-2" : null
                            }`}
                          >
                            {technologie}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                )}

                <div className="flex flex-col space-y-4">
                  <div className="flex items-start space-x-2 text-base font-bold md:text-xl">
                    <CircleDollarSign /> <p>Salary</p>
                  </div>
                  {!data.salary_usd || !data.salary_bdt ? (
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
                        <p className="text-xl">${data.salary_usd}</p>
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
                        <p className="text-xl">{data.salary_bdt} TK</p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="flex flex-col items-start gap-2 text-base md:text-xl">
                  <Link />
                  <span className="font-bold">Apply Link </span>
                  <a href={data.form_link} className="mx-1" target="_blank">
                    {data.form_link}
                  </a>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button
              onClick={handleClose}
              className="px-4 py-2 border border-black rounded-lg hover:bg-black hover:text-white"
            >
              Close
            </button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default ViewJob;
