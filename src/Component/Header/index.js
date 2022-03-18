import React, { useState } from "react";
import Style from "./index.module.css";
import { IoIosSearch } from "react-icons/io";
import { MdKeyboardVoice } from "react-icons/md";
import { BiVideoPlus } from "react-icons/bi";
import { CgMenuGridR } from "react-icons/cg";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FiMenu } from "react-icons/fi";
import Logo from "../Logo";
import HideHeaderBaar from "../HideHeaderBaar";
import { useWindowSize } from "react-use";

export default function Header(props) {
  const [isChangeHeaderBaar, setIsHeaderBaarChange] = useState(false);
  const { width } = useWindowSize();

  const searchStateBaarHandler = () => {
    setIsHeaderBaarChange(!isChangeHeaderBaar);
  };
  const searchVideos = () => {
    alert("Search ho raha hai");
  };
  return (
    <>
      {isChangeHeaderBaar ? (
        <HideHeaderBaar searchStateBaarHandler={searchStateBaarHandler} />
      ) : (
        <div className={Style.header}>
          <div className={Style.youtubeLogo}>
            <div
              onClick={props.chnageStateHandler}
              className={Style.mainuIcons}
            >
              <FiMenu />
            </div>
            <div className={Style.mainuLogo}>
              <Logo />
              <p>IN</p>
            </div>
          </div>
          <div className={Style.searchBox}>
            <div
              className={Style.hideSearchIcon}
              onClick={searchStateBaarHandler}
            >
              <IoIosSearch />
            </div>

            <div className={Style.searchBoxCenter}>
              <input placeholder="Search" type="search" />
              <div
                onClick={width < 800 ? searchStateBaarHandler : searchVideos}
                className={Style.searchIcon}
              >
                <IoIosSearch />
              </div>
            </div>
            <div className={Style.voiceIcon}>
              <MdKeyboardVoice />
            </div>
          </div>
          <div className={Style.profileOptions}>
            <div className={Style.uploadIconCenter}>
              <div className={Style.uploadIcon}>
                <BiVideoPlus />
              </div>
              <div className={Style.uploadIcon}>
                <CgMenuGridR />
              </div>
              <div className={Style.notificationIcon}>
                <IoIosNotificationsOutline />
              </div>
            </div>
            <div className={Style.profile}>
              <img
                alt="Profile Img"
                src="https://media.istockphoto.com/photos/freedom-chains-that-transform-into-birds-charge-concept-picture-id1322104312?b=1&k=20&m=1322104312&s=170667a&w=0&h=VQyPkFkMKmo0e4ixjhiOLjiRs_ZiyKR_4SAsagQQdkk="
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
