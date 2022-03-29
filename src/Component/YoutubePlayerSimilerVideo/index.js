import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { API_KEY } from "../../keys";
// import { getValueFromLocalStorage } from "../../utils/helper";
import Style from "./index.module.css";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { MdContentCut } from "react-icons/md";
import { MdOutlinePlaylistAdd } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";

function LikeDislikeReplyButtons(props) {
  const [incressLikes, setIncressLikes] = useState(
    props.item.snippet.topLevelComment.snippet.likeCount
  );
  // const [decressLikes, setdecressLikes] = useState(
  //   props.item.snippet.topLevelComment.snippet.likeCount
  // );
  const clickForLikes = () => {
    setIncressLikes(incressLikes + 1);
  };
  const clickForDisLike = () => {
    setIncressLikes(incressLikes - 1);
  };
  return (
    <div className={Style.authorLikeOrDisCount}>
      <div className={Style.authorLikeCount}>
        <AiOutlineLike onClick={clickForLikes} />
        <h1 className={Style.likeCount}>{incressLikes}</h1>
      </div>
      <div className={Style.authorDisLikeCount}>
        <AiOutlineDislike onClick={clickForDisLike} />
      </div>
      <h1 className={Style.totalReplyCount}>
        REPLY {props.item.snippet.topLevelComment.snippet.totalReplyCount}
      </h1>
    </div>
  );
}

