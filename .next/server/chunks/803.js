"use strict";
exports.id = 803;
exports.ids = [803];
exports.modules = {

/***/ 7458:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ EthereumRpc)
/* harmony export */ });
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1982);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_0__);

class EthereumRpc {
    constructor(provider){
        this.provider = provider;
    }
    async getChainId() {
        try {
            const ethersProvider = new ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.providers.Web3Provider(this.provider);
            // Get the connected Chain's ID
            const networkDetails = await ethersProvider.getNetwork();
            return networkDetails.chainId;
        } catch (error) {
            return error;
        }
    }
    async getAccounts() {
        try {
            const ethersProvider = new ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.providers.Web3Provider(this.provider);
            const signer = ethersProvider.getSigner();
            // Get user's Ethereum public address
            const address = await signer.getAddress();
            return address;
        } catch (error) {
            return error;
        }
    }
    async getBalance() {
        try {
            const ethersProvider = new ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.providers.Web3Provider(this.provider);
            const signer = ethersProvider.getSigner();
            // Get user's Ethereum public address
            const address = await signer.getAddress();
            // Get user's balance in ether
            const balance = ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.utils.formatEther(await ethersProvider.getBalance(address) // Balance is in wei
            );
            return balance;
        } catch (error) {
            return error;
        }
    }
    async sendTransaction() {
        try {
            const ethersProvider = new ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.providers.Web3Provider(this.provider);
            const signer = ethersProvider.getSigner();
            const address = signer.getAddress();
            const destination = "0xb58e54fCA59eF4859322e06F8a5781C11bBCD3c7";
            // Convert 1 ether to wei
            const amount = ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.utils.parseEther("0.001");
            // Submit transaction to the blockchain
            const tx = await signer.sendTransaction({
                to: address,
                value: amount,
                from: destination,
                maxPriorityFeePerGas: "5000000000",
                maxFeePerGas: "6000000000000"
            });
            // Wait for transaction to be mined
            const receipt = await tx.wait();
            return receipt;
        } catch (error) {
            return error;
        }
    }
    async signMessage() {
        try {
            const ethersProvider = new ethers__WEBPACK_IMPORTED_MODULE_0__.ethers.providers.Web3Provider(this.provider);
            const signer = ethersProvider.getSigner();
            const originalMessage = "YOUR_MESSAGE";
            // Sign the message
            const signedMessage = await signer.signMessage(originalMessage);
            return signedMessage;
        } catch (error) {
            return error;
        }
    }
    async getPrivateKey() {
        try {
            const privateKey = await this.provider.request({
                method: "eth_private_key"
            });
            return privateKey;
        } catch (error) {
            return error;
        }
    }
}


/***/ }),

/***/ 4034:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const WalletContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WalletContext);


/***/ })

};
;