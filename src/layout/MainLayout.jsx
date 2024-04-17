import React from "react";
import Navbar from "../common/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../common/Footer";

export default function MainLayout() {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}
