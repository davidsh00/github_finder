import Card from "../shared/UIElement/Card";
import "./UserRepos.css";
const UserRepos = ({ repos }) => {
  if (repos?.length === 0) {
    return (
      <div className="repo">
        <Card>There is no repo</Card>
      </div>
    );
  }
  return (
    <div className="repo">
      <h3 className="repo__title">Repositories</h3>
      <ul className="repo__list">
        {repos?.map((repo) => (
          <li key={repo.id} className="repo__item">
            <a href={repo.url}>
              <div className="repo__name">{repo.name}</div>

              <div className="repo__lang">{repo.language}</div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default UserRepos;
