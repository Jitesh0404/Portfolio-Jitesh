import React from "react";

export default function Service({Icon,text}) {
  return (
    <div className="group w-64 h-40 bg-[#343434] flex flex-col justify-center items-center cursor-pointer hover:bg-[#FFBD39]">
      {Icon}
      <div className="flex flex-col justify-center items-center gap-2">
        <h5 className="text-white uppercase group-hover:text-black">{text}</h5>
        <div className="w-6 h-0.5 rounded bg-[#FFBD39] group-hover:bg-black"></div>
      </div>
    </div>
  );
}
