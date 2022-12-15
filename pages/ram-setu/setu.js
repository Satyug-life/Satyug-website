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

  let screenWidth = useWindowWidth();

  useEffect(() => {
    const background_video = screenWidth > 600 
                      ? "https://res.cloudinary.com/dde6glimb/video/upload/v1670944366/Setu-2_new_ka4h2h.mp4"
                      : "https://res.cloudinary.com/dde6glimb/video/upload/v1670996286/Setu-2_mobile_dmaw1w.mp4";

    const background_video_after = screenWidth > 600 
                      ? "https://res.cloudinary.com/dde6glimb/video/upload/v1671116928/Setu-after-stone_web_swuk5q.mp4"
                      : "https://res.cloudinary.com/dde6glimb/video/upload/v1671116928/Setu-after-stone_mobile_hdzcoh.mp4";
    setVideoBefore(background_video);
    setVideoAfter(background_video_after);
  }, [screenWidth, videoBefore, videoAfter]);

  const trackPos = () => {
    const GoalX = Goal.current.getBoundingClientRect().left;
    const GoalY = Goal.current.getBoundingClientRect().top;
    const StoneX = stony.current.getBoundingClientRect().left;
    const StoneY = stony.current.getBoundingClientRect().top;
    setGoalPosition({ x: Math.round(GoalX) + 180, y: Math.round(GoalY) + 120 });
    setStonePosition({ x: Math.round(StoneX), y: Math.round(StoneY) });
  };
  const CheckCollide = (GoalX, GoalY, StoneX, StoneY) => {
    if (
      (StoneX >= GoalX - 30 || StoneX <= GoalX + 30) &&
      // StoneY === GoalY &&
      !(StoneY <= GoalY - 30 || StoneY >= GoalY + 30) &&
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
    <video autoPlay muted loop id="myBGVideo">
      <source src="https://res.cloudinary.com/dde6glimb/video/upload/v1665922766/Waves_vsucxi.mp4" type=""></source>
    </video>
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
      <Image src={full_Setu_pic} className="BackgroundVideoContainer full_pic"  alt="full pic" />
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
          <div className="stone"  ref={stony}>
          <Image
            src={newStone }
            alt="stone"
            className={"stone" + (isDragging ? " " : " highlight")}
          /></div>
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
