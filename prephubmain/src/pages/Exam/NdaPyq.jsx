import React from "react";
import DashboardFooter from "../Dashboard/DashboardFooter";
import DashboardNavbar from "../Dashboard/DashboardNavbar";
import "./NdaPyq.css";

const NdaPyq = () => {
  return (
    <>
      <DashboardNavbar />

      <div className="nda-papers-page">
        <div className="nda-papers-container">

          {/* Header */}
          <div className="papers-header">
            <h1>NDA Previous Year Question Papers</h1>
            <p>Practice previous year papers to understand the exam pattern</p>
          </div>

          {/* Paper I */}
          <section className="papers-section">
            <h2>Paper I – Mathematics</h2>

            <div className="papers-grid">
              <div className="paper-card">NDA Maths – 2023</div>
              <div className="paper-card">NDA Maths – 2022</div>
              <div className="paper-card">NDA Maths – 2021</div>
              <div className="paper-card">NDA Maths – 2020</div>
            </div>
          </section>

          {/* Paper II */}
          <section className="papers-section">
            <h2>Paper II – General Ability Test (GAT)</h2>

            <div className="papers-grid">
              <div className="paper-card">NDA GAT – 2023</div>
              <div className="paper-card">NDA GAT – 2022</div>
              <div className="paper-card">NDA GAT – 2021</div>
              <div className="paper-card">NDA GAT – 2020</div>
            </div>
          </section>

        </div>
      </div>

      <DashboardFooter />
    </>
  );
};

export default NdaPyq;
