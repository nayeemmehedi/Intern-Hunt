import React from "react";
import { Outlet, Link } from "react-router-dom";
import { GiNetworkBars } from "react-icons/gi";
import { MdDeleteSweep, MdShoppingBag } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
import { RiBardFill } from "react-icons/ri";
import { PiAlignBottomFill } from "react-icons/pi";
import { BiExclude } from "react-icons/bi";
import { FaBuilding } from "react-icons/fa";
import { TiHome } from "react-icons/ti";
import { NavLink } from "react-router-dom";

const iconsValue = [
  {
    name: <TiHome className="w-6 h-4"></TiHome>,
    value: "Overview",
    link: "/company/Overview",
  },
  {
    name: <MdDeleteSweep className="w-6 h-4"></MdDeleteSweep>,
    value: "Job Post",
    link: "/company/jobPost",
  },
  {
    name: <GiNetworkBars className="w-6 h-4"></GiNetworkBars>,
    value: "Total Job",
    link: "/company/total-job-post",
  },
  {
    name: <BsPeopleFill className="w-6 h-4"></BsPeopleFill>,
    value: "Show Cv",
    link: "/company/showCv",
  },
  // {
  //   name: <MdShoppingBag className="w-6 h-4"></MdShoppingBag>,
  //   value: "Approved Cv",
  //   link:"/company/approvedCv"

  // },

  // {
  //   name: <RiBardFill></RiBardFill>,
  //   value: "Confirm Intern",
  //   link: "/company/deleteCv",
  // }
  ,
  {
    name: <PiAlignBottomFill></PiAlignBottomFill>,
    value: "Log Out",
    link: "/company/logOut",
  },
];

const company = localStorage.getItem("name");
const role = localStorage.getItem("role");

function MainPage() {
  return (
    <div className="pt-10 bg-black ">
      <div className="px-4">
        <div className="flex  bg-gray-800 text-white rounded-lg px-4 py-2">
          <FaBuilding className=" mr-3 mt-3" size={15} />
          <div>
            <div className="font-extrabold  leading-tight text-blue-300  ">
              {company}
            </div>
            <p className="text-gray-300 text-sm font-thin ">company name</p>
          </div>
        </div>
        <div className="flex justify-content-center items-center my-3">
          <BiExclude className="text-blue-600 h-8 w-8 "></BiExclude>
        </div>

        {/* <div className="overflow-y-auto h-96"></div> */}

        <div className="overflow-y-auto  ">
          {iconsValue.map((v, id) => (
            <NavLink key={id}
              className={({ isActive }) =>
                isActive
                  ? "no-underline flex items-center text-white rounded-md bg-black  py-3 font-semibold px-2  my-2"
                  : "no-underline flex items-center text-white rounded-md bg-gray-700  py-3 font-semibold px-2  my-2"
              }
              to={v.link}
            >
              {/* <div className=""> */}
              {v.name} <span className="ml-3">{v.value}</span>
              {/* </div> */}
            </NavLink>
          ))}
        </div>

        {/* <Link to="/cv">cv</Link>
        <Link to="/bangla">Bangla</Link> */}
      </div>
    </div>
  );
}

export default MainPage;
