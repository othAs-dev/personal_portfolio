"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Form.tsx":
/*!*********************************!*\
  !*** ./src/components/Form.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Form; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _firebase_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../firebase/firebaseConfig */ \"./firebase/firebaseConfig.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Form() {\n    _s();\n    const [firstname, setFirstname] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [lastname, setLastname] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const formRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_2__.useFormik)({\n        initialValues: {\n            firstname: \"\",\n            lastname: \"\",\n            email: \"\",\n            message: \"\"\n        },\n        onSubmit: (values)=>{\n            addingData(values);\n        }\n    });\n    const addingData = async (values)=>{\n        alert(values.firstname + values.lastname);\n        const collectionRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_firebase_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.db, \"ytb\");\n        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.addDoc)(collectionRef, {\n            firstname: firstname,\n            lastname: values.lastname,\n            email: values.email,\n            message: values.message\n        }).then(()=>{\n            alert(\"xxxx\");\n        }).catch((e)=>{\n            console.error(e);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center items-center flex-col mt-10 mb-10 h-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-8/12 md:w-10/12\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-2xl text-white pb-2 xl:text-center\",\n                    children: \"Vous souhaitez prendre contacte c'est par ici !\"\n                }, void 0, false, {\n                    fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center items-center w-5/12 md:w-10/12\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: \"w-full \",\n                    onSubmit: formik.handleSubmit,\n                    ref: formRef,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-wrap -mx-3 mb-6\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full px-3\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"block uppercase tracking-wide text-white text-xs font-bold mb-2\",\n                                        htmlFor: \"firstname\",\n                                        children: \"Pr\\xe9nom\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        className: \"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500\",\n                                        value: firstname,\n                                        onChange: (e)=>e.target.value,\n                                        type: \"text\",\n                                        name: \"firstname\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-wrap -mx-3 mb-6\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full px-3\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"block uppercase tracking-wide text-white text-xs font-bold mb-2\",\n                                        htmlFor: \"lastname\",\n                                        children: \"Nom\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        className: \"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500\",\n                                        value: formik.values.lastname,\n                                        onChange: formik.handleChange,\n                                        type: \"text\",\n                                        name: \"lastname\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-wrap -mx-3 mb-6\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full px-3\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"block uppercase tracking-wide text-white text-xs font-bold mb-2\",\n                                        htmlFor: \"email\",\n                                        children: \"E-mail\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        className: \"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500\",\n                                        value: formik.values.email,\n                                        onChange: formik.handleChange,\n                                        type: \"email\",\n                                        name: \"email\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                                        lineNumber: 91,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-wrap -mx-3 mb-6\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full px-3\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"block uppercase tracking-wide text-white text-xs font-bold mb-2\",\n                                        htmlFor: \"message\",\n                                        children: \"Message\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                                        lineNumber: 102,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                        className: \"no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none\",\n                                        value: formik.values.message,\n                                        onChange: formik.handleChange,\n                                        name: \"message\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                                        lineNumber: 108,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                                lineNumber: 101,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                            lineNumber: 100,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"md:flex md:items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"md:w-1/3\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"shadow bg-low-purple hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded\",\n                                        type: \"submit\",\n                                        value: \"send\",\n                                        children: \"Soumettre\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                                        lineNumber: 118,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                                    lineNumber: 117,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"md:w-2/3\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                                    lineNumber: 126,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                            lineNumber: 116,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n_s(Form, \"C+/o+QdQ7YUWngegu59KRzN/YOQ=\", false, function() {\n    return [\n        formik__WEBPACK_IMPORTED_MODULE_2__.useFormik\n    ];\n});\n_c = Form;\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Gb3JtLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ047QUFDcUI7QUFDTDtBQUVwQyxTQUFTTSxPQUFPOztJQUM3QixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR1AsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDUSxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1UsT0FBT0MsU0FBUyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUNuQyxNQUFNLENBQUNZLFNBQVNDLFdBQVcsR0FBR2IsK0NBQVFBLENBQUM7SUFDdkMsTUFBTWMsVUFBVWYsNkNBQU1BO0lBRXRCLE1BQU1nQixTQUFTZCxpREFBU0EsQ0FBQztRQUN2QmUsZUFBZTtZQUNiVixXQUFXO1lBQ1hFLFVBQVU7WUFDVkUsT0FBTztZQUNQRSxTQUFTO1FBQ1g7UUFDQUssVUFBVSxDQUFDQyxTQUFXO1lBQ3BCQyxXQUFXRDtRQUNiO0lBQ0Y7SUFDQSxNQUFNQyxhQUFhLE9BQU9ELFNBQWdCO1FBQ3hDRSxNQUFNRixPQUFPWixTQUFTLEdBQUdZLE9BQU9WLFFBQVE7UUFDeEMsTUFBTWEsZ0JBQWdCbkIsOERBQVVBLENBQUNFLHdEQUFFQSxFQUFFO1FBQ3JDLE1BQU1ELDBEQUFNQSxDQUFDa0IsZUFBZTtZQUMxQmYsV0FBV0E7WUFDWEUsVUFBVVUsT0FBT1YsUUFBUTtZQUN6QkUsT0FBT1EsT0FBT1IsS0FBSztZQUNuQkUsU0FBU00sT0FBT04sT0FBTztRQUN6QixHQUNHVSxJQUFJLENBQUMsSUFBTTtZQUNWRixNQUFNO1FBQ1IsR0FDQ0csS0FBSyxDQUFDLENBQUNDLElBQU07WUFDWkMsUUFBUUMsS0FBSyxDQUFDRjtRQUNoQjtJQUNKO0lBQ0EscUJBQ0UsOERBQUNHO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0M7b0JBQUdELFdBQVU7OEJBQTBDOzs7Ozs7Ozs7OzswQkFJMUQsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRTtvQkFBS0YsV0FBVTtvQkFBVVgsVUFBVUYsT0FBT2dCLFlBQVk7b0JBQUVDLEtBQUtsQjs7c0NBQzVELDhEQUFDYTs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDSzt3Q0FDQ0wsV0FBVTt3Q0FDVk0sU0FBUTtrREFDVDs7Ozs7O2tEQUdELDhEQUFDQzt3Q0FDQ1AsV0FBVTt3Q0FDVlEsT0FBTzlCO3dDQUNQK0IsVUFBVSxDQUFDYixJQUFNQSxFQUFFYyxNQUFNLENBQUNGLEtBQUs7d0NBQy9CRyxNQUFLO3dDQUNMQyxNQUFLOzs7Ozs7Ozs7Ozs7Ozs7OztzQ0FJWCw4REFBQ2I7NEJBQUlDLFdBQVU7c0NBQ2IsNEVBQUNEO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ0s7d0NBQ0NMLFdBQVU7d0NBQ1ZNLFNBQVE7a0RBQ1Q7Ozs7OztrREFHRCw4REFBQ0M7d0NBQ0NQLFdBQVU7d0NBQ1ZRLE9BQU9yQixPQUFPRyxNQUFNLENBQUNWLFFBQVE7d0NBQzdCNkIsVUFBVXRCLE9BQU8wQixZQUFZO3dDQUM3QkYsTUFBSzt3Q0FDTEMsTUFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBSVgsOERBQUNiOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDRDtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNLO3dDQUNDTCxXQUFVO3dDQUNWTSxTQUFRO2tEQUNUOzs7Ozs7a0RBR0QsOERBQUNDO3dDQUNDUCxXQUFVO3dDQUNWUSxPQUFPckIsT0FBT0csTUFBTSxDQUFDUixLQUFLO3dDQUMxQjJCLFVBQVV0QixPQUFPMEIsWUFBWTt3Q0FDN0JGLE1BQUs7d0NBQ0xDLE1BQUs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUlYLDhEQUFDYjs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNiLDhEQUFDSzt3Q0FDQ0wsV0FBVTt3Q0FDVk0sU0FBUTtrREFDVDs7Ozs7O2tEQUdELDhEQUFDUTt3Q0FDQ2QsV0FBVTt3Q0FDVlEsT0FBT3JCLE9BQU9HLE1BQU0sQ0FBQ04sT0FBTzt3Q0FDNUJ5QixVQUFVdEIsT0FBTzBCLFlBQVk7d0NBQzdCRCxNQUFLOzs7Ozs7Ozs7Ozs7Ozs7OztzQ0FJWCw4REFBQ2I7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDRDtvQ0FBSUMsV0FBVTs4Q0FDYiw0RUFBQ2U7d0NBQ0NmLFdBQVU7d0NBQ1ZXLE1BQUs7d0NBQ0xILE9BQU07a0RBQ1A7Ozs7Ozs7Ozs7OzhDQUlILDhEQUFDVDtvQ0FBSUMsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNM0IsQ0FBQztHQTlIdUJ2Qjs7UUFPUEosNkNBQVNBOzs7S0FQRkkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybS50c3g/M2E1MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VGb3JtaWsgfSBmcm9tIFwiZm9ybWlrXCI7XG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBhZGREb2MgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5pbXBvcnQgeyBkYiB9IGZyb20gXCIuLi8uLi9maXJlYmFzZS9maXJlYmFzZUNvbmZpZ1wiO1xuaW1wb3J0IHsgTWFwIH0gZnJvbSBcIi4vTWFwXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtKCkge1xuICBjb25zdCBbZmlyc3RuYW1lLCBzZXRGaXJzdG5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtsYXN0bmFtZSwgc2V0TGFzdG5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFttZXNzYWdlLCBzZXRNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBmb3JtUmVmID0gdXNlUmVmKCk7XG5cbiAgY29uc3QgZm9ybWlrID0gdXNlRm9ybWlrKHtcbiAgICBpbml0aWFsVmFsdWVzOiB7XG4gICAgICBmaXJzdG5hbWU6IFwiXCIsXG4gICAgICBsYXN0bmFtZTogXCJcIixcbiAgICAgIGVtYWlsOiBcIlwiLFxuICAgICAgbWVzc2FnZTogXCJcIixcbiAgICB9LFxuICAgIG9uU3VibWl0OiAodmFsdWVzKSA9PiB7XG4gICAgICBhZGRpbmdEYXRhKHZhbHVlcyk7XG4gICAgfSxcbiAgfSk7XG4gIGNvbnN0IGFkZGluZ0RhdGEgPSBhc3luYyAodmFsdWVzOiBhbnkpID0+IHtcbiAgICBhbGVydCh2YWx1ZXMuZmlyc3RuYW1lICsgdmFsdWVzLmxhc3RuYW1lKTtcbiAgICBjb25zdCBjb2xsZWN0aW9uUmVmID0gY29sbGVjdGlvbihkYiwgXCJ5dGJcIik7XG4gICAgYXdhaXQgYWRkRG9jKGNvbGxlY3Rpb25SZWYsIHtcbiAgICAgIGZpcnN0bmFtZTogZmlyc3RuYW1lLFxuICAgICAgbGFzdG5hbWU6IHZhbHVlcy5sYXN0bmFtZSxcbiAgICAgIGVtYWlsOiB2YWx1ZXMuZW1haWwsXG4gICAgICBtZXNzYWdlOiB2YWx1ZXMubWVzc2FnZSxcbiAgICB9KVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBhbGVydChcInh4eHhcIik7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICB9KTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGZsZXgtY29sIG10LTEwIG1iLTEwIGgtZnVsbFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTgvMTIgbWQ6dy0xMC8xMlwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC13aGl0ZSBwYi0yIHhsOnRleHQtY2VudGVyXCI+XG4gICAgICAgICAgVm91cyBzb3VoYWl0ZXogcHJlbmRyZSBjb250YWN0ZSBjJ2VzdCBwYXIgaWNpICFcbiAgICAgICAgPC9oMj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LTUvMTIgbWQ6dy0xMC8xMlwiPlxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJ3LWZ1bGwgXCIgb25TdWJtaXQ9e2Zvcm1pay5oYW5kbGVTdWJtaXR9IHJlZj17Zm9ybVJlZn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCAtbXgtMyBtYi02XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBweC0zXCI+XG4gICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtd2hpdGUgdGV4dC14cyBmb250LWJvbGQgbWItMlwiXG4gICAgICAgICAgICAgICAgaHRtbEZvcj1cImZpcnN0bmFtZVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBQcsOpbm9tXG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgYmctZ3JheS0yMDAgdGV4dC1ncmF5LTcwMCBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHJvdW5kZWQgcHktMyBweC00IG1iLTMgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ymctd2hpdGUgZm9jdXM6Ym9yZGVyLWdyYXktNTAwXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Zmlyc3RuYW1lfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gZS50YXJnZXQudmFsdWV9XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJmaXJzdG5hbWVcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCAtbXgtMyBtYi02XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBweC0zXCI+XG4gICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtd2hpdGUgdGV4dC14cyBmb250LWJvbGQgbWItMlwiXG4gICAgICAgICAgICAgICAgaHRtbEZvcj1cImxhc3RuYW1lXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIE5vbVxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyYXktMjAwIHRleHQtZ3JheS03MDAgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCByb3VuZGVkIHB5LTMgcHgtNCBtYi0zIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJnLXdoaXRlIGZvY3VzOmJvcmRlci1ncmF5LTUwMFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm1pay52YWx1ZXMubGFzdG5hbWV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJsYXN0bmFtZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIC1teC0zIG1iLTZcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTNcIj5cbiAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC13aGl0ZSB0ZXh0LXhzIGZvbnQtYm9sZCBtYi0yXCJcbiAgICAgICAgICAgICAgICBodG1sRm9yPVwiZW1haWxcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgRS1tYWlsXG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgYmctZ3JheS0yMDAgdGV4dC1ncmF5LTcwMCBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHJvdW5kZWQgcHktMyBweC00IG1iLTMgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ymctd2hpdGUgZm9jdXM6Ym9yZGVyLWdyYXktNTAwXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5lbWFpbH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIC1teC0zIG1iLTZcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTNcIj5cbiAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC13aGl0ZSB0ZXh0LXhzIGZvbnQtYm9sZCBtYi0yXCJcbiAgICAgICAgICAgICAgICBodG1sRm9yPVwibWVzc2FnZVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBNZXNzYWdlXG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5vLXJlc2l6ZSBhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyYXktMjAwIHRleHQtZ3JheS03MDAgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCByb3VuZGVkIHB5LTMgcHgtNCBtYi0zIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJnLXdoaXRlIGZvY3VzOmJvcmRlci1ncmF5LTUwMCBoLTQ4IHJlc2l6ZS1ub25lXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5tZXNzYWdlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIG5hbWU9XCJtZXNzYWdlXCJcbiAgICAgICAgICAgICAgPjwvdGV4dGFyZWE+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOmZsZXggbWQ6aXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1kOnctMS8zXCI+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaGFkb3cgYmctbG93LXB1cnBsZSBob3ZlcjpiZy10ZWFsLTQwMCBmb2N1czpzaGFkb3ctb3V0bGluZSBmb2N1czpvdXRsaW5lLW5vbmUgdGV4dC13aGl0ZSBmb250LWJvbGQgcHktMiBweC00IHJvdW5kZWRcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPVwic2VuZFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBTb3VtZXR0cmVcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6dy0yLzNcIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlUmVmIiwidXNlU3RhdGUiLCJ1c2VGb3JtaWsiLCJjb2xsZWN0aW9uIiwiYWRkRG9jIiwiZGIiLCJGb3JtIiwiZmlyc3RuYW1lIiwic2V0Rmlyc3RuYW1lIiwibGFzdG5hbWUiLCJzZXRMYXN0bmFtZSIsImVtYWlsIiwic2V0RW1haWwiLCJtZXNzYWdlIiwic2V0TWVzc2FnZSIsImZvcm1SZWYiLCJmb3JtaWsiLCJpbml0aWFsVmFsdWVzIiwib25TdWJtaXQiLCJ2YWx1ZXMiLCJhZGRpbmdEYXRhIiwiYWxlcnQiLCJjb2xsZWN0aW9uUmVmIiwidGhlbiIsImNhdGNoIiwiZSIsImNvbnNvbGUiLCJlcnJvciIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwiZm9ybSIsImhhbmRsZVN1Ym1pdCIsInJlZiIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInR5cGUiLCJuYW1lIiwiaGFuZGxlQ2hhbmdlIiwidGV4dGFyZWEiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Form.tsx\n"));

/***/ })

});