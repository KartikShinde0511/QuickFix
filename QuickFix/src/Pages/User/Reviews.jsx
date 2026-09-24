import React, { useState } from "react";
import services from "../../Data/services";
import "../../CSS/Reviews.css";

function Reviews() {
  const [selectedService, setSelectedService] = useState(null);
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(5);
  const [showSuccess, setShowSuccess] = useState(false);

  // Get bookings from localStorage
  const bookings =
    JSON.parse(localStorage.getItem("bookings")) || [];

  // Use booked services if available.
  // Otherwise show demo services.
  const myServices =
    bookings.length > 0
      ? bookings.map((booking) => ({
          id: booking.id,
          name: booking.service,
          provider: booking.provider,
          date: booking.date,
          price: booking.price,
          image: booking.image,
        }))
      : services.slice(0, 6).map((service) => ({
          id: service.id,
          name: service.name,
          provider: service.provider,
          date: "05 September 2026",
          price: service.price,
          image: service.image,
        }));

  // Open review popup
  const handleWriteReview = (service) => {
    setSelectedService(service);
    setReviewText("");
    setRating(5);
  };

  // Submit review
  const handleSubmitReview = () => {
    if (reviewText.trim() === "") {
      alert("Please write a review first.");
      return;
    }

    const existingReviews =
      JSON.parse(localStorage.getItem("reviews")) || [];

    const newReview = {
      id: Date.now(),
      service: selectedService.name,
      provider: selectedService.provider,
      rating: rating,
      review: reviewText,
      date: new Date().toLocaleDateString(),
    };

    existingReviews.push(newReview);

    localStorage.setItem(
      "reviews",
      JSON.stringify(existingReviews)
    );

    // Close review popup
    setSelectedService(null);
    setReviewText("");

    // Show success popup
    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
    }, 2500);
  };

  return (
    <div className="reviews-page">

      {/* =========================
          HEADER
      ========================= */}

      <div className="reviews-header">
        <div>
          <span className="reviews-label">
            YOUR EXPERIENCE
          </span>

          <h1>Reviews & Ratings</h1>

          <p>
            Share your experience and help others choose
            trusted professionals.
          </p>
        </div>

        <div className="reviews-header-icon">
          ⭐
        </div>
      </div>


      {/* =========================
          MY SERVICES
      ========================= */}

      <div className="reviews-container">

        <div className="reviews-section-header">
          <div>
            <h2>My Services</h2>

            <p>
              Review the services you have booked
            </p>
          </div>

          <span className="service-count">
            {myServices.length} Services
          </span>
        </div>


        {/* SERVICE CARDS */}

        <div className="review-services-grid">

          {myServices.map((service) => (

            <div
              className="review-service-card"
              key={service.id}
            >

              {/* Image */}

              <div className="review-image-wrapper">

                <img
                  src={service.image}
                  alt={service.name}
                  className="review-service-image"
                />

                <span className="completed-tag">
                  ✓ Completed
                </span>

              </div>


              {/* Content */}

              <div className="review-card-content">

                <h3>
                  {service.name}
                </h3>

                <p className="review-provider">
                  👨‍🔧 {service.provider}
                </p>

                <div className="review-details">

                  <span>
                    📅 {service.date}
                  </span>

                  <span>
                    💰 ₹{service.price}
                  </span>

                </div>


                {/* Review Button */}

                <button
                  className="write-review-btn"
                  onClick={() =>
                    handleWriteReview(service)
                  }
                >
                  ⭐ Write Review
                </button>

              </div>

            </div>

          ))}

        </div>

      </div>


      {/* =========================
          REVIEW POPUP
      ========================= */}

      {selectedService && (

        <div className="review-modal-overlay">

          <div className="review-modal">

            {/* Close */}

            <button
              className="review-close-btn"
              onClick={() => setSelectedService(null)}
            >
              ×
            </button>


            <div className="modal-star">
              ⭐
            </div>

            <h2>
              Write a Review
            </h2>

            <p className="modal-service-name">
              {selectedService.name}
            </p>

            <p className="modal-provider">
              Service Provider: {selectedService.provider}
            </p>


            {/* Rating */}

            <div className="rating-section">

              <label>
                Your Rating
              </label>

              <div className="rating-stars">

                {[1, 2, 3, 4, 5].map((star) => (

                  <button
                    key={star}
                    className={
                      star <= rating
                        ? "star active"
                        : "star"
                    }
                    onClick={() => setRating(star)}
                  >
                    ★
                  </button>

                ))}

              </div>

              <span className="rating-text">
                {rating} out of 5
              </span>

            </div>


            {/* Review Text */}

            <div className="review-text-section">

              <label>
                Your Review
              </label>

              <textarea
                value={reviewText}
                onChange={(e) =>
                  setReviewText(e.target.value)
                }
                placeholder="Tell us about your experience..."
                rows="5"
              />

              <small>
                {reviewText.length}/300 characters
              </small>

            </div>


            {/* Submit */}

            <button
              className="submit-review-btn"
              onClick={handleSubmitReview}
            >
              Send Review
            </button>

          </div>

        </div>

      )}


      {/* =========================
          SUCCESS POPUP
      ========================= */}

      {showSuccess && (

        <div className="success-popup">

          <div className="success-icon">
            ✓
          </div>

          <div>
            <h3>
              Review Submitted!
            </h3>

            <p>
              Thank you for sharing your experience.
            </p>
          </div>

        </div>

      )}

    </div>
  );
}

export default Reviews;