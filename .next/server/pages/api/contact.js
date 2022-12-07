"use strict";
(() => {
var exports = {};
exports.id = 91;
exports.ids = [91];
exports.modules = {

/***/ 5142:
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ 5184:
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ 7221:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(req, res) {
    (__webpack_require__(5142).config)();
    // const PASSWORD = process.env.password;
    let nodemailer = __webpack_require__(5184);
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: "satyug@satyug.life",
            pass: process.env.password
        },
        secure: true
    });
    const mailData = {
        from: "Satyug",
        to: req.body.email,
        subject: req.body.subject,
        text: req.body.msg,
        html: `<div><p>${req.body.msg}</p>
            <img src="${req.body.img}" alt="Ramji Setu" height="200px"/><br><br>
            You can check the Reward here: ${req.body.openSeaLink}<br>
            You can also track your Transaction here: ${req.body.ethScanLink}<br><br>
            Here's Your Open Sea Account: ${req.body.openSeaAccountLink}<br>
            </div>`
    };
    transporter.sendMail(mailData, function(err, info) {
        if (err) console.log(err);
        else console.log(info);
    });
    res.status(200);
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7221));
module.exports = __webpack_exports__;

})();