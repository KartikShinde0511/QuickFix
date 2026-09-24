import React, { useState } from "react";
import "../CSS/ProviderLayout.css";
import QuickFixLogo from "../Images/QuickFixLogo.png";

function ProviderNavbar() {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <header className="provider-navbar">
      {/* LOGO */}

      <img
        src={QuickFixLogo}
        alt="QuickFix Logo"
        className="logo"
        height={70}
        width={130}
      />

      {/* SEARCH */}
      <div className="provider-navbar-search">
        <span>🔍</span>

        <input
          type="text"
          placeholder="Search bookings, customers..."
          value={search}
          onChange={handleSearch}
        />

        {/* Clear Search */}
        {search && (
          <button
            className="provider-search-clear"
            onClick={() => setSearch("")}
          >
            ✕
          </button>
        )}
      </div>

      {/* RIGHT SIDE */}
      <div className="provider-navbar-right">
        {/* Notification */}
        <button className="provider-notification-btn">
          🔔
          <span className="notification-dot"></span>
        </button>

        {/* Provider Profile */}
        <div className="provider-navbar-profile">
          <div className="provider-navbar-avatar">👨‍🔧</div>

          <div className="provider-navbar-user">
            <strong>Kartik</strong>

            <span>Service Provider</span>
          </div>

          <span className="provider-profile-arrow">▾</span>
        </div>
      </div>
    </header>
  );
}

export default ProviderNavbar;
