import React, { useState } from "react";
import { IoMdHome } from "react-icons/io";
import { MdOutlineExplore } from "react-icons/md";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { BiHistory } from "react-icons/bi";
import { RiVideoLine } from "react-icons/ri";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineYoutube } from "react-icons/ai";
import { MdOutlineLocalMovies } from "react-icons/md";
import { SiYoutubegaming } from "react-icons/si";
import { GiDeliveryDrone } from "react-icons/gi";
import { GiPodiumWinner } from "react-icons/gi";
import { TiHeartOutline } from "react-icons/ti";
import { CgStudio } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { MdReportGmailerrorred } from "react-icons/md";
import { GoReport } from "react-icons/go";

import TopRight from "../Component/TopRight";
import Header from "../Component/Header";
import SideNavigation from "../Component/SideNavigation";
import VideoContainer from "../Component/VideoContainer";
import NewContainer from "../Component/NewContainer";
import TopHideSideNavigation from "../Component/TopHideSideNavigation";
import { FiMenu } from "react-icons/fi";
import Logo from "../Component/Logo";
import HideHeaderBaar from "../Component/HideHeaderBaar";

import Style from "./Home.module.css";
export default function Home() {
  const TopNavigations = [
    {
      icon: IoMdHome,
      title: "Home",
      action: () => {
        alert("Home");
      },
    },
    {
      icon: MdOutlineExplore,
      title: "Explore",
      action: () => {
        alert("explore");
      },
    },
    {
      icon: IoMdHome,
      title: "Shorts",
      action: () => {
        alert("shorts");
      },
    },
    {
      icon: MdOutlineSubscriptions,
      title: "Subscription",
      action: () => {
        alert("Subscription");
      },
    },
  ];
  const topHideSideNavigation = [
    {
      icon: IoMdHome,
      title: "Home",
      action: () => {
        alert("Home");
      },
    },
    {
      icon: MdOutlineExplore,
      title: "Explore",
      action: () => {
        alert("explore");
      },
    },
    {
      icon: IoMdHome,
      title: "Shorts",
      action: () => {
        alert("shorts");
      },
    },
    {
      icon: MdOutlineSubscriptions,
      title: "Subscription",
      action: () => {
        alert("Subscription");
      },
    },
  ];
  const NewContainerNavigations = [
    {
      Icon: IoMdHome,
      title: "Home",
      action: () => {
        alert("Home");
      },
    },
    {
      Icon: MdOutlineExplore,
      title: "Explore",
      action: () => {
        alert("explore");
      },
    },
    {
      Icon: IoMdHome,
      title: "Shorts",
      action: () => {
        alert("shorts");
      },
    },
    {
      Icon: MdOutlineSubscriptions,
      title: "Subscription",
      action: () => {
        alert("Subscription");
      },
    },
    {
      Icon: MdOutlineVideoLibrary,
      title: "Library",
      action: () => {
        alert("Library");
      },
    },
  ];
  const MiddleNavigations = [
    {
      icon: MdOutlineVideoLibrary,
      title: "Library",
      action: () => {
        alert("Library");
      },
    },
    {
      icon: BiHistory,
      title: "History",
      action: () => {
        alert("History");
      },
    },
    {
      icon: RiVideoLine,
      title: "Your videos",
      action: () => {
        alert("Your videos");
      },
    },
    {
      icon: MdOutlineWatchLater,
      title: "Watch later",
      action: () => {
        alert("Watch later");
      },
    },
    {
      icon: AiOutlineLike,
      title: "Liked videos",
      action: () => {
        alert("Liked videos");
      },
    },
  ];
  const MiddleHideNavigations = [
    {
      icon: MdOutlineVideoLibrary,
      title: "Library",
      action: () => {
        alert("Library");
      },
    },
    {
      icon: BiHistory,
      title: "History",
      action: () => {
        alert("History");
      },
    },
    {
      icon: RiVideoLine,
      title: "Your videos",
      action: () => {
        alert("Your videos");
      },
    },
    {
      icon: MdOutlineWatchLater,
      title: "Watch later",
      action: () => {
        alert("Watch later");
      },
    },
    {
      icon: AiOutlineLike,
      title: "Liked videos",
      action: () => {
        alert("Liked videos");
      },
    },
  ];

  const MoreFromYoutube = [
    {
      icon: AiOutlineYoutube,
      title: "Youtube premium",
      action: () => {
        alert("Youtube Premium");
      },
    },
    {
      icon: MdOutlineLocalMovies,
      title: "Movies",
      action: () => {
        alert("Movies");
      },
    },
    {
      icon: SiYoutubegaming,
      title: "Gaming",
      action: () => {
        alert("Gaming");
      },
    },
    {
      icon: GiDeliveryDrone,
      title: " Live",
      action: () => {
        alert("Live");
      },
    },
    {
      icon: TiHeartOutline,
      title: " Fashion & Beauty",
      action: () => {
        alert("Fashion & Beauty");
      },
    },
    {
      icon: CgStudio,
      title: " Learning",
      action: () => {
        alert("Learning");
      },
    },
    {
      icon: GiPodiumWinner,
      title: "Sports",
      action: () => {
        alert("Sports");
      },
    },
  ];
  const MoreHideFromYoutube = [
    {
      icon: AiOutlineYoutube,
      title: "Youtube premium",
      action: () => {
        alert("Youtube Premium");
      },
    },
    {
      icon: MdOutlineLocalMovies,
      title: "Movies",
      action: () => {
        alert("Movies");
      },
    },
    {
      icon: SiYoutubegaming,
      title: "Gaming",
      action: () => {
        alert("Gaming");
      },
    },
    {
      icon: GiDeliveryDrone,
      title: " Live",
      action: () => {
        alert("Live");
      },
    },
    {
      icon: TiHeartOutline,
      title: " Fashion & Beauty",
      action: () => {
        alert("Fashion & Beauty");
      },
    },
    {
      icon: CgStudio,
      title: " Learning",
      action: () => {
        alert("Learning");
      },
    },
    {
      icon: GiPodiumWinner,
      title: "Sports",
      action: () => {
        alert("Sports");
      },
    },
  ];
  const FooterSetting = [
    {
      icon: FiSettings,
      title: "Setting",
      action: () => {
        alert("Setting");
      },
    },
    {
      icon: MdReportGmailerrorred,
      title: "Report history",
      action: () => {
        alert("Report History");
      },
    },
    {
      icon: GoReport,
      title: "Send Feedback",
      action: () => {
        alert("Send Feedback");
      },
    },
  ];
  const FooterHideSetting = [
    {
      icon: FiSettings,
      title: "Setting",
      action: () => {
        alert("Setting");
      },
    },
    {
      icon: MdReportGmailerrorred,
      title: "Report history",
      action: () => {
        alert("Report History");
      },
    },
    {
      icon: GoReport,
      title: "Send Feedback",
      action: () => {
        alert("Send Feedback");
      },
    },
  ];
  const YoutubeTags = [
    {
      text: "All",
    },
    {
      text: "T-Series",
    },
    {
      text: "Ajay Devgn",
    },
    {
      text: "Mixes",
    },
    {
      text: "Music",
    },
    {
      text: "Films",
    },
    {
      text: "Bollywood",
    },
    {
      text: "Cricket",
    },
    {
      text: "Tamil",
    },
    {
      text: "Pop Music",
    },
    {
      text: "Pop Music",
    },
    {
      text: "Pop Music",
    },
    {
      text: "Pop Music",
    },
    {
      text: "Pop Music",
    },
    {
      text: "Pop Music",
    },
    {
      text: "Pop Music",
    },
  ];
  const videos = [
    {
      image: "https://i.ytimg.com/vi/5Xhd3Jh7aeY/maxresdefault.jpg",
      title:
        "Pinjraa (Official Video) | Gurnazar | Jaani | B Praak | Tru Makers | Latest Punjabi Songs 2018",
      views: "13k Views",
      channelName: "Ramavatar meena",
      uploadTime: "1 Hour",
    },
    {
      image: "https://i.ytimg.com/vi/swVFGb7irUs/maxresdefault.jpg",
      title:
        "Bollywood Latest Songs 2022  New Hindi Song 2022  Top Bollywood Romantic Love Songs",
      views: "17k Views",
      uploadTime: "1 Hour",

      channelName: "shravan meena",
    },
    {
      image:
        "https://i0.wp.com/sangeetradio.com/wp-content/uploads/2020/05/song-gallery-1.jpg?fit=960%2C540&ssl=1",
      title:
        "Guru Randhawa: High Rated Gabru Official Song | DirectorGifty | Bhushan Kumar | T-Series",
      views: "43k Views",
      channelName: "manjeet kumar",
      uploadTime: "1 Hour",
    },
    {
      image: "https://i.ytimg.com/vi/c5Jc_58Ka_4/maxresdefault.jpg",
      title:
        "Soulful Mashup 2022 Latest Hits Of Jubin Nautiyal, B Praak, Arijit Singh, Darshan Raval,Atif Aslam",
      views: "1m Views",
      channelName: "suraj yadav",
      uploadTime: "1 Hour",
    },
    {
      image: "https://i.ytimg.com/vi/5o-SeTPbMkM/maxresdefault.jpg",
      title:
        "Best Indian Heart Touching Songs 2021 December Arijit Singh, Atif Aslam, Armaan Malik New Hindi Song",
      views: "1m Views",
      channelName: "suraj yadav",
      uploadTime: "1 Hour",
    },
    {
      image: "https://i.ytimg.com/vi/vZbPPU7FFj0/maxresdefault.jpg",
      title:
        "Bollywood Hits Songs 2021  New Hindi Song 2021  Top Bollywood Romantic Love Songs",
      views: "1m Views",
      channelName: "suraj yadav",
      uploadTime: "1 Hour",
    },
    {
      image: "https://i.ytimg.com/vi/3q2bNhyvst8/maxresdefault.jpg",
      title:
        "Phutte Kam Full Song |Akaal,Gurlej Akhtar|Jaymeet,Rony Ajnali,Gill Machrai|Latest Punjabi Songs 2021",
      views: "1m Views",
      channelName: "suraj yadav",
      uploadTime: "1 Hour",
    },
    {
      image:
        "https://www.shethepeople.tv/wp-content/uploads/2022/01/Coka-Punjabi-Song.jpg",
      title:
        "COKA : Sukh-E Muzical Doctorz | Alankrita Sahai | Jaani | Arvindr Khaira | DM",
      views: "1m Views",
      channelName: "suraj yadav",
      uploadTime: "1 Hour",
    },
    {
      image: "https://i.ytimg.com/vi/SKtlv1NKZSo/maxresdefault.jpg",
      title:
        "New Punjabi Songs 2020 | Sharara (Full Song) Shivjot | Latest Punjabi Songs 2020",
      views: "1m Views",
      channelName: "suraj yadav",
      uploadTime: "1 Hour",
    },
    {
      image:
        "https://listabsolute.com/wp-content/uploads/2020/02/List-of-Top-Punjabi-Songs-Ever-730x438.jpg",
      title:
        "3 Peg Sharry Mann (Full Video) | Mista Baaz | Parmish Verma | Ravi Raj | Latest Punjabi Songs 2016",
      views: "1m Views",
      channelName: "suraj yadav",
      uploadTime: "1 Hour",
    },
    {
      image: "https://img.youtube.com/vi/vvhOaDRoCig/maxresdefault.jpg",
      title:
        "New Punjabi Songs 2021 | Hadd Tod Da (Official Video) Hunar Sidhu | Ritu | Latest Punjabi Songs 2021",
      views: "1m Views",
      channelName: "suraj yadav",
      uploadTime: "1 Hour",
    },
    {
      image: "https://icdn.isrgrajan.com/in/2019/11/Nikle-Currant-.jpg",
      title:
        "Official Video: Nikle Currant Song | Jassi Gill | Neha Kakkar | Sukh-E Muzical Doctorz | Jaani",
      views: "1m Views",
      uploadTime: "1 Hour",
      channelName: "suraj yadav",
    },
    {
      image: "https://i.ytimg.com/vi/M_JP6Bntvis/maxresdefault.jpg",
      title:
        "Top 10 Hits | Video Jukebox | Latest Punjabi Songs 2019 | Speed Records",
      views: "1m Views",
      channelName: "suraj yadav",
      uploadTime: "1 Hour",
    },
    {
      image: "https://i.ytimg.com/vi/k5KzfHsX9eY/maxresdefault.jpg",
      title:
        "Sone Di Jindi: Jassi Sohal (Full Song) | G Guri | Latest Punjabi Songs 2017",
      views: "1m Views",
      channelName: "suraj yadav",
      uploadTime: "1 Hour",
    },
    {
      image: "https://i.ytimg.com/vi/Yc1WAoEZe1U/maxresdefault.jpg",
      title:
        "Eyeliner (Full Song) Yudhveer - New Punjabi Songs 2017 - Latest Punjabi Songs 2017 - WHM",
      views: "1m Views",
      channelName: "suraj yadav",
      uploadTime: "1 Hour",
    },
    {
      image: "https://static.toiimg.com/photo/msid-76826644/76826644.jpg",
      title:
        "Kamli (Official Song) - Mankirt Aulakh Ft. Roopi Gill | Sukh Sanghera | Latest Punjabi Songs 2018",
      views: "1m Views",
      channelName: "suraj yadav",
      uploadTime: "1 Hour",
    },
    {
      image: "http://loudest.in/wp-content/uploads/2020/07/maxresdefault.jpg",
      title:
        "Hosh (Official HD Video) Nikk | Mahira Sharma | RoxA | Latest Punjabi Songs 2020 | New Punjabi Song",
      views: "1m Views",
      channelName: "suraj yadav",
      uploadTime: "1 Hour",
    },
    {
      image: "https://i.ytimg.com/vi/8XravmGuN2g/maxresdefault.jpg",
      title:
        "New Punjabi Songs 2021| Raflan Te Botlan: Shivjot Ft. Meenakshi| The Boss| Latest Punjabi Songs 2021",
      views: "1m Views",
      channelName: "suraj yadav",
      uploadTime: "1 Hour",
    },
    {
      image:
        "https://media.lyricsmint.com/photos/16691/maxresdefault-15_large.jpg",
      title:
        "INTO YOU (OFFICIAL VIDEO) | TEGI PANNU | MANNI SANDHU | ROHIT NEGAH | LATEST PUNJABI SONGS 2021",
      views: "1m Views",
      channelName: "suraj yadav",
      uploadTime: "1 Hour",
    },
    {
      image:
        "https://celebritytadka.com/wp-content/uploads/2020/12/desi-jatt-.jpg",
      title:
        "Desi Jatt | Mankirt Aulakh | Naseeb | Sabi Bhinder | Avvy Sra | Sky Digital | New Punjabi Song 2020",
      views: "1m Views",
      channelName: "suraj yadav",
      uploadTime: "1 Hour",
    },
    {
      image: "https://static.toiimg.com/photo/87581806.cms?imgsize=56582",
      title:
        "Harrdy Sandhu - Bijlee Bijlee ft Palak Tiwari | Jaani | BPraak | Arvindr Khaira | Desi Melodies",
      views: "1m Views",
      channelName: "suraj yadav",
      uploadTime: "1 Hour",
    },
    {
      image:
        "https://flash.popxo.com/wp-content/uploads/2021/07/punjabi_songs.png",
      title:
        "Harrdy Sandhu - Backbone | Jaani | B Praak | Zenith Sidhu | Latest Romantic Song 2017",
      views: "1m Views",
      channelName: "suraj yadav",
      uploadTime: "1 Hour",
    },
    {
      image: "https://static.toiimg.com/photo/msid-78093629/78093629.jpg",
      title:
        "Bann Ke Tussi Butterfly Song : Jass Manak Song | Haiga Koyi Boyfriend Tussi Vi Kalle Aa Manak Song",
      views: "1m Views",
      channelName: "suraj yadav",
      uploadTime: "1 Hour",
    },
    {
      image: "https://i.ytimg.com/vi/G24KkNmU2E8/maxresdefault.jpg",
      title:
        "Handgrenade (Lyrical) | Singga | Desi Crew | Sukh Sanghera | Latest Punjabi Songs 2019",
      views: "1m Views",
      channelName: "suraj yadav",
      uploadTime: "1 Hour",
    },
  ];

  const [isChange, setIsChange] = useState(true);

  const chnageStateHandler = () => {
    setIsChange(!isChange);
  };
  return (
    <>
      <Header chnageStateHandler={chnageStateHandler} />
      <div className={Style.container}>
        {isChange ? (
          <div className={Style.left}>
            <div className={Style.top}>
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

            <div className={Style.top}>
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
            <div className={Style.top}>
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
            <div className={Style.top}>
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
        ) : (
          <>
            <div
              onClick={chnageStateHandler}
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
          </>
        )}
        <div
          className={Style.right}
          style={{ paddingLeft: !isChange && window.innerWidth > 768 && "5%" }}
        >
          <div className={Style.rightTop}>
            {YoutubeTags.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <TopRight text={item.text} />
                </React.Fragment>
              );
            })}
          </div>

          <div className={Style.cards}>
            {videos.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <VideoContainer
                    image={item.image}
                    title={item.title}
                    views={item.views}
                    uploadTime={item.uploadTime}
                    channelName={item.channelName}
                  />
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
