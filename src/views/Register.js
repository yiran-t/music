import React, { Component } from "react";
// import { withRouter } from "react-router-dom";
import { req } from "../Api/req";
import styled from "styled-components";
import { Button } from "antd-mobile";
import PropsTypes from "prop-types";
import { connect } from "react-redux";
import store from "../redux/store";

const Reg = styled.div`
  input {
    border-radius: 0.1rem;
  }
`;

class Register extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    // const { tel, telAction } = props;
    this.state = {
      phone: "",
      password: "",
    };
  }
  regBtn() {
    console.log(this.state.phone);
    console.log(this.state.password);
    req("/captcha/sent?phone=" + this.state.phone)
      .then(res => {
        console.log(res);
        this.props.history.push({
          pathname: "/register2",
          search: `${"phone=" +
            this.state.phone +
            "&password=" +
            this.state.password}`,
        });
        //dispatch
        // store.dispatch({
        //   type: "USER_INFO",
        //   payload: {
        //     tel: this.state.phone,
        //     pwd: this.state.password,
        //   },
        // });
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
    const { tels, dispatch } = this.props;
    // const { pwds, dispatch } = this.props;
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
          <h4>当前取到的值为:{tels}</h4>
          <button
            onClick={() =>
              dispatch({
                type: "USER_INFO",
                payload: { tels: this.state.phone },
              })
            }
          >
            vuex取值测试
          </button>
        </div>
      </Reg>
    );
  }
}
// 获取store中的state数据
let mapStateToProps = state => {
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
export default connect(state => state)(Register);
