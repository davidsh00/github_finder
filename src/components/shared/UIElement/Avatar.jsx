import "./Avatar.css";
const Avatar = ({ className, image, alt, width, height }) => {
  return (
    <div className={`avatar ${className?className:''}`} style={width ? { width, height } : {}}>
      <img  src={image} alt={alt} />
    </div>
  );
};
export default Avatar;
