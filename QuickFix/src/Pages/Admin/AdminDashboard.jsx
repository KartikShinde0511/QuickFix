import React from "react";
import { useNavigate } from "react-router-dom";
import "../../CSS/AdminDashboard.css";

function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <div className="admin-dashboard">

      {/* =====================================================
          WELCOME HEADER
      ===================================================== */}

      <div className="admin-dashboard-header">

        <div>
          <p className="admin-dashboard-label">
            ADMIN DASHBOARD
          </p>

          <h1>Welcome back, Kartik! 👋</h1>

          <p>
            Here's what's happening across your QuickFix platform today.
          </p>
        </div>

        <div className="admin-dashboard-date">
          <span>📅</span>

          <div>
            <small>TODAY</small>
            <strong>05 September 2026</strong>
          </div>
        </div>

      </div>


      {/* =====================================================
          STATISTICS
      ===================================================== */}

      <div className="admin-dashboard-stats">


        {/* USERS */}

        <div className="admin-dashboard-stat-card">

          <div className="admin-dashboard-stat-top">

            <div className="admin-dashboard-stat-icon users">
              👥
            </div>

            <span className="admin-dashboard-stat-growth">
              +12%
            </span>

          </div>

          <p>Total Users</p>

          <h2>128</h2>

          <span className="admin-dashboard-stat-note">
            Compared with last month
          </span>

        </div>


        {/* PROVIDERS */}

        <div className="admin-dashboard-stat-card">

          <div className="admin-dashboard-stat-top">

            <div className="admin-dashboard-stat-icon providers">
              🧑‍🔧
            </div>

            <span className="admin-dashboard-stat-growth">
              +8%
            </span>

          </div>

          <p>Service Providers</p>

          <h2>42</h2>

          <span className="admin-dashboard-stat-note">
            5 new providers this month
          </span>

        </div>


        {/* BOOKINGS */}

        <div className="admin-dashboard-stat-card">

          <div className="admin-dashboard-stat-top">

            <div className="admin-dashboard-stat-icon bookings">
              📋
            </div>

            <span className="admin-dashboard-stat-growth">
              +18%
            </span>

          </div>

          <p>Total Bookings</p>

          <h2>356</h2>

          <span className="admin-dashboard-stat-note">
            24 bookings this week
          </span>

        </div>


        {/* REVENUE */}

        <div className="admin-dashboard-stat-card">

          <div className="admin-dashboard-stat-top">

            <div className="admin-dashboard-stat-icon revenue">
              💰
            </div>

            <span className="admin-dashboard-stat-growth">
              +15%
            </span>

          </div>

          <p>Total Revenue</p>

          <h2>₹84,500</h2>

          <span className="admin-dashboard-stat-note">
            This month's earnings
          </span>

        </div>

      </div>


      {/* =====================================================
          MAIN GRID
      ===================================================== */}

      <div className="admin-dashboard-main-grid">


        {/* =====================================================
            BOOKING OVERVIEW
        ===================================================== */}

        <div className="admin-dashboard-card">

          <div className="admin-dashboard-card-header">

            <div>
              <h2>Booking Overview</h2>

              <p>
                Booking activity for this week
              </p>
            </div>

            <button
              onClick={() =>
                navigate("/admin/bookings")
              }
            >
              View Bookings →
            </button>

          </div>


          {/* DEMO BAR CHART */}

          <div className="admin-dashboard-chart">

            <div className="admin-dashboard-bars">

              <div className="admin-dashboard-bar-column">
                <span style={{ height: "42%" }}></span>
                <small>Mon</small>
              </div>

              <div className="admin-dashboard-bar-column">
                <span style={{ height: "65%" }}></span>
                <small>Tue</small>
              </div>

              <div className="admin-dashboard-bar-column">
                <span style={{ height: "52%" }}></span>
                <small>Wed</small>
              </div>

              <div className="admin-dashboard-bar-column">
                <span style={{ height: "78%" }}></span>
                <small>Thu</small>
              </div>

              <div className="admin-dashboard-bar-column">
                <span style={{ height: "60%" }}></span>
                <small>Fri</small>
              </div>

              <div className="admin-dashboard-bar-column">
                <span style={{ height: "88%" }}></span>
                <small>Sat</small>
              </div>

              <div className="admin-dashboard-bar-column">
                <span style={{ height: "70%" }}></span>
                <small>Sun</small>
              </div>

            </div>

          </div>


          {/* BOOKING SUMMARY */}

          <div className="admin-dashboard-booking-summary">

            <div>
              <span className="summary-dot pending"></span>
              <p>Pending</p>
              <strong>18</strong>
            </div>

            <div>
              <span className="summary-dot confirmed"></span>
              <p>Confirmed</p>
              <strong>42</strong>
            </div>

            <div>
              <span className="summary-dot completed"></span>
              <p>Completed</p>
              <strong>296</strong>
            </div>

          </div>

        </div>


        {/* =====================================================
            QUICK ACTIONS
        ===================================================== */}

        <div className="admin-dashboard-card">

          <div className="admin-dashboard-card-header">

            <div>
              <h2>Quick Actions</h2>

              <p>
                Manage your QuickFix platform
              </p>
            </div>

          </div>


          <div className="admin-dashboard-actions">

            <button
              onClick={() =>
                navigate("/admin/users")
              }
            >
              <span>👥</span>

              <div>
                <strong>Manage Users</strong>
                <small>View and manage customers</small>
              </div>

              <b>→</b>
            </button>


            <button
              onClick={() =>
                navigate("/admin/providers")
              }
            >
              <span>🧑‍🔧</span>

              <div>
                <strong>Manage Providers</strong>
                <small>Approve and manage providers</small>
              </div>

              <b>→</b>
            </button>


            <button
              onClick={() =>
                navigate("/admin/services")
              }
            >
              <span>🛠️</span>

              <div>
                <strong>Manage Services</strong>
                <small>Control available services</small>
              </div>

              <b>→</b>
            </button>


            <button
              onClick={() =>
                navigate("/admin/messages")
              }
            >
              <span>💬</span>

              <div>
                <strong>Messages</strong>
                <small>Check customer conversations</small>
              </div>

              <b>→</b>
            </button>

          </div>

        </div>

      </div>


      {/* =====================================================
          LOWER GRID
      ===================================================== */}

      <div className="admin-dashboard-lower-grid">


        {/* =====================================================
            RECENT BOOKINGS
        ===================================================== */}

        <div className="admin-dashboard-card">

          <div className="admin-dashboard-card-header">

            <div>
              <h2>Recent Bookings</h2>

              <p>
                Latest activity on QuickFix
              </p>
            </div>

            <button
              onClick={() =>
                navigate("/admin/bookings")
              }
            >
              View All
            </button>

          </div>


          <div className="admin-dashboard-bookings">


            {/* BOOKING 1 */}

            <div className="admin-dashboard-booking">

              <div className="admin-dashboard-booking-avatar">
                👨
              </div>

              <div className="admin-dashboard-booking-info">

                <strong>Rahul Sharma</strong>

                <p>
                  AC Repair • 05 Sep
                </p>

              </div>

              <span className="admin-dashboard-booking-status confirmed">
                Confirmed
              </span>

              <strong className="admin-dashboard-booking-price">
                ₹1,200
              </strong>

            </div>


            {/* BOOKING 2 */}

            <div className="admin-dashboard-booking">

              <div className="admin-dashboard-booking-avatar">
                👩
              </div>

              <div className="admin-dashboard-booking-info">

                <strong>Priya Patil</strong>

                <p>
                  Home Cleaning • 04 Sep
                </p>

              </div>

              <span className="admin-dashboard-booking-status pending">
                Pending
              </span>

              <strong className="admin-dashboard-booking-price">
                ₹800
              </strong>

            </div>


            {/* BOOKING 3 */}

            <div className="admin-dashboard-booking">

              <div className="admin-dashboard-booking-avatar">
                👨
              </div>

              <div className="admin-dashboard-booking-info">

                <strong>Amit Verma</strong>

                <p>
                  Plumbing • 03 Sep
                </p>

              </div>

              <span className="admin-dashboard-booking-status completed">
                Completed
              </span>

              <strong className="admin-dashboard-booking-price">
                ₹650
              </strong>

            </div>


            {/* BOOKING 4 */}

            <div className="admin-dashboard-booking">

              <div className="admin-dashboard-booking-avatar">
                👩
              </div>

              <div className="admin-dashboard-booking-info">

                <strong>Neha Joshi</strong>

                <p>
                  Electrician • 03 Sep
                </p>

              </div>

              <span className="admin-dashboard-booking-status completed">
                Completed
              </span>

              <strong className="admin-dashboard-booking-price">
                ₹950
              </strong>

            </div>

          </div>

        </div>


        {/* =====================================================
            PLATFORM ACTIVITY
        ===================================================== */}

        <div className="admin-dashboard-card">

          <div className="admin-dashboard-card-header">

            <div>
              <h2>Platform Activity</h2>

              <p>
                Recent administrator activity
              </p>
            </div>

          </div>


          <div className="admin-dashboard-activity">


            <div className="admin-dashboard-activity-item">

              <div className="admin-dashboard-activity-icon blue">
                👤
              </div>

              <div>
                <strong>New user registered</strong>
                <p>Rahul Sharma joined QuickFix</p>
                <small>10 minutes ago</small>
              </div>

            </div>


            <div className="admin-dashboard-activity-item">

              <div className="admin-dashboard-activity-icon green">
                🧑‍🔧
              </div>

              <div>
                <strong>Provider approved</strong>
                <p>PowerFix Services was approved</p>
                <small>1 hour ago</small>
              </div>

            </div>


            <div className="admin-dashboard-activity-item">

              <div className="admin-dashboard-activity-icon orange">
                📋
              </div>

              <div>
                <strong>New booking received</strong>
                <p>AC Repair booking created</p>
                <small>2 hours ago</small>
              </div>

            </div>


            <div className="admin-dashboard-activity-item">

              <div className="admin-dashboard-activity-icon purple">
                ⭐
              </div>

              <div>
                <strong>New review received</strong>
                <p>A customer rated a service 5 stars</p>
                <small>3 hours ago</small>
              </div>

            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          PLATFORM HEALTH
      ===================================================== */}

      <div className="admin-dashboard-health">

        <div className="admin-dashboard-health-icon">
          🛡️
        </div>

        <div className="admin-dashboard-health-content">

          <h3>QuickFix Platform Health</h3>

          <p>
            All major platform services are operating normally.
          </p>

        </div>


        <div className="admin-dashboard-health-items">

          <div>
            <span></span>
            <strong>Users</strong>
            <small>Active</small>
          </div>

          <div>
            <span></span>
            <strong>Bookings</strong>
            <small>Running</small>
          </div>

          <div>
            <span></span>
            <strong>Payments</strong>
            <small>Secure</small>
          </div>

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;