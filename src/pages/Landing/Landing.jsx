import React from 'react'
import './Landing.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import hero1 from '../../assets/hero1.jpg'
import agniveer from '../../assets/agniveer.png';
import army from '../../assets/army.png';
import drdo from '../../assets/drdo.png';
import intell from '../../assets/intell.png';
import para from '../../assets/para.png';
import med from '../../assets/med.png';
import spcl from '../../assets/spcl.png';
import ssbb from '../../assets/ssbb.png';
import upsc from '../../assets/upsc.png'
import book from '../../assets/book.png'
import ebook from '../../assets/ebook.png'
import video from '../../assets/video.png'
import progress from '../../assets/progress.png'
import schedule from '../../assets/schedule.png'
import todo from '../../assets/todo.png'


const Landing = () => {
  return (
    <div className="landing">
      <Navbar />

      <div id=" hero" className="hero">
        </div>

    <div id="why" className="why-section">
  <h2 className="why-title">Why Choose Us?</h2>
    <div className="why-container">
    <div className="why-scroll">
    <div className="why-card">Provide a centralized platform for 26+ defense exam preparation</div>
    <div className="why-card">Offer authentic study materials, eligibility criteria, and exam notifications</div>
    <div className="why-card">Enable progress tracking through analytics, charts, and feedback</div>
    <div className="why-card">Keep students motivated with quotes, reminders, and interactive content</div>
    <div className="why-card">Make preparation resources easily accessible with syllabus, books, and YouTube tutorials</div>
    <div className="why-card">Conduct mock tests with instant results </div>

  <div className="why-card">Provide a centralized platform for 26+ defence exam preparation</div>
  <div className="why-card">Offer authentic study materials, eligibility criteria, and exam notifications</div>
  <div className="why-card">Enable progress tracking through analytics, charts, and feedback</div>
  <div className="why-card">Keep students motivated with quotes, reminders, and interactive content</div>
  <div className="why-card">Make preparation resources easily accessible with syllabus, books, and YouTube tutorials</div>
  <div className="why-card">Conduct mock tests with instant results</div>
</div>
</div>
</div>


<div id="course" className="course-section">
  <h2 className="course-title">Exam Category</h2>
    <div className="course-grid">
    
    <div className="course-card">
     <img src={agniveer} alt='' /></div>
    
    <div className="course-card">
      <img src={army} alt="" /></div>

    <div className="course-card">
      <img src={upsc} alt="" /></div>

  <div className="course-card">
      <img src={ssbb} alt="" /></div>
      
      <div className="course-card">
      <img src={spcl} alt="" /></div>
      
      <div className="course-card">
      <img src={para} alt="" /></div>
      
      <div className="course-card">
      <img src={drdo} alt="" /></div>

      <div className="course-card">
      <img src={med} alt="" /></div>

      <div className="course-card">
      <img src={intell} alt="" /></div>
  </div>
</div>



<div id="notes" className="notes-section">
  <h2 className="notes-title">Sources of Notes</h2>

  <div className="notes-grid">
    <div className="notes-card">
      <img src={ebook} alt="" /><p>E-Books</p></div>

    <div className="notes-card">
      <img src={book} alt="" /><p>Books</p></div>

    <div className="notes-card">
      <img src={video} alt="" /><p>Videos</p></div>
    </div>
    </div>
 


 <div id="add" className="add-section">
  <h2 className="add-title">Additional Features</h2>

  <div className="add-grid">
    <div className="add-card">
      <img src={progress} alt="" /><p>Progress Bar</p></div>

    <div className="add-card">
      <img src={schedule} alt="" /><p>Schedule Maker</p></div>

    <div className="add-card">
      <img src={todo} alt="" /><p>To-Do List</p></div>
    </div>
    </div>

 <Footer/>
</div>
  
  )
};
export default Landing;
