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

/***/ "./src/client/screens/profile/components/header/functional.tsx":
/*!*********************************************************************!*\
  !*** ./src/client/screens/profile/components/header/functional.tsx ***!
  \*********************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _styled_profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styled-profile */ \"./src/client/screens/profile/styled-profile.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst HeaderFunctional = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const onWorkspacesClick = (e)=>{\n        e.preventDefault();\n        router.push(\"/players\");\n    };\n    const settingsClick = (e)=>{\n        e.preventDefault();\n        router.push(\"/me/settings\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled_profile__WEBPACK_IMPORTED_MODULE_3__.StyledFunctional, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled_profile__WEBPACK_IMPORTED_MODULE_3__.StyledButton, {\n                type: \"button\",\n                onClick: onWorkspacesClick,\n                children: \"Players\"\n            }, void 0, false, {\n                fileName: \"D:\\\\nest\\\\duck-taps-server\\\\src\\\\client\\\\screens\\\\profile\\\\components\\\\header\\\\functional.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled_profile__WEBPACK_IMPORTED_MODULE_3__.SettingsButton, {\n                $active: true,\n                disabled: false,\n                type: \"button\",\n                onClick: settingsClick,\n                children: [\n                    \"Settings\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__.faGear\n                    }, void 0, false, {\n                        fileName: \"D:\\\\nest\\\\duck-taps-server\\\\src\\\\client\\\\screens\\\\profile\\\\components\\\\header\\\\functional.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\nest\\\\duck-taps-server\\\\src\\\\client\\\\screens\\\\profile\\\\components\\\\header\\\\functional.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\nest\\\\duck-taps-server\\\\src\\\\client\\\\screens\\\\profile\\\\components\\\\header\\\\functional.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HeaderFunctional, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = HeaderFunctional;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeaderFunctional);\nvar _c;\n$RefreshReg$(_c, \"HeaderFunctional\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L3NjcmVlbnMvcHJvZmlsZS9jb21wb25lbnRzL2hlYWRlci9mdW5jdGlvbmFsLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ3VDO0FBRW1CO0FBQ007QUFNbkM7QUFFN0IsTUFBTU0sbUJBQXVCOztJQUMzQixNQUFNQyxTQUFTUCxzREFBU0E7SUFFeEIsTUFBTVEsb0JBQW9CLENBQUNDO1FBQ3pCQSxFQUFFQyxjQUFjO1FBQ2hCSCxPQUFPSSxJQUFJLENBQUM7SUFDZDtJQUVBLE1BQU1DLGdCQUFnQixDQUFDSDtRQUNyQkEsRUFBRUMsY0FBYztRQUNoQkgsT0FBT0ksSUFBSSxDQUFDO0lBQ2Q7SUFFQSxxQkFDRSw4REFBQ1IsNkRBQWdCQTs7MEJBQ2YsOERBQUNFLHlEQUFZQTtnQkFBQ1EsTUFBSztnQkFBU0MsU0FBU047MEJBQW1COzs7Ozs7MEJBR3hELDhEQUFDSiwyREFBY0E7Z0JBQ2JXLFNBQVM7Z0JBQ1RDLFVBQVU7Z0JBQ1ZILE1BQUs7Z0JBQ0xDLFNBQVNGOztvQkFDVjtrQ0FFQyw4REFBQ1YsMkVBQWVBO3dCQUFDZSxNQUFNaEIscUVBQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJckM7R0E3Qk1LOztRQUNXTixrREFBU0E7OztLQURwQk07QUE4Qk4sK0RBQWVBLGdCQUFnQkEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY2xpZW50L3NjcmVlbnMvcHJvZmlsZS9jb21wb25lbnRzL2hlYWRlci9mdW5jdGlvbmFsLnRzeD8xNTVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZDLCBNb3VzZUV2ZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuaW1wb3J0IHsgZmFHZWFyIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcblxyXG5pbXBvcnQge1xyXG4gIFN0eWxlZEZ1bmN0aW9uYWwsXHJcbiAgU2V0dGluZ3NCdXR0b24sXHJcbiAgU3R5bGVkQnV0dG9uLFxyXG59IGZyb20gJy4uLy4uL3N0eWxlZC1wcm9maWxlJ1xyXG5cclxuY29uc3QgSGVhZGVyRnVuY3Rpb25hbDogRkMgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgY29uc3Qgb25Xb3Jrc3BhY2VzQ2xpY2sgPSAoZTogTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgcm91dGVyLnB1c2goJy9wbGF5ZXJzJylcclxuICB9XHJcblxyXG4gIGNvbnN0IHNldHRpbmdzQ2xpY2sgPSAoZTogTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgcm91dGVyLnB1c2goJy9tZS9zZXR0aW5ncycpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFN0eWxlZEZ1bmN0aW9uYWw+XHJcbiAgICAgIDxTdHlsZWRCdXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e29uV29ya3NwYWNlc0NsaWNrfT5cclxuICAgICAgICBQbGF5ZXJzXHJcbiAgICAgIDwvU3R5bGVkQnV0dG9uPlxyXG4gICAgICA8U2V0dGluZ3NCdXR0b25cclxuICAgICAgICAkYWN0aXZlPXt0cnVlfVxyXG4gICAgICAgIGRpc2FibGVkPXtmYWxzZX1cclxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICBvbkNsaWNrPXtzZXR0aW5nc0NsaWNrfVxyXG4gICAgICA+XHJcbiAgICAgICAgU2V0dGluZ3NcclxuICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhR2Vhcn0gLz5cclxuICAgICAgPC9TZXR0aW5nc0J1dHRvbj5cclxuICAgIDwvU3R5bGVkRnVuY3Rpb25hbD5cclxuICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyRnVuY3Rpb25hbFxyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiZmFHZWFyIiwiRm9udEF3ZXNvbWVJY29uIiwiU3R5bGVkRnVuY3Rpb25hbCIsIlNldHRpbmdzQnV0dG9uIiwiU3R5bGVkQnV0dG9uIiwiSGVhZGVyRnVuY3Rpb25hbCIsInJvdXRlciIsIm9uV29ya3NwYWNlc0NsaWNrIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHVzaCIsInNldHRpbmdzQ2xpY2siLCJ0eXBlIiwib25DbGljayIsIiRhY3RpdmUiLCJkaXNhYmxlZCIsImljb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/client/screens/profile/components/header/functional.tsx\n"));

/***/ })

});