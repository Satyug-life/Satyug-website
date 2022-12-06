import React, { useEffect, useState, useRef, useContext } from "react";
// import "../../assets/css/Contact.css";
// import ramSita from "../../assets/video/Final_Render_2.mp4";
// import anyAudio from "../../assets/audio/afterSetuAudio.mp3";
import Confetti from "react-confetti";
import Image from "next/future/image";
import { useRouter } from "next/router";
import App from "../App";
import RockNft from "../../assets/images/RockNFT.jpg";

import WalletContext from "../../context/WalletContext";

import mintAndSend from "../../utils/mintAndSend";
// import { useRouter } from 'next/router';

const delay = ms => new Promise(
  resolve => setTimeout(resolve, ms)
);

const Contact = () => {
  
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [userData, setUserData] = useState({});
  const [vidOn, setVidOn] = useState(false);
  const [btn, setbtn] = useState(false);
  const [hide, setHide] = useState("");
  const [validDetails, setValidDetails] = useState(false);
  const [form, setForm] = useState('')

  const context = useContext(WalletContext);
  const {
    walletConnected,
    setWalletConnected,
    currentAccount,
    setcurrentAccount,
    walletType,
    setWalletType,
    minted,
    setMinted,
  } = context;

  const ramSita =
    "https://res.cloudinary.com/dde6glimb/video/upload/v1666700183/Final_Render_2_oaehkh.mp4";
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

  const interval = "";

  const intervalFunction = () => {
    console.log(ModalOpn);
        Swal.fire({
        icon: 'warning',
        title: 'Oops...',
        text: 'Kindly submit your form',
        timer: 3000,
        timerProgressBar: true,
      })
  };

  useEffect(() => {
    audioRef.current.play();
    interval = setInterval(() => intervalFunction(), 5000);
  }, []);

  useEffect(() => {
    if(minted === true) {
      Swal.fire({
        text: "आपका NFT आपके ईमेल खाते में भेज दिया गया है",
        imageUrl: "https://gateway.pinata.cloud/ipfs/QmP8SXkaY9zRQXHKQy1Mc7z8AQ5hf4aijMnYzKuRdtrde1",
        imageWidth: 400,
        allowOutsideClick: false,
        //backdrop: "#000", // get the backgound
        imageHeight: 200,
        imageAlt: "Custom image",
        timerProgressBar: true,
        timer: 4000,
      })
      async function smallDelay() {
      
        await delay(4000);
        setVidOn(minted);
      }
      smallDelay();
      setModalOpn(false);
    }
    
  }, [minted]);
  

  useEffect(() => {
    return () => clearInterval(interval);
  }, [ModalOpn]);

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

  const setData = () => { 
  let data = {
      name: name,
      email: email,
      number: number
    }
    setUserData(data);
  };
  const metadata = "https://gateway.pinata.cloud/ipfs/QmW48ksQbrDMqjWExoBSMq8JiCXcvJrRVsNt2BHiiFdWvq"

  return (
    <div className="App">
      <video autoPlay muted loop id="myBGVideo">
        <source
          src="https://res.cloudinary.com/dde6glimb/video/upload/v1665922766/Waves_vsucxi.mp4"
          type=""
        ></source>
      </video>
      <div className="background d-flex justify-content-center">
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
            <App data = {userData} />
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
                setModalOpn(false);
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
                save();
                setValidDetails(true);
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

        <audio
          ref={audioRef}
          src={anyAudio}
          onEnded={() => {
            save();
            setVidOn(true);
          }}
        />

        {vidOn === true ? (
          <div className="warp d-flex justify-content-center align-items-center">
            <video
              playsInline
              className="ramSita d-flex"
              id="myVideo"
              ref={ref}
              src={ramSita}
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
              <span className="px-3" onClick={ (e)=>{mintAndSend(currentAccount,metadata)}}>SHARE NOW</span>
            </button>
          </div>
        ) : (
          <></>
        )}

        <Image
          src={require("../../assets/video/anumanreal.gif")}
          className="hanuman d-flex align-items-center"
          alt="Hanuman img"
        />
      </div>
    </div>
  );
};

export default Contact;
