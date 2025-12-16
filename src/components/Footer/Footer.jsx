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
          <img src={logo} alt="" className="footer-logo" />
          <p className="footer-about">
            Your trusted platform for Defence Exam Preparation.
            Learn smart. Train hard. Earn your uniform.
          </p>
        </div>

        <div className="footer-col">
          <h3>Exam Category</h3>
          <ul>
            <li>UPSC Officer-level Exams</li>
            <li>SSB-based Officer Entries</li>
            <li>Army/Navy/Air Force Recruitment Streams</li>
            <li>Agniveer & Soldier-level Entries</li>
            <li>Special Forces & Elite Units</li>
            <li>Paramilitary & Police Recruitment</li>
            <li>DRDO/MES/BRO Technical Streams</li>
            <li>Medical & Nursing Services</li>
             <li>Intelligence & Strategic Agencies</li>
          </ul>
        </div>

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

     
      <p className="footer-disclaimer">
        PrepHub is not affiliated with any Government or Defence organization.
      </p>


      <p className="footer-copy">
        © 2025 PrepHub. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
