import { useCallback, useEffect, useRef, useState } from "react";
import Loading from "../components/shared/UIElement/Loading";
import SearchBox from "../components/user/SearchBox";
import UserList from "../components/user/UserList";
import Error from "../components/shared/UIElement/Error";
import { githubSearcUsers } from "../context/github/githubAction";

const SearchUsersPage = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [seUsers, setSeUsers] = useState({ total: 0, items: [] });
  const [page, setPage] = useState(0);
  const [filters, setFilters] = useState({});
  const latestPage = useRef(null);
  const latestLoading = useRef(false);
  latestPage.current = page;
  latestLoading.current = loading;
  fillPage();

  const onScroll = () => {
    function barHeight() {
      const actualHeight = window.innerHeight;
      const contentHeight =
        document.getElementById("controlHeight").clientHeight;
      return contentHeight - actualHeight;
    }
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight - barHeight()) {
      if (!latestLoading.current) {
        searchHandler(latestPage.current + 1);
      }
    }
  };

  const scrollH = useCallback(() => {
    document.addEventListener("scroll", onScroll);
  }, [filters]);

  useEffect(() => {
    if (page === 0 && filters.user) {
      scrollH();
      searchHandler(1);
    }
  }, [filters]);

  async function setFilterHandler(formFilters) {
    setFilters(formFilters);
    setPage(0);
  }
  async function searchHandler(searchPage) {
    console.log(latestPage, seUsers);
    if (
      latestLoading.current ||
      !filters.user ||
      error ||
      (latestPage.current >= 1 && seUsers.total >= seUsers.items.length)
    ) {
      return;
    }
    setLoading(true);
    setPage(searchPage);
    const data = await githubSearcUsers(filters, searchPage);
    setLoading(false);
    if (!data.items) {
      setError(data.message);
      setPage(searchPage - 1);
      return;
    }

    if (searchPage == 1) {
      setSeUsers(data);
      return;
    }

    setSeUsers((prev) => {
      return { ...prev, items: [...prev.items, ...data.items] };
    });
  }
  function searchResetHandler() {
    setSeUsers({ total: 0, items: [] });
    setPage(0);
    setFilters({});
  }
  function fillPage() {
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    if (clientHeight == scrollHeight && latestPage.current > 0) {
      searchHandler(latestPage.current + 1);
    }
  }
  return (
    <>
      {error && (
        <Error
          message={error}
          onClose={() => {
            setError("");
          }}
        />
      )}
      {loading && <Loading />}
      <SearchBox onSubmit={setFilterHandler} onReset={searchResetHandler} />
      <UserList items={seUsers.items} />
    </>
  );
};
export default SearchUsersPage;
