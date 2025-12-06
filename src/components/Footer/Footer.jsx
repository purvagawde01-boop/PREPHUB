import React from "react";
import "./Footer.css";
import whatsapp from '../../assets/whatsapp.png'
import youtube from '../../assets/youtube.png'
import instagram from '../../assets/instagram.png'
import telegram from '../../assets/telegram.png'
import logo from '../../assets/logo.png'


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo + About */}
        <div className="footer-col">
          <h2 className="footer-logo">PrepHub</h2>
          <p className="footer-about">
            Your trusted platform for Defence Exam Preparation.
            Learn smart. Train hard. Earn your uniform.
          </p>
        </div>

        {/* Courses */}
        <div className="footer-col">
          <h3>Courses</h3>
          <ul>
            <li>NDA</li>
            <li>CDS</li>
            <li>CAPF</li>
            <li>Navy</li>
            <li>Air Force</li>
            <li>SSB Interview</li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-col">
          <h3>Resources</h3>
          <ul>
            <li>E-Books</li>
            <li>Text Books</li>
            <li>Mock Tests</li>
            <li>Video Links</li>
            <li>Study Planner</li>
            <li>Progress Tracker</li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-col">
          <h3>Support</h3>
          <ul>
            <li>Contact</li>
            <li>FAQ</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>

      {/* Social Icons */}
      <div className="footer-social">
       <img src= {whatsapp} alt=""></img>
       <img src={instagram} alt=""></img>
       <img src={telegram} alt=""></img>
       <img src={youtube} alt=""></img> 
        </div>

      {/* Disclaimer */}
      <p className="footer-disclaimer">
        PrepHub is not affiliated with any Government or Defence organization.
      </p>

      {/* Copyright */}
      <p className="footer-copy">
        © 2025 PrepHub. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
