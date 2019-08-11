import React, { Component } from "react";
import { Link } from "react-router-dom";
import { req } from "../Api/req";
import { Carousel } from "antd-mobile";
import styled from "styled-components";
import RecommendSongList from "./RecommendSongList";

// import Privatefm from "./Privatefm";
// import EverydaySong from "./EverydaySong";
// import Hotsong from "./Hotsong";

const Styles = styled.div`
  .privateUl {
    width: 100%;
    height: 1.12rem;
    /* background: pink; */
    display: flex;
  }
  .privateUl a {
    display: flex;
    flex-direction: column;
    width: 33.3%;
    height: 0.8rem;
    /* background: skyblue; */
    margin: 0.16rem 0;
    justify-content: center;
    align-items: center;
  }
  .privateUl a i {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: skyblue;
    font-size: 0.16rem;
    line-height: 0.5rem;
    display: flex;
    justify-content: center;
    color: salmon;
    margin-bottom: 0.04rem;
  }
`;
export default class Style extends Component {
  state = {
    banners: [],
    data: ["1", "2", "3", "4", "5", "6", "7", "8"],
    imgHeight: 176,
  };
  //   async componentDidMount() {
  //     var result = await req("/banner").data.banners;
  //     this.setState({ banners: result });
  //   }
  componentDidMount() {
    req("/banner").then(res => {
      let result = res.data.banners;
      this.setState({ banners: result });
      console.log(result);
    });
    setTimeout(() => {
      this.setState({
        data: this.state.banners,
      });
    }, 100);
  }

  render() {
    return (
      <Styles>
        {/* 轮播 */}
        <Carousel autoplay={true} infinite>
          {this.state.data.map((item, index) => (
            <a
              key={index}
              href='##'
              style={{
                display: "inline-block",
                width: "100%",
                height: this.state.imgHeight,
              }}
            >
              <img
                src={item.imageUrl}
                alt=' '
                style={{ width: "100%", verticalAlign: "top", height: "100%" }}
              />
            </a>
          ))}
        </Carousel>
        {/* 轮播end */}

        {/* 私人FM */}
        <ul className='privateUl'>
          <Link to='/foundmusics/private'>
            <i className='fa fa-music' />
            私人 FM
          </Link>
          <Link to='/foundmusics/everydaySong'>
            <i className='fa fa-music' />
            每日歌曲推荐
          </Link>
          <Link to='/foundmusics/hotSong'>
            <i className='fa fa-music' />
            云音乐热歌榜
          </Link>
        </ul>
        <RecommendSongList />
      </Styles>
    );
  }
}
