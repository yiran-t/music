import React, { Component } from "react";
import { req } from "../Api/req";
import styled from "styled-components";

const Reg = styled.div`
  input {
    border-radius: 0.1rem;
  }
`;

export default class Register extends Component {
  componentDidMount() {
    req("/register/cellphone").then(res => {
      console.log(res);
    });
  }
  render() {
    return (
      <Reg>
        <h4>注册</h4>
        <div>
          <input type='text' placeholder='手机号' />
          <input type='text' placeholder='验证码' />
          <input type='password' placeholder='密码' />
          <input type='text' placeholder='昵称' />
        </div>
      </Reg>
    );
  }
}
