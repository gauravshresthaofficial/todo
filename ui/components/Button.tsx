"use client";
import React from "react";
import clsx from "clsx";
import { ReactNode } from "react";
import { FiMenu } from "react-icons/fi";

interface buttonProps {
  type?: "button" | "submit" | "reset";
  text: string | ReactNode;
  onClick?: () => void;
  actionButton?: boolean;
  className?: string
}
const Button = ({ type, text, onClick, actionButton, className }: buttonProps) => {
  const buttonClasses = clsx(
    "bg-orange-700",
    "rounded-r-2xl",
    "w-50",
    // "px-10",
    "h-full",
    "text-white",
    "font-extralight",
    className 
  );
  return (
    <>
      <button
        onClick={onClick}
        type={type}
        className={buttonClasses}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
