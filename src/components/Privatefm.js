import React, { Component } from "react";
import { req } from "../Api/req";

export default class Privatefm extends Component {
  // 请求到的数据有问题
  // componentDidMount() {
  //   req("/personal_fm")
  //     .then(res => {
  //       console.log(res.data);
  //       console.log(res.data.data);
  //     })
  //     .catch(err => err);
  // }
  render() {
    return (
      <div>
        <h2>Private FM</h2>
      </div>
    );
  }
}
