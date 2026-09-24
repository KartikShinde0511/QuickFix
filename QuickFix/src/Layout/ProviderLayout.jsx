import React from "react";
import { Outlet } from "react-router-dom";
import "../CSS/ProviderLayout.css";
import ProviderNavbar from "../Component/ProviderNavbar";
import ProviderSidebar from "../Component/ProviderSidebar";

function ProviderLayout() {
  return (
    <div className="provider-layout">

      {/* TOP NAVBAR */}
      <ProviderNavbar />


      {/* BODY */}
      <div className="provider-layout-body">

        {/* SIDEBAR */}
        <ProviderSidebar />


        {/* PAGE CONTENT */}
        <main className="provider-main-content">
          <Outlet />
        </main>

      </div>

    </div>
  );
}

export default ProviderLayout;