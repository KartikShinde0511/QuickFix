import React, { useState } from "react";
import "../../CSS/ProviderEarnings.css";

function ProviderEarnings() {
  const [showAll, setShowAll] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [selectedPeriod, setSelectedPeriod] = useState("This Month");
  const [selectedTransaction, setSelectedTransaction] = useState(null);
  const [showReportMessage, setShowReportMessage] = useState(false);

  const transactions = [
    {
      id: "QF-1025",
      customer: "Rahul Sharma",
      service: "AC Repair",
      date: "28 Jun 2026",
      amount: 1800,
      status: "Paid",
    },
    {
      id: "QF-1024",
      customer: "Priya Mehta",
      service: "Plumbing",
      date: "27 Jun 2026",
      amount: 1200,
      status: "Paid",
    },
    {
      id: "QF-1023",
      customer: "Amit Patil",
      service: "Electrical Repair",
      date: "25 Jun 2026",
      amount: 2400,
      status: "Pending",
    },
    {
      id: "QF-1022",
      customer: "Sneha Joshi",
      service: "Washing Machine Repair",
      date: "23 Jun 2026",
      amount: 1600,
      status: "Paid",
    },
    {
      id: "QF-1021",
      customer: "Vishal Shah",
      service: "Fan Installation",
      date: "20 Jun 2026",
      amount: 900,
      status: "Paid",
    },
    {
      id: "QF-1020",
      customer: "Neha Kulkarni",
      service: "AC Service",
      date: "18 Jun 2026",
      amount: 2100,
      status: "Paid",
    },
  ];

  const displayedTransactions = showAll
    ? transactions
    : transactions.slice(0, 4);

  const handleDownloadReport = () => {
    const csv = [
      "Transaction ID,Customer,Service,Date,Amount,Status",
      ...transactions.map(
        (item) =>
          `${item.id},${item.customer},${item.service},${item.date},${item.amount},${item.status}`
      ),
    ].join("\n");

    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "QuickFix-Earnings-Report.csv";
    link.click();

    URL.revokeObjectURL(url);

    setShowReportMessage(true);

    setTimeout(() => {
      setShowReportMessage(false);
    }, 2500);
  };

  return (
    <div className="provider-earnings-page">

      {/* ================= HEADER ================= */}

      <div className="provider-earnings-header">

        <div>
          <span className="provider-earnings-label">
            FINANCIAL OVERVIEW
          </span>

          <h1>Earnings</h1>

          <p>
            Monitor your income, payments and service performance.
          </p>
        </div>

        <div className="provider-earnings-header-actions">

          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="provider-period-select"
          >
            <option>This Month</option>
            <option>Last Month</option>
            <option>Last 3 Months</option>
            <option>This Year</option>
          </select>

          <button
            className="provider-report-btn"
            onClick={handleDownloadReport}
          >
            ↓ Download Report
          </button>

        </div>

      </div>


      {/* ================= STAT CARDS ================= */}

      <div className="provider-earning-stats">

        <div className="provider-earning-card">
          <div className="provider-earning-icon">
            ₹
          </div>

          <div>
            <p>Total Earnings</p>

            <h2>₹42,100</h2>

            <span className="earning-positive">
              ↑ 12.5% from last month
            </span>
          </div>
        </div>


        <div className="provider-earning-card">
          <div className="provider-earning-icon">
            ✓
          </div>

          <div>
            <p>Completed Services</p>

            <h2>31</h2>

            <span className="earning-positive">
              ↑ 8.2% from last month
            </span>
          </div>
        </div>


        <div className="provider-earning-card">
          <div className="provider-earning-icon">
            ◷
          </div>

          <div>
            <p>Pending Payments</p>

            <h2>₹4,800</h2>

            <span className="earning-pending">
              3 payments awaiting
            </span>
          </div>
        </div>

      </div>


      {/* ================= MAIN CONTENT ================= */}

      <div className="provider-earnings-grid">

        {/* ================= EARNINGS TREND ================= */}

        <div className="provider-earnings-panel">

          <div className="provider-earnings-panel-header">

            <div>
              <h2>Earnings Trend</h2>

              <p>
                Your earnings performance for {selectedPeriod.toLowerCase()}.
              </p>
            </div>

            <span className="earnings-total-badge">
              ₹42,100
            </span>

          </div>


          <div className="earnings-chart">

            <div className="chart-y-labels">
              <span>₹40k</span>
              <span>₹30k</span>
              <span>₹20k</span>
              <span>₹10k</span>
              <span>₹0</span>
            </div>

            <div className="chart-area">

              <div className="chart-grid-line line-1"></div>
              <div className="chart-grid-line line-2"></div>
              <div className="chart-grid-line line-3"></div>
              <div className="chart-grid-line line-4"></div>
              <div className="chart-grid-line line-5"></div>

              <div className="chart-bars">

                <div className="chart-column">
                  <div
                    className="chart-bar"
                    style={{ height: "40%" }}
                    title="January ₹18,500"
                  ></div>
                  <span>Jan</span>
                </div>

                <div className="chart-column">
                  <div
                    className="chart-bar"
                    style={{ height: "52%" }}
                    title="February ₹22,300"
                  ></div>
                  <span>Feb</span>
                </div>

                <div className="chart-column">
                  <div
                    className="chart-bar"
                    style={{ height: "65%" }}
                    title="March ₹27,800"
                  ></div>
                  <span>Mar</span>
                </div>

                <div className="chart-column">
                  <div
                    className="chart-bar"
                    style={{ height: "73%" }}
                    title="April ₹31,200"
                  ></div>
                  <span>Apr</span>
                </div>

                <div className="chart-column">
                  <div
                    className="chart-bar"
                    style={{ height: "84%" }}
                    title="May ₹35,600"
                  ></div>
                  <span>May</span>
                </div>

                <div className="chart-column">
                  <div
                    className="chart-bar chart-bar-active"
                    style={{ height: "100%" }}
                    title="June ₹42,100"
                  ></div>
                  <span>Jun</span>
                </div>

              </div>

            </div>

          </div>

        </div>


        {/* ================= PAYMENT SUMMARY ================= */}

        <div className="provider-earnings-panel payment-summary-panel">

          <div className="provider-earnings-panel-header">

            <div>
              <h2>Payment Summary</h2>

              <p>Current payment status</p>
            </div>

          </div>


          <div className="payment-breakdown">

            <div className="payment-breakdown-row">

              <div className="payment-breakdown-info">
                <span className="payment-dot paid-dot"></span>

                <span>Paid</span>
              </div>

              <strong>₹37,300</strong>

            </div>


            <div className="payment-breakdown-row">

              <div className="payment-breakdown-info">
                <span className="payment-dot pending-dot"></span>

                <span>Pending</span>
              </div>

              <strong>₹4,800</strong>

            </div>


            <div className="payment-breakdown-bar">

              <div
                className="paid-part"
                style={{ width: "89%" }}
              ></div>

              <div
                className="pending-part"
                style={{ width: "11%" }}
              ></div>

            </div>

          </div>


          <div className="next-payment-box">

            <div>
              <span>Next Payment</span>

              <strong>₹2,400</strong>
            </div>

            <small>
              Expected in 3 days
            </small>

          </div>


          <button
            className="payment-settings-btn"
            onClick={() => setShowSettings(!showSettings)}
          >
            Payment Settings →
          </button>


          {showSettings && (

            <div className="payment-settings-box">

              <h3>Payment Settings</h3>

              <p>
                Manage your payment preferences.
              </p>

              <div className="payment-method">
                <span>🏦</span>

                <div>
                  <strong>Bank Account</strong>
                  <small>XXXX XXXX 4582</small>
                </div>

                <span className="verified-text">
                  Verified
                </span>
              </div>

            </div>

          )}

        </div>

      </div>


      {/* ================= PERFORMANCE ================= */}

      <div className="provider-performance-panel">

        <div className="provider-performance-header">

          <div>
            <span className="performance-label">
              SERVICE QUALITY
            </span>

            <h2>Performance Overview</h2>

            <p>
              Keep your service quality high to attract more customers.
            </p>
          </div>

          <div className="performance-score">
            <strong>4.8</strong>
            <span>★</span>
            <small>Excellent</small>
          </div>

        </div>


        <div className="performance-grid">

          <div className="performance-metric">

            <div className="metric-top">
              <span>Customer Rating</span>
              <strong>4.8 / 5</strong>
            </div>

            <div className="metric-track">
              <div
                className="metric-fill"
                style={{ width: "96%" }}
              ></div>
            </div>

            <small>
              Better than 92% of providers
            </small>

          </div>


          <div className="performance-metric">

            <div className="metric-top">
              <span>Completion Rate</span>
              <strong>92%</strong>
            </div>

            <div className="metric-track">
              <div
                className="metric-fill"
                style={{ width: "92%" }}
              ></div>
            </div>

            <small>
              31 of 34 bookings completed
            </small>

          </div>


          <div className="performance-metric">

            <div className="metric-top">
              <span>Customer Satisfaction</span>
              <strong>95%</strong>
            </div>

            <div className="metric-track">
              <div
                className="metric-fill"
                style={{ width: "95%" }}
              ></div>
            </div>

            <small>
              Excellent customer feedback
            </small>

          </div>

        </div>

      </div>


      {/* ================= TRANSACTIONS ================= */}

      <div className="provider-transactions-panel">

        <div className="provider-transactions-header">

          <div>
            <span className="provider-earnings-label">
              RECENT ACTIVITY
            </span>

            <h2>Recent Transactions</h2>

            <p>
              Your latest service payments.
            </p>
          </div>

          <button
            className="provider-view-all-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less ↑" : "View All →"}
          </button>

        </div>


        <div className="transaction-table">

          <div className="transaction-table-header">
            <span>Transaction</span>
            <span>Customer</span>
            <span>Service</span>
            <span>Date</span>
            <span>Amount</span>
            <span>Status</span>
            <span></span>
          </div>


          {displayedTransactions.map((transaction) => (

            <div
              className="transaction-row"
              key={transaction.id}
            >

              <strong>
                {transaction.id}
              </strong>

              <span>
                {transaction.customer}
              </span>

              <span>
                {transaction.service}
              </span>

              <span>
                {transaction.date}
              </span>

              <strong>
                ₹{transaction.amount.toLocaleString()}
              </strong>

              <span
                className={
                  transaction.status === "Paid"
                    ? "transaction-status paid"
                    : "transaction-status pending"
                }
              >
                {transaction.status}
              </span>

              <button
                className="transaction-view-btn"
                onClick={() =>
                  setSelectedTransaction(transaction)
                }
              >
                View
              </button>

            </div>

          ))}

        </div>

      </div>


      {/* ================= TRANSACTION MODAL ================= */}

      {selectedTransaction && (

        <div className="transaction-modal-overlay">

          <div className="transaction-modal">

            <button
              className="transaction-modal-close"
              onClick={() => setSelectedTransaction(null)}
            >
              ×
            </button>

            <span className="modal-label">
              TRANSACTION DETAILS
            </span>

            <h2>
              {selectedTransaction.id}
            </h2>

            <div className="modal-details">

              <div>
                <span>Customer</span>
                <strong>
                  {selectedTransaction.customer}
                </strong>
              </div>

              <div>
                <span>Service</span>
                <strong>
                  {selectedTransaction.service}
                </strong>
              </div>

              <div>
                <span>Date</span>
                <strong>
                  {selectedTransaction.date}
                </strong>
              </div>

              <div>
                <span>Amount</span>
                <strong>
                  ₹{selectedTransaction.amount.toLocaleString()}
                </strong>
              </div>

              <div>
                <span>Status</span>
                <strong>
                  {selectedTransaction.status}
                </strong>
              </div>

            </div>

            <button
              className="modal-done-btn"
              onClick={() => setSelectedTransaction(null)}
            >
              Done
            </button>

          </div>

        </div>

      )}


      {/* ================= REPORT MESSAGE ================= */}

      {showReportMessage && (

        <div className="provider-report-toast">

          <span>✓</span>

          <div>
            <strong>Report Downloaded</strong>

            <p>
              Your earnings report is ready.
            </p>
          </div>

        </div>

      )}

    </div>
  );
}

export default ProviderEarnings;