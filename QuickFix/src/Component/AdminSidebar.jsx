import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function AdminSidebar() {

  const navigate = useNavigate();

  // =========================
  // LOGOUT
  // =========================

  const handleLogout = () => {

    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("role");
    localStorage.removeItem("email");

    navigate("/login", { replace: true });

  };


  return (
    <aside className="admin-sidebar">


      {/* =========================
          SIDEBAR HEADER
      ========================= */}

      <div className="admin-sidebar-header">

        <div className="admin-sidebar-avatar">
          👨‍💼
        </div>

        <div>

          <h3>
            Administrator
          </h3>

          <p>
            Manage QuickFix
          </p>

        </div>

      </div>


      {/* =========================
          NAVIGATION
      ========================= */}

      <nav className="admin-sidebar-nav">


        {/* MAIN MENU */}

        <p className="admin-menu-title">
          MAIN MENU
        </p>


        {/* Dashboard */}

        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            isActive
              ? "admin-nav-link active"
              : "admin-nav-link"
          }
        >

          <span className="admin-nav-icon">
            📊
          </span>

          <span>
            Dashboard
          </span>

        </NavLink>


        {/* Users */}

        <NavLink
          to="/admin/users"
          className={({ isActive }) =>
            isActive
              ? "admin-nav-link active"
              : "admin-nav-link"
          }
        >

          <span className="admin-nav-icon">
            👥
          </span>

          <span>
            Users
          </span>

        </NavLink>


        {/* Providers */}

        <NavLink
          to="/admin/providers"
          className={({ isActive }) =>
            isActive
              ? "admin-nav-link active"
              : "admin-nav-link"
          }
        >

          <span className="admin-nav-icon">
            🧑‍🔧
          </span>

          <span>
            Providers
          </span>

        </NavLink>


        {/* Bookings */}

        <NavLink
          to="/admin/bookings"
          className={({ isActive }) =>
            isActive
              ? "admin-nav-link active"
              : "admin-nav-link"
          }
        >

          <span className="admin-nav-icon">
            📋
          </span>

          <span>
            Bookings
          </span>

        </NavLink>


        {/* Services */}

        <NavLink
          to="/admin/services"
          className={({ isActive }) =>
            isActive
              ? "admin-nav-link active"
              : "admin-nav-link"
          }
        >

          <span className="admin-nav-icon">
            🛠️
          </span>

          <span>
            Services
          </span>

        </NavLink>


        {/* Messages */}

        <NavLink
          to="/admin/messages"
          className={({ isActive }) =>
            isActive
              ? "admin-nav-link active"
              : "admin-nav-link"
          }
        >

          <span className="admin-nav-icon">
            💬
          </span>

          <span>
            Messages
          </span>

        </NavLink>


        {/* =========================
            ACCOUNT
        ========================= */}

        <p className="admin-menu-title admin-settings-title">
          ACCOUNT
        </p>


        {/* Profile */}

        <NavLink
          to="/admin/profile"
          className={({ isActive }) =>
            isActive
              ? "admin-nav-link active"
              : "admin-nav-link"
          }
        >

          <span className="admin-nav-icon">
            👤
          </span>

          <span>
            My Profile
          </span>

        </NavLink>


        {/* Settings */}

        <NavLink
          to="/admin/settings"
          className={({ isActive }) =>
            isActive
              ? "admin-nav-link active"
              : "admin-nav-link"
          }
        >

          <span className="admin-nav-icon">
            ⚙️
          </span>

          <span>
            Settings
          </span>

        </NavLink>

      </nav>


      {/* =========================
          SIDEBAR BOTTOM
      ========================= */}

      <div className="admin-sidebar-bottom">


        {/* HELP BOX */}

        <div className="admin-help-box">

          <div className="admin-help-icon">
            💡
          </div>

          <div>

            <strong>
              Admin Support
            </strong>

            <p>
              Manage QuickFix platform
            </p>

          </div>

        </div>


        {/* LOGOUT */}

        <button
          className="admin-logout-btn"
          onClick={handleLogout}
        >

          🚪

          <span>
            Logout
          </span>

        </button>

      </div>

    </aside>
  );
}

export default AdminSidebar;