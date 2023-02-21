import { useEffect, useState } from "react";
import Loading from "../components/shared/UIElement/Loading";
import SearchBox from "../components/user/SearchBox";
import UserList from "../components/user/UserList";
import { githubSearcUsers } from "../context/github/githubAction";

const SearchUsersPage = () => {
  const [loading, setLoading] = useState(false);
  const [seUsers, setSeUsers] = useState({ total: 0, items: [] });
  const [page, setPage] = useState(0);
  const [filters, setFilter] = useState({});
  const onScroll = () => {
    console.log("onscroll call");
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight >= scrollHeight) {
      setPage(page + 1);
    }
  };
  useEffect(() => {
    console.log("enter use effect");
    if (seUsers.items.length > 0 && seUsers.items.length >= seUsers.total) {
      console.log("load finised");
      return;
    }
    document.addEventListener("scroll", onScroll);

    if (page > 1 && !loading) {
      console.log("more load", `page:${page + 1}`);
      moreSearch(page + 1);
    }
    return () => window.removeEventListener("scroll", onScroll);
  }, [page]);
  async function searchHandler(formFilters) {
    setLoading(true);
    setFilter(formFilters);
    const data = await githubSearcUsers(formFilters, 1);
    console.log(data, "data fetched");
    setSeUsers(data);
    setPage(1);
    setLoading(false);
  }
  async function moreSearch(page) {
    setLoading(true);
    const newData = await githubSearcUsers(filters, page);
    setSeUsers((prev) => {
      return { ...prev, items: [...prev.items, ...newData.items] };
    });
    setLoading(false);
  }
  function searchResetHandler() {
    setSeUsers({ total: 0, items: [] });
  }

  return (
    <>
      {loading && <Loading />}
      <SearchBox onSubmit={searchHandler} onReset={searchResetHandler} />
      <UserList items={seUsers.items} />
    </>
  );
};
export default SearchUsersPage;
