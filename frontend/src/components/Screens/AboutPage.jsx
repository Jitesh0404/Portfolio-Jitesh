import Resume from "../../assets/Jitesh-Sharma-Resume.pdf";
import ShadowContainer from "../CommonComponets/ShadowContainer";
import profilePhoto from "../../assets/Images/Jitesh.png";
export default function AboutPage() {
  return (
    <div
      id="about"
      className="flex flex-col justify-evenly gap-10 w-[90%] m-auto"
    >
        <ShadowContainer
          title="About Me"
          shadowText="About"
          text="I see the world in lines of code, and my passion lies in crafting
        solutions that transform ideas into reality."
        />
        <div className="flex flex-col md:flex-row m-auto justify-center gap-10 w-[100%]">

      {/* <div className="flex items-center"> */}
        <img
          src={profilePhoto}
          alt="profile"
          className="w-[100%] md:w-[60%] h-[400px] md:h-full object-cover rounded-xl border"
        />
      {/* </div> */}
      <div className="">
        <div className="flex gap-10 mt-0 md:mt-20">
          <div className="flex flex-col gap-4">
            <h2 className="text-[#FFFFFF] text-sm md:text-base font-black">
              Name:{" "}
            </h2>
            <h2 className="text-[#FFFFFF] text-sm md:text-base font-black">
              Date of birth:{" "}
            </h2>
            <h2 className="text-[#FFFFFF] text-sm md:text-base font-black">
              Address:{" "}
            </h2>
            <h2 className="text-[#FFFFFF] text-sm md:text-base font-black">
              ZIP Code:{" "}
            </h2>
            <h2 className="text-[#FFFFFF] text-sm md:text-base font-black">
              Email:{" "}
            </h2>
            <h2 className="text-[#FFFFFF] text-sm md:text-base font-black">
              Phone:{" "}
            </h2>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-[#999999] text-sm md:text-sm md:text-base font-black">
              Jitesh Sharma
            </h4>
            <h4 className="text-[#999999] text-sm md:text-base font-black">
              04 April 2003
            </h4>
            <h4 className="text-[#999999] text-sm md:text-base font-black">
              Jaipur,Rajasthan
            </h4>
            <h4 className="text-[#999999] text-sm md:text-base font-black">
              302013
            </h4>
            <h4 className="text-[#999999] text-sm md:text-base font-black">
              jitesh04sharma@gmail.com
            </h4>
            <h4 className="text-[#999999] text-sm md:text-base font-black">
              9929878107
            </h4>
          </div>
        </div>
        <div className="flex gap-2 mt-10">
          <span className="text-[#FFBD39] text-xl font-black">5+</span>{" "}
          <p className="text-[#FFFFFF] text-xl font-medium">
            Projects Completed
          </p>
        </div>
        <button className="bg-[#FFBD39] px-5 py-3 rounded-3xl font-semibold tracking-[0.2rem] uppercase text-[#000000] text-sm mt-4 hover:opacity-85">
          <a href={Resume} download>
            Download CV
          </a>
        </button>
      </div>
        </div>
    </div>
  );
}
