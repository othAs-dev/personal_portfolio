"use strict";
(() => {
var exports = {};
exports.id = 680;
exports.ids = [680];
exports.modules = {

/***/ 184:
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ 745:
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ 492:
/***/ ((module) => {

module.exports = import("firebase/firestore");;

/***/ }),

/***/ 392:
/***/ ((module) => {

module.exports = import("firebase/storage");;

/***/ }),

/***/ 715:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "db": () => (/* binding */ db)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(745);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(492);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__]);
([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
// Import the functions you need from the SDKs you need


const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID,
    measurementId: process.env.MEASUREMENT_ID
};
// Initialize Firebase
const app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);
const db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(app);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 249:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(184);
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(492);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(392);
/* harmony import */ var _firebase_firebaseConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(715);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_storage__WEBPACK_IMPORTED_MODULE_2__, _firebase_firebaseConfig__WEBPACK_IMPORTED_MODULE_3__]);
([firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_storage__WEBPACK_IMPORTED_MODULE_2__, _firebase_firebaseConfig__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
 // utiliser import au lieu de require



const dbInstance = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_firebase_firebaseConfig__WEBPACK_IMPORTED_MODULE_3__.db, "contacts");
const timestamp = firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.Timestamp.fromDate(new Date());
async function handler(req, res) {
    const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.getStorage)();
    const fileRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.ref)(storage, "gs://portfolio-othmane.appspot.com/black_logo.png");
    const fileUrl = await (0,firebase_storage__WEBPACK_IMPORTED_MODULE_2__.getDownloadURL)(fileRef);
    const { firstname , lastname , email , message  } = req.body;
    const data = {
        firstname,
        lastname,
        email,
        message,
        sendedAt: timestamp
    };
    try {
        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.addDoc)(dbInstance, data);
        const transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default().createTransport({
            host: process.env.MAIL_HOST,
            port: process.env.MAIL_PORT,
            secure: true,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_KEY
            }
        });
        const mailData = {
            from: "Othmane Ait Salah ",
            to: data.email,
            subject: `Merci pour votre message ${data.firstname} ${data.lastname} 🚀`,
            html: `
        <body style="border-style: solid;
                      border-width: thin;
                      border-color: #dadce0;
                      border-radius: 8px;
                      padding: 10px 20px;">
          <div style="
                      width: 100%;
                      text-align: center;
          ">
            <table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tr>
                <td align="center">
                  <a href="https://fr.linkedin.com/in/othmane-ait-salah-36736423a" style="text-align: center">
                    <img src=${fileUrl} alt="logo" style="width: 150px"/>
                  </a>
                </td>
              </tr>
            </table>
          </div>          
          <h3 style="text-align: center">Merci pour votre message ${data.firstname} ${data.lastname}!</h3>
          <p style="font-size: 16px;">J'ai bien reçu votre message et je vous répondrai dans les plus brefs délais.</p>
          <p style="text-decoration: underline; font-size: 16px;">Voici un récapitulatif de votre message :</p>
          <p style="font-size: 16px;padding-bottom: 15px"><strong>${data.message}</strong></p>
          <p style="text-align: center; font-size: 16px; font-weight: 500; border-top: thin solid #dadce0; padding-top: 15px">Cordialement, Othmane</p>

          <table width="100%" border="0" cellspacing="0" cellpadding="0">
          <tr>
            <td align="center">
              <a href="https://fr.linkedin.com/in/othmane-ait-salah-36736423a?original_referer=https%3A%2F%2Fwww.google.com%2F">
                <img src="https://www.nicepng.com/png/detail/461-4616944_linkedin-logo-png-linked-in-icon-svg.png" alt="linkedin" style="width: 26px; height: 26px;" title="LinkedIn">
              </a>
              <a href="tel:+33755384212" style="margin-left: 15px">
                <img src="https://www.citypng.com/public/uploads/small/11641393938nn6j480o9ylr0bzap6d5rasvhwihvkx5p2hdbc8h05kcmiug7vsb531ovbniakvh2omjn5cby7kl0yrmf2epfrftbqziptjstwey.png" alt="phone" style="width: 30px; height: 30px;" title="0755384212">
              </a>
              <a href="https://github.com/othAs-dev" style="margin-left: 15px">
                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="phone" style="width: 30px; height: 30px;" title="GitHub">
              </a>
            </td>
          </tr>
        </table>
        </body>
      `
        };
        transporter.sendMail(mailData, function(err, info) {
            if (err) console.log(err);
            else console.log(info);
        });
        res.status(200).json({
            message: "Form submitted successfully!"
        });
    } catch (error) {
        console.error("Error writing to database:", error);
        res.status(500).json({
            error: "Failed to submit form. Please try again."
        });
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(249));
module.exports = __webpack_exports__;

})();