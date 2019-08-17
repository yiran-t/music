import React, { Component } from "react";
import { Button } from "antd-mobile";
import { req } from "../Api/req";

export default class LoginPhone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: "",
      password: "",
    };
  }
  loginBtn() {
    console.log(this.state.phone);
    console.log(this.state.password);
    req(
      "/login/cellphone?phone=" +
        this.state.phone +
        "&password=" +
        this.state.password
    )
      .then(res => {
        console.log("success");
        console.log(res);
        this.props.history.push("/foundmusic");
      })
      // .then(res => {
      //   console.log(res);
      //   req("/login/status").then(resolve => {
      //     console.log(resolve);
      //   });
      // })
      .catch(err => err);
  }
  onInputChange(e) {
    let inputValue = e.target.value,
      inputName = e.target.name;
    this.setState({
      [inputName]: inputValue,
    });
  }

  render() {
    return (
      <div>
        <h2>手机号登录</h2>
        <input
          name='phone'
          type='text'
          placeholder='请输入手机号'
          onKeyUp={e => this.onInputChange(e)}
        />
        <input
          name='password'
          type='password'
          placeholder='请输入密码'
          onKeyUp={e => this.onInputChange(e)}
        />
        <Button type='primary' onClick={() => this.loginBtn()}>
          登录
        </Button>
      </div>
    );
  }
}
