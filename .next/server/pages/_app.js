"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4034:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const WalletContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WalletContext);


/***/ }),

/***/ 9358:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./context/WalletContext.jsx
var WalletContext = __webpack_require__(4034);
;// CONCATENATED MODULE: ./context/WalletState.jsx



const WalletState = (props)=>{
    const { 0: userEmail , 1: setUserEmail  } = (0,external_react_.useState)("");
    const { 0: userName , 1: setUserName  } = (0,external_react_.useState)("");
    const { 0: userNumber , 1: setUserNumber  } = (0,external_react_.useState)("");
    const { 0: walletConnected , 1: setWalletConnected  } = (0,external_react_.useState)(false);
    const { 0: currentAccount , 1: setcurrentAccount  } = (0,external_react_.useState)("");
    const { 0: walletType , 1: setWalletType  } = (0,external_react_.useState)("");
    const { 0: minted , 1: setMinted  } = (0,external_react_.useState)(false);
    return /*#__PURE__*/ jsx_runtime_.jsx(WalletContext/* default.Provider */.Z.Provider, {
        value: {
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
            setMinted
        },
        children: props.children
    });
};
/* harmony default export */ const context_WalletState = (WalletState);

// EXTERNAL MODULE: ./node_modules/next/script.js
var script = __webpack_require__(4298);
var script_default = /*#__PURE__*/__webpack_require__.n(script);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./pages/_app.tsx






function App({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(context_WalletState, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css",
                            rel: "stylesheet",
                            integrity: "sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi",
                            crossOrigin: "anonymous"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "stylesheet",
                            href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("title", {
                            children: "Satyug"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "icon",
                            href: "/satyugLogo.png"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx((script_default()), {
                    //  id="bootstrap-cdn"
                    src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js",
                    integrity: "sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3",
                    crossOrigin: "anonymous"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            ]
        })
    });
}


/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [114,237,298], () => (__webpack_exec__(9358)));
module.exports = __webpack_exports__;

})();