import React, { Component } from "react";

class Friend extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { tel } = this.props;
    return (
      <div>
        朋友--测试--在这里接收user的状态
        {/* <h2>11{tel}</h2> */}
      </div>
    );
  }
}

export default Friend;
