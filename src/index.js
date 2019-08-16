import React from "react";
import { Route, Switch, HashRouter } from "react-router-dom";
import "./uitil/rem";
import "./index.css";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import App from "./layouts/App";
import Private from "./layouts/Private";
import { Provider } from "react-redux";
import store from "./redux/store";

//
ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path='/foundmusics' component={Private} />
        <Route path='/' component={App} />
      </Switch>
    </HashRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
