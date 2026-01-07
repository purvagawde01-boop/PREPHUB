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

import {  Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/admin/AdminDashboard";
import DashboardHome from "./pages/admin/DashboardHome";
import Users from "./pages/admin/Users";
import LoginLogs from "./pages/admin/LoginLogs";
import CategoryPage from "./pages/admin/CategoryPage"





function App  ()  {
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

          <Route path="/admin" element={<AdminDashboard />}>
          <Route index element={<DashboardHome />} />
          <Route path="users" element={<Users />} />
          <Route path="login-logs" element={<LoginLogs />} />
          <Route path="army" element={<CategoryPage />} />
          <Route path="navy" element={<CategoryPage />} />
          <Route path="air-force" element={<CategoryPage />} />
          <Route path="paramilitary" element={<CategoryPage />} />
        </Route>
    </Routes>
  
  );
};

export default App;
