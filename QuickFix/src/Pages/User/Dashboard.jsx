import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import services from "../../Data/services";
import "../../CSS/Dashboard.css";
import "../../CSS/UserLayout.css";
function Dashboard() {
  const navigate = useNavigate();

  const [bookings, setBookings] = useState([]);

  // =========================
  // LOAD BOOKINGS
  // =========================

  useEffect(() => {
    const loadBookings = () => {
      const savedBookings =
        JSON.parse(localStorage.getItem("bookings")) || [];

      setBookings(savedBookings);
    };

    loadBookings();

    window.addEventListener("storage", loadBookings);

    return () => {
      window.removeEventListener("storage", loadBookings);
    };
  }, []);

  // =========================
  // BOOKING STATISTICS
  // =========================

  const totalBookings = bookings.length;

  const pendingBookings = bookings.filter(
    (booking) => booking.status === "Pending"
  ).length;

  const confirmedBookings = bookings.filter(
    (booking) => booking.status === "Confirmed"
  ).length;

  const completedBookings = bookings.filter(
    (booking) => booking.status === "Completed"
  ).length;

  // =========================
  // UPCOMING BOOKING
  // =========================

  const upcomingBooking =
    bookings.length > 0
      ? bookings[bookings.length - 1]
      : null;

  return (
    <div className="dashboard">

      {/* =========================
          WELCOME SECTION
      ========================= */}

      <div className="dashboard-hero">

        <div>

          <p className="dashboard-greeting">
            Welcome back
          </p>

          <h1>Kartik!</h1>

          <p className="dashboard-subtitle">
            Find trusted professionals for all your service needs.
          </p>

        </div>

        <button
          className="find-service-btn"
          onClick={() => navigate("/search-services")}
        >
          + Find a Service
        </button>

      </div>


      {/* =========================
          STATISTICS
      ========================= */}

      <div className="dashboard-stats">

        {/* TOTAL BOOKINGS */}

        <div className="dashboard-stat-card">

          <div className="stat-icon">
            📋
          </div>

          <div>

            <p>Total Bookings</p>

            <h2>
              {totalBookings}
            </h2>

          </div>

        </div>


        {/* PENDING */}

        <div className="dashboard-stat-card">

          <div className="stat-icon">
            ⏳
          </div>

          <div>

            <p>Pending</p>

            <h2>
              {pendingBookings}
            </h2>

          </div>

        </div>


        {/* CONFIRMED */}

        <div className="dashboard-stat-card">

          <div className="stat-icon">
            ✅
          </div>

          <div>

            <p>Confirmed</p>

            <h2>
              {confirmedBookings}
            </h2>

          </div>

        </div>


        {/* COMPLETED */}

        <div className="dashboard-stat-card">

          <div className="stat-icon">
            ⭐
          </div>

          <div>

            <p>Completed</p>

            <h2>
              {completedBookings}
            </h2>

          </div>

        </div>

      </div>


      {/* =========================
          MAIN DASHBOARD GRID
      ========================= */}

      <div className="dashboard-main-grid">


        {/* =========================
            UPCOMING BOOKING
        ========================= */}

        <div className="dashboard-panel upcoming-panel">

          <div className="panel-header">

            <h2>
              Upcoming Booking
            </h2>

            <button
              onClick={() => navigate("/my-bookings")}
            >
              View All
            </button>

          </div>


          {upcomingBooking ? (

            <div className="upcoming-booking">

              {/* BOOKING IMAGE */}

              {upcomingBooking.image && (

                <img
                  src={upcomingBooking.image}
                  alt={upcomingBooking.service}
                />

              )}


              {/* BOOKING INFORMATION */}

              <div className="upcoming-info">

                <span className="confirmed-badge">

                  {upcomingBooking.status}

                </span>


                <h3>
                  {upcomingBooking.service}
                </h3>


                <p>
                  👨‍🔧 {upcomingBooking.provider}
                </p>


                <div className="booking-details">

                  <span>
                    📅 {upcomingBooking.date}
                  </span>

                  <span>
                    🕐 {upcomingBooking.time}
                  </span>

                </div>


                <h4>
                  ₹{upcomingBooking.price}
                </h4>

              </div>

            </div>

          ) : (

            <div className="empty-booking">

              <div>
                📅
              </div>

              <h3>
                No upcoming bookings
              </h3>

              <p>
                Book a service to see it here.
              </p>

              <button
                onClick={() => navigate("/search-services")}
              >
                Find a Service
              </button>

            </div>

          )}

        </div>


        {/* =========================
            QUICK ACTIONS
        ========================= */}

        <div className="dashboard-panel">

          <div className="panel-header">

            <h2>
              Quick Actions
            </h2>

          </div>


          <div className="quick-actions">

            {/* FIND SERVICE */}

            <button
              onClick={() => navigate("/search-services")}
            >

              <span>
                🔍
              </span>

              <div>

                <strong>
                  Find Service
                </strong>

                <small>
                  Search for a professional
                </small>

              </div>

            </button>


            {/* MY BOOKINGS */}

            <button
              onClick={() => navigate("/my-bookings")}
            >

              <span>
                📋
              </span>

              <div>

                <strong>
                  My Bookings
                </strong>

                <small>
                  View your bookings
                </small>

              </div>

            </button>


            {/* MESSAGES */}

            <button
              onClick={() => navigate("/messages")}
            >

              <span>
                💬
              </span>

              <div>

                <strong>
                  Messages
                </strong>

                <small>
                  Chat with providers
                </small>

              </div>

            </button>


            {/* REVIEWS */}

            <button
              onClick={() => navigate("/reviews")}
            >

              <span>
                ⭐
              </span>

              <div>

                <strong>
                  Reviews
                </strong>

                <small>
                  Share your experience
                </small>

              </div>

            </button>

          </div>

        </div>

      </div>


      {/* =========================
          POPULAR SERVICES
      ========================= */}

      <div className="dashboard-panel services-panel">

        <div className="panel-header">

          <div>

            <h2>
              Popular Services
            </h2>

            <p>
              Services you can book instantly
            </p>

          </div>

          <button
            onClick={() => navigate("/search-services")}
          >
            View All →
          </button>

        </div>


        <div className="dashboard-services">

          {services.slice(0, 4).map((service) => (

            <div
              className="dashboard-service-card"
              key={service.id}
            >

              <img
                src={service.image}
                alt={service.name}
              />


              <div className="service-card-content">

                <h3>
                  {service.name}
                </h3>

                <p>
                  {service.provider}
                </p>


                <div className="service-bottom">

                  <span>
                    ⭐ {service.rating}
                  </span>

                  <strong>
                    ₹{service.price}
                  </strong>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>


      {/* =========================
          TRUST SECTION
      ========================= */}

      <div className="dashboard-trust">

        <div className="trust-item">

          <span>
            🛡️
          </span>

          <div>

            <h3>
              Trusted Professionals
            </h3>

            <p>
              Verified service providers
            </p>

          </div>

        </div>


        <div className="trust-item">

          <span>
            ⚡
          </span>

          <div>

            <h3>
              Quick Service
            </h3>

            <p>
              Book services easily
            </p>

          </div>

        </div>


        <div className="trust-item">

          <span>
            💳
          </span>

          <div>

            <h3>
              Transparent Pricing
            </h3>

            <p>
              No hidden charges
            </p>

          </div>

        </div>


        <div className="trust-item">

          <span>
            ⭐
          </span>

          <div>

            <h3>
              Quality Service
            </h3>

            <p>
              Rated by real customers
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Dashboard;