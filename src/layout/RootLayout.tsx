import Header from "../components/Header";
import React from "react";
import { Outlet } from "react-router";

function RootLayout() {
  return (
    <div>
      <Header />
      <div className="px-[25px] md:mx-[100px] lg:px-[150px]">
        <Outlet />
      </div>
    </div>
  );
}

export default RootLayout;
