"use strict";
exports.id = 86;
exports.ids = [86];
exports.modules = {

/***/ 86:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RamSetuModal)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "ethers"
var external_ethers_ = __webpack_require__(1982);
// EXTERNAL MODULE: external "@web3auth/modal"
var modal_ = __webpack_require__(7018);
// EXTERNAL MODULE: ./components/etherRPC.tsx
var etherRPC = __webpack_require__(7458);
// EXTERNAL MODULE: external "web3"
var external_web3_ = __webpack_require__(8519);
// EXTERNAL MODULE: ./context/WalletContext.jsx
var WalletContext = __webpack_require__(4034);
// EXTERNAL MODULE: external "react-loading-icons"
var external_react_loading_icons_ = __webpack_require__(1668);
;// CONCATENATED MODULE: ./assets/images/successImg.png
/* harmony default export */ const successImg = ({"src":"/_next/static/media/successImg.d9cdbf3d.png","height":1200,"width":1200,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAXVBMVEU52hQ41hQ52RQ52BQ52RQ52hQ52hQ52hQ52hQ52hQ52hQ52hQ52hQ52hQ52hQ52hQ52hQ52hQ52hQ52hQ52hQ52hQ52hQ52hQ52hQ52hQ52hQ52hQ62xU62xU52hSqJmdgAAAAHXRSTlMACw8WJSgpKjxESIK+v8DCy87R5+zt7/P0+Pr7/ZwpbiAAAABDSURBVHjaDcvHAYAwDANA0RKqQwcHpP3HhPsfENKTpwaIB1/qDjCK6m2FbFBXbYKWoqydjpFze5EJcafIM/zNPKeID6ItBHumZ0DgAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./pages/RamSetuModal.tsx










// const successImg = require("../assets/images/successImg.png");


// HIGHLIGHTSTART-registerApp
const clientId = "BK6dI9TO1Ol7Ke7XFsDD_wGBitbMWlQKtH7x3j9syGY5Z5CqjcTjQrCbVM6_bhB38uZpX-QgnKM9RKbgVJIBcr8"; // get from https://dashboard.web3auth.io
// function App() {
const App = ({ data  })=>{
    const navigate = (0,router_.useRouter)().push;
    const ERC721ABI = [
        {
            inputs: [],
            stateMutability: "nonpayable",
            type: "constructor"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "address",
                    name: "owner",
                    type: "address"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "approved",
                    type: "address"
                },
                {
                    indexed: true,
                    internalType: "uint256",
                    name: "tokenId",
                    type: "uint256"
                }, 
            ],
            name: "Approval",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "address",
                    name: "owner",
                    type: "address"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "operator",
                    type: "address"
                },
                {
                    indexed: false,
                    internalType: "bool",
                    name: "approved",
                    type: "bool"
                }, 
            ],
            name: "ApprovalForAll",
            type: "event"
        },
        {
            anonymous: false,
            inputs: [
                {
                    indexed: true,
                    internalType: "address",
                    name: "from",
                    type: "address"
                },
                {
                    indexed: true,
                    internalType: "address",
                    name: "to",
                    type: "address"
                },
                {
                    indexed: true,
                    internalType: "uint256",
                    name: "tokenId",
                    type: "uint256"
                }, 
            ],
            name: "Transfer",
            type: "event"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "to",
                    type: "address"
                },
                {
                    internalType: "uint256",
                    name: "tokenId",
                    type: "uint256"
                }, 
            ],
            name: "approve",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "owner",
                    type: "address"
                }, 
            ],
            name: "balanceOf",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }, 
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "tokenId",
                    type: "uint256"
                }, 
            ],
            name: "getApproved",
            outputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address"
                }, 
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "owner",
                    type: "address"
                },
                {
                    internalType: "address",
                    name: "operator",
                    type: "address"
                }, 
            ],
            name: "isApprovedForAll",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }, 
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "string",
                    name: "_uri",
                    type: "string"
                }, 
            ],
            name: "mint",
            outputs: [],
            stateMutability: "payable",
            type: "function"
        },
        {
            inputs: [],
            name: "mintPrice",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }, 
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [],
            name: "name",
            outputs: [
                {
                    internalType: "string",
                    name: "",
                    type: "string"
                }, 
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "tokenId",
                    type: "uint256"
                }, 
            ],
            name: "ownerOf",
            outputs: [
                {
                    internalType: "address",
                    name: "",
                    type: "address"
                }, 
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "from",
                    type: "address"
                },
                {
                    internalType: "address",
                    name: "to",
                    type: "address"
                },
                {
                    internalType: "uint256",
                    name: "tokenId",
                    type: "uint256"
                }, 
            ],
            name: "safeTransferFrom",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "from",
                    type: "address"
                },
                {
                    internalType: "address",
                    name: "to",
                    type: "address"
                },
                {
                    internalType: "uint256",
                    name: "tokenId",
                    type: "uint256"
                },
                {
                    internalType: "bytes",
                    name: "data",
                    type: "bytes"
                }, 
            ],
            name: "safeTransferFrom",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "operator",
                    type: "address"
                },
                {
                    internalType: "bool",
                    name: "approved",
                    type: "bool"
                }, 
            ],
            name: "setApprovalForAll",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "bytes4",
                    name: "interfaceId",
                    type: "bytes4"
                }, 
            ],
            name: "supportsInterface",
            outputs: [
                {
                    internalType: "bool",
                    name: "",
                    type: "bool"
                }, 
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [],
            name: "symbol",
            outputs: [
                {
                    internalType: "string",
                    name: "",
                    type: "string"
                }, 
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "index",
                    type: "uint256"
                }, 
            ],
            name: "tokenByIndex",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }, 
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "owner",
                    type: "address"
                },
                {
                    internalType: "uint256",
                    name: "index",
                    type: "uint256"
                }, 
            ],
            name: "tokenOfOwnerByIndex",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }, 
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "tokenId",
                    type: "uint256"
                }, 
            ],
            name: "tokenURI",
            outputs: [
                {
                    internalType: "string",
                    name: "",
                    type: "string"
                }, 
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [],
            name: "totalSupply",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256"
                }, 
            ],
            stateMutability: "view",
            type: "function"
        },
        {
            inputs: [
                {
                    internalType: "address",
                    name: "from",
                    type: "address"
                },
                {
                    internalType: "address",
                    name: "to",
                    type: "address"
                },
                {
                    internalType: "uint256",
                    name: "tokenId",
                    type: "uint256"
                }, 
            ],
            name: "transferFrom",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function"
        }, 
    ];
    const { 0: web3auth , 1: setWeb3auth  } = (0,external_react_.useState)(null);
    const { 0: provider , 1: setProvider  } = (0,external_react_.useState)(null);
    const { 0: tokenID , 1: setTokenID  } = (0,external_react_.useState)(0);
    const context = (0,external_react_.useContext)(WalletContext/* default */.Z);
    const { 0: progress , 1: setProgress  } = (0,external_react_.useState)(true);
    const { 0: Emailsent , 1: SetEmailSent  } = (0,external_react_.useState)(false);
    // console.log(context)
    const { walletConnected , setWalletConnected , currentAccount , setcurrentAccount , walletType , setWalletType , minted , setMinted ,  } = context;
    (0,external_react_.useEffect)(()=>{
        welcomeEmail();
        const web3auth = new modal_.Web3Auth({
            clientId: clientId,
            chainConfig: {
                chainNamespace: "eip155",
                chainId: "0x1",
                rpcTarget: "https://rpc.ankr.com/eth",
                // Avoid using public rpcTarget in production.
                // Use services like Infura, Quicknode etc
                displayName: "Ethereum Mainnet",
                blockExplorer: "https://etherscan.io",
                ticker: "ETH",
                tickerName: "Ethereum"
            }
        });
        const init = async ()=>{
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
    const login = async ()=>{
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
        const rpc = new etherRPC/* default */.Z(web3authProvider);
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
            method: "eth_private_key"
        });
        console.log(privateKey);
        const infuraProvider1 = "https://goerli.infura.io/v3/0f915b2ce86c461ab0ee341166802b14";
        const metadata1 = "https://gateway.pinata.cloud/ipfs/QmXBgb97KaAwFZXiwBEiRSERxwZQr8MHwS6DjqbYqxjCDM";
        //! goril provider stted up to use in goril nettwoerk as web3auth provider not working in goril
        const provider = new external_ethers_.ethers.providers.JsonRpcProvider(infuraProvider1);
        const pri = "c3df77fdd1a607912dd6d26aa0625ec280ab6a9414ee85a7024d610bf2363cf5";
        const wallet = new external_ethers_.ethers.Wallet(pri, provider);
        const account1 = wallet.getAddress();
        const senderBalanceBefore = await wallet.getBalance();
        console.log(senderBalanceBefore);
        const recieverBalanceBefore = await provider.getBalance(address);
        console.log(`\nSender balance before: ${external_ethers_.ethers.utils.formatEther(senderBalanceBefore)}`);
        console.log(`reciever balance before: ${external_ethers_.ethers.utils.formatEther(recieverBalanceBefore)}\n`);
        const contractaddress = "0x65F564D44edcDCCbF7449de9a1219b8D7c442c3f";
        const contract = new external_ethers_.ethers.Contract(contractaddress, ERC721ABI, provider);
        const contractwithwalet = contract.connect(wallet);
        const tx = await contractwithwalet.mint(metadata1);
        var tokenId = 0;
        tx.wait().then((_res)=>{
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
        const updateToken = async ()=>{
            const transfer = await contractwithwalet["safeTransferFrom(address,address,uint256)"](account1, address, tokenId);
            await transfer.wait().then((res)=>{
                console.log(res);
            // SetEmailSent(true);
            // navigate('/')
            });
        };
        const senderBalanceAfter = await wallet.getBalance();
        const recieverBalanceAfter = await provider.getBalance(address);
        console.log(`\nSender balance after: ${external_ethers_.ethers.utils.formatEther(senderBalanceAfter)}`);
        console.log(`reciever balance after: ${external_ethers_.ethers.utils.formatEther(recieverBalanceAfter)}\n`);
        //  const originalMessage = "YOUR_MESSAGE";
        //  const signedMessage = await web3.eth.personal.sign(originalMessage, adds,"dss");
        //  console.log(signedMessage)
        //  web3.eth.sendSignedTransaction()
        // Submit transaction to the blockchain and wait for it to be mined
        // console.log(receipt);
        getAccounts();
    };
    async function welcomeEmail() {
        // e.preventDefault()
        const name = data.name;
        const email = data.email;
        const number = data.number;
        const img = "https://res.cloudinary.com/dde6glimb/image/upload/v1670392642/satyug_logo_olyotv.png";
        console.log("Sending");
        let finalData = {
            name,
            email,
            number,
            img
        };
        const response = await fetch("/api/welcome", {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(finalData)
        });
    }
    async function sendEmail(openSeaLink, ethScanLink, openSeaAccountLink) {
        // e.preventDefault()
        const name = data.name;
        const email = data.email;
        const number = data.number;
        const subject = "Satyug Token Reward";
        const msg = "Thank you for Filling out the Form. As a token of Reward, here is your Token<br>Ram Ji ki Setu mai aapka lagaya Pathar";
        const img = "https://gateway.pinata.cloud/ipfs/QmP8SXkaY9zRQXHKQy1Mc7z8AQ5hf4aijMnYzKuRdtrde1";
        console.log("Sending");
        let finalData = {
            name,
            email,
            number,
            subject,
            msg,
            img,
            openSeaLink,
            ethScanLink,
            openSeaAccountLink
        };
        const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(finalData)
        });
    }
    // const getUserInfo = async () => {
    //   if (!web3auth) {
    //     console.log("web3auth not initialized yet");
    //     return;
    //   }
    //   const user = await web3auth.getUserInfo();
    //   console.log(user);
    // };
    const logout = async ()=>{
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
    const getAccounts = async ()=>{
        if (!provider) {
            console.log("provider not initialized yet");
            return;
        }
        const rpc = new etherRPC/* default */.Z(provider);
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
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            walletType === "" && walletConnected === false && /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: "btn btn-primary",
                onClick: login,
                children: "Verify"
            }),
            walletType === "web3Auth" && walletConnected === true && /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "modal__submitButton",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        className: "btn-hover color-5",
                        onClick: logout,
                        children: "Disconnect Wallet"
                    })
                })
            }),
            !progress && walletConnected && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "web3Success",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: successImg,
                    alt: "successImg",
                    height: 50,
                    width: 50
                })
            }),
            progress && walletConnected && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "web3Success",
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_loading_icons_.TailSpin, {
                    height: "50px",
                    stroke: "#98ff98",
                    strokeWidth: "3"
                })
            })
        ]
    });
};
/* harmony default export */ const RamSetuModal = (App);


/***/ })

};
;