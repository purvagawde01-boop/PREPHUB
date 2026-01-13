import React from "react"; 
import DashboardFooter from "../Dashboard/DashboardFooter";
import DashboardNavbar from "../Dashboard/DashboardNavbar";
import "./NdaMock.css";

const NdaMock = () => {
  return (
    <>
      <DashboardNavbar />

      <div className="nda-mock-page">
        <div className="nda-mock-container">

          {/* Header */}
          <div className="mock-header">
            <h1>NDA Mock Tests</h1>
            <p>Practice full-length and subject-wise mock tests for NDA</p>
          </div>

          {/* Mock Test Summary */}
          <section className="mock-summary">
            <div className="summary-card">
              <h3>Total Mock Tests</h3>
              <p>10</p>
            </div>

            <div className="summary-card">
              <h3>Attempted</h3>
              <p>3</p>
            </div>

            <div className="summary-card">
              <h3>Best Score</h3>
              <p>320</p>
            </div>
          </section>

          {/* Available Mock Tests */}
          <section className="mock-tests-section">
            <h2>Available Mock Tests</h2>

            <div className="mock-grid">
              <div className="mock-card">NDA Mock Test – 1</div>
              <div className="mock-card">NDA Mock Test – 2</div>
              <div className="mock-card">NDA Mock Test – 3</div>
              <div className="mock-card">NDA Mock Test – 4</div>
              <div className="mock-card">NDA Mock Test – 5</div>
            </div>
          </section>

        </div>
      </div>

      <DashboardFooter />
    </>
  );
};

export default NdaMock;
