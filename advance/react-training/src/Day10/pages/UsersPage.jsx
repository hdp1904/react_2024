import React, { useEffect } from "react";
import {
  Link,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from "react-router-dom";

export default function UsersPage() {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route exact path={`${match.url}/:userId`}>
        <User />
      </Route>
      <Route exact ath={`${match.url}`}>
        <Users />
      </Route>
    </Switch>
  );
}

function Users() {
  const [users, setUsers] = React.useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function User() {
  const { userId } = useParams();

  const [user, setUser] = React.useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [userId]);

  return (
    <div>
      {user && (
        <div>
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p>{user.phone}</p>
        </div>
      )}
      <Link to="/users">Back</Link>
    </div>
  );
}
