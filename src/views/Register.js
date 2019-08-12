import React, { Component } from "react";
import { req } from "../Api/req";
import styled from "styled-components";
import { Button } from "antd-mobile";

const Reg = styled.div`
  input {
    border-radius: 0.1rem;
  }
`;

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phone: "",
      // yzm: "",
      password: "",
      // nickname: "",
    };
  }
  registBtn() {
    req("/captcha/sent", {
      // captcha: this.state.yzm,
      phone: this.state.phone,
      // password: this.state.password,
      // nickname: this.state.nickname,
    }).then(res => {
      console.log(res);
      console.log(11);
      // 手机号、密码  格式输入正确，传参phone   接收验证码
      // this.$router.push({ pathname: "/register2" });
      this.props.history.push({ pathname: "/register2" });
    });
  }
  onInputChange(e) {
    // ES6中变量名是一个变量
    // let _this = this;
    let inputValue = e.target.value,
      inputName = e.target.name;
    this.setState(
      {
        [inputName]: inputValue,
      },
      function() {
        // console.log(e);
        console.log(this.state.phone);
        // console.log(this.state.yzm);
      }
    );
  }
  render() {
    // const { getFieldProps } = this.props.form;
    return (
      <Reg>
        <div>
          <input
            type='text'
            name='phone'
            placeholder='手机号'
            onKeyUp={e => this.onInputChange(e)}
          />
          {/* <input
            type='text'
            name='yzm'
            placeholder='验证码'
            onKeyUp={e => this.onInputChange(e)}
          /> */}
          <input
            type='password'
            name='password'
            placeholder='密码'
            onKeyUp={e => this.onInputChange(e)}
          />
          {/* <input
            type='text'
            name='nickname'
            placeholder='昵称'
            onKeyUp={e => this.onInputChange(e)}
          /> */}
          <Button onClick={() => this.registBtn} type='primary'>
            注册
          </Button>
        </div>
      </Reg>
    );
  }
}
