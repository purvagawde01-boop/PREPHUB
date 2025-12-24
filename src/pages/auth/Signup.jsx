import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Signup.css'

const Signup = () => {

  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();

    // simulate backend success
    setSuccess(true);

    setTimeout(() => {
      navigate("/login");
    }, 2000); // 2 seconds delay
  };

  return (
    <div className="signup-page">
      <div className="signup-card">

        {/* Header */}
        <div className="signup-header">
          <img src="/src/assets/logo.png" alt="PrepHub Logo" className="signup-logo" />
          <h1>Join PrepHub</h1>
          <h3>Your Defence Partner</h3>
          <p>Create your account and start your defence exam journey</p>
        </div>

        {/* Form */}
        <form className="signup-form"  onSubmit={handleSignup}>

        {success && (
          <p className="success-msg"> ✅ Account created successfully. Please login.</p>
          )}


          <div className="form-row">
            <input type="text" placeholder="Full Name" />
            <input type="date" />
          </div>

          <div className="form-row">
            <select>
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>

            <select>
              <option>Select Education</option>
              <option>10th</option>
              <option>12th</option>
              <option>Diploma</option>
              <option>Degree</option>
              <option>Masters</option>
            </select>
          </div>

          <select className="full-width">
            <option>Select Recruitment Stream</option>
            <option>Army Force</option>
            <option>Air Force</option>
            <option>Navy Force</option>
            <option>Paramilitary Force</option>
          </select>

          <div className="form-row">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
          </div>

          <button type="submit">Create Account</button>
        </form>

        <p className="login-link">
          Already a user?{" "}
          <span onClick={() => navigate("/Login")}>Login here</span>
        </p>

        

      </div>
    </div>
  )
};
export default Signup;
