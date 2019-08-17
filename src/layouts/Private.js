import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { Privatefm, EverydaySong, Hotsong } from "../components";
// import Detail from "../components/hotSongs/Detail";

export class Private extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path='/foundmusics/private' component={Privatefm} />
          <Route path='/foundmusics/everydaySong' component={EverydaySong} />
          <Route path='/foundmusics/hotSong' component={Hotsong} />
        </Switch>
        {/* <Route path='/foundmusic/hotSong/detail' component={Detail} /> */}
      </div>
    );
  }
}

export default Private;
