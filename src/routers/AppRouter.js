import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import Loadable from "react-loadable";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
// import Home from "../components/Home";
// import HelloWorld from "../components/HelloWorld";
// import GoodnightMoon from "../components/GoodnightMoon";

const AsyncHome = Loadable({
  loader: () => import("../components/Home"),
  loading() {
    return <div>Loading...</div>;
  }
});
const AsyncHelloWorld = Loadable({
  loader: () => import("../components/HelloWorld"),
  loading() {
    return <div>Loading...</div>;
  }
});

const AsyncGoodnightMoon = Loadable({
  loader: () => import("../components/GoodnightMoon"),
  loading() {
    return <div>Loading...</div>;
  }
});

export const history = createHistory();

const AppRouter = props => {
  return (
    <div>
      <Router history={history}>
        <div>
          <NavBar></NavBar>
          <Switch>
            {/* <Route path="/" component={Home} exact></Route>
            <Route path="/hello" component={HelloWorld} exact></Route>
            <Route path="/goodby" component={GoodnightMoon} exact></Route> */}

            <Route path="/" component={AsyncHome} exact></Route>
            <Route path="/hello" component={AsyncHelloWorld} exact></Route>
            <Route path="/goodby" component={AsyncGoodnightMoon} exact></Route>
          </Switch>
          <Footer></Footer>
        </div>
      </Router>
    </div>
  );
};

export default AppRouter;
