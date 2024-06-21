import React, { useState } from "react";
import { NavLink, useNavigate, Link } from "react-router-dom";
import "./Navbar.css";
import { RiTeamFill } from "react-icons/ri";
import { SiEsotericsoftware } from "react-icons/si";
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';


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
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleNavigation = (link) => {
    setIsHovered(false);
    navigate(link);
  };

  return (
    <div className="navbar">
      <div className="navbarContainer">
        <Link onMouseEnter={() => setIsHovered(false)} to="/">
          <img
            src="logoworkmomentum.png"
            alt="Work Momentum"
            className="logo"
          />
        </Link>
        <ul className="navItems">
          <li onMouseEnter={() => setIsHovered(false)}>
            <NavLink className="navItem" activeClassName="active" exact to="/">
              Home
            </NavLink>
          </li>
          <li
            onMouseEnter={() => setIsHovered(true)}
            className="navItem"
            activeClassName="active"
          >
            Services
            {isHovered && (
              <div
                className="popupContainer"
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="popup">
                  <div className="firstContainer">
                    <div className="headerSection">
                      <SiEsotericsoftware className="firstContainerLogo" />
                      <NavLink
                        exact
                        to="/services"
                        onClick={() => setIsHovered(false)}
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
                        Engagement models.
                      </h3>
                      <ul>
                        {servicesData.engagementModels.map((item, index) => (
                          <li
                            key={index}
                            onClick={() => handleNavigation(item.link)}
                          >
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
                      <h3>Technologies.</h3>
                      <ul>
                        {servicesData.technologies.map((tech, index) => (
                          <li
                            key={index}
                            onClick={() => handleNavigation(tech.link)}
                            className="technologies-content"
                          >
                            {tech.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="popupSection">
                      <h3>Solutions.</h3>
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
          <li onMouseEnter={() => setIsHovered(false)}>
            <NavLink
              className="navItem"
              activeClassName="active"
              exact
              to="/products"
            >
              Products
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
          <li onMouseEnter={() => setIsHovered(false)}>
            <NavLink
              className="navItem"
              activeClassName="active"
              exact
              to="/about"
            >
              About Us
            </NavLink>
          </li>
          <li onMouseEnter={() => setIsHovered(false)}>
            <NavLink
              className="navItem connect"
              activeClassName="active"
              exact
              to="/contact-us"
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
