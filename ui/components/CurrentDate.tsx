"use client";
import React, { useEffect, useState } from "react";

interface CurrentDateProps {
  className?: string;
}

const CurrentDate: React.FC<CurrentDateProps> = ({ className }: CurrentDateProps) => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const now = new Date();
    const options: Intl.DateTimeFormatOptions = {
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
