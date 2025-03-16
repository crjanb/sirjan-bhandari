import musashi from "../assets/profile.jpg";
import React from "react";
import { useNavigate } from "react-router-dom";

function Navigation() {
  const navigate = useNavigate();
  return (
    <>
      <nav className="w-full sm:w-3/6 mx-auto flex flex-col sm:flex-row pt-8 sm:pt-16">
        {/* Profile Picture Section */}
        <div className="w-16 sm:w-20 mx-auto sm:mx-0">
          <img src={musashi} className="rounded-md" alt="Profile" />
        </div>

        {/* Name and Navigation Links */}
        <div className="text-center sm:text-left mt-4 sm:mt-0">
          <h1 className="text-white font-bold text-2xl sm:text-4xl px-4 pt-2">
            Sirjan Bhandari
          </h1>
          <table className="my-2 sm:my-1 mx-auto sm:mx-0">
            <tr className="text-white">
              <th
                className="border-solid border-r-2 border-emerald-400 px-4 sm:ml-4 sm:pl-4 pr-3 hover:underline hover:cursor-pointer"
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </th>
              <th
                className="border-solid border-r-2 border-emerald-400 px-3 hover:underline hover:cursor-pointer"
                onClick={() => {
                  navigate("/project");
                }}
              >
                Projects
              </th>
              <th
                className="pl-3 hover:underline hover:cursor-pointer"
                onClick={() => {
                  navigate("/experience");
                }}
              >
                Experience
              </th>
            </tr>
          </table>
        </div>
      </nav>
    </>
  );
}

const MemorizedNavBar = React.memo(Navigation);
export default MemorizedNavBar;
