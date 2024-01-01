import React from "react";
import clsx from "clsx";
import { ChangeEvent } from "react";

interface inputProps {
  name: string;
  value?: any;
  placeholder?: string;
  type: string;
  hasError?: boolean;
  className?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}
const Input = ({
  name,
  placeholder,
  type,
  value,
  hasError,
  className,
  onChange
}: inputProps) => {
  return (
    <>
      <input
        className={clsx(
          "w-full px-10 border-gray-200 rounded-l-2xl text-black",
          hasError
            ? "bg-red-200 border-blue-400"
            : "bg-slate-50 border-gray-200",
          className,
        )}
        type={type}
        name={name}
        value={value}
        multiple
        placeholder={placeholder}
        onChange={onChange}
      ></input>
    </>
  );
};

export default Input;
