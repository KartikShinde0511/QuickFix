import React, { useState } from "react";
import "../../CSS/UserProfile.css";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [profile, setProfile] = useState({
    name: "Kartik Shinde",
    email: "kartik@example.com",
    phone: "9876543210",
    address: "Thane, Maharashtra",
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setIsEditing(false);
    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <div className="profile-page">

      {/* HEADER */}
      <div className="profile-header">
        <div>
          <span className="profile-label">ACCOUNT</span>

          <h1>My Profile</h1>

          <p>
            Manage your personal information and account details.
          </p>
        </div>

        <div className="profile-header-icon">
          👤
        </div>
      </div>


      {/* PROFILE CONTAINER */}
      <div className="profile-container">

        {/* PROFILE TOP */}
        <div className="profile-top">

          <div className="profile-avatar">
            👤
          </div>

          <div className="profile-user-info">
            <h2>{profile.name}</h2>

            <p>{profile.email}</p>

            <span className="profile-status">
              ● Active Account
            </span>
          </div>

          <button
            className="edit-profile-btn"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? "Cancel" : "✏️ Edit Profile"}
          </button>

        </div>


        {/* PERSONAL INFORMATION */}
        <div className="profile-section">

          <div className="profile-section-title">
            <div>
              <h2>Personal Information</h2>
              <p>Update your personal details.</p>
            </div>
          </div>


          <div className="profile-form">

            {/* NAME */}
            <div className="profile-form-group">

              <label>Full Name</label>

              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                disabled={!isEditing}
              />

            </div>


            {/* EMAIL */}
            <div className="profile-form-group">

              <label>Email Address</label>

              <input
                type="email"
                name="email"
                value={profile.email}
                disabled={true}
              />

            </div>


            {/* PHONE */}
            <div className="profile-form-group">

              <label>Phone Number</label>

              <input
                type="text"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                disabled={!isEditing}
              />

            </div>


            {/* ADDRESS */}
            <div className="profile-form-group">

              <label>Address</label>

              <input
                type="text"
                name="address"
                value={profile.address}
                onChange={handleChange}
                disabled={!isEditing}
              />

            </div>

          </div>


          {/* SAVE BUTTON */}
          {isEditing && (
            <div className="profile-save-area">

              <button
                className="save-profile-btn"
                onClick={handleSave}
              >
                💾 Save Changes
              </button>

            </div>
          )}

        </div>


        {/* ACCOUNT SETTINGS */}
        <div className="profile-section">

          <div className="profile-section-title">

            <div>
              <h2>Account Settings</h2>

              <p>
                Manage your account preferences and security.
              </p>
            </div>

          </div>


          <div className="profile-settings">

            <div className="profile-setting-item">

              <div className="setting-icon">
                🔒
              </div>

              <div>
                <h3>Password</h3>

                <p>
                  Change your account password
                </p>
              </div>

              <button className="setting-btn">
                Change
              </button>

            </div>


            <div className="profile-setting-item">

              <div className="setting-icon">
                🔔
              </div>

              <div>
                <h3>Notifications</h3>

                <p>
                  Manage your notification preferences
                </p>
              </div>

              <button className="setting-btn">
                Manage
              </button>

            </div>


            <div className="profile-setting-item">

              <div className="setting-icon">
                🛡️
              </div>

              <div>
                <h3>Privacy</h3>

                <p>
                  Manage your privacy settings
                </p>
              </div>

              <button className="setting-btn">
                Manage
              </button>

            </div>

          </div>

        </div>

      </div>


      {/* SUCCESS POPUP */}
      {showSuccess && (
        <div className="profile-success-popup">

          <div className="profile-success-icon">
            ✓
          </div>

          <div>
            <h3>Profile Updated</h3>

            <p>
              Your profile was updated successfully.
            </p>
          </div>

        </div>
      )}

    </div>
  );
}

export default Profile;

