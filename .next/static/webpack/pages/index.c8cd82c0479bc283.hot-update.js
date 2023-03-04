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

/***/ "./src/components/Map.tsx":
/*!********************************!*\
  !*** ./src/components/Map.tsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Map\": function() { return /* binding */ Map; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mapbox-gl */ \"./node_modules/mapbox-gl/dist/mapbox-gl.js\");\n/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var mapbox_gl_dist_mapbox_gl_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mapbox-gl/dist/mapbox-gl.css */ \"./node_modules/mapbox-gl/dist/mapbox-gl.css\");\n/* harmony import */ var mapbox_gl_dist_mapbox_gl_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl_dist_mapbox_gl_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Map() {\n    _s();\n    const mapContainer = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        (mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default().accessToken) = \"pk.eyJ1Ijoib3RobWFuZWRldiIsImEiOiJjbGVvZmdqdnkwMXR6M3ZvMWg1OWtxaWQxIn0.WPQkv5XBaid7PtjzfZqHDg\";\n        const map = new (mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default().Map)({\n            container: mapContainer.current,\n            style: \"mapbox://styles/othmanedev/cleojrlut002e01ocfjybh7bg/draft\",\n            center: [\n                5.3698,\n                43.2965\n            ],\n            zoom: 1.3\n        });\n        new (mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default().Marker)({\n            color: \"#1A0B2E\"\n        }).setLngLat([\n            5.3698,\n            43.2965\n        ]).addTo(map);\n        return ()=>map.remove();\n    }, [\n        mapContainer.current\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center pb-5\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-8/12 md:w-10/12\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"text-white text-3xl pb-2\",\n                        children: \"O\\xf9 me trouver ?\"\n                    }, void 0, false, {\n                        fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Map.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Map.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"rounded-xl\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        ref: mapContainer,\n                        className: \"w-full h-72 md:h-56\"\n                    }, void 0, false, {\n                        fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Map.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Map.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Map.tsx\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/othmanem1/Desktop/personal_portfolio/src/components/Map.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_s(Map, \"6zcGo6SVCAaKoYrOkDL9zc4/xh8=\");\n_c = Map;\nvar _c;\n$RefreshReg$(_c, \"Map\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NYXAudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQW9EO0FBQ25CO0FBQ0s7QUFDL0IsU0FBU0csTUFBTTs7SUFDcEIsTUFBTUMsZUFBZUgsNkNBQU1BLENBQU0sSUFBSTtJQUNyQ0QsZ0RBQVNBLENBQUMsSUFBTTtRQUNkRSw4REFBb0IsR0FDbEI7UUFDRixNQUFNSSxNQUFNLElBQUlKLHNEQUFZLENBQUM7WUFDM0JLLFdBQVdILGFBQWFJLE9BQU87WUFDL0JDLE9BQU87WUFDUEMsUUFBUTtnQkFBQztnQkFBUTthQUFRO1lBQ3pCQyxNQUFNO1FBQ1I7UUFDQSxJQUFJVCx5REFBZSxDQUFDO1lBQUVXLE9BQU87UUFBVSxHQUNwQ0MsU0FBUyxDQUFDO1lBQUM7WUFBUTtTQUFRLEVBQzNCQyxLQUFLLENBQUNUO1FBRVQsT0FBTyxJQUFNQSxJQUFJVSxNQUFNO0lBQ3pCLEdBQUc7UUFBQ1osYUFBYUksT0FBTztLQUFDO0lBRXpCLHFCQUNFLDhEQUFDUztRQUFJQyxXQUFVO2tCQUNiLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ0Q7OEJBQ0MsNEVBQUNFO3dCQUFHRCxXQUFZO2tDQUEyQjs7Ozs7Ozs7Ozs7OEJBRTdDLDhEQUFDRDtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0Q7d0JBQUlHLEtBQUtoQjt3QkFBY2MsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs1QyxDQUFDO0dBOUJlZjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9NYXAudHN4P2IxNjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgbWFwYm94Z2wgZnJvbSBcIm1hcGJveC1nbFwiO1xuaW1wb3J0IFwibWFwYm94LWdsL2Rpc3QvbWFwYm94LWdsLmNzc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIE1hcCgpIHtcbiAgY29uc3QgbWFwQ29udGFpbmVyID0gdXNlUmVmPGFueT4obnVsbCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbWFwYm94Z2wuYWNjZXNzVG9rZW4gPVxuICAgICAgXCJway5leUoxSWpvaWIzUm9iV0Z1WldSbGRpSXNJbUVpT2lKamJHVnZabWRxZG5rd01YUjZNM1p2TVdnMU9XdHhhV1F4SW4wLldQUWt2NVhCYWlkN1B0anpmWnFIRGdcIjtcbiAgICBjb25zdCBtYXAgPSBuZXcgbWFwYm94Z2wuTWFwKHtcbiAgICAgIGNvbnRhaW5lcjogbWFwQ29udGFpbmVyLmN1cnJlbnQsXG4gICAgICBzdHlsZTogXCJtYXBib3g6Ly9zdHlsZXMvb3RobWFuZWRldi9jbGVvanJsdXQwMDJlMDFvY2ZqeWJoN2JnL2RyYWZ0XCIsXG4gICAgICBjZW50ZXI6IFs1LjM2OTgsIDQzLjI5NjVdLCAvLyBjZW50ZXIgbWFwIG9uIENoYWRcbiAgICAgIHpvb206IDEuMyxcbiAgICB9KTtcbiAgICBuZXcgbWFwYm94Z2wuTWFya2VyKHsgY29sb3I6IFwiIzFBMEIyRVwiIH0pXG4gICAgICAuc2V0TG5nTGF0KFs1LjM2OTgsIDQzLjI5NjVdKVxuICAgICAgLmFkZFRvKG1hcCk7XG5cbiAgICByZXR1cm4gKCkgPT4gbWFwLnJlbW92ZSgpO1xuICB9LCBbbWFwQ29udGFpbmVyLmN1cnJlbnRdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBwYi01XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctOC8xMiBtZDp3LTEwLzEyXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT17YHRleHQtd2hpdGUgdGV4dC0zeGwgcGItMmB9Pk/DuSBtZSB0cm91dmVyID88L2gyPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLXhsXCI+XG4gICAgICAgICAgPGRpdiByZWY9e21hcENvbnRhaW5lcn0gY2xhc3NOYW1lPVwidy1mdWxsIGgtNzIgbWQ6aC01NlwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwibWFwYm94Z2wiLCJNYXAiLCJtYXBDb250YWluZXIiLCJhY2Nlc3NUb2tlbiIsIm1hcCIsImNvbnRhaW5lciIsImN1cnJlbnQiLCJzdHlsZSIsImNlbnRlciIsInpvb20iLCJNYXJrZXIiLCJjb2xvciIsInNldExuZ0xhdCIsImFkZFRvIiwicmVtb3ZlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDIiLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Map.tsx\n"));

/***/ })

});