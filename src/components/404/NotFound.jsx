import CenterBox from "../shared/UIElement/CenterBox";
import "./NotFound.css";
const NotFound = () => {
  return (
    <CenterBox>
      <div className="not-found">
        <p>OOPS PAGE NOT FOUND</p>
        <span className="not-found__code">404</span>
        <p>WE ARE SORRY, BUT THE PAGE YOU REQUESTED WAS NOT FOUND</p>
      </div>
    </CenterBox>
  );
};
export default NotFound;
