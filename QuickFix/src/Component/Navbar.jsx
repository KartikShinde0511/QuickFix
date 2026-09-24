import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (value.trim() !== "") {
      navigate(
        `/search-services?search=${encodeURIComponent(value)}`
      );
    } else {
      navigate("/search-services");
    }
  };

  return (
    <nav className="top-navbar">

      {/* QuickFix Logo */}
      <img
        src="src/Images/QuickFixLogo.png"
        alt="QuickFix Logo"
        className="logo"
        height={70}
        width={130}
      />

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search services..."
        value={search}
        onChange={handleSearch}
      />

      {/* Right Side */}
      <div className="navbar-right">
        🔔 &nbsp; Hello, Kartik 👤
      </div>

    </nav>
  );
}

export default Navbar;