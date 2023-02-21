import Button from "../shared/FormElement/Button";

import './ToggleSavedUser.css'
const ToggleSavedUser = ({ isSaved, onClick }) => {
  return (
    <div className={`toggle-saved-btn ${isSaved ? "show" : ""}`}>
      <Button onClick={onClick} inverse={isSaved}>
        {isSaved ? "Remove From Saved" : "Save User"}
      </Button>
    </div>
  );
};
export default ToggleSavedUser;
