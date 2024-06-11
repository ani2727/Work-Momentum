import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header>
      <img
        alt="gen-workmomentum-logo"
        className="logo"
        src="https://i.ibb.co/Y7x8FQ1/Untitled-design.png"
      />
      <div className="burger-menu" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={`nav-items-container ${menuActive ? "active" : ""}`}>
        <NavLink to="/" className="nav-item" activeclassname="active">
          Home
        </NavLink>

        <NavLink to="/products" className="nav-item" activeclassname="active">
          Products
        </NavLink>

        <NavLink to="/services" className="nav-item" activeclassname="active">
          Services
        </NavLink>
        <NavLink to="/careers" className="nav-item" activeclassname="active">
          Careers
        </NavLink>

        <NavLink to="/contact" className="nav-item" activeclassname="active">
          Contact Us
        </NavLink>
        <NavLink to="/about" className="nav-item" activeclassname="active">
          About Us
        </NavLink>
      </nav>
      <div></div>
    </header>
  );
};

export default Header;
