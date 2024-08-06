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
        <h3 className="text-2xl mt-2 mb-4  md:mb-0 text-4xl font-bold">
            Pratiyush
        </h3>
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
          <a href="#js_about">
            <button className="relative group font-extrabold uppercase text-[18px] text-[black] transition-colors duration-400 ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:text-black focus:text-black cursor-pointer">
              About
              <span className="absolute bottom-[-2px] left-1/2 w-0 h-[2px] bg-black transition-all duration-400 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover:w-full group-hover:left-0"></span>
            </button>
          </a>
        </li>
        <li className="p-4 hidden md:flex ">
          <a href="#js_skills">
            <button className="relative group font-extrabold uppercase text-[18px] text-[black] transition-colors duration-400 ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:text-black focus:text-black cursor-pointer">
              Skills
              <span className="absolute bottom-[-2px] left-1/2 w-0 h-[2px] bg-black transition-all duration-400 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover:w-full group-hover:left-0"></span>
            </button>
          </a>
        </li>
        <li className="p-4 hidden md:flex ">
          <a href="#js_Project">
            <button className="relative group font-extrabold uppercase text-[18px] text-[black] transition-colors duration-400 ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:text-black focus:text-black cursor-pointer">
              Project
              <span className="absolute bottom-[-2px] left-1/2 w-0 h-[2px] bg-black transition-all duration-400 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover:w-full group-hover:left-0"></span>
            </button>
          </a>
        </li>
        <li className="p-4 hidden md:flex ">
          <a href="#js_Contact">
            <button className="relative group font-extrabold uppercase text-[18px] text-[black] transition-colors duration-400 ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:text-black focus:text-black cursor-pointer">
              Contact
              <span className="absolute bottom-[-2px] left-1/2 w-0 h-[2px] bg-black transition-all duration-400 ease-[cubic-bezier(0.25,0.8,0.25,1)] group-hover:w-full group-hover:left-0"></span>
            </button>
          </a>
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
