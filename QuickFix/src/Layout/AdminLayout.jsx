import React from "react";
import { Outlet } from "react-router-dom";

import AdminNavbar from "../Component/AdminNavbar";
import AdminSidebar from "../Component/AdminSidebar";

function AdminLayout() {
  return (
    <div className="admin-layout">

      <AdminNavbar />

      <div className="admin-main">

        <AdminSidebar />

        <main className="admin-content">
          <Outlet />
        </main>

      </div>

    </div>
  );
}

export default AdminLayout;