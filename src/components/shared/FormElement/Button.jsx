import { Link } from "react-router-dom";
import "./Button.css";
const Button = ({ to, href, children, inverse, disabled, onClick, type }) => {
  if (to) {
    return (
      <Link
        className={`button ${inverse ? "inverse" : ""} ${
          disabled ? "disabled" : ""
        }`}
        to={to}
      >
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a
        className={`button ${inverse ? "inverse" : ""} ${
          disabled ? "disabled" : ""
        }`}
        href={href}
      >
        {children}
      </a>
    );
  }
  return (
    <button
      type={`${type ? type : "submit"}`}
      onClick={onClick}
      className={`button ${inverse ? "inverse" : ""} ${
        disabled ? "disabled" : ""
      }`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
export default Button;
