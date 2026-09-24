import React, { useState } from "react";
import "../../CSS/ManageBookings.css";

function ManageBookings() {
  const [bookings, setBookings] = useState([
    {
      id: 1001,
      customer: "Rahul Sharma",
      provider: "Raj Electric Services",
      service: "Electrician",
      date: "05 Sep 2026",
      time: "10:30 AM",
      amount: 850,
      status: "Confirmed",
    },
    {
      id: 1002,
      customer: "Priya Patil",
      provider: "Sharma Plumbing",
      service: "Plumbing",
      date: "05 Sep 2026",
      time: "01:00 PM",
      amount: 1200,
      status: "Pending",
    },
    {
      id: 1003,
      customer: "Amit Verma",
      provider: "QuickFix Cleaning",
      service: "Home Cleaning",
      date: "04 Sep 2026",
      time: "11:00 AM",
      amount: 950,
      status: "Completed",
    },
    {
      id: 1004,
      customer: "Rohan Mehta",
      provider: "CoolCare AC Services",
      service: "AC Repair",
      date: "04 Sep 2026",
      time: "04:30 PM",
      amount: 1500,
      status: "Confirmed",
    },
    {
      id: 1005,
      customer: "Sneha Joshi",
      provider: "HomeFix Carpentry",
      service: "Carpentry",
      date: "03 Sep 2026",
      time: "12:30 PM",
      amount: 1100,
      status: "Cancelled",
    },
    {
      id: 1006,
      customer: "Vikas Shah",
      provider: "Bright Paint Solutions",
      service: "Painting",
      date: "02 Sep 2026",
      time: "09:30 AM",
      amount: 2200,
      status: "Completed",
    },
  ]);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  // ==========================================
  // CHANGE STATUS
  // ==========================================

  const changeStatus = (id, newStatus) => {
    setBookings((currentBookings) =>
      currentBookings.map((booking) =>
        booking.id === id
          ? {
              ...booking,
              status: newStatus,
            }
          : booking
      )
    );
  };

  // ==========================================
  // DELETE BOOKING
  // ==========================================

  const deleteBooking = (id) => {
    const booking = bookings.find(
      (item) => item.id === id
    );

    const confirmDelete = window.confirm(
      `Are you sure you want to delete booking #${booking.id}?`
    );

    if (!confirmDelete) return;

    setBookings((currentBookings) =>
      currentBookings.filter(
        (booking) => booking.id !== id
      )
    );
  };

  // ==========================================
  // VIEW BOOKING
  // ==========================================

  const viewBooking = (booking) => {
    alert(
      `Booking Details\n\n` +
        `Booking ID: #${booking.id}\n` +
        `Customer: ${booking.customer}\n` +
        `Provider: ${booking.provider}\n` +
        `Service: ${booking.service}\n` +
        `Date: ${booking.date}\n` +
        `Time: ${booking.time}\n` +
        `Amount: ₹${booking.amount}\n` +
        `Status: ${booking.status}`
    );
  };

  // ==========================================
  // FILTER BOOKINGS
  // ==========================================

  const filteredBookings = bookings.filter((booking) => {
    const searchText =
      `${booking.id} ${booking.customer} ${booking.provider} ${booking.service}`
        .toLowerCase();

    const matchesSearch = searchText.includes(
      search.toLowerCase()
    );

    const matchesStatus =
      statusFilter === "All" ||
      booking.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // ==========================================
  // STATISTICS
  // ==========================================

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

  const cancelledBookings = bookings.filter(
    (booking) => booking.status === "Cancelled"
  ).length;

  const totalRevenue = bookings
    .filter((booking) => booking.status === "Completed")
    .reduce(
      (total, booking) => total + booking.amount,
      0
    );

  return (
    <div className="manage-bookings">

      {/* ==========================================
          HEADER
      ========================================== */}

      <div className="manage-bookings-header">

        <div>
          <span className="manage-bookings-label">
            ADMIN PANEL
          </span>

          <h1>Manage Bookings</h1>

          <p>
            Monitor and manage all QuickFix customer bookings.
          </p>
        </div>

        <div className="manage-bookings-header-icon">
          📋
        </div>

      </div>


      {/* ==========================================
          STATISTICS
      ========================================== */}

      <div className="manage-bookings-stats">

        <div className="manage-bookings-stat-card">
          <div className="manage-bookings-stat-icon">
            📋
          </div>

          <div>
            <span>Total Bookings</span>
            <strong>{totalBookings}</strong>
          </div>
        </div>


        <div className="manage-bookings-stat-card">
          <div className="manage-bookings-stat-icon pending-icon">
            ⏳
          </div>

          <div>
            <span>Pending</span>
            <strong>{pendingBookings}</strong>
          </div>
        </div>


        <div className="manage-bookings-stat-card">
          <div className="manage-bookings-stat-icon confirmed-icon">
            ✓
          </div>

          <div>
            <span>Confirmed</span>
            <strong>{confirmedBookings}</strong>
          </div>
        </div>


        <div className="manage-bookings-stat-card">
          <div className="manage-bookings-stat-icon completed-icon">
            ⭐
          </div>

          <div>
            <span>Completed</span>
            <strong>{completedBookings}</strong>
          </div>
        </div>

      </div>


      {/* ==========================================
          REVENUE SUMMARY
      ========================================== */}

      <div className="manage-bookings-revenue">

        <div className="manage-bookings-revenue-icon">
          💰
        </div>

        <div>
          <span>Completed Booking Revenue</span>

          <strong>
            ₹{totalRevenue.toLocaleString()}
          </strong>
        </div>

        <div className="manage-bookings-revenue-info">
          {cancelledBookings} cancelled booking
          {cancelledBookings !== 1 ? "s" : ""}
        </div>

      </div>


      {/* ==========================================
          MAIN CARD
      ========================================== */}

      <div className="manage-bookings-card">

        <div className="manage-bookings-card-header">

          <div>
            <h2>All Bookings</h2>

            <p>
              Customer service booking records
            </p>
          </div>

          <button
            className="manage-bookings-refresh-btn"
            onClick={() => {
              setSearch("");
              setStatusFilter("All");
            }}
          >
            🔄 Reset
          </button>

        </div>


        {/* ==========================================
            FILTERS
        ========================================== */}

        <div className="manage-bookings-filters">

          <div className="manage-bookings-search">

            <span>🔍</span>

            <input
              type="text"
              placeholder="Search customer, provider, service..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

          </div>


          <select
            className="manage-bookings-filter-select"
            value={statusFilter}
            onChange={(e) =>
              setStatusFilter(e.target.value)
            }
          >
            <option value="All">
              All Status
            </option>

            <option value="Pending">
              Pending
            </option>

            <option value="Confirmed">
              Confirmed
            </option>

            <option value="Completed">
              Completed
            </option>

            <option value="Cancelled">
              Cancelled
            </option>
          </select>

        </div>


        {/* ==========================================
            TABLE
        ========================================== */}

        <div className="manage-bookings-table-wrapper">

          <table className="manage-bookings-table">

            <thead>

              <tr>
                <th>ID</th>
                <th>Customer</th>
                <th>Provider</th>
                <th>Service</th>
                <th>Date & Time</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Action</th>
              </tr>

            </thead>


            <tbody>

              {filteredBookings.length > 0 ? (

                filteredBookings.map((booking) => (

                  <tr key={booking.id}>

                    {/* ID */}

                    <td>
                      <span className="manage-booking-id">
                        #{booking.id}
                      </span>
                    </td>


                    {/* CUSTOMER */}

                    <td>

                      <div className="manage-booking-person">

                        <div className="manage-booking-avatar customer">
                          👤
                        </div>

                        <strong>
                          {booking.customer}
                        </strong>

                      </div>

                    </td>


                    {/* PROVIDER */}

                    <td>

                      <div className="manage-booking-provider">

                        <div className="manage-booking-avatar provider">
                          🧑‍🔧
                        </div>

                        <span>
                          {booking.provider}
                        </span>

                      </div>

                    </td>


                    {/* SERVICE */}

                    <td>

                      <span className="manage-booking-service">
                        {booking.service}
                      </span>

                    </td>


                    {/* DATE */}

                    <td>

                      <div className="manage-booking-date">

                        <strong>
                          {booking.date}
                        </strong>

                        <small>
                          🕐 {booking.time}
                        </small>

                      </div>

                    </td>


                    {/* AMOUNT */}

                    <td>

                      <strong className="manage-booking-amount">
                        ₹{booking.amount.toLocaleString()}
                      </strong>

                    </td>


                    {/* STATUS */}

                    <td>

                      <span
                        className={
                          booking.status === "Pending"
                            ? "manage-booking-status pending"
                            : booking.status === "Confirmed"
                            ? "manage-booking-status confirmed"
                            : booking.status === "Completed"
                            ? "manage-booking-status completed"
                            : "manage-booking-status cancelled"
                        }
                      >
                        {booking.status}
                      </span>

                    </td>


                    {/* ACTIONS */}

                    <td>

                      <div className="manage-booking-actions">

                        <button
                          className="manage-booking-view-btn"
                          onClick={() =>
                            viewBooking(booking)
                          }
                        >
                          View
                        </button>


                        {booking.status === "Pending" && (
                          <button
                            className="manage-booking-confirm-btn"
                            onClick={() =>
                              changeStatus(
                                booking.id,
                                "Confirmed"
                              )
                            }
                          >
                            Confirm
                          </button>
                        )}


                        {booking.status === "Confirmed" && (
                          <button
                            className="manage-booking-complete-btn"
                            onClick={() =>
                              changeStatus(
                                booking.id,
                                "Completed"
                              )
                            }
                          >
                            Complete
                          </button>
                        )}


                        {(booking.status === "Pending" ||
                          booking.status === "Confirmed") && (
                          <button
                            className="manage-booking-cancel-btn"
                            onClick={() =>
                              changeStatus(
                                booking.id,
                                "Cancelled"
                              )
                            }
                          >
                            Cancel
                          </button>
                        )}


                        <button
                          className="manage-booking-delete-btn"
                          onClick={() =>
                            deleteBooking(booking.id)
                          }
                        >
                          Delete
                        </button>

                      </div>

                    </td>

                  </tr>

                ))

              ) : (

                <tr>

                  <td
                    colSpan="8"
                    className="manage-bookings-empty"
                  >

                    <div>🔍</div>

                    <h3>
                      No bookings found
                    </h3>

                    <p>
                      Try changing your search or status filter.
                    </p>

                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>


        {/* ==========================================
            FOOTER
        ========================================== */}

        <div className="manage-bookings-footer">

          <span>
            Showing{" "}
            <strong>
              {filteredBookings.length}
            </strong>{" "}
            of{" "}
            <strong>
              {bookings.length}
            </strong>{" "}
            bookings
          </span>

          <span>
            QuickFix Booking Management
          </span>

        </div>

      </div>

    </div>
  );
}

export default ManageBookings;