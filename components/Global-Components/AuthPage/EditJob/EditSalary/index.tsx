"use client";
import { Input } from "@/components/ui/input";
import ReactCountryFlag from "react-country-flag";

interface Props {
  register: any;
  data: any;
}
const EditSalary = ({ register, data }: Props) => {
  return (
    <div className="flex items-center w-full gap-4">
      <div className="flex items-center w-full gap-2">
        <ReactCountryFlag
          svg
          countryCode={"us"}
          style={{
            fontSize: "1.5em",
            lineHeight: "1.5em",
          }}
        />
        <Input
          type="number"
          min="0"
          {...register("salaryUsd")}
          defaultValue={data.salary_usd}
        />
      </div>
      <div className="flex items-center w-full gap-2">
        <ReactCountryFlag
          svg
          countryCode={"bd"}
          style={{
            fontSize: "1.5em",
            lineHeight: "1.5em",
          }}
        />
        <Input
          type="number"
          min="0"
          {...register("salaryBdt")}
          defaultValue={data.salary_bdt}
        />
      </div>
    </div>
  );
};

export default EditSalary;
