import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <div
      className={`flex md:justify-around justify-between px-4  align-items-center pt-4 sticky top-0 ${
        navbar ? "shadow-md bg-white" : "bg-white"
      }`}
    >
      <Link to="/">
        <h1 className="text-2xl mt-2 mb-4  md:mb-0 text-4xl">Pratiyush</h1>
      </Link>

      {/* <i className=" md:hidden bi bi-list mt-4" ></i> */}
      <div id="menuToggle" className="mt-2 md:hidden">
        <input
          id="checkbox"
          type="checkbox"
          onClick={() => setToggle(!toggle)}
        />
        <label className="toggle" htmlFor="checkbox">
          <div className="bar bar--top"></div>
          <div className="bar bar--middle"></div>
          <div className="bar bar--bottom"></div>
        </label>
      </div>
      <ul className="hidden md:flex justify-between justify-items-center text-2xl">
        <li className="p-4 hidden md:flex ">
          <a href="#js_about">About</a>
        </li>
        <li className="p-4 hidden md:flex ">
          <a href="#js_skills">Skills</a>
        </li>
        <li className="p-4 hidden md:flex ">
          <a href="#js_Project">Project</a>
        </li>
        <li className="p-4 hidden md:flex ">
          <a href="#js_Contact">Contact</a>
        </li>
      </ul>
      <ul
        className={`fixed top-20 h-full bg-[black] w-full md:hidden duration-300 
        {/* ${toggle ? "right-[0%]" : "right-[100%]"} */}  `}
      >
        <li className="p-4 text-white hover:bg-white hover:text-black m-4 rounded-md">
          <a href="#js_about" onClick={() => setToggle(!toggle)}>
            About
          </a>
        </li>
        <li className="p-4 text-white hover:bg-white hover:text-black m-4 rounded-md">
          <a href="#js_skills" onClick={() => setToggle(!toggle)}>
            Skills
          </a>
        </li>
        <li className="p-4 text-white hover:bg-white hover:text-black m-4 rounded-md">
          <a href="#js_Project" onClick={() => setToggle(!toggle)}>
            Project
          </a>
        </li>
        <li className="p-4 text-white hover:bg-white hover:text-black m-4 rounded-md">
          <a href="#js_Contact" onClick={() => setToggle(!toggle)}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
