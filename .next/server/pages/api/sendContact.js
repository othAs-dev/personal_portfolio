"use strict";
(() => {
var exports = {};
exports.id = 680;
exports.ids = [680];
exports.modules = {

/***/ 5184:
/***/ ((module) => {

module.exports = require("nodemailer");

/***/ }),

/***/ 3745:
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ 1492:
/***/ ((module) => {

module.exports = import("firebase/firestore");;

/***/ }),

/***/ 7715:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "db": () => (/* binding */ db)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3745);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1492);
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

/***/ 3249:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var nodemailer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nodemailer__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1492);
/* harmony import */ var _firebase_firebaseConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7715);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, _firebase_firebaseConfig__WEBPACK_IMPORTED_MODULE_2__]);
([firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, _firebase_firebaseConfig__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
 // utiliser import au lieu de require


async function handler(req, res) {
    const { firstname , lastname , email , message  } = req.body;
    const timestamp = firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.Timestamp.fromDate(new Date());
    const data = {
        firstname,
        lastname,
        email,
        message,
        sendedAt: timestamp
    };
    const dbInstance = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_firebase_firebaseConfig__WEBPACK_IMPORTED_MODULE_2__.db, "contacts");
    try {
        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.addDoc)(dbInstance, data);
        const transporter = nodemailer__WEBPACK_IMPORTED_MODULE_0___default().createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true,
            auth: {
                user: "othmane.developer@gmail.com",
                pass: process.env.MAIL_KEY
            }
        });
        const mailData = {
            from: "othmane.developer@gmail.com",
            to: data.email,
            subject: `Merci pour votre message ${data.firstname} ${data.lastname}`,
            html: `
            <style>
              body {
                font-family: Arial, sans-serif;
                font-size: 16px;
                color: #333;
              }
              h1 {
                font-size: 24px;
                margin-top: 40px;
                margin-bottom: 20px;
                text-align: center;
              }
              p {
                margin-top: 20px;
                margin-bottom: 20px;
                line-height: 1.5;
              }
              ul {
                margin-top: 20px;
                margin-bottom: 20px;
                padding-left: 20px;
                list-style-type: square;
              }
            </style>
          </head>
          <body>
            <h1>Merci pour votre message, ${data.firstname} ${data.lastname} !</h1>
            <p>Nous avons bien reçu votre message et nous vous répondrons dans les plus brefs délais.</p>
            <p>Voici un récapitulatif de votre message :</p>
            <ul>
              <li><strong>Nom :</strong> ${data.firstname} ${data.lastname}</li>
              <li><strong>Email :</strong> ${data.email}</li>
              <li><strong>Message :</strong> ${data.message}</li>
            </ul>
            <p>Encore merci pour votre message !</p>
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
var __webpack_exports__ = (__webpack_exec__(3249));
module.exports = __webpack_exports__;

})();