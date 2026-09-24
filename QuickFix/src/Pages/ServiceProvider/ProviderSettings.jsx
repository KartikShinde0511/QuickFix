import React, { useEffect, useState } from "react";
import "../../CSS/ProviderSettings.css";

function ProviderSettings() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  return (
    <div className="provider-settings-page">

      {/* ================= HEADER ================= */}

      <div className="provider-settings-header">

        <div>
          <span className="provider-settings-label">
            PREFERENCES
          </span>

          <h1>Settings</h1>

          <p>
            Manage your QuickFix service provider preferences.
          </p>
        </div>

        <div className="provider-settings-header-icon">
          ⚙️
        </div>

      </div>


      {/* ================= SETTINGS CONTAINER ================= */}

      <div className="provider-settings-container">


        {/* ================= NOTIFICATIONS ================= */}

        <div className="provider-settings-section">

          <div className="provider-settings-section-header">

            <div className="provider-settings-section-icon">
              🔔
            </div>

            <div>
              <h2>Notifications</h2>

              <p>
                Manage notifications related to your services and bookings.
              </p>
            </div>

          </div>


          <div className="provider-settings-list">

            <div className="provider-setting-row">

              <div className="provider-setting-row-icon">
                📋
              </div>

              <div className="provider-setting-row-content">

                <h3>Booking Notifications</h3>

                <p>
                  Receive notifications when customers book your services.
                </p>

              </div>

              <label className="provider-toggle-switch">
                <input type="checkbox" defaultChecked />
                <span className="provider-toggle-slider"></span>
              </label>

            </div>


            <div className="provider-setting-row">

              <div className="provider-setting-row-icon">
                💬
              </div>

              <div className="provider-setting-row-content">

                <h3>Message Notifications</h3>

                <p>
                  Get notified when customers send you messages.
                </p>

              </div>

              <label className="provider-toggle-switch">
                <input type="checkbox" defaultChecked />
                <span className="provider-toggle-slider"></span>
              </label>

            </div>


            <div className="provider-setting-row">

              <div className="provider-setting-row-icon">
                💰
              </div>

              <div className="provider-setting-row-content">

                <h3>Earnings Notifications</h3>

                <p>
                  Receive updates about payments and your earnings.
                </p>

              </div>

              <label className="provider-toggle-switch">
                <input type="checkbox" defaultChecked />
                <span className="provider-toggle-slider"></span>
              </label>

            </div>

          </div>

        </div>


        {/* ================= APPEARANCE ================= */}

        <div className="provider-settings-section">

          <div className="provider-settings-section-header">

            <div className="provider-settings-section-icon">
              🎨
            </div>

            <div>
              <h2>Appearance</h2>

              <p>
                Customize how your QuickFix dashboard looks.
              </p>
            </div>

          </div>


          <div className="provider-appearance-card">

            <div className="provider-appearance-icon">
              🌙
            </div>

            <div className="provider-setting-row-content">

              <h3>Dark Mode</h3>

              <p>
                Switch between light and dark appearance.
              </p>

            </div>

            <label className="provider-toggle-switch">
              <input
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
              <span className="provider-toggle-slider"></span>
            </label>

          </div>

        </div>


        {/* ================= ACCOUNT ================= */}

        <div className="provider-settings-section">

          <div className="provider-settings-section-header">

            <div className="provider-settings-section-icon">
              🔒
            </div>

            <div>
              <h2>Account & Security</h2>

              <p>
                Manage your provider account security.
              </p>
            </div>

          </div>


          <div className="provider-settings-account-list">

            <div className="provider-settings-account-row">

              <div>

                <h3>Password</h3>

                <p>
                  Keep your account secure with a strong password.
                </p>

              </div>

              <button className="provider-settings-action-btn">
                Change Password
              </button>

            </div>


            <div className="provider-settings-account-row">

              <div>

                <h3>Email Address</h3>

                <p>
                  Manage the email address connected to your account.
                </p>

              </div>

              <button className="provider-settings-action-btn">
                Manage
              </button>

            </div>

          </div>

        </div>


        {/* ================= PROVIDER PREFERENCES ================= */}

        <div className="provider-settings-section">

          <div className="provider-settings-section-header">

            <div className="provider-settings-section-icon">
              🛠️
            </div>

            <div>
              <h2>Provider Preferences</h2>

              <p>
                Manage your service provider preferences.
              </p>
            </div>

          </div>


          <div className="provider-settings-preferences">

            <div className="provider-preference-item">

              <span>📅</span>

              <div>
                <h3>Booking Availability</h3>
                <p>Allow customers to book your services.</p>
              </div>

            </div>


            <div className="provider-preference-item">

              <span>📍</span>

              <div>
                <h3>Service Location</h3>
                <p>Manage the area where you provide services.</p>
              </div>

            </div>


            <div className="provider-preference-item">

              <span>🔔</span>

              <div>
                <h3>Customer Updates</h3>
                <p>Receive important customer and service updates.</p>
              </div>

            </div>

          </div>

        </div>


        {/* ================= SAVE ================= */}

        <div className="provider-settings-save-area">

          <button className="provider-settings-save-btn">
            💾 Save Settings
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProviderSettings;
