import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import { Button } from "antd-mobile";
import Login from "./Login";
import { connect } from "react-redux";
class Account extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    // const { tel, pwd, nickname, userFlag } = this.props;
    const { tels } = this.props;
    return (
      <div>
        账号
        {/* <h4>这里显示用户手机号{tel}</h4>
        <h4>这里显示用户昵称{nickname}</h4>
        <h4>这里显示用户密码{pwd}</h4>
        <h4>这里显示用户手机号{userFlag}</h4> */}
        <h4>这里显示用户手机号{tels}</h4>
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
