import React from "react";

export default function ResumeComponent({duration,position,companyName,description}) {
  return (
    <div className="bg-[#404040] w-[40%] p-6 animate-pulse rounded-lg">
      <div className="flex flex-col gap-4">
        <h2 className="text-[#FFBD39] font-bold text-[1.5rem]">
          {duration}
        </h2>
        <h3 className="text-[#FFFFFF] font-medium text-[1.5rem] uppercase">
          {position}
        </h3>
        <h3 className="text-[#999999] font-medium text-xl">{companyName}</h3>
        <p className="text-[#999999] text-justify">
          {description}
        </p>
      </div>
    </div>
  );
}
