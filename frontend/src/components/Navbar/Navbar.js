import React, { useState } from "react";
import "./Navbar.css";
function Navbar() {
  const [navSelected, setNavSelected] = useState("Home");
  console.log("navSelected ", navSelected);
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
      <div className="flex items-center justify-between w-3/4 m-auto">
      <a href="#home" className="text-white text-2xl font-extrabold">
        Jitesh
      </a>
      <div className="flex basis-3/4">
        <ul className="flex w-full justify-evenly">
          <li
            className={`font-medium text-lg ${
              navSelected === "Home"
                ? "text-yellow-700 font-normal text-xl"
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
                ? "text-yellow-700 font-normal text-xl"
                : "text-white"
            }`}
            onClick={() => handleNavSelection("About")}
          >
            <a href="#about">About</a>
          </li>
          <li
            className={`font-medium text-lg ${
              navSelected === "Resume"
                ? "text-yellow-700 font-normal text-xl"
                : "text-white"
            }`}
            onClick={() => handleNavSelection("Resume")}
          >
            <a href="#resume">Resume</a>
          </li>
          <li
            className={`font-medium text-lg ${
              navSelected === "Services"
                ? "text-yellow-700 font-normal text-xl"
                : "text-white"
            }`}
            onClick={() => handleNavSelection("Services")}
          >
            <a href="#services">Services</a>
          </li>
          <li
            className={`font-medium text-lg ${
              navSelected === "Skills"
                ? "text-yellow-700 font-normal text-xl"
                : "text-white"
            }`}
            onClick={() => handleNavSelection("Skills")}
          >
            <a href="#skills">Skills</a>
          </li>
          <li
            className={`font-medium text-lg ${
              navSelected === "Projects"
                ? "text-yellow-700 font-normal text-xl"
                : "text-white"
            }`}
            onClick={() => handleNavSelection("Projects")}
          >
            <a href="#projects">Projects</a>
          </li>
          <li
            className={`font-medium text-lg ${
              navSelected === "My Blog"
                ? "text-yellow-700 font-normal text-xl"
                : "text-white"
            }`}
            onClick={() => handleNavSelection("My Blog")}
          >
            <a href="#blogs">My Blog</a>
          </li>
          <li
            className={`font-medium text-lg ${
              navSelected === "Contact"
                ? "text-yellow-700 font-normal text-xl"
                : "text-white"
            }`}
            onClick={() => handleNavSelection("Contact")}
          >
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      </div>
        
    </nav>
  );
}

export default Navbar;
