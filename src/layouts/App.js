import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Head from "../components/Head";
import Footer from "../components/Footer";
import {
  Account,
  FoundMusic,
  Friend,
  MyMusic,
  Register,
  Login,
  LoginPhone,
  Register2,
  Register3,
} from "../views";
// import { Privatefm, EverydaySong, Hotsong } from "../components";
import RecommendSongListDetail from "../components/recommendSongListDetail";
export class App extends Component {
  render() {
    return (
      <div>
        <Head />
        <Switch>
          <Route path='/foundmusic' component={FoundMusic} />
          {/* <Redirect exact path='/' to='/foundmusic' /> */}
          <Route path='/mymusic' component={MyMusic} />
          <Route path='/friend' component={Friend} />
          <Route path='/account' component={Account} />
          <Route path='/register1' component={Register} />
          <Route path='/login' component={Login} />
          <Route path='/loginPhone' component={LoginPhone} />
          <Route path='/register1' component={Register} />
          <Route path='/register2' component={Register2} />
          <Route path='/register3' component={Register3} />
          <Route path='/songListDetail' component={RecommendSongListDetail} />
          <Route component={FoundMusic} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
