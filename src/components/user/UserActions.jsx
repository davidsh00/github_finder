import { useContext } from "react";
import { githubActionTypes } from "../../context/github/githubActionTypes";
import githubCtx from "../../context/github/GithubCtx";
import { isSaveItem } from "../../helper/github";
import ToggleSavedUser from "./ToggleSavedUser";

import "./UserActions.css";
const UserActions = ({ item }) => {
  const { state, dispatch } = useContext(githubCtx);
  function toggleSavedHandler(e) {
    e.preventDefault()
    dispatch({ type: githubActionTypes.TOGGLE_SAVE_USER, payload: item });
  }
  return (
    <div className="user-actions">
      <ToggleSavedUser
        isSaved={isSaveItem(state.saved, item.id)}
        onClick={toggleSavedHandler}
      />
    </div>
  );
};
export default UserActions;
