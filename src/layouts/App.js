import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Head from "../components/Head";
import Footer from "../components/Footer";
import { Account, FoundMusic, Friend, MyMusic } from "../views";
import { Privatefm, EverydaySong, Hotsong } from "../components";
export class App extends Component {
  render() {
    return (
      <div>
        <Head />
        <Switch>
          <Route path='/foundmusic' component={FoundMusic} />
          <Redirect exact path='/' to='/foundmusic' />
          <Route path='/mymusic' component={MyMusic} />
          <Route path='/friend' component={Friend} />
          <Route path='/account' component={Account} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
