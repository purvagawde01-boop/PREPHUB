import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <header className="home-header">
        <h1>Welcome, Cadet</h1>
        <p>Ready to get closer to your Dream Uniform?</p>
      </header>

      <main className="home-grid">
        <section className="home-card">
          <h2>Progress Tracker</h2>
          <p>Track your completion of subjects, chapters and mock tests.</p>
          <div className="home-placeholder">Progress UI coming soon</div>
        </section>

        <section className="home-card">
          <h2>Schedule Maker</h2>
          <p>Create your daily / weekly study timetable.</p>
          <div className="home-placeholder">Schedule UI coming soon</div>
        </section>

        <section className="home-card">
          <h2>To-Do List</h2>
          <p>Plan tasks like “Revise Maths”, “Solve PYQs”, etc.</p>
          <div className="home-placeholder">To-Do UI coming soon</div>
        </section>

        <section className="home-card">
          <h2>Syllabus</h2>
          <p>View syllabus for selected exams and mark topics as done.</p>
          <div className="home-placeholder">Syllabus UI coming soon</div>
        </section>

        <section className="home-card">
          <h2>Notes</h2>
          <p>Access ebooks, PDFs, and important notes.</p>
          <div className="home-placeholder">Notes UI coming soon</div>
        </section>

        <section className="home-card">
          <h2>Mock Tests</h2>
          <p>Attempt full-length and sectional mocks.</p>
          <div className="home-placeholder">Mock Test UI coming soon</div>
        </section>
      </main>
    </div>
  );
};

export default Home;
