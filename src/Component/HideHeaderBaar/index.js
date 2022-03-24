import React, { useState } from "react";
import Style from "./index.module.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { MdKeyboardVoice } from "react-icons/md";

import { IoIosSearch } from "react-icons/io";
import { API_KEY } from "../../keys";
import { setValueInLocalStorage } from "../../utils/helper";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function HideHeaderBaar(props) {
  const [searchQuery, setSearchQuery] = useState("fun");

  const [isChangeHeaderBaar, setIsHeaderBaarChange] = useState(false);

  const findVideo = (e) => {
    setSearchQuery(e.target.value);
  };
  const onKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchVideos("save");
    }
  };
  const searchStateBaarHandler = () => {
    setIsHeaderBaarChange(!isChangeHeaderBaar);
  };

  const navigate = useNavigate();

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

        const pathname = window.location.pathname;

        if (pathname === "/") {
          window.location.reload();
        } else {
          navigate("/");
        }
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  };

  return (
    <div className={Style.hideHeaderBaar}>
      <div onClick={props.searchStateBaarHandler} className={Style.arrowButton}>
        <AiOutlineArrowLeft />
      </div>
      <div className={Style.searchButton}>
        <input
          placeholder="Search"
          type="search"
          onChange={findVideo}
          onKeyDown={onKeyPress}
        />
        <div className={Style.searchIcon}>
          {" "}
          <IoIosSearch onClick={() => searchVideos("save")} />
        </div>
      </div>
      <div className={Style.voiceIconInHideBaar}>
        <MdKeyboardVoice />
      </div>
    </div>
  );
}
