"use client";
import { MessageCircle } from "lucide-react";
import React, { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { createSubscribeAction } from "@/app/dashboard/_actions";

type FormInput = {
  email: string;
  fullname: string;
};

const Subscribe = () => {
  const {
    register,
    control,
    setError,
    handleSubmit,
    formState: { isSubmitting, isLoading, isSubmitted, errors },
    reset,
  } = useForm<FormInput>();
  const [open, setOpen] = useState(false);
  const notify = () => toast("Successfully subscribed to news letter . ");
  const error = () => toast.error("Required fields are missing.");
  const onSubmit = async (formData: FormInput) => {
    const nameRegex = /^[A-Za-z ]+$/;
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (formData.fullname.length < 2) {
      setError("fullname", {
        type: "manual",
        message: "Full name must be at least 2 characters or more.",
      });
    } else if (!nameRegex.test(formData.fullname)) {
      setError("fullname", {
        type: "manual",
        message: "Full name must not contain number or special characters.",
      });
    } else if (!emailRegex.test(formData.email)) {
      setError("email", {
        type: "manual",
        message: "Please enter a valid email address. ",
      });
    } else {
      await createSubscribeAction(formData);
      notify();
      setOpen(false);
      reset();
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="relative flex items-center w-32 h-6 p-2 bg-white border-2 border-gray-300 md:h-10 lg:w-44 rounded-3xl group hover:bg-slate-800 md:w-36">
          <MessageCircle className="relative md:h-6 rounded-full md:w-7 bg-slate-800 group-hover:text-slate-800 group-hover:bg-white duration-500 ease-in-out transition-all transform translate-x-0 group-hover:lg:translate-x-[8.4rem] group-hover:md:translate-x-[6.4rem] h-4 w-4 group-hover:translate-x-[6rem]" />

          <span className="relative w-full text-sm font-medium text-center text-black no-underline transition-all duration-500 ease-in-out transform translate-x-0 md:text-base group-hover:text-white group-hover:-translate-x-4 group-hover:md:-translate-x-6">
            SUBSCRIBE
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Subscribe to our News Letter</DialogTitle>
          <DialogDescription>
            <form className="flex flex-col py-3 space-y-2">
              <Input
                type="text"
                placeholder="Full Name"
                required
                {...register("fullname")}
              />
              <span className="text-xs text-red-500">
                {errors.fullname?.message}
              </span>
              <Input
                type="email"
                placeholder="Email"
                required
                {...register("email")}
              />
              <span className="text-xs text-red-500">
                {errors.email?.message}
              </span>
            </form>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="submit" onClick={handleSubmit(onSubmit)}>
              SUBSCRIBE
            </Button>
          </DialogClose>
        </DialogFooter>{" "}
      </DialogContent>
    </Dialog>
  );
};

export default Subscribe;
