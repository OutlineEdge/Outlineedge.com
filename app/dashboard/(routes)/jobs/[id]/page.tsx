"use client";
import EditJob from "@/components/Global-Components/AuthPage/EditJob";
import { useSearchParams } from "next/navigation";

const Job = () => {
  const searchParams = useSearchParams();
  const id: any = searchParams.get("id");
  return (
    <div>
      <EditJob id={id} />
    </div>
  );
};

export default Job;
