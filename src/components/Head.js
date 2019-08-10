import React, { Component } from "react";
import styled from "styled-components";
const Header = styled.div`
position:relative;
top:0;
z-index:1000;
  display: flex;
  text-align: center;
  height: 0.3rem;
  line-height: 0.3rem;
  padding: 0.07rem 0;
  i {
    flex: 1;
    font-size: 0.2rem;
    color: #ccc;
    text-align: center;
    line-height: 0.3rem;
  }
  span {
    flex: 4;
    background: #ccc;
    border-radius: 0.15rem;
    font-size: 0.12rem;
    color: rgba(80, 80, 80, 1);
  }
`;
export class Head extends Component {
  tap = () => {
    console.log(231);
  };
  render() {
    return (
      <Header>
        <i className='fa fa-microphone' />
        <span onClick={this.tap}>搜索音乐、歌词、电台</span>
        <i className='fa fa-signal' />
      </Header>
    );
  }
}

export default Head;
