"use client";
import { data } from "@/config/data";
import React, { useEffect, useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { SelectPicker } from "rsuite";
import { Controller, useController, useForm } from "react-hook-form";

type FormInput = {
  firstname: string;
  lastname: string;
  subject: string;
  company_name: string;
  phone_number: string;
  message: string;
  email: string;
  service: string;
};

const ContactForm = () => {
  const services = data.contactForm.services.map((item) => ({
    label: item,
    value: item,
  }));

  const {
    register,
    control,
    setError,
    handleSubmit,
    formState: { isSubmitting, isLoading, isSubmitted, errors },
    reset,
  } = useForm<FormInput>();

  const [countryCode, setCountryCode] = useState("USA");

  const { field: service } = useController({ name: "service", control });
  const { field: phone_number } = useController({
    name: "phone_number",
    control,
  });
  const onSubmit = async (formData: FormInput) => {
    const nameRegex = /^[A-Za-z]+$/;

    if (formData.firstname.length < 1) {
      setError("firstname", {
        type: "manual",
        message: "First name must be at least 2 characters or more.",
      });
    } else if (!nameRegex.test(formData.firstname)) {
      setError("firstname", {
        type: "manual",
        message: "First name must not contain number or special characters.",
      });
    }

    if (formData.lastname.length < 1) {
      setError("lastname", {
        type: "manual",
        message: "Last name must be at least 2 characters or more.",
      });
    } else if (!nameRegex.test(formData.lastname)) {
      setError("lastname", {
        type: "manual",
        message: "Last name must not contain number or special characters.",
      });
    }

    if (formData.company_name !== "" && formData.company_name.length < 1) {
      setError("company_name", {
        type: "manual",
        message: "Company name must be at least 2 characters or more.",
      });
    }

    if (formData.subject.length < 10) {
      setError("subject", {
        type: "manual",
        message: "Subject must be at least 10 characters or more.",
      });
    }

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(formData.email)) {
      setError("email", {
        type: "manual",
        message: "Please enter a valid email address. ",
      });
    }
    await fetch("/api/email", {
      method: "POST",
      body: JSON.stringify({
        firstname: formData.firstname,
        lastname: formData.lastname,
        email: formData.email,
        subject: formData.subject,
        company_name: formData.company_name,
        phone_number: formData.phone_number,
        message: formData.message,
        service: formData.service,
      }),
    });
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full h-full p-8 space-y-8 text-gray-600 bg-white border shadow-xl rounded-2xl shadow-gray-400 border-emerald-400"
    >
      <div className="flex flex-wrap w-full space-y-4 md:space-x-4 md:space-y-0 md:flex-nowrap">
        <div className="flex flex-col w-full">
          <label htmlFor="firstname">
            FIRST NAME <i className="text-red-500">*</i>
          </label>
          <input
            className="w-full py-2 border-b-2 border-gray-300 focus:outline-none active:outline-none"
            type="text"
            id="firstname"
            required
            {...register("firstname")}
          />
          <span className="text-xs text-red-500">
            {errors.firstname?.message}
          </span>
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="lastname">
            LAST NAME <i className="text-red-500">*</i>
          </label>
          <input
            className="w-full py-2 border-b-2 border-gray-300 focus:outline-none active:outline-none"
            type="text"
            id="lastname"
            required
            {...register("lastname")}
          />{" "}
          <span className="text-xs text-red-500">
            {errors.lastname?.message}
          </span>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="subject">
          SUBJECT <i className="text-red-500">*</i>
        </label>
        <input
          className="w-full py-2 border-b-2 border-gray-300 focus:outline-none active:outline-none"
          type="text"
          id="subject"
          required
          {...register("subject")}
        />{" "}
        <span className="text-xs text-red-500">{errors.subject?.message}</span>
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="email">
          EMAIL <i className="text-red-500">*</i>
        </label>
        <input
          className="w-full py-2 border-b-2 border-gray-300 focus:outline-none active:outline-none"
          type="email"
          id="email"
          required
          {...register("email")}
        />{" "}
        <span className="text-xs text-red-500">{errors.email?.message}</span>
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="company">COMPANY</label>
        <input
          className="w-full py-2 border-b-2 border-gray-300 focus:outline-none active:outline-none"
          type="text"
          id="company"
          {...register("company_name")}
        />{" "}
        <span className="text-xs text-red-500">
          {errors.company_name?.message}
        </span>
      </div>
      <div className="relative z-10 flex flex-col w-full space-y-2">
        <label className="text-gray-600 "> PHONE NUMBER</label>
        <PhoneInput
          defaultCountry={countryCode}
          className="w-full focus:outline-none"
          inputClassName="w-full"
          value={phone_number.value}
          onChange={(e) => phone_number.onChange(e)}
        />{" "}
        <span className="text-xs text-red-500">
          {errors.phone_number?.message}
        </span>
      </div>
      <div className="flex flex-col w-full space-y-2">
        <label className="text-gray-600 "> How can we help you?</label>
        <textarea
          className="w-full border-b-2 border-gray-300 focus:outline-none active:outline-none"
          required
          {...register("message")}
        />{" "}
        <span className="text-xs text-red-500">{errors.message?.message}</span>
      </div>
      <div className="flex flex-col w-full space-y-2">
        <label className="text-gray-600 "> Desired Services</label>
        <SelectPicker
          data={services}
          className="w-full "
          id="service"
          value={service.value}
          onChange={(e) => service.onChange(e)}
        />

        <span className="text-xs text-red-500">{errors.service?.message}</span>
      </div>
      <button
        className="text-2xl font-semibold text-white bg-[#238f91] py-2 rounded-3xl hover:bg-[#205b5c]"
        disabled={isSubmitting}
        type="submit"
      >{`Let's Talk`}</button>
    </form>
  );
};

export default ContactForm;
