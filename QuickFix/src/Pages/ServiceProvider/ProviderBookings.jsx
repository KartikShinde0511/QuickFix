import "../../CSS/ProviderBookings.css";
import React, { useState } from "react";

function ProviderBookings() {
  const [filter, setFilter] = useState("All");

  // =========================
  // DEMO BOOKING DATA
  // =========================

  const [bookings, setBookings] = useState([
    {
      id: 1,
      service: "AC Repair",
      customer: "Rahul Patil",
      date: "05 September 2026",
      time: "10:30 AM",
      price: 800,
      status: "Pending",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=600&q=80",
    },

    {
      id: 2,
      service: "Home Cleaning",
      customer: "Priya Sharma",
      date: "06 September 2026",
      time: "02:00 PM",
      price: 1200,
      status: "Confirmed",
      image:
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
    },

    {
      id: 3,
      service: "Plumbing Service",
      customer: "Amit Deshmukh",
      date: "02 September 2026",
      time: "11:00 AM",
      price: 650,
      status: "Completed",
      image:
        "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=600&q=80",
    },
  ]);

  // =========================
  // UPDATE STATUS
  // =========================

  const updateStatus = (id, newStatus) => {
    const confirmMessage =
      newStatus === "Confirmed"
        ? "Are you sure you want to confirm this booking?"
        : "Are you sure you want to mark this service as completed?";

    const isConfirmed = window.confirm(confirmMessage);

    if (!isConfirmed) {
      return;
    }

    setBookings((previousBookings) =>
      previousBookings.map((booking) =>
        booking.id === id
          ? {
              ...booking,
              status: newStatus,
            }
          : booking
      )
    );

    alert(
      newStatus === "Confirmed"
        ? "Booking confirmed successfully! ✅"
        : "Service marked as completed successfully! ✅"
    );
  };

  // =========================
  // BOOKING COUNTS
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
  // FILTER BOOKINGS
  // =========================

  const filteredBookings =
    filter === "All"
      ? bookings
      : bookings.filter(
          (booking) => booking.status === filter
        );

  return (
    <div className="provider-bookings-page">

      {/* =================================================
          HEADER
      ================================================= */}

      <div className="provider-bookings-header">

        <div>
          <span className="provider-bookings-label">
            MANAGEMENT
          </span>

          <h1>Bookings</h1>

          <p>
            Manage your customer bookings and appointments.
          </p>
        </div>

        <div className="provider-bookings-header-icon">
          📋
        </div>

      </div>


      {/* =================================================
          STATISTICS
      ================================================= */}

      <div className="provider-booking-stats">

        {/* TOTAL */}

        <div className="provider-booking-stat-card">

          <div className="provider-booking-stat-icon">
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

        <div className="provider-booking-stat-card">

          <div className="provider-booking-stat-icon">
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

        <div className="provider-booking-stat-card">

          <div className="provider-booking-stat-icon">
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

        <div className="provider-booking-stat-card">

          <div className="provider-booking-stat-icon">
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


      {/* =================================================
          BOOKINGS CONTAINER
      ================================================= */}

      <div className="provider-bookings-container">

        {/* SECTION HEADER */}

        <div className="provider-bookings-section-header">

          <div>

            <h2>
              Customer Bookings
            </h2>

            <p>
              Review and manage your service appointments.
            </p>

          </div>


          {/* FILTERS */}

          <div className="provider-booking-filters">

            {[
              "All",
              "Pending",
              "Confirmed",
              "Completed",
            ].map((status) => (

              <button
                key={status}
                className={
                  filter === status
                    ? "provider-filter-btn active"
                    : "provider-filter-btn"
                }
                onClick={() => setFilter(status)}
              >
                {status}
              </button>

            ))}

          </div>

        </div>


        {/* =================================================
            BOOKINGS LIST
        ================================================= */}

        {filteredBookings.length > 0 ? (

          <div className="provider-bookings-list">

            {filteredBookings.map((booking) => (

              <div
                className="provider-booking-card"
                key={booking.id}
              >

                {/* BOOKING IMAGE */}

                <div className="provider-booking-image">

                  <img
                    src={booking.image}
                    alt={booking.service}
                  />

                </div>


                {/* BOOKING CONTENT */}

                <div className="provider-booking-content">

                  {/* TOP */}

                  <div className="provider-booking-top">

                    <div>

                      <span
                        className={`provider-booking-badge ${booking.status.toLowerCase()}`}
                      >
                        {booking.status}
                      </span>

                      <h3>
                        {booking.service}
                      </h3>

                    </div>


                    <strong className="provider-booking-price">
                      ₹{booking.price}
                    </strong>

                  </div>


                  {/* CUSTOMER */}

                  <div className="provider-customer-info">

                    <div className="provider-customer-avatar">
                      👤
                    </div>

                    <div>

                      <strong>
                        {booking.customer}
                      </strong>

                      <span>
                        Customer
                      </span>

                    </div>

                  </div>


                  {/* DATE AND TIME */}

                  <div className="provider-booking-meta">

                    <span>
                      📅 {booking.date}
                    </span>

                    <span>
                      🕐 {booking.time}
                    </span>

                  </div>


                  {/* ACTIONS */}

                  <div className="provider-booking-actions">

                    {/* PENDING */}

                    {booking.status === "Pending" && (

                      <button
                        className="provider-confirm-btn"
                        onClick={() =>
                          updateStatus(
                            booking.id,
                            "Confirmed"
                          )
                        }
                      >
                        ✓ Confirm Booking
                      </button>

                    )}


                    {/* CONFIRMED */}

                    {booking.status === "Confirmed" && (

                      <button
                        className="provider-complete-btn"
                        onClick={() =>
                          updateStatus(
                            booking.id,
                            "Completed"
                          )
                        }
                      >
                        ✓ Mark Completed
                      </button>

                    )}


                    {/* COMPLETED */}

                    {booking.status === "Completed" && (

                      <span className="provider-completed-text">
                        ✓ Service Completed
                      </span>

                    )}

                  </div>

                </div>

              </div>

            ))}

          </div>

        ) : (

          /* =================================================
             EMPTY STATE
          ================================================= */

          <div className="provider-bookings-empty">

            <div className="provider-bookings-empty-icon">
              📋
            </div>

            <h3>
              No {filter.toLowerCase()} bookings
            </h3>

            <p>
              There are currently no bookings in this
              category.
            </p>

          </div>

        )}

      </div>

    </div>
  );
}

export default ProviderBookings;

