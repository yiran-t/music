import React, { Component } from "react";
import { Tabs, WhiteSpace } from "antd-mobile";
import { Style, Rank, Songlist, Mv } from "../components";
const tabs = [
  { title: "个性推荐" },
  { title: "歌单" },
  { title: "主播电台" },
  { title: "排行榜" },
];

const TabExample = () => (
  <div>
    {/* 个性推荐 */}
    <WhiteSpace />
    <Tabs
      tabs={tabs}
      initialPage={0}
      animated={false}
      useOnPan={false}
      swipeable={false}
    >
      <Style />
      <Songlist />
      <Mv />
      <Rank />
    </Tabs>
    <WhiteSpace />
    {/* 个性推荐  end*/}
  </div>
);

export class FoundMusic extends Component {
  render() {
    return (
      <div>
        <TabExample />
      </div>
    );
  }
}

export default FoundMusic;
