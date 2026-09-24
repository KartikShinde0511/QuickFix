import React, { useState } from "react";
import "../../CSS/ProviderProfile.css";

function ProviderProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [profile, setProfile] = useState({
    name: "Kartik Shinde",
    email: "kartik@gmail.com",
    phone: "+91 98765 43210",
    location: "Thane, Maharashtra",
    profession: "AC & Electrical Technician",
    experience: "3 Years",
    bio: "Professional service provider offering reliable AC repair, electrical and home maintenance services.",
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
    <div className="provider-profile-page">

      {/* ================= HEADER ================= */}

      <div className="provider-profile-header">

        <div>
          <span className="provider-profile-label">
            ACCOUNT
          </span>

          <h1>My Profile</h1>

          <p>
            Manage your service provider profile and professional information.
          </p>
        </div>

        <div className="provider-profile-header-icon">
          👤
        </div>

      </div>


      {/* ================= PROFILE TOP ================= */}

      <div className="provider-profile-card">

        <div className="provider-profile-main">

          <div className="provider-profile-avatar">
            👨‍🔧
          </div>

          <div className="provider-profile-identity">

            <h2>{profile.name}</h2>

            <p>{profile.profession}</p>

            <div className="provider-profile-status">
              <span></span>
              Active Provider
            </div>

          </div>

        </div>


        <button
          className="provider-profile-edit-btn"
          onClick={() => setIsEditing(!isEditing)}
        >
          ✏️ {isEditing ? "Cancel" : "Edit Profile"}
        </button>

      </div>


      {/* ================= STATISTICS ================= */}

      <div className="provider-profile-stats">

        <div className="provider-profile-stat">

          <div className="provider-profile-stat-icon">
            📋
          </div>

          <div>
            <strong>128</strong>
            <span>Completed Jobs</span>
          </div>

        </div>


        <div className="provider-profile-stat">

          <div className="provider-profile-stat-icon">
            ⭐
          </div>

          <div>
            <strong>4.8</strong>
            <span>Average Rating</span>
          </div>

        </div>


        <div className="provider-profile-stat">

          <div className="provider-profile-stat-icon">
            🛠️
          </div>

          <div>
            <strong>4</strong>
            <span>Services</span>
          </div>

        </div>


        <div className="provider-profile-stat">

          <div className="provider-profile-stat-icon">
            📅
          </div>

          <div>
            <strong>3+</strong>
            <span>Years Experience</span>
          </div>

        </div>

      </div>


      {/* ================= MAIN GRID ================= */}

      <div className="provider-profile-grid">


        {/* ================= PERSONAL INFORMATION ================= */}

        <div className="provider-profile-section">

          <div className="provider-profile-section-header">

            <div>
              <h2>Personal Information</h2>

              <p>
                Your basic account information.
              </p>
            </div>

            <span>👤</span>

          </div>


          <div className="provider-profile-form">

            <div className="provider-profile-field">

              <label>Full Name</label>

              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                disabled={!isEditing}
              />

            </div>


            <div className="provider-profile-field">

              <label>Email Address</label>

              <input
                type="email"
                name="email"
                value={profile.email}
                disabled={true}
              />

            </div>


            <div className="provider-profile-field">

              <label>Phone Number</label>

              <input
                type="text"
                name="phone"
                value={profile.phone}
                onChange={handleChange}
                disabled={!isEditing}
              />

            </div>


            <div className="provider-profile-field">

              <label>Location</label>

              <input
                type="text"
                name="location"
                value={profile.location}
                onChange={handleChange}
                disabled={!isEditing}
              />

            </div>

          </div>

        </div>


        {/* ================= PROFESSIONAL INFORMATION ================= */}

        <div className="provider-profile-section">

          <div className="provider-profile-section-header">

            <div>
              <h2>Professional Information</h2>

              <p>
                Information about your services and experience.
              </p>
            </div>

            <span>🛠️</span>

          </div>


          <div className="provider-profile-form">

            <div className="provider-profile-field">

              <label>Profession</label>

              <input
                type="text"
                name="profession"
                value={profile.profession}
                onChange={handleChange}
                disabled={!isEditing}
              />

            </div>


            <div className="provider-profile-field">

              <label>Experience</label>

              <input
                type="text"
                name="experience"
                value={profile.experience}
                onChange={handleChange}
                disabled={!isEditing}
              />

            </div>


            <div className="provider-profile-field provider-profile-full">

              <label>About You</label>

              <textarea
                name="bio"
                value={profile.bio}
                onChange={handleChange}
                disabled={!isEditing}
                rows="4"
              />

            </div>

          </div>

        </div>


        {/* ================= SERVICES ================= */}

        <div className="provider-profile-section">

          <div className="provider-profile-section-header">

            <div>
              <h2>My Services</h2>

              <p>
                Services currently offered by you.
              </p>
            </div>

            <span>🔧</span>

          </div>


          <div className="provider-profile-services">

            <div className="provider-profile-service">
              <span>❄️</span>
              <div>
                <strong>AC Repair</strong>
                <small>₹499 starting</small>
              </div>
            </div>


            <div className="provider-profile-service">
              <span>⚡</span>
              <div>
                <strong>Electrical Repair</strong>
                <small>₹299 starting</small>
              </div>
            </div>


            <div className="provider-profile-service">
              <span>🔧</span>
              <div>
                <strong>Plumbing</strong>
                <small>₹399 starting</small>
              </div>
            </div>


            <div className="provider-profile-service">
              <span>🧹</span>
              <div>
                <strong>Home Maintenance</strong>
                <small>₹599 starting</small>
              </div>
            </div>

          </div>

        </div>


        {/* ================= AVAILABILITY ================= */}

        <div className="provider-profile-section">

          <div className="provider-profile-section-header">

            <div>
              <h2>Availability</h2>

              <p>
                Your current service availability.
              </p>
            </div>

            <span>🕐</span>

          </div>


          <div className="provider-profile-availability">

            <div className="provider-profile-available-status">

              <span></span>

              <div>
                <strong>Available for Bookings</strong>
                <p>Customers can book your services.</p>
              </div>

            </div>


            <div className="provider-profile-time">

              <div>
                <small>Working Days</small>
                <strong>Mon - Sat</strong>
              </div>

              <div>
                <small>Working Hours</small>
                <strong>9:00 AM - 7:00 PM</strong>
              </div>

            </div>

          </div>

        </div>

      </div>


      {/* ================= SAVE BUTTON ================= */}

      {isEditing && (

        <div className="provider-profile-save-area">

          <button
            className="provider-profile-save-btn"
            onClick={handleSave}
          >
            💾 Save Changes
          </button>

        </div>

      )}


      {/* ================= SUCCESS ================= */}

      {showSuccess && (

        <div className="provider-profile-success">

          <div>
            ✓
          </div>

          <section>
            <strong>Profile Updated</strong>

            <p>
              Your profile information has been saved successfully.
            </p>
          </section>

        </div>

      )}

    </div>
  );
}

export default ProviderProfile;

