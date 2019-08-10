import React, { Component } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
const Foot = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
  text-align: center;
  height: 0.5rem;
  position: fixed;
  bottom: 0;
  z-index: 1000;
  border-top: 1px #999 solid;
  a {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-decoration: none;
    color: #aaa;
  }
  .active {
    color: red;
  }
`;
export class Footer extends Component {
  render() {
    return (
      <Foot>
        <NavLink to='/foundmusic'>
          <i className='fa fa-music' />
          音乐
        </NavLink>
        <NavLink to='/mymusic'>
          <i className='fa fa-music' />
          music
        </NavLink>
        <NavLink to='/friend'>
          <i className='fa fa-user-o' />
          friend
        </NavLink>
        <NavLink to='/account'>
          <i className='fa fa-user-o' />
          我的
        </NavLink>
      </Foot>
    );
  }
}

export default Footer;
