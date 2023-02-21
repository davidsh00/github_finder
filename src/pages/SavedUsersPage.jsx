import { useContext, useEffect, useState } from "react";
import SearchBox from "../components/user/SearchBox";
import UserList from "../components/user/UserList";
import githubCtx from "../context/github/GithubCtx";

const SavedUsersPage = () => {
  const {
    state: { saved },
  } = useContext(githubCtx);

  const [savedByfilter, setSavedByFilter] = useState([]);
  useEffect(() => {
    setSavedByFilter(saved);
  }, [saved]);
  function searchHandler(filters) {
    const regex = new RegExp(filters.user);
    if (filters.user) {
      setSavedByFilter(() => {
        return saved.filter((item) => regex.test(item.name));
      });
    }
  }
  function resetHandler() {
    setSavedByFilter(saved);
  }

  return (
    <>
      <SearchBox
        onSubmit={searchHandler}
        onReset={resetHandler}
        filtersDisabled
      />
      <UserList items={savedByfilter} />
    </>
  );
};
export default SavedUsersPage;
