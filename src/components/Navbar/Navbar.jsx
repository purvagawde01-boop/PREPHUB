import React,{useState} from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import menu from "../../assets/menu.png"
import userplus from "../../assets/userplus.png"
import user from "../../assets/user.png"
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState (false);
   const navigate = useNavigate();   
   
   const handleScroll= sectionId => {
   const el= document.getElementById(sectionId);
   if (el){
    el.scrollIntoView({behavior: "smooth"});
   }
   setIsMobileMenuOpen(false);
};
  return (
    <div className="navbar">
     
     <div className="navbar-left">
       <img src={logo} alt=""/>
      </div>

      
      <div className="navbar-center desktop-menu">
        <ul>
        <li onClick={() => handleScroll("why")}>Why Choose Us</li>
        <li onClick={() => handleScroll("course")}>Recruitment Streams</li>
        <li onClick={() => handleScroll("notes")}>Preparation Resources</li>
        <li onClick={() => handleScroll("add")}>Additional Features</li>
      </ul>
      </div>
     
       
       <div className='board-text'>
        <h1>Your Defence Partner</h1>
        <h5>"Guiding every step of your defence exam journey"</h5>
       </div>

      <div className="navbar-right desktop-menu">
        <button className="signup-btn" onClick={() => navigate("/Signup")}>Sign Up</button>
           <button className="signup-btn" onClick={() => navigate("/Login")}>Login</button>
      </div>

      <div className='nav-icons mobile-only'>
        <img src={menu} className='nav-icon' alt='' onClick={() => setIsMobileMenuOpen (prev => !prev)}/>
        <img src={userplus} className='nav-icon' alt='' onClick={() => navigate("/Signup")} />
        <img src={user} className='nav-icon' alt='' onClick={() => navigate("/Login")} />
      </div>
     
      {isMobileMenuOpen &&(
        <div className="mobile-menu-panel">
        <ul>
         <li onClick={() => handleScroll("why")}>Why Choose Us</li>
        <li onClick={() => handleScroll("course")}>Exam Category</li>
        <li onClick={() => handleScroll("notes")}>Source of Notes</li>
        <li onClick={() => handleScroll("add")}>Additional Features</li>
        </ul>
        </div>
      )
    }
      </div>
 
  )
}

export default Navbar 
