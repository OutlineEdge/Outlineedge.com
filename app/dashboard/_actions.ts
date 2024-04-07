"use server";

type JobFormInput = {
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

type SubscribeFormInput = {
  email: string;
  fullname: string;
};

import {
  createJobPost,
  deleteJobById,
  getAllJobs,
  getJobById,
  updateJobPost,
} from "@/lib/jobs";
import {
  createSubscribe,
  deleteSubscriptionById,
  getAllSubscriptions,
} from "@/lib/subscribe";
import { revalidatePath } from "next/cache";

export async function createJobPostAction(formInput: JobFormInput) {
  await createJobPost(formInput);
  //   revalidatePath("/");
}

export async function fetchAllJobs() {
  const jobs = await getAllJobs();
  return jobs;
}

export async function fetchJobById(id: string) {
  const job = await getJobById(id);
  return job;
}

export async function updateJobById(id: string, formInput: JobFormInput) {
  const job = await updateJobPost(id, formInput);
  return job;
}

export async function removeJobById(id: string) {
  await deleteJobById(id);
  revalidatePath("/dashboard/jobs");
}

export async function createSubscribeAction(formInput: SubscribeFormInput) {
  await createSubscribe(formInput);
  //   revalidatePath("/");
}

export async function fetchSubscriptions() {
  const subscriptions = await getAllSubscriptions();
  return subscriptions;
}

export async function removeSubscriptionById(id: string) {
  await deleteSubscriptionById(id);
  revalidatePath("/dashboard/jobs");
}
