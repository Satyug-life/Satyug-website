"use strict";
exports.id = 311;
exports.ids = [311];
exports.modules = {

/***/ 1311:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _web3auth_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7018);
/* harmony import */ var _web3auth_modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_web3auth_modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_etherRPC__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7458);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8519);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _context_WalletContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4034);








// HIGHLIGHTSTART-registerApp
const clientId = "BK6dI9TO1Ol7Ke7XFsDD_wGBitbMWlQKtH7x3j9syGY5Z5CqjcTjQrCbVM6_bhB38uZpX-QgnKM9RKbgVJIBcr8"; // get from https://dashboard.web3auth.io
// function App() {
const App = ({ data  })=>{
    const navigate = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)().push;
    const { 0: web3auth , 1: setWeb3auth  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: provider , 1: setProvider  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const { 0: tokenID , 1: setTokenID  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_WalletContext__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z);
    const { 0: progress , 1: setProgress  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { 0: Emailsent , 1: SetEmailSent  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // console.log(context)
    const { walletConnected , setWalletConnected , currentAccount , setcurrentAccount , walletType , setWalletType , minted , setMinted ,  } = context;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // welcomeEmail();
        const web3auth = new _web3auth_modal__WEBPACK_IMPORTED_MODULE_3__.Web3Auth({
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
        const rpc = new _components_etherRPC__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z(web3authProvider);
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
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            walletType === "" && walletConnected === false && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                className: "btn btn-primary",
                onClick: login,
                children: "Verify"
            }),
            walletType === "web3Auth" && walletConnected === true && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "modal__submitButton",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: "btn-hover color-5",
                        onClick: logout,
                        children: "Disconnect Wallet"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);


/***/ })

};
;