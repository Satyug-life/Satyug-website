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
import { TailSpin } from "react-loading-icons";
// const successImg = require("../assets/images/successImg.png");
import successImg from "../assets/images/successImg.png";
import Image from "next/image";

// HIGHLIGHTSTART-registerApp
const clientId =
  "BK6dI9TO1Ol7Ke7XFsDD_wGBitbMWlQKtH7x3j9syGY5Z5CqjcTjQrCbVM6_bhB38uZpX-QgnKM9RKbgVJIBcr8"; // get from https://dashboard.web3auth.io

// function App() {
const App = ({ data }: { data: any }) => {
  const navigate = useRouter().push;

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
    // welcomeEmail();
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

  return (
    <div>
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
    </div>
  );
};

export default App;
