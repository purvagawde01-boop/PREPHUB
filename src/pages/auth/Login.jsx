import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
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

    if (!form.email || !form.password) {
      setMessage("Please enter both email and password.");
      return;
    }

    console.log("Login form submitted:", form);
    navigate("/Home");
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h2 className="login-title">Welcome Back</h2>
        <p className="login-subtitle">Login to continue your PrepHub journey</p>

        <form className="login-form" onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />

          <label>Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />

          <button className="login-submit" type="submit">
            Login
          </button>
        </form>

        {message && <p className="login-message">{message}</p>}

        <p className="login-footer-text">
          Don’t have an account?{" "}
          <span onClick={() => navigate("/Signup")}>Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
