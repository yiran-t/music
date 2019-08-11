import React, { Component } from "react";
import { NavLink, Route, HashRouter } from "react-router-dom";
import Register from "./Register";
import { Button } from "antd-mobile";
export class Account extends Component {
  render() {
    return (
      <div>
        账号

          <NavLink to='/register'>
            <Button type='primary'>退出登录</Button>
          </NavLink>
          <Route path='/register' component={Register} />

      </div>
    );
  }
}

export default Account;
