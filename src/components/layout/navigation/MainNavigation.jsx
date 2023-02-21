import { Link } from "react-router-dom";

import MainHeader from "./MainHeader";

import "./MainNavigation.css";
import NavLinks from "./NavLinks";
const MainNavigation = () => {
  return (
    <MainHeader>
      <div className="main-nav">
        <h1 className=" main-nav__title">
          <Link to="/">Github-Finder</Link>
        </h1>
        <nav>
          <NavLinks />
        </nav>
      </div>
    </MainHeader>
  );
};
export default MainNavigation;
