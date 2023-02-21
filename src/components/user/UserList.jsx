import Card from "../shared/UIElement/Card";
import UserItem from "./UserItem";

import "./UserList.css";

const UserList = ({ items }) => {
  if (items.length === 0 || !items) {
    return <Card>There is No item to show</Card>;
  }
  return (
    <ul className="user-list">
      {items.map((item) => (
        // github Api return duplicate Items therefore i use math.random
        <UserItem key={item.id + Math.random()} item={item} />
      ))}
    </ul>
  );
};
export default UserList;
