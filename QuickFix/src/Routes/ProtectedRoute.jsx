import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ allowedRole }) {

  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const role = localStorage.getItem("role");

  console.log("Login status:", isLoggedIn);
  console.log("User role:", role);

  // Not logged in
  if (isLoggedIn !== "true") {
    return <Navigate to="/login" replace />;
  }

  // Check role
  if (allowedRole && role !== allowedRole) {

    // USER trying to access provider page
    if (role === "USER") {
      return <Navigate to="/dashboard" replace />;
    }

    // SERVICE PROVIDER trying to access user page
    if (role === "SERVICE_PROVIDER") {
      return <Navigate to="/provider/dashboard" replace />;
    }

    // Unknown role
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;