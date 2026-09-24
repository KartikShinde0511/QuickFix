import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function ProviderSidebar() {
  const navigate = useNavigate();

  // ================= LOGOUT =================

  const handleLogout = () => {
    // Remove login information
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("role");
    localStorage.removeItem("email");

    // Go to login page
    navigate("/login", { replace: true });
  };

  return (
    <aside className="provider-sidebar">

      {/* SIDEBAR HEADER */}
      <div className="provider-sidebar-header">

        <div className="provider-sidebar-avatar">
          👨‍🔧
        </div>

        <div>
          <h3>Service Provider</h3>
          <p>Manage your services</p>
        </div>

      </div>


      {/* NAVIGATION */}
      <nav className="provider-sidebar-nav">

        <p className="provider-menu-title">
          MAIN MENU
        </p>


        {/* Dashboard */}
        <NavLink
          to="/provider/dashboard"
          className={({ isActive }) =>
            isActive
              ? "provider-nav-link active"
              : "provider-nav-link"
          }
        >
          <span className="provider-nav-icon">📊</span>
          <span>Dashboard</span>
        </NavLink>


        {/* Bookings */}
        <NavLink
          to="/provider/bookings"
          className={({ isActive }) =>
            isActive
              ? "provider-nav-link active"
              : "provider-nav-link"
          }
        >
          <span className="provider-nav-icon">📋</span>
          <span>Bookings</span>
        </NavLink>


        {/* Earnings */}
        <NavLink
          to="/provider/earnings"
          className={({ isActive }) =>
            isActive
              ? "provider-nav-link active"
              : "provider-nav-link"
          }
        >
          <span className="provider-nav-icon">💰</span>
          <span>Earnings</span>
        </NavLink>


        {/* Messages */}
        <NavLink
          to="/provider/messages"
          className={({ isActive }) =>
            isActive
              ? "provider-nav-link active"
              : "provider-nav-link"
          }
        >
          <span className="provider-nav-icon">💬</span>
          <span>Messages</span>
        </NavLink>


        <p className="provider-menu-title provider-settings-title">
          ACCOUNT
        </p>


        {/* Profile */}
        <NavLink
          to="/provider/profile"
          className={({ isActive }) =>
            isActive
              ? "provider-nav-link active"
              : "provider-nav-link"
          }
        >
          <span className="provider-nav-icon">👤</span>
          <span>My Profile</span>
        </NavLink>


        {/* Settings */}
        <NavLink
          to="/provider/settings"
          className={({ isActive }) =>
            isActive
              ? "provider-nav-link active"
              : "provider-nav-link"
          }
        >
          <span className="provider-nav-icon">⚙️</span>
          <span>Settings</span>
        </NavLink>

      </nav>


      {/* SIDEBAR BOTTOM */}
      <div className="provider-sidebar-bottom">

        <div className="provider-help-box">

          <div className="provider-help-icon">
            💡
          </div>

          <div>
            <strong>Need Help?</strong>
            <p>Contact QuickFix support</p>
          </div>

        </div>


        {/* LOGOUT */}
        <button
          className="provider-logout-btn"
          onClick={handleLogout}
        >
          🚪
          <span>Logout</span>
        </button>

      </div>

    </aside>
  );
}

export default ProviderSidebar;