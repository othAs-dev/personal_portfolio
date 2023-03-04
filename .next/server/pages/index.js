"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 300:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logo.png.82ea5944.png","height":980,"width":980,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAQAAABuBnYAAAAAUElEQVR42mMAgX9MUBIB/nH944AxmYDY+l/vv1n/LKGq/on9i/+XBRSa9E8Apnzqv1n/gv/lgAX+MQOx07/afz3/nMA8IMHIAAR/WSEsDGsBkAgoJyKqzdoAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});

/***/ }),

/***/ 43:
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

/***/ 794:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _next_font_google_target_css_path_src_components_Footer_tsx_import_Roboto_arguments_weight_400_700_style_normal_italic_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(714);
/* harmony import */ var _next_font_google_target_css_path_src_components_Footer_tsx_import_Roboto_arguments_weight_400_700_style_normal_italic_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_next_font_google_target_css_path_src_components_Footer_tsx_import_Roboto_arguments_weight_400_700_style_normal_italic_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _public_logo_png_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(300);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);




function Footer() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "bg-purple",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex w-full justify-",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-6/12 lg:w-4/12 block justify-center md:hidden",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            src: _public_logo_png_png__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
                            alt: "logo",
                            width: 100
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `flex justify-end items-center text-white ${(_next_font_google_target_css_path_src_components_Footer_tsx_import_Roboto_arguments_weight_400_700_style_normal_italic_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_3___default().className)} mr-6 w-10/12 max-w-xl lg:w-6/12 md:mt-8 md:mb-8 md:w-full md:justify-center`,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center text-xl gap-5 lg:justify-around lg:gap-3",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    href: "https://www.linkedin.com/in/othmane-ait-salah-36736423a/",
                                    children: [
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fa-brands fa-linkedin text-white cursor-pointer hover:text-2xl"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "https://github.com/othAs-dev",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "fa-brands fa-github text-white cursor-pointer hover:text-2xl"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "mailto:othmane.developer@gmail.com",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "fa fa-envelope text-white cursor-pointer hover:text-2xl"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "tel:+33755384212",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "fa fa-phone text-white cursor-pointer hover:text-2xl"
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "pt-1 pb-1 text-white bg-deep-purple text-center",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                    children: [
                        "By ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                            children: "Othmane Ait Salah"
                        })
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 553:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Form)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(924);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);
axios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



function Form() {
    const [firstname, setFirstname] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [lastname, setLastname] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [successMessage, setSuccessMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const data = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        message: message
    };
    const submitData = async (e)=>{
        e.preventDefault();
        try {
            const res = await axios__WEBPACK_IMPORTED_MODULE_2__["default"].post("/api/sendContact", data);
            console.log(res.data);
            setSuccessMessage("Votre message \xe0 bien \xe9t\xe9 re\xe7u, vous recevrez un mail de confirmation dans les plus brefs d\xe9lais.");
        } catch (error) {
            console.error(error);
        }
        setFirstname("");
        setLastname("");
        setEmail("");
        setMessage("");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex justify-center items-center flex-col mt-10 mb-10 h-full",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-8/12 md:w-10/12",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    className: `text-3xl text-white pb-2 text-center `,
                    children: "Vous souhaitez prendre contacte c'est par ici !"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex justify-center items-center w-5/12 md:w-10/12",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                    className: "w-full ",
                    onSubmit: submitData,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex flex-wrap -mx-3 mb-6",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-full px-3",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        className: "block uppercase tracking-wide text-white text-xs font-bold mb-2",
                                        htmlFor: "firstname",
                                        children: "Pr\xe9nom"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        className: "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
                                        value: firstname,
                                        onChange: (e)=>setFirstname(e.target.value),
                                        type: "text",
                                        name: "firstname",
                                        required: true
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex flex-wrap -mx-3 mb-6",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-full px-3",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        className: "block uppercase tracking-wide text-white text-xs font-bold mb-2",
                                        htmlFor: "lastname",
                                        children: "Nom"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        className: "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
                                        value: lastname,
                                        onChange: (e)=>setLastname(e.target.value),
                                        type: "text",
                                        name: "lastname",
                                        required: true
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex flex-wrap -mx-3 mb-6",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-full px-3",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        className: "block uppercase tracking-wide text-white text-xs font-bold mb-2",
                                        htmlFor: "email",
                                        children: "E-mail"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        className: "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",
                                        value: email,
                                        onChange: (e)=>setEmail(e.target.value),
                                        type: "email",
                                        name: "email",
                                        required: true
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex flex-wrap -mx-3 mb-6",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "w-full px-3",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                        className: "block uppercase tracking-wide text-white text-xs font-bold mb-2",
                                        htmlFor: "message",
                                        children: "Message"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                        className: "no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none",
                                        value: message,
                                        onChange: (e)=>setMessage(e.target.value),
                                        name: "message",
                                        required: true
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "md:flex md:flex-col",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "md:w-1/3",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        className: "shadow bg-low-purple hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded",
                                        type: "submit",
                                        value: "send",
                                        children: "Soumettre"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `mt-5`,
                                    children: successMessage !== "" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text-white",
                                        children: successMessage
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 233:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "D": () => (/* binding */ Map)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "mapbox-gl"
const external_mapbox_gl_namespaceObject = require("mapbox-gl");
var external_mapbox_gl_default = /*#__PURE__*/__webpack_require__.n(external_mapbox_gl_namespaceObject);
// EXTERNAL MODULE: ./node_modules/mapbox-gl/dist/mapbox-gl.css
var mapbox_gl = __webpack_require__(991);
;// CONCATENATED MODULE: ./src/components/Map.tsx




function Map() {
    const mapContainer = (0,external_react_.useRef)(null);
    (0,external_react_.useEffect)(()=>{
        (external_mapbox_gl_default()).accessToken = "pk.eyJ1Ijoib3RobWFuZWRldiIsImEiOiJjbGVvZmdqdnkwMXR6M3ZvMWg1OWtxaWQxIn0.WPQkv5XBaid7PtjzfZqHDg";
        const map = new (external_mapbox_gl_default()).Map({
            container: mapContainer.current,
            style: "mapbox://styles/othmanedev/cleojrlut002e01ocfjybh7bg/draft",
            center: [
                5.3698,
                43.2965
            ],
            zoom: 1.3
        });
        new (external_mapbox_gl_default()).Marker({
            color: "#1A0B2E"
        }).setLngLat([
            5.3698,
            43.2965
        ]).addTo(map);
        return ()=>map.remove();
    }, [
        mapContainer.current
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex justify-center pb-5",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "w-8/12 md:w-10/12",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                        className: `text-white text-3xl pb-2`,
                        children: "O\xf9 me trouver ?"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "rounded-xl",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        ref: mapContainer,
                        className: "w-full h-72 md:h-56"
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 116:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "w": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_logo_png_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(300);



function Navbar() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
        className: "bg-purple",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
            className: "flex w-full justify-center",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-7/12 lg:w-4/12 block md:flex justify-center ",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                        src: _public_logo_png_png__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
                        alt: "logo",
                        width: 100
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: `flex w-4/12 max-w-xl justify-between items-center text-white  lg:w-6/12 md:hidden`,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "#",
                            className: "bg-low-purple p-3 rounded-xl",
                            children: "Home"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "",
                            className: "hover:bg-low-purple p-3 rounded-xl",
                            children: "Projets"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "#form",
                            className: "hover:bg-low-purple p-3 rounded-xl",
                            children: "Contactez-moi"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center justify-between text-xl gap-5 lg:justify-around lg:gap-3",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                    href: "https://www.linkedin.com/in/othmane-ait-salah-36736423a/",
                                    children: [
                                        " ",
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "fa-brands fa-linkedin text-white cursor-pointer hover:text-2xl"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "https://github.com/othAs-dev",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "fa-brands fa-github text-white cursor-pointer hover:text-2xl"
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: "tel:+33755384212",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                        className: "fa fa-phone text-white cursor-pointer hover:text-2xl"
                                    })
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 138:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A": () => (/* binding */ Presentation)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/me-emoji.png
/* harmony default export */ const me_emoji = ({"src":"/_next/static/media/me-emoji.13d26907.png","height":420,"width":420,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAyElEQVR42mOAAC4mBkzACKFEJCGS0rKW0jo6GxUNDNbwa2qaMoCAmDRco5iTvua3dF/X/xl+bv8d9TV/MzAIKDEgAZFyf7sP29vL/m1vK/tX7m/7noGBQRgue6A6ViA91P1tU3LwfxBOC3J9u6swQACuYPPGrZ6bN275v3Pr9r97duz6u3vn3v/79x50hSuYN3+p95Jlq/+v37jtz+atu/9s2rzzPxAjFCxZsqxs0qTp/6dOnfV7xsx5f2bPWfh/+fJVaQwMDAwA5KFSOQz8h4wAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./public/Gradient.png
/* harmony default export */ const Gradient = ({"src":"/_next/static/media/Gradient.d04afb84.png","height":700,"width":625,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAMAAAAC2hU0AAAAV1BMVEUzFIYzE4YzE4UzEoUvJIIvI4ATLHQNL3IMLHMFLHAxI4IwIoI4FYg6F4k6Fok8F4s8F4s9F4tGHZFHHZFLH5NNIZRWJ5lWJ5lcK51cKp1iLqBtNqdtNqYHhW3uAAAAHXRSTlMAAAAAAQEBAQEBAgISFRUgISNPUF9oiImfn7Le3vrTB7gAAAA/SURBVHjaFchHEoAgEATAMSdcHRZEwv/fCZy6qjFd9yvngJXqlDuMhj+oAX3KybNbmv3j1/6gdZYbMMsjy1gBc2QDjgLX0T0AAAAASUVORK5CYII=","blurWidth":7,"blurHeight":8});
;// CONCATENATED MODULE: ./public/Skills.png
/* harmony default export */ const Skills = ({"src":"/_next/static/media/Skills.9286dfe9.png","height":657,"width":895,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAnUlEQVR42mOwdIlkYgACE59Ab3tjt5q8yIDa8IhgFwYgSIj2BMpBgSMDA4uZbrgQA0O4IAOQzUA08NUsYupqbwIaVSRZkb6kOTdqQTUDQ7V0ZngDa6RhHTNDgfVczvzIGRy6DJ2h1bGrr5cErbhuydAbF+UygSvHajovQ6H1UtZy8zXsYYbTld0YJgf7ME8NDdaZplZmuZq90GoJCwAHiCizONPiSAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":6});
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: ./src/components/Cards.tsx

function Cards({ card  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        style: {
            background: "rgb(19,4,40) linear-gradient(180deg, rgba(19,4,40,1) 0%, rgba(68,29,124,1) 93%);"
        },
        className: "w-4/12 max-w-3xl rounded-lg flex justify-start pl-5 items-center px-1 py-2 border border-t-border md:w-10/12 lg:pl-2",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "text-white flex flex-row gap-5 lg:flex-col",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex items-center lg:justify-center",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: `${card[4]}`,
                        alt: "",
                        width: 75,
                        height: 75
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col justify-center w-full gap-2",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: "text-lg font-bold",
                            children: card[0]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: card[1]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            className: "text-sm",
                            children: [
                                "Technos : ",
                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                    children: card[2]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex justify-start",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "bg-color-btn border border-border rounded-lg py-1 w-40",
                                onClick: ()=>{
                                    window.location.href = `${card[3]}`;
                                },
                                children: "En savoir plus"
                            })
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/components/Presentation.tsx







function MachineAEcrire({ text  }) {
    const [textePartiel, setTextePartiel] = (0,external_react_.useState)("");
    (0,external_react_.useEffect)(()=>{
        let i = 0;
        const maxIndex = text.length;
        const intervalId = setInterval(()=>{
            setTextePartiel(text.substring(0, i));
            i++;
            if (i > maxIndex) {
                clearInterval(intervalId);
            }
        }, 100);
        return ()=>clearInterval(intervalId);
    }, [
        text
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: textePartiel
    });
}
const Presentation = ({ presentation , name , company , job , description , dataCards , resumeFile  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: ``,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `flex justify-center items-center w-full  text-white pt-20`,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex items-center justify-center w-8/12 md:w-11/12 md:flex-col",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-2/3 max-w-xs h-56 flex justify-center items-center md:w-52",
                            style: {
                                background: "radial-gradient(50% 50% at 50% 50%, #763CAC 0%, rgba(50, 15, 133, 0) 100%)"
                            },
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                width: 170,
                                src: me_emoji,
                                alt: "",
                                style: {
                                    background: "radial-gradient(50% 50% at 50% 50%, #FFFFFF 17.71%, rgba(67, 67, 67, 0) 100%)"
                                }
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex justify-center items-start flex-col gap-5 md:text-center md:items-center md:mt-2",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex items-start gap-1",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                            width: "79",
                                            height: "48",
                                            viewBox: "0 0 79 48",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            className: "mt-3 md:hidden",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    fillRule: "evenodd",
                                                    clipRule: "evenodd",
                                                    d: "M0.409811 47.3962C0.409811 47.3962 0.409727 47.3963 0.540564 47.4697C0.611952 47.6016 0.612045 47.6016 0.612045 47.6016L0.61939 47.5976L0.641876 47.5855L0.730429 47.5382C0.808316 47.4967 0.923207 47.436 1.07095 47.3588C1.36645 47.2044 1.79333 46.9845 2.31837 46.7225C3.36861 46.1985 4.8109 45.5067 6.37975 44.8349C7.94916 44.1628 9.64228 43.5121 11.1948 43.0693C12.753 42.6248 14.1485 42.3961 15.1322 42.5499L15.1785 42.2535C14.1259 42.089 12.6764 42.3347 11.1125 42.7808C9.54291 43.2285 7.83687 43.8846 6.26166 44.5591C4.6859 45.2339 3.23811 45.9284 2.18444 46.4541C1.65752 46.717 1.22898 46.9378 0.932048 47.0929C0.925245 47.0964 0.918512 47.0999 0.911849 47.1034C0.956917 47.0199 1.00764 46.9253 1.06341 46.8204C1.30766 46.3614 1.64894 45.7059 2.03734 44.9196C2.81384 43.3475 3.78001 41.2499 4.53554 39.1525C5.28922 37.0603 5.84074 34.9487 5.77222 33.356C5.73791 32.5586 5.54747 31.871 5.12845 31.3832C4.70476 30.8901 4.06748 30.6243 3.19228 30.6328L3.19519 30.9328C4.00484 30.9249 4.54829 31.1683 4.9009 31.5787C5.25818 31.9946 5.43963 32.6049 5.4725 33.3689C5.53832 34.8989 5.00534 36.9631 4.2533 39.0508C3.50312 41.1333 2.54236 43.2197 1.76836 44.7867C1.38151 45.5699 1.04165 46.2227 0.798567 46.6795C0.677032 46.9079 0.579708 47.0873 0.512822 47.2096C0.479379 47.2707 0.453548 47.3175 0.436106 47.3489L0.416331 47.3845L0.409811 47.3962ZM0.540564 47.4697L0.612045 47.6016L0.156433 47.8481L0.409811 47.3962L0.540564 47.4697Z",
                                                    fill: "white"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                    fillRule: "evenodd",
                                                    clipRule: "evenodd",
                                                    d: "M38.8032 11.1122C25.9197 18.0561 14.4217 27.8131 7.47084 39.0643L7.72607 39.2219C14.6424 28.0267 26.0951 18.3023 38.9455 11.3763C51.7959 4.45035 66.03 0.330274 78.4998 0.330273V0.0302734C65.9696 0.0302729 51.6867 4.16841 38.8032 11.1122Z",
                                                    fill: "white"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            className: "md:text-center text-lg",
                                            children: [
                                                "Hello ! Je suis",
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("strong", {
                                                    className: "font-bold text-text-purple",
                                                    children: name
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "pl-10 md:pl-0 md:w-10/12",
                                    children: description.map((item, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            children: [
                                                index === 0 && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "text-sm",
                                                    children: item
                                                }),
                                                index === 1 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                    className: "text-xl",
                                                    children: [
                                                        item,
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                            className: "text-text-purple",
                                                            children: [
                                                                "< saisissant >",
                                                                " "
                                                            ]
                                                        }),
                                                        "..."
                                                    ]
                                                }),
                                                index === 2 && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    className: "text-sm",
                                                    children: "et que les deux sont essentiels pour cr\xe9er des sites web remarquables."
                                                })
                                            ]
                                        }, index))
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "flex justify-end md:justify-center w-full",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: "shadow bg-low-purple hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded hover:cursor-pointer",
                                        href: resumeFile,
                                        target: "_blank",
                                        download: true,
                                        children: "T\xe9l\xe9charger mon CV"
                                    })
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: `flex flex-col justify-center items-center w-full text-white pt-20 `,
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "w-8/12 pb-5 md:w-10/12 md:text-center ",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                className: "text-3xl pb-1 md:pb-3",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(MachineAEcrire, {
                                    text: job
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "flex flex-row gap-2 md:flex-col md:gap-1 md:items-center text-lg",
                                children: [
                                    "Actuellement, je suis concepteur d\xe9veloppeur en alternance chez",
                                    " ",
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        className: "text-ouivalo flex flex-row gap-1",
                                        children: [
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                src: "https://ouivalo.fr/wp-content/uploads/2022/12/cropped-favicon-96x96-1-32x32.png",
                                                alt: "icone",
                                                className: "h-6 w-6"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "https://ouivalo.fr",
                                                children: company
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "w-8/12 md:w-10/12 md:text-center text-lg",
                        children: presentation
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mt-20 w-full flex flex-col items-center justify-center",
                style: {
                    backgroundImage: `url(${Gradient.src})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "20%"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-8/12 md:w-10/12",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "text-3xl text-white mb-5 md: text-center",
                            children: "Experience professionnelles & Formations"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex flex-row flex-wrap justify-center gap-5 max-w-7xl",
                        children: Object.entries(dataCards).map(([key, value])=>/*#__PURE__*/ jsx_runtime_.jsx(Cards, {
                                card: value
                            }, key))
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex justify-center items-center flex-col mt-20 w-full gap-10",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-8/12 md:10/12",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h2", {
                            className: "text-white text-3xl text-center md:text-md",
                            children: [
                                "Technos sur lesquels j'ai travaill\xe9 dans des projets en",
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-text-purple",
                                    children: "entreprise "
                                }),
                                "ou bien dans des projets",
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-text-purple",
                                    children: "scolaire"
                                }),
                                "."
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-8/12 md:w-10/12 flex justify-center items-center",
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: Skills,
                            alt: "technos",
                            width: 725
                        })
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 970:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(116);
/* harmony import */ var _components_Presentation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(138);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(492);
/* harmony import */ var firebase_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(392);
/* harmony import */ var _firebase_firebaseConfig__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43);
/* harmony import */ var _components_Form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(553);
/* harmony import */ var _components_Map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(233);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(794);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_firestore__WEBPACK_IMPORTED_MODULE_4__, firebase_storage__WEBPACK_IMPORTED_MODULE_5__, _firebase_firebaseConfig__WEBPACK_IMPORTED_MODULE_6__, _components_Form__WEBPACK_IMPORTED_MODULE_7__]);
([firebase_firestore__WEBPACK_IMPORTED_MODULE_4__, firebase_storage__WEBPACK_IMPORTED_MODULE_5__, _firebase_firebaseConfig__WEBPACK_IMPORTED_MODULE_6__, _components_Form__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function Home({ formattedDataPresentation , formattedDataCards , fileUrl  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                        children: [
                            " ",
                            formattedDataPresentation.name,
                            " - Portfolio"
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "Generated by create next app"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "icon",
                        href: "/favicon.ico"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                        rel: "stylesheet",
                        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Navbar__WEBPACK_IMPORTED_MODULE_2__/* .Navbar */ .w, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Presentation__WEBPACK_IMPORTED_MODULE_3__/* .Presentation */ .A, {
                        presentation: formattedDataPresentation.objective,
                        name: formattedDataPresentation.name,
                        company: formattedDataPresentation.company,
                        job: formattedDataPresentation.job,
                        description: formattedDataPresentation.description,
                        dataCards: formattedDataCards,
                        resumeFile: fileUrl
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Form__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Map__WEBPACK_IMPORTED_MODULE_8__/* .Map */ .D, {})
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_9__/* .Footer */ .$, {})
        ]
    });
}
const getStaticProps = async ()=>{
    const storage = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_5__.getStorage)();
    const querySnapshotPresentation = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_firebase_firebaseConfig__WEBPACK_IMPORTED_MODULE_6__.db, "presentation"));
    const dataPresentation = querySnapshotPresentation.docs.map((doc)=>doc.data());
    const querySnapshotCards = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.getDocs)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_4__.collection)(_firebase_firebaseConfig__WEBPACK_IMPORTED_MODULE_6__.db, "cards"));
    const dataCards = querySnapshotCards.docs.map((doc)=>doc.data());
    const formattedDataPresentation = dataPresentation[0];
    const formattedDataCards = dataCards[0];
    const fileRef = (0,firebase_storage__WEBPACK_IMPORTED_MODULE_5__.ref)(storage, "gs://portfolio-othmane.appspot.com/cv_othmane_alternance.pdf");
    const fileUrl = await (0,firebase_storage__WEBPACK_IMPORTED_MODULE_5__.getDownloadURL)(fileRef);
    return {
        props: {
            formattedDataPresentation,
            formattedDataCards,
            fileUrl
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 924:
/***/ ((module) => {

module.exports = import("axios");;

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [121,572], () => (__webpack_exec__(970)));
module.exports = __webpack_exports__;

})();