import { NavLink } from "react-router-dom";
import NavItem from "./NavItem";
import "./NavLinks.css";
const NavLinks = () => {
  return (
    <ul className="nav-links">
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/saved">Saved</NavLink></li>
      <li><NavLink to="/search/users">Search</NavLink></li>

    </ul>
  );
};

export default NavLinks;
