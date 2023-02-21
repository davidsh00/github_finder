import MainHeader from "./navigation/MainHeader";
import MainNavigation from "./navigation/MainNavigation";
import "./Layout.css";
import MainFooter from "./footer/MainFooter";
const Layout = ({ children }) => {
  return (
    <div className="layout">
      <MainNavigation />
      <main>{children}</main>
      <MainFooter />
    </div>
  );
};
export default Layout;
