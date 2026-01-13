import React from "react";
import DashboardFooter from "../Dashboard/DashboardFooter";
import DashboardNavbar from "../Dashboard/DashboardNavbar";
import './ExamPage.css';
import { useParams } from "react-router-dom";
import { getForceFromPath } from "../../utils/forceFromRoute";

const ExamPage = () => {

   const {examId}= useParams();

   const exam = examDetails[examId];
   if (!exam) {
    return <h2 style={{ padding: "40px" }}>Exam not found</h2>;
  }
    

  const selectedForce= localStorage.getItem("force") || "army";

  return (

    <>
    <DashboardNavbar 
    /*
    selectedForce={selectedForce}
    onForceChange = {(f) => localStorage.setItem("force",f)}
    */
    />

    <div className="exam-detail-page">

      {/* =========================
          1. EXAM HEADER
      ========================== */}
      <section className="exam-header">
        <h1>{exam.title}</h1>
        <p>Force: {exam.force}</p>
        <p>Level: {exam.level}</p>
      </section>

      {/* =========================
          2. TABS BAR
      ========================== */}
      <nav className="exam-tabs">
        <ul>
          <li>Overview</li>
          <li>Eligibility</li>
          <li>Syllabus</li>
          <li>Resources</li>
          <li>Mock Tests</li>
          <li>Progress</li>
        </ul>
      </nav>

      {/* =========================
          3. OVERVIEW SECTION
      ========================== */}
      <section id="overview" className="exam-section">
        <h2>Overview</h2>
        <p>{exam.overview}</p>
      </section>

         {/* =========================
          9. IMPORTANT DATES & LINKS
      ========================== */}
      <section className="exam-section">
        <h2>Important Dates & Official Links</h2>
        <ul>
          <li>Application Start Date</li>
          <li>Application End Date</li>
          <li>Exam Date</li>
          <li>Official Website (UPSC)</li>
        </ul>
      </section>

      {/* =========================
          4. ELIGIBILITY CRITERIA
      ========================== */}
      <section id="eligibility" className="exam-section">
        <h2>Eligibility Criteria</h2>
        <ul>
       
        </ul>
      </section>


      {/* =========================
          6. PREPARATION RESOURCES
      ========================== */}
      <section id="resources" className="exam-section">
        <h2>Preparation Resources</h2>

        <div className="resource-grid">
         <button className="resource-card" onClick={() => navigate('/exam/${examId}/syllabus')}>Syllabus</button>
         <button className="resource-card" onClick={() => navigate("/NdaBook")}>Notes</button>
         <button className="resource-card" onClick={() => navigate("/NdaVideo")}>Video</button>
         <button className="resource-card" onClick={() => navigate("/NdaPyq")}>Previous Year Papers</button>
         <button className="resource-card" onClick={() => navigate("/NdaMock")}>Mock Test</button>
        </div>
      </section>

      {/* =========================
          7. MOCK TESTS
      ========================== */}
      <section id="mock-tests" className="exam-section">
        <h2>Mock Tests</h2>
        <p>Available mock tests will be displayed here.</p>
      </section>

      {/* =========================
          8. PROGRESS TRACKER
      ========================== */}
      <section id="progress" className="exam-section">
        <h2>Progress Tracker</h2>
        <ul>
          <li>Mock Tests Attempted</li>
          <li>Best Score</li>
          <li>Last Attempt Date</li>
        </ul>
      </section>

    </div>
        <DashboardFooter />

    </>
  );
};


export default ExamPage;
