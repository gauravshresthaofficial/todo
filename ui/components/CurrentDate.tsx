"use client";
import React, { useEffect, useState } from "react";

const CurrentDate = ({ className }) => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const now = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const formattedDate = now.toLocaleDateString(undefined, options);
    setCurrentDate(formattedDate);
  }, []);

  return <p className={className}>{currentDate}</p>;
};

export default CurrentDate;
