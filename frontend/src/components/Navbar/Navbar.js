import React, { useEffect, useState } from "react";
import { TfiMenu } from "react-icons/tfi";
import { useMediaQuery } from "react-responsive";
import "./Navbar.css";
function Navbar() {
  const [navSelected, setNavSelected] = useState("Home");
  console.log("navSelected ", navSelected);
  const [isMenuActive, setIsMenuActive] = useState(false);
  console.log("isMenuActive ", isMenuActive);
  const isMediumDevice = useMediaQuery({ query: "(min-width: 768px)" });
  useEffect(() => {
    if (isMediumDevice) {
      // reset the nav to top when user explicity changes the width of devices
      setIsMenuActive(false);
    }
  }, [isMediumDevice]);
  const handleNavSelection = (option) => {
    switch (option) {
      case "Home":
        return setNavSelected("Home");
      case "About":
        return setNavSelected("About");
      case "Resume":
        return setNavSelected("Resume");
      case "Services":
        return setNavSelected("Services");
      case "Skills":
        return setNavSelected("Skills");
      case "Projects":
        return setNavSelected("Projects");
      case "My Blog":
        return setNavSelected("My Blog");
      case "Contact":
        return setNavSelected("Contact");
      default:
        return setNavSelected("Home");
    }
  };
  const handleMouseOver = () => {};
  return (
    <nav className="w-full justify-between pt-4 fixed bg-black z-10 py-4">
      <div className="flex items-center px-20 lg:p-0 justify-between sm:w-full md:w-full lg:w-[70%] m-auto">
        <a href="#home" className="text-white text-2xl font-extrabold">
          Jitesh
        </a>
        <div
          className={`lg:block  basis-3/4 ${isMenuActive ? "block" : "hidden"}`}
        >
          <ul
            className={`bg-black flex w-full justify-evenly ${
              isMenuActive
                ? "px-2 flex-col absolute left-20 top-20 max-w-fit gap-4 transition-menu mt-10"
                : ""
            }`}
          >
            <li
              className={`font-medium text-lg ${
                navSelected === "Home"
                  ? "text-yellow-700 font-normal text-xl underline underline-offset-[10px]"
                  : "text-white"
              }`}
              onClick={() => handleNavSelection("Home")}
              onMouseOver={handleMouseOver}
            >
              <a href="#home">Home</a>
            </li>
            <li
              className={`font-medium text-lg ${
                navSelected === "About"
                  ? "text-yellow-700 font-normal text-xl underline-offset-[10px]"
                  : "text-white"
              }`}
              onClick={() => handleNavSelection("About")}
            >
              <a href="#about">About</a>
            </li>
            <li
              className={`font-medium text-lg ${
                navSelected === "Resume"
                  ? "text-yellow-700 font-normal text-xl underline-offset-[10px]"
                  : "text-white"
              }`}
              onClick={() => handleNavSelection("Resume")}
            >
              <a href="#resume">Resume</a>
            </li>
            <li
              className={`font-medium text-lg ${
                navSelected === "Services"
                  ? "text-yellow-700 font-normal text-xl underline-offset-[10px]"
                  : "text-white"
              }`}
              onClick={() => handleNavSelection("Services")}
            >
              <a href="#services">Services</a>
            </li>
            <li
              className={`font-medium text-lg ${
                navSelected === "Skills"
                  ? "text-yellow-700 font-normal text-xl underline-offset-[10px]"
                  : "text-white"
              }`}
              onClick={() => handleNavSelection("Skills")}
            >
              <a href="#skills">Skills</a>
            </li>
            <li
              className={`font-medium text-lg ${
                navSelected === "Projects"
                  ? "text-yellow-700 font-normal text-xl underline-offset-[10px]"
                  : "text-white"
              }`}
              onClick={() => handleNavSelection("Projects")}
            >
              <a href="#projects">Projects</a>
            </li>
            <li
              className={`font-medium text-lg ${
                navSelected === "My Blog"
                  ? "text-yellow-700 font-normal text-xl underline-offset-[10px]"
                  : "text-white"
              }`}
              onClick={() => handleNavSelection("My Blog")}
            >
              <a href="#blogs">My Blog</a>
            </li>
            <li
              className={`font-medium text-lg ${
                navSelected === "Contact"
                  ? "text-yellow-700 font-normal text-xl underline-offset-[10px]"
                  : "text-white"
              }`}
              onClick={() => handleNavSelection("Contact")}
            >
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <button
          className="lg:hidden"
          onClick={() => setIsMenuActive(!isMenuActive)}
        >
          <div className="flex flex-row justify-center items-center gap-2 font-bold">
            <TfiMenu color="white" size={20} className="cursor-pointer" />
            <h4 className="text-gray-500 text-lg uppercase">Menu</h4>
          </div>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
