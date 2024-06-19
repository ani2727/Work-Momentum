import React from 'react';
import { NavLink } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="navbarContainer">
      <img 
        src="./abhiTrainings-logo-white.png" 
        alt='logo' 
        className="logo" 
      />
      <ul className="navItems">
        <li><NavLink className="navItem" activeClassName="active" exact to="/">Home</NavLink></li>
        <li><NavLink className="navItem" activeClassName="active" exact to="/services">Services</NavLink></li>
        <li><NavLink className="navItem" activeClassName="active" exact to="/about">About Us</NavLink></li>
        <li><NavLink className="navItem" activeClassName="active" exact to="/contact">Let's Connect</NavLink></li>
        
      </ul>
    </div>
  );
};

export default Navbar;
