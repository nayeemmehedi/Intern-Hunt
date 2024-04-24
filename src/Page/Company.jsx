import React from "react";
import MainPage from "../components/company/MainPage/Index";
import { Link, Outlet } from "react-router-dom";

function Company() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-5">
        <div className="lg:col-span-1 bg-black border-r-2 border-[#170f1b] min-h-screen">
          <MainPage></MainPage>
        </div>
        <div className="lg:col-span-4 bg-gray-300">
          <Outlet></Outlet>
        </div>
      </div>
    </div>

    
  );
}

export default Company;
