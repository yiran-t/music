import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import { Button } from "antd-mobile";
import Login from "./Login";
import { connect } from "react-redux";
import { req } from "../Api/req";
// import store from "../redux/store";
class Account extends Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount() {
  //   req("/login/status").then(res => {
  //     console.log(111);
  //     console.log(res);
  //   });
  // }

  render() {
    console.log(this.props);
    // const { tel, pwd, nickname, userFlag } = this.props;
    const { tels, pwds, nicknames } = this.props;
    return (
      <div>
        账号
        {/* {store.getState()} */}
        <h4>这里显示用户手机号--{tels}</h4>
        <h4>这里显示用户密码--{pwds}</h4>
        <h4>这里显示用户昵称--{nicknames}</h4>
        <NavLink to='/login'>
          <Button type='primary'>退出登录</Button>
        </NavLink>
        <Route path='/login' component={Login} />
      </div>
    );
  }
}

let mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(Account);
