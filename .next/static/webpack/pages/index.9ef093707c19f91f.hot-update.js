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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Form; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Form(param) {\n    let { db  } = param;\n    _s();\n    const [firstname, setFirstname] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [lastname, setLastname] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    //console.log(db);\n    const data = {\n        firstname: firstname,\n        lastname: lastname,\n        email: email,\n        message: message\n    };\n    //console.log(data);\n    const addingData = async (e)=>{\n        e.preventDefault();\n        const collectionRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(db, \"contacts\");\n        //console.log(collectionRef);\n        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(db, \"hC41wCQpNuCLf2Xplglb\", \"1\"), data);\n        console.log(await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.doc)(db, \"hC41wCQpNuCLf2Xplglb\", \"1\"), data));\n        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.addDoc)(collectionRef, {\n            firstname: firstname,\n            lastname: lastname,\n            email: email,\n            message: message\n        }).then(()=>{\n            alert(\"xxxx\");\n        }).catch((e)=>{\n            console.error(e);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center items-center flex-col mt-10 mb-10 h-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-8/12 md:w-10/12\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-2xl text-white pb-2 xl:text-center\",\n                    children: \"Vous souhaitez prendre contacte c'est par ici !\"\n                }, void 0, false, {\n                    fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center items-center w-5/12 md:w-10/12\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: \"w-full \",\n                    onSubmit: addingData,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-wrap -mx-3 mb-6\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full px-3\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"block uppercase tracking-wide text-white text-xs font-bold mb-2\",\n                                        htmlFor: \"firstname\",\n                                        children: \"Pr\\xe9nom\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        className: \"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500\",\n                                        value: firstname,\n                                        onChange: (e)=>setFirstname(e.target.value),\n                                        type: \"text\",\n                                        name: \"firstname\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-wrap -mx-3 mb-6\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full px-3\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"block uppercase tracking-wide text-white text-xs font-bold mb-2\",\n                                        htmlFor: \"lastname\",\n                                        children: \"Nom\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        className: \"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500\",\n                                        value: lastname,\n                                        onChange: (e)=>setLastname(e.target.value),\n                                        type: \"text\",\n                                        name: \"lastname\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-wrap -mx-3 mb-6\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full px-3\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"block uppercase tracking-wide text-white text-xs font-bold mb-2\",\n                                        htmlFor: \"email\",\n                                        children: \"E-mail\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                                        lineNumber: 86,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        className: \"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500\",\n                                        value: email,\n                                        onChange: (e)=>setEmail(e.target.value),\n                                        type: \"email\",\n                                        name: \"email\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                                        lineNumber: 92,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                            lineNumber: 84,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-wrap -mx-3 mb-6\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full px-3\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"block uppercase tracking-wide text-white text-xs font-bold mb-2\",\n                                        htmlFor: \"message\",\n                                        children: \"Message\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                                        lineNumber: 103,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                        className: \"no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none\",\n                                        value: message,\n                                        onChange: (e)=>setMessage(e.target.value),\n                                        name: \"message\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                                        lineNumber: 109,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                                lineNumber: 102,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                            lineNumber: 101,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"md:flex md:items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"md:w-1/3\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"shadow bg-low-purple hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded\",\n                                        type: \"submit\",\n                                        value: \"send\",\n                                        children: \"Soumettre\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                                        lineNumber: 119,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                                    lineNumber: 118,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"md:w-2/3\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                                    lineNumber: 127,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                            lineNumber: 117,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(Form, \"IOO/TgA+v1r6mYjD4nAvF1MaAyU=\");\n_c = Form;\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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a0RBR0QsOERBQUNPO3dDQUNDWixXQUFVO3dDQUNWTyxPQUFPckI7d0NBQ1BzQixVQUFVLENBQUNsQixJQUFNSCxXQUFXRyxFQUFFbUIsTUFBTSxDQUFDRixLQUFLO3dDQUMxQ0ksTUFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBSVgsOERBQUNaOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ0Q7b0NBQUlDLFdBQVU7OENBQ2IsNEVBQUNhO3dDQUNDYixXQUFVO3dDQUNWVSxNQUFLO3dDQUNMSCxPQUFNO2tEQUNQOzs7Ozs7Ozs7Ozs4Q0FJSCw4REFBQ1I7b0NBQUlDLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTNCLENBQUM7R0FoSXVCdEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRm9ybS50c3g/M2E1MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY29sbGVjdGlvbiwgYWRkRG9jIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuaW1wb3J0IHsgZG9jLCBzZXREb2MgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0oeyBkYiB9OiBhbnkpIHtcbiAgY29uc3QgW2ZpcnN0bmFtZSwgc2V0Rmlyc3RuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbGFzdG5hbWUsIHNldExhc3RuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgLy9jb25zb2xlLmxvZyhkYik7XG4gIGNvbnN0IGRhdGEgPSB7XG4gICAgZmlyc3RuYW1lOiBmaXJzdG5hbWUsXG4gICAgbGFzdG5hbWU6IGxhc3RuYW1lLFxuICAgIGVtYWlsOiBlbWFpbCxcbiAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICB9O1xuICAvL2NvbnNvbGUubG9nKGRhdGEpO1xuXG4gIGNvbnN0IGFkZGluZ0RhdGEgPSBhc3luYyAoZTogeyBwcmV2ZW50RGVmYXVsdDogKCkgPT4gdm9pZCB9KSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgY29sbGVjdGlvblJlZiA9IGNvbGxlY3Rpb24oZGIsIFwiY29udGFjdHNcIik7XG4gICAgLy9jb25zb2xlLmxvZyhjb2xsZWN0aW9uUmVmKTtcbiAgICBhd2FpdCBzZXREb2MoZG9jKGRiLCBcImhDNDF3Q1FwTnVDTGYyWHBsZ2xiXCIsIFwiMVwiKSwgZGF0YSk7XG4gICAgY29uc29sZS5sb2coYXdhaXQgc2V0RG9jKGRvYyhkYiwgXCJoQzQxd0NRcE51Q0xmMlhwbGdsYlwiLCBcIjFcIiksIGRhdGEpKTtcblxuICAgIGF3YWl0IGFkZERvYyhjb2xsZWN0aW9uUmVmLCB7XG4gICAgICBmaXJzdG5hbWU6IGZpcnN0bmFtZSxcbiAgICAgIGxhc3RuYW1lOiBsYXN0bmFtZSxcbiAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UsXG4gICAgfSlcbiAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgYWxlcnQoXCJ4eHh4XCIpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGZsZXgtY29sIG10LTEwIG1iLTEwIGgtZnVsbFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTgvMTIgbWQ6dy0xMC8xMlwiPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0yeGwgdGV4dC13aGl0ZSBwYi0yIHhsOnRleHQtY2VudGVyXCI+XG4gICAgICAgICAgVm91cyBzb3VoYWl0ZXogcHJlbmRyZSBjb250YWN0ZSBjJ2VzdCBwYXIgaWNpICFcbiAgICAgICAgPC9oMj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LTUvMTIgbWQ6dy0xMC8xMlwiPlxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJ3LWZ1bGwgXCIgb25TdWJtaXQ9e2FkZGluZ0RhdGF9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgLW14LTMgbWItNlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtM1wiPlxuICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LXdoaXRlIHRleHQteHMgZm9udC1ib2xkIG1iLTJcIlxuICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJmaXJzdG5hbWVcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgUHLDqW5vbVxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyYXktMjAwIHRleHQtZ3JheS03MDAgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCByb3VuZGVkIHB5LTMgcHgtNCBtYi0zIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJnLXdoaXRlIGZvY3VzOmJvcmRlci1ncmF5LTUwMFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2ZpcnN0bmFtZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEZpcnN0bmFtZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJmaXJzdG5hbWVcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCAtbXgtMyBtYi02XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBweC0zXCI+XG4gICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtd2hpdGUgdGV4dC14cyBmb250LWJvbGQgbWItMlwiXG4gICAgICAgICAgICAgICAgaHRtbEZvcj1cImxhc3RuYW1lXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIE5vbVxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyYXktMjAwIHRleHQtZ3JheS03MDAgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCByb3VuZGVkIHB5LTMgcHgtNCBtYi0zIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJnLXdoaXRlIGZvY3VzOmJvcmRlci1ncmF5LTUwMFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2xhc3RuYW1lfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TGFzdG5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBuYW1lPVwibGFzdG5hbWVcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcCAtbXgtMyBtYi02XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBweC0zXCI+XG4gICAgICAgICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHVwcGVyY2FzZSB0cmFja2luZy13aWRlIHRleHQtd2hpdGUgdGV4dC14cyBmb250LWJvbGQgbWItMlwiXG4gICAgICAgICAgICAgICAgaHRtbEZvcj1cImVtYWlsXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIEUtbWFpbFxuICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhcHBlYXJhbmNlLW5vbmUgYmxvY2sgdy1mdWxsIGJnLWdyYXktMjAwIHRleHQtZ3JheS03MDAgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCByb3VuZGVkIHB5LTMgcHgtNCBtYi0zIGxlYWRpbmctdGlnaHQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJnLXdoaXRlIGZvY3VzOmJvcmRlci1ncmF5LTUwMFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgLW14LTMgbWItNlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtM1wiPlxuICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LXdoaXRlIHRleHQteHMgZm9udC1ib2xkIG1iLTJcIlxuICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJtZXNzYWdlXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIE1lc3NhZ2VcbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibm8tcmVzaXplIGFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgYmctZ3JheS0yMDAgdGV4dC1ncmF5LTcwMCBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHJvdW5kZWQgcHktMyBweC00IG1iLTMgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ymctd2hpdGUgZm9jdXM6Ym9yZGVyLWdyYXktNTAwIGgtNDggcmVzaXplLW5vbmVcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXttZXNzYWdlfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgbmFtZT1cIm1lc3NhZ2VcIlxuICAgICAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6ZmxleCBtZDppdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6dy0xLzNcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdyBiZy1sb3ctcHVycGxlIGhvdmVyOmJnLXRlYWwtNDAwIGZvY3VzOnNoYWRvdy1vdXRsaW5lIGZvY3VzOm91dGxpbmUtbm9uZSB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJzZW5kXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFNvdW1ldHRyZVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDp3LTIvM1wiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImNvbGxlY3Rpb24iLCJhZGREb2MiLCJkb2MiLCJzZXREb2MiLCJGb3JtIiwiZGIiLCJmaXJzdG5hbWUiLCJzZXRGaXJzdG5hbWUiLCJsYXN0bmFtZSIsInNldExhc3RuYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwiZGF0YSIsImFkZGluZ0RhdGEiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb2xsZWN0aW9uUmVmIiwiY29uc29sZSIsImxvZyIsInRoZW4iLCJhbGVydCIsImNhdGNoIiwiZXJyb3IiLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInR5cGUiLCJuYW1lIiwidGV4dGFyZWEiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Form.tsx\n"));

/***/ })

});