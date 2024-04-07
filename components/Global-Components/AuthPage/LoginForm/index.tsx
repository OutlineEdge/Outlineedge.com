"use client";
import LogoDark from "@/components/SVG/Logo/LogoDark";
import { signIn } from "next-auth/react";
import React from "react";
import { useForm } from "react-hook-form";

type FormInput = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const {
    register,
    control,
    setError,
    handleSubmit,
    formState: { isSubmitting, isLoading, isSubmitted, errors },
    reset,
  } = useForm<FormInput>();

  const onSubmit = async (formData: FormInput) => {
    const result = await signIn("credentials", {
      email: formData.email,
      password: formData.password,
      redirect: true,
      callbackUrl: "/dashboard",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-300">
      <div className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-md shadow-md sm:px-6 md:px-8 lg:px-10">
        <div className="flex justify-center">
          <LogoDark />
        </div>
        <div className="relative h-px mt-10 bg-gray-300">
          <div className="absolute top-0 left-0 flex justify-center w-full -mt-2">
            <span className="px-4 text-xs text-gray-500 uppercase bg-white">
              Login To Dashboard
            </span>
          </div>
        </div>
        <div className="mt-10">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col mb-6">
              <label
                htmlFor="email"
                className="mb-1 text-xs tracking-wide text-gray-600 sm:text-sm"
              >
                E-Mail Address:
              </label>
              <div className="relative">
                <div className="absolute top-0 left-0 inline-flex items-center justify-center w-10 h-full text-gray-400">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                  </svg>
                </div>

                <input
                  id="email"
                  type="email"
                  className="w-full py-2 pl-10 pr-4 text-sm placeholder-gray-500 border border-gray-400 rounded-lg sm:text-base focus:outline-none focus:border-blue-400"
                  placeholder="E-Mail Address"
                  required
                  {...register("email")}
                />
              </div>
            </div>
            <div className="flex flex-col mb-6">
              <label
                htmlFor="password"
                className="mb-1 text-xs tracking-wide text-gray-600 sm:text-sm"
              >
                Password:
              </label>
              <div className="relative">
                <div className="absolute top-0 left-0 inline-flex items-center justify-center w-10 h-full text-gray-400">
                  <span>
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </span>
                </div>

                <input
                  id="password"
                  type="password"
                  className="w-full py-2 pl-10 pr-4 text-sm placeholder-gray-500 border border-gray-400 rounded-lg sm:text-base focus:outline-none focus:border-blue-400"
                  placeholder="Password"
                  required
                  {...register("password")}
                />
              </div>
            </div>

            <div className="flex w-full">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center w-full py-2 text-sm text-white transition duration-150 ease-in bg-blue-600 rounded focus:outline-none sm:text-base hover:bg-blue-700"
              >
                <span className="mr-2 uppercase">Login</span>
                <span>
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
