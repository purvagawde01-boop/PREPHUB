import React from "react";
import DashboardFooter from "../Dashboard/DashboardFooter";
import DashboardNavbar from "../Dashboard/DashboardNavbar";
import "./NdaBook.css";

const NdaBook = () => {
  return (
    <>
      <DashboardNavbar />

      <div className="nda-notes-page">
        <div className="nda-notes-container">

          {/* Header */}
          <div className="notes-header">
            <h1>NDA Reference Books</h1>
            <p>Recommended textbooks for NDA examination preparation</p>
          </div>

          {/* Mathematics Books */}
          <section className="notes-section">
            <h2>Mathematics (Paper I)</h2>

            <div className="book-grid">
              <div className="book-card">
                <h3>Mathematics for NDA</h3>
                <p>R.S. Aggarwal</p>
              </div>

              <div className="book-card">
                <h3>Pathfinder NDA Mathematics</h3>
                <p>Arihant Publications</p>
              </div>

              <div className="book-card">
                <h3>NDA Mathematics Guide</h3>
                <p>Arihant Experts</p>
              </div>
            </div>
          </section>

          {/* GAT Books */}
          <section className="notes-section">
            <h2>General Ability Test (Paper II)</h2>

            <h3>English</h3>
            <div className="book-grid">
              <div className="book-card">
                <h3>Objective General English</h3>
                <p>S.P. Bakshi</p>
              </div>
            </div>

            <h3>General Knowledge</h3>
            <div className="book-grid">
              <div className="book-card">
                <h3>Lucent’s General Knowledge</h3>
                <p>Lucent Publications</p>
              </div>

              <div className="book-card">
                <h3>NCERT (Class 6–10)</h3>
                <p>NCERT</p>
              </div>
            </div>
          </section>

        </div>
      </div>
      <DashboardFooter />
    </>
  );
};

export default NdaBook;
