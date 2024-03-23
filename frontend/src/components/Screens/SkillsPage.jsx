import React from "react";
import CircularProgressCountUp from "../CommonComponets/SkillsCircular";
import ShadowContainer from "../CommonComponets/ShadowContainer";
import { motion } from "framer-motion";

export default function SkillsPage() {
  return (
    <div id="skills" className="h-screen">
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
        className="flex flex-col h-full justify-evenly"
      >
        <ShadowContainer
          title="My Skills "
          shadowText="Skills"
          text="Learning to code is useful no matter what your career ambitions are."
        />
        <div className="flex justify-around items-center">
          <div className="flex flex-col gap-4 justify-center items-center">
            <h2 className="text-white font-semibold text-2xl">Frontend</h2>
            <CircularProgressCountUp
              skillPercentage={80}
              btnText={"Measure Frontend"}
            />
          </div>
          <div className="flex flex-col gap-4 justify-center items-center">
            <h2 className="text-white font-semibold text-2xl">Backend</h2>
            <CircularProgressCountUp
              skillPercentage={90}
              btnText={"Measure Backend"}
            />
          </div>
          <div className="flex flex-col gap-4 justify-center items-center">
            <h2 className="text-white font-semibold text-2xl">MERN Stack</h2>
            <CircularProgressCountUp
              skillPercentage={90}
              btnText={"Measure MERN"}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
