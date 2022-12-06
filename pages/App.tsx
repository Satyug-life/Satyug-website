import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import RockNft from "../assets/images/Rock NFT.jpg";
import { useRouter } from "next/router";
import { ethers } from "ethers";
import { Web3Auth } from "@web3auth/modal";
import { CHAIN_NAMESPACES, SafeEventEmitterProvider } from "@web3auth/base";
import RPC from "../components/etherRPC";
import "web3";
import WalletContext from "../context/WalletContext";
import Web3 from "web3";
import { createTypePredicateNodeWithModifier } from "typescript";
import { Console } from "console";
import React from "react";
import { TailSpin } from 'react-loading-icons'
// const successImg = require("../assets/images/successImg.png");
import successImg from "../assets/images/successImg.png";
import Image from "next/image";

// HIGHLIGHTSTART-registerApp
const clientId = "BK6dI9TO1Ol7Ke7XFsDD_wGBitbMWlQKtH7x3j9syGY5Z5CqjcTjQrCbVM6_bhB38uZpX-QgnKM9RKbgVJIBcr8"; // get from https://dashboard.web3auth.io

// function App() {
const App = ({data}: {data:any}) => {
  const navigate = useRouter().push;
  const ERC721ABI = [
    {
      inputs: [

        
      ],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "approved",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "operator",
          type: "address",
        },
        {
          indexed: false,
          internalType: "bool",
          name: "approved",
          type: "bool",
        },
      ],
      name: "ApprovalForAll",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          indexed: true,
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          indexed: true,
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "approve",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
      ],
      name: "balanceOf",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "getApproved",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          internalType: "address",
          name: "operator",
          type: "address",
        },
      ],
      name: "isApprovedForAll",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_uri",
          type: "string",
        },
      ],
      name: "mint",
      outputs: [],
      stateMutability: "payable",
      type: "function",
    },
    {
      inputs: [],
      name: "mintPrice",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "name",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "ownerOf",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "safeTransferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
        {
          internalType: "bytes",
          name: "data",
          type: "bytes",
        },
      ],
      name: "safeTransferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "operator",
          type: "address",
        },
        {
          internalType: "bool",
          name: "approved",
          type: "bool",
        },
      ],
      name: "setApprovalForAll",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "bytes4",
          name: "interfaceId",
          type: "bytes4",
        },
      ],
      name: "supportsInterface",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "symbol",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "index",
          type: "uint256",
        },
      ],
      name: "tokenByIndex",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "owner",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "index",
          type: "uint256",
        },
      ],
      name: "tokenOfOwnerByIndex",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "tokenURI",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      name: "totalSupply",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "tokenId",
          type: "uint256",
        },
      ],
      name: "transferFrom",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ];

  const [web3auth, setWeb3auth] = useState<Web3Auth | null>(null);
  const [provider, setProvider] = useState<SafeEventEmitterProvider | null>(
    null
  );
  const [tokenID, setTokenID] = useState(0);
  const context = useContext(WalletContext);
  const [progress, setProgress] = useState(true);

  const [Emailsent, SetEmailSent] = useState(false);
  // console.log(context)
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
  useEffect(() => {
    const web3auth = new Web3Auth({
      clientId: clientId, // get it from Web3Auth Dashboard
      chainConfig: {
        chainNamespace: "eip155",
        chainId: "0x1",
        rpcTarget: "https://rpc.ankr.com/eth",
        // Avoid using public rpcTarget in production.
        // Use services like Infura, Quicknode etc
        displayName: "Ethereum Mainnet",
        blockExplorer: "https://etherscan.io",
        ticker: "ETH",
        tickerName: "Ethereum",
      },
    });
    const init = async () => {
      try {
        setWeb3auth(web3auth);

        await web3auth.initModal();
        setProvider(web3auth.provider);
      } catch (error) {
        console.error(error);
      }
    };

    init();
  }, []);

  const login = async () => {
    console.log("login....");
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    const web3authProvider = await web3auth.connect();
    setProvider(web3authProvider);
    if (!web3authProvider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(web3authProvider);
    const address = await rpc.getAccounts();
    console.log(address);
    // window.localStorage.setItem("walletId" , address);
    setcurrentAccount(address);
    setWalletConnected(true);
    setWalletType("web3Auth");
    console.log(await rpc.getChainId());

    // const user_onfo = await web3auth.getUserInfo()
    // console.log(user_onfo);
    const privateKey = await web3authProvider.request({
      method: "eth_private_key",
    });
    console.log(privateKey);

    const infuraProvider1 =
      "https://goerli.infura.io/v3/0f915b2ce86c461ab0ee341166802b14";
    const metadata1 =
      "https://gateway.pinata.cloud/ipfs/QmXBgb97KaAwFZXiwBEiRSERxwZQr8MHwS6DjqbYqxjCDM";

    //! goril provider stted up to use in goril nettwoerk as web3auth provider not working in goril
    const provider = new ethers.providers.JsonRpcProvider(infuraProvider1);
    const pri =
      "caf7e00fe15f3aafe27f06619588b27908bfa637b71b0ca25288940fabf3ddfb";
    const wallet = new ethers.Wallet(pri, provider);
    const account1 = wallet.getAddress();
    const senderBalanceBefore = await wallet.getBalance();

    console.log(senderBalanceBefore);
    const recieverBalanceBefore = await provider.getBalance(address);

    console.log(
      `\nSender balance before: ${ethers.utils.formatEther(
        senderBalanceBefore
      )}`
    );
    console.log(
      `reciever balance before: ${ethers.utils.formatEther(
        recieverBalanceBefore
      )}\n`
    );

    const contractaddress = "0x65F564D44edcDCCbF7449de9a1219b8D7c442c3f";
    const contract = new ethers.Contract(contractaddress, ERC721ABI, provider);
    const contractwithwalet = contract.connect(wallet);
    const tx = await contractwithwalet.mint(metadata1);
    var tokenId = 0;
    tx.wait().then((_res: any) => {
      console.log("TokenId", _res.events[0].args.tokenId.toString());
      const openSeaLink = `https://testnets.opensea.io/assets/goerli/${contractaddress}/${_res.events[0].args.tokenId.toString()}`;
      const openSeaAccountLink = `https://testnets.opensea.io/${address}`;
      tokenId = _res.events[0].args.tokenId.toString();
      setTokenID(_res.events[0].args.tokenId.toString());
      updateToken();
      const ethScanLink = `https://goerli.etherscan.io/tx/${tx.hash}`;
      if (data != null) {
        sendEmail(openSeaLink, ethScanLink, openSeaAccountLink);
        // .then((res) => {
        //   console.log("Response received: " + res);
        // }
        // );
        
        setMinted(true);
      }
    });

    const updateToken = async () => {
      const transfer = await contractwithwalet[
        "safeTransferFrom(address,address,uint256)"
      ](account1, address, tokenId);
      await transfer.wait().then((res: any) => {
        console.log(res);
        // SetEmailSent(true);
        // navigate('/')
      });
    };
    const senderBalanceAfter = await wallet.getBalance();
    const recieverBalanceAfter = await provider.getBalance(address);

    console.log(
      `\nSender balance after: ${ethers.utils.formatEther(senderBalanceAfter)}`
    );
    console.log(
      `reciever balance after: ${ethers.utils.formatEther(
        recieverBalanceAfter
      )}\n`
    );

    //  const originalMessage = "YOUR_MESSAGE";

    //  const signedMessage = await web3.eth.personal.sign(originalMessage, adds,"dss");
    //  console.log(signedMessage)
    //  web3.eth.sendSignedTransaction()
    // Submit transaction to the blockchain and wait for it to be mined

    // console.log(receipt);

    getAccounts();
  };

  async function sendEmail(
    openSeaLink: string,
    ethScanLink: string,
    openSeaAccountLink: string
  ) {
    // e.preventDefault()
    const name = data.name;
    const email = data.email;
    const number = data.number;
    console.log("Sending");
    let finalData = {
      name,
      email,
      number,
      openSeaLink,
      ethScanLink,
      openSeaAccountLink,
    };
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(finalData),
    });
  };

  // const getUserInfo = async () => {
  //   if (!web3auth) {
  //     console.log("web3auth not initialized yet");
  //     return;
  //   }
  //   const user = await web3auth.getUserInfo();
  //   console.log(user);
  // };

  const logout = async () => {
    if (!web3auth) {
      console.log("web3auth not initialized yet");
      return;
    }
    await web3auth.logout();
    setProvider(null);
    setWalletType("");
    setcurrentAccount("");
    setWalletConnected(false);
  };

  // const getChainId = async () => {
  //   if (!provider) {
  //     console.log("provider not initialized yet");
  //     return;
  //   }
  //   const rpc = new RPC(provider);
  //   const chainId = await rpc.getChainId();
  //   console.log(chainId);
  // };
  const getAccounts = async () => {
    if (!provider) {
      console.log("provider not initialized yet");
      return;
    }
    const rpc = new RPC(provider);
    const address = await rpc.getAccounts();
    console.log(address);
    // window.localStorage.setItem("walletId" , address);
    setcurrentAccount(address);
    setWalletConnected(true);
    setWalletType("web3Auth");
    // props.setWalletAddress(address);
  };

  // const getBalance = async () => {
  //   if (!provider) {
  //     console.log("provider not initialized yet");
  //     return;
  //   }
  //   const rpc = new RPC(provider);
  //   const balance = await rpc.getBalance();
  //   console.log(balance);
  // };

  // const sendTransaction = async () => {
  //   if (!provider) {
  //     console.log("provider not initialized yet");
  //     return;
  //   }
  //   const rpc = new RPC(provider);
  //   const receipt = await rpc.sendTransaction();
  //   console.log(receipt);
  // };

  // const signMessage = async () => {
  //   if (!provider) {
  //     console.log("provider not initialized yet");
  //     return;
  //   }
  //   const rpc = new RPC(provider);
  //   const signedMessage = await rpc.signMessage();
  //   console.log(signedMessage);
  // };

  // const getPrivateKey = async () => {
  //   if (!provider) {
  //     console.log("provider not initialized yet");
  //     return;
  //   }
  //   const rpc = new RPC(provider);
  //   const privateKey = await rpc.getPrivateKey();
  //   console.log(privateKey);
  // };
  // const loggedInView = (
  //   <>
  //     <button onClick={getUserInfo} className="card">
  //       Get User Info
  //     </button>
  //     <button onClick={getChainId} className="card">
  //       Get Chain ID
  //     </button>
  //     <button onClick={getAccounts} className="card">
  //       Get Accounts
  //     </button>
  //     <button onClick={getBalance} className="card">
  //       Get Balance
  //     </button>
  //     <button onClick={sendTransaction} className="card">
  //       Send Transaction
  //     </button>
  //     <button onClick={signMessage} className="card">
  //       Sign Message
  //     </button>
  //     <button onClick={getPrivateKey} className="card">
  //       Get Private Key
  //     </button>
  //     <button onClick={logout} className="card">
  //       Log Out
  //     </button>

  //     <div id="console" style={{ whiteSpace: "pre-line" }}>
  //       <p style={{ whiteSpace: "pre-line" }}></p>
  //     </div>
  //   </>
  // );

  // const unloggedInView = (
  //   <button onClick={login} className="card">
  //     Login
  //   </button>
  // );

  return (
    <div>
      {/* <h1 className="title">
        <a target="_blank" href="http://web3auth.io/" rel="noreferrer">
          Web3Auth
        </a>
        & ReactJS Example
      </h1> */}

      {/* <div className="grid">{provider ? loggedInView : unloggedInView}</div> */}
      {walletType === "" && walletConnected === false && (
        <button className="btn btn-primary" onClick={login}>
          Verify
        </button>
      )}

      {walletType === "web3Auth" && walletConnected === true && (
        <>
          <div className="modal__submitButton">
            <button className="btn-hover color-5" onClick={logout}>
              Disconnect Wallet
            </button>
          </div>
        </>
      )}
      {!progress && walletConnected && (
        <div className="web3Success">
          <Image src={successImg} alt="successImg" height={50} width={50} />
        </div>
      )}

      {progress && walletConnected && (
        <div className="web3Success">
          <TailSpin height="50px" stroke="#98ff98" strokeWidth="3"/>
        </div>
      )}

      {/* <>
      {
       Emailsent === true && Swal.fire({
            text: "आपका NFT आपके ईमेल खाते में भेज दिया गया है",
            imageUrl: `${RockNft}`,
            imageWidth: 400,
            allowOutsideClick: false,
            //backdrop: "#000", // get the backgound
            imageHeight: 200,
            imageAlt: "Custom image",
            timerProgressBar: true,
            timer: 4000,
          })
      }
      </> */}
      {/* <footer className="footer">
        <a href="https://github.com/Web3Auth/Web3Auth/tree/master/examples/react-app" target="_blank" rel="noopener noreferrer">
          Source code
        </a>
      </footer> */}
    </div>
  );
}

export default App;
