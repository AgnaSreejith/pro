import { Routes, Route } from 'react-router-dom';
import React from 'react'
import Home from './Pages/Home';
import About from './Pages/About';
import Login from './Pages/Login';
import Notfound from './Pages/Notfound';
import Navbar from "./Units/Navbar1";




export default function App() {
  return (
    <div>
      <Navbar>
     <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Notfound />} />
          
       </Routes>
       </Navbar>
    </div>
  )
}


