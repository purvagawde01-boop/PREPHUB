import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();

  // ✅ STATE MATCHES BACKEND FIELDS EXACTLY
  const [form, setForm] = useState({
    full_name: "",
    dob: "",
    gender: "",
    education: "",
    recruitment_stream: "",
    email: "",
    password: "",
  });

  // ✅ ONE HANDLER FOR ALL INPUTS
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    


    fetch("http://localhost:8080/prephub-backend/auth/signup.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
       body: JSON.stringify(form),
    })
      .then(async (res) => {
  const text = await res.text();
  console.log("RAW RESPONSE:", text);
  return JSON.parse(text);
})

      .then((data) => {
        if (data.success) {
          navigate("/Login");
        } else {
          alert(data.message);
        }
      })
      .catch((err) => {
  console.error("FETCH ERROR:", err);
  alert("Signup failed. Check console.");
});

  };

  return (
    <div className="signup-page">
      <div className="signup-card">

        {/* Header */}
        <div className="signup-header">
          <img
            src="/src/assets/logo.png"
            alt="PrepHub Logo"
            className="signup-logo"
          />
          <h1>Join PrepHub</h1>
          <h3>Your Defence Partner</h3>
          <p>Create your account and start your defence exam journey</p>
        </div>

        {/* Form */}
        <form className="signup-form" onSubmit={handleSignup}>

          <div className="form-row">
            <input
              type="text"
              placeholder="Full Name"
              name="full_name"
              onChange={handleChange}
            />
            <input
              type="date"
              name="dob"
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <select name="gender" onChange={handleChange}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>

            <select name="education" onChange={handleChange}>
              <option value="">Select Education</option>
              <option value="10th">10th</option>
              <option value="12th">12th</option>
              <option value="Diploma">Diploma</option>
              <option value="Degree">Degree</option>
              <option value="Masters">Masters</option>
            </select>
          </div>

          <select
            className="full-width"
            name="recruitment_stream"
            onChange={handleChange}
          >
            <option value="">Select Recruitment Stream</option>
            <option value="Army Force">Army Force</option>
            <option value="Air Force">Air Force</option>
            <option value="Navy Force">Navy Force</option>
            <option value="Paramilitary Force">Paramilitary Force</option>
          </select>

          <div className="form-row">
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
          </div>

          <button type="submit">Create Account</button>
        </form>

        <p className="login-link">
          Already a user?{" "}
          <span onClick={() => navigate("/Login")}>Login here</span>
        </p>

      </div>
    </div>
  );
};

export default Signup;
