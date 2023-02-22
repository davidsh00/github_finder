import Card from "../shared/UIElement/Card";
import Avatar from "../shared/UIElement/Avatar";

import "./UserDetail.css";
import UserRepos from "./UserRepos";
import UserActions from "./UserActions";

const UserDetails = ({ item }) => {
  console.log(item);
  return (
    <Card>
      <div className="user-details">
        <header className="user-details__header">
          <h1 className="user-details__login">{item.login}</h1>
          <span>&nbsp; -&nbsp; </span>
          <h1 className="user-details__name">{item.name}</h1>
        </header>
        <h3 className="user-details__email">{item.email}</h3>
        <div className="user-details__content">
          <Avatar image={item.avatar_url} width="10rem" height="10rem" />
          <p className="user-details__bio">{item.bio}</p>
          <div className="user-details__follow">
            <div className="user-details__followers">
              Followers: {item.followers}
            </div>
            <div className="user-details__following">
              Following: {item.following}
            </div>
          </div>
          <address className="user-details__location">{item.location}</address>
          <UserRepos repos={item.repos} />
        </div>
        <UserActions
          item={{ id: item.id, name: item.login, image: item.avatar_url }}
        />
      </div>
    </Card>
  );
};
export default UserDetails;
