import React, { useState } from "react";
import "../../CSS/HelpSupport.css";

function HelpSupport() {
  const [openFaq, setOpenFaq] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  const faqs = [
    {
      question: "How do I book a service?",
      answer:
        "Go to Search Services, select the service you need, choose a service provider, and complete the booking details."
    },
    {
      question: "How can I cancel my booking?",
      answer:
        "Open My Bookings, select the booking you want to cancel, and use the cancel option."
    },
    {
      question: "How can I contact a service provider?",
      answer:
        "You can contact your service provider through the Messages section after making a booking."
    },
    {
      question: "Can I change my booking details?",
      answer:
        "If the booking has not started yet, you can contact the service provider through Messages to request a change."
    },
    {
      question: "How do I write a review?",
      answer:
        "Go to the Reviews page, select a completed service, choose your rating, write your review, and click Send Review."
    }
  ];

  const handleContact = () => {
    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="help-page">

      {/* HEADER */}
      <div className="help-header">
        <div>
          <span className="help-label">SUPPORT CENTER</span>

          <h1>Help & Support</h1>

          <p>
            We're here to help you with your QuickFix experience.
          </p>
        </div>

        <div className="help-header-icon">
          ?
        </div>
      </div>


      {/* SUPPORT CARDS */}
      <div className="support-cards">

        <div className="support-card">
          <div className="support-icon">
            💬
          </div>

          <div>
            <h2>Chat with Support</h2>

            <p>
              Get help from our support team with your questions.
            </p>

            <button onClick={handleContact}>
              Start Chat
            </button>
          </div>
        </div>


        <div className="support-card">
          <div className="support-icon">
            📧
          </div>

          <div>
            <h2>Email Support</h2>

            <p>
              Send us your issue and we'll get back to you.
            </p>

            <button onClick={handleContact}>
              Contact Us
            </button>
          </div>
        </div>


        <div className="support-card">
          <div className="support-icon">
            📞
          </div>

          <div>
            <h2>Call Support</h2>

            <p>
              Need urgent help? Contact our support team.
            </p>

            <button onClick={handleContact}>
              Call Support
            </button>
          </div>
        </div>

      </div>


      {/* FAQ SECTION */}
      <div className="faq-container">

        <div className="faq-header">
          <div>
            <h2>Frequently Asked Questions</h2>

            <p>
              Find quick answers to common questions.
            </p>
          </div>

          <span className="faq-count">
            {faqs.length} Questions
          </span>
        </div>


        <div className="faq-list">

          {faqs.map((faq, index) => (

            <div
              className={`faq-item ${
                openFaq === index ? "faq-open" : ""
              }`}
              key={index}
            >

              <button
                className="faq-question"
                onClick={() => toggleFaq(index)}
              >
                <span>
                  {faq.question}
                </span>

                <span className="faq-arrow">
                  {openFaq === index ? "−" : "+"}
                </span>
              </button>


              {openFaq === index && (
                <div className="faq-answer">
                  <p>
                    {faq.answer}
                  </p>
                </div>
              )}

            </div>

          ))}

        </div>

      </div>


      {/* CONTACT SECTION */}
      <div className="help-contact-section">

        <div className="contact-icon">
          🎧
        </div>

        <div className="contact-content">

          <h2>Still need help?</h2>

          <p>
            Our support team is ready to help you with any issue.
          </p>

        </div>

        <button
          className="contact-support-btn"
          onClick={handleContact}
        >
          Contact Support
        </button>

      </div>


      {/* SUCCESS POPUP */}
      {showSuccess && (
        <div className="help-success-popup">

          <div className="help-success-icon">
            ✓
          </div>

          <div>
            <h3>Request Received</h3>

            <p>
              Our support team will contact you shortly.
            </p>
          </div>

        </div>
      )}

    </div>
  );
}

export default HelpSupport;