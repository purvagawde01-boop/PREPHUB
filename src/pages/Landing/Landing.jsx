import React from 'react'
import './Landing.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import hero2 from '../../assets/hero2.png'
import bharat from '../../assets/bharat.jpg';
import bharat1 from '../../assets/bharat1.png';
import bsf from '../../assets/bsf.png';
import capf from '../../assets/capf.png';
import cisf from '../../assets/cisf.png';
import crpf from '../../assets/crpf.jpg';
import mns from '../../assets/mns.jpg';
import navy from '../../assets/navy.png';
import nda from '../../assets/nda.png';
import ssb from '../../assets/ssb.png';
import ssc from '../../assets/ssc.png';
import ta from '../../assets/ta.png';
import ebook from '../../assets/ebook.png'
import book from '../../assets/book.png'
import video from '../../assets/video.png'
import progress from '../../assets/progress.png'
import schedule from '../../assets/schedule.png'
import todo from '../../assets/todo.png'


const Landing = () => {
  return (
    <div className="landing">
      <Navbar />

      <div id=" hero" className="hero">
        <img src={hero2} alt="" className="hero-img" />

        <div className="hero-text">
          <h1>Your's PrepAlly</h1>
          <p>
            Let’s learn, grow, and get closer to your
            <br />
            Dream Uniform
          </p>

  
          <button className="signup-btn" onClick={() => navigate("/Signup")}>
            Lets Begin
          </button>
        </div>
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
  </div>
</div>
</div>


<div id="course" className="course-section">
  <h2 className="course-title">Courses We Offer</h2>

  <div className="course-grid">
    <div className="course-card">
      <img src={bharat} alt="" /></div>

    <div className="course-card">
      <img src={bharat1} alt="" /></div>

    <div className="course-card">
      <img src={bsf} alt="" /></div>

  <div className="course-card">
      <img src={capf} alt="" /></div>
      
      <div className="course-card">
      <img src={cisf} alt="" /></div>
      
      <div className="course-card">
      <img src={crpf} alt="" /></div>
      
      <div className="course-card">
      <img src={mns} alt="" /></div>

      <div className="course-card">
      <img src={navy} alt="" /></div>

      <div className="course-card">
      <img src={nda} alt="" /></div>

      <div className="course-card">
      <img src={ssb} alt="" /></div>

      <div className="course-card">
      <img src={ssc} alt="" /></div>

      <div className="course-card">
      <img src={ta} alt="" /></div> 
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
}
export default Landing
