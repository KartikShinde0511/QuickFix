import React, { useState } from "react";
import "../../CSS/ManageProviders.css";

function ManageProviders() {
  const [providers, setProviders] = useState([
    {
      id: 1,
      name: "Raj Electric Services",
      owner: "Raj Kumar",
      email: "raj@gmail.com",
      phone: "9876543201",
      service: "Electrician",
      bookings: 18,
      rating: 4.8,
      status: "Active",
    },
    {
      id: 2,
      name: "Sharma Plumbing",
      owner: "Amit Sharma",
      email: "amit@gmail.com",
      phone: "9876543202",
      service: "Plumber",
      bookings: 12,
      rating: 4.6,
      status: "Active",
    },
    {
      id: 3,
      name: "QuickFix Cleaning",
      owner: "Priya Patil",
      email: "priya@gmail.com",
      phone: "9876543203",
      service: "Cleaning",
      bookings: 9,
      rating: 4.4,
      status: "Blocked",
    },
    {
      id: 4,
      name: "CoolCare AC Services",
      owner: "Vikas Verma",
      email: "vikas@gmail.com",
      phone: "9876543204",
      service: "AC Repair",
      bookings: 21,
      rating: 4.9,
      status: "Active",
    },
    {
      id: 5,
      name: "HomeFix Carpentry",
      owner: "Rohan Mehta",
      email: "rohan@gmail.com",
      phone: "9876543205",
      service: "Carpenter",
      bookings: 7,
      rating: 4.2,
      status: "Pending",
    },
    {
      id: 6,
      name: "Bright Paint Solutions",
      owner: "Sameer Shah",
      email: "sameer@gmail.com",
      phone: "9876543206",
      service: "Painter",
      bookings: 14,
      rating: 4.7,
      status: "Active",
    },
  ]);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  // =========================
  // CHANGE PROVIDER STATUS
  // =========================

  const changeStatus = (id) => {
    setProviders((currentProviders) =>
      currentProviders.map((provider) => {
        if (provider.id !== id) return provider;

        let newStatus = "Active";

        if (provider.status === "Active") {
          newStatus = "Blocked";
        } else {
          newStatus = "Active";
        }

        return {
          ...provider,
          status: newStatus,
        };
      })
    );
  };

  // =========================
  // DELETE PROVIDER
  // =========================

  const deleteProvider = (id) => {
    const provider = providers.find((item) => item.id === id);

    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${provider.name}?`
    );

    if (!confirmDelete) return;

    setProviders((currentProviders) =>
      currentProviders.filter(
        (provider) => provider.id !== id
      )
    );
  };

  // =========================
  // VIEW PROVIDER
  // =========================

  const viewProvider = (provider) => {
    alert(
      `Provider Details\n\n` +
        `Business: ${provider.name}\n` +
        `Owner: ${provider.owner}\n` +
        `Email: ${provider.email}\n` +
        `Phone: ${provider.phone}\n` +
        `Service: ${provider.service}\n` +
        `Bookings: ${provider.bookings}\n` +
        `Rating: ${provider.rating}\n` +
        `Status: ${provider.status}`
    );
  };

  // =========================
  // FILTER PROVIDERS
  // =========================

  const filteredProviders = providers.filter((provider) => {
    const searchText =
      `${provider.name} ${provider.owner} ${provider.email} ${provider.phone} ${provider.service}`
        .toLowerCase();

    const matchesSearch =
      searchText.includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" ||
      provider.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // =========================
  // STATISTICS
  // =========================

  const totalProviders = providers.length;

  const activeProviders = providers.filter(
    (provider) => provider.status === "Active"
  ).length;

  const blockedProviders = providers.filter(
    (provider) => provider.status === "Blocked"
  ).length;

  const pendingProviders = providers.filter(
    (provider) => provider.status === "Pending"
  ).length;

  return (
    <div className="manage-providers">

      {/* ================= HEADER ================= */}

      <div className="manage-providers-header">

        <div>
          <span className="manage-providers-label">
            ADMIN PANEL
          </span>

          <h1>Manage Providers</h1>

          <p>
            View, monitor and manage all QuickFix service providers.
          </p>
        </div>

        <div className="manage-providers-header-icon">
          🛠️
        </div>

      </div>


      {/* ================= STATISTICS ================= */}

      <div className="manage-providers-stats">

        <div className="manage-providers-stat-card">
          <div className="manage-providers-stat-icon">
            👨‍🔧
          </div>

          <div>
            <span>Total Providers</span>
            <strong>{totalProviders}</strong>
          </div>
        </div>


        <div className="manage-providers-stat-card">
          <div className="manage-providers-stat-icon active-icon">
            ✓
          </div>

          <div>
            <span>Active Providers</span>
            <strong>{activeProviders}</strong>
          </div>
        </div>


        <div className="manage-providers-stat-card">
          <div className="manage-providers-stat-icon pending-icon">
            ⏳
          </div>

          <div>
            <span>Pending</span>
            <strong>{pendingProviders}</strong>
          </div>
        </div>


        <div className="manage-providers-stat-card">
          <div className="manage-providers-stat-icon blocked-icon">
            !
          </div>

          <div>
            <span>Blocked</span>
            <strong>{blockedProviders}</strong>
          </div>
        </div>

      </div>


      {/* ================= MAIN CARD ================= */}

      <div className="manage-providers-card">

        <div className="manage-providers-card-header">

          <div>
            <h2>All Service Providers</h2>

            <p>
              Registered professionals on QuickFix
            </p>
          </div>

          <button
            className="manage-providers-refresh-btn"
            onClick={() => {
              setSearch("");
              setStatusFilter("All");
            }}
          >
            🔄 Reset
          </button>

        </div>


        {/* ================= FILTERS ================= */}

        <div className="manage-providers-filters">

          <div className="manage-providers-search">

            <span>🔍</span>

            <input
              type="text"
              placeholder="Search provider, owner, service..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
            />

          </div>


          <select
            value={statusFilter}
            onChange={(e) =>
              setStatusFilter(e.target.value)
            }
            className="manage-providers-filter-select"
          >
            <option value="All">All Status</option>
            <option value="Active">Active</option>
            <option value="Pending">Pending</option>
            <option value="Blocked">Blocked</option>
          </select>

        </div>


        {/* ================= TABLE ================= */}

        <div className="manage-providers-table-wrapper">

          <table className="manage-providers-table">

            <thead>

              <tr>
                <th>#</th>
                <th>Provider</th>
                <th>Contact</th>
                <th>Service</th>
                <th>Bookings</th>
                <th>Rating</th>
                <th>Status</th>
                <th>Action</th>
              </tr>

            </thead>


            <tbody>

              {filteredProviders.length > 0 ? (

                filteredProviders.map((provider) => (

                  <tr key={provider.id}>

                    {/* ID */}

                    <td className="provider-id">
                      {provider.id}
                    </td>


                    {/* PROVIDER */}

                    <td>

                      <div className="manage-provider-user">

                        <div className="manage-provider-avatar">
                          🧑‍🔧
                        </div>

                        <div>
                          <strong>
                            {provider.name}
                          </strong>

                          <small>
                            {provider.owner}
                          </small>
                        </div>

                      </div>

                    </td>


                    {/* CONTACT */}

                    <td>

                      <div className="manage-provider-contact">

                        <span>
                          {provider.email}
                        </span>

                        <small>
                          {provider.phone}
                        </small>

                      </div>

                    </td>


                    {/* SERVICE */}

                    <td>

                      <span className="manage-provider-service">
                        {provider.service}
                      </span>

                    </td>


                    {/* BOOKINGS */}

                    <td>

                      <strong className="manage-provider-bookings">
                        {provider.bookings}
                      </strong>

                    </td>


                    {/* RATING */}

                    <td>

                      <span className="manage-provider-rating">
                        ⭐ {provider.rating}
                      </span>

                    </td>


                    {/* STATUS */}

                    <td>

                      <span
                        className={
                          provider.status === "Active"
                            ? "manage-provider-status active"
                            : provider.status === "Blocked"
                            ? "manage-provider-status blocked"
                            : "manage-provider-status pending"
                        }
                      >
                        {provider.status}
                      </span>

                    </td>


                    {/* ACTIONS */}

                    <td>

                      <div className="manage-provider-actions">

                        <button
                          className="manage-provider-view-btn"
                          onClick={() =>
                            viewProvider(provider)
                          }
                        >
                          View
                        </button>


                        <button
                          className={
                            provider.status === "Active"
                              ? "manage-provider-action-btn block"
                              : "manage-provider-action-btn activate"
                          }
                          onClick={() =>
                            changeStatus(provider.id)
                          }
                        >
                          {provider.status === "Active"
                            ? "Block"
                            : "Activate"}
                        </button>


                        <button
                          className="manage-provider-delete-btn"
                          onClick={() =>
                            deleteProvider(provider.id)
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
                    className="manage-providers-empty"
                  >

                    <div>
                      🔍
                    </div>

                    <h3>
                      No providers found
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


        {/* ================= FOOTER ================= */}

        <div className="manage-providers-footer">

          <span>
            Showing{" "}
            <strong>
              {filteredProviders.length}
            </strong>{" "}
            of{" "}
            <strong>
              {providers.length}
            </strong>{" "}
            providers
          </span>

          <span>
            QuickFix Provider Management
          </span>

        </div>

      </div>

    </div>
  );
}

export default ManageProviders;