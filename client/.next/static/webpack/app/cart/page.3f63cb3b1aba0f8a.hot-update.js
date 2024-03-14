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

/***/ "(app-pages-browser)/./src/app/components/CreatOrder.js":
/*!******************************************!*\
  !*** ./src/app/components/CreatOrder.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst CreateOrderForm = (param)=>{\n    let { cart } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        try {\n            const token = localStorage.getItem(\"token\");\n            const ticketItems = cart.items.map((item)=>({\n                    ticketId: item.ticket._id,\n                    quantity: item.quantity\n                }));\n            console.log(ticketItems);\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"http://localhost:3001/api/orders\", {\n                ticketItems\n            }, {\n                headers: {\n                    Authorization: \"Bearer \".concat(token)\n                }\n            });\n            console.log(\"Order created:\", response.data);\n            await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].delete(\"http://localhost:3001/api/cart/clear\", {\n                headers: {\n                    Authorization: \"Bearer \".concat(token)\n                }\n            });\n            router.refresh();\n        } catch (error) {\n            console.error(\"Error creating order:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: handleSubmit,\n        children: \"Place order\"\n    }, void 0, false, {\n        fileName: \"/usr/src/app/client/src/app/components/CreatOrder.js\",\n        lineNumber: 48,\n        columnNumber: 5\n    }, undefined);\n};\n_s(CreateOrderForm, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = CreateOrderForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateOrderForm);\nvar _c;\n$RefreshReg$(_c, \"CreateOrderForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9DcmVhdE9yZGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQzBCO0FBQ0E7QUFDaUI7QUFFM0MsTUFBTUcsa0JBQWtCO1FBQUMsRUFBRUMsSUFBSSxFQUFFOztJQUMvQixNQUFNQyxTQUFTSCwwREFBU0E7SUFDeEIsTUFBTUksZUFBZSxPQUFNQztRQUN6QkEsTUFBTUMsY0FBYztRQUNwQixJQUFJO1lBQ0YsTUFBTUMsUUFBUUMsYUFBYUMsT0FBTyxDQUFDO1lBR25DLE1BQU1DLGNBQWNSLEtBQUtTLEtBQUssQ0FBQ0MsR0FBRyxDQUFDQyxDQUFBQSxPQUFTO29CQUMxQ0MsVUFBVUQsS0FBS0UsTUFBTSxDQUFDQyxHQUFHO29CQUN6QkMsVUFBVUosS0FBS0ksUUFBUTtnQkFDekI7WUFHQUMsUUFBUUMsR0FBRyxDQUFDVDtZQUdaLE1BQU1VLFdBQVcsTUFBTXJCLDZDQUFLQSxDQUFDc0IsSUFBSSxDQUMvQixvQ0FDQTtnQkFBQ1g7WUFBVyxHQUNaO2dCQUNFWSxTQUFTO29CQUNQQyxlQUFlLFVBQWdCLE9BQU5oQjtnQkFDM0I7WUFDRjtZQUdGVyxRQUFRQyxHQUFHLENBQUMsa0JBQWtCQyxTQUFTSSxJQUFJO1lBRzNDLE1BQU16Qiw2Q0FBS0EsQ0FBQzBCLE1BQU0sQ0FBQyx3Q0FBd0M7Z0JBQ3pESCxTQUFTO29CQUNQQyxlQUFlLFVBQWdCLE9BQU5oQjtnQkFDM0I7WUFDRjtZQUNBSixPQUFPdUIsT0FBTztRQUNoQixFQUFFLE9BQU9DLE9BQU87WUFDZFQsUUFBUVMsS0FBSyxDQUFDLHlCQUF5QkE7UUFDekM7SUFDRjtJQUVBLHFCQUNFLDhEQUFDQztRQUFPQyxTQUFTekI7a0JBQWM7Ozs7OztBQUVuQztHQTVDTUg7O1FBQ1dELHNEQUFTQTs7O0tBRHBCQztBQThDTiwrREFBZUEsZUFBZUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2NvbXBvbmVudHMvQ3JlYXRPcmRlci5qcz8yNWM5Il0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nXG5cbmNvbnN0IENyZWF0ZU9yZGVyRm9ybSA9ICh7IGNhcnQgfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgZXZlbnQgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XG5cbiAgICAgIFxuICAgICAgY29uc3QgdGlja2V0SXRlbXMgPSBjYXJ0Lml0ZW1zLm1hcChpdGVtID0+ICh7XG4gICAgICAgIHRpY2tldElkOiBpdGVtLnRpY2tldC5faWQsXG4gICAgICAgIHF1YW50aXR5OiBpdGVtLnF1YW50aXR5XG4gICAgICB9KSk7XG4gICAgICBcbiAgICAgIFxuICAgICAgY29uc29sZS5sb2codGlja2V0SXRlbXMpXG5cbiAgICAgIFxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxuICAgICAgICAnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS9vcmRlcnMnLFxuICAgICAgICB7dGlja2V0SXRlbXN9ICxcbiAgICAgICAge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICBjb25zb2xlLmxvZygnT3JkZXIgY3JlYXRlZDonLCByZXNwb25zZS5kYXRhKTtcblxuICAgICAgXG4gICAgICBhd2FpdCBheGlvcy5kZWxldGUoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvY2FydC9jbGVhcicsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcm91dGVyLnJlZnJlc2goKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBvcmRlcjonLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PlBsYWNlIG9yZGVyPC9idXR0b24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVPcmRlckZvcm07XG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsImF4aW9zIiwidXNlUm91dGVyIiwiQ3JlYXRlT3JkZXJGb3JtIiwiY2FydCIsInJvdXRlciIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ0aWNrZXRJdGVtcyIsIml0ZW1zIiwibWFwIiwiaXRlbSIsInRpY2tldElkIiwidGlja2V0IiwiX2lkIiwicXVhbnRpdHkiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJwb3N0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJkYXRhIiwiZGVsZXRlIiwicmVmcmVzaCIsImVycm9yIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/CreatOrder.js\n"));

/***/ })

});