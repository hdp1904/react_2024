import { Suspense, lazy } from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Fallback from "./lectures/Performance/Fallback";

const Performance = lazy(() => import("./lectures/Performance"));

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/performance">Performance</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/performance">
            <Suspense fallback={<Fallback />}>
              <Performance />
            </Suspense>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
