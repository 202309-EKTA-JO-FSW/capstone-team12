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

/***/ "(app-pages-browser)/./src/app/pages/CartPage.js":
/*!***********************************!*\
  !*** ./src/app/pages/CartPage.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _components_Cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Cart */ \"(app-pages-browser)/./src/app/components/Cart.js\");\n/* harmony import */ var _components_ClearCart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ClearCart */ \"(app-pages-browser)/./src/app/components/ClearCart.js\");\n/* harmony import */ var _components_CreatOrder__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/CreatOrder */ \"(app-pages-browser)/./src/app/components/CreatOrder.js\");\n// pages/cart.js\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst CartPage = ()=>{\n    _s();\n    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchCart1 = async ()=>{\n            try {\n                const token = localStorage.getItem(\"token\");\n                const response = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(\"http://localhost:3001/api/cart\", {\n                    headers: {\n                        Authorization: \"Bearer \".concat(token)\n                    }\n                });\n                setCart(response.data);\n            } catch (error) {\n                console.error(\"Error fetching user cart:\", error);\n            }\n        };\n        fetchCart1();\n    }, []);\n    const handleClearCart = async ()=>{\n        // Refresh the cart after clearing cart\n        await fetchCart();\n    };\n    //   return (\n    //     <div>\n    //       <h1>Cart</h1>\n    //       {cart ? <Cart cart={cart} />\n    //        : <p>Loading...</p>}\n    //     </div>\n    //   );\n    // };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Cart\"\n            }, void 0, false, {\n                fileName: \"/usr/src/app/client/src/app/pages/CartPage.js\",\n                lineNumber: 45,\n                columnNumber: 5\n            }, undefined),\n            cart ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Cart__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        cart: cart\n                    }, void 0, false, {\n                        fileName: \"/usr/src/app/client/src/app/pages/CartPage.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: console.log(cart)\n                    }, void 0, false, {\n                        fileName: \"/usr/src/app/client/src/app/pages/CartPage.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ClearCart__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onSuccess: ()=>setCart(null),\n                        onError: ()=>alert(\"Failed to clear cart\")\n                    }, void 0, false, {\n                        fileName: \"/usr/src/app/client/src/app/pages/CartPage.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Cart Is Empty\"\n            }, void 0, false, {\n                fileName: \"/usr/src/app/client/src/app/pages/CartPage.js\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CreatOrder__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                cart: cart.items\n            }, void 0, false, {\n                fileName: \"/usr/src/app/client/src/app/pages/CartPage.js\",\n                lineNumber: 55,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/usr/src/app/client/src/app/pages/CartPage.js\",\n        lineNumber: 44,\n        columnNumber: 3\n    }, undefined);\n};\n_s(CartPage, \"GFK0CC7GMGqGCJ6zwyfFVjZxPPc=\");\n_c = CartPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CartPage);\nvar _c;\n$RefreshReg$(_c, \"CartPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZXMvQ2FydFBhZ2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxnQkFBZ0I7OztBQUNtQztBQUN6QjtBQUNZO0FBQ2dCO0FBQ0M7QUFHdkQsTUFBTU8sV0FBVzs7SUFDZixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1AsK0NBQVFBLENBQUM7SUFFakNELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVMsYUFBWTtZQUNoQixJQUFJO2dCQUNGLE1BQU1DLFFBQVFDLGFBQWFDLE9BQU8sQ0FBQztnQkFDbkMsTUFBTUMsV0FBVyxNQUFNWCw2Q0FBS0EsQ0FBQ1ksR0FBRyxDQUFDLGtDQUFrQztvQkFDakVDLFNBQVM7d0JBQ1BDLGVBQWUsVUFBZ0IsT0FBTk47b0JBQzNCO2dCQUNGO2dCQUNBRixRQUFRSyxTQUFTSSxJQUFJO1lBQ3ZCLEVBQUUsT0FBT0MsT0FBTztnQkFDZEMsUUFBUUQsS0FBSyxDQUFDLDZCQUE2QkE7WUFDN0M7UUFDRjtRQUVBVDtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1XLGtCQUFrQjtRQUN0Qix1Q0FBdUM7UUFDdkMsTUFBTVg7SUFDUjtJQUVGLGFBQWE7SUFDYixZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLHFDQUFxQztJQUNyQyw4QkFBOEI7SUFDOUIsYUFBYTtJQUNiLE9BQU87SUFDUCxLQUFLO0lBQ0wscUJBQ0UsOERBQUNZOzswQkFDQyw4REFBQ0M7MEJBQUc7Ozs7OztZQUNIZixxQkFDQzs7a0NBQ0UsOERBQUNKLHdEQUFJQTt3QkFBQ0ksTUFBTUE7Ozs7OztrQ0FDWiw4REFBQ2dCO2tDQUFHSixRQUFRSyxHQUFHLENBQUNqQjs7Ozs7O2tDQUNoQiw4REFBQ0gsNkRBQWVBO3dCQUFDcUIsV0FBVyxJQUFNakIsUUFBUTt3QkFBT2tCLFNBQVMsSUFBTUMsTUFBTTs7Ozs7Ozs2Q0FHeEUsOERBQUNKOzBCQUFFOzs7Ozs7MEJBRUwsOERBQUNsQiw4REFBZUE7Z0JBQUNFLE1BQU1BLEtBQUtxQixLQUFLOzs7Ozs7Ozs7Ozs7QUFHckM7R0FqRE10QjtLQUFBQTtBQW1ETiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3BhZ2VzL0NhcnRQYWdlLmpzP2Q3MmIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcGFnZXMvY2FydC5qc1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnOyBcbmltcG9ydCBDYXJ0IGZyb20gJy4uL2NvbXBvbmVudHMvQ2FydCc7XG5pbXBvcnQgQ2xlYXJDYXJ0QnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvQ2xlYXJDYXJ0JztcbmltcG9ydCBDcmVhdGVPcmRlckZvcm0gZnJvbSAnLi4vY29tcG9uZW50cy9DcmVhdE9yZGVyJztcblxuXG5jb25zdCBDYXJ0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW2NhcnQsIHNldENhcnRdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaENhcnQgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpOyBcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvY2FydCcsIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCBcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBzZXRDYXJ0KHJlc3BvbnNlLmRhdGEpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgdXNlciBjYXJ0OicsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZmV0Y2hDYXJ0KCk7XG4gIH0sIFtdKTtcbiAgXG4gIGNvbnN0IGhhbmRsZUNsZWFyQ2FydCA9IGFzeW5jICgpID0+IHtcbiAgICAvLyBSZWZyZXNoIHRoZSBjYXJ0IGFmdGVyIGNsZWFyaW5nIGNhcnRcbiAgICBhd2FpdCBmZXRjaENhcnQoKTtcbiAgfTtcblxuLy8gICByZXR1cm4gKFxuLy8gICAgIDxkaXY+XG4vLyAgICAgICA8aDE+Q2FydDwvaDE+XG4vLyAgICAgICB7Y2FydCA/IDxDYXJ0IGNhcnQ9e2NhcnR9IC8+XG4vLyAgICAgICAgOiA8cD5Mb2FkaW5nLi4uPC9wPn1cbi8vICAgICA8L2Rpdj5cbi8vICAgKTtcbi8vIH07XG5yZXR1cm4gKFxuICA8ZGl2PlxuICAgIDxoMT5DYXJ0PC9oMT5cbiAgICB7Y2FydCA/IChcbiAgICAgIDw+XG4gICAgICAgIDxDYXJ0IGNhcnQ9e2NhcnR9IC8+XG4gICAgICAgIDxwPntjb25zb2xlLmxvZyhjYXJ0KX08L3A+XG4gICAgICAgIDxDbGVhckNhcnRCdXR0b24gb25TdWNjZXNzPXsoKSA9PiBzZXRDYXJ0KG51bGwpfSBvbkVycm9yPXsoKSA9PiBhbGVydCgnRmFpbGVkIHRvIGNsZWFyIGNhcnQnKX0gLz5cbiAgICAgIDwvPlxuICAgICkgOiAoXG4gICAgICA8cD5DYXJ0IElzIEVtcHR5PC9wPlxuICAgICl9XG4gICAgPENyZWF0ZU9yZGVyRm9ybSBjYXJ0PXtjYXJ0Lml0ZW1zfS8+XG4gIDwvZGl2PlxuKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcnRQYWdlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJheGlvcyIsIkNhcnQiLCJDbGVhckNhcnRCdXR0b24iLCJDcmVhdGVPcmRlckZvcm0iLCJDYXJ0UGFnZSIsImNhcnQiLCJzZXRDYXJ0IiwiZmV0Y2hDYXJ0IiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicmVzcG9uc2UiLCJnZXQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImRhdGEiLCJlcnJvciIsImNvbnNvbGUiLCJoYW5kbGVDbGVhckNhcnQiLCJkaXYiLCJoMSIsInAiLCJsb2ciLCJvblN1Y2Nlc3MiLCJvbkVycm9yIiwiYWxlcnQiLCJpdGVtcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/pages/CartPage.js\n"));

/***/ })

});