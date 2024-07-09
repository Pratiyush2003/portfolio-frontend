import React, { useContext, useEffect } from "react";
import Mycontext from "../context/Mycontext";

const Projects = () => {
  const context = useContext(Mycontext);
  const { fetchProjects, allProjects } = context;

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <>
      <h1 className="md:text-6xl text-4xl font-bold text-center mt-4" id="js_Project">
        Projects
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 m-10 md:m-20 mb-36 justify-items-center">
        {allProjects.map((p, index) => (
          <div className="bg-contain bg-center shadow-lg p-2 rounded-lg" key={index}>
            <div className="overflow-hidden rounded-lg">
              <img
                src={p.image}
                alt=""
                className="h-60 w-96 hover:scale-125 duration-1000"
              />
            </div>
            <p className="text-center text-2xl font-bold m-6">{p.projectname}</p>
            <div className="flex items-center justify-around">
              <button className="px-6 py-2 rounded-full text-[#2d2e2e] hover:text-white hover:bg-gray-500 border-2 border-rounded-900 m-2 font-bold">
                <a href={p.github} target="_blank" rel="noopener noreferrer">GITHUB</a>
              </button>

              <button className="px-6 py-2 rounded-full text-[#2d2e2e] hover:text-white hover:bg-gray-500 border-2 border-rounded-900 m-2 font-bold">
                <a href={p.hostlink} target="_blank" rel="noopener noreferrer">WEBSITE</a>
              </button> 
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
