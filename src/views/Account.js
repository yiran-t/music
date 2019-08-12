import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import { Button } from "antd-mobile";
import Login from "./Login";
export class Account extends Component {
  render() {
    return (
      <div>
        账号
        <NavLink to='/login'>
          <Button type='primary'>退出登录</Button>
        </NavLink>
        <Route path='/login' component={Login} />
      </div>
    );
  }
}

export default Account;
