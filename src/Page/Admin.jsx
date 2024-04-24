import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/admin/Sidebar";

function Admin() {
  return (
    <div>
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-5">
          <div className="lg:col-span-1 bg-black border-r-2 border-[#170f1b] min-h-screen">
            <Sidebar></Sidebar>
          </div>
          <div className="lg:col-span-4 bg-gray-300">
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
