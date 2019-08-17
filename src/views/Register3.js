import React, { Component } from "react";
import { Button } from "antd-mobile";
import { req } from "../Api/req";
import styled from "styled-components";
import { connect } from "react-redux";

const Re = styled.div`
  input {
    border-radius: 0.1rem;
  }
`;
class Register3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: "",
    };
  }

  onInputChange(e) {
    this.setState({
      nickname: e.target.value,
    });
  }

  holderNextStep() {
    const { nicknames, dispatch } = this.props;
    console.log(this.props.location.search);
    let ph = this.props.location.search.split("=")[1].split("&")[0];
    console.log(ph);
    let pwd = this.props.location.search.split("=")[2].split("&")[0];
    console.log(pwd);
    let yzm = this.props.location.search.split("=")[3];
    console.log(yzm);
    console.log(this.state.nickname);
    dispatch({
      type: "USER_INFO",
      payload: { nicknames: this.state.nickname },
    });
    req(
      "/register/cellphone?phone=" +
        ph +
        "&password=" +
        pwd +
        "&captcha=" +
        yzm +
        "&nickname=" +
        this.state.nickname
    )
      .then(res => {
        console.log(res);
        this.props.history.push("/foundmusic");
        console.log(111);
      })
      .catch(err => err);
  }
  render() {
    // const { nicknames, dispatch } = this.props;
    return (
      <Re>
        <input
          type='text'
          name='yxm'
          onKeyUp={this.onInputChange.bind(this)}
          defaultValue={this.setState.nickname}
          placeholder='请输入昵称'
        />
        <Button type='primary' onClick={this.holderNextStep.bind(this)}>
          注册
        </Button>
        <h4>测试把昵称传给redux，并在account组件中进行展示</h4>
        {/* <Button
          type='primary'
          onClick={() =>
            dispatch({
              type: "USER_INFO",
              payload: { nicknames: this.state.nickname },
            })
          }
        >
          测试nickname
        </Button> */}
      </Re>
    );
  }
}
export default connect(state => state)(Register3);
