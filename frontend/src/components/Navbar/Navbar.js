import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { RiTeamFill } from "react-icons/ri";
import { SiEsotericsoftware } from "react-icons/si";

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
        <img
          src="./abhiTrainings-logo-white.png"
          alt="Work Momentum"
          className="logo"
        />
        <ul className="navItems">
          <li>
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
                    <SiEsotericsoftware />
                    <div>
                      <NavLink
                        exact
                        to="/services"
                        onClick={() => setIsHovered(false)}
                        className="services-link"
                      >
                        Software Development Services
                      </NavLink>
                      <p>
                        Boost your tech projects with outsourced development.
                        Custom engagement models designed to fit your needs.
                      </p>
                    </div>
                  </div>
                  <div className="popupRow">
                    <div className="popupSection">
                      <h3>Engagement models.</h3>
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
          <li>
            <NavLink
              className="navItem"
              activeClassName="active"
              exact
              to="/products"
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              className="navItem"
              activeClassName="active"
              exact
              to="/careers"
            >
              Careers
            </NavLink>
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
