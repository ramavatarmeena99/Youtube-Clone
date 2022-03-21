import React from "react";
import Style from "./index.module.css";
export default function VideoContainer(props) {
  return (
    <div className={Style.videoCards}>
      <div className={Style.thumbnail}>
        <img alt="thumbnail " src={props.image} />
      </div>
      <div className={Style.discription}>
        <div className={Style.left}>
          <div className={Style.profilePic}>
            <img
              alt="profile pic"
              src="https://media.istockphoto.com/photos/freedom-chains-that-transform-into-birds-charge-concept-picture-id1322104312?b=1&k=20&m=1322104312&s=170667a&w=0&h=VQyPkFkMKmo0e4ixjhiOLjiRs_ZiyKR_4SAsagQQdkk="
            />
          </div>
        </div>
        <div className={Style.right}>
          <div className={Style.topHeading}>
            <p className={Style.title}>{props.title}</p>
          </div>
          <div className={Style.channel}>
            <h1 className={Style.channelName}>{props.channelName}</h1>
          </div>
          <div className={Style.endHeading}>
            <p>{props.views}</p>
            <h2>{props.uploadTime}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
