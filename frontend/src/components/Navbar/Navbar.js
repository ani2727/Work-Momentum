// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import "./Navbar.css";

// const Navbar = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const closeDropdown = () => {
//     setIsDropdownOpen(false);
//   };

//   return (
//     <div className="navbar">
//       <div className="navbarContainer">
//         <img
//           src="./abhiTrainings-logo-white.png"
//           alt="Work Momentum"
//           className="logo"
//         />
//         <ul className="navItems">
//           <li>
//             <NavLink
//               className="navItem"
//               activeClassName="active"
//               exact
//               to="/"
//               onClick={closeDropdown}
//             >
//               Home
//             </NavLink>
//           </li>
//           <li className="dropdown">
//             <button className="navButton" onClick={toggleDropdown}>
//               Services
//             </button>
//             {isDropdownOpen && (
//               <ul className="dropdownMenu">
//                 <li>
//                   <NavLink
//                     className="dropdownItem"
//                     activeClassName="active"
//                     exact
//                     to="/services/web-development"
//                     onClick={closeDropdown}
//                   >
//                     Web Development
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink
//                     className="dropdownItem"
//                     activeClassName="active"
//                     exact
//                     to="/services/app-development"
//                     onClick={closeDropdown}
//                   >
//                     App Development
//                   </NavLink>
//                 </li>
//                 <li>
//                   <NavLink
//                     className="dropdownItem"
//                     activeClassName="active"
//                     exact
//                     to="/services/aws-devops"
//                     onClick={closeDropdown}
//                   >
//                     AWS & DevOps
//                   </NavLink>
//                 </li>
//               </ul>
//             )}
//           </li>
//           <li>
//             <NavLink
//               className="navItem"
//               activeClassName="active"
//               exact
//               to="/about"
//               onClick={closeDropdown}
//             >
//               About Us
//             </NavLink>
//           </li>
//           <li>
//             <NavLink
//               className="navItem connect"
//               activeClassName="active"
//               exact
//               to="/contact"
//               onClick={closeDropdown}
//             >
//               Let's Connect
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//       <div className="navbar">
//         <div className="navbarContainer">
//           <img
//             src="./abhiTrainings-logo-white.png"
//             alt="Work Momentum"
//             className="logo"
//           />
//           <ul className="navItems">
//             <li>
//               <NavLink
//                 className="navItem"
//                 activeClassName="active"
//                 exact
//                 to="/"
//               >
//                 Home
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 className="navItem"
//                 activeClassName="active"
//                 exact
//                 to="/services"
//               >
//                 Services
//               </NavLink>
//             </li>
// <li>
//   <NavLink
//     className="navItem"
//     activeClassName="active"
//     exact
//     to="/products"
//   >
//     Products
//   </NavLink>
// </li>
// <li>
//   <NavLink
//     className="navItem"
//     activeClassName="active"
//     exact
//     to="/careers"
//   >
//     Careers
//   </NavLink>
// </li>
//             <li>
//               <NavLink
//                 className="navItem"
//                 activeClassName="active"
//                 exact
//                 to="/about"
//               >
//                 About Us
//               </NavLink>
//             </li>
//             <li>
//               <NavLink
//                 className="navItem connect"
//                 activeClassName="active"
//                 exact
//                 to="/contact"
//               >
//                 Let's Connect
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
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
            <NavLink
              className="navItem"
              activeClassName="active"
              exact
              to="/"
              onClick={closeDropdown}
            >
              Home
            </NavLink>
          </li>
          <li className="dropdown">
            <span
              className={`navItem ${isDropdownOpen ? "active" : ""}`}
              onClick={toggleDropdown}
            >
              Services
            </span>
            {isDropdownOpen && (
              <ul className="dropdownMenu">
                <li>
                  <NavLink
                    className="dropdownItem"
                    activeClassName="active"
                    exact
                    to="/services/web-development"
                    onClick={closeDropdown}
                  >
                    Web Development
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdownItem"
                    activeClassName="active"
                    exact
                    to="/services/app-development"
                    onClick={closeDropdown}
                  >
                    App Development
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className="dropdownItem"
                    activeClassName="active"
                    exact
                    to="/services/aws-devops"
                    onClick={closeDropdown}
                  >
                    AWS & DevOPS
                  </NavLink>
                </li>
              </ul>
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
              onClick={closeDropdown}
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
              onClick={closeDropdown}
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
