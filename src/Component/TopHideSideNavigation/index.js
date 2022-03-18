import React from "react";
import Style from "./index.module.css";

export default function TopHideSideNavigation(props) {
  const Icon = props.icon;
  return (
    <div onClick={props.action} className={Style.TopHideSideNavigation}>
      <div className={Style.TopHideSideNavigationIcon}>
        <Icon />
      </div>
      <p>{props.title}</p>
    </div>
  );
}
