import React, { useState } from "react";
import Header from "../Component/Header";
import Style from "./Home.module.css";
import SideHeaderWithTitle from "../Component/SideHeaderWithTitle";
import SideHeaderWithoutTitle from "../Component/SideHeaderWihtoutTitle";
import YoutubeTagsComponent from "../Component/YoutubeTags";
import YoutubeVideosComponent from "../Component/YoutubeVideos";

export default function Home() {
  const [isChange, setIsChange] = useState(true);
  const chnageStateHandler = () => {
    setIsChange(!isChange);
  };
  return (
    <>
      <Header chnageStateHandler={chnageStateHandler} />
      <div className={Style.container}>
        {isChange ? (
          <SideHeaderWithTitle />
        ) : (
          <SideHeaderWithoutTitle chnageStateHandler={chnageStateHandler} />
        )}

        <div
          className={Style.right}
          style={{ paddingLeft: !isChange && window.innerWidth > 768 && "5%" }}
        >
          <YoutubeTagsComponent />
          <YoutubeVideosComponent />
        </div>
      </div>
    </>
  );
}
