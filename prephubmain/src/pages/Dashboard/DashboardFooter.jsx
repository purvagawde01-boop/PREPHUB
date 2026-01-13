import "./DashboardFooter.css";

const DashboardFooter = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Brand Section */}
        <div className="footer-section">
          <h2>PrepHub</h2>
          <p>
            Your defence preparation partner.
            Helping aspirants stay disciplined, focused, and exam-ready.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>Dashboard</li>
            <li>Profile</li>
            <li>To-Do List</li>
            <li>Schedule Maker</li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-section">
          <h3>Resources</h3>
          <ul>
            <li>Eligibility Criteria</li>
            <li>Syllabus</li>
            <li>Previous Year Papers</li>
            <li>Mock Tests</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3>Contact</h3>
          <ul>
            <li>Email: support@prephub.in</li>
            <li>Telegram</li>
            <li>YouTube</li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} PrepHub. All rights reserved.
      </div>

    </footer>
  );
};

export default DashboardFooter;
