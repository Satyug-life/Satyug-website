import React, { useEffect, useState, useRef, useContext } from "react";

import Confetti from "react-confetti";
import Image from "next/future/image";
import { useRouter } from "next/router";
import Swal from "sweetalert2";
import App from "../RamSetuModal";
import { BASE_URL } from "../../utils/constant";
import RockNft from "../../assets/images/RockNFT.jpg";
import Prize from '../../assets/images/trophy.png';
import WalletContext from "../../context/WalletContext";

import mintAndSend from "../../utils/mintAndSend";
// import { useRouter } from 'next/router';
import axios from "axios";

import {
  useWindowWidth,
} from '@react-hook/window-size'

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Contact = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [userData, setUserData] = useState({});
  const [vidOn, setVidOn] = useState(false);
  const [btn, setbtn] = useState(false);
  const [hide, setHide] = useState("");
  const [validDetails, setValidDetails] = useState(false);
  const [form, setForm] = useState("");
  const [ModalOpn, setModalOpn] = useState(true);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [QuizOpen, SetQuizOpen] = useState(false);
  const [QuizOption , SetQuizOption] = useState("");
  const [OpenConfeti , SetOpenConfeti] = useState(false);
  const [PrizeDiv , SetPrizeDiv] = useState("PrizeCup");

  // const BASE_URL = "http://localhost:8080/api/ram-setu/contact";
  console.log(BASE_URL) ;
  axios.get(BASE_URL).then((respone) => {
    console.log(respone);
  });

  const context = useContext(WalletContext);
  const {
    userEmail,
    setUserEmail,
    userName,
    setUserName,
    userNumber,
    setUserNumber,
    walletConnected,
    setWalletConnected,
    currentAccount,
    setcurrentAccount,
    walletType,
    setWalletType,
    minted,
    setMinted,
  } = context;

  const [ramSitaVideo, setRamSitaVideo] = useState("")
  const [mintSuccessVideo, setMintSuccessVideo] = useState("")
  const [detailsImg, setDetailsImg] = useState("")
  
  let screenWidth = useWindowWidth();

  useEffect(() => {
    const background_video = screenWidth > 600 
                      ? "https://res.cloudinary.com/dde6glimb/video/upload/v1671005316/Setu-ram-sita_web_spytbc.mp4"
                      : "https://res.cloudinary.com/dde6glimb/video/upload/v1671005316/Setu-ram-sita_mobile_xzibzo.mp4";

    const background_video_before = screenWidth > 600 
                      ? "https://res.cloudinary.com/dde6glimb/video/upload/v1671025948/Setu-4_new_iqzs9j.mp4"
                      : "https://res.cloudinary.com/dde6glimb/video/upload/v1671025948/Setu-4_mobile_t9y3oh.mp4";

    const background_image_fill_details = screenWidth > 600 
                      ? "https://res.cloudinary.com/dde6glimb/image/upload/v1671035377/hanuman_web_sv0djm.png"
                      : "https://res.cloudinary.com/dde6glimb/image/upload/v1671035376/hanuman_mobile_z8wn8n.png";

    setRamSitaVideo(background_video);
    setMintSuccessVideo(background_video_before);
    setDetailsImg(background_image_fill_details);
  }, [screenWidth, ramSitaVideo, mintSuccessVideo, detailsImg]);
  
  const anyAudio =
    "https://res.cloudinary.com/dde6glimb/video/upload/v1666700225/afterSetuAudio_rg4qor.mp3";
  const ref = useRef(null);
  const audioRef = useRef();
  const buttonsubmit = useRef();
  const modal = useRef();
  const nameinput = useRef();
  const noinput = useRef();
  const emailinput = useRef();
  const cross = useRef();
  const navigate = useRouter().push;

  async function welcomeEmail() {
    // e.preventDefault()
    const img =
      "https://res.cloudinary.com/dde6glimb/image/upload/v1670392642/satyug_logo_olyotv.png";
    console.log("Sending");
    let finalData = {
      name,
      email,
      number,
      img,
    };
    const response = await fetch("/api/welcome", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(finalData),
    });
  }
  const checkQuiz = (option)=>{
    (option === "NEXT") ? SetOpenConfeti(true) : SetOpenConfeti(false);
    (option === "NEXT") ? SetPrizeDiv("PrizeCupHack") : SetPrizeDiv("PrizeCup");
    
    setTimeout(()=>{
      setQuizCompleted(true);
    },5000);
  }
  const mintNFT = async () => {
    console.log("Minting NFT with name: ");
  };

  const shareData = {
    title: "Satyug",
    text: "Shri Ram ko aapki sahayata chaiye! jaldi neeche diye gaye link ko dabaye and Sita Maa ko bachaye !",
    url: "https://satyug.life/ram-setu",
  };

  const save = async () => {
    // window.localStorage.setItem("name", name);
    // window.localStorage.setItem("number", number);
    console.log("item saved", name, number);
    console.log("useer data => " + JSON.stringify(dataToSend));

    axios.post(BASE_URL, dataToSend).then((response) => {
      console.log("all saved in backend database" + response);
    });

    // setHide("d-none");
    // modal.current.style.display = 'none';
    // noinput.current.style.display = 'none';
    // nameinput.current.style.display = 'none';
    // buttonsubmit.current.style.display = 'none';
    // cross.current.style.display = 'none';

    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      "phone number": number,
      "name ": name,
    });

    // let response = await fetch("https://sheetdb.io/api/v1/gy6yq8hpszonf", {
    //   method: "POST",
    //   body: bodyContent,
    //   headers: headersList,
    // });

    // let data = await response.text();
    // console.log(data);

    // let blockDiv = document.querySelector('.targetAnimation');
    // blockDiv.classList.add('animationClass');
    // let nameinput = document.querySelector('.nameinput');
    // nameinput.classList.add('animationClass');
    // let noinput = document.querySelector('.noinput');
    // noinput.classList.add('animationClass');
    // let buton = document.querySelector('.button1');
    // buton.classList.add('animationClass');
  };

  // const intervalFunction = () => {
  //   console.log(ModalOpn);
  //   Swal.fire({
  //     icon: "warning",
  //     title: "Oops...",
  //     text: "Kindly submit your form",
  //     timer: 3000,
  //     timerProgressBar: true,
  //   });
  // };
  // var timer1 = "";
  useEffect(() => {
    // audioRef.current.play();
    // if(OopsOpen === false && ModalOpn === true)
    // {

    //   // console.log(ModalOpn);
    //   //interval = setInterval(() => intervalFunction(), 7000);
    //   // setTimeout(()=>{
    //   //   intervalFunction();
    //   // },10000);
    //   // SetOopsOpen(true);
    //   // setModalOpn(false);
    //   //return () => clearInterval(interval);
    // }
  }, []);

  useEffect(() => {
    if (minted === true) {
      Swal.fire({
        text: "आपका NFT आपके ईमेल खाते में भेज दिया गया है",
        imageUrl:
          "https://gateway.pinata.cloud/ipfs/QmP8SXkaY9zRQXHKQy1Mc7z8AQ5hf4aijMnYzKuRdtrde1",
        imageWidth: 400,
        allowOutsideClick: false,
        //backdrop: "#000", // get the backgound
        imageHeight: 200,
        imageAlt: "Custom image",
        timerProgressBar: true,
        timer: 4000,
      }).then(function () {
        // setVidOn(true);
        SetQuizOpen(true);
        console.log("Open Quiz");
      });
      // async function smallDelay() {
      //   await delay(4000);
      //   setVidOn(minted);
      // }
      // smallDelay();
      setModalOpn(false);
    }
  }, [minted]);

  // useEffect(() => {
  //   return () => clearTimeout(timer1);
  // }, [ModalOpn]);

  // function playVideo(e) {
  //   // const videoPlay = ref.current;
  //   // videoPlay.play();
  //   ref.current.play();
  //   // navigate('/ram-setu/ram-sita')
  // }
  // useEffect( () =>{

  //     window.localStorage.setItem("name",name);
  //     window.localStorage.setItem("number",number);
  //     console.log(name,number);
  // } ,[name,number])
  let dataToSend;
  const setData = () => {
    dataToSend = {
      name: name,
      email: email,
      number: number,
      walletId: currentAccount,
    };
    setUserData(dataToSend);

    console.log("item saved", name, number);
    console.log("useer data => " + JSON.stringify(dataToSend));

    axios
      .post(BASE_URL, dataToSend)
      .then((response) => {
        console.log("all saved in backend database" + response);
        welcomeEmail();
      })
      .catch(function (error) {
        console.log(error);
        if (error.response.status === 300) {
          console.log("wallet id from backend is " + error.response.data.userToFind.walletId)
          setcurrentAccount(error.response.data.userToFind.walletId)
          console.log("EMAIL ID Already Exists");
          Swal.fire({
            icon: "warning",
            title: "Your Email ID Already Exists",
            text: "Redirecting you!",
            timer: 3000,
            timerProgressBar: true,
          }).then(function () {
            // setVidOn(true);
            SetQuizOpen(true);
            console.log("Open Quiz");
          });
        }
      });
  };

  const metadata =
    "https://gateway.pinata.cloud/ipfs/QmW48ksQbrDMqjWExoBSMq8JiCXcvJrRVsNt2BHiiFdWvq";

  return (
    <div className="App">
      {/* <video autoPlay muted loop id="myBGVideo">
        <source
          src="https://res.cloudinary.com/dde6glimb/video/upload/v1665922766/Waves_vsucxi.mp4"
          type=""
        ></source>
      </video> */}


      
      <div className="background d-flex justify-content-center" style={{backgroundImage: `url('${detailsImg}')`}}>

        <div className="background d-flex justify-content-center alignModal">
        <Image
          ref={modal}
          src={require("../../assets/images/LableBox.png")}
          className={` ${hide} input-box targetAnimation`}
          alt="LabelBox"
          layout="raw"
        />
        <label className="labelName d-flex targetAnimation"></label>

        {validDetails && (
          <div className="web3Btn">
            <App data={userData} />
          </div>
        )}

        {/* {validDetails && walletConnected && (
          <div className="web3Success">
            <Image src={require("../../assets/images/successImg.png")} alt="successImg" layout="raw" height={50} />
          </div>
        )} */}

        {!validDetails && (
          <div className="web3Contact">
            <input
              type="text"
              ref={nameinput}
              name="to_name"
              className={`nameinput ${hide} `}
              placeholder="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setUserName(e.target.value);
                setModalOpn(false);
              }}
            />

            <input
              type="text"
              ref={noinput}
              name="form_number"
              className={`noinput ${hide}`}
              placeholder="Phone number"
              value={number}
              onChange={(e) => {
                setNumber(e.target.value);
                setUserNumber(e.target.value);
                setModalOpn(false);
              }}
            />

            <input
              type="email"
              name="from_email"
              ref={emailinput}
              className={`emailinput ${hide}`}
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setUserEmail(e.target.value);
                setModalOpn(false);
                //console.log(ModalOpn);
              }}
            />

            <label className="labelNumber d-flex justify-content-center "></label>

            <button
              type="submit"
              ref={buttonsubmit}
              className={`button1 ${hide}`}
              onClick={() => {
                setData();
                setbtn(!btn);

                setValidDetails(true);
                // postingData();
                // sendEmail();
              }}
            >
              Submit
            </button>
            
            {btn && (
              <Confetti width="1000vw" height="1000vh" tweenDuration={1000} />
            )}
            </div>
        )}
