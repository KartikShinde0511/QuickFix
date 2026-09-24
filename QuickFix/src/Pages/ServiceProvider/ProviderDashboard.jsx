import React from "react";
import { useNavigate } from "react-router-dom";
import "../../CSS/ProviderDashboard.css";
function ProviderDashboard() {
  const navigate = useNavigate();

  return (
    <div className="provider-dashboard">

      {/* ================= HEADER ================= */}

      <div className="provider-dashboard-header">

        <div>
          <span className="provider-dashboard-label">
            SERVICE PROVIDER
          </span>

          <h1>Welcome back, Kartik! 👋</h1>

          <p>
            Manage your services, bookings and earnings from one place.
          </p>
        </div>

        <button
          className="provider-add-service-btn"
          onClick={() => navigate("/provider/services")}
        >
          + Add Service
        </button>

      </div>


      {/* ================= STATISTICS ================= */}

      <div className="provider-stats-grid">

        <div className="provider-stat-card">

          <div className="provider-stat-icon">
            📋
          </div>

          <div>
            <p>Total Bookings</p>
            <h2>24</h2>
            <span className="provider-stat-growth">
              ↑ 12% this month
            </span>
          </div>

        </div>


        <div className="provider-stat-card">

          <div className="provider-stat-icon">
            ⏳
          </div>

          <div>
            <p>Pending Requests</p>
            <h2>5</h2>
            <span className="provider-stat-warning">
              Needs attention
            </span>
          </div>

        </div>


        <div className="provider-stat-card">

          <div className="provider-stat-icon">
            ✅
          </div>

          <div>
            <p>Completed Jobs</p>
            <h2>18</h2>
            <span className="provider-stat-growth">
              ↑ 8% this month
            </span>
          </div>

        </div>


        <div className="provider-stat-card">

          <div className="provider-stat-icon">
            💰
          </div>

          <div>
            <p>Total Earnings</p>
            <h2>₹18,450</h2>
            <span className="provider-stat-growth">
              ↑ 15% this month
            </span>
          </div>

        </div>

      </div>


      {/* ================= MAIN GRID ================= */}

      <div className="provider-dashboard-grid">


        {/* ================= RECENT BOOKINGS ================= */}

        <div className="provider-dashboard-panel">

          <div className="provider-panel-header">

            <div>
              <h2>Recent Bookings</h2>

              <p>
                Your latest service requests
              </p>
            </div>

            <button
              onClick={() =>
                navigate("/provider/bookings")
              }
            >
              View All →
            </button>

          </div>


          <div className="provider-booking-list">

            {/* BOOKING 1 */}

            <div className="provider-booking-item">

              <div className="provider-booking-avatar">
                👨
              </div>

              <div className="provider-booking-info">

                <h3>Rahul Sharma</h3>

                <p>AC Repair</p>

                <span>
                  📅 02 Sep 2026 • 10:30 AM
                </span>

              </div>

              <div className="provider-booking-right">

                <strong>
                  ₹850
                </strong>

                <span className="provider-status pending">
                  Pending
                </span>

              </div>

            </div>


            {/* BOOKING 2 */}

            <div className="provider-booking-item">

              <div className="provider-booking-avatar">
                👩
              </div>

              <div className="provider-booking-info">

                <h3>Priya Patil</h3>

                <p>Washing Machine Repair</p>

                <span>
                  📅 03 Sep 2026 • 02:00 PM
                </span>

              </div>

              <div className="provider-booking-right">

                <strong>
                  ₹1,200
                </strong>

                <span className="provider-status confirmed">
                  Confirmed
                </span>

              </div>

            </div>


            {/* BOOKING 3 */}

            <div className="provider-booking-item">

              <div className="provider-booking-avatar">
                👨
              </div>

              <div className="provider-booking-info">

                <h3>Akash Mehta</h3>

                <p>Electrical Repair</p>

                <span>
                  📅 04 Sep 2026 • 11:00 AM
                </span>

              </div>

              <div className="provider-booking-right">

                <strong>
                  ₹650
                </strong>

                <span className="provider-status completed">
                  Completed
                </span>

              </div>

            </div>

          </div>

        </div>


        {/* ================= EARNINGS ================= */}

        <div className="provider-dashboard-panel">

          <div className="provider-panel-header">

            <div>
              <h2>Earnings</h2>

              <p>
                Your earnings this month
              </p>
            </div>

            <button
              onClick={() =>
                navigate("/provider/earnings")
              }
            >
              Details →
            </button>

          </div>


          <div className="provider-earnings-total">

            <span>Total Earnings</span>

            <h2>₹18,450</h2>

            <p>
              <strong>↑ 15%</strong> compared to last month
            </p>

          </div>


          <div className="provider-earnings-chart">

            <div className="chart-bar" style={{ height: "45%" }}>
              <span>W1</span>
            </div>

            <div className="chart-bar" style={{ height: "65%" }}>
              <span>W2</span>
            </div>

            <div className="chart-bar" style={{ height: "55%" }}>
              <span>W3</span>
            </div>

            <div className="chart-bar" style={{ height: "85%" }}>
              <span>W4</span>
            </div>

          </div>

        </div>

      </div>


      {/* ================= QUICK ACTIONS ================= */}

      <div className="provider-dashboard-panel provider-quick-panel">

        <div className="provider-panel-header">

          <div>
            <h2>Quick Actions</h2>

            <p>
              Manage your service provider account
            </p>
          </div>

        </div>


        <div className="provider-quick-actions">

          <button
            onClick={() =>
              navigate("/provider/bookings")
            }
          >
            <span>📋</span>

            <div>
              <strong>Manage Bookings</strong>
              <small>
                View and manage customer requests
              </small>
            </div>
          </button>


          <button
            onClick={() =>
              navigate("/provider/earnings")
            }
          >
            <span>💰</span>

            <div>
              <strong>View Earnings</strong>
              <small>
                Check your earnings and payments
              </small>
            </div>
          </button>


          <button
            onClick={() =>
              navigate("/provider/messages")
            }
          >
            <span>💬</span>

            <div>
              <strong>Messages</strong>
              <small>
                Chat with your customers
              </small>
            </div>
          </button>


          <button
            onClick={() =>
              navigate("/provider/profile")
            }
          >
            <span>👤</span>

            <div>
              <strong>My Profile</strong>
              <small>
                Update your provider information
              </small>
            </div>
          </button>

        </div>

      </div>


      {/* ================= PERFORMANCE ================= */}

      <div className="provider-performance">

        <div className="provider-performance-item">

          <span>⭐</span>

          <div>
            <h3>4.8 / 5</h3>
            <p>Average Rating</p>
          </div>

        </div>


        <div className="provider-performance-item">

          <span>⚡</span>

          <div>
            <h3>92%</h3>
            <p>Response Rate</p>
          </div>

        </div>


        <div className="provider-performance-item">

          <span>🎯</span>

          <div>
            <h3>96%</h3>
            <p>Completion Rate</p>
          </div>

        </div>


        <div className="provider-performance-item">

          <span>🏆</span>

          <div>
            <h3>Top Rated</h3>
            <p>Provider Status</p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default ProviderDashboard;