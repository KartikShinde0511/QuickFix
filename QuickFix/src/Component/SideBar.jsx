import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

function SideBar() {
  const navigate = useNavigate();

  // Logout function
  const handleLogout = () => {
    // Remove login information
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("role");
    localStorage.removeItem("email");

    // Redirect to login page
    navigate("/login", { replace: true });
  };

  return (
    <aside className="sidebar">

      {/* Menu */}
      <ul className="sidebar-menu">

        {/* Dashboard */}
        <li>
          <NavLink to="/dashboard">
            <button type="button">🏠</button>
            <span>Dashboard</span>
          </NavLink>
        </li>

        {/* Search Services */}
        <li>
          <NavLink to="/search-services">
            <button type="button">🔍</button>
            <span>Search Services</span>
          </NavLink>
        </li>

        {/* My Bookings */}
        <li>
          <NavLink to="/my-bookings">
            <button type="button">📋</button>
            <span>My Bookings</span>
          </NavLink>
        </li>

        {/* Messages */}
        <li>
          <NavLink to="/messages">
            <button type="button">💬</button>
            <span>Messages</span>
          </NavLink>
        </li>

        {/* Reviews */}
        <li>
          <NavLink to="/reviews">
            <button type="button">⭐</button>
            <span>Reviews</span>
          </NavLink>
        </li>

        {/* Profile */}
        <li>
          <NavLink to="/profile">
            <button type="button">👤</button>
            <span>Profile</span>
          </NavLink>
        </li>

        {/* Help & Support */}
        <li>
          <NavLink to="/help-support">
            <button type="button">🎧</button>
            <span>Help & Support</span>
          </NavLink>
        </li>

        {/* Settings */}
        <li>
          <NavLink to="/settings">
            <button type="button">⚙️</button>
            <span>Settings</span>
          </NavLink>
        </li>

      </ul>

      {/* Logout */}
      <div
        className="sidebar-logout"
        onClick={handleLogout}
      >
        <button type="button">🚪</button>
        <span>Logout</span>
      </div>

    </aside>
  );
}

export default SideBar;