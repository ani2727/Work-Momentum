import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <header>
      <img
        alt="gen-workmomentum-logo"
        className="logo"
        src="Gen-workmomentum-logo.png"
      />
      <nav className="nav-items-container">
        <NavLink to="/" className="nav-item" activeclassname="active">
          Home
        </NavLink>

        <NavLink to="/products" className="nav-item" activeclassname="active">
          Products
        </NavLink>

        <NavLink to="/services" className="nav-item" activeclassname="active">
          Services
        </NavLink>
      </nav>
      <div></div>
    </header>
  );
};

export default Header;
