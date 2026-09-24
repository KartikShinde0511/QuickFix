import React, { useState } from "react";
import "../../CSS/AdminProfile.css";

function AdminProfile() {
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Kartik Shinde",
    email: "admin@quickfix.com",
    phone: "9876543210",
    role: "Administrator",
    location: "Mumbai, Maharashtra",
  });

  const [formData, setFormData] = useState(profile);

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  // =========================
  // HANDLE PROFILE INPUT
  // =========================

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // =========================
  // SAVE PROFILE
  // =========================

  const saveProfile = () => {
    setProfile(formData);
    setIsEditing(false);
    alert("Profile updated successfully!");
  };

  // =========================
  // CANCEL EDIT
  // =========================

  const cancelEdit = () => {
    setFormData(profile);
    setIsEditing(false);
  };

  // =========================
  // PASSWORD INPUT
  // =========================

  const handlePasswordChange = (e) => {
    setPasswordData({
      ...passwordData,
      [e.target.name]: e.target.value,
    });
  };

  // =========================
  // CHANGE PASSWORD
  // =========================

  const changePassword = (e) => {
    e.preventDefault();

    if (
      !passwordData.currentPassword ||
      !passwordData.newPassword ||
      !passwordData.confirmPassword
    ) {
      alert("Please fill all password fields.");
      return;
    }

    if (
      passwordData.newPassword !==
      passwordData.confirmPassword
    ) {
      alert("New password and confirm password do not match.");
      return;
    }

    if (passwordData.newPassword.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    alert("Password changed successfully!");

    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="admin-profile">

      {/* =================================================
          PAGE HEADER
      ================================================= */}

      <div className="admin-profile-header">

        <div>
          <p className="admin-profile-label">
            ADMIN PANEL
          </p>

          <h1>My Profile</h1>

          <p>
            Manage your administrator account and
            personal information.
          </p>
        </div>

        <div className="admin-profile-status">

          <span className="admin-profile-status-dot"></span>

          <div>
            <small>ACCOUNT STATUS</small>
            <strong>Active</strong>
          </div>

        </div>

      </div>


      {/* =================================================
          PROFILE HERO
      ================================================= */}

      <div className="admin-profile-hero">

        <div className="admin-profile-main">

          <div className="admin-profile-avatar">
            👨‍💼
          </div>

          <div className="admin-profile-identity">

            <h2>{profile.name}</h2>

            <p>{profile.email}</p>

            <span>
              🛡️ {profile.role}
            </span>

          </div>

        </div>


        {!isEditing ? (

          <button
            className="admin-profile-edit-btn"
            onClick={() => setIsEditing(true)}
          >
            ✏️ Edit Profile
          </button>

        ) : (

          <div className="admin-profile-edit-actions">

            <button
              className="admin-profile-cancel-btn"
              onClick={cancelEdit}
            >
              Cancel
            </button>

            <button
              className="admin-profile-save-btn"
              onClick={saveProfile}
            >
              ✓ Save Changes
            </button>

          </div>

        )}

      </div>


      {/* =================================================
          MAIN GRID
      ================================================= */}

      <div className="admin-profile-grid">


        {/* =================================================
            PERSONAL INFORMATION
        ================================================= */}

        <div className="admin-profile-card">

          <div className="admin-profile-card-header">

            <div>
              <h2>Personal Information</h2>

              <p>
                Your administrator account details
              </p>
            </div>

            <span className="admin-profile-card-icon">
              👤
            </span>

          </div>


          <div className="admin-profile-form">

            {/* NAME */}

            <div className="admin-profile-field">

              <label>Full Name</label>

              {isEditing ? (

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />

              ) : (

                <div className="admin-profile-value">
                  👤 {profile.name}
                </div>

              )}

            </div>


            {/* EMAIL */}

            <div className="admin-profile-field">

              <label>Email Address</label>

              {isEditing ? (

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />

              ) : (

                <div className="admin-profile-value">
                  ✉️ {profile.email}
                </div>

              )}

            </div>


            {/* PHONE */}

            <div className="admin-profile-field">

              <label>Phone Number</label>

              {isEditing ? (

                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />

              ) : (

                <div className="admin-profile-value">
                  📱 {profile.phone}
                </div>

              )}

            </div>


            {/* LOCATION */}

            <div className="admin-profile-field">

              <label>Location</label>

              {isEditing ? (

                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                />

              ) : (

                <div className="admin-profile-value">
                  📍 {profile.location}
                </div>

              )}

            </div>


            {/* ROLE */}

            <div className="admin-profile-field">

              <label>Account Role</label>

              <div className="admin-profile-value">

                🛡️ {profile.role}

                <span className="admin-profile-role-badge">
                  Admin
                </span>

              </div>

            </div>

          </div>

        </div>


        {/* =================================================
            ACCOUNT OVERVIEW
        ================================================= */}

        <div className="admin-profile-card">

          <div className="admin-profile-card-header">

            <div>
              <h2>Account Overview</h2>

              <p>
                Quick statistics from QuickFix
              </p>
            </div>

            <span className="admin-profile-card-icon">
              📊
            </span>

          </div>


          <div className="admin-profile-stat-list">


            <div className="admin-profile-stat">

              <div className="admin-profile-stat-icon users">
                👥
              </div>

              <div>
                <span>Total Users</span>
                <strong>128</strong>
              </div>

            </div>


            <div className="admin-profile-stat">

              <div className="admin-profile-stat-icon providers">
                🧑‍🔧
              </div>

              <div>
                <span>Service Providers</span>
                <strong>42</strong>
              </div>

            </div>


            <div className="admin-profile-stat">

              <div className="admin-profile-stat-icon bookings">
                📋
              </div>

              <div>
                <span>Total Bookings</span>
                <strong>356</strong>
              </div>

            </div>


            <div className="admin-profile-stat">

              <div className="admin-profile-stat-icon services">
                🛠️
              </div>

              <div>
                <span>Services</span>
                <strong>24</strong>
              </div>

            </div>

          </div>

        </div>


      </div>


      {/* =================================================
          SECURITY SECTION
      ================================================= */}

      <div className="admin-profile-security-card">

        <div className="admin-profile-card-header">

          <div>
            <h2>Security</h2>

            <p>
              Keep your administrator account secure.
            </p>
          </div>

          <span className="admin-profile-card-icon">
            🔐
          </span>

        </div>


        <form
          className="admin-profile-password-form"
          onSubmit={changePassword}
        >

          <div className="admin-profile-password-field">

            <label>Current Password</label>

            <input
              type="password"
              name="currentPassword"
              placeholder="Enter current password"
              value={passwordData.currentPassword}
              onChange={handlePasswordChange}
            />

          </div>


          <div className="admin-profile-password-field">

            <label>New Password</label>

            <input
              type="password"
              name="newPassword"
              placeholder="Enter new password"
              value={passwordData.newPassword}
              onChange={handlePasswordChange}
            />

          </div>


          <div className="admin-profile-password-field">

            <label>Confirm Password</label>

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm new password"
              value={passwordData.confirmPassword}
              onChange={handlePasswordChange}
            />

          </div>


          <button
            type="submit"
            className="admin-profile-password-btn"
          >
            🔒 Change Password
          </button>

        </form>

      </div>


      {/* =================================================
          RECENT ACTIVITY
      ================================================= */}

      <div className="admin-profile-card admin-profile-activity-card">

        <div className="admin-profile-card-header">

          <div>
            <h2>Recent Activity</h2>

            <p>
              Latest administrator activities
            </p>
          </div>

          <span className="admin-profile-card-icon">
            🕐
          </span>

        </div>


        <div className="admin-profile-activities">

          <div className="admin-profile-activity">

            <div className="admin-profile-activity-icon">
              👤
            </div>

            <div>
              <strong>
                Updated user account
              </strong>

              <p>
                Rahul Sharma's account status was updated.
              </p>

              <small>
                Today • 10:30 AM
              </small>
            </div>

          </div>


          <div className="admin-profile-activity">

            <div className="admin-profile-activity-icon">
              🛠️
            </div>

            <div>
              <strong>
                Added a new service
              </strong>

              <p>
                AC Repair was added to QuickFix.
              </p>

              <small>
                Yesterday • 04:15 PM
              </small>
            </div>

          </div>


          <div className="admin-profile-activity">

            <div className="admin-profile-activity-icon">
              🧑‍🔧
            </div>

            <div>
              <strong>
                Approved service provider
              </strong>

              <p>
                PowerFix Services was approved.
              </p>

              <small>
                02 Sep 2026 • 01:20 PM
              </small>
            </div>

          </div>

        </div>

      </div>


      {/* =================================================
          ACCOUNT SECURITY FOOTER
      ================================================= */}

      <div className="admin-profile-security-footer">

        <div className="admin-profile-security-icon">
          🛡️
        </div>

        <div>

          <h3>
            Your account is protected
          </h3>

          <p>
            QuickFix administrator access is secured
            with account authentication and role-based
            access control.
          </p>

        </div>

        <span>
          Secure
        </span>

      </div>

    </div>
  );
}

export default AdminProfile;