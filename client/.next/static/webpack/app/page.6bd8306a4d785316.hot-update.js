"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/components/AddToCart.js":
/*!*****************************************!*\
  !*** ./src/app/components/AddToCart.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst AddToCartButton = (param)=>{\n    let { ticketId } = param;\n    _s();\n    const [quantity, setQuantity] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);\n    const handleQuantityChange = (event)=>{\n        setQuantity(parseInt(event.target.value));\n    };\n    const addToCart = async ()=>{\n        try {\n            const token = localStorage.getItem(\"token\");\n            await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://localhost:3001/api/cart/add\", {\n                ticketId,\n                quantity\n            }, {\n                headers: {\n                    Authorization: \"Bearer \".concat(token)\n                }\n            });\n            console.log(\"Item added to cart successfully.\");\n        } catch (error) {\n            console.error(\"Error adding item to cart:\", error);\n            console.log(ticketId);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"number\",\n                value: quantity,\n                onChange: handleQuantityChange,\n                min: \"1\",\n                step: \"1\",\n                style: {\n                    marginRight: \"10px\",\n                    width: \"50px\",\n                    padding: \"5px\"\n                }\n            }, void 0, false, {\n                fileName: \"/usr/src/app/client/src/app/components/AddToCart.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                href: \"/cart\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"button\",\n                    className: \"btn btn-outline-success\",\n                    onClick: addToCart,\n                    style: {\n                        padding: \"5px 10px\"\n                    },\n                    children: \"Book Now\"\n                }, void 0, false, {\n                    fileName: \"/usr/src/app/client/src/app/components/AddToCart.js\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/usr/src/app/client/src/app/components/AddToCart.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/usr/src/app/client/src/app/components/AddToCart.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AddToCartButton, \"Qe09P1MkhcuxrUT+4C5s8y/Npkg=\");\n_c = AddToCartButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddToCartButton);\nvar _c;\n$RefreshReg$(_c, \"AddToCartButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9BZGRUb0NhcnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBd0M7QUFDZDtBQUNHO0FBRzdCLE1BQU1JLGtCQUFrQjtRQUFDLEVBQUVDLFFBQVEsRUFBRTs7SUFDbkMsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdOLCtDQUFRQSxDQUFDO0lBSXpDLE1BQU1PLHVCQUF1QixDQUFDQztRQUM1QkYsWUFBWUcsU0FBU0QsTUFBTUUsTUFBTSxDQUFDQyxLQUFLO0lBQ3pDO0lBRUEsTUFBTUMsWUFBWTtRQUNoQixJQUFJO1lBQ0YsTUFBTUMsUUFBUUMsYUFBYUMsT0FBTyxDQUFDO1lBQ25DLE1BQU1kLDZDQUFLQSxDQUFDZSxJQUFJLENBQ2Qsc0NBQ0E7Z0JBQUVaO2dCQUFVQztZQUFTLEdBQ3JCO2dCQUNFWSxTQUFTO29CQUNQQyxlQUFlLFVBQWdCLE9BQU5MO2dCQUMzQjtZQUNGO1lBRUZNLFFBQVFDLEdBQUcsQ0FBQztRQUVkLEVBQUUsT0FBT0MsT0FBTztZQUNkRixRQUFRRSxLQUFLLENBQUMsOEJBQThCQTtZQUM1Q0YsUUFBUUMsR0FBRyxDQUFDaEI7UUFDZDtJQUNGO0lBS0EscUJBQ0UsOERBQUNrQjs7MEJBQ0MsOERBQUNDO2dCQUNDQyxNQUFLO2dCQUNMYixPQUFPTjtnQkFDUG9CLFVBQVVsQjtnQkFDVm1CLEtBQUk7Z0JBQ0pDLE1BQUs7Z0JBQ0xDLE9BQU87b0JBQUVDLGFBQWE7b0JBQVFDLE9BQU87b0JBQVFDLFNBQVM7Z0JBQU07Ozs7OzswQkFFOUQsOERBQUM3QixpREFBSUE7Z0JBQUM4QixNQUFNOzBCQUNWLDRFQUFDQztvQkFDQ1QsTUFBSztvQkFDTFUsV0FBVTtvQkFDVkMsU0FBU3ZCO29CQUNUZ0IsT0FBTzt3QkFBRUcsU0FBUztvQkFBVzs4QkFDOUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVQ7R0F0RE01QjtLQUFBQTtBQXdETiwrREFBZUEsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvQWRkVG9DYXJ0LmpzPzRmMTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cblxuY29uc3QgQWRkVG9DYXJ0QnV0dG9uID0gKHsgdGlja2V0SWQgfSkgPT4ge1xuICBjb25zdCBbcXVhbnRpdHksIHNldFF1YW50aXR5XSA9IHVzZVN0YXRlKDEpO1xuICBcbiAgXG5cbiAgY29uc3QgaGFuZGxlUXVhbnRpdHlDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBzZXRRdWFudGl0eShwYXJzZUludChldmVudC50YXJnZXQudmFsdWUpKTsgXG4gIH07XG5cbiAgY29uc3QgYWRkVG9DYXJ0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xuICAgICAgYXdhaXQgYXhpb3MucG9zdChcbiAgICAgICAgJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvY2FydC9hZGQnLFxuICAgICAgICB7IHRpY2tldElkLCBxdWFudGl0eSB9LCBcbiAgICAgICAge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApO1xuICAgICAgY29uc29sZS5sb2coJ0l0ZW0gYWRkZWQgdG8gY2FydCBzdWNjZXNzZnVsbHkuJyk7XG4gICAgICAgXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGFkZGluZyBpdGVtIHRvIGNhcnQ6JywgZXJyb3IpO1xuICAgICAgY29uc29sZS5sb2codGlja2V0SWQpO1xuICAgIH1cbiAgfTtcblxuICBcblxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxpbnB1dFxuICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgdmFsdWU9e3F1YW50aXR5fVxuICAgICAgICBvbkNoYW5nZT17aGFuZGxlUXVhbnRpdHlDaGFuZ2V9XG4gICAgICAgIG1pbj1cIjFcIlxuICAgICAgICBzdGVwPVwiMVwiXG4gICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMTBweCcsIHdpZHRoOiAnNTBweCcsIHBhZGRpbmc6ICc1cHgnIH19IC8vIEFkanVzdCBpbnB1dCBzdHlsaW5nXG4gICAgICAvPlxuICAgICAgPExpbmsgaHJlZj17Jy9jYXJ0J30+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc3VjY2Vzc1wiXG4gICAgICAgICAgb25DbGljaz17YWRkVG9DYXJ0fVxuICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6ICc1cHggMTBweCcgfX0gLy8gQWRqdXN0IGJ1dHRvbiBzdHlsaW5nXG4gICAgICAgID5cbiAgICAgICAgICBCb29rIE5vd1xuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFkZFRvQ2FydEJ1dHRvbjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiYXhpb3MiLCJMaW5rIiwiQWRkVG9DYXJ0QnV0dG9uIiwidGlja2V0SWQiLCJxdWFudGl0eSIsInNldFF1YW50aXR5IiwiaGFuZGxlUXVhbnRpdHlDaGFuZ2UiLCJldmVudCIsInBhcnNlSW50IiwidGFyZ2V0IiwidmFsdWUiLCJhZGRUb0NhcnQiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwb3N0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJkaXYiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsIm1pbiIsInN0ZXAiLCJzdHlsZSIsIm1hcmdpblJpZ2h0Iiwid2lkdGgiLCJwYWRkaW5nIiwiaHJlZiIsImJ1dHRvbiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/AddToCart.js\n"));

/***/ })

});