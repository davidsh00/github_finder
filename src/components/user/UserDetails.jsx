import Card from "../shared/UIElement/Card";
import Avatar from "../shared/UIElement/Avatar";

import "./UserDetail.css";

const UserDetails = ({ item }) => {
  console.log(item);
  return (
    <Card>
      <div className="user-details">
        <h1 className="user-details__name">{item.name}</h1>
        <h3 className="user-details__email">{item.email}</h3>
        <div className="user-details__content">
          <Avatar image={item.avatar_url} />
          <p className="user-details__bio">{item.bio}</p>
          <div className="user-details__followers">
            Followers: {item.followers}
          </div>
          <div className="user-details__following">
            Following: {item.following}
          </div>
          <address className="user-details__location">{item.location}</address>
        </div>
      </div>
    </Card>
  );
};
export default UserDetails;
