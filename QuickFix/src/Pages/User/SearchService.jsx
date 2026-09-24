import React, { useState, useRef } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import "../../CSS/SearchAndBookings.css";
import services from "../../Data/services";

function SearchService() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const search = searchParams.get("search") || "";

  // ==============================
  // BOOKING STATE
  // ==============================

  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  // Date input reference
  const dateInputRef = useRef(null);

  // ==============================
  // TIME SLOTS
  // ==============================

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
  ];

  // ==============================
  // GET TODAY'S LOCAL DATE
  // ==============================

  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  const minDate = `${year}-${month}-${day}`;

  // ==============================
  // BOOK SERVICE
  // ==============================

  const handleBookService = (service) => {
    setSelectedService(service);
    setSelectedDate("");
    setSelectedTime("");

    // Open calendar automatically
    setTimeout(() => {
      if (dateInputRef.current) {
        dateInputRef.current.showPicker();
      }
    }, 100);
  };

  // ==============================
  // DATE SELECTION
  // ==============================

  const handleDateChange = (e) => {
    const selected = e.target.value;

    // Prevent past dates
    if (selected < minDate) {
      alert("You cannot select a past date.");

      setSelectedDate("");
      setSelectedTime("");

      return;
    }

    setSelectedDate(selected);

    // Reset time when date changes
    setSelectedTime("");
  };

  // ==============================
  // TIME SELECTION
  // ==============================

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  // ==============================
  // CHECK PROVIDER AVAILABILITY
  // ==============================

  const checkProviderAvailability = () => {
    // Get existing bookings
    const existingBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    // Check same provider + same date + same time
    const alreadyBooked = existingBookings.some(
      (booking) =>
        booking.provider === selectedService.provider &&
        booking.date === selectedDate &&
        booking.time === selectedTime
    );

    return !alreadyBooked;
  };

  // ==============================
  // CONFIRM BOOKING
  // ==============================

  const handleConfirmBooking = () => {
    if (!selectedDate) {
      alert("Please select a date.");
      return;
    }

    if (!selectedTime) {
      alert("Please select a time.");
      return;
    }

    // Check provider availability
    const isAvailable = checkProviderAvailability();

    // ==============================
    // PROVIDER NOT AVAILABLE
    // ==============================

    if (!isAvailable) {
      alert(
        "Sorry, this service provider is not available at the selected time. Please choose another time."
      );

      setSelectedTime("");

      return;
    }

    // ==============================
    // GET EXISTING BOOKINGS
    // ==============================

    const existingBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    // ==============================
    // CREATE NEW BOOKING
    // ==============================

    const newBooking = {
      id: Date.now(),

      service: selectedService.name,

      provider: selectedService.provider,

      date: selectedDate,

      time: selectedTime,

      price: selectedService.price,

      status: "Confirmed",

      image: selectedService.image,
    };

    // ==============================
    // SAVE BOOKING
    // ==============================

    existingBookings.push(newBooking);

    localStorage.setItem(
      "bookings",
      JSON.stringify(existingBookings)
    );

    // ==============================
    // SUCCESS ALERT
    // ==============================

    alert(
      "Your service has been booked successfully! ✅"
    );

    // ==============================
    // CLOSE POPUP
    // ==============================

    setSelectedService(null);
    setSelectedDate("");
    setSelectedTime("");

    // ==============================
    // GO TO MY BOOKINGS
    // ==============================

    navigate("/my-bookings");
  };

  // ==============================
  // SEARCH / FILTER
  // ==============================

  const filteredServices = services.filter((service) => {
    const searchText = search.toLowerCase().trim();

    if (searchText === "") {
      return true;
    }

    const searchWords = {
      plumber: "plumbing",
      plumbing: "plumbing",
      electrician: "electrical",
      electrical: "electrical",
      ac: "ac repair",
      carpenter: "carpenter",
      washing: "washing",
      cleaner: "home cleaning",
      cleaning: "home cleaning",
      "home cleaning": "home cleaning",
    };

    const convertedSearch =
      searchWords[searchText] || searchText;

    return (
      service.name.toLowerCase().includes(convertedSearch) ||
      service.category.toLowerCase().includes(convertedSearch) ||
      service.provider.toLowerCase().includes(convertedSearch) ||
      service.location.toLowerCase().includes(convertedSearch) ||
      service.description.toLowerCase().includes(convertedSearch)
    );
  });

  // ==============================
  // UI
  // ==============================

  return (
    <div className="search-page">

      <h1>Search Services</h1>

      {search && (
        <p>
          Showing results for:{" "}
          <strong>{search}</strong>
        </p>
      )}

      {/* ==============================
          SERVICE CARDS
      ============================== */}

      <div className="service-grid">

        {filteredServices.length > 0 ? (

          filteredServices.map((service) => (

            <div
              className="service-card"
              key={service.id}
            >

              <img
                src={service.image}
                alt={service.provider}
                className="service-image"
              />

              <div className="service-info">

                <h2>{service.name}</h2>

                <p>
                  Category: {service.category}
                </p>

                <p>
                  Provider: {service.provider}
                </p>

                <h3>
                  Price: ₹{service.price}
                </h3>

                <p>
                  <strong>Rating:</strong>{" "}
                  ⭐ {service.rating}
                </p>

                <p>
                  Location: {service.location}
                </p>

                <p className="service-description">
                  {service.description}
                </p>

                <button
                  className="book-btn"
                  onClick={() =>
                    handleBookService(service)
                  }
                >
                  Book Service
                </button>

              </div>

            </div>

          ))

        ) : (

          <div className="no-results">

            <h2>No services found</h2>

            <p>
              No service matches "{search}"
            </p>

          </div>

        )}

      </div>

      {/* ==============================
          BOOKING POPUP
      ============================== */}

      {selectedService && (

        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.45)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
            overflowY: "auto",
            padding: "20px",
          }}
        >

          <div
            style={{
              width: "450px",
              maxWidth: "100%",
              background: "#ffffff",
              padding: "30px",
              borderRadius: "15px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            }}
          >

            {/* SERVICE */}

            <h2
              style={{
                color: "#0876d1",
                marginBottom: "10px",
              }}
            >
              Book {selectedService.name}
            </h2>

            <p>
              Provider:{" "}
              <strong>
                {selectedService.provider}
              </strong>
            </p>

            {/* DATE */}

            <label
              htmlFor="booking-date"
              style={{
                display: "block",
                marginTop: "20px",
                marginBottom: "8px",
                fontWeight: "600",
              }}
            >
              Select Date
            </label>

            <input
              ref={dateInputRef}
              id="booking-date"
              type="date"
              min={minDate}
              value={selectedDate}
              onChange={handleDateChange}
              style={{
                width: "100%",
                padding: "12px",
                fontSize: "16px",
                border: "1px solid #b8cbe0",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            />

            {/* TIME SLOTS */}

            {selectedDate && (

              <div
                style={{
                  marginTop: "25px",
                }}
              >

                <h3
                  style={{
                    color: "#0876d1",
                    marginBottom: "15px",
                  }}
                >
                  Select Time
                </h3>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(2, 1fr)",
                    gap: "10px",
                  }}
                >

                  {timeSlots.map((time) => {

                    const existingBookings =
                      JSON.parse(
                        localStorage.getItem("bookings")
                      ) || [];

                    const isBooked =
                      existingBookings.some(
                        (booking) =>
                          booking.provider ===
                            selectedService.provider &&
                          booking.date ===
                            selectedDate &&
                          booking.time === time
                      );

                    return (

                      <button
                        key={time}
                        type="button"
                        disabled={isBooked}
                        onClick={() =>
                          handleTimeSelect(time)
                        }
                        style={{
                          padding: "12px",
                          borderRadius: "8px",

                          border:
                            selectedTime === time
                              ? "2px solid #0876d1"
                              : "1px solid #b8cbe0",

                          background:
                            isBooked
                              ? "#e5e7eb"
                              : selectedTime === time
                              ? "#0876d1"
                              : "#ffffff",

                          color:
                            isBooked
                              ? "#9ca3af"
                              : selectedTime === time
                              ? "#ffffff"
                              : "#334155",

                          fontSize: "15px",

                          fontWeight: "600",

                          cursor:
                            isBooked
                              ? "not-allowed"
                              : "pointer",
                        }}
                      >
                        {time}

                        {isBooked && " (Booked)"}

                      </button>

                    );

                  })}

                </div>

              </div>

            )}

            {/* SELECTED DATE AND TIME */}

            {selectedDate && selectedTime && (

              <div
                style={{
                  marginTop: "20px",
                  padding: "15px",
                  background: "#f1f7ff",
                  borderRadius: "8px",
                }}
              >

                <p
                  style={{
                    margin: "5px 0",
                  }}
                >
                  <strong>Date:</strong>{" "}
                  {selectedDate}
                </p>

                <p
                  style={{
                    margin: "5px 0",
                  }}
                >
                  <strong>Time:</strong>{" "}
                  {selectedTime}
                </p>

              </div>

            )}

            {/* CONFIRM */}

            {selectedDate && selectedTime && (

              <button
                type="button"
                onClick={handleConfirmBooking}
                style={{
                  width: "100%",
                  marginTop: "20px",
                  padding: "13px",
                  background: "#0876d1",
                  color: "#ffffff",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "16px",
                  fontWeight: "600",
                  cursor: "pointer",
                }}
              >
                Confirm Booking
              </button>

            )}

            {/* CANCEL */}

            <button
              type="button"
              onClick={() => {
                setSelectedService(null);
                setSelectedDate("");
                setSelectedTime("");
              }}
              style={{
                width: "100%",
                marginTop: "10px",
                padding: "12px",
                background: "#dc3545",
                color: "#ffffff",
                border: "none",
                borderRadius: "8px",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Cancel
            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default SearchService;