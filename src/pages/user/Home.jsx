import { useState, useEffect } from "react";

function Dashboard() {
  // Get user data (temporary frontend logic)
  const username = localStorage.getItem("username") || "User";
  const defaultStream = localStorage.getItem("primaryStream") || "army";

  // Active stream state
  const [activeStream, setActiveStream] = useState(defaultStream);

  // Optional: sync if localStorage changes
  useEffect(() => {
    setActiveStream(defaultStream);
  }, [defaultStream]);

  return (
    <div>
      {/* SECTION 1: Welcome + Stream Context */}
      <section>
        <h2>Welcome, {username} 👋</h2>
        <p>Primary Recruitment Stream: {activeStream.toUpperCase()}</p>

        <div>
          <button onClick={() => setActiveStream("army")}>
            Army
          </button>
          <button onClick={() => setActiveStream("navy")}>
            Navy
          </button>
          <button onClick={() => setActiveStream("airforce")}>
            Air Force
          </button>
          <button onClick={() => setActiveStream("paramilitary")}>
            Paramilitary
          </button>
        </div>
      </section>

      <hr />

      {/* SECTION 2: Motivational Quote */}
      <section>
        <h3>Motivation</h3>
        <p>“Discipline today builds victory tomorrow.”</p>
      </section>

      <hr />

      {/* SECTION 3: Current News & Updates */}
      <section>
        <h3>Current Updates ({activeStream.toUpperCase()})</h3>
        <ul>
          <li>Exam notifications will appear here</li>
          <li>Application deadlines will be shown</li>
        </ul>
      </section>

      <hr />

      {/* SECTION 4: Upcoming Exam Dates */}
      <section>
        <h3>Upcoming Exam Dates</h3>
        <ul>
          <li>Exam Date 1</li>
          <li>Exam Date 2</li>
        </ul>
      </section>

      <hr />

      {/* SECTION 5: Resources (Navigation only) */}
      <section>
        <h3>Resources</h3>
        <ul>
          <li>Eligibility</li>
          <li>Syllabus</li>
          <li>Books</li>
          <li>Videos</li>
          <li>Previous Year Papers</li>
          <li>Mock Tests</li>
        </ul>
      </section>

      <hr />

      {/* SECTION 6: Productivity Snapshot */}
      <section>
        <h3>Productivity Snapshot</h3>
        <ul>
          <li>To-Do Tasks: 0</li>
          <li>Today’s Schedule: Not set</li>
          <li>Mock Test Progress: Not started</li>
        </ul>
      </section>

      <hr />

      {/* SECTION 7: Profile */}
      <section>
        <h3>Profile</h3>
        <p>View / Edit Profile | Logout</p>
      </section>
    </div>
  );
}

export default Dashboard;
