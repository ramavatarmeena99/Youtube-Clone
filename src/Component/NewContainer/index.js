import React from "react";
import Style from "./index.module.css";

export default function NewContainer(props) {
  const Icon = props.icon;
  return (
    <div onClick={props.action} className={Style.newContainer}>
      <div className={Style.newContainerTop}>
        <Icon />
      </div>
      <p>{props.title}</p>
    </div>
  );
}
