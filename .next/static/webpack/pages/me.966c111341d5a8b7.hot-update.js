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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _styled_profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styled-profile */ \"./src/client/screens/profile/styled-profile.ts\");\n/* harmony import */ var _client_providers_auth_user_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/client/providers/auth-user-provider */ \"./src/client/providers/auth-user-provider/index.tsx\");\n/* harmony import */ var _client_models_user_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/client/models/user.model */ \"./src/client/models/user.model.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst HeaderFunctional = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const { user } = (0,_client_providers_auth_user_provider__WEBPACK_IMPORTED_MODULE_4__.useUserStore)();\n    const onWorkspacesClick = (e)=>{\n        e.preventDefault();\n        router.push(\"/admin\");\n    };\n    const settingsClick = (e)=>{\n        e.preventDefault();\n        router.push(\"/me/settings\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled_profile__WEBPACK_IMPORTED_MODULE_3__.StyledFunctional, {\n        children: [\n            user.role === _client_models_user_model__WEBPACK_IMPORTED_MODULE_5__.Role.ADMIN && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled_profile__WEBPACK_IMPORTED_MODULE_3__.StyledButton, {\n                type: \"button\",\n                onClick: onWorkspacesClick,\n                children: \"Admin\"\n            }, void 0, false, {\n                fileName: \"D:\\\\nest\\\\duck-taps-server\\\\src\\\\client\\\\screens\\\\profile\\\\components\\\\header\\\\functional.tsx\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled_profile__WEBPACK_IMPORTED_MODULE_3__.SettingsButton, {\n                $active: true,\n                disabled: false,\n                type: \"button\",\n                onClick: settingsClick,\n                children: [\n                    \"Settings\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n                        icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__.faGear\n                    }, void 0, false, {\n                        fileName: \"D:\\\\nest\\\\duck-taps-server\\\\src\\\\client\\\\screens\\\\profile\\\\components\\\\header\\\\functional.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\nest\\\\duck-taps-server\\\\src\\\\client\\\\screens\\\\profile\\\\components\\\\header\\\\functional.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\nest\\\\duck-taps-server\\\\src\\\\client\\\\screens\\\\profile\\\\components\\\\header\\\\functional.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, undefined);\n};\n_s(HeaderFunctional, \"G9TKNJTg9wg18uE91q/41bHOmWc=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter,\n        _client_providers_auth_user_provider__WEBPACK_IMPORTED_MODULE_4__.useUserStore\n    ];\n});\n_c = HeaderFunctional;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HeaderFunctional);\nvar _c;\n$RefreshReg$(_c, \"HeaderFunctional\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY2xpZW50L3NjcmVlbnMvcHJvZmlsZS9jb21wb25lbnRzL2hlYWRlci9mdW5jdGlvbmFsLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDdUM7QUFFbUI7QUFDTTtBQU1uQztBQUN1QztBQUNuQjtBQUVqRCxNQUFNUSxtQkFBdUI7O0lBQzNCLE1BQU1DLFNBQVNULHNEQUFTQTtJQUV4QixNQUFNLEVBQUVVLElBQUksRUFBRSxHQUFHSixrRkFBWUE7SUFFN0IsTUFBTUssb0JBQW9CLENBQUNDO1FBQ3pCQSxFQUFFQyxjQUFjO1FBQ2hCSixPQUFPSyxJQUFJLENBQUM7SUFDZDtJQUVBLE1BQU1DLGdCQUFnQixDQUFDSDtRQUNyQkEsRUFBRUMsY0FBYztRQUNoQkosT0FBT0ssSUFBSSxDQUFDO0lBQ2Q7SUFFQSxxQkFDRSw4REFBQ1gsNkRBQWdCQTs7WUFDZE8sS0FBS00sSUFBSSxLQUFLVCwyREFBSUEsQ0FBQ1UsS0FBSyxrQkFDdkIsOERBQUNaLHlEQUFZQTtnQkFBQ2EsTUFBSztnQkFBU0MsU0FBU1I7MEJBQW1COzs7Ozs7MEJBSzFELDhEQUFDUCwyREFBY0E7Z0JBQ2JnQixTQUFTO2dCQUNUQyxVQUFVO2dCQUNWSCxNQUFLO2dCQUNMQyxTQUFTSjs7b0JBQ1Y7a0NBRUMsOERBQUNiLDJFQUFlQTt3QkFBQ29CLE1BQU1yQixxRUFBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlyQztHQWxDTU87O1FBQ1dSLGtEQUFTQTtRQUVQTSw4RUFBWUE7OztLQUh6QkU7QUFtQ04sK0RBQWVBLGdCQUFnQkEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY2xpZW50L3NjcmVlbnMvcHJvZmlsZS9jb21wb25lbnRzL2hlYWRlci9mdW5jdGlvbmFsLnRzeD8xNTVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZDLCBNb3VzZUV2ZW50IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuaW1wb3J0IHsgZmFHZWFyIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXHJcblxyXG5pbXBvcnQge1xyXG4gIFN0eWxlZEZ1bmN0aW9uYWwsXHJcbiAgU2V0dGluZ3NCdXR0b24sXHJcbiAgU3R5bGVkQnV0dG9uLFxyXG59IGZyb20gJy4uLy4uL3N0eWxlZC1wcm9maWxlJ1xyXG5pbXBvcnQgeyB1c2VVc2VyU3RvcmUgfSBmcm9tICdAL2NsaWVudC9wcm92aWRlcnMvYXV0aC11c2VyLXByb3ZpZGVyJ1xyXG5pbXBvcnQgeyBSb2xlIH0gZnJvbSAnQC9jbGllbnQvbW9kZWxzL3VzZXIubW9kZWwnXHJcblxyXG5jb25zdCBIZWFkZXJGdW5jdGlvbmFsOiBGQyA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICBjb25zdCB7IHVzZXIgfSA9IHVzZVVzZXJTdG9yZSgpXHJcblxyXG4gIGNvbnN0IG9uV29ya3NwYWNlc0NsaWNrID0gKGU6IE1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIHJvdXRlci5wdXNoKCcvYWRtaW4nKVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgc2V0dGluZ3NDbGljayA9IChlOiBNb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50PikgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICByb3V0ZXIucHVzaCgnL21lL3NldHRpbmdzJylcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8U3R5bGVkRnVuY3Rpb25hbD5cclxuICAgICAge3VzZXIucm9sZSA9PT0gUm9sZS5BRE1JTiAmJiAoXHJcbiAgICAgICAgPFN0eWxlZEJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17b25Xb3Jrc3BhY2VzQ2xpY2t9PlxyXG4gICAgICAgICBBZG1pblxyXG4gICAgICAgPC9TdHlsZWRCdXR0b24+ICAgXHJcbiAgICAgICl9XHJcbiAgICAgXHJcbiAgICAgIDxTZXR0aW5nc0J1dHRvblxyXG4gICAgICAgICRhY3RpdmU9e3RydWV9XHJcbiAgICAgICAgZGlzYWJsZWQ9e2ZhbHNlfVxyXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgIG9uQ2xpY2s9e3NldHRpbmdzQ2xpY2t9XHJcbiAgICAgID5cclxuICAgICAgICBTZXR0aW5nc1xyXG4gICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFHZWFyfSAvPlxyXG4gICAgICA8L1NldHRpbmdzQnV0dG9uPlxyXG4gICAgPC9TdHlsZWRGdW5jdGlvbmFsPlxyXG4gIClcclxufVxyXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJGdW5jdGlvbmFsXHJcbiJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJmYUdlYXIiLCJGb250QXdlc29tZUljb24iLCJTdHlsZWRGdW5jdGlvbmFsIiwiU2V0dGluZ3NCdXR0b24iLCJTdHlsZWRCdXR0b24iLCJ1c2VVc2VyU3RvcmUiLCJSb2xlIiwiSGVhZGVyRnVuY3Rpb25hbCIsInJvdXRlciIsInVzZXIiLCJvbldvcmtzcGFjZXNDbGljayIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInB1c2giLCJzZXR0aW5nc0NsaWNrIiwicm9sZSIsIkFETUlOIiwidHlwZSIsIm9uQ2xpY2siLCIkYWN0aXZlIiwiZGlzYWJsZWQiLCJpY29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/client/screens/profile/components/header/functional.tsx\n"));

/***/ })

});