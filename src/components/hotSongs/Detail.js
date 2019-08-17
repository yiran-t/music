import React, { Component } from "react";
import { req } from "../../Api/req";

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songId: "",
    };
  }
  componentWillMount() {
    console.log("啦啦啦啦啦啦");
    console.log(this.props.location.search);
    // this.setState({
    //   songId: this.props.search.songId,
    // });
    // console.log(this.state.songId);
    // req("/song/url?id="+songId+).then(res=>{
    //     console.log(res)
    // })
  }
  render() {
    return (
      <div>
        <h4>hotSongs详情</h4>
      </div>
    );
  }
}
export default Detail;
