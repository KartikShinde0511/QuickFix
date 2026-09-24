import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../Component/Navbar";
import SideBar from "../Component/SideBar";

function UserLayout() {
  return (
    <div className="user-layout">

      <Navbar />

      <div className="user-body">

        <SideBar />

        <main className="main-content">
          <Outlet />
        </main>

      </div>

    </div>
  );
}

export default UserLayout;