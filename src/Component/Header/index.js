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
import { Link } from "react-router-dom";

import axios from "axios";
import { API_KEY } from "../../keys";
import { setValueInLocalStorage } from "../../utils/helper";

export default function Header(props) {
  const [searchQuery, setSearchQuery] = useState("most");

  const [isChangeHeaderBaar, setIsHeaderBaarChange] = useState(false);

  const findVideo = (e) => {
    setSearchQuery(e.target.value);
  };
  const onKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchVideos("save");
    }
  };
  // const navigate = useNavigate();

  // const logo = (item) => {
  //   navigate(`/Home`);
  // };

  const searchStateBaarHandler = () => {
    setIsHeaderBaarChange(!isChangeHeaderBaar);
  };
  const searchVideos = (value) => {
    if (value === "save") {
      //
    }
    axios({
      method: "GET",
      url:
        value === "start"
          ? `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=100&key=${API_KEY}`
          : `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${searchQuery}&maxResults=48&key=${API_KEY}`,

      headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        setValueInLocalStorage("myVideo", res.data.items);
        setValueInLocalStorage("loading", false);
        window.location.reload();
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  };

  // useEffect(() => {
  //   // setValueInLocalStorage("myVideo", []);
  // }, []);

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
            <Link to="/">
              {" "}
              <div className={Style.mainuLogo}>
                <Logo />
                <p>IN</p>
              </div>
            </Link>
          </div>
          <div className={Style.searchBox}>
            <div
              className={Style.hideSearchIcon}
              onClick={searchStateBaarHandler}
            >
              <IoIosSearch />
            </div>

            <div className={Style.searchBoxCenter}>
              <input
                onChange={findVideo}
                onKeyDown={onKeyPress}
                placeholder="Search"
                type="search"
              />
              <div className={Style.searchIcon}>
                <IoIosSearch onClick={() => searchVideos("save")} />
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
