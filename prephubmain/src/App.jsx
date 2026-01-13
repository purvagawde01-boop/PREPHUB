import React from 'react'
import Landing from './pages/Landing/Landing'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import Home from './pages/Dashboard/Home'
import ExamPage from './pages/Exam/ExamPage';
import NdaSyllabus from './pages/Exam/NdaSyllabus';
import NdaBook from './pages/Exam/NdaBook';
import NdaVideo from './pages/Exam/NdaVideo';
import NdaPyq from './pages/Exam/NdaPyq';
import NdaMock from './pages/Exam/NdaMock';
import Books from './pages/content/Books'
import Mock from './pages/content/Mock'
import Papers from './pages/content/Papers'
import Syllabus from './pages/content/Syllabus'
import Videos from './pages/content/Videos'
import { Routes, Route } from "react-router-dom"

/*
const App = () => {
  return (
   <Routes>
      <Route path="/" element={<Landing />} />
      
      <Route path="/Signup" element={<Signup/>} />
      <Route path="/Login" element={<Login/>} />
      
      <Route path="/Home" element={<Home/>} />
      <Route path="/exam/:examId" element={<ExamPage/>} />
      <Route path="/NdaSyllabus" element={<NdaSyllabus/>} />
      <Route path="/NdaBook" element={<NdaBook/>} />
      <Route path="/NdaVideo" element={<NdaVideo/>} />
      <Route path="/NdaPyq" element={<NdaPyq/>} />
      <Route path="/NdaMock" element={<NdaMock/>} />

        <Route path="/Syllabus" element={<Syllabus />} />
        <Route path="/Books" element={<Books />} />
        <Route path="/Videos" element={<Videos />} />
        <Route path="/Papers" element={<Papers />} />
        <Route path="/Mock" element={<Mock/>} />


      </Routes>
  );
};
*/

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path='/exam/:examId'element={<ExamPage />} />
    </Routes>
  );
}


export default App;
