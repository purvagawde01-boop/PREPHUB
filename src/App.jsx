import React from 'react'
import Landing from './pages/Landing/Landing'
import Login from './pages/auth/Login'
import Home from './pages/Home/Home';
import { Routes, Route } from "react-router-dom";
import Signup from './pages/auth/Signup';
const App = () => {
  return (
   <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/Signup" element={<Signup/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Home" element={<Home/>} />
      </Routes>
  );
};

export default App;
