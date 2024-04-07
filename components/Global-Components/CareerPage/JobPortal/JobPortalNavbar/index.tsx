"use client";
import { Input, InputGroup, Dropdown, SelectPicker } from "rsuite";
import SearchIcon from "@rsuite/icons/Search";
import { useEffect, useState } from "react";
import { data } from "@/config/data";
import { FormData } from "@/components/Global-Components/AuthPage/JobPostForm/formData";

interface Props {
  setSearchFilter: (value: any) => void;
}

const jobTypes = FormData.jobTypes.map((item) => ({
  label: item,
  value: item,
}));

const experiences = FormData.experiences.map((item) => ({
  label: item,
  value: item,
}));

const jobLocations = FormData.jobLocations.map((item) => ({
  label: item,
  value: item,
}));

const JobPortalNavbar = ({ setSearchFilter }: Props) => {
  const [filter, setFilter] = useState<any>(null);

  const onSubmit = (event?: any) => {
    setSearchFilter(filter);
    if (event.key === "Enter") {
      setSearchFilter(event.target.value);
    }
  };

  const services = data.contactForm.services.map((item) => ({
    label: item,
    value: item,
  }));

  return (
    <div className="flex flex-wrap items-end justify-between w-full gap-4 md:flex-nowrap">
      <div className="flex flex-col w-full gap-2 overflow-hidden">
        <label htmlFor="JobType" className="text-sm font-semibold">
          Search Job
        </label>
        <InputGroup inside className="border border-gray-400">
          <Input onChange={(e) => setFilter(e)} onKeyDown={onSubmit} />
          <InputGroup.Button onClick={onSubmit}>
            <SearchIcon />
          </InputGroup.Button>
        </InputGroup>
      </div>
      <div className="flex justify-between gap-4">
        <div className="flex flex-col gap-2 overflow-hidden w-44">
          <label htmlFor="JobType" className="text-sm font-semibold">
            Job Type
          </label>
          <SelectPicker
            data={jobTypes}
            className="w-full "
            id="jobType"
            searchable={false}
            onChange={(e) => setSearchFilter(e)}
          />
        </div>
        <div className="flex flex-col gap-2 overflow-hidden w-44">
          <label htmlFor="Experience" className="text-sm font-semibold">
            Experience
          </label>
          <SelectPicker
            data={experiences}
            className="w-full "
            id="experience"
            searchable={false}
            onChange={(e) => setSearchFilter(e)}
          />
        </div>{" "}
        <div className="flex flex-col gap-2 overflow-hidden w-44">
          <label htmlFor="Job Location" className="text-sm font-semibold">
            Job Location
          </label>
          <SelectPicker
            data={jobLocations}
            className="w-full "
            id="jobLocation"
            searchable={false}
            onChange={(e) => setSearchFilter(e)}
          />
        </div>
      </div>
    </div>
  );
};

export default JobPortalNavbar;
