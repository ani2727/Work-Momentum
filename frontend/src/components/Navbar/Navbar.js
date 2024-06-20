import React from 'react';
import { NavLink } from "react-router-dom";
import { LuMessagesSquare } from "react-icons/lu";

import './Navbar.css'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbarContainer">
        <img 
          src="logoworkmomentum.png" 
          alt='WorkMomentum' 
          className="logo"  
        />
      <ul className="navItems">
        <li><NavLink className="navItem" activeClassName="active" exact to="/">Home</NavLink></li>
        <li><NavLink className="navItem" activeClassName="active" exact to="/services">Services</NavLink></li>
        <li><NavLink className="navItem" activeClassName="active" exact to="/products">Products</NavLink></li>
        <li><NavLink className="navItem" activeClassName="active" exact to="/careers">Careers</NavLink></li>
        <li><NavLink className="navItem" activeClassName="active" exact to="/about">About Us</NavLink></li>
        <li>
          <div className='letsConnectContainer'>
            <LuMessagesSquare className='message-icon'/>
          <NavLink className="navItem connect" activeClassName="active" exact to="/contact">Let's Connect</NavLink>
          </div>
          </li>
        
      </ul>
    </div>
    </div>
  );
};

export default Navbar;
