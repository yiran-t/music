import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd-mobile";

export default class Login extends Component {
  render() {
    return (
      <div>
        <h4>登录</h4>
        <Link to='/loginPhone'>
          <Button type='primary'>手机号登录</Button>
        </Link>
        <Link to='/register1'>
          <Button type='primary'>注册</Button>
        </Link>
      </div>
    );
  }
}
