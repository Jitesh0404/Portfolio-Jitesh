import React from "react";
import ShadowContainer from "../CommonComponets/ShadowContainer";
import Service from "../CommonComponets/Service";
import { LiaSearchengin } from "react-icons/lia";
import { MdSendToMobile } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";
import { GoProjectRoadmap } from "react-icons/go";
import { motion } from "framer-motion";
export default function ServicesPage() {
  return (
    <div id="services" className="mt-40">
      <div className="mt-20 w-[90%] m-auto">
        <ShadowContainer
          title="Services "
          shadowText="Services"
          text="Always render more and better service than is expected of you, no matter what your task may be."
        />
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
          viewport={{ once: true, amount: 0.8 }}
        >
          <div className="flex flex-wrap mt-20 justify-start items-center gap-10 w-[80%] m-auto">
            <Service
              Icon={
                <MdSendToMobile
                  size={50}
                  className="text-[#FFBD39] group-hover:text-white"
                />
              }
              text={"App Development"}
            />
            <Service
              Icon={
                <RiComputerLine
                  size={50}
                  className="text-[#FFBD39] group-hover:text-white"
                />
              }
              text={"Web Development"}
            />
            <Service
              Icon={
                <LiaSearchengin
                  size={50}
                  className="text-[#FFBD39] group-hover:text-white"
                />
              }
              text={"Freelancing"}
            />
            <Service
              Icon={
                <GoProjectRoadmap
                  size={50}
                  className="text-[#FFBD39] group-hover:text-white"
                />
              }
              text={"Project"}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
