"use client";
import { useFieldArray, useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
const REQUIRED_FIELD = "This field is required";

const formSchema = z.object({
  formValues: z.array(
    z.object({
      name: z.string().nonempty({ message: REQUIRED_FIELD }),
    })
  ),
});

const useDynamicForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      formValues: [{ name: "" }],
    },
  });
  const [data, setData] = useState<any>();
  const [isActive, setIsActive] = useState<boolean>(true);
  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "formValues",
  });

  const onSubmit = (formData: z.infer<typeof formSchema>) => {
    setIsActive(true);
    let tempArr: any[] = [];
    formData.formValues.map((value, index) => {
      tempArr.push(value.name);
    });
    setData(tempArr);
    setIsActive(false);
  };

  const handleRemove = (index: number) => {
    remove(index);
  };

  const handleAppend = () => {
    append({ name: "" });
  };

  return { form, fields, onSubmit, handleAppend, handleRemove, data, isActive };
};

export default useDynamicForm;