function YoutubePlayerSimilerVideo() {
  const { videoId } = useParams();
  const location = useLocation();
  // console.log("yaha par ...: ", location);
  // const [videos, setVideos] = useState([]);
  const [incressLikes, setIncressLikes] = useState(0);
  // const [decressLikes, setdecressLikes] = useState(
  //   props.item.snippet.topLevelComment.snippet.likeCount
  // );
  const clickForLikes = () => {
    setIncressLikes(incressLikes + 1);
  };
  // useEffect(() => {
  //   const fetchedYoutubeVideo = getValueFromLocalStorage("myVideo");
  //   setVideos(fetchedYoutubeVideo);
  // }, []);
  const navigate = useNavigate();

  const redirectToVideoPlayer = (item) => {
    navigate(`/watch/${item.id.videoId}`, {
      state: {
        item,
      },
    });
  };

  const [comments, setcomments] = useState([]);
  const [recomendedComments, setRecomendedComments] = useState([]);

  useEffect(() => {
    const fetchComments = () => {
      axios({
        method: "GET",
        // url: `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${API_KEY}`,
        url: `https://youtube.googleapis.com/youtube/v3/commentThreads?part=id%2Csnippet%2Creplies&order=relevance&videoId=${videoId}&key=${API_KEY}`,
      })
        .then((res) => {
          setcomments(res.data.items);
        })
        .catch((err) => {
          console.log("Error..", err);
        });
    };
    fetchComments();
  }, [videoId]);

  useEffect(() => {
    const fetchRecomendedComments = () => {
      axios({
        method: "GET",
        // url: `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${API_KEY}`,
        url: `https://youtube.googleapis.com/youtube/v3/search?part=snippet&type=video&videoType=videoTypeUnspecified&relatedToVideoId=${videoId}&key=${API_KEY}`,
      })
        .then((res) => {
          setRecomendedComments(res.data.items);
          console.log(JSON.stringify(res.data.items));
        })
        .catch((err) => {
          console.log("Error..", err);
        });
    };
    fetchRecomendedComments();
  }, [videoId]);

  // fetchCecomendedComments();

  //  var x = 0;

  // const f1=()=>{
  //   var x = 5;
  //   x = x + 3;
  // }

  // const f2 = ()=>{
  //   x= x +6
  // }
  return (
    <>
      <div className={Style.youtubePlayerSimilerVideo}>
        <div className={Style.youtubePlayedVIdeo}>
          {/* <h1 className={Style.videoPlayerTitle}></h1> */}
          <div>
            <iframe
              className={Style.video}
              title="Youtube Video Play"
              width="980"
              height="500"
              frameBorder="0"
              allowFullScreen
              allow="autoplay"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            ></iframe>
          </div>
          <div className={Style.youtubePlayVideo}>
            <div className={Style.youtubePlayVideoTop}>
              <h1 className={Style.videoPlayerTitle}>
                {location.state.item.snippet.title}
              </h1>
            </div>
            <div className={Style.youtubePlayVideoButtom}>
              <div className={Style.publishedAt}>
                <p>{location.state.item.snippet.publishedAt}</p>
              </div>
              <div className={Style.publicOpinion}>
                <div className={Style.likeByViewer}>
                  <div className={Style.likes}>
                    <AiOutlineLike onClick={clickForLikes} />
                  </div>
                  <p>{incressLikes}</p>
                </div>
                <div className={Style.disLikeByViewer}>
                  <div className={Style.disLike}>
                    <AiOutlineDislike />
                  </div>
                  <p>DISLIKE</p>
                </div>
                <div className={Style.disLikeByViewer}>
                  <div className={Style.disLike}>
                    <RiShareForwardLine />
                  </div>
                  <p>SHARE</p>
                </div>
                <div className={Style.disLikeByViewer}>
                  <div className={Style.disLike}>
                    <MdContentCut />
                  </div>
                  <p>CLIP</p>
                </div>
                <div className={Style.disLikeByViewer}>
                  <div className={Style.disLike}>
                    <MdOutlinePlaylistAdd />
                  </div>
                  <p>SAVE</p>
                </div>
                <div className={Style.disLikeByViewer}>
                  <div className={Style.disLike}>
                    <BsThreeDots className={Style.dots} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={Style.youtubeVideoDiscription}>
            <div className={Style.youtubeVideoDiscriptionLeft}>
              <div className={Style.channaelThumbnail}>
                <div>
                  <img
                    src={location.state.item.snippet.thumbnails.high.url}
                    alt={location.state.item.snippet.channelTitle}
                  />
                </div>
              </div>
            </div>
            <div className={Style.youtubeVideoDiscriptionRight}>
              <div className={Style.youtubeVideoDiscriptionRightTop}>
                <h1 className={Style.channelTitle}>
                  {location.state.item.snippet.channelTitle}
                </h1>
              </div>
              <div className={Style.youtubeVideoDiscriptionRightButtom}>
                <h1 className={Style.videoPlayerDescription}>
                  {location.state.item.snippet.description}
                </h1>
              </div>
            </div>
          </div>
          <div className={Style.Comments}>
            <div className={Style.totalComments}>
              {/* <div className={Style.totalReplyCount}>
                {location.state.item.snippet.totalReplyCount}
              </div> */}
            </div>
            <div className={Style.allComments}>
              {comments.map((item, index) => {
                console.log(index, JSON.stringify(item));
                return (
                  <React.Fragment key={index}>
                    <div className={Style.commentsSection}>
                      <div className={Style.authorProfileImage}>
                        <div>
                          <img
                            src={
                              item.snippet.topLevelComment.snippet
                                .authorProfileImageUrl
                            }
                            alt={item.snippet.title}
                          />
                        </div>
                      </div>

                      <div className={Style.commentsByAuthor}>
                        <h1 className={Style.authorDisplayName}>
                          {
                            item.snippet.topLevelComment.snippet
                              .authorDisplayName
                          }
                        </h1>
                        <h1 className={Style.textDisplay}>
                          {item.snippet.topLevelComment.snippet.textDisplay}
                        </h1>
                        {/* <h1>{item.replies.comments.snippet.textDisplay}</h1> */}

                        <LikeDislikeReplyButtons item={item} />
                      </div>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
        </div>
        <div className={Style.similerVideos}>
          {recomendedComments.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <div
                  onClick={() => redirectToVideoPlayer(item)}
                  className={Style.YoutubeVideosList}
                >
                  <div className={Style.VideoContainer}>
                    <div className={Style.thumbnail}>
                      <img
                        src={item.snippet?.thumbnails.high.url}
                        alt={item.snippet?.title}
                      />
                    </div>
                    <div className={Style.youtubeVideoInfo}>
                      <div className={Style.videoTitle}>
                        <div className={Style.topVideoTitle}>
                          <h1>{item.snippet?.title}</h1>
                          <p>{item.snippet?.channelTitle}</p>
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

export default YoutubePlayerSimilerVideo;
