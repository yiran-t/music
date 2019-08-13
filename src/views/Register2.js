import React, { Component } from "react";
import { Button } from "antd-mobile";
// import { req } from "../Api/req";
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

  //   holderNextStep() {
  //     req("", {}).then(res => {
  //       console.log(res);
  //     });
  //   }
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
