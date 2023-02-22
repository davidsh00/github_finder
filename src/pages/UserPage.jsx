import UserDetails from "../components/user/UserDetails";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { githubUserDetails } from "../context/github/githubAction";
import Loading from "../components/shared/UIElement/Loading";
import Error from "../components/shared/UIElement/Error";
const UserPage = () => {
  const { uId } = useParams();
  const [userDetail, setUserDetail] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  useEffect(() => {
    getUserDetail(uId);
  }, [error]);
  async function getUserDetail(uId) {
    const data = await githubUserDetails(uId);
    setLoading(false);
    if (data.message) {
      setError(data.message);
      return;
    }
    setUserDetail(data);
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
      <UserDetails item={userDetail} />
    </>
  );
};
export default UserPage;
