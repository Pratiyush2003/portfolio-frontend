import { useState } from "react";
import Mycontext from "./Mycontext";


const MyState = (props) => {
  const [name, setname] = useState("");
  const [emails, setEmail] = useState("");
  const [email, setLoginEmail] = useState("")
  const [password, setpassword] = useState("")
  const [link, setlink] = useState("")
  const [nameofSkill, setnameofSkill] = useState("")

  const [projectname, setprojectname] = useState("")
  const [image, setimage] = useState("")
  const [github, setgithub] = useState("")
  const [hostlink, sethostlink] = useState("")

  const [allProjects , setAllporject] = useState([]);
  const [allSkills , setAllSkills] = useState([]);

const fetchProjects = async () => {
  const res = await fetch('https://portfolio-backend-3-imo6.onrender.com/skill/project')
  try {
    const data = await res.json();
    setAllporject(data);
  } catch (error) {
    console.log(error)
  }
}

const fetchSkills = async () => {
  const res = await fetch('https://portfolio-backend-3-imo6.onrender.com/skill/skill')
  try {
    const data = await res.json();
    setAllSkills(data);
  } catch (error) {
    console.log(error)
  }
}

  const addprojects = async () => {
    const res = await fetch("https://portfolio-backend-3-imo6.onrender.com/skill/project", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ projectname , image , github , hostlink })
    });
    const adduser = await res.json();
    fetchProjects();
    if(adduser.error){
       console.log(adduser.error)
    }
  };

  const addSkill = async () => {
    const res = await fetch("https://portfolio-backend-3-imo6.onrender.com/skill/skill", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ link , nameofSkill })
    });
    const adduser = await res.json();
    fetchSkills();
    if(adduser.error){
       console.log(adduser.error)
    }
  };

  
  
  const addEmployer = async () => {
    const res = await fetch("https://portfolio-backend-3-imo6.onrender.com/employee/employeer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name , emails })
    });
    const adduser = await res.json();
    console.log(adduser)
    if(adduser.error){
       console.log(adduser.error)
    }
  };


const login = async () => {
    const res = await fetch("https://portfolio-backend-3-imo6.onrender.com/register/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email , password })
    });
    console.log(res)
    const checkuser = await res.json();
    console.log(checkuser)
    if(checkuser.error){
       console.log(checkuser.error)
    }else{
      localStorage.setItem('token', checkuser.token)
    }
  };



  return (
    <Mycontext.Provider value={{ name , emails, email, setEmail, setname , addEmployer , setLoginEmail, login, password , setpassword , link , nameofSkill, setlink , setnameofSkill , addSkill , projectname , image , github , hostlink  , setprojectname, setimage, setgithub , sethostlink , addprojects , fetchProjects , allProjects , allSkills , fetchSkills}}> 
      {props.children}
    </Mycontext.Provider>
  );
};

export default MyState;
