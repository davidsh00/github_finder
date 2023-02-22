import BackDrop from "./BackDrop";
import closeIcon from "../../../assets/icons/close_icon.png";
import "./Error.css";
import { useState } from "react";

const Error = ({ message, onClose }) => {
  const [showError, setShowError] = useState(true);
  return (
    <BackDrop onClick={onClose} className={`error ${showError ? "" : "hide"}`}>
      <img
        src={closeIcon}
        alt="close"
        className="error__close"
        onClick={(e) => {
          setShowError(false);
          e.stopPropagation();
        }}
      />
      <div className="error__message">{message}</div>
    </BackDrop>
  );
};
export default Error;
