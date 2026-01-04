import React from 'react'
import './Landing.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import hero1 from '../../assets/hero1.jpg'
import para from '../../assets/para.png'
import air from '../../assets/air.png'
import navy from '../../assets/navy.png'
import army from '../../assets/army.png'
import book from '../../assets/book.png'
import ebook from '../../assets/ebook.png'
import video from '../../assets/video.png'
import quest from '../../assets/quest.png'
import mock from '../../assets/mock.png'
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
  <h2 className="course-title">Recruitment Streams</h2>
    <div className="course-grid">
    
    <div className="course-card">
     <img src={army} alt='' /></div>
    
    <div className="course-card">
      <img src={air} alt="" /></div>

    <div className="course-card">
      <img src={navy} alt="" /></div>
      
      <div className="course-card">
      <img src={para} alt="" /></div>
      
  </div>
</div>



<div id="notes" className="notes-section">
  <h2 className="notes-title">Preparation Resources</h2>

  <div className="notes-grid">
    <div className="notes-card">
      <img src={ebook} alt="" /><p>Syllabus</p></div>

    <div className="notes-card">
      <img src={book} alt="" /><p>Books</p></div>

    <div className="notes-card">
      <img src={video} alt="" /><p>Videos</p></div>

    <div className="notes-card">
      <img src={mock} alt="" /><p>Mock Test</p></div>

      <div className="notes-card">
      <img src={quest} alt="" /><p>Previous Year Papers</p></div>
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
