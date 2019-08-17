import React, { Component } from "react";
import { req } from "../Api/req";
import styled from "styled-components";
import { Button } from "antd-mobile";
// import PropsTypes from "prop-types";
import { connect } from "react-redux";

const Reg = styled.div`
  input {
    border-radius: 0.1rem;
  }
`;

class Register extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      phone: "",
      password: "",
    };
  }
  regBtn() {
    const { tels, dispatch } = this.props;
    console.log(this.state.phone);
    console.log(this.state.password);
    req("/captcha/sent?phone=" + this.state.phone)
      .then(res => {
        console.log(res);
        // dispatch
        dispatch({
          type: "USER_INFO",
          payload: { tels: this.state.phone, pwds: this.state.password },
        });
        // 请求成功   跳转路径
        this.props.history.push({
          pathname: "/register2",
          search: `${"phone=" +
            this.state.phone +
            "&password=" +
            this.state.password}`,
        });
      })
      .catch(err => err);
  }
  // 取多个ipt的值
  onInputChange(e) {
    let inputValue = e.target.value,
      inputName = e.target.name;
    this.setState({
      [inputName]: inputValue,
    });
  }
  render() {
    // const { tels, dispatch } = this.props;
    return (
      <Reg>
        <div>
          <input
            type='text'
            name='phone'
            placeholder='手机号'
            onKeyUp={e => this.onInputChange(e)}
          />

          <input
            type='password'
            name='password'
            placeholder='密码'
            onKeyUp={e => this.onInputChange(e)}
          />
          <Button onClick={() => this.regBtn()} type='primary'>
            下一步1
          </Button>
          <h4>通过dispatch一个action，将手机号和密码进行修改</h4>
          {/* <button
            onClick={() =>
              dispatch({
                type: "USER_INFO",
                payload: { tels: this.state.phone, pwds: this.state.password },
              })
            }
          >
            vuexd 测试 dispatch
          </button> */}
        </div>
      </Reg>
    );
  }
}
// 获取store中的state数据
let mapStateToProps = state => {
  // console.log(state.tels);
  return state;
};
// 修改state中的数据    发送数据 -->  reducers去修改数据 -->  state数据更新
// let mapDispatchToProps = dispatch => ({
//   add: () => {
//     dispatch({ type: "USER_INFO", payload: [{ phone: "123" }] });
//   },
// });

// export default withRouter(Register);
// export default connect(mapStateToProps)(Register);
export default connect(mapStateToProps)(Register);
