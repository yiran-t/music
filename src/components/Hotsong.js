import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { req } from "../Api/req";
import styled from "styled-components";
const Li = styled.div`
  .playListSongs {
    background: skyblue;
    margin: 0.1rem;
  }
  .stopPro1 {
    background: pink;
    width: 0.1rem;
  }
  .stopPro2 {
    background: salmon;
    width: 3rem;
  }
`;
class Hotsong extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      hotSongId: "",
    };
  }
  componentWillMount() {
    //  发起歌单列表请求
    req("/top/list?idx=1").then(res => {
      console.log(res.data.playlist);
      console.log(res.data.playlist.tracks);
      this.setState({
        list: res.data.playlist.tracks,
      });
    });
  }
  // 点击歌曲   把当前歌曲id值传至详情页
  detailTap(e) {
    console.log(e.currentTarget.getAttribute("data-id"));
    this.setState({
      hotSongId: e.currentTarget.getAttribute("data-id"),
    });
    this.props.history.push({
      pathname: "/detail",
      search: `${"id=" + this.state.hotSongId}`,
    });
  }
  render() {
    // dataSet()  data-id
    return (
      <Li>
        {this.state.list.map((item, index) => {
          return (
            <div
              key={index}
              className='playListSongs'
              onClick={this.detailTap.bind(this)}
              data-id={item.id}
            >
              <div className='stopPro1'>
                <span>{index}</span>
              </div>
              <div className='stopPro2'>
                <p>{item.name}</p>
                <p>
                  {item.ar[0].name} -- <span>{item.name}</span>
                </p>
              </div>
            </div>
          );
        })}
      </Li>
    );
  }
}
export default Hotsong;
