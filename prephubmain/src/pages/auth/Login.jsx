import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔴 STEP 1: PROOF THAT BUTTON IS CLICKED
    console.log("LOGIN SUBMIT CLICKED");

    // 🔴 STEP 2: FORCE A NETWORK REQUEST (TEST API)
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => res.json())
      .then((data) => {
        console.log("TEST API RESPONSE:", data);
      })
      .catch((err) => {
        console.error("TEST API ERROR:", err);
      });

    // 🔴 STEP 3: REAL BACKEND CALL
    fetch("http://localhost:8080/prephub-backend/auth/login.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("LOGIN BACKEND RESPONSE:", data);

        if (data.success) {
          localStorage.setItem("user", JSON.stringify(data.user));
          navigate("/Home");
        } else {
          setMessage(data.message);
        }
      })
      .catch((err) => {
        console.error("LOGIN FETCH ERROR:", err);
        setMessage("Login failed");
      });
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <div className="login-header">
          <img
            src="/src/assets/logo.png"
            alt="PrepHub Logo"
            className="login-logo"
          />
          <h2 className="login-title">Welcome!</h2>
          <p className="login-subtitle">
            Login to continue your PrepHub journey
          </p>
        </div>

        <form className="login-form" onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {message && <p className="error-msg">{message}</p>}

          {/* 🔴 MUST BE submit */}
          <button type="submit">Login</button>
        </form>

        <p className="signup-link">
          Don't have an account?{" "}
          <span onClick={() => navigate("/Signup")}>Sign Up</span>
        </p>

      </div>
    </div>
  );
};

export default Login;
