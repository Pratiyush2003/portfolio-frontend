import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Mycontext from "../context/Mycontext";

const Dashboard = () => {

  const context = useContext(Mycontext);
  const { link , nameofSkill, setlink , setnameofSkill , addSkill , 
    projectname , image , github , hostlink  , setprojectname, setimage, 
    setgithub , sethostlink , addprojects} = context;

    const addprojecthandler = () => 
      {
          addprojects();
          sethostlink("");
          setgithub("");
          setimage("");
          setprojectname("");
      }

  const addSkillhandler = () => 
    {
        addSkill();
        setlink("");
        setnameofSkill("")
    }
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear("token")
    navigate('/')
  }
  return (
    <>
    <button onClick={logout} className="mx-20 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">logout</button>
      <div className="m-10">
        <label htmlFor="pet-select" className="mx-10">
          Choose :{" "}
        </label>
        
        <select name="pets" id="pet-select">
          <option value="">--Please choose an option--</option>
          <option value="skills">Skills</option>
          <option value="project">project</option>
        </select>
        
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <div className="bg-gray-50 font-[sans-serif] text-[#333]">
            <div className=" flex flex-col items-center justify-center ">
              <div className="max-w-md w-full border rounded border-gray-300 bg-white">
                <h2 className="text-center text-3xl font-extrabold m-4">
                  skills
                </h2>
                <form className=" space-y-4 p-4">
                  <div>
                    <input
                    value={link}
                    onChange={(e) => setlink(e.target.value)}
                      name="Image Link"
                      required=""
                      className="w-full text-sm px-4 py-3 rounded outline-none border-2 focus:border-blue-500"
                      placeholder="Image Link"
                    />
                  </div>
                  <div>
                    <input
                    value={nameofSkill}
                    onChange={(e) => setnameofSkill(e.target.value)}
                      type="text"
                      autoComplete="current-password"
                      required=""
                      className="w-full text-sm px-4 py-3 rounded outline-none border-2 focus:border-blue-500"
                      placeholder="Name of skill"
                    />
                  </div>

                  <div className="!mt-10">
                    <button
                    onClick={addSkillhandler}
                      type="button"
                      className="w-full py-2.5 px-4 text-sm rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                    >
                      Add skill
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="bg-gray-50 font-[sans-serif] text-[#333]">
            <div className=" flex flex-col items-center justify-center ">
              <div className="max-w-md w-full border rounded border-gray-300 bg-white">
                <h2 className="text-center text-3xl font-extrabold m-4">
                  Projects
                </h2>
                <form className=" space-y-4 p-4">
                  <div>
                    <input
                     value={projectname}
                     onChange={(e) => setprojectname(e.target.value)}
                      className="w-full text-sm px-4 py-3 rounded outline-none border-2 focus:border-blue-500"
                      placeholder="Name of projects"
                    />
                  </div>
                  <div>
                    <input
                      value={image}
                      onChange={(e) => setimage(e.target.value)}
                      className="w-full text-sm px-4 py-3 rounded outline-none border-2 focus:border-blue-500"
                      placeholder="Image link"
                    />
                  </div>
                  <div>
                    <input
                      value={github}
                      onChange={(e) => setgithub(e.target.value)}
                      className="w-full text-sm px-4 py-3 rounded outline-none border-2 focus:border-blue-500"
                      placeholder="Github link"
                    />
                  </div>
                  <div>
                    <input
                      value={hostlink}
                      onChange={(e) => sethostlink(e.target.value)}
                      className="w-full text-sm px-4 py-3 rounded outline-none border-2 focus:border-blue-500"
                      placeholder="Host Link"
                    />
                  </div>

                  <div className="!mt-10">
                    <button
                    onClick={addprojecthandler}
                      type="button"
                      className="w-full py-2.5 px-4 text-sm rounded text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                    >
                      Add Projects
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Dashboard;
