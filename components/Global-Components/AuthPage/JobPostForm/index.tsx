"use client";
import React, { useEffect, useState } from "react";
import { DatePicker, Dropdown, SelectPicker } from "rsuite";
import { FormData } from "./formData";
import RequiredSkills from "./RequiredSkills";
import { Input } from "@/components/ui/input";
import Requirements from "./Requirements";
import Responsibilities from "./Responsibilities";
import Offers from "./Offers";
import Technologies from "./Technologies";
import Salary from "./Salary";
import { useController, useForm } from "react-hook-form";
import { createJobPostAction } from "@/app/dashboard/_actions";
import { redirect, useRouter } from "next/navigation";
import { toast } from "react-toastify";
import DateTime from "./DateTime";

type FormInput = {
  position: string;
  jobType: string;
  experience: string;
  jobLocation: string;
  numberOfPosts: number;
  role: string;
  requiredSkills: string[];
  requirements: string[];
  responsibilities: string[];
  ourOffers: string[];
  technologies: string[];
  formLink: string;
  deadline: string;
  salaryUsd: number;
  salaryBdt: number;
};

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

const JobPostForm = () => {
  const { push } = useRouter();
  const {
    register,
    control,
    setError,
    handleSubmit,
    formState: { isSubmitting, isLoading, isSubmitted, errors },
    reset,
    setValue,
  } = useForm<FormInput>({ mode: "onBlur" });

  const { field: jobType } = useController({ name: "jobType", control });
  const { field: experience } = useController({ name: "experience", control });
  const { field: jobLocation } = useController({
    name: "jobLocation",
    control,
  });

  const notify = () => toast.success("Job Successfully Added. ");

  const onSubmit = async (formData: FormInput) => {
    await createJobPostAction(formData);
    notify();
    push("/dashboard/jobs");
  };

  return (
    <div className="w-full h-full p-4 mt-12 bg-white border shadow-2xl rounded-2xl shadow-gray-400 border-emerald-300">
      <div className="flex flex-col w-full h-full gap-6">
        <div className="flex flex-wrap gap-4 xl:flex-nowrap">
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="position" className="text-sm font-semibold">
              Position
            </label>
            <Input {...register("position")} name="position" />
          </div>
          <div className="flex flex-col gap-2 overflow-hidden w-44">
            <label htmlFor="JobType" className="text-sm font-semibold">
              Job Type
            </label>
            <SelectPicker
              data={jobTypes}
              className="w-full "
              id="jobType"
              searchable={false}
              value={jobType.value}
              onChange={(e) => jobType.onChange(e)}
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
              value={experience.value}
              onChange={(e) => experience.onChange(e)}
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
              value={jobLocation.value}
              onChange={(e) => jobLocation.onChange(e)}
            />
          </div>
          <div className="flex flex-col gap-2 overflow-hidden w-44">
            <label htmlFor="Number of post" className="text-sm font-semibold">
              Vacancy
            </label>
            <Input
              type="number"
              min="0"
              max="100"
              {...register("numberOfPosts")}
              name="numberOfPosts"
            />
          </div>
        </div>
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="Role" className="text-sm font-semibold">
            Role
          </label>
          <textarea
            className="p-2 border rounded-md"
            rows={5}
            {...register("role")}
            name="role"
          />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="Required Skills" className="text-sm font-semibold">
            Required Skills
          </label>
          <RequiredSkills setValue={setValue} />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="Required Skills" className="text-sm font-semibold">
            Requirements
          </label>
          <Requirements setValue={setValue} />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="Required Skills" className="text-sm font-semibold">
            Responsibilities
          </label>
          <Responsibilities setValue={setValue} />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="Required Skills" className="text-sm font-semibold">
            Our Offers
          </label>
          <Offers setValue={setValue} />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="Required Skills" className="text-sm font-semibold">
            Technologies
          </label>
          <Technologies setValue={setValue} />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="formLink" className="text-sm font-semibold">
            Form Link
          </label>
          <Input {...register("formLink")} name="formLink" />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="Required Skills" className="text-sm font-semibold">
            Salary
          </label>
          <Salary register={register} />
        </div>
        <div className="flex flex-col w-full gap-2">
          <label htmlFor="formLink" className="text-sm font-semibold">
            Deadline Date
          </label>
          <DateTime setValue={setValue} />
        </div>
        <button
          className="p-2 text-lg font-bold border rounded-lg border-emerald-500 hover:bg-emerald-500 hover:text-white"
          type="submit"
          onClick={handleSubmit(onSubmit)}
        >
          POST JOB
        </button>
      </div>
    </div>
  );
};

export default JobPostForm;
