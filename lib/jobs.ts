import { prisma } from "./prisma";

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

export async function createJobPost(formInput: FormInput) {
  try {
    const job = await prisma.jobs.create({
      data: {
        position: formInput.position,
        job_type: formInput.jobType,
        experience: formInput.experience,
        job_location: formInput.jobLocation,
        number_of_posts: Number(formInput.numberOfPosts),
        role: formInput.role,
        required_skills: formInput.requiredSkills,
        requirements: formInput.requirements,
        responsibilities: formInput.responsibilities,
        our_offers: formInput.ourOffers,
        technologies: formInput.technologies,
        deadline: formInput.deadline,
        salary_usd: Number(formInput.salaryUsd),
        salary_bdt: Number(formInput.salaryBdt),
        form_link: formInput.formLink,
      },
    });
    return job;
  } catch (error) {
    console.log("Error occurred while creating job post -> ", error);
    return { error };
  }
}

export async function getAllJobs() {
  try {
    const jobs = await prisma.jobs.findMany();
    return { jobs };
  } catch (error) {
    console.log("Error occurred while fetching all job posts -> ", error);
    return { error };
  }
}

export async function getJobById(id: string) {
  try {
    const job = await prisma.jobs.findUnique({ where: { id } });
    return { job };
  } catch (error) {
    return { error };
  }
}

export async function updateJobPost(id: string, formInput: FormInput) {
  try {
    const job = await prisma.jobs.update({
      where: { id },
      data: {
        position: formInput.position,
        job_type: formInput.jobType,
        experience: formInput.experience,
        job_location: formInput.jobLocation,
        number_of_posts: Number(formInput.numberOfPosts),
        role: formInput.role,
        required_skills: formInput.requiredSkills,
        requirements: formInput.requirements,
        responsibilities: formInput.responsibilities,
        our_offers: formInput.ourOffers,
        technologies: formInput.technologies,
        deadline: formInput.deadline,
        salary_usd: Number(formInput.salaryUsd),
        salary_bdt: Number(formInput.salaryBdt),
        form_link: formInput.formLink,
      },
    });
    return { job };
  } catch (error) {
    return { error };
  }
}

export async function deleteJobById(id: string) {
  try {
    const job = await prisma.jobs.delete({ where: { id } });
    return { job };
  } catch (error) {
    return { error };
  }
}
