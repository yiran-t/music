import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import "./uitil/rem";
import "./index.css";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./layouts/App";
ReactDOM.render(
  <HashRouter>
    <Switch>
      <Route path={"/"} component={App} />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
