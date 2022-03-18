import React from "react";
import { YoutubeTags } from "../../Data";
import TopRight from "../TopRight";
import Style from "./index.module.css";

export default function YoutubeTagsComponent() {
  return (
    <div className={Style.container}>
      {YoutubeTags.map((item, index) => {
        return (
          <React.Fragment key={index}>
            <TopRight text={item.text} />
          </React.Fragment>
        );
      })}
    </div>
  );
}
