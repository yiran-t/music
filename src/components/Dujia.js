import React, { Component } from "react";
import { req } from "../Api/req";
import styled from "styled-components";

const Sty = styled.div`
  h4 {
    margin-bottom: 0.06rem;
  }
  .Dujia {
    display: flex;
    height: 2.4rem;
    width: 100%;
    flex-wrap: wrap;
    text-align: center;
  }
  .Dujia span {
    width: 50%;
    height: 1.2rem;
  }
  .Dujia img {
    width: 100%;
    height: 0.8rem;
    padding: 0 0.02rem;
  }
  .Dujia span:last-child {
    width: 100%;
    height: 1.2rem;
  }
  .Dujia span img:last-child {
    width: 100%;
    height: 1rem;
  }
  .Dujia p {
    color: rgba(80, 80, 80, 1);
    font-size: 0.11rem;
  }
`;
export default class Dujia extends Component {
  state = {
    arr: [],
  };
  componentDidMount() {
    let _this = this;
    req("/personalized/privatecontent").then(res => {
      // console.log(res.data.result);
      const result = res.data.result;
      _this.setState({
        arr: result,
      });
      //   console.log(_this.state.arr);
    });
  }
  render() {
    let _this = this;
    return (
      <Sty>
        <h4>独家放送</h4>
        <div className='Dujia'>
          {_this.state.arr.map((item, i) => {
            return (
              <span key={i}>
                <img src={item.picUrl} alt={i} />
                <p>{item.name}</p>
              </span>
            );
          })}
        </div>
      </Sty>
    );
  }
}
