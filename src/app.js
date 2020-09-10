import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AutoMatch } from "./components/autoMatch";
import "./app.scss";
//import { UserMatch } from "./components/userMatch";
//import Settings from "./components/settings";

const SettingComponent = React.lazy(() => import("./components/settings"));
const UserMatchComponnet = React.lazy(() => import("./components/userMatch"));
function App() {
  return (
    <Router>
      <div className="container-body">
        <ul className="nav-bar">
          <li>
            <Link to="/">平台自动匹配</Link>
          </li>
          <li>
            <Link to="UserMatch">用户手动匹配</Link>
          </li>
          <li>
            <Link to="Settings">设置</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/" exact>
            <AutoMatch />
          </Route>
          <Route path="/UserMatch" exact>
            <Suspense fallback={<div>Loading...</div>}>
              <UserMatchComponnet />
            </Suspense>
          </Route>
          <Route path="/Settings" exact>
            <Suspense fallback={<div>Loading...</div>}>
              <SettingComponent />
            </Suspense>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
