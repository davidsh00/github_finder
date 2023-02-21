import { createContext, useEffect, useReducer } from "react";
import { githubActionTypes } from "./githubActionTypes";
import githubReducer from "./githubReducer";
const githubCtx = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    saved: [],
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);
  useEffect(() => {
    dispatch({ type: githubActionTypes.INIT_SAVE_USERS });
  }, []);
  return (
    <githubCtx.Provider value={{ state, dispatch }}>
      {children}
    </githubCtx.Provider>
  );
};
export default githubCtx;
