import React, { useEffect, useState } from "react";
import "../../CSS/AdminSettings.css";

function AdminSettings() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <div className="admin-settings">

      {/* ================= HEADER ================= */}

      <div className="admin-settings-header">

        <div>
          <p className="admin-settings-label">
            ADMIN PANEL
          </p>

          <h1>Settings</h1>

          <p>
            Manage your QuickFix administrator preferences.
          </p>
        </div>

      </div>


      {/* ================= SETTINGS GRID ================= */}

      <div className="admin-settings-grid">


        {/* ================= ACCOUNT SETTINGS ================= */}

        <div className="admin-settings-card">

          <div className="admin-settings-card-header">

            <div>
              <h2>Account Settings</h2>

              <p>
                Basic administrator account preferences
              </p>
            </div>

            <span className="admin-settings-icon">
              👤
            </span>

          </div>


          <div className="admin-settings-list">

            <div className="admin-settings-toggle-item">

              <div className="admin-settings-item-icon">
                ðŸŒ™
              </div>

              <div>
                <strong>Dark Mode</strong>
                <p>Switch between light and dark appearance</p>
              </div>

              <label className={`admin-settings-toggle ${darkMode ? "active" : ""}`}>
                <input
                  type="checkbox"
                  checked={darkMode}
                  onChange={() => setDarkMode(!darkMode)}
                  aria-label="Toggle dark mode"
                />
                <span></span>
              </label>

            </div>

            <div className="admin-settings-item">

              <div className="admin-settings-item-icon">
                👤
              </div>

              <div>
                <strong>Admin Name</strong>
                <p>Kartik Shinde</p>
              </div>

              <span className="admin-settings-arrow">
                →
              </span>

            </div>


            <div className="admin-settings-item">

              <div className="admin-settings-item-icon">
                ✉️
              </div>

              <div>
                <strong>Email Address</strong>
                <p>admin@quickfix.com</p>
              </div>

              <span className="admin-settings-arrow">
                →
              </span>

            </div>


            <div className="admin-settings-item">

              <div className="admin-settings-item-icon">
                📱
              </div>

              <div>
                <strong>Phone Number</strong>
                <p>9876543210</p>
              </div>

              <span className="admin-settings-arrow">
                →
              </span>

            </div>

          </div>

        </div>


        {/* ================= NOTIFICATIONS ================= */}

        <div className="admin-settings-card">

          <div className="admin-settings-card-header">

            <div>
              <h2>Notifications</h2>

              <p>
                Control your administrator notifications
              </p>
            </div>

            <span className="admin-settings-icon">
              🔔
            </span>

          </div>


          <div className="admin-settings-list">

            <div className="admin-settings-toggle-item">

              <div className="admin-settings-item-icon">
                📩
              </div>

              <div>
                <strong>Email Notifications</strong>
                <p>
                  Receive important updates by email
                </p>
              </div>

              <div className="admin-settings-toggle active">
                <span></span>
              </div>

            </div>


            <div className="admin-settings-toggle-item">

              <div className="admin-settings-item-icon">
                🔔
              </div>

              <div>
                <strong>Booking Alerts</strong>
                <p>
                  Get notified about new bookings
                </p>
              </div>

              <div className="admin-settings-toggle active">
                <span></span>
              </div>

            </div>


            <div className="admin-settings-toggle-item">

              <div className="admin-settings-item-icon">
                ⚠️
              </div>

              <div>
                <strong>System Alerts</strong>
                <p>
                  Receive important system alerts
                </p>
              </div>

              <div className="admin-settings-toggle active">
                <span></span>
              </div>

            </div>

          </div>

        </div>


        {/* ================= PLATFORM SETTINGS ================= */}

        <div className="admin-settings-card">

          <div className="admin-settings-card-header">

            <div>
              <h2>Platform Settings</h2>

              <p>
                General QuickFix platform preferences
              </p>
            </div>

            <span className="admin-settings-icon">
              ⚙️
            </span>

          </div>


          <div className="admin-settings-list">

            <div className="admin-settings-item">

              <div className="admin-settings-item-icon">
                🌐
              </div>

              <div>
                <strong>Language</strong>
                <p>English</p>
              </div>

              <span className="admin-settings-arrow">
                →
              </span>

            </div>


            <div className="admin-settings-item">

              <div className="admin-settings-item-icon">
                💰
              </div>

              <div>
                <strong>Currency</strong>
                <p>Indian Rupee (₹)</p>
              </div>

              <span className="admin-settings-arrow">
                →
              </span>

            </div>


            <div className="admin-settings-item">

              <div className="admin-settings-item-icon">
                🕐
              </div>

              <div>
                <strong>Time Zone</strong>
                <p>India Standard Time (IST)</p>
              </div>

              <span className="admin-settings-arrow">
                →
              </span>

            </div>

          </div>

        </div>


        {/* ================= SECURITY ================= */}

        <div className="admin-settings-card">

          <div className="admin-settings-card-header">

            <div>
              <h2>Security</h2>

              <p>
                Administrator account security
              </p>
            </div>

            <span className="admin-settings-icon">
              🔐
            </span>

          </div>


          <div className="admin-settings-list">

            <div className="admin-settings-item">

              <div className="admin-settings-item-icon">
                🔑
              </div>

              <div>
                <strong>Password</strong>
                <p>Last changed 30 days ago</p>
              </div>

              <span className="admin-settings-security-badge">
                Protected
              </span>

            </div>


            <div className="admin-settings-item">

              <div className="admin-settings-item-icon">
                🛡️
              </div>

              <div>
                <strong>Two-Factor Authentication</strong>
                <p>Additional account protection</p>
              </div>

              <span className="admin-settings-security-badge">
                Enabled
              </span>

            </div>

          </div>

        </div>

      </div>


      {/* ================= SYSTEM INFORMATION ================= */}

      <div className="admin-settings-system">

        <div className="admin-settings-system-icon">
          ⚡
        </div>

        <div>

          <h3>QuickFix System</h3>

          <p>
            Your administrator settings are currently
            configured for the QuickFix platform.
          </p>

        </div>

        <span>
          v1.0.0
        </span>

      </div>

    </div>
  );
}

export default AdminSettings;
