import { Link } from "react-router-dom";
import "./NavItem.css";
const NavItem = ({ children, href }) => {
  return (
    <li className="nav-item">
      <Link to={href}>{children}</Link>
    </li>
  );
};
export default NavItem;
