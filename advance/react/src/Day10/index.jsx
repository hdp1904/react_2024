import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  NavLink,
} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import UsersPage from "./pages/UsersPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";

import "./day10.css";
import TopicsPage from "./pages/TopicsPage";

export default function Day10() {
  return (
    <Router>
      <h1>Router</h1>
      <nav>
        <ul>
          <li>
            <NavLink exact activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to="/users">
              Users
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="active" to="/topics">
              Topics
            </NavLink>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/about">
          <AboutPage />
        </Route>
        <Route path="/users">
          <UsersPage />
        </Route>
        <Route path="/topics">
          <TopicsPage />
        </Route>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="*">
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  );
}
