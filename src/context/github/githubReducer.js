import { isSaveItem } from "../../helper/github";
import { githubActionTypes } from "./githubActionTypes";

const githubReducer = (state, action) => {
  switch (action.type) {
    case githubActionTypes.INIT_SAVE_USERS:
      const localSavedUsersJson = localStorage.getItem("savedUsers");
      if (!localSavedUsersJson) {
        return state;
      }
      const localSavedUsers = JSON.parse(localSavedUsersJson);

      return { ...state, saved: localSavedUsers };

    case githubActionTypes.TOGGLE_SAVE_USER: {
      if (isSaveItem(state.saved, action.payload.id)) {
        const filterSavedUsers = state.saved.filter(
          (item) => item.id !== action.payload.id
        );
        localStorage.setItem("savedUsers", JSON.stringify(filterSavedUsers));
        return { ...state, saved: filterSavedUsers };
      }
      const newSavedUsers = [...state.saved, action.payload];
      localStorage.setItem("savedUsers", JSON.stringify(newSavedUsers));
      return { ...state, saved: newSavedUsers };
    }
    default:
      return state;
  }
};

export default githubReducer;
