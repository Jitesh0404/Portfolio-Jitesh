import React from "react";
import ShadowContainer from "../CommonComponets/ShadowContainer";
import ResumeComponent from "../CommonComponets/ResumeComponent";
import ResumeContent from "../constants/resumeText.json";
import { motion } from "framer-motion";
import Resume from "../../assets/Jitesh-Sharma-Resume.pdf";
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
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 1 },
          }}
          viewport={{ once: false, amount: 0.8 }}
        >
          <div className="flex flex-wrap justify-evenly mt-10 gap-6">
            {ResumeContent.map((data) => (
              <ResumeComponent
                duration={data.duration}
                position={data.position}
                companyName={data.companyName}
                description={data.description}
              />
            ))}
          </div>
          <div className="flex justify-center items-center mt-10">
            <button className="bg-[#FFBD39] px-7 py-5 rounded-3xl font-semibold tracking-[0.2rem] uppercase text-[#000000] text-sm mt-4 hover:opacity-85 items-center">
              <a href={Resume} download>
                Download CV
              </a>
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
