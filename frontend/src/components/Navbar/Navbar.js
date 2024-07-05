import React, { useState } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { RiTeamFill } from "react-icons/ri";
import { SiEsotericsoftware } from "react-icons/si";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

const servicesData = {
  engagementModels: [
    {
      name: "Staff Augmentation",
      description: "Our software developers in your team.",
      link: "/staff-augmentation",
    },
    {
      name: "Dedicated Teams",
      description: "Our software teams in your organization.",
      link: "/dedicated-teams",
    },
    {
      name: "Software Outsourcing",
      description: "Our PM and software teams building for you.",
      link: "/software-outsourcing",
    },
  ],
  technologies: [
    { name: "React", link: "/react" },
    { name: "Node.js", link: "/nodejs" },
    { name: "Python", link: "/python" },
    { name: ".NET", link: "/dotnet" },
    { name: "Java", link: "/java" },
    { name: "Ruby", link: "/ruby" },
    { name: "PHP", link: "/php" },
    { name: "Golang", link: "/golang" },
    { name: "Angular", link: "/angular" },
  ],
  solutions: [
    { name: "Web Development", link: "/services/web-development" },
    { name: "App Development", link: "/services/app-development" },
    { name: "Cloud & DevOps", link: "/services/cloud-devops" },
    { name: "QA Testing & Automation", link: "/services/qa-testing" },
    { name: "Business Intelligence", link: "/services/business-intelligence" },
    { name: "Data Science", link: "/services/data-science" },
    { name: "iOS App Development", link: "/services/ios-app-development" },
    { name: "UX/UI", link: "/ux-ui" },
    { name: "Machine Learning", link: "/services/machine-learning" },
    { name: "Data Engineering", link: "/services/data-engineering" },
  ],
};

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [careersDropdownOpen, setCareersDropdownOpen] = useState(false);

  const navigate = useNavigate();

  const handleNavigation = (link) => {
    setIsHovered(null);
    setMenuOpen(false);
    navigate(link);
  };

  return (
    <nav className="navbar">
      <div className="navbarContainer">
        <Link
          className="logo-name-link"
          to="/"
          onMouseEnter={() => setIsHovered("landing")}
        >
          <div className="logo-name">
            <img
              src="https://i.ibb.co/gFk50sH/Pi7-Image-Cropper.png"
              alt="Work Momentum"
              className="logo"
            />
          </div>
        </Link>
        <div className="menuIcon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`navItems ${menuOpen ? "open" : ""}`}>
          <li onMouseEnter={() => setIsHovered("Home")}>
            <NavLink
              className="navItem"
              activeClassName="active"
              exact
              to="/"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li
            onMouseEnter={() => setIsHovered("Services")}
            className="navItem services-Container"
            activeClassName="active"
          >
            Services
            {isHovered === "Services" ? (
              <IoIosArrowUp className="services-up-icon" />
            ) : (
              <IoIosArrowDown className="down-icon" />
            )}
            {isHovered === "Services" && (
              <div
                className="popupContainer"
                onMouseLeave={() => setIsHovered(null)}
              >
                <div className="popup">
                  <div className="firstContainer">
                    <div className="headerSection">
                      <SiEsotericsoftware className="firstContainerLogo" />
                      <NavLink
                        exact
                        to="/services"
                        onClick={() => setIsHovered(null)}
                        className="services-link"
                      >
                        Software Development Services
                      </NavLink>
                    </div>
                    <div className="contentSection">
                      <p>
                        Boost your tech projects with outsourced development.
                      </p>
                      <p>
                        Custom engagement models designed to fit your needs.
                      </p>
                    </div>
                  </div>

                  <div className="popupRow">
                    <div className="popupSection">
                      <h3 className="popupSectionHeading">
                        Engagement models
                      </h3>
                      <ul>
                        {servicesData.engagementModels.map((item, index) => (
                          <li key={index}>
                            <div className="flexRow">
                              <RiTeamFill className="popupItemsLogo" />
                              <div className="flexCol">
                                <h4 className="popupItemsHeading">
                                  {item.name}
                                </h4>
                                <p className="popupItemsPara">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="popupSection">
                      <h3>Technologies</h3>
                      <ul>
                        {servicesData.technologies.map((tech, index) => (
                          <li key={index} className="technologies-content">
                            {tech.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="popupSection">
                      <h3>Solutions</h3>
                      <ul>
                        {servicesData.solutions.map((solution, index) => (
                          <li
                            key={index}
                            onClick={() => handleNavigation(solution.link)}
                            className="solutions-content"
                          >
                            {solution.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </li>
          <li
            onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
            className={`navItem mobile-dropdown services-dropdown ${
              servicesDropdownOpen ? "open" : ""
            }`}
          >
            Services
            {servicesDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            {servicesDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    exact
                    to="/services"
                    onClick={() => setMenuOpen(false)}
                    className="dropdown-item"
                  >
                    Software Development Services
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    exact
                    to="/services"
                    onClick={() => setMenuOpen(false)}
                    className="dropdown-item"
                  >
                    Solutions
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li onMouseEnter={() => setIsHovered("Products")}>
            <NavLink
              className="navItem"
              activeClassName="active"
              exact
              to="/products"
              onClick={() => setMenuOpen(false)}
            >
              Products
            </NavLink>
          </li>
          <li
            onMouseEnter={() => setIsHovered("Careers")}
            className="navItem careers-container"
          >
            Careers
            {isHovered === "Careers" ? (
              <IoIosArrowUp className="services-up-icon" />
            ) : (
              <IoIosArrowDown className="down-icon" />
            )}
            {isHovered === "Careers" && (
              <div
                className="careers-hover-card-container"
                onMouseLeave={() => setIsHovered(null)}
              >
                <div className="careers-hover-card">
                  <div className="left-part">
                    <Link onClick={() => setIsHovered(null)} to="/careers">
                      <h2>
                        Careers<span>.</span>
                      </h2>
                    </Link>
                    <p>What is it like working at Work Momentum?</p>
                  </div>
                  <div className="right-part">
                    <Link
                      onClick={() => setIsHovered(null)}
                      to="/job-opportunities"
                    >
                      Job Opportunities
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </li>
          <li
            onClick={() => setCareersDropdownOpen(!careersDropdownOpen)}
            className={`navItem mobile-dropdown careers-dropdown ${
              careersDropdownOpen ? "open" : ""
            }`}
          >
            Careers
            {careersDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
            {careersDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <NavLink
                    exact
                    to="/careers"
                    onClick={() => setMenuOpen(false)}
                    className="dropdown-item"
                  >
                    Careers
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    exact
                    to="/job-opportunities"
                    onClick={() => setMenuOpen(false)}
                    className="dropdown-item"
                  >
                    Job Opportunities
                  </NavLink>
                </li>
              </ul>
            )}
          </li>
          <li onMouseEnter={() => setIsHovered("Contact")}>
            <NavLink
              className="navItem connect"
              activeClassName="active"
              exact
              to="/contact-us"
              onClick={() => setMenuOpen(false)}
            >
              Let's Connect
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
