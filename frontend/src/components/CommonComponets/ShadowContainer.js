import React from "react";
import TextShadow from "./TextShadow";

export default function ShadowContainer({ title, shadowText, text }) {
  return (
    <div className="relative">
      <h1 className="text-white text-[50px] font-bold text-center"> {title}</h1>
      <TextShadow text={shadowText} />
      <h4 className="text-[#999999] mt-6 text-base text-center">{text}</h4>
    </div>
  );
}
