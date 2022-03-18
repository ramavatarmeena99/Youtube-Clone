import React from "react";
import {
  FooterSetting,
  MiddleNavigations,
  MoreFromYoutube,
  TopNavigations,
} from "../../Data";
import SideNavigation from "../SideNavigation";
import Style from "./index.module.css";

export default function SideHeaderWithTitle() {
  return (
    <div className={Style.container}>
      <div className={Style.box}>
        {TopNavigations.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <SideNavigation
                icon={item.icon}
                title={item.title}
                action={item.action}
              />
            </React.Fragment>
          );
        })}
      </div>

      <div className={Style.box}>
        {MiddleNavigations.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <SideNavigation
                icon={item.icon}
                title={item.title}
                action={item.action}
              />
            </React.Fragment>
          );
        })}
      </div>
      <div className={Style.box}>
        <h4>MORE FROM YOUTUBE</h4>
        {MoreFromYoutube.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <SideNavigation
                icon={item.icon}
                title={item.title}
                action={item.action}
              />
            </React.Fragment>
          );
        })}
      </div>
      <div className={Style.box}>
        {FooterSetting.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <SideNavigation
                icon={item.icon}
                title={item.title}
                action={item.action}
              />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
