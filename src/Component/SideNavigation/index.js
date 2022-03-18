import React from "react";
import Style from "./index.module.css";

export default function SideNavigation(props) {
  const Icon = props.icon;
  return (
      <div onClick={props.action} className={Style.Banner}>
        <div className={Style.topBanner}>
          <Icon/>
        </div>
        <p>{props.title}</p>
      </div>
  );
}
