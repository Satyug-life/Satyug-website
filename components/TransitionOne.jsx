import React, { useEffect,useState, useRef } from "react";
import { useRouter } from "next/router";
// import "../assets/css/TransitionOne.css";
// import image from "../assets/images/image.png";
// import hanuman from "../assets/images/hanuman.png";
// import audIntro from "../assets/audio/audIntro.mp3";
import Image from 'next/future/image'
import initialImage from "../assets/images/initial-image.png";
import initialImage2 from "../assets/images/clickToEnterImg.jpg";
// import initialImage2 from "../assets/images/initial-image2.png";
import initialImageMobile from "../assets/images/clickToEnterImgPhone.jpg";
// import initialImageMobile from "../assets/images/initial-image-mobile.png";
import {
  useWindowWidth,
} from '@react-hook/window-size'

import { useNavigate } from "react-router-dom";
const TransitionOne = () => {
  const [hide, setHide] = useState('');
  const [video, setVideo] = useState('');
  const [staticImg, setStaticImg] = useState('');
  let screenWidth = useWindowWidth();

  useEffect(() => {
    const homeVideo = screenWidth > 600 
                      ? "https://res.cloudinary.com/dde6glimb/video/upload/v1671039826/Setu-1_new_hzbtgd_1_aanl3h.mp4"
                      : "https://res.cloudinary.com/dde6glimb/video/upload/v1671041500/Setu-1_mobile_an3qcg_1_dmgaht.mp4";

    const staticImage = screenWidth > 600 
                      ? initialImage2
                      : initialImageMobile;
    setVideo(homeVideo);
    setStaticImg(staticImage);
  }, [screenWidth, video]);
  
const homeVideo2 = "";
  const ref = useRef(null);
  
  const [vidIndex,setVidIndex]=useState(0);
  // const audio = new Audio(audIntro);
  // const start = () => {
  //   audio.play();
  // };
const navigate = useRouter().push;

  useEffect(() => {
    // audio.play();
  }, []);
  useEffect(() => {
    if (vidIndex === 0 && ref.current) {
      ref.current.play();
    }
  }, [ref, vidIndex]);

  function playVideo(e){
    console.log(e.target);
    // e.target.style.display = "none";
    setHide('d-none');
    const videoPlay = ref.current;
    videoPlay.play();
  }

  return (
    <div className="parentDiv">
    
     

      {/* <video  autoPlay className="homeVideo" id="myVideo"  ref={ref} onEnded={() => setVidIndex((idx) => idx + 1)}>
        <source src={homeVideo} type="video/mp4"/>
      </video>

       <video className="homeVideo2" id="myVideo"  ref={ref} >
        <source src={homeVideo2} type="video/mp4"/>
      </video>   */}

       <video
       className="homeVideo" id="myVideo"
       playsInline
       ref={ref}
        style={{ display: vidIndex === 1 ? "none" : "block" }}
        src={video}
        // autoPlay
        onEnded={()=>{navigate("/ram-setu/setu")}}
      />
      
      {/* {vidIndex===0?"":
        <video
        className="homeVideo" id="myVideo"
        playsInline
          src={homeVideo2}
          ref={ref}
          autoPlay
          onEnded={()=>{navigate("/ram-setu/setu")}}
        />
      } */}
 
    </div>
  );
};

export default TransitionOne;
