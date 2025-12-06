import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { useNavigate } from "react-router-dom";

const Navbar = () => {
   const navigate = useNavigate();   
   
   const handleScroll= sectionId => {
   const el= document.getElementById(sectionId);
   if (el){
    el.scrollIntoView({behavior: "smooth"});
   }
};
  return (
    <div className="navbar">
     
     <div className="navbar-left">
       <img src={logo} alt=""/>
      </div>

      <div className="navbar-center">
        <ul>
        <li onClick={() => handleScroll("why")}>Why Choose Us</li>
        <li onClick={() => handleScroll("course")}>Courses</li>
        <li onClick={() => handleScroll("notes")}>Source of Notes</li>
        <li onClick={() => handleScroll("add")}>Additional Features</li>
      </ul>
      </div>

      <div className="navbar-right">
        <button className="signup-btn" onClick={() => navigate("/Signup")}>
            Sign Up
          </button>
           <button className="signup-btn" onClick={() => navigate("/Login")}>
            Login
          </button>
        
      </div>
      </div>
  )
}
export default Navbar 
