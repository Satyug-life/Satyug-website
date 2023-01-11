import React , {useEffect, useState} from "react";
// var http = require('http');
// var parser = require('ua-parser-js');
// import AOS from 'aos';
import Image from "next/image";
import 'aos/dist/aos.css';
import Typical from 'react-typical';
import Footer from "../components/Footer";
import UpperFooter from "../components/UpperFooter";
import cs from "../assets/cssModules/Home.module.css"
import { useRouter } from "next/router";
import Typewriter from 'typewriter-effect';
import { useRef } from "react";
import mute from "../assets/images/mute2.png"
// import { Platform } from 'react-native';
// import DeviceDetector from "node-device-detector";



function Home() {
  const audioref = useRef();
  
  // const detector = new DeviceDetector({
  //   clientIndexes: true,
  //   deviceIndexes: true,
  //   deviceAliasCode: false,
  // });
  // const userAgent = 'Mozilla/5.0 (Linux; Android 5.0; NX505J Build/KVT49L) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.78 Mobile Safari/537.36';
  // const result = detector.detect(userAgent);
  // console.log('result parse', result);
  // console.log(navigator.appVersion);

//   console.log(navigator.userAgent);
//   var http = require('http');
// var parser = require('ua-parser-js');
//   const audioref = useRef();
//   let parsewr = new parser.UAParser();
//   console.log(parser.OS.NAME.toString())
// if (isIPhone) {
//   console.log("ios")
// } else {
//   console.log("non ios")
// }
  // const [muteButton, setmuteButton] = useState(true);


//   function getWindowDimensions() {
//     const { innerWidth: width, innerHeight: height } = window;
//     return {
//       width,
//       height
//     };
//   }
//   let screenWidth = getWindowDimensions().width;
  const navigate = useRouter().push;
//   const v1 = screenWidth>600 ? 
//     "https://res.cloudinary.com/dde6glimb/video/upload/v1666530742/earth_lymmu1.mp4": 
//     "https://res.cloudinary.com/dde6glimb/video/upload/v1666536246/earth_02_zafyak.mp4";
const v1 = "https://res.cloudinary.com/dde6glimb/video/upload/v1671640405/Untitled_2_nmys9w.mp4"
  const[hideContent,setHideContent]=useState(true)
  useEffect(() => {
   
    // console.log(navigator.platform.valueOf);
    // AOS.init()
    // window.scrollTo(0,0);
    setTimeout(() => {
      setHideContent(false)
      
    }, 6000);
    
  }, []);
  // const playAudio = () => {
  //   audioref.current.play()
  //   setmuteButton(false)
  // }
  
  return (
    <>
    <div className="homeIndex " >
    
    <video src={v1} ref={audioref} autoPlay playsInline loop className={cs.video}/>
    {/* {muteButton? <div className="image-wrapper "  >
      <Image src={mute} id="muteImg" onClick={()=>{playAudio();}}></Image>
    </div>:<></>} */}
   
   
      <div className="HomeDiv container static" style={{zIndex:'10'}}>
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3  shadow-lg sta">
          <div className="col-lg-12 p-3 p-lg-5 pt-lg-3">
            <h2 className="display-4 fw-bold lh-1 font-scriptina typewritter"> 
            {/* <Typical
                  steps={['Sat in Sanskrit stands for "Right and Truthful" and Yug stands for "Period of Time"', 2000]}
                  // loop={Infinity}
                  wrapper="h2"
                />   */}
              <Typewriter
                options={{
                  delay: 50,
                }}
                onInit={(typewriter) => {
                  typewriter.typeString('Sat in Sanskrit stands for \"Right and Truthful\" and Yug stands for \"Period of Time\"')
                    .start();
                }}
              />
            </h2>
      </div>
        </div>
      </div>
      
       {hideContent===true?<></>:<div >
              <div className="HomeDiv container"  data-aos="fade-up-right"  data-aos-easing="ease-in-back" data-aos-delay="1500">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3  shadow-lg">
          <div className="col-lg-12 p-3 p-lg-5 pt-lg-3">
            <h2 className="display-4 fw-bold lh-1 text-light font-shalimar click-pointer" onClick={()=>{
              navigate('/ram-setu');
              
            }}> 
            <span style={{color:'gold'}} >
            Ram Setu   &nbsp;
            </span>
             - Invoke human consciousness through the power of memes

            </h2>
      </div>
        </div>
      </div>
      <div className="HomeDiv container"  data-aos="fade-up-right"  data-aos-easing="ease-in-back" data-aos-delay="1800">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3  shadow-lg">
          <div className="col-lg-12 p-3 p-lg-5 pt-lg-3">
            <h2 className="display-4 fw-bold lh-1 text-light font-shalimar click-pointer" onClick={()=>{
              navigate('/dhyana');
            }}> 
            <span style={{color:'gold'}}>
            Dhyana   &nbsp;
            </span>
             - Get Paid for doing Nothing at all

            </h2>
      </div>
        </div>
      </div>
      <div className="HomeDiv container" data-aos="fade-down-left"  data-aos-easing="ease-in-back" data-aos-delay="2100">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3  shadow-lg">
          <div className="col-lg-12 p-3 p-lg-5 pt-lg-3">
            <h2 className="display-4 fw-bold lh-1 text-light font-shalimar click-pointer" onClick={()=>{
              
              navigate('/coming-soon');
            }}> 
            <span style={{color:'gold'}}>Darshan &nbsp;</span>
            - Virtual Religious Tourism in VR. 
            </h2>
      </div>
        </div>
      </div>
      <div className="HomeDiv container"  data-aos="fade-down-right"  data-aos-easing="ease-in-back" data-aos-delay="2400">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3  shadow-lg">
          <div className="col-lg-12 p-3 p-lg-5 pt-lg-3">
            <h2 className="display-4 fw-bold lh-1 text-light font-shalimar click-pointer" onClick={()=>{
              navigate('/coming-soon');
            }}> 
            <span style={{color:'gold'}}>Kriya &nbsp;</span>
            - A Mythological game based in the year 3198 BC, set by Alien-Gods

            </h2>
      </div>
        </div>
      </div>
      <div className="HomeDiv container"  data-aos="fade-up-left"  data-aos-easing="ease-in-back" data-aos-delay="400">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3  shadow-lg">
          <div className="col-lg-12 p-3 p-lg-5 pt-lg-3">
            <h2 className="display-4 fw-bold lh-1 text-light font-shalimar click-pointer" onClick={()=>{
              navigate('/yog');
            }}> 
            <span style={{color:'gold'}}>Yoga &nbsp;</span>
            - Perform Yoga. We pay you for that.

            </h2>
      </div>
        </div>
      </div>
      
      <UpperFooter />
      <Footer/>
            </div>}
    </div>
    
    </>
  );
}

export default Home;
