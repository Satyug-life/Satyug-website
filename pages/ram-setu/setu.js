import React, { useEffect, useState, useRef } from "react";
import Draggable from "react-draggable";
// import "../../assets/css/Setu.css";

import chat from "../../assets/images/calll-1.png";
import newStone from "../../assets/images/new-stone.png";
import Image from 'next/future/image';
import { useRouter } from 'next/router';
// import after_video from "../../assets/video/afterSetu.mp4";
import full_Setu_pic from '../../assets/images/setu_full_pic.jpg';
import { Fireworks } from '@fireworks-js/react'
import {
  useWindowWidth,
} from '@react-hook/window-size'

const Setu = () => {
  const [videoBefore, setVideoBefore] = useState("");
  const [videoAfter, setVideoAfter] = useState("");

  const [Goalposition, setGoalPosition] = useState({ x: 0, y: 0 });
  const [Stoneposition, setStonePosition] = useState({ x: 0, y: 0 });
  const [Complete, SetComplete] = useState(false);
  const Goal = useRef();
  const stony = useRef();
  const router = useRouter()


  let screenWidth = useWindowWidth();

  useEffect(() => {

    const background_video = screenWidth > 600 
                      ? "https://res.cloudinary.com/dde6glimb/video/upload/v1670944366/Setu-2_new_ka4h2h.mp4"
                      : "https://res.cloudinary.com/dde6glimb/video/upload/v1671202680/Setu-2_mobile_bom6vo.mp4";

    const background_video_after = screenWidth > 600 
                      ? "https://res.cloudinary.com/dde6glimb/video/upload/v1671116928/Setu-after-stone_web_swuk5q.mp4"
                      : "https://res.cloudinary.com/dde6glimb/video/upload/v1671199254/Setu-after-stone_mobile_dpsqmo.mp4";
    setVideoBefore(background_video);
    setVideoAfter(background_video_after);
  }, [screenWidth, videoBefore, videoAfter]);

  const trackPos = () => {
    const GoalX = Goal.current.getBoundingClientRect().left;
    const GoalY = Goal.current.getBoundingClientRect().top;
    const StoneX = stony.current.getBoundingClientRect().left;
    const StoneY = stony.current.getBoundingClientRect().top;
    setGoalPosition({ x: Math.round(GoalX), y: Math.round(GoalY) });
    setStonePosition({ x: Math.round(StoneX), y: Math.round(StoneY) });
    // console.log("Stone: " + "x : " + StoneX + " and y : " + StoneY);
    // console.log("Goal: " + "x : " + GoalX + " and y : " + GoalY);
  };
  const CheckCollide = (GoalX, GoalY, StoneX, StoneY) => {
    if (
      (StoneX >= GoalX - 150 && StoneX <=  GoalX + 50) &&
      // StoneY === GoalY &&
      (StoneY >= GoalY - 120 && StoneY <=  GoalY + 50) &&
      StoneX !== 0
    ) {
      SetComplete(true);
    }
  };
  const navigate = useRouter().push;

  useEffect(() => {
    if (Complete === false) {
      CheckCollide(
        Goalposition.x,
        Goalposition.y,
        Stoneposition.x,
        Stoneposition.y
      );
    }
  }, [Goalposition, Stoneposition, Complete]);

  const [isDragging, setDragging] = useState(false);
  return (
    <div className="App">

{(
          <button
            className="SkipButtonUniversal"
            onClick={() => router.push("/ram-setu/contact")}
          >
            <div className="SkipButtonUniversalContainer">
              Skip
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-skip-forward"
                viewBox="0 0 16 16"
              >
                <path d="M15.5 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V8.752l-6.267 3.636c-.52.302-1.233-.043-1.233-.696v-2.94l-6.267 3.636C.713 12.69 0 12.345 0 11.692V4.308c0-.653.713-.998 1.233-.696L7.5 7.248v-2.94c0-.653.713-.998 1.233-.696L15 7.248V4a.5.5 0 0 1 .5-.5zM1 4.633v6.734L6.804 8 1 4.633zm7.5 0v6.734L14.304 8 8.5 4.633z" />
              </svg>
            </div>
          </button>
        )}
   

    <div className="imgContainer">
      <video
        autoPlay
        playsInline
        loop
        muted
        className="BackgroundVideoContainer"
        src={
          // Complete === false ? 
          videoBefore
          //  : after_video
          }
      ></video>
      {Complete === false ? (
        <Draggable
          onDrag={() => {
            if (Complete === false) {
              trackPos();
            }
            setDragging(true);
          }}
          onStop={() => {
            setDragging(false);
          }}
        >
          <div className={"stone" + (isDragging ? " " : " highlight")}  ref={stony}>
          {/* <Image
            src={newStone }
            alt="stone"
            className={"stone" + (isDragging ? " " : " highlight")}
          /> */}
          </div>
        </Draggable>
      ) : null}
      {Complete === false ? (
        <div className="Goal" ref={Goal}></div>
      ) : // <img src={stone} alt="fixed-stone" className="stone-fixed" />
      null}
      <div className="chatContainer">
        {Complete === false ? (
          <Image src={chat} alt="chat" className="chat" />
        ) : // <img src={chat2} alt="chat" className="chat" />
        null}
      </div>
      {Complete ? 
      (
      <video
        className="BackgroundVideoContainer"
        autoPlay
        playsInline
        src={videoAfter}
        onEnded = {() => navigate("/ram-setu/contact")}
        />
        )
       : null}
    </div>
    </div>
  );
  
  
};

export default Setu;