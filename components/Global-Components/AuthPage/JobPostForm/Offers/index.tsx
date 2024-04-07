"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useDynamicForm from "@/hooks/useDynamicForm";
import { Plus, Trash } from "lucide-react";
import { useEffect } from "react";
import { toast } from "react-toastify";

interface Props {
  setValue: any;
}

const Offers = ({ setValue }: Props) => {
  const { form, fields, onSubmit, handleAppend, handleRemove, data, isActive } =
    useDynamicForm();
  useEffect(() => {
    if (data !== undefined) {
      setValue("ourOffers", data);
    }
  }, [data]);

  const notify = () => toast.success("Offers Added Successfully.");

  useEffect(() => {
    if (isActive === false) {
      notify();
    }
  }, [isActive]);

  return (
    <Form {...form}>
      <form
        className="flex flex-col items-center w-full gap-2 p-4 m-auto border rounded-xl"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        {fields.map(({ id }, index) => (
          <FormField
            key={id}
            control={form.control}
            name={`formValues.${index}.name`}
            render={({ field }) => (
              <div className="flex items-start justify-center w-full gap-2">
                <FormItem className="flex-grow">
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage className="text-xs" />
                </FormItem>{" "}
                <button
                  className="w-10 h-10 p-2 border border-gray-500 rounded-md hover:text-white hover:bg-red-500"
                  onClick={() => handleRemove(index)}
                >
                  <Trash />
                </button>
              </div>
            )}
          />
        ))}
        <button
          className="flex items-center w-48 h-full gap-4 p-2 border border-gray-500 rounded-md hover:text-white hover:bg-emerald-500"
          onClick={handleAppend}
        >
          <Plus />
          <p>Add Offer</p>
        </button>
        <button
          type="submit"
          className="w-48 p-2 text-center border-2 border-black rounded-lg hover:bg-black hover:text-white"
        >
          Submit
        </button>
      </form>
    </Form>
  );
};

export default Offers;
