import React from "react";
import "../CSS/AdminLayout.css";
import QuickFixLogo from "../Images/QuickFixLogo.png";
function AdminNavbar() {
  return (
    <header className="admin-navbar">

      {/* LOGO */}
      <div className="admin-navbar-logo">

        <img
        src={QuickFixLogo}
        alt="QuickFix Logo"
        height={70}
        width={130}
      />

        

      </div>


      {/* SEARCH */}
      <div className="admin-navbar-search">

        <span className="admin-search-icon">
          🔍
        </span>

        <input
          type="text"
          placeholder="Search users, providers, bookings..."
        />

      </div>


      {/* RIGHT SIDE */}
      <div className="admin-navbar-right">

        {/* Notification */}
        <button className="admin-notification-btn">

          🔔

          <span className="admin-notification-dot"></span>

        </button>


        {/* Admin Profile */}
        <div className="admin-navbar-profile">

          <div className="admin-navbar-avatar">
            👨‍💼
          </div>

          <div className="admin-navbar-user">

            <strong>
              Kartik
            </strong>

            <span>
              Administrator
            </span>

          </div>

          <span className="admin-profile-arrow">
            ▾
          </span>

        </div>

      </div>

    </header>
  );
}

export default AdminNavbar;
