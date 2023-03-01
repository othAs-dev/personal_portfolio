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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Form; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var _firebase_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../firebase/firebaseConfig */ \"./firebase/firebaseConfig.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Form() {\n    _s();\n    const [firstname, setFirstname] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [lastname, setLastname] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const formRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_2__.useFormik)({\n        initialValues: {\n            firstname: \"\",\n            lastname: \"\",\n            email: \"\",\n            message: \"\"\n        },\n        onSubmit: (values)=>{\n            addingData(values);\n        }\n    });\n    const addingData = async (values)=>{\n        //alert(values.firstname + values.lastname);\n        const collectionRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.collection)(_firebase_firebaseConfig__WEBPACK_IMPORTED_MODULE_4__.db, \"ytb\");\n        await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_3__.addDoc)(collectionRef, {\n            firstname: values.firstname,\n            lastname: values.lastname,\n            email: values.email,\n            message: values.message\n        }).then(()=>{\n            alert(\"xxxx\");\n        }).catch((e)=>{\n            console.error(e);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center items-center flex-col mt-10 mb-10 h-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-8/12 md:w-10/12\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: \"text-2xl text-white pb-2 xl:text-center\",\n                    children: \"Vous souhaitez prendre contacte c'est par ici !\"\n                }, void 0, false, {\n                    fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center items-center w-5/12 md:w-10/12\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: \"w-full \",\n                    onSubmit: formik.handleSubmit,\n                    ref: formRef,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-wrap -mx-3 mb-6\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full px-3\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"block uppercase tracking-wide text-white text-xs font-bold mb-2\",\n                                        htmlFor: \"firstname\",\n                                        children: \"Pr\\xe9nom\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        className: \"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500\",\n                                        value: formik.values.firstname,\n                                        onChange: formik.handleChange,\n                                        type: \"text\",\n                                        name: \"firstname\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                                        lineNumber: 57,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                                lineNumber: 50,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-wrap -mx-3 mb-6\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full px-3\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"block uppercase tracking-wide text-white text-xs font-bold mb-2\",\n                                        htmlFor: \"lastname\",\n                                        children: \"Nom\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        className: \"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500\",\n                                        value: formik.values.lastname,\n                                        onChange: formik.handleChange,\n                                        type: \"text\",\n                                        name: \"lastname\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                                lineNumber: 67,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-wrap -mx-3 mb-6\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full px-3\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"block uppercase tracking-wide text-white text-xs font-bold mb-2\",\n                                        htmlFor: \"email\",\n                                        children: \"E-mail\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        className: \"appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500\",\n                                        value: formik.values.email,\n                                        onChange: formik.handleChange,\n                                        type: \"email\",\n                                        name: \"email\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                                        lineNumber: 91,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-wrap -mx-3 mb-6\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"w-full px-3\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                        className: \"block uppercase tracking-wide text-white text-xs font-bold mb-2\",\n                                        htmlFor: \"message\",\n                                        children: \"Message\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                                        lineNumber: 102,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                        className: \"no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none\",\n                                        value: formik.values.message,\n                                        onChange: formik.handleChange,\n                                        name: \"message\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                                        lineNumber: 108,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                                lineNumber: 101,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                            lineNumber: 100,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"md:flex md:items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"md:w-1/3\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"shadow bg-low-purple hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded\",\n                                        type: \"submit\",\n                                        value: \"send\",\n                                        children: \"Soumettre\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                                        lineNumber: 118,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                                    lineNumber: 117,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"md:w-2/3\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                                    lineNumber: 126,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                            lineNumber: 116,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Form.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n_s(Form, \"C+/o+QdQ7YUWngegu59KRzN/YOQ=\", false, function() {\n    return [\n        formik__WEBPACK_IMPORTED_MODULE_2__.useFormik\n    ];\n});\n_c = Form;\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBTSxDQUFDTixPQUFPO3dDQUM1QnlCLFVBQVV0QixPQUFPdUIsWUFBWTt3Q0FDN0JFLE1BQUs7Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQUlYLDhEQUFDYjs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNEO29DQUFJQyxXQUFVOzhDQUNiLDRFQUFDYzt3Q0FDQ2QsV0FBVTt3Q0FDVlcsTUFBSzt3Q0FDTEgsT0FBTTtrREFDUDs7Ozs7Ozs7Ozs7OENBSUgsOERBQUNUO29DQUFJQyxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU0zQixDQUFDO0dBOUh1QnZCOztRQU9QSiw2Q0FBU0E7OztLQVBGSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Gb3JtLnRzeD8zYTUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUZvcm1payB9IGZyb20gXCJmb3JtaWtcIjtcbmltcG9ydCB7IGNvbGxlY3Rpb24sIGFkZERvYyB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcbmltcG9ydCB7IGRiIH0gZnJvbSBcIi4uLy4uL2ZpcmViYXNlL2ZpcmViYXNlQ29uZmlnXCI7XG5pbXBvcnQgeyBNYXAgfSBmcm9tIFwiLi9NYXBcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0oKSB7XG4gIGNvbnN0IFtmaXJzdG5hbWUsIHNldEZpcnN0bmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2xhc3RuYW1lLCBzZXRMYXN0bmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IGZvcm1SZWYgPSB1c2VSZWYoKTtcblxuICBjb25zdCBmb3JtaWsgPSB1c2VGb3JtaWsoe1xuICAgIGluaXRpYWxWYWx1ZXM6IHtcbiAgICAgIGZpcnN0bmFtZTogXCJcIixcbiAgICAgIGxhc3RuYW1lOiBcIlwiLFxuICAgICAgZW1haWw6IFwiXCIsXG4gICAgICBtZXNzYWdlOiBcIlwiLFxuICAgIH0sXG4gICAgb25TdWJtaXQ6ICh2YWx1ZXMpID0+IHtcbiAgICAgIGFkZGluZ0RhdGEodmFsdWVzKTtcbiAgICB9LFxuICB9KTtcbiAgY29uc3QgYWRkaW5nRGF0YSA9IGFzeW5jICh2YWx1ZXM6IGFueSkgPT4ge1xuICAgIC8vYWxlcnQodmFsdWVzLmZpcnN0bmFtZSArIHZhbHVlcy5sYXN0bmFtZSk7XG4gICAgY29uc3QgY29sbGVjdGlvblJlZiA9IGNvbGxlY3Rpb24oZGIsIFwieXRiXCIpO1xuICAgIGF3YWl0IGFkZERvYyhjb2xsZWN0aW9uUmVmLCB7XG4gICAgICBmaXJzdG5hbWU6IHZhbHVlcy5maXJzdG5hbWUsXG4gICAgICBsYXN0bmFtZTogdmFsdWVzLmxhc3RuYW1lLFxuICAgICAgZW1haWw6IHZhbHVlcy5lbWFpbCxcbiAgICAgIG1lc3NhZ2U6IHZhbHVlcy5tZXNzYWdlLFxuICAgIH0pXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIGFsZXJ0KFwieHh4eFwiKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgIH0pO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZmxleC1jb2wgbXQtMTAgbWItMTAgaC1mdWxsXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctOC8xMiBtZDp3LTEwLzEyXCI+XG4gICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCB0ZXh0LXdoaXRlIHBiLTIgeGw6dGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICBWb3VzIHNvdWhhaXRleiBwcmVuZHJlIGNvbnRhY3RlIGMnZXN0IHBhciBpY2kgIVxuICAgICAgICA8L2gyPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHctNS8xMiBtZDp3LTEwLzEyXCI+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInctZnVsbCBcIiBvblN1Ym1pdD17Zm9ybWlrLmhhbmRsZVN1Ym1pdH0gcmVmPXtmb3JtUmVmfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIC1teC0zIG1iLTZcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTNcIj5cbiAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC13aGl0ZSB0ZXh0LXhzIGZvbnQtYm9sZCBtYi0yXCJcbiAgICAgICAgICAgICAgICBodG1sRm9yPVwiZmlyc3RuYW1lXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFByw6lub21cbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXBwZWFyYW5jZS1ub25lIGJsb2NrIHctZnVsbCBiZy1ncmF5LTIwMCB0ZXh0LWdyYXktNzAwIGJvcmRlciBib3JkZXItZ3JheS0yMDAgcm91bmRlZCBweS0zIHB4LTQgbWItMyBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpiZy13aGl0ZSBmb2N1czpib3JkZXItZ3JheS01MDBcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLmZpcnN0bmFtZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImZpcnN0bmFtZVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIC1teC0zIG1iLTZcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTNcIj5cbiAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgdGV4dC13aGl0ZSB0ZXh0LXhzIGZvbnQtYm9sZCBtYi0yXCJcbiAgICAgICAgICAgICAgICBodG1sRm9yPVwibGFzdG5hbWVcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgTm9tXG4gICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgYmctZ3JheS0yMDAgdGV4dC1ncmF5LTcwMCBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHJvdW5kZWQgcHktMyBweC00IG1iLTMgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ymctd2hpdGUgZm9jdXM6Ym9yZGVyLWdyYXktNTAwXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybWlrLnZhbHVlcy5sYXN0bmFtZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17Zm9ybWlrLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImxhc3RuYW1lXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgLW14LTMgbWItNlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtM1wiPlxuICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LXdoaXRlIHRleHQteHMgZm9udC1ib2xkIG1iLTJcIlxuICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJlbWFpbFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICBFLW1haWxcbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXBwZWFyYW5jZS1ub25lIGJsb2NrIHctZnVsbCBiZy1ncmF5LTIwMCB0ZXh0LWdyYXktNzAwIGJvcmRlciBib3JkZXItZ3JheS0yMDAgcm91bmRlZCBweS0zIHB4LTQgbWItMyBsZWFkaW5nLXRpZ2h0IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpiZy13aGl0ZSBmb2N1czpib3JkZXItZ3JheS01MDBcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLmVtYWlsfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtmb3JtaWsuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgLW14LTMgbWItNlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtM1wiPlxuICAgICAgICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayB1cHBlcmNhc2UgdHJhY2tpbmctd2lkZSB0ZXh0LXdoaXRlIHRleHQteHMgZm9udC1ib2xkIG1iLTJcIlxuICAgICAgICAgICAgICAgIGh0bWxGb3I9XCJtZXNzYWdlXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIE1lc3NhZ2VcbiAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibm8tcmVzaXplIGFwcGVhcmFuY2Utbm9uZSBibG9jayB3LWZ1bGwgYmctZ3JheS0yMDAgdGV4dC1ncmF5LTcwMCBib3JkZXIgYm9yZGVyLWdyYXktMjAwIHJvdW5kZWQgcHktMyBweC00IG1iLTMgbGVhZGluZy10aWdodCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ymctd2hpdGUgZm9jdXM6Ym9yZGVyLWdyYXktNTAwIGgtNDggcmVzaXplLW5vbmVcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtaWsudmFsdWVzLm1lc3NhZ2V9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Zvcm1pay5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgbmFtZT1cIm1lc3NhZ2VcIlxuICAgICAgICAgICAgICA+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6ZmxleCBtZDppdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWQ6dy0xLzNcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNoYWRvdyBiZy1sb3ctcHVycGxlIGhvdmVyOmJnLXRlYWwtNDAwIGZvY3VzOnNoYWRvdy1vdXRsaW5lIGZvY3VzOm91dGxpbmUtbm9uZSB0ZXh0LXdoaXRlIGZvbnQtYm9sZCBweS0yIHB4LTQgcm91bmRlZFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJzZW5kXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFNvdW1ldHRyZVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDp3LTIvM1wiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJ1c2VTdGF0ZSIsInVzZUZvcm1payIsImNvbGxlY3Rpb24iLCJhZGREb2MiLCJkYiIsIkZvcm0iLCJmaXJzdG5hbWUiLCJzZXRGaXJzdG5hbWUiLCJsYXN0bmFtZSIsInNldExhc3RuYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwiZm9ybVJlZiIsImZvcm1payIsImluaXRpYWxWYWx1ZXMiLCJvblN1Ym1pdCIsInZhbHVlcyIsImFkZGluZ0RhdGEiLCJjb2xsZWN0aW9uUmVmIiwidGhlbiIsImFsZXJ0IiwiY2F0Y2giLCJlIiwiY29uc29sZSIsImVycm9yIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJmb3JtIiwiaGFuZGxlU3VibWl0IiwicmVmIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiaGFuZGxlQ2hhbmdlIiwidHlwZSIsIm5hbWUiLCJ0ZXh0YXJlYSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Form.tsx\n"));

/***/ })

});