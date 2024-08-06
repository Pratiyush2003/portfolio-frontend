import React, { useContext, useEffect, useState } from "react";
import Mycontext from "../context/Mycontext";
import Loader from "./Loader";

const Skills = () => {
  const context = useContext(Mycontext);
  const { fetchSkills, allSkills } = context;
  const [isLoading, setIsLoading] = useState(true);

  const staticSkills = [
    {
      _id: "665dc2c0a8226588ed6baa28",
      link: "https://freeiconshop.com/wp-content/uploads/edd/html-flat.png",
      nameofSkill: "HTML",
      __v: 0,
    },
    {
      _id: "665dc2e4a8226588ed6baa2f",
      link: "https://icons.iconarchive.com/icons/martz90/hex/512/css-3-icon.png",
      nameofSkill: "CSS",
      __v: 0,
    },
    {
      _id: "665dc2f6a8226588ed6baa32",
      link: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
      nameofSkill: "JAVASCRIPT",
      __v: 0,
    },
    {
      _id: "665dc30da8226588ed6baa35",
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcBiBI248rgjtRfF",
      nameofSkill: "REACT JS",
      __v: 0,
    },
    {
      _id: "665dc323a8226588ed6baa38",
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHqH23TDSFbOukJs",
      nameofSkill: "REDUX TOOLKIT",
      __v: 0,
    },
    {
      _id: "665dc33ba8226588ed6baa3b",
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX9fZzRj7BuQAtuf",
      nameofSkill: "TAILWIND",
      __v: 0,
    },
    {
      _id: "665dc355a8226588ed6baa3e",
      link: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.png",
      nameofSkill: "BOOTSTRAP",
      __v: 0,
    },
    {
      _id: "665dc36fa8226588ed6baa41",
      link: "https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png",
      nameofSkill: "NEXT JS",
      __v: 0,
    },
    {
      _id: "665dc386a8226588ed6baa44",
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbzLeVd0WkVlNkDr",
      nameofSkill: "NODE JS",
      __v: 0,
    },
    {
      _id: "665dc3a2a8226588ed6baa47",
      link: "https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail.png",
      nameofSkill: "EXPRESS JS",
      __v: 0,
    },
    {
      _id: "665dc3b7a8226588ed6baa4a",
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQehj_TQZOfp4t-1r",
      nameofSkill: "MONGO DB",
      __v: 0,
    },
    {
      _id: "665dc3d8a8226588ed6baa4d",
      link: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-hHGA5dR6SOq4wV",
      nameofSkill: "JWT AUTH",
      __v: 0,
    },
    {
      _id: "665dc3f7a8226588ed6baa50",
      link: "https://as2.ftcdn.net/v2/jpg/02/50/30/59/1000_F_250305943_sDC6la1N1fDl.png",
      nameofSkill: "GITHUB",
      __v: 0,
    },
  ];

  useEffect(() => {
    const fetchData = async () => {
      await fetchSkills();
      setIsLoading(false);
    };
    fetchData();
  }, [fetchSkills]);

  const skillsToShow = isLoading ? staticSkills : allSkills;

  return (
    <div id="js_skills">
      <p className="text-center text-gray-800 md:mt-40 mt-20">What I Can Do</p>
      <h1 className="md:text-6xl text-4xl font-bold text-center mt-4">Skills</h1>
      <div className="grid md:grid-cols-4 grid-cols-2 gap-4 justify-items-around m-10 cursor-pointer">
        {skillsToShow.map((p, index) => (
          <div
            className="flex items-center justify-evenly p-4 rounded shadow-md hover:shadow-lg"
            key={p._id || index}
          >
            <img src={p.link} alt="image loading" className="h-16" />
            <div>
              <p className="text-center font-bold hidden sm:inline">{p.nameofSkill}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
