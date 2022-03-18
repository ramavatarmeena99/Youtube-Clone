import React from "react";
import Style from "./index.module.css";

export default function TopRight(props) {
  return (
    <div className={Style.rightTopCenter}>
      <div className={Style.rightTop}>
        <p>{props.text}</p>
      </div>
    </div>
  );
}
