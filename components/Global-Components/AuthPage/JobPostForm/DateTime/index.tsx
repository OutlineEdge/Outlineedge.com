"use client";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import { useEffect, useState } from "react";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece] | any;

interface Props {
  setValue: any;
}

const DateTime = ({ setValue }: Props) => {
  const [value, onChange] = useState<Value>(new Date());
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setValue("deadline", value.toLocaleString());
  }, [value]);

  if (!mounted) {
    return null;
  }
  return <DateTimePicker onChange={onChange} value={value} />;
};

export default DateTime;
