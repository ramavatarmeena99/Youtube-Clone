import React from "react";
import { FiMenu } from "react-icons/fi";
import {
  FooterHideSetting,
  MiddleHideNavigations,
  MoreHideFromYoutube,
  NewContainerNavigations,
  topHideSideNavigation,
} from "../../Data";
import Logo from "../Logo";
import NewContainer from "../NewContainer";
import TopHideSideNavigation from "../TopHideSideNavigation";
import Style from "./index.module.css";

export default function SideHeaderWithoutTitle(props) {
  return (
    <React.Fragment>
      <div
        onClick={props.chnageStateHandler}
        className={Style.newSideBaarMainu}
      >
        <div className={Style.newHideYoutube}>
          <div className={Style.mainuIcons}>
            <FiMenu />
          </div>
          <div className={Style.mainuLogo}>
            <Logo />
            <p>IN</p>
          </div>
        </div>
        <div className={Style.HideNavigation}>
          <div className={Style.topHideSideNavigation}>
            {topHideSideNavigation.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <TopHideSideNavigation
                    icon={item.icon}
                    title={item.title}
                    action={item.action}
                  />
                </React.Fragment>
              );
            })}
          </div>

          <div className={Style.topHideSideNavigation}>
            {MiddleHideNavigations.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <TopHideSideNavigation
                    icon={item.icon}
                    title={item.title}
                    action={item.action}
                  />
                </React.Fragment>
              );
            })}
          </div>
          <div className={Style.topHideSideNavigation}>
            <h4>MORE FROM YOUTUBE</h4>
            {MoreHideFromYoutube.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <TopHideSideNavigation
                    icon={item.icon}
                    title={item.title}
                    action={item.action}
                  />
                </React.Fragment>
              );
            })}
          </div>
          <div className={Style.topHideSideNavigation}>
            {FooterHideSetting.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <TopHideSideNavigation
                    icon={item.icon}
                    title={item.title}
                    action={item.action}
                  />
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>

      <div className={Style.newContainer}>
        {NewContainerNavigations.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <NewContainer
                icon={item.Icon}
                title={item.title}
                action={item.action}
              />
            </React.Fragment>
          );
        })}
      </div>
    </React.Fragment>
  );
}
