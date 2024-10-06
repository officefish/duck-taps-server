"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/me",{

/***/ "./src/client/screens/profile/components/basic-info.tsx":
/*!**************************************************************!*\
  !*** ./src/client/screens/profile/components/basic-info.tsx ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styled_profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styled-profile */ \"./src/client/screens/profile/styled-profile.ts\");\n\nvar _s = $RefreshSig$();\n//import styles from '../Profile.module.scss'\n\n\n\nconst isComplete = (data)=>{\n    if (data === undefined || data === null) return false;\n    const isFullName = data.fullName.firstName !== undefined;\n    const isLocation = data.location.country !== undefined;\n    const isCareer = data.career.company !== undefined;\n    const isEducation = data.education.university !== undefined;\n    return isFullName && isLocation && isCareer && isEducation;\n};\nconst fullNameAsString = (fullName)=>{\n    let fullNameStr = fullName.firstName;\n    fullNameStr += fullName.lastName ? \" \".concat(fullName.lastName, \".\") : \".\";\n    return fullNameStr;\n};\nconst locationAsString = (location)=>{\n    let locationStr = location.country;\n    locationStr += location.region ? \", \".concat(location.region, \".\") : \".\";\n    return locationStr;\n};\nconst careerAsString = (career)=>{\n    let careerStr = career.company;\n    careerStr += career.role ? \". \".concat(career.role, \".\") : \".\";\n    return careerStr;\n};\nconst BasicInfo = (param)=>{\n    let { data } = param;\n    _s();\n    const [completeInfo, setCompleteInfo] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        setCompleteInfo(isComplete(data));\n    }, [\n        data\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: completeInfo ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled_profile__WEBPACK_IMPORTED_MODULE_3__.BasicInfoWrapper, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled_profile__WEBPACK_IMPORTED_MODULE_3__.BasicInfoFullname, {\n                    children: data && fullNameAsString(data.fullName)\n                }, void 0, false, {\n                    fileName: \"D:\\\\nest\\\\duck-taps-server\\\\src\\\\client\\\\screens\\\\profile\\\\components\\\\basic-info.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled_profile__WEBPACK_IMPORTED_MODULE_3__.BasicInfoLocation, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                            className: \"text-base\",\n                            icon: [\n                                \"fas\",\n                                \"map-marker-alt\"\n                            ]\n                        }, void 0, false, {\n                            fileName: \"D:\\\\nest\\\\duck-taps-server\\\\src\\\\client\\\\screens\\\\profile\\\\components\\\\basic-info.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"ml-2\",\n                            children: data && locationAsString(data.location)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\nest\\\\duck-taps-server\\\\src\\\\client\\\\screens\\\\profile\\\\components\\\\basic-info.tsx\",\n                            lineNumber: 71,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\nest\\\\duck-taps-server\\\\src\\\\client\\\\screens\\\\profile\\\\components\\\\basic-info.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled_profile__WEBPACK_IMPORTED_MODULE_3__.BasicInfoCareer, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                            className: \"text-gray-400\",\n                            icon: [\n                                \"fas\",\n                                \"briefcase\"\n                            ]\n                        }, void 0, false, {\n                            fileName: \"D:\\\\nest\\\\duck-taps-server\\\\src\\\\client\\\\screens\\\\profile\\\\components\\\\basic-info.tsx\",\n                            lineNumber: 76,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"ml-2\",\n                            children: data && careerAsString(data.career)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\nest\\\\duck-taps-server\\\\src\\\\client\\\\screens\\\\profile\\\\components\\\\basic-info.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\nest\\\\duck-taps-server\\\\src\\\\client\\\\screens\\\\profile\\\\components\\\\basic-info.tsx\",\n                    lineNumber: 75,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled_profile__WEBPACK_IMPORTED_MODULE_3__.BasicInfoEducation, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__.FontAwesomeIcon, {\n                            className: \"text-gray-400\",\n                            icon: [\n                                \"fas\",\n                                \"university\"\n                            ]\n                        }, void 0, false, {\n                            fileName: \"D:\\\\nest\\\\duck-taps-server\\\\src\\\\client\\\\screens\\\\profile\\\\components\\\\basic-info.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"ml-2\",\n                            children: data && data.education.university\n                        }, void 0, false, {\n                            fileName: \"D:\\\\nest\\\\duck-taps-server\\\\src\\\\client\\\\screens\\\\profile\\\\components\\\\basic-info.tsx\",\n                            lineNumber: 87,\n                            columnNumber: 13\n                        }, undefined),\n                        data && data.education.university && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"ml-2 block text-xs\",\n                            children: data.education.faculty\n                        }, void 0, false, {\n                            fileName: \"D:\\\\nest\\\\duck-taps-server\\\\src\\\\client\\\\screens\\\\profile\\\\components\\\\basic-info.tsx\",\n                            lineNumber: 89,\n                            columnNumber: 15\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\nest\\\\duck-taps-server\\\\src\\\\client\\\\screens\\\\profile\\\\components\\\\basic-info.tsx\",\n                    lineNumber: 82,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\nest\\\\duck-taps-server\\\\src\\\\client\\\\screens\\\\profile\\\\components\\\\basic-info.tsx\",\n            lineNumber: 62,\n            columnNumber: 9\n        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full h-16 text-center\",\n            children: \"Mini game here, if not :)\"\n        }, void 0, false, {\n            fileName: \"D:\\\\nest\\\\duck-taps-server\\\\src\\\\client\\\\screens\\\\profile\\\\components\\\\basic-info.tsx\",\n            lineNumber: 96,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n_s(BasicInfo, \"RaYI/jBjdj9QvOvS64TzWkrKmZk=\");\n_c = BasicInfo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BasicInfo);\nvar _c;\n$RefreshReg$(_c, \"BasicInfo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L3NjcmVlbnMvcHJvZmlsZS9jb21wb25lbnRzL2Jhc2ljLWluZm8udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBLDZDQUE2QztBQUNtQjtBQUNyQjtBQVFqQjtBQWExQixNQUFNUSxhQUFhLENBQUNDO0lBQ2xCLElBQUlBLFNBQVNDLGFBQWFELFNBQVMsTUFBTSxPQUFPO0lBRWhELE1BQU1FLGFBQWFGLEtBQUtHLFFBQVEsQ0FBQ0MsU0FBUyxLQUFLSDtJQUMvQyxNQUFNSSxhQUFhTCxLQUFLTSxRQUFRLENBQUNDLE9BQU8sS0FBS047SUFDN0MsTUFBTU8sV0FBV1IsS0FBS1MsTUFBTSxDQUFDQyxPQUFPLEtBQUtUO0lBQ3pDLE1BQU1VLGNBQWNYLEtBQUtZLFNBQVMsQ0FBQ0MsVUFBVSxLQUFLWjtJQUNsRCxPQUFPQyxjQUFjRyxjQUFjRyxZQUFZRztBQUNqRDtBQUVBLE1BQU1HLG1CQUFtQixDQUFDWDtJQUN4QixJQUFJWSxjQUFjWixTQUFTQyxTQUFTO0lBQ3BDVyxlQUFlWixTQUFTYSxRQUFRLEdBQUcsSUFBc0IsT0FBbEJiLFNBQVNhLFFBQVEsRUFBQyxPQUFLO0lBQzlELE9BQU9EO0FBQ1Q7QUFFQSxNQUFNRSxtQkFBbUIsQ0FBQ1g7SUFDeEIsSUFBSVksY0FBY1osU0FBU0MsT0FBTztJQUNsQ1csZUFBZVosU0FBU2EsTUFBTSxHQUFHLEtBQXFCLE9BQWhCYixTQUFTYSxNQUFNLEVBQUMsT0FBSztJQUMzRCxPQUFPRDtBQUNUO0FBRUEsTUFBTUUsaUJBQWlCLENBQUNYO0lBQ3RCLElBQUlZLFlBQVlaLE9BQU9DLE9BQU87SUFDOUJXLGFBQWFaLE9BQU9hLElBQUksR0FBRyxLQUFpQixPQUFaYixPQUFPYSxJQUFJLEVBQUMsT0FBSztJQUNqRCxPQUFPRDtBQUNUO0FBRUEsTUFBTUUsWUFBZ0M7UUFBQyxFQUFFdkIsSUFBSSxFQUFFOztJQUM3QyxNQUFNLENBQUN3QixjQUFjQyxnQkFBZ0IsR0FBR2pDLCtDQUFRQSxDQUFDO0lBQ2pEQyxnREFBU0EsQ0FBQztRQUNSZ0MsZ0JBQWdCMUIsV0FBV0M7SUFDN0IsR0FBRztRQUFDQTtLQUFLO0lBRVQscUJBQ0U7a0JBQ0d3Qiw2QkFDQyw4REFBQzlCLDZEQUFnQkE7OzhCQUNmLDhEQUFDQyw4REFBaUJBOzhCQUNmSyxRQUFRYyxpQkFBaUJkLEtBQUtHLFFBQVE7Ozs7Ozs4QkFFekMsOERBQUNQLDhEQUFpQkE7O3NDQUNoQiw4REFBQ0wsMkVBQWVBOzRCQUNkbUMsV0FBVTs0QkFDVkMsTUFBTTtnQ0FBQztnQ0FBTzs2QkFBaUI7Ozs7OztzQ0FFakMsOERBQUNDOzRCQUFLRixXQUFVO3NDQUNiMUIsUUFBUWlCLGlCQUFpQmpCLEtBQUtNLFFBQVE7Ozs7Ozs7Ozs7Ozs4QkFHM0MsOERBQUNULDREQUFlQTs7c0NBQ2QsOERBQUNOLDJFQUFlQTs0QkFDZG1DLFdBQVU7NEJBQ1ZDLE1BQU07Z0NBQUM7Z0NBQU87NkJBQVk7Ozs7OztzQ0FFNUIsOERBQUNDOzRCQUFLRixXQUFVO3NDQUFRMUIsUUFBUW9CLGVBQWVwQixLQUFLUyxNQUFNOzs7Ozs7Ozs7Ozs7OEJBRTVELDhEQUFDWCwrREFBa0JBOztzQ0FDakIsOERBQUNQLDJFQUFlQTs0QkFDZG1DLFdBQVU7NEJBQ1ZDLE1BQU07Z0NBQUM7Z0NBQU87NkJBQWE7Ozs7OztzQ0FFN0IsOERBQUNDOzRCQUFLRixXQUFVO3NDQUFRMUIsUUFBUUEsS0FBS1ksU0FBUyxDQUFDQyxVQUFVOzs7Ozs7d0JBQ3hEYixRQUFRQSxLQUFLWSxTQUFTLENBQUNDLFVBQVUsa0JBQ2hDLDhEQUFDZTs0QkFBS0YsV0FBVTtzQ0FDYjFCLEtBQUtZLFNBQVMsQ0FBQ2lCLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7O3NDQU0vQiw4REFBQ0M7WUFBSUosV0FBVTtzQkFBMEI7Ozs7Ozs7QUFJakQ7R0EvQ01IO0tBQUFBO0FBZ0ROLCtEQUFlQSxTQUFTQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jbGllbnQvc2NyZWVucy9wcm9maWxlL2NvbXBvbmVudHMvYmFzaWMtaW5mby50c3g/MmI0MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGQyB9IGZyb20gJ3JlYWN0J1xyXG4vL2ltcG9ydCBzdHlsZXMgZnJvbSAnLi4vUHJvZmlsZS5tb2R1bGUuc2NzcydcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQge1xyXG4gIEJhc2ljSW5mb1dyYXBwZXIsXHJcbiAgQmFzaWNJbmZvRnVsbG5hbWUsXHJcbiAgQmFzaWNJbmZvTG9jYXRpb24sXHJcbiAgQmFzaWNJbmZvQ2FyZWVyLFxyXG4gIEJhc2ljSW5mb0VkdWNhdGlvbixcclxufSBmcm9tICcuLi9zdHlsZWQtcHJvZmlsZSdcclxuXHJcbmltcG9ydCB7XHJcbiAgSUJhc2ljSW5mbyxcclxuICBJRnVsbE5hbWUsXHJcbiAgSUxvY2F0aW9uLFxyXG4gIElDYXJlZXIsXHJcbn0gZnJvbSAnQGNsaWVudC9tb2RlbHMvcHJvZmlsZS50eXBlcydcclxuXHJcbmludGVyZmFjZSBCYXNpY0luZm9Qcm9wcyB7XHJcbiAgZGF0YT86IElCYXNpY0luZm9cclxufVxyXG5cclxuY29uc3QgaXNDb21wbGV0ZSA9IChkYXRhPzogSUJhc2ljSW5mbyk6IGJvb2xlYW4gPT4ge1xyXG4gIGlmIChkYXRhID09PSB1bmRlZmluZWQgfHwgZGF0YSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlXHJcblxyXG4gIGNvbnN0IGlzRnVsbE5hbWUgPSBkYXRhLmZ1bGxOYW1lLmZpcnN0TmFtZSAhPT0gdW5kZWZpbmVkXHJcbiAgY29uc3QgaXNMb2NhdGlvbiA9IGRhdGEubG9jYXRpb24uY291bnRyeSAhPT0gdW5kZWZpbmVkXHJcbiAgY29uc3QgaXNDYXJlZXIgPSBkYXRhLmNhcmVlci5jb21wYW55ICE9PSB1bmRlZmluZWRcclxuICBjb25zdCBpc0VkdWNhdGlvbiA9IGRhdGEuZWR1Y2F0aW9uLnVuaXZlcnNpdHkgIT09IHVuZGVmaW5lZFxyXG4gIHJldHVybiBpc0Z1bGxOYW1lICYmIGlzTG9jYXRpb24gJiYgaXNDYXJlZXIgJiYgaXNFZHVjYXRpb25cclxufVxyXG5cclxuY29uc3QgZnVsbE5hbWVBc1N0cmluZyA9IChmdWxsTmFtZTogSUZ1bGxOYW1lKSA9PiB7XHJcbiAgbGV0IGZ1bGxOYW1lU3RyID0gZnVsbE5hbWUuZmlyc3ROYW1lIGFzIHN0cmluZ1xyXG4gIGZ1bGxOYW1lU3RyICs9IGZ1bGxOYW1lLmxhc3ROYW1lID8gYCAke2Z1bGxOYW1lLmxhc3ROYW1lfS5gIDogJy4nXHJcbiAgcmV0dXJuIGZ1bGxOYW1lU3RyXHJcbn1cclxuXHJcbmNvbnN0IGxvY2F0aW9uQXNTdHJpbmcgPSAobG9jYXRpb246IElMb2NhdGlvbikgPT4ge1xyXG4gIGxldCBsb2NhdGlvblN0ciA9IGxvY2F0aW9uLmNvdW50cnkgYXMgc3RyaW5nXHJcbiAgbG9jYXRpb25TdHIgKz0gbG9jYXRpb24ucmVnaW9uID8gYCwgJHtsb2NhdGlvbi5yZWdpb259LmAgOiAnLidcclxuICByZXR1cm4gbG9jYXRpb25TdHJcclxufVxyXG5cclxuY29uc3QgY2FyZWVyQXNTdHJpbmcgPSAoY2FyZWVyOiBJQ2FyZWVyKSA9PiB7XHJcbiAgbGV0IGNhcmVlclN0ciA9IGNhcmVlci5jb21wYW55IGFzIHN0cmluZ1xyXG4gIGNhcmVlclN0ciArPSBjYXJlZXIucm9sZSA/IGAuICR7Y2FyZWVyLnJvbGV9LmAgOiAnLidcclxuICByZXR1cm4gY2FyZWVyU3RyXHJcbn1cclxuXHJcbmNvbnN0IEJhc2ljSW5mbzogRkM8QmFzaWNJbmZvUHJvcHM+ID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgY29uc3QgW2NvbXBsZXRlSW5mbywgc2V0Q29tcGxldGVJbmZvXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRDb21wbGV0ZUluZm8oaXNDb21wbGV0ZShkYXRhKSlcclxuICB9LCBbZGF0YV0pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7Y29tcGxldGVJbmZvID8gKFxyXG4gICAgICAgIDxCYXNpY0luZm9XcmFwcGVyPlxyXG4gICAgICAgICAgPEJhc2ljSW5mb0Z1bGxuYW1lPlxyXG4gICAgICAgICAgICB7ZGF0YSAmJiBmdWxsTmFtZUFzU3RyaW5nKGRhdGEuZnVsbE5hbWUpfVxyXG4gICAgICAgICAgPC9CYXNpY0luZm9GdWxsbmFtZT5cclxuICAgICAgICAgIDxCYXNpY0luZm9Mb2NhdGlvbj5cclxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtYmFzZVwiXHJcbiAgICAgICAgICAgICAgaWNvbj17WydmYXMnLCAnbWFwLW1hcmtlci1hbHQnXX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMlwiPlxyXG4gICAgICAgICAgICAgIHtkYXRhICYmIGxvY2F0aW9uQXNTdHJpbmcoZGF0YS5sb2NhdGlvbil9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvQmFzaWNJbmZvTG9jYXRpb24+XHJcbiAgICAgICAgICA8QmFzaWNJbmZvQ2FyZWVyPlxyXG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMFwiXHJcbiAgICAgICAgICAgICAgaWNvbj17WydmYXMnLCAnYnJpZWZjYXNlJ119XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTJcIj57ZGF0YSAmJiBjYXJlZXJBc1N0cmluZyhkYXRhLmNhcmVlcil9PC9zcGFuPlxyXG4gICAgICAgICAgPC9CYXNpY0luZm9DYXJlZXI+XHJcbiAgICAgICAgICA8QmFzaWNJbmZvRWR1Y2F0aW9uPlxyXG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMFwiXHJcbiAgICAgICAgICAgICAgaWNvbj17WydmYXMnLCAndW5pdmVyc2l0eSddfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0yXCI+e2RhdGEgJiYgZGF0YS5lZHVjYXRpb24udW5pdmVyc2l0eX08L3NwYW4+XHJcbiAgICAgICAgICAgIHtkYXRhICYmIGRhdGEuZWR1Y2F0aW9uLnVuaXZlcnNpdHkgJiYgKFxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTIgYmxvY2sgdGV4dC14c1wiPlxyXG4gICAgICAgICAgICAgICAge2RhdGEuZWR1Y2F0aW9uLmZhY3VsdHl9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9CYXNpY0luZm9FZHVjYXRpb24+XHJcbiAgICAgICAgPC9CYXNpY0luZm9XcmFwcGVyPlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgaC0xNiB0ZXh0LWNlbnRlcic+TWluaSBnYW1lIGhlcmUsIGlmIG5vdCA6KTwvZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEJhc2ljSW5mb1xyXG4iXSwibmFtZXMiOlsiRm9udEF3ZXNvbWVJY29uIiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJCYXNpY0luZm9XcmFwcGVyIiwiQmFzaWNJbmZvRnVsbG5hbWUiLCJCYXNpY0luZm9Mb2NhdGlvbiIsIkJhc2ljSW5mb0NhcmVlciIsIkJhc2ljSW5mb0VkdWNhdGlvbiIsImlzQ29tcGxldGUiLCJkYXRhIiwidW5kZWZpbmVkIiwiaXNGdWxsTmFtZSIsImZ1bGxOYW1lIiwiZmlyc3ROYW1lIiwiaXNMb2NhdGlvbiIsImxvY2F0aW9uIiwiY291bnRyeSIsImlzQ2FyZWVyIiwiY2FyZWVyIiwiY29tcGFueSIsImlzRWR1Y2F0aW9uIiwiZWR1Y2F0aW9uIiwidW5pdmVyc2l0eSIsImZ1bGxOYW1lQXNTdHJpbmciLCJmdWxsTmFtZVN0ciIsImxhc3ROYW1lIiwibG9jYXRpb25Bc1N0cmluZyIsImxvY2F0aW9uU3RyIiwicmVnaW9uIiwiY2FyZWVyQXNTdHJpbmciLCJjYXJlZXJTdHIiLCJyb2xlIiwiQmFzaWNJbmZvIiwiY29tcGxldGVJbmZvIiwic2V0Q29tcGxldGVJbmZvIiwiY2xhc3NOYW1lIiwiaWNvbiIsInNwYW4iLCJmYWN1bHR5IiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/client/screens/profile/components/basic-info.tsx\n"));

/***/ })

});