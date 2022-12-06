import React, { useEffect, useState, useRef, useContext } from "react";
// import "../../assets/css/Contact.css";
import Swal from 'sweetalert2'
// import ramSita from "../../assets/video/Final_Render_2.mp4";
// import anyAudio from "../../assets/audio/afterSetuAudio.mp3";
import Confetti from "react-confetti";
import Image from "next/future/image";
import { useRouter } from "next/router";
import App from "../App";


import WalletContext from "../../context/WalletContext";

// import { useRouter } from 'next/router';

// /////////
import {ethers} from 'ethers'
// import { useContext} from "react";
// import WalletContext from "../context/WalletContext";
// ////////

const Contact = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [userData, setUserData] = useState({});
  const [ModalOpn , setModalOpn] = useState(true); 
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

    let response = await fetch("https://sheetdb.io/api/v1/gy6yq8hpszonf", {
      method: "POST",
      body: bodyContent,
      headers: headersList,
    });

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

  useEffect(() => {
    audioRef.current.play();
    // const interval = setInterval(() => {
    //   console.log(ModalOpn);
    //   if(ModalOpn === true)
    //   {
    //       Swal.fire({
    //       icon: 'warning',
    //       title: 'Oops...',
    //       text: 'Kindly submit your form',
    //       timer: 3000,
    //       timerProgressBar: true,
    //     })
    //   }
    // }, 5000);
  
    // return () => clearInterval(interval); 
  }, []);


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
  const mint = () => {
    console.log("karma token function");
  }

  const setData = () => { 
  let data = {
      name: name,
      email: email,
      number: number
    }
    setUserData(data);
  };
  

  // /////////////////////////////////////
  
// const context = useContext(WalletContext);
// console.log(context)
// const {walletConnected , setWalletConnected , currentAccount , setcurrentAccount , walletType , setWalletType} = context;
const ERC721ABI =[
 {
   "inputs": [

   ],
   "stateMutability": "nonpayable",
   "type": "constructor"
 },
 {
   "anonymous": false,
   "inputs": [
     {
       "indexed": true,
       "internalType": "address",
       "name": "owner",
       "type": "address"
     },
     {
       "indexed": true,
       "internalType": "address",
       "name": "approved",
       "type": "address"
     },
     {
       "indexed": true,
       "internalType": "uint256",
       "name": "tokenId",
       "type": "uint256"
     }
   ],
   "name": "Approval",
   "type": "event"
 },
 {
   "anonymous": false,
   "inputs": [
     {
       "indexed": true,
       "internalType": "address",
       "name": "owner",
       "type": "address"
     },
     {
       "indexed": true,
       "internalType": "address",
       "name": "operator",
       "type": "address"
     },
     {
       "indexed": false,
       "internalType": "bool",
       "name": "approved",
       "type": "bool"
     }
   ],
   "name": "ApprovalForAll",
   "type": "event"
 },
 {
   "anonymous": false,
   "inputs": [
     {
       "indexed": true,
       "internalType": "address",
       "name": "from",
       "type": "address"
     },
     {
       "indexed": true,
       "internalType": "address",
       "name": "to",
       "type": "address"
     },
     {
       "indexed": true,
       "internalType": "uint256",
       "name": "tokenId",
       "type": "uint256"
     }
   ],
   "name": "Transfer",
   "type": "event"
 },
 {
   "inputs": [
     {
       "internalType": "address",
       "name": "to",
       "type": "address"
     },
     {
       "internalType": "uint256",
       "name": "tokenId",
       "type": "uint256"
     }
   ],
   "name": "approve",
   "outputs": [

   ],
   "stateMutability": "nonpayable",
   "type": "function"
 },
 {
   "inputs": [
     {
       "internalType": "address",
       "name": "owner",
       "type": "address"
     }
   ],
   "name": "balanceOf",
   "outputs": [
     {
       "internalType": "uint256",
       "name": "",
       "type": "uint256"
     }
   ],
   "stateMutability": "view",
   "type": "function"
 },
 {
   "inputs": [
     {
       "internalType": "uint256",
       "name": "tokenId",
       "type": "uint256"
     }
   ],
   "name": "getApproved",
   "outputs": [
     {
       "internalType": "address",
       "name": "",
       "type": "address"
     }
   ],
   "stateMutability": "view",
   "type": "function"
 },
 {
   "inputs": [
     {
       "internalType": "address",
       "name": "owner",
       "type": "address"
     },
     {
       "internalType": "address",
       "name": "operator",
       "type": "address"
     }
   ],
   "name": "isApprovedForAll",
   "outputs": [
     {
       "internalType": "bool",
       "name": "",
       "type": "bool"
     }
   ],
   "stateMutability": "view",
   "type": "function"
 },
 {
   "inputs": [
     {
       "internalType": "string",
       "name": "_uri",
       "type": "string"
     }
   ],
   "name": "mint",
   "outputs": [

   ],
   "stateMutability": "payable",
   "type": "function"
 },
 {
   "inputs": [

   ],
   "name": "mintPrice",
   "outputs": [
     {
       "internalType": "uint256",
       "name": "",
       "type": "uint256"
     }
   ],
   "stateMutability": "view",
   "type": "function"
 },
 {
   "inputs": [

   ],
   "name": "name",
   "outputs": [
     {
       "internalType": "string",
       "name": "",
       "type": "string"
     }
   ],
   "stateMutability": "view",
   "type": "function"
 },
 {
   "inputs": [
     {
       "internalType": "uint256",
       "name": "tokenId",
       "type": "uint256"
     }
   ],
   "name": "ownerOf",
   "outputs": [
     {
       "internalType": "address",
       "name": "",
       "type": "address"
     }
   ],
   "stateMutability": "view",
   "type": "function"
 },
 {
   "inputs": [
     {
       "internalType": "address",
       "name": "from",
       "type": "address"
     },
     {
       "internalType": "address",
       "name": "to",
       "type": "address"
     },
     {
       "internalType": "uint256",
       "name": "tokenId",
       "type": "uint256"
     }
   ],
   "name": "safeTransferFrom",
   "outputs": [

   ],
   "stateMutability": "nonpayable",
   "type": "function"
 },
 {
   "inputs": [
     {
       "internalType": "address",
       "name": "from",
       "type": "address"
     },
     {
       "internalType": "address",
       "name": "to",
       "type": "address"
     },
     {
       "internalType": "uint256",
       "name": "tokenId",
       "type": "uint256"
     },
     {
       "internalType": "bytes",
       "name": "data",
       "type": "bytes"
     }
   ],
   "name": "safeTransferFrom",
   "outputs": [

   ],
   "stateMutability": "nonpayable",
   "type": "function"
 },
 {
   "inputs": [
     {
       "internalType": "address",
       "name": "operator",
       "type": "address"
     },
     {
       "internalType": "bool",
       "name": "approved",
       "type": "bool"
     }
   ],
   "name": "setApprovalForAll",
   "outputs": [

   ],
   "stateMutability": "nonpayable",
   "type": "function"
 },
 {
   "inputs": [
     {
       "internalType": "bytes4",
       "name": "interfaceId",
       "type": "bytes4"
     }
   ],
   "name": "supportsInterface",
   "outputs": [
     {
       "internalType": "bool",
       "name": "",
       "type": "bool"
     }
   ],
   "stateMutability": "view",
   "type": "function"
 },
 {
   "inputs": [

   ],
   "name": "symbol",
   "outputs": [
     {
       "internalType": "string",
       "name": "",
       "type": "string"
     }
   ],
   "stateMutability": "view",
   "type": "function"
 },
 {
   "inputs": [
     {
       "internalType": "uint256",
       "name": "index",
       "type": "uint256"
     }
   ],
   "name": "tokenByIndex",
   "outputs": [
     {
       "internalType": "uint256",
       "name": "",
       "type": "uint256"
     }
   ],
   "stateMutability": "view",
   "type": "function"
 },
 {
   "inputs": [
     {
       "internalType": "address",
       "name": "owner",
       "type": "address"
     },
     {
       "internalType": "uint256",
       "name": "index",
       "type": "uint256"
     }
   ],
   "name": "tokenOfOwnerByIndex",
   "outputs": [
     {
       "internalType": "uint256",
       "name": "",
       "type": "uint256"
     }
   ],
   "stateMutability": "view",
   "type": "function"
 },
 {
   "inputs": [
     {
       "internalType": "uint256",
       "name": "tokenId",
       "type": "uint256"
     }
   ],
   "name": "tokenURI",
   "outputs": [
     {
       "internalType": "string",
       "name": "",
       "type": "string"
     }
   ],
   "stateMutability": "view",
   "type": "function"
 },
 {
   "inputs": [

   ],
   "name": "totalSupply",
   "outputs": [
     {
       "internalType": "uint256",
       "name": "",
       "type": "uint256"
     }
   ],
   "stateMutability": "view",
   "type": "function"
 },
 {
   "inputs": [
     {
       "internalType": "address",
       "name": "from",
       "type": "address"
     },
     {
       "internalType": "address",
       "name": "to",
       "type": "address"
     },
     {
       "internalType": "uint256",
       "name": "tokenId",
       "type": "uint256"
     }
   ],
   "name": "transferFrom",
   "outputs": [

   ],
   "stateMutability": "nonpayable",
   "type": "function"
 }
]


 const infuraProvider1 = "https://goerli.infura.io/v3/0f915b2ce86c461ab0ee341166802b14"
 const metadata1 = 'https://gateway.pinata.cloud/ipfs/QmW48ksQbrDMqjWExoBSMq8JiCXcvJrRVsNt2BHiiFdWvq'

 const provider = new ethers.providers.JsonRpcProvider(infuraProvider1);  
 const pri = '27635761b3bb91ae4565742f721b60e33396fb88e2ad011288becc49313942eb'


 const mintKarma = async() => {


 const wallet = new ethers.Wallet(pri,provider)
 const account1 = wallet.getAddress()


  
 const senderBalanceBefore = await wallet.getBalance()
 console.log(senderBalanceBefore)

   const contractaddress = '0x65F564D44edcDCCbF7449de9a1219b8D7c442c3f'
   const contract = new ethers.Contract(contractaddress,ERC721ABI, provider)
   const contractwithwalet =  contract.connect(wallet)
  
   const tx = await contractwithwalet.mint(metadata1)
   var tokenId = 0
   tx.wait().then((_res) =>{
    console.log("TokenId",_res.events[0].args.tokenId.toString());
    tokenId = _res.events[0].args.tokenId.toString()
    updateToken()
   })

   const updateToken = async () => {

    const transfer = await contractwithwalet["safeTransferFrom(address,address,uint256)"](account1, currentAccount, tokenId)
    await transfer.wait().then((res) => {
      console.log(res)
    })

   }
// const senderBalanceAfter = await wallet.getBalance()
// const recieverBalanceAfter = await provider.getBalance(address)

console.log(`\nSender balance after: ${ethers.utils.formatEther(senderBalanceAfter)}`)
console.log(`reciever balance after: ${ethers.utils.formatEther(recieverBalanceAfter)}\n`)
}
  // /////////////////////////////////////

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

        {validDetails && walletConnected && (
          <div className="web3Success">
            <Image src={require("../../assets/images/successImg.png")} alt="successImg" layout="raw" height={50} />
          </div>
        )}

        {!validDetails && (
          <div className="web3Contact"  >
            <input
              type="text"
              ref={nameinput}
              name="to_name"
              className={`nameinput ${hide} `}
              placeholder="Name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
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
                console.log(e.target.value);
                setModalOpn(false);
                console.log(ModalOpn);
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
              <span className="px-3" onClick={mintKarma}>SHARE NOW</span>
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