import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// ================= PUBLIC =================

import Login from "../Pages/Public/Login";
import Register from "../Pages/Public/Register";

// ================= LAYOUTS =================

import UserLayout from "../Layout/UserLayout";
import ProviderLayout from "../Layout/ProviderLayout";
import AdminLayout from "../Layout/AdminLayout";

// ================= PROTECTED ROUTE =================

import ProtectedRoute from "./ProtectedRoute";

// ================= USER PAGES =================

import Dashboard from "../Pages/User/Dashboard";
import SearchService from "../Pages/User/SearchService";
import MyBooking from "../Pages/User/MyBooking";
import Message from "../Pages/User/Message";
import Reviews from "../Pages/User/Reviews";
import Profile from "../Pages/User/Profile";
import Setting from "../Pages/User/Setting";
import HelpSupport from "../Pages/User/HelpSupport";

// ================= SERVICE PROVIDER PAGES =================

import ProviderDashboard from "../Pages/ServiceProvider/ProviderDashboard";
import ProviderBookings from "../Pages/ServiceProvider/ProviderBookings";
import ProviderEarnings from "../Pages/ServiceProvider/ProviderEarnings";
import ProviderMessages from "../Pages/ServiceProvider/ProviderMessages";
import ProviderProfile from "../Pages/ServiceProvider/ProviderProfile";
import ProviderSettings from "../Pages/ServiceProvider/ProviderSettings";

// ================= ADMIN PAGES =================

import AdminDashboard from "../Pages/Admin/AdminDashboard";
import ManageUsers from "../Pages/Admin/ManageUsers";
import ManageProviders from "../Pages/Admin/ManageProviders";
import ManageBookings from "../Pages/Admin/ManageBookings";
import ManageServices from "../Pages/Admin/ManageServices";
import AdminMessages from "../Pages/Admin/AdminMessages";
import AdminProfile from "../Pages/Admin/AdminProfile";
import AdminSettings from "../Pages/Admin/AdminSettings";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* =================================================
            PUBLIC ROUTES
        ================================================= */}

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        {/* =================================================
            USER SECTION
        ================================================= */}

        <Route element={<ProtectedRoute allowedRole="USER" />}>
          <Route element={<UserLayout />}>
            {/* Dashboard */}

            <Route path="/dashboard" element={<Dashboard />} />

            {/* Search Services */}

            <Route path="/search-services" element={<SearchService />} />

            {/* My Bookings */}

            <Route path="/my-bookings" element={<MyBooking />} />

            {/* Messages */}

            <Route path="/messages" element={<Message />} />

            {/* Reviews */}

            <Route path="/reviews" element={<Reviews />} />

            {/* Profile */}

            <Route path="/profile" element={<Profile />} />

            {/* Settings */}

            <Route path="/settings" element={<Setting />} />

            <Route path="/help-support" element={<HelpSupport />} />
          </Route>
        </Route>

        {/* =================================================
            SERVICE PROVIDER SECTION
        ================================================= */}

        <Route element={<ProtectedRoute allowedRole="SERVICE_PROVIDER" />}>
          <Route element={<ProviderLayout />}>
            {/* Provider Dashboard */}

            <Route path="/provider/dashboard" element={<ProviderDashboard />} />

            {/* Provider Bookings */}

            <Route path="/provider/bookings" element={<ProviderBookings />} />

            {/* Provider Earnings */}

            <Route path="/provider/earnings" element={<ProviderEarnings />} />

            {/* Provider Messages */}

            <Route path="/provider/messages" element={<ProviderMessages />} />

            {/* Provider Profile */}

            <Route path="/provider/profile" element={<ProviderProfile />} />

            {/* Provider Settings */}

            <Route path="/provider/settings" element={<ProviderSettings />} />
          </Route>
        </Route>

        {/* =================================================
            ADMIN SECTION
        ================================================= */}

        <Route element={<ProtectedRoute allowedRole="ADMIN" />}>
          <Route element={<AdminLayout />}>
            {/* Admin Dashboard */}

            <Route path="/admin/dashboard" element={<AdminDashboard />} />

            {/* Manage Users */}

            <Route path="/admin/users" element={<ManageUsers />} />

            {/* Manage Providers */}

            <Route path="/admin/providers" element={<ManageProviders />} />

            {/* Manage Bookings */}

            <Route path="/admin/bookings" element={<ManageBookings />} />

            {/* Manage Services */}

            <Route path="/admin/services" element={<ManageServices />} />

            {/* Admin Messages */}

            <Route path="/admin/messages" element={<AdminMessages />} />

            {/* Admin Profile */}

            <Route path="/admin/profile" element={<AdminProfile />} />

            {/* Admin Settings */}

            <Route path="/admin/settings" element={<AdminSettings />} />
          </Route>
        </Route>

        {/* =================================================
            HOME
        ================================================= */}

        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* =================================================
            WRONG URL
        ================================================= */}

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
