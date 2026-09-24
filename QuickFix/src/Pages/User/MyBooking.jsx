import React, { useEffect, useState } from "react";

function MyBooking() {
  const [bookings, setBookings] = useState([]);

  // Check whether booking date and time has passed
  const isBookingExpired = (booking) => {
    let bookingDateTime;

    // New booking format: YYYY-MM-DD
    if (/^\d{4}-\d{2}-\d{2}$/.test(booking.date)) {
      let [time, modifier] = booking.time.split(" ");

      let [hours, minutes] = time.split(":").map(Number);

      // Convert 12-hour time to 24-hour time
      if (modifier === "PM" && hours !== 12) {
        hours += 12;
      }

      if (modifier === "AM" && hours === 12) {
        hours = 0;
      }

      bookingDateTime = new Date(
        `${booking.date}T${String(hours).padStart(2, "0")}:${String(
          minutes
        ).padStart(2, "0")}:00`
      );
    } else {
      // For old booking date format
      bookingDateTime = new Date(
        `${booking.date} ${booking.time}`
      );
    }

    return bookingDateTime < new Date();
  };

  // Load bookings
  const loadBookings = () => {
    const savedBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    // Mark expired bookings as Completed
    const updatedAllBookings = savedBookings.map((booking) => {
      if (
        booking.status !== "Cancelled" &&
        isBookingExpired(booking)
      ) {
        return {
          ...booking,
          status: "Completed",
        };
      }

      return booking;
    });

    // Save updated status in localStorage
    localStorage.setItem(
      "bookings",
      JSON.stringify(updatedAllBookings)
    );

    // Show only active/upcoming bookings
    const activeBookings = updatedAllBookings.filter(
      (booking) =>
        booking.status !== "Completed" &&
        booking.status !== "Cancelled"
    );

    setBookings(activeBookings);
  };

  useEffect(() => {
    // Load bookings when page opens
    loadBookings();

    // Check every 1 minute
    const interval = setInterval(() => {
      loadBookings();
    }, 60000);

    // Cleanup interval
    return () => {
      clearInterval(interval);
    };
  }, []);

  // Remove booking
  const removeBooking = (id) => {
    const confirmRemove = window.confirm(
      "Are you sure you want to remove this booking?"
    );

    if (!confirmRemove) {
      return;
    }

    const savedBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    const updatedBookings = savedBookings.filter(
      (booking) => booking.id !== id
    );

    localStorage.setItem(
      "bookings",
      JSON.stringify(updatedBookings)
    );

    // Update displayed bookings
    setBookings(
      updatedBookings.filter(
        (booking) =>
          booking.status !== "Completed" &&
          booking.status !== "Cancelled"
      )
    );
  };

  return (
    <div className="my-bookings">

      <h1>My Bookings</h1>

      {bookings.length === 0 ? (
        <p className="no-bookings">
          No bookings yet.
        </p>
      ) : (
        bookings.map((booking) => (
          <div className="booking-card" key={booking.id}>

            {/* Booking Image */}
            <img
              src={booking.image}
              alt={booking.service}
              className="booking-image"
            />

            {/* Booking Information */}
            <div className="booking-info">

              <h2>{booking.service}</h2>

              <p>
                <strong>Provider:</strong>{" "}
                {booking.provider}
              </p>

              <p>
                <strong>Date:</strong>{" "}
                {booking.date}
              </p>

              <p>
                <strong>Time:</strong>{" "}
                {booking.time}
              </p>

              <p>
                <strong>Price:</strong>{" "}
                ₹{booking.price}
              </p>

              <p>
                <strong>Status:</strong>{" "}
                {booking.status}
              </p>

              {/* Remove Button */}
              <button
                className="remove-booking-btn"
                onClick={() => removeBooking(booking.id)}
              >
                Remove Booking
              </button>

            </div>

          </div>
        ))
      )}

    </div>
  );
}

export default MyBooking;