import { useEffect, useState } from "react";
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
  const onScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight) {
      setPage(page + 1);
    }
  };
  useEffect(() => {
    if (
      error ||
      (seUsers.items.length > 0 && seUsers.items.length >= seUsers.total) ||
      !page
    ) {
      return;
    }

    document.addEventListener("scroll", onScroll);

    searchHandler(page, (data) => {
      // auto search more User for Fill page
      const totalData =
        (seUsers.items.length ? seUsers.items.length : 0) + data.items.length;
      if (totalData * 40 < document.documentElement.clientHeight) {
        setPage(page + 1);
      }
    });

    return () => document.removeEventListener("srcoll", onScroll);
  }, [page, filters, error]);
  async function setFilterHandler(formFilters) {
    setLoading(true);
    setPage(1);
    setFilters(formFilters);

    setLoading(false);
  }
  async function searchHandler(page, cb) {
    setLoading(true);
    const data = await githubSearcUsers(filters, page);
    setLoading(false);
    if (!data.items) {
      setError(data.message);
      return;
    }
    cb(data);
    if (page === 1) {
      setSeUsers(data);
      return;
    } else {
      setSeUsers({ ...seUsers, items: [...seUsers.items, ...data.items] });
    }
  }
  function searchResetHandler() {
    setSeUsers({ total: 0, items: [] });
    setPage(0);
    setFilters({});
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
