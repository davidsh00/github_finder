import UserDetails from "../components/user/UserDetails";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { githubUserDetails } from "../context/github/githubAction";
import Loading from "../components/shared/UIElement/Loading";
const UserPage = () => {
  const { uId } = useParams();
  const [userDetail, setUserDetail] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getUserDetail(uId);
  }, []);
  async function getUserDetail(uId) {
    const data = await githubUserDetails(uId);
    setUserDetail(data);
    setLoading(false);
  }
  return (
    <>
      {loading && <Loading />}
      <UserDetails item={userDetail} />
    </>
  );
};
export default UserPage;
