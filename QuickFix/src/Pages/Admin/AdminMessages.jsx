import React, { useState } from "react";
import "../../CSS/AdminMessages.css";

function AdminMessages() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      role: "User",
      subject: "Booking issue",
      message:
        "I booked an AC repair service but the provider has not confirmed my booking yet.",
      date: "05 Sep 2026",
      time: "10:30 AM",
      status: "Unread",
    },
    {
      id: 2,
      name: "Amit Verma",
      email: "amit@gmail.com",
      role: "Service Provider",
      subject: "Payment problem",
      message:
        "My payment for the completed service has not been credited to my account.",
      date: "05 Sep 2026",
      time: "11:15 AM",
      status: "Read",
    },
    {
      id: 3,
      name: "Priya Patil",
      email: "priya@gmail.com",
      role: "User",
      subject: "Service complaint",
      message:
        "The service provider arrived late and the service was not completed properly.",
      date: "04 Sep 2026",
      time: "03:45 PM",
      status: "Unread",
    },
    {
      id: 4,
      name: "PowerFix Services",
      email: "powerfix@gmail.com",
      role: "Service Provider",
      subject: "Profile verification",
      message:
        "Please check my provider profile verification. I have uploaded all required documents.",
      date: "04 Sep 2026",
      time: "01:20 PM",
      status: "Read",
    },
    {
      id: 5,
      name: "Rohan Mehta",
      email: "rohan@gmail.com",
      role: "User",
      subject: "Refund request",
      message:
        "I cancelled my booking and would like to know when I will receive my refund.",
      date: "03 Sep 2026",
      time: "09:40 AM",
      status: "Read",
    },
  ]);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");
  const [selectedMessage, setSelectedMessage] = useState(null);

  // =========================
  // MARK AS READ / UNREAD
  // =========================

  const toggleReadStatus = (id) => {
    setMessages((currentMessages) =>
      currentMessages.map((message) =>
        message.id === id
          ? {
              ...message,
              status:
                message.status === "Read"
                  ? "Unread"
                  : "Read",
            }
          : message
      )
    );
  };

  // =========================
  // DELETE MESSAGE
  // =========================

  const deleteMessage = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this message?"
    );

    if (!confirmDelete) return;

    setMessages((currentMessages) =>
      currentMessages.filter(
        (message) => message.id !== id
      )
    );

    if (selectedMessage?.id === id) {
      setSelectedMessage(null);
    }
  };

  // =========================
  // VIEW MESSAGE
  // =========================

  const viewMessage = (message) => {
    setSelectedMessage(message);

    setMessages((currentMessages) =>
      currentMessages.map((item) =>
        item.id === message.id
          ? { ...item, status: "Read" }
          : item
      )
    );
  };

  // =========================
  // CLOSE MESSAGE
  // =========================

  const closeMessage = () => {
    setSelectedMessage(null);
  };

  // =========================
  // REFRESH
  // =========================

  const refreshMessages = () => {
    setSearch("");
    setFilter("All");
    setSelectedMessage(null);
  };

  // =========================
  // FILTER
  // =========================

  const filteredMessages = messages.filter((message) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      message.name.toLowerCase().includes(searchText) ||
      message.email.toLowerCase().includes(searchText) ||
      message.subject.toLowerCase().includes(searchText) ||
      message.role.toLowerCase().includes(searchText);

    const matchesFilter =
      filter === "All" ||
      message.status === filter ||
      message.role === filter;

    return matchesSearch && matchesFilter;
  });

  // =========================
  // STATISTICS
  // =========================

  const totalMessages = messages.length;

  const unreadMessages = messages.filter(
    (message) => message.status === "Unread"
  ).length;

  const readMessages = messages.filter(
    (message) => message.status === "Read"
  ).length;

  const providerMessages = messages.filter(
    (message) => message.role === "Service Provider"
  ).length;

  return (
    <div className="admin-messages">

      {/* =========================
          HEADER
      ========================= */}

      <div className="admin-messages-header">

        <div>
          <p className="admin-messages-label">
            ADMIN PANEL
          </p>

          <h1>Messages</h1>

          <p>
            Manage messages and communication from
            QuickFix users and service providers.
          </p>
        </div>

        <div className="admin-messages-count">

          <span>💬</span>

          <div>
            <small>Total Messages</small>
            <strong>{totalMessages}</strong>
          </div>

        </div>

      </div>


      {/* =========================
          STATISTICS
      ========================= */}

      <div className="admin-messages-stats">

        <div className="admin-messages-stat-card">

          <div className="admin-messages-stat-icon">
            💬
          </div>

          <div>
            <span>TOTAL MESSAGES</span>
            <strong>{totalMessages}</strong>
          </div>

        </div>


        <div className="admin-messages-stat-card">

          <div className="admin-messages-stat-icon unread-icon">
            🔵
          </div>

          <div>
            <span>UNREAD</span>
            <strong className="unread-number">
              {unreadMessages}
            </strong>
          </div>

        </div>


        <div className="admin-messages-stat-card">

          <div className="admin-messages-stat-icon read-icon">
            ✅
          </div>

          <div>
            <span>READ</span>
            <strong className="read-number">
              {readMessages}
            </strong>
          </div>

        </div>


        <div className="admin-messages-stat-card">

          <div className="admin-messages-stat-icon provider-icon">
            🧑‍🔧
          </div>

          <div>
            <span>PROVIDER MESSAGES</span>
            <strong className="provider-number">
              {providerMessages}
            </strong>
          </div>

        </div>

      </div>


      {/* =========================
          MESSAGE CARD
      ========================= */}

      <div className="admin-messages-card">

        <div className="admin-messages-card-header">

          <div>
            <h2>All Messages</h2>

            <p>
              Messages received from QuickFix members
            </p>
          </div>

          <button
            className="admin-messages-refresh-btn"
            onClick={refreshMessages}
          >
            🔄 Refresh
          </button>

        </div>


        {/* =========================
            CONTROLS
        ========================= */}

        <div className="admin-messages-controls">

          <div className="admin-messages-search">

            <span>🔍</span>

            <input
              type="text"
              placeholder="Search by name, email or subject..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

          </div>


          <select
            className="admin-messages-filter"
            value={filter}
            onChange={(e) =>
              setFilter(e.target.value)
            }
          >
            <option value="All">All Messages</option>
            <option value="Unread">Unread</option>
            <option value="Read">Read</option>
            <option value="User">Users</option>
            <option value="Service Provider">
              Providers
            </option>
          </select>

        </div>


        {/* =========================
            TABLE
        ========================= */}

        <div className="admin-messages-table-wrapper">

          <table className="admin-messages-table">

            <thead>
              <tr>
                <th>#</th>
                <th>Sender</th>
                <th>Role</th>
                <th>Subject</th>
                <th>Message</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {filteredMessages.length > 0 ? (

                filteredMessages.map((message) => (

                  <tr
                    key={message.id}
                    className={
                      message.status === "Unread"
                        ? "message-unread-row"
                        : ""
                    }
                  >

                    <td>
                      {message.id}
                    </td>


                    {/* SENDER */}

                    <td>

                      <div className="admin-message-sender">

                        <div className="admin-message-avatar">
                          {message.role ===
                          "Service Provider"
                            ? "🧑‍🔧"
                            : "👤"}
                        </div>

                        <div>
                          <strong>
                            {message.name}
                          </strong>

                          <small>
                            {message.email}
                          </small>
                        </div>

                      </div>

                    </td>


                    {/* ROLE */}

                    <td>

                      <span
                        className={
                          message.role ===
                          "Service Provider"
                            ? "admin-message-role provider"
                            : "admin-message-role user"
                        }
                      >
                        {message.role}
                      </span>

                    </td>


                    {/* SUBJECT */}

                    <td>

                      <strong className="admin-message-subject">
                        {message.subject}
                      </strong>

                    </td>


                    {/* MESSAGE */}

                    <td>

                      <p className="admin-message-preview">
                        {message.message}
                      </p>

                    </td>


                    {/* DATE */}

                    <td>

                      <div className="admin-message-date">

                        <span>
                          {message.date}
                        </span>

                        <small>
                          {message.time}
                        </small>

                      </div>

                    </td>


                    {/* STATUS */}

                    <td>

                      <span
                        className={
                          message.status === "Unread"
                            ? "admin-message-status unread"
                            : "admin-message-status read"
                        }
                      >
                        {message.status}
                      </span>

                    </td>


                    {/* ACTION */}

                    <td>

                      <div className="admin-message-actions">

                        <button
                          className="admin-message-view-btn"
                          onClick={() =>
                            viewMessage(message)
                          }
                        >
                          View
                        </button>

                        <button
                          className="admin-message-read-btn"
                          onClick={() =>
                            toggleReadStatus(
                              message.id
                            )
                          }
                        >
                          {message.status === "Read"
                            ? "Unread"
                            : "Read"}
                        </button>

                        <button
                          className="admin-message-delete-btn"
                          onClick={() =>
                            deleteMessage(message.id)
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
                    className="admin-messages-empty"
                  >
                    <div>
                      <span>💬</span>

                      <h3>
                        No messages found
                      </h3>

                      <p>
                        Try changing your search
                        or filter.
                      </p>
                    </div>
                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>


      {/* =========================
          MESSAGE MODAL
      ========================= */}

      {selectedMessage && (

        <div className="admin-message-modal-overlay">

          <div className="admin-message-modal">

            <div className="admin-message-modal-header">

              <div>

                <span>
                  💬
                </span>

                <div>
                  <h2>
                    {selectedMessage.subject}
                  </h2>

                  <p>
                    Message details
                  </p>
                </div>

              </div>

              <button
                onClick={closeMessage}
                className="admin-message-modal-close"
              >
                ✕
              </button>

            </div>


            <div className="admin-message-modal-body">

              <div className="admin-message-modal-user">

                <div className="admin-message-modal-avatar">
                  {selectedMessage.role ===
                  "Service Provider"
                    ? "🧑‍🔧"
                    : "👤"}
                </div>

                <div>
                  <strong>
                    {selectedMessage.name}
                  </strong>

                  <span>
                    {selectedMessage.email}
                  </span>

                  <small>
                    {selectedMessage.role}
                  </small>
                </div>

              </div>


              <div className="admin-message-modal-info">

                <span>
                  📅 {selectedMessage.date}
                </span>

                <span>
                  🕐 {selectedMessage.time}
                </span>

              </div>


              <div className="admin-message-content">

                <p>
                  {selectedMessage.message}
                </p>

              </div>

            </div>


            <div className="admin-message-modal-footer">

              <button
                className="admin-message-modal-delete"
                onClick={() =>
                  deleteMessage(selectedMessage.id)
                }
              >
                🗑️ Delete
              </button>

              <button
                className="admin-message-modal-close-btn"
                onClick={closeMessage}
              >
                Close
              </button>

            </div>

          </div>

        </div>

      )}

    </div>
  );
}

export default AdminMessages;