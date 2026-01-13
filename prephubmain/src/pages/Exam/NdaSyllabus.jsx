import React from "react";
import DashboardFooter from "../Dashboard/DashboardFooter";
import DashboardNavbar from "../Dashboard/DashboardNavbar";
import "./NdaSyllabus.css";

const NdaSyllabus = () => {
  return (
    <>
      <DashboardNavbar />

      <div className="syllabus-page">
        <div className="syllabus-container">

          {/* Header */}
          <div className="syllabus-header">
            <h1>NDA Syllabus</h1>
            <p>National Defence Academy (UPSC)</p>
          </div>

          {/* Paper I */}
          <section className="syllabus-section">
            <h2>Paper I – Mathematics</h2>
            <ul>
              <li>Algebra</li>
              <li>Trigonometry</li>
              <li>Analytical Geometry</li>
              <li>Differential Calculus</li>
              <li>Integral Calculus</li>
              <li>Statistics & Probability</li>
            </ul>
          </section>

          {/* Paper II */}
          <section className="syllabus-section">
            <h2>Paper II – General Ability Test (GAT)</h2>

            <h3>English</h3>
            <ul>
              <li>Grammar & Usage</li>
              <li>Vocabulary</li>
              <li>Comprehension</li>
            </ul>

            <h3>General Knowledge</h3>
            <ul>
              <li>Physics</li>
              <li>Chemistry</li>
              <li>General Science</li>
              <li>History</li>
              <li>Geography</li>
              <li>Current Events</li>
            </ul>
          </section>

        </div>
      </div>

      <DashboardFooter />
    </>
  );
};

export default NdaSyllabus;
