import React, { Component } from "react";
import { req } from "../Api/req";
import { Carousel } from "antd-mobile";
export default class Style extends Component {
  state = {
    banners: [],
    data: ["1", "2", "3",4,5,6,7,8],
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
      <div>
          <Carousel
            autoplay={true}
            infinite
          >
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
                  style={{ width: "100%", verticalAlign: "top" ,height:'100%'}}
                />
              </a>
            ))}
          </Carousel>
      </div>
    );
  }
}
