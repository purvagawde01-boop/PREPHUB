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
          <h3>Recruitment Streams</h3>
          <ul>
            <li>Army Force</li>
            <li>Navy Force</li>
            <li>Air Force</li>
            <li>Paramilitary Force</li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Resources</h3>
          <ul>
            <li>Syllabus</li>
            <li>Text Books</li>
            <li>Mock Tests</li>
            <li>Video Links</li>
            <li>Previous Year Papers</li>
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
