import "./BackDrop.css";
const BackDrop = ({ children }) => {
  return <div className="backdrop">{children}</div>;
};
export default BackDrop;
