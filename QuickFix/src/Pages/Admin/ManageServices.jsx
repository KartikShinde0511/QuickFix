import React, { useState } from "react";
import "../../CSS/ManageServices.css";

function ManageServices() {
  const [services, setServices] = useState([
    {
      id: 1,
      name: "AC Repair",
      category: "Home Appliance",
      provider: "Rahul Services",
      price: 799,
      bookings: 24,
      status: "Active",
    },
    {
      id: 2,
      name: "Plumbing",
      category: "Home Repair",
      provider: "Amit Plumbing",
      price: 599,
      bookings: 18,
      status: "Active",
    },
    {
      id: 3,
      name: "Electrician",
      category: "Electrical",
      provider: "PowerFix Services",
      price: 499,
      bookings: 31,
      status: "Active",
    },
    {
      id: 4,
      name: "Washing Machine Repair",
      category: "Home Appliance",
      provider: "Quick Repair",
      price: 699,
      bookings: 12,
      status: "Inactive",
    },
    {
      id: 5,
      name: "Carpenter",
      category: "Home Repair",
      provider: "WoodCraft Services",
      price: 899,
      bookings: 9,
      status: "Active",
    },
    {
      id: 6,
      name: "Painting",
      category: "Home Improvement",
      provider: "ColorPro",
      price: 1499,
      bookings: 7,
      status: "Inactive",
    },
  ]);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  // =========================
  // TOGGLE SERVICE STATUS
  // =========================

  const toggleStatus = (id) => {
    setServices((currentServices) =>
      currentServices.map((service) =>
        service.id === id
          ? {
              ...service,
              status:
                service.status === "Active"
                  ? "Inactive"
                  : "Active",
            }
          : service
      )
    );
  };

  // =========================
  // DELETE SERVICE
  // =========================

  const deleteService = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this service?"
    );

    if (!confirmDelete) return;

    setServices((currentServices) =>
      currentServices.filter((service) => service.id !== id)
    );
  };

  // =========================
  // VIEW SERVICE
  // =========================

  const viewService = (service) => {
    alert(
      `Service: ${service.name}\nCategory: ${service.category}\nProvider: ${service.provider}\nPrice: ₹${service.price}\nBookings: ${service.bookings}`
    );
  };

  // =========================
  // REFRESH
  // =========================

  const refreshServices = () => {
    setSearch("");
    setStatusFilter("All");
  };

  // =========================
  // FILTER SERVICES
  // =========================

  const filteredServices = services.filter((service) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      service.name.toLowerCase().includes(searchText) ||
      service.category.toLowerCase().includes(searchText) ||
      service.provider.toLowerCase().includes(searchText);

    const matchesStatus =
      statusFilter === "All" ||
      service.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  // =========================
  // STATISTICS
  // =========================

  const totalServices = services.length;

  const activeServices = services.filter(
    (service) => service.status === "Active"
  ).length;

  const inactiveServices = services.filter(
    (service) => service.status === "Inactive"
  ).length;

  return (
    <div className="manage-services">

      {/* =========================
          HEADER
      ========================= */}

      <div className="manage-services-header">

        <div>
          <p className="manage-services-label">
            ADMIN PANEL
          </p>

          <h1>Manage Services</h1>

          <p>
            View and manage all services available on QuickFix.
          </p>
        </div>

        <div className="manage-services-count">

          <span>🛠️</span>

          <div>
            <small>Total Services</small>
            <strong>{totalServices}</strong>
          </div>

        </div>

      </div>


      {/* =========================
          STATISTICS
      ========================= */}

      <div className="manage-services-stats">

        <div className="manage-services-stat-card">

          <div className="manage-services-stat-icon">
            🛠️
          </div>

          <div>
            <span>TOTAL SERVICES</span>
            <strong>{totalServices}</strong>
          </div>

        </div>


        <div className="manage-services-stat-card">

          <div className="manage-services-stat-icon active-icon">
            ✅
          </div>

          <div>
            <span>ACTIVE SERVICES</span>
            <strong className="active-number">
              {activeServices}
            </strong>
          </div>

        </div>


        <div className="manage-services-stat-card">

          <div className="manage-services-stat-icon inactive-icon">
            ⏸️
          </div>

          <div>
            <span>INACTIVE SERVICES</span>
            <strong className="inactive-number">
              {inactiveServices}
            </strong>
          </div>

        </div>

      </div>


      {/* =========================
          SERVICES CARD
      ========================= */}

      <div className="manage-services-card">

        <div className="manage-services-card-header">

          <div>
            <h2>All Services</h2>

            <p>
              Registered services available on QuickFix
            </p>
          </div>

          <button
            className="manage-services-refresh-btn"
            onClick={refreshServices}
          >
            🔄 Refresh
          </button>

        </div>


        {/* =========================
            SEARCH + FILTER
        ========================= */}

        <div className="manage-services-controls">

          <div className="manage-services-search">

            <span>🔍</span>

            <input
              type="text"
              placeholder="Search by service, category or provider..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

          </div>


          <select
            className="manage-services-filter"
            value={statusFilter}
            onChange={(e) =>
              setStatusFilter(e.target.value)
            }
          >
            <option value="All">All Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>

        </div>


        {/* =========================
            TABLE
        ========================= */}

        <div className="manage-services-table-wrapper">

          <table className="manage-services-table">

            <thead>
              <tr>
                <th>#</th>
                <th>Service</th>
                <th>Category</th>
                <th>Provider</th>
                <th>Price</th>
                <th>Bookings</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>


            <tbody>

              {filteredServices.length > 0 ? (

                filteredServices.map((service) => (

                  <tr key={service.id}>

                    <td>
                      {service.id}
                    </td>


                    <td>

                      <div className="manage-services-service">

                        <div className="manage-services-avatar">
                          🛠️
                        </div>

                        <strong>
                          {service.name}
                        </strong>

                      </div>

                    </td>


                    <td>
                      <span className="manage-services-category">
                        {service.category}
                      </span>
                    </td>


                    <td>
                      {service.provider}
                    </td>


                    <td>
                      <strong className="manage-services-price">
                        ₹{service.price}
                      </strong>
                    </td>


                    <td>
                      <span className="manage-services-bookings">
                        {service.bookings}
                      </span>
                    </td>


                    <td>

                      <span
                        className={
                          service.status === "Active"
                            ? "manage-services-status active"
                            : "manage-services-status inactive"
                        }
                      >
                        {service.status}
                      </span>

                    </td>


                    <td>

                      <div className="manage-services-actions">

                        <button
                          className="manage-services-view-btn"
                          onClick={() =>
                            viewService(service)
                          }
                        >
                          View
                        </button>


                        <button
                          className={
                            service.status === "Active"
                              ? "manage-services-status-btn deactivate"
                              : "manage-services-status-btn activate"
                          }
                          onClick={() =>
                            toggleStatus(service.id)
                          }
                        >
                          {service.status === "Active"
                            ? "Deactivate"
                            : "Activate"}
                        </button>


                        <button
                          className="manage-services-delete-btn"
                          onClick={() =>
                            deleteService(service.id)
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
                    className="manage-services-empty"
                  >
                    <div>
                      <span>🔍</span>
                      <h3>No services found</h3>
                      <p>
                        Try changing your search or filter.
                      </p>
                    </div>
                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default ManageServices;