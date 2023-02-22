import "./BackDrop.css";
const BackDrop = ({ className, children, onClick }) => {
  return (
    <div className={`backdrop ${className ? className : ""}`} onClick={onClick}>
      {children}
    </div>
  );
};
export default BackDrop;
