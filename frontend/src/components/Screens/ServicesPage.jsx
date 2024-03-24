import React from "react";
import ShadowContainer from "../CommonComponets/ShadowContainer";
import Service from "../CommonComponets/Service";
import { LiaSearchengin } from "react-icons/lia";
import { MdSendToMobile } from "react-icons/md";
export default function ServicesPage() {
  return (
    <div id="services" className="pt-20 h-screen">
      <ShadowContainer
        title="Services "
        shadowText="Services"
        text="Always render more and better service than is expected of you, no matter what your task may be."
      />
      <div className="flex flex-wrap justify-around items-center mt-20">
        <Service Icon={<MdSendToMobile color="#FFBD39" size={50}/>} text={'Mobile App'}/>
        <Service Icon={<LiaSearchengin color="#FFBD39" size={50}/>} text={'Web Development'}/>
        <Service Icon={<LiaSearchengin color="#FFBD39" size={50}/>} text={'Freelancing'}/>
      </div>
    </div>
  );
}
