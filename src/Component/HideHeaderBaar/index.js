import React from "react";
import Style from "./index.module.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { MdKeyboardVoice } from "react-icons/md";

import { IoIosSearch } from "react-icons/io";

export default function HideHeaderBaar(props) {
  return (
    <div className={Style.hideHeaderBaar}>
      <div onClick={props.searchStateBaarHandler} className={Style.arrowButton}>
        <AiOutlineArrowLeft />
      </div>
      <div className={Style.searchButton}>
        <input placeholder="Search" type="search" />
        <div className={Style.searchIcon}>
          <IoIosSearch />
        </div>
      </div>
      <div className={Style.voiceIconInHideBaar}>
        <MdKeyboardVoice />
      </div>
    </div>
  );
}
