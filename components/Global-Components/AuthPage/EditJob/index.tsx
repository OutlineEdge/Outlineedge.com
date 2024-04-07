"use client";
import { fetchJobById, updateJobById } from "@/app/dashboard/_actions";
import React, { useEffect, useState } from "react";
import { useController, useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { FormData } from "../JobPostForm/formData";
import { SelectPicker } from "rsuite";
import EditRequiredSkills from "./EditRequiredSkills";
import EditRequirements from "./EditRequirements";
import EditResponsibilities from "./EditResponsibilities";
import EditOffer from "./EditOffer";
import EditTechnologies from "./EditTechnologies";
import EditSalary from "./EditSalary";
import { redirect, useRouter } from "next/navigation";
import { toast } from "react-toastify";
import DateTime from "../JobPostForm/DateTime";

interface Props {
  id: string;
}

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

const EditJob = ({ id }: Props) => {
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
  const [data, setData] = useState<any>();
  useEffect(() => {
    const getData = async () => {
      const job: any = await fetchJobById(id);
      setData(job.job);
    };

    getData();

    return () => {};
  }, []);

  const { field: jobType } = useController({ name: "jobType", control });
  const { field: experience } = useController({
    name: "experience",
    control,
  });
  const { field: jobLocation } = useController({
    name: "jobLocation",
    control,
  });

  const notify = () => toast.success("Job Successfully Updated. ");

  const onSubmit = async (formData: FormInput) => {
    await updateJobById(id, formData);
    notify();
    push("/dashboard/jobs");
  };

  return (
    <div className="w-full h-full p-4 mt-12 bg-white border shadow-2xl rounded-2xl shadow-gray-400 border-emerald-300">
      {data !== undefined && (
        <div className="flex flex-col w-full h-full gap-6">
          <div className="flex flex-wrap gap-4 xl:flex-nowrap">
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="position" className="text-sm font-semibold">
                Position
              </label>
              <Input
                {...register("position")}
                name="position"
                defaultValue={data.position}
              />
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
                defaultValue={data.job_type}
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
                defaultValue={data.experience}
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
                defaultValue={data.job_location}
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
                defaultValue={data.number_of_posts}
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
              defaultValue={data.role}
              name="role"
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="Required Skills" className="text-sm font-semibold">
              Required Skills
            </label>
            <EditRequiredSkills
              setValue={setValue}
              requiredSkill={data.required_skills}
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="Requirements" className="text-sm font-semibold">
              Requirements
            </label>
            <EditRequirements
              setValue={setValue}
              requiredSkill={data.requirements}
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="Requirements" className="text-sm font-semibold">
              Responsibilities
            </label>
            <EditResponsibilities
              setValue={setValue}
              requiredSkill={data.responsibilities}
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="Requirements" className="text-sm font-semibold">
              Our Offers
            </label>
            <EditOffer setValue={setValue} requiredSkill={data.our_offers} />
          </div>
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="Requirements" className="text-sm font-semibold">
              Technologies
            </label>
            <EditTechnologies
              setValue={setValue}
              requiredSkill={data.technologies}
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="formLink" className="text-sm font-semibold">
              Form Link
            </label>
            <Input
              {...register("formLink")}
              defaultValue={data.form_link}
              name="formLink"
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="Required Skills" className="text-sm font-semibold">
              Salary
            </label>
            <EditSalary register={register} data={data} />
          </div>{" "}
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
            UPDATE JOB
          </button>
        </div>
      )}
    </div>
  );
};

export default EditJob;
