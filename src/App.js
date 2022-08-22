import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Componets/Home/Home'
import Navbar from './Componets/Navbar/Navbar'
import About from './Componets/About/About';
import Login from './Componets/Login/Login';
import Signup from './Componets/Signup/Signup';
import Footer from './Componets/Footer/Footer';


const App = () => {
  return (
    <div >
      
        <Navbar />

        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
       
       
       
      <Footer/>
     
    </div>
  )
}

export default App