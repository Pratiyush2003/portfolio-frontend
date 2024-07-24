import React, { useContext } from "react";
import Mycontext from "../context/Mycontext.jsx";
import portfolioimg from "../assets/portfolioimg.jpg";

const About = () => {
  const context = useContext(Mycontext);
  const { name } = context;
  console.log(name);
  return (
    <div id="js_about">
      <p className="text-center text-gray-800 md:mt-40 mt-20 ">
        Get To Know More
      </p>
      <h1 className="md:text-6xl text-4xl font-bold text-center mt-4">
        About Me
      </h1>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-2 justify-items-center m-20">
        <div className="">
          <img src={portfolioimg} className="rounded-lg h-70 md:h-80" />
        </div>

        <div className="col-span-2 ">
          <div className="flex justify-center items-center flex-wrap">
            <div className="h-30 w-80 border-2 border-[black] m-2 text-center rounded-lg p-8">
              <i className="bi bi-award-fill text-2xl"></i>
              <p className="font-bold text-xl">Experience</p>
              <p className="text-gray-800 ">6 Months</p>
              <p className="text-gray-800 ">React Js Internship</p>
            </div>

            <div className="h-30 w-80 border-2 border-[black] m-2 text-center rounded-lg  p-8">
              <i className="bi bi-backpack3 text-2xl"></i>
              <p className="font-bold text-xl">Education</p>
              <p className="text-gray-800 ">BCA Bachelors Degree</p>
              <p className="text-gray-800 ">MERN Stack Certification</p>
            </div>
          </div>
          <div className="p-10 text-pretty text-center">
            Hello, I am Pratiyush, and welcome to my portfolio website. Here’s a
            brief introduction about me: I am pursuing my graduation from Indira
            Gandhi National Open University. I have completed a MERN Stack
            Certification from DUCAT Noida and have worked as a React.js
            Developer intern.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