</div>

        {/* QUIZZZZ MODALLL BELOW */}

        {vidOn === false && quizCompleted === false && QuizOpen === true ? (
        <>
          <div className="quizModal">
            <div className="QuizHead1">{"जवाब दीजिये एक आसान से सवाल का और पाइये मौका सुनहरी ट्रॉफी जीतने का "}</div>
            <div className="QuizHead">{"प्रश्न - रावण का वध करने के बाद राम जी किस वाहन पे अयोध्या लौटे थे ?"}</div>
            <div className="QuizContainer">
            <div>
              <input 
                type="radio" 
                id="html"
                name="fav_language" 
                onClick={()=>{SetQuizOption("HTML")}} 
                value="HTML" 
              /> {" "}
              <label for="html">{"विभीषण एयरक्राफ्ट "}</label>
            </div>
            <div>
              <input 
                type="radio" 
                id="css" 
                name="fav_language" 
                onClick={()=>{SetQuizOption("NEXT")}}
                value="CSS"   
              /> {" "}
              <label for="css">{"पुष्पक विमान"}</label>
            </div>
            <div>
              <input
                type="radio"
                id="javascript"
                name="fav_language"
                value="JavaScript"
                onClick={()=>{checkQuiz(QuizOption);
                console.log(QuizOption);}}
              />
              <label for="javascript">{"अपाची हेलीकाप्टर "}</label>
            </div>
            <div>
              <input
                type="radio"
                id="javascript"
                name="fav_language"
                value="JavaScript"
                onClick={()=>{SetQuizOption("CSS")}} 
              />
            <label for="javascript">{"हनुमान जी की पीठ पर"}</label>
            </div>
            </div>
            <button
            className="ButtonQuiz"
              onClick={() => {
                checkQuiz(QuizOption);
                console.log(QuizOption);
              }}
            >
              Submit
            </button>
            {OpenConfeti && (
              <>
                <Confetti className="Confetiprize" width="1000vw" height="1000vh" tweenDuration={1000} />
              </>
            )}
          </div>
          { (
              <>
                <div className={PrizeDiv}>
                  <Image src={Prize}  height={200} alt="prize"/>
                </div>
              </>
            )}
          </>
        ) : (
          <></>
        )
        }
        {/* <Image
          src={require("../../assets/video/anumanreal.gif")}
          className="hanuman d-flex align-items-center"
          alt="Hanuman img"
        /> */}
      </div>




        {/* QUIZZZZ MODALLL ENDSSS */}

        {/* <audio
          ref={audioRef}
          src={anyAudio}
          onEnded={() => {
            save();
            // setVidOn(true);
          }}
        /> */}
        {vidOn === false && quizCompleted ? (
          <div>
            <video
              src={mintSuccessVideo}
              playsInline
              autoPlay 
              className="BackgroundVideoContainer"
              onEnded={() => setVidOn(true)}
            />
          </div>
        ) : (
          <></>
        )}

        {vidOn === true && quizCompleted ? (
          <div className="warp d-flex justify-content-center align-items-center">
            <video
              playsInline
              className="ramSita d-flex"
              id="myVideo"
              ref={ref}
              src={ramSitaVideo}
              autoPlay
              loop
            ></video>
            <button
              type="share"
              className={"shareButton"}
              onClick={() => navigator.share(shareData)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                className={"bi bi-share-fill"}
                viewBox="0 0 16 16"
              >
                <path d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z" />
              </svg>
              <span
                className="px-3"
                onClick={(e) => {
                  mintAndSend(
                    currentAccount,
                    metadata,
                    userEmail,
                    userName,
                    userNumber
                  );
                }}
              >
                SHARE NOW
              </span>
            </button>
          </div>
        ) : (
          <></>
        )}
    </div>
  );
};

export default Contact;
