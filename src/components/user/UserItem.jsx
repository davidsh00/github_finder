import { Link } from "react-router-dom";
import Avatar from "../shared/UIElement/Avatar";
import Card from "../shared/UIElement/Card";
import UserActions from "./UserActions";
import "./UserItem.css";
const UserItem = ({ item }) => {
  return (
    <li className="user-item">
      <Link to={`/user/${item.name}`}>
        <Card>
          <div className="user-item__content">
            <Avatar alt={item.name} image={item.image} />
            <h2 className="user-item__title">{item.name}</h2>
          </div>
          <UserActions item={item} />
        </Card>
      </Link>
    </li>
  );
};
export default UserItem;
