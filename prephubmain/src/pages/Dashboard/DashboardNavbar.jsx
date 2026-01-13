import React from "react";
import "./DashboardNavbar.css";
import forceConfig from "../../config/forceConfig";
import { useNavigate, useParams } from "react-router-dom";

//work achu i want to switch and check so commenting
//const DashboardNavbar = ({data}) => {

  function DashboardNavbar({data,selectedForce, onForceChange})
  {
    const navigate =useNavigate();
    const {examSlug} =useParams();
    
  return (
    <nav className="dashboard-navbar">
      
      {/* LEFT: LOGO */}
      <div className="nav-left">
        <img
          src="/src/assets/logo.png"
          alt="PrepHub Logo"
          className="nav-logo"
        />
        <span className="brand-name">PrepHub</span>
      </div>

      {/* CENTER: SEARCH */}
      <div className="nav-center">
        <input
          type="text"
          placeholder="Search exams, syllabus, mock tests..."
          className="nav-search"
        />
      </div>

    
      <div className="nav-right">
        <div className="stream-selector">
         <span className="current-stream">
          {forceConfig[selectedForce]?.name || "PrepHub"}</span>
        

        <select 
        value={selectedForce}
        onChange={(e)=>
          {const force = e.target.value;
            localStorage.setItem("force", force);
         onForceChange(force);
         navigate("/Home");
         }}>
            <option value="army">Army Force</option>
            <option value="navy">Navy Force</option>
            <option value="airforce">Air Force</option>
            <option value="paramilitary">Paramilitary Force</option>
          </select>
        </div>

        <div className="profile-box">
          <img
            src="/src/assets/user.png"
            alt="User"
            className="profile-avatar"
          />
        </div>
      </div>

    </nav>
  );
};

export default DashboardNavbar;




/*import React from 'react'
import "./DashboardNavbar.css";
import userIcon from "../../assets/user.png";

const DashboardNavbar = () => {
  return (
   <nav className="dashboard-navbar">
      
      {/* LEFT: Logo 
      <div className="nav-left">
        <h2 className="logo">PrepHub</h2>
      </div>

      {/* CENTER: Search *
      <div className="nav-center">
        <input 
          type="text" 
          placeholder="Search exams, syllabus, papers..."
        />
      </div>

      {/* RIGHT: Stream + Profile *
      <div className="nav-right">
          <option value="army">Army Force</option>
          <option value="navy">Navy Force</option>
          <option value="air">Air Force</option>
          <option value="para">Paramilitary</option>

        <img src={userIcon} alt="Profile" className="profile-icon" />
      </div>

    </nav>
  )
}

export default DashboardNavbar;


      <select value={stream} className="stream-switcher" onChange={handleChange}>
      
      
      
      
      
       <select className="stream-dropdown"
          value={data.key}
            onChange={(e) =>{
              localStorage.setItem("force_type", e.target.value);
              window.location.reload();
            }} >*/