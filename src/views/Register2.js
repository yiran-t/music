import React, { Component } from "react";
import { Button } from "antd-mobile";
import { req } from "../Api/req";
import styled from "styled-components";

const Re = styled.div`
  input {
    border-radius: 0.1rem;
  }
`;
export default class Register2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valueYzm: "",
    };
  }

  onInputChange(e) {
    this.setState({
      valueYzm: e.target.value,
    });
  }
  // const _this = this;

  holderNextStep() {
    // console.log(this.props);
    // console.log(this.props.location.search);
    const ph = this.props.location.search.split("=")[1].split("&")[0];
    const pwd = this.props.location.search.split("=")[2];
    console.log(ph);
    console.log(pwd);
    console.log(this.state.valueYzm);
    this.props.history.push({
      pathname: "/register3",
      search: "phone=ph&password=pwd&captcha=this.state.valueYzm",
    });
    // this.props.location.search.splice("=")[0];
    req("/captcha/verify?phone=" + ph + "&captcha" + "=" + this.state.valueYzm)
      .then(res => {
        console.log(11);
        console.log(res);
        this.props.history.push({
          pathname: "/register3",
          search: `${"phone=" +
            ph +
            "&password=" +
            pwd +
            "&captcha=" +
            this.state.valueYzm}`,
        });
      })
      .catch(err => err);
  }
  render() {
    return (
      <Re>
        <input
          type='text'
          name='yxm'
          onKeyUp={this.onInputChange.bind(this)}
          defaultValue={this.setState.valueYzm}
          placeholder='请输入验证码'
        />
        <Button type='primary' onClick={this.holderNextStep.bind(this)}>
          下一步
        </Button>
      </Re>
    );
  }
}
