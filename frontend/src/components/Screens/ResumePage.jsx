import React from "react";
import ShadowContainer from "../CommonComponets/ShadowContainer";
import ResumeComponent from "../CommonComponets/ResumeComponent";
import ResumeContent from "../constants/resumeText.json";
export default function ResumePage() {
  return (
    <div id="resume" className="h-screen pt-20">
      <div className="w-[80%] m-auto">
        <div className="w-[60%] m-auto">
          <ShadowContainer
            title="Resume"
            shadowText="Resume"
            text="A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth."
          />
        </div>
        <div className="flex flex-wrap justify-evenly mt-10 gap-6">
          {
            ResumeContent.map((data)=>(
              <ResumeComponent duration={data.duration} position={data.position} companyName={data.companyName} description={data.description}/>
            ))
          }
        </div>
      </div>
    </div>
  );
}
