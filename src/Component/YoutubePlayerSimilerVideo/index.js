import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getValueFromLocalStorage } from "../../utils/helper";
import Style from "./index.module.css";
export default function YoutubePlayerSimilerVideo() {
  const { videoId } = useParams();

  const [videos, setVideos] = useState([]);
  const fetchedYoutubeVideo = getValueFromLocalStorage("myVideo");

  useEffect(() => {
    setVideos(fetchedYoutubeVideo);
  }, [fetchedYoutubeVideo]);
  const navigate = useNavigate();

  const redirectToVideoPlayer = (item) => {
    navigate(`/watch/${item.id.videoId}`, {
      state: {
        item,
      },
    });
  };
  return (
    <>
      <div className={Style.youtubePlayerSimilerVideo}>
        <div className={Style.youtubePlayedVIdeo}>
          <div>
            <iframe
              className={Style.playedVIdeo}
              width="1000"
              height="500"
              frameborder="0"
              allowfullscreen
              allow="autoplay; encrypted-media"
              src={`https://www.youtube.com/embed/${videoId}`}
            ></iframe>
          </div>
        </div>
        <div className={Style.similerVideos}>
          {videos.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <div
                  onClick={() => redirectToVideoPlayer(item)}
                  className={Style.YoutubeVideosList}
                >
                  <div className={Style.VideoContainer}>
                    <div className={Style.thumbnail}>
                      <img
                        src={item.snippet.thumbnails.medium.url}
                        alt={item.snippet.title}
                      />
                    </div>
                    <div className={Style.youtubeVideoInfo}>
                      <div className={Style.videoTitle}>
                        <div className={Style.topVideoTitle}>
                          <h1>{item.snippet.title}</h1>
                          <p>{item.snippet.channelTitle}</p>
                        </div>
                        <div className={Style.ButtomVideoTItle}>
                          <p className={Style.views}>31k views</p>
                          <p className={Style.uploadTime}>31 days</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
}
