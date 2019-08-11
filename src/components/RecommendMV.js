import React, { Component } from "react";
import { req } from "../Api/req";
import styled from "styled-components";

const Mv = styled.div`
  h4 {
    margin-bottom: 0.06rem;
  }
  .recMv {
    display: flex;
    height: 2.8rem;
    width: 100%;
    flex-wrap: wrap;
    text-align: center;
  }
  .recMv span {
    width: 50%;
    height: 1.4rem;
  }
  .recMv img {
    width: 1.8rem;
    height: 1.05rem;
  }
  .recMv p {
    color: rgba(80, 80, 80, 1);
    font-size: 0.11rem;
  }
`;
export default class RecommendMV extends Component {
  state = {
    arr: [],
  };
  componentDidMount() {
    req("/personalized/mv").then(res => {
      console.log(res.data.result);
      this.setState({
        arr: res.data.result,
      });
      console.log(this.state.arr);
    });
  }
  render() {
    return (
      <Mv>
        <h4>推荐MV</h4>
        <div className='recMv'>
          {this.state.arr.map((item, i) => {
            return (
              <span key={i}>
                <img src={item.picUrl} alt='1' />
                <p>{item.name}</p>
              </span>
            );
          })}
        </div>
      </Mv>
    );
  }
}
