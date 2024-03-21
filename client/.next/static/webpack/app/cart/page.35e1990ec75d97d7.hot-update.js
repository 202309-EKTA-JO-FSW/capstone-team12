"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/cart/page",{

/***/ "(app-pages-browser)/./src/app/components/RemoveFromCart.js":
/*!**********************************************!*\
  !*** ./src/app/components/RemoveFromCart.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\n\n\nconst RemoveFromCartButton = (param)=>{\n    let { ticketId } = param;\n    const removeFromCart = async ()=>{\n        try {\n            const token = localStorage.getItem(\"token\");\n            await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].delete(\"http://localhost:3001/api/cart/remove/\".concat(ticketId), {\n                headers: {\n                    Authorization: \"Bearer \".concat(token)\n                }\n            });\n        } catch (error) {\n            console.error(\"Error removing item from cart:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: removeFromCart,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n            className: \"fa-solid fa-trash\"\n        }, void 0, false, {\n            fileName: \"/usr/src/app/client/src/app/components/RemoveFromCart.js\",\n            lineNumber: 20,\n            columnNumber: 8\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/usr/src/app/client/src/app/components/RemoveFromCart.js\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, undefined);\n};\n_c = RemoveFromCartButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RemoveFromCartButton);\nvar _c;\n$RefreshReg$(_c, \"RemoveFromCartButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9SZW1vdmVGcm9tQ2FydC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEI7QUFDQTtBQUUxQixNQUFNRSx1QkFBdUI7UUFBQyxFQUFFQyxRQUFRLEVBQUU7SUFDeEMsTUFBTUMsaUJBQWlCO1FBQ3JCLElBQUk7WUFDRixNQUFNQyxRQUFRQyxhQUFhQyxPQUFPLENBQUM7WUFDbkMsTUFBTU4sNkNBQUtBLENBQUNPLE1BQU0sQ0FBQyx5Q0FBa0QsT0FBVEwsV0FBWTtnQkFDdEVNLFNBQVM7b0JBQ1BDLGVBQWUsVUFBZ0IsT0FBTkw7Z0JBQzNCO1lBQ0Y7UUFDRixFQUFFLE9BQU9NLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLGtDQUFrQ0E7UUFDbEQ7SUFDRjtJQUVBLHFCQUNFLDhEQUFDRTtRQUFPQyxTQUFTVjtrQkFDZCw0RUFBQ1c7WUFBR0MsV0FBVTs7Ozs7Ozs7Ozs7QUFPckI7S0F2Qk1kO0FBeUJOLCtEQUFlQSxvQkFBb0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9jb21wb25lbnRzL1JlbW92ZUZyb21DYXJ0LmpzP2E5YzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IFJlbW92ZUZyb21DYXJ0QnV0dG9uID0gKHsgdGlja2V0SWQgfSkgPT4ge1xuICBjb25zdCByZW1vdmVGcm9tQ2FydCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcbiAgICAgIGF3YWl0IGF4aW9zLmRlbGV0ZShgaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS9jYXJ0L3JlbW92ZS8ke3RpY2tldElkfWAsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciByZW1vdmluZyBpdGVtIGZyb20gY2FydDonLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvbiBvbkNsaWNrPXtyZW1vdmVGcm9tQ2FydH0+XG4gICAgICAgPGkgIGNsYXNzTmFtZT1cImZhLXNvbGlkIGZhLXRyYXNoXCI+XG4gICAgICBcbiAgICAgIDwvaT5cbiAgICA8L2J1dHRvbj5cbiAgIFxuICApO1xuICBcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlbW92ZUZyb21DYXJ0QnV0dG9uO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiYXhpb3MiLCJSZW1vdmVGcm9tQ2FydEJ1dHRvbiIsInRpY2tldElkIiwicmVtb3ZlRnJvbUNhcnQiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkZWxldGUiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImVycm9yIiwiY29uc29sZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJpIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/RemoveFromCart.js\n"));

/***/ })

});