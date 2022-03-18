import React from "react";
import { videos } from "../../Data";
import VideoContainer from "../VideoContainer";
import Style from "./index.module.css";

export default function YoutubeVideosComponent() {
  return (
    <div className={Style.container}>
      {videos.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <VideoContainer
              image={item.image}
              title={item.title}
              views={item.views}
              uploadTime={item.uploadTime}
              channelName={item.channelName}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
}
