"use client";
import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";
import JobPortalNavbar from "./JobPortalNavbar";
import { fetchAllJobs } from "@/app/dashboard/_actions";
import ResumeUpload from "./ResumeUpload";

const JobPortal = () => {
  const [data, setData] = useState([]);
  const [searchFilter, setSearchFilter] = useState<any>(null);
  const [queryData, setQueryData] = useState<any[]>(data);

  useEffect(() => {
    const getData = async () => {
      const jobs: any = await fetchAllJobs();
      setData(jobs.jobs);
    };
    getData();
    return () => {
      setQueryData(data);
    };
  }, [data]);

  useEffect(() => {
    if (
      searchFilter === "" ||
      searchFilter === undefined ||
      searchFilter === null
    ) {
      setQueryData(data);
    } else {
      const _data = queryData.filter((object) =>
        Object.values(object).some((objValue) =>
          String(objValue).toLowerCase().includes(searchFilter.toLowerCase())
        )
      );
      setQueryData(_data);
    }
  }, [queryData]);

  return (
    <section className="relative w-full h-full">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="w-full lg:mt-12 lg:max-w-screen-2xl">
          <div className="flex flex-col items-center justify-center w-full h-full px-2 mb-12 space-y-4 md:px-4">
            <div className="flex flex-col items-center py-16 space-y-5">
              <div className="flex items-center space-x-4">
                <h1 className="text-2xl font-medium lg:text-5xl md:text-4xl">
                  CAREER
                </h1>
                <h1 className="text-2xl font-medium lg:text-5xl md:text-4xl text-emerald-500">
                  PORTAL
                </h1>
              </div>
              <p className="w-4/5 text-sm text-center lg:w-3/5 lg:text-xl md:text-lg"></p>
            </div>
            <JobPortalNavbar setSearchFilter={setSearchFilter} />
            <div className="flex flex-col w-full space-y-4">
              {queryData.map((job: any, index: number) => (
                <JobCard
                  experience={job.experience}
                  created_at={job.created_at}
                  requirements={job.requirements}
                  responsibilities={job.responsibilities}
                  requiredSkills={job.requiredSkills}
                  role={job.role}
                  technologies={job.technologies}
                  ourOffers={job.ourOffers}
                  index={String(index)}
                  key={index}
                  position={job.position}
                  number_of_positions={job.number_of_posts}
                  salary_usd={job.salary_usd}
                  salary_bdt={job.salary_bdt}
                  form_link={job.form_link}
                  deadline={job.deadline}
                />
              ))}
              <ResumeUpload/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobPortal;
