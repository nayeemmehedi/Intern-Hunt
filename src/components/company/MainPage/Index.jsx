import React from "react";
import { Outlet, Link } from "react-router-dom";
import { GiNetworkBars } from "react-icons/gi";
import { MdDeleteSweep, MdShoppingBag } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
import { RiBardFill } from "react-icons/ri";
import { PiAlignBottomFill } from "react-icons/pi";
import { BiExclude } from "react-icons/bi";
import { FaBuilding } from "react-icons/fa";

const iconsValue = [
  {
    name: <GiNetworkBars className="w-6 h-4"></GiNetworkBars>,
    value: "Overview",
  },
  {
    name: <MdDeleteSweep className="w-6 h-4"></MdDeleteSweep>,
    value: "Job Post",
  },
  {
    name: <MdShoppingBag className="w-6 h-4"></MdShoppingBag>,
    value: "Approved Cv",
  },
  {
    name: <BsPeopleFill className="w-6 h-4"></BsPeopleFill>,
    value: "Show Cv",
  },
  {
    name: <RiBardFill></RiBardFill>,
    value: "Delete Cv",
  },
  {
    name: <PiAlignBottomFill></PiAlignBottomFill>,
    value: "Log Out",
  },
];

function MainPage() {
  return (
    <div className="pt-10">
      <div className="px-4">
        <div className="flex  bg-gray-800 text-white rounded-lg px-4 py-2">
          <FaBuilding className=" mr-3 mt-3" size={15} />
          <div>
            <div className="font-semibold  leading-tight">Company Name</div>
            <p className="text-gray-300 text-sm">Production</p>
          </div>
        </div>
        <div className="flex justify-content-center items-center my-3">
          <BiExclude className="text-blue-600 h-8 w-8 "></BiExclude>
        </div>

        <div className="">
          {iconsValue.map((v, id) => (
            <div className="flex items-center text-white rounded-md bg-gray-700  py-3 font-semibold px-2  my-2">
              {/* <GiNetworkBars className="w-6 h-4" />
              <span className="ml-3">Overview</span> */}
              {v.name} <span className="ml-3">{v.value}</span>
            </div>
          ))}
        </div>

        {/* <Link to="/cv">cv</Link>
        <Link to="/bangla">Bangla</Link> */}
      </div>
    </div>
  );
}

export default MainPage;
