import React, { useContext, useEffect, useState } from "react";
import Mycontext from "../context/Mycontext";
import Loader from "./Loader";
import "./Projects.css";

const Projects = () => {
  const context = useContext(Mycontext);
  const { fetchProjects, allProjects } = context;
  const [isLoading, setIsLoading] = useState(true);

  const staticProjects = [
    {
      _id: "668d0f7477497d6c9597f7bb",
      projectname: "SHOPWELL",
      image:
        "https://img.freepik.com/free-vector/online-shopping-concept-landing-page.jpg",
      github: "https://github.com/Pratiyush2003/shopwell-frontend",
      hostlink: "https://shopwell-frontend.vercel.app/",
      __v: 0,
    },
    {
      _id: "668d103177497d6c9597f7c2",
      projectname: "WriteWay",
      image:
        "https://static.vecteezy.com/system/resources/previews/000/086/455/non_2x/writing-table.jpg",
      github: "https://github.com/Pratiyush2003/pratiyush-blog",
      hostlink: "https://pratiyush-blog.vercel.app/",
      __v: 0,
    },
    {
      _id: "668d118277497d6c9597f7c9",
      projectname: "E NoteBook",
      image:
        "https://media.idownloadblog.com/wp-content/uploads/2023/03/Notes-app-image.jpg",
      github: "https://github.com/Pratiyush2003/notes-app",
      hostlink: "https://notes-app-3bic.vercel.app/login",
      __v: 0,
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      await fetchProjects();
      setIsLoading(false);
    };
    fetchData();
  }, [fetchProjects]);

  const projectsToShow = isLoading ? staticProjects : allProjects;

  return (
    <>
      <h1
        className="md:text-6xl text-4xl font-bold text-center mt-4"
        id="js_Project"
      >
        Projects
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 m-10 md:m-20 mb-36 justify-items-center">
        {projectsToShow.map((p, index) => (
          <div
            className="bg-contain bg-center shadow-lg p-2 rounded-lg"
            key={p._id || index}
          >
            <div className="overflow-hidden rounded-lg">
              <img
                src={p.image}
                alt={p.projectname}
                className="h-60 w-96 hover:scale-125 duration-1000"
              />
            </div>
            <p className="text-center text-2xl font-bold m-6">
              {p.projectname}
            </p>
            <div className="flex items-center justify-around">
             

              <button class="btn"> <a href={p.github} target="_blank" rel="noopener noreferrer">GITHUB</a></button>

              <button class="btn"> <a href={p.hostlink} target="_blank" rel="noopener noreferrer">PROJECT</a></button>

             
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
