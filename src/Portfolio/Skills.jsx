import React, { useContext, useEffect } from "react";
import Mycontext from "../context/Mycontext";

const Skills = () => {
  const context = useContext(Mycontext);
  const { fetchSkills, allSkills } = context;

  useEffect(() => {
    fetchSkills();
  }, []);

  return (
    <div id="js_skills">
      <p className="text-center text-gray-800 md:mt-40 mt-20">What I Can Do</p>
      <h1 className="md:text-6xl text-4xl font-bold text-center mt-4">
        Skills
      </h1>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4 justify-items-around m-10 cursor-pointer">
        {allSkills.map((p, index) => (
          <div
            className="flex items-center justify-evenly p-4 rounded shadow-md hover:shadow-lg"
            key={index}
          >
            <img src={p.link} alt="" className="h-16" />
            <div>
              <p className="text-center font-bold hidden sm:inline">
                {p.nameofSkill}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
