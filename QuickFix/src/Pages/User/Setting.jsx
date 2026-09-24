
import React, { useEffect, useState } from "react";
import "../../CSS/UserSettings.css";

function Setting() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [bookingNotifications, setBookingNotifications] = useState(true);
  const [messageNotifications, setMessageNotifications] = useState(true);

  // Dark mode state
  const [darkMode, setDarkMode] = useState(false);

  const [showSuccess, setShowSuccess] = useState(false);

  // Enable / disable dark mode
  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  const handleSave = () => {
    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  return (
    <div className="settings-page">

      {/* HEADER */}
      <div className="settings-header">
        <div>
          <span className="settings-label">PREFERENCES</span>

          <h1>Settings</h1>

          <p>
            Manage your QuickFix preferences and notification settings.
          </p>
        </div>

        <div className="settings-header-icon">
          ⚙️
        </div>
      </div>


      {/* SETTINGS CONTAINER */}
      <div className="settings-container">

        {/* NOTIFICATIONS */}
        <div className="settings-section">

          <div className="settings-section-header">

            <div className="settings-section-icon">
              🔔
            </div>

            <div>
              <h2>Notifications</h2>

              <p>
                Choose how you want to receive notifications.
              </p>
            </div>

          </div>


          <div className="settings-list">

            {/* EMAIL */}
            <div className="setting-row">

              <div className="setting-row-icon">
                📧
              </div>

              <div className="setting-row-content">

                <h3>Email Notifications</h3>

                <p>
                  Receive important updates and account information by email.
                </p>

              </div>

              <label className="toggle-switch">

                <input
                  type="checkbox"
                  checked={emailNotifications}
                  onChange={() =>
                    setEmailNotifications(!emailNotifications)
                  }
                />

                <span className="toggle-slider"></span>

              </label>

            </div>


            {/* BOOKING */}
            <div className="setting-row">

              <div className="setting-row-icon">
                📅
              </div>

              <div className="setting-row-content">

                <h3>Booking Notifications</h3>

                <p>
                  Get updates about your bookings and service appointments.
                </p>

              </div>

              <label className="toggle-switch">

                <input
                  type="checkbox"
                  checked={bookingNotifications}
                  onChange={() =>
                    setBookingNotifications(!bookingNotifications)
                  }
                />

                <span className="toggle-slider"></span>

              </label>

            </div>


            {/* MESSAGE */}
            <div className="setting-row">

              <div className="setting-row-icon">
                💬
              </div>

              <div className="setting-row-content">

                <h3>Message Notifications</h3>

                <p>
                  Get notified when a service provider sends you a message.
                </p>

              </div>

              <label className="toggle-switch">

                <input
                  type="checkbox"
                  checked={messageNotifications}
                  onChange={() =>
                    setMessageNotifications(!messageNotifications)
                  }
                />

                <span className="toggle-slider"></span>

              </label>

            </div>

          </div>

        </div>


        {/* APPEARANCE */}
        <div className="settings-section">

          <div className="settings-section-header">

            <div className="settings-section-icon">
              🎨
            </div>

            <div>

              <h2>Appearance</h2>

              <p>
                Customize how QuickFix looks on your device.
              </p>

            </div>

          </div>


          <div className="appearance-card">

            <div className="appearance-icon">
              🌙
            </div>

            <div className="setting-row-content">

              <h3>Dark Mode</h3>

              <p>
                Switch between light and dark appearance.
              </p>

            </div>

            {/* DARK MODE TOGGLE */}
            <label className="toggle-switch">

              <input
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />

              <span className="toggle-slider"></span>

            </label>

          </div>

        </div>


        {/* PRIVACY */}
        <div className="settings-section">

          <div className="settings-section-header">

            <div className="settings-section-icon">
              🔒
            </div>

            <div>

              <h2>Privacy & Security</h2>

              <p>
                Manage your account security and privacy preferences.
              </p>

            </div>

          </div>


          <div className="privacy-list">

            {/* PASSWORD */}
            <div className="privacy-row">

              <div>

                <h3>Password</h3>

                <p>
                  Keep your account secure with a strong password.
                </p>

              </div>

              <button className="settings-action-btn">
                Change Password
              </button>

            </div>


            {/* ACCOUNT PRIVACY */}
            <div className="privacy-row">

              <div>

                <h3>Account Privacy</h3>

                <p>
                  Control how your account information is displayed.
                </p>

              </div>

              <button className="settings-action-btn">
                Manage
              </button>

            </div>

          </div>

        </div>


        {/* SAVE */}
        <div className="settings-save-area">

          <button
            className="settings-save-btn"
            onClick={handleSave}
          >
            💾 Save Settings
          </button>

        </div>

      </div>


      {/* SUCCESS POPUP */}
      {showSuccess && (

        <div className="settings-success-popup">

          <div className="settings-success-icon">
            ✓
          </div>

          <div>

            <h3>Settings Saved</h3>

            <p>
              Your preferences were updated successfully.
            </p>

          </div>

        </div>

      )}

    </div>
  );
}

export default Setting;
