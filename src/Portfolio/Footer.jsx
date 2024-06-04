import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Mycontext from "../context/Mycontext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const context = useContext(Mycontext);
  const { name, emails, setEmail, setname, addEmployer } = context;
  const notify = () =>
    toast("Data Sent Sucessfully", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  function submitData() {
    addEmployer();
    notify();

    setEmail("");
    setname("");
  }

  return (
    <>
      <ToastContainer />
      <div id="js_Contact" className="p-6 md:p-10 grid sm:grid-cols-2 items-center gap-16 mt-26 mx-auto max-w-4xl bg-white text-[#333] font-[sans-serif] ">
        <div>
          <h1 className="text-3xl font-extrabold">Let's Talk</h1>

          <div className="mt-12">
            <h2 className="text-lg font-extrabold">Email</h2>
            <ul className="mt-3">
              <li className="flex items-center">
                <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <i className="bi bi-envelope"></i>
                </div>
                <a href="" className="text-[#007bff] text-sm ml-3">
                  <small className="block">Mail</small>
                  <strong>pratiyushs12@outlook.in</strong>
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-12">
            <h2 className="text-lg font-extrabold">Socials</h2>
            <ul className="flex mt-3 space-x-4">
              <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <Link to="/admin">
                  <i className="bi bi-person-fill"></i>
                </Link>
              </li>
              <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a
                  href="https://www.linkedin.com/in/pratiyush-singh-7435172b0/"
                  target="_blank"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
              </li>
              <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a href="https://github.com/Pratiyush2003" target="_blank">
                  <i className="bi bi-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <form className="ml-auo space-y-4">
          <input
            onChange={(e) => setname(e.target.value)}
            value={name}
            type="text"
            placeholder="Organization Name"
            className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-[#007bff]"
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={emails}
            type="email"
            placeholder="Email"
            className="w-full rounded-md py-3 px-4 bg-gray-100 text-sm outline-[#007bff]"
          />

          <button
            onClick={submitData}
            type="button"
            className="text-white bg-[#007bff] hover:bg-blue-600 font-semibold rounded-md text-sm px-4 py-3 w-full"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default Footer;
