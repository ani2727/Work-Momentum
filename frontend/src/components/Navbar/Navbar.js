import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbarContainer">
        <img
          src="./abhiTrainings-logo-white.png"
          alt="Work Momentum"
          className="companylogo"
        />
        <ul className="navItems">
          <li>
            <NavLink className="navItem" activeClassName="active" exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navItem"
              activeClassName="active"
              exact
              to="/services"
            >
              Services
            </NavLink>
          </li>
          <li className="careers-nav-item">
            <NavLink
              className="navItem"
              activeClassName="active"
              exact
              to="/careers"
            >
              Careers
              <IoIosArrowUp className="up-icon" />
              <IoIosArrowDown className="down-icon" />
            </NavLink>
            <div className="careers-hover-card-container">
              <div className="careers-hover-card">
                <div className="left-part">
                  <Link to="/careers">
                    <h2>
                      Careers<span>.</span>
                    </h2>
                  </Link>
                  <p>What is it like working at Work Momentum?</p>
                </div>
                <div className="right-part">
                  <Link to="/job-opportunities">Job Opportunities</Link>
                </div>
              </div>
            </div>
          </li>

          <li>
            <NavLink
              className="navItem"
              activeClassName="active"
              exact
              to="/about"
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navItem connect"
              activeClassName="active"
              exact
              to="/contact"
            >
              Let's Connect
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
