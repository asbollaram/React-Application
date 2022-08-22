import React from 'react';
import {Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const navLinkStyles = ({isActive}) => {
    return{
      fontWeight: isActive ? 'Bold' : 'Normal'
    }
  }
  return (
    <div >
    <header className="p-1 text-bg-dark-nav">
    <div className="container">
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
      <h3 class="float-md-start mb-0 display-6 mx-2"><Link className='d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none' to="/">DS</Link></h3>
      <nav className='float-md-start mb-0'>
      
      </nav>

        <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <NavLink className='nav-link px-2 text-white' to="/" style={navLinkStyles}>Home</NavLink>
          <NavLink className='nav-link px-2 text-white' to="/About" style={navLinkStyles}>About Us</NavLink>
          
        </ul>
        <div class="text-end">
        <NavLink to="/Login"  className='btn btn-outline-light me-2' style={navLinkStyles}>Login</NavLink>
         <NavLink to="/Signup"  className='btn btn-warning' style={navLinkStyles}>Signup</NavLink> 
          
        </div>
      </div>
    </div>
  </header>
      
    </div>
  )
}

export default Navbar