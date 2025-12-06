import React, { useState } from "react";
import "./Signup.css";
import { useNavigate, Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    dob: "",
    gender: "",
    education: "",
    examCategory: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) {
      setMessage("Name, email and password are required.");
      return;
    }

    console.log("Signup form data (frontend only):", form);

    setMessage("Signup successful! Redirecting to Login...");
    setTimeout(() => navigate("/Login"), 1200);
  };

  return (
    <div className="signup-page">
      <div className="signup-card">
        {/* LEFT PANEL */}
        <div className="signup-left">
          <div className="signup-left-header">
            <img src={logo} alt="PrepHub logo" className="signup-logo" />
            <h1>Join PrepHub</h1>
          </div>

          <p className="signup-left-subtitle">
            Your PrepAlly for defence exams. Create your account and get ready
            to earn your uniform.
          </p>

          <ul className="signup-points">
            <li>🎯 Track your progress across exams</li>
            <li>📅 Plan your study schedule smartly</li>
            <li>✅ Stay on top with to-do lists & notes</li>
          </ul>
        </div>

        {/* RIGHT PANEL */}
        <div className="signup-right">
          <h2 className="signup-title">Sign Up</h2>

          <form className="signup-form" onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className="signup-field">
              <label>Full Name</label>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
            </div>

            {/* Date of Birth */}
            <div className="signup-field">
              <label>Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={form.dob}
                onChange={handleChange}
              />
            </div>

            {/* Gender */}
            <div className="signup-field">
              <label>Gender</label>
              <select
                name="gender"
                value={form.gender}
                onChange={handleChange}
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Education */}
            <div className="signup-field">
              <label>Education</label>
              <select
                name="education"
                value={form.education}
                onChange={handleChange}
              >
                <option value="">Select option</option>
                <option value="10th">10th</option>
                <option value="12th">12th</option>
                <option value="Diploma">Diploma</option>
                <option value="Degree">Degree</option>
                <option value="Masters">Masters</option>
              </select>
            </div>

            {/* Exam Category – full width */}
            <div className="signup-field signup-field-full">
              <label>Exam Category</label>
              <select
                name="examCategory"
                value={form.examCategory}
                onChange={handleChange}
              >
                <option value="">Select exam category</option>
                <option value="UPSC Officer-level Exams">
                  UPSC officer-level exams
                </option>
                <option value="SSB-based Officer Entries">
                  SSB-based officer entries
                </option>
                <option value="Army/Navy/Air Force Recruitment Streams">
                  Army / Navy / Air Force recruitment streams
                </option>
                <option value="Agniveer & Soldier-level Entries">
                  Agniveer & soldier-level entries
                </option>
                <option value="Special Forces & Elite Units">
                  Special forces & elite units
                </option>
                <option value="Paramilitary & Police Recruitment">
                  Paramilitary & police recruitment
                </option>
                <option value="DRDO/MES/BRO Technical Streams">
                  DRDO / MES / BRO technical streams
                </option>
                <option value="Medical & Nursing Services">
                  Medical & nursing services
                </option>
                <option value="Intelligence & Strategic Agencies">
                  Intelligence & strategic agencies
                </option>
              </select>
            </div>

            {/* Email */}
            <div className="signup-field">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>

            {/* Password */}
            <div className="signup-field">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Create a password"
              />
            </div>

            {/* Button – full width */}
            <button
              className="signup-submit signup-field-full"
              type="submit"
            >
              Create Account
            </button>
          </form>

          {message && <p className="signup-message">{message}</p>}

          <p className="signup-footer-text">
            Already a user?{" "}
            <Link to="/Login" className="signup-link">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
