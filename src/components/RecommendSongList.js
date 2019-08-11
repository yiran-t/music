import React, { Component } from "react";
import { req } from "../Api/req.js";
import styled from "styled-components";
const Recommend = styled.div`
  h4 {
    margin-bottom: 0.06rem;
  }
  .recommendList {
    display: flex;
    height: 2.8rem;
    width: 100%;
    flex-wrap: wrap;
    text-align: center;
  }
  .recommendList span {
    width: 33.3%;
    height: 1.4rem;
  }
  .recommendList img {
    width: 1.15rem;
    height: 1.05rem;
  }
  .recommendList p {
    color: rgba(80, 80, 80, 1);
    font-size: 0.11rem;
  }
`;

export default class RecommendSongList extends Component {
  state = {
    arr: [],
  };

  componentDidMount() {
    let _this = this;
    req("/personalized").then(res => {
      // console.log(res.data.result);
      let arr1 = res.data.result;
      let arr2 = [];
      arr2.push(arr1.slice(0, 6));
      // console.log(arr2[0]);
      _this.setState({
        arr: arr2[0],
      });
      // console.log(_this.state.arr);
    });
    // console.log(_this.state.arr);
  }
  render() {
    let _this = this;
    return (
      <Recommend>
        <h4>推荐歌单 > </h4>
        <div className='recommendList'>
          {_this.state.arr.map((item, i) => {
            return (
              <span key={i}>
                <img src={item.picUrl} alt='1' />
                <p>{item.name}</p>
              </span>
            );
          })}
        </div>
      </Recommend>
    );
  }
}
