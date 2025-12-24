import React from 'react'
import Landing from './pages/Landing/Landing'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'
import Home from './pages/user/Home'
import Profile from './pages/user/Profile'
import Progress from './pages/user/Progress'
import Schedule from './pages/user/Schedule'
import Todo from './pages/user/Todo'
import Books from './pages/content/Books'
import Mock from './pages/content/Mock'
import Papers from './pages/content/Papers'
import Syllabus from './pages/content/Syllabus'
import Videos from './pages/content/Videos'
import AdminLogin from './pages/admin/AdminLogin'
import AdminDashboard from './pages/admin/AdminDashboard'
import { Routes, Route } from "react-router-dom"

const App = () => {
  return (
   <Routes>
      <Route path="/" element={<Landing />} />
      
      <Route path="/Signup" element={<Signup/>} />
      <Route path="/Login" element={<Login/>} />
      
      <Route path="/Home" element={<Home/>} />
      <Route path="/profile" element={<Profile />} />

        <Route path="/Syllabus" element={<Syllabus />} />
        <Route path="/Books" element={<Books />} />
        <Route path="/Videos" element={<Videos />} />
        <Route path="/Papers" element={<Papers />} />
        <Route path="/Mock" element={<Mock/>} />

        <Route path="/Todo" element={<Todo />} />
        <Route path="/Schedule" element={<Schedule />} />
        <Route path="/Progress" element={<Progress />} />

        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />

      </Routes>
  );
};

export default App;
