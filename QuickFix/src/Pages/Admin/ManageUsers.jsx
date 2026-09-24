import React, { useMemo, useState } from "react";
import "../../CSS/ManageUsers.css";

function ManageUsers() {

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      phone: "9876543210",
      status: "Active",
      joined: "12 Aug 2026",
    },
    {
      id: 2,
      name: "Priya Patil",
      email: "priya@gmail.com",
      phone: "9876543211",
      status: "Active",
      joined: "18 Aug 2026",
    },
    {
      id: 3,
      name: "Amit Verma",
      email: "amit@gmail.com",
      phone: "9876543212",
      status: "Blocked",
      joined: "20 Aug 2026",
    },
    {
      id: 4,
      name: "Sneha Kulkarni",
      email: "sneha@gmail.com",
      phone: "9876543213",
      status: "Active",
      joined: "22 Aug 2026",
    },
    {
      id: 5,
      name: "Rohan Mehta",
      email: "rohan@gmail.com",
      phone: "9876543214",
      status: "Blocked",
      joined: "25 Aug 2026",
    },
    {
      id: 6,
      name: "Neha Joshi",
      email: "neha@gmail.com",
      phone: "9876543215",
      status: "Active",
      joined: "28 Aug 2026",
    },
  ]);

  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [selectedUser, setSelectedUser] = useState(null);

  // ==========================================
  // TOGGLE USER STATUS
  // ==========================================

  const toggleStatus = (id) => {

    setUsers((currentUsers) =>
      currentUsers.map((user) =>
        user.id === id
          ? {
              ...user,
              status:
                user.status === "Active"
                  ? "Blocked"
                  : "Active",
            }
          : user
      )
    );
  };

  // ==========================================
  // DELETE USER
  // ==========================================

  const deleteUser = (id) => {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (!confirmDelete) return;

    setUsers((currentUsers) =>
      currentUsers.filter((user) => user.id !== id)
    );
  };

  // ==========================================
  // REFRESH
  // ==========================================

  const refreshUsers = () => {

    setSearch("");
    setFilterStatus("All");

    alert("User list refreshed!");
  };

  // ==========================================
  // FILTER USERS
  // ==========================================

  const filteredUsers = useMemo(() => {

    return users.filter((user) => {

      const searchText = search.toLowerCase();

      const matchesSearch =
        user.name.toLowerCase().includes(searchText) ||
        user.email.toLowerCase().includes(searchText) ||
        user.phone.includes(searchText);

      const matchesStatus =
        filterStatus === "All" ||
        user.status === filterStatus;

      return matchesSearch && matchesStatus;

    });

  }, [users, search, filterStatus]);

  // ==========================================
  // STATISTICS
  // ==========================================

  const totalUsers = users.length;

  const activeUsers = users.filter(
    (user) => user.status === "Active"
  ).length;

  const blockedUsers = users.filter(
    (user) => user.status === "Blocked"
  ).length;


  return (

    <div className="manage-users">

      {/* ==========================================
          PAGE HEADER
      ========================================== */}

      <div className="manage-users-header">

        <div className="manage-users-title-section">

          <span className="manage-users-label">
            ADMIN PANEL
          </span>

          <h1>
            Manage Users
          </h1>

          <p>
            Monitor, search and manage all registered
            QuickFix customers.
          </p>

        </div>

        <div className="manage-users-count">

          <div className="manage-users-count-icon">
            👥
          </div>

          <div>
            <small>
              TOTAL USERS
            </small>

            <strong>
              {totalUsers}
            </strong>
          </div>

        </div>

      </div>


      {/* ==========================================
          STATISTICS
      ========================================== */}

      <div className="manage-users-stats">

        <div className="manage-users-stat-card">

          <div className="manage-users-stat-icon total">
            👥
          </div>

          <div>
            <span>Total Users</span>
            <strong>{totalUsers}</strong>
            <small>Registered customers</small>
          </div>

        </div>


        <div className="manage-users-stat-card">

          <div className="manage-users-stat-icon active">
            ✓
          </div>

          <div>
            <span>Active Users</span>
            <strong>{activeUsers}</strong>
            <small>Currently active</small>
          </div>

        </div>


        <div className="manage-users-stat-card">

          <div className="manage-users-stat-icon blocked">
            !
          </div>

          <div>
            <span>Blocked Users</span>
            <strong>{blockedUsers}</strong>
            <small>Restricted accounts</small>
          </div>

        </div>

      </div>


      {/* ==========================================
          USERS CARD
      ========================================== */}

      <div className="manage-users-card">

        {/* CARD HEADER */}

        <div className="manage-users-card-header">

          <div>

            <div className="manage-users-card-title-row">

              <h2>
                All Users
              </h2>

              <span className="manage-users-total-badge">
                {filteredUsers.length}
              </span>

            </div>

            <p>
              Manage registered QuickFix customers
            </p>

          </div>


          <button
            className="manage-users-refresh-btn"
            onClick={refreshUsers}
          >
            ↻
            <span>Refresh</span>
          </button>

        </div>


        {/* ==========================================
            SEARCH + FILTER
        ========================================== */}

        <div className="manage-users-toolbar">

          <div className="manage-users-search">

            <span>
              🔍
            </span>

            <input
              type="text"
              placeholder="Search by name, email or phone..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

            {search && (
              <button
                className="manage-users-clear-search"
                onClick={() => setSearch("")}
              >
                ×
              </button>
            )}

          </div>


          <select
            className="manage-users-filter"
            value={filterStatus}
            onChange={(e) =>
              setFilterStatus(e.target.value)
            }
          >

            <option value="All">
              All Status
            </option>

            <option value="Active">
              Active
            </option>

            <option value="Blocked">
              Blocked
            </option>

          </select>

        </div>


        {/* ==========================================
            TABLE
        ========================================== */}

        <div className="manage-users-table-wrapper">

          <table className="manage-users-table">

            <thead>

              <tr>

                <th>#</th>

                <th>User</th>

                <th>Email</th>

                <th>Phone</th>

                <th>Joined</th>

                <th>Status</th>

                <th>Action</th>

              </tr>

            </thead>


            <tbody>

              {filteredUsers.length > 0 ? (

                filteredUsers.map((user, index) => (

                  <tr key={user.id}>

                    {/* NUMBER */}

                    <td className="manage-users-number">
                      {String(index + 1).padStart(2, "0")}
                    </td>


                    {/* USER */}

                    <td>

                      <div className="manage-users-user">

                        <div className="manage-users-avatar">
                          {user.name.charAt(0)}
                        </div>

                        <div className="manage-users-user-info">

                          <strong>
                            {user.name}
                          </strong>

                          <small>
                            Customer ID #{user.id}
                          </small>

                        </div>

                      </div>

                    </td>


                    {/* EMAIL */}

                    <td className="manage-users-email">
                      {user.email}
                    </td>


                    {/* PHONE */}

                    <td>
                      {user.phone}
                    </td>


                    {/* JOINED */}

                    <td>
                      {user.joined}
                    </td>


                    {/* STATUS */}

                    <td>

                      <span
                        className={
                          user.status === "Active"
                            ? "manage-users-status active"
                            : "manage-users-status blocked"
                        }
                      >

                        <span className="manage-users-status-dot"></span>

                        {user.status}

                      </span>

                    </td>


                    {/* ACTIONS */}

                    <td>

                      <div className="manage-users-actions">

                        <button
                          className="manage-users-view"
                          onClick={() =>
                            setSelectedUser(user)
                          }
                        >
                          View
                        </button>


                        <button
                          className={
                            user.status === "Active"
                              ? "manage-users-action block"
                              : "manage-users-action activate"
                          }
                          onClick={() =>
                            toggleStatus(user.id)
                          }
                        >

                          {user.status === "Active"
                            ? "Block"
                            : "Activate"}

                        </button>


                        <button
                          className="manage-users-delete"
                          onClick={() =>
                            deleteUser(user.id)
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
                    colSpan="7"
                    className="manage-users-empty"
                  >

                    <div>
                      🔍
                    </div>

                    <h3>
                      No users found
                    </h3>

                    <p>
                      Try changing your search or filter.
                    </p>

                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>


      {/* ==========================================
          USER DETAILS MODAL
      ========================================== */}

      {selectedUser && (

        <div
          className="manage-users-modal-overlay"
          onClick={() => setSelectedUser(null)}
        >

          <div
            className="manage-users-modal"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="manage-users-modal-close"
              onClick={() => setSelectedUser(null)}
            >
              ×
            </button>


            <div className="manage-users-modal-avatar">
              {selectedUser.name.charAt(0)}
            </div>

            <h2>
              {selectedUser.name}
            </h2>

            <span className="manage-users-modal-role">
              QuickFix Customer
            </span>


            <div className="manage-users-modal-details">

              <div>
                <small>Email</small>
                <strong>{selectedUser.email}</strong>
              </div>

              <div>
                <small>Phone</small>
                <strong>{selectedUser.phone}</strong>
              </div>

              <div>
                <small>Joined</small>
                <strong>{selectedUser.joined}</strong>
              </div>

              <div>
                <small>Status</small>
                <strong>{selectedUser.status}</strong>
              </div>

            </div>


            <button
              className="manage-users-modal-button"
              onClick={() => setSelectedUser(null)}
            >
              Close
            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default ManageUsers;