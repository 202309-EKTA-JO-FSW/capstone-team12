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

/***/ "(app-pages-browser)/./src/app/components/CreatOrder.js":
/*!******************************************!*\
  !*** ./src/app/components/CreatOrder.js ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n// import React, { useState } from 'react';\n// import axios from 'axios';\n// const CreateOrderForm = ({item}) => {\n//   // const [formData, setFormData] = useState([item.ticket._id,item.quantity])\n//   const data=item.items.map((item, index) => ( \n//     [item.ticket._id,\n//     item.quantity]\n//   ))\n//   const handleSubmit = async event => {\n//     event.preventDefault();\n//     try {\n//       const token = localStorage.getItem('token'); \n//       const response = await axios.post('http://localhost:3001/api/orders', data, {\n//         headers: {\n//           Authorization: `Bearer ${token}`\n//         }\n//       });\n//       console.log('Order created:', response.data);\n//       // Optionally, redirect the user to a success page or display a success message\n//       await axios.delete('http://localhost:3001/api/cart/clear', {\n//         headers: {\n//           Authorization: `Bearer ${token}`\n//         }\n//       });\n//     } catch (error) {\n//       console.error('Error creating order:', error);\n//       // Display an error message to the user\n//     }\n//   };\n//   return (\n//     <button onClick={handleSubmit}>Place order</button>\n//   );\n// };\n// export default CreateOrderForm;\n\n\n\nconst CreateOrderForm = (param)=>{\n    let { cart } = param;\n    const handleSubmit = async (event)=>{\n        event.preventDefault();\n        try {\n            const token = localStorage.getItem(\"token\");\n            // Format data to match the required order format\n            const ticketItems = cart.items.map((item)=>({\n                    ticketId: item.ticket._id,\n                    quantity: item.quantity\n                }));\n            console.log(ticketItems);\n            // Send POST request to create order\n            const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"http://localhost:3001/api/orders\", {\n                ticketItems\n            }, {\n                headers: {\n                    Authorization: \"Bearer \".concat(token)\n                }\n            });\n            console.log(\"Order created:\", response.data);\n            // Clear the cart after placing the order\n            await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].delete(\"http://localhost:3001/api/cart/clear\", {\n                headers: {\n                    Authorization: \"Bearer \".concat(token)\n                }\n            });\n        } catch (error) {\n            console.error(\"Error creating order:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        onClick: handleSubmit,\n        children: \"Place order\"\n    }, void 0, false, {\n        fileName: \"/usr/src/app/client/src/app/components/CreatOrder.js\",\n        lineNumber: 87,\n        columnNumber: 5\n    }, undefined);\n};\n_c = CreateOrderForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CreateOrderForm);\nvar _c;\n$RefreshReg$(_c, \"CreateOrderForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50cy9DcmVhdE9yZGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsMkNBQTJDO0FBQzNDLDZCQUE2QjtBQUU3Qix3Q0FBd0M7QUFDeEMsaUZBQWlGO0FBRWpGLGtEQUFrRDtBQUNsRCx3QkFBd0I7QUFDeEIscUJBQXFCO0FBQ3JCLE9BQU87QUFLUCwwQ0FBMEM7QUFDMUMsOEJBQThCO0FBQzlCLFlBQVk7QUFDWixzREFBc0Q7QUFDdEQsc0ZBQXNGO0FBQ3RGLHFCQUFxQjtBQUNyQiw2Q0FBNkM7QUFDN0MsWUFBWTtBQUNaLFlBQVk7QUFDWixzREFBc0Q7QUFDdEQsd0ZBQXdGO0FBRXhGLHFFQUFxRTtBQUNyRSxxQkFBcUI7QUFDckIsNkNBQTZDO0FBQzdDLFlBQVk7QUFDWixZQUFZO0FBRVosd0JBQXdCO0FBQ3hCLHVEQUF1RDtBQUN2RCxnREFBZ0Q7QUFDaEQsUUFBUTtBQUNSLE9BQU87QUFFUCxhQUFhO0FBQ2IsMERBQTBEO0FBRTFELE9BQU87QUFDUCxLQUFLO0FBRUwsa0NBQWtDOztBQUNSO0FBQ0E7QUFFMUIsTUFBTUUsa0JBQWtCO1FBQUMsRUFBRUMsSUFBSSxFQUFFO0lBQy9CLE1BQU1DLGVBQWUsT0FBTUM7UUFDekJBLE1BQU1DLGNBQWM7UUFDcEIsSUFBSTtZQUNGLE1BQU1DLFFBQVFDLGFBQWFDLE9BQU8sQ0FBQztZQUVuQyxpREFBaUQ7WUFDakQsTUFBTUMsY0FBY1AsS0FBS1EsS0FBSyxDQUFDQyxHQUFHLENBQUNDLENBQUFBLE9BQVM7b0JBQzFDQyxVQUFVRCxLQUFLRSxNQUFNLENBQUNDLEdBQUc7b0JBQ3pCQyxVQUFVSixLQUFLSSxRQUFRO2dCQUN6QjtZQUNBQyxRQUFRQyxHQUFHLENBQUNUO1lBRVosb0NBQW9DO1lBQ3BDLE1BQU1VLFdBQVcsTUFBTW5CLDZDQUFLQSxDQUFDb0IsSUFBSSxDQUMvQixvQ0FDQTtnQkFBRVg7WUFBWSxHQUNkO2dCQUNFWSxTQUFTO29CQUNQQyxlQUFlLFVBQWdCLE9BQU5oQjtnQkFDM0I7WUFDRjtZQUdGVyxRQUFRQyxHQUFHLENBQUMsa0JBQWtCQyxTQUFTSSxJQUFJO1lBRTNDLHlDQUF5QztZQUN6QyxNQUFNdkIsNkNBQUtBLENBQUN3QixNQUFNLENBQUMsd0NBQXdDO2dCQUN6REgsU0FBUztvQkFDUEMsZUFBZSxVQUFnQixPQUFOaEI7Z0JBQzNCO1lBQ0Y7UUFDRixFQUFFLE9BQU9tQixPQUFPO1lBQ2RSLFFBQVFRLEtBQUssQ0FBQyx5QkFBeUJBO1FBQ3pDO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0M7UUFBT0MsU0FBU3hCO2tCQUFjOzs7Ozs7QUFFbkM7S0F4Q01GO0FBMENOLCtEQUFlQSxlQUFlQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50cy9DcmVhdE9yZGVyLmpzPzI1YzkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuLy8gY29uc3QgQ3JlYXRlT3JkZXJGb3JtID0gKHtpdGVtfSkgPT4ge1xuLy8gICAvLyBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKFtpdGVtLnRpY2tldC5faWQsaXRlbS5xdWFudGl0eV0pXG5cbi8vICAgY29uc3QgZGF0YT1pdGVtLml0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+ICggXG4vLyAgICAgW2l0ZW0udGlja2V0Ll9pZCxcbi8vICAgICBpdGVtLnF1YW50aXR5XVxuLy8gICApKVxuICBcblxuXG5cbi8vICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgZXZlbnQgPT4ge1xuLy8gICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgdHJ5IHtcbi8vICAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7IFxuLy8gICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL29yZGVycycsIGRhdGEsIHtcbi8vICAgICAgICAgaGVhZGVyczoge1xuLy8gICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gXG4vLyAgICAgICAgIH1cbi8vICAgICAgIH0pO1xuLy8gICAgICAgY29uc29sZS5sb2coJ09yZGVyIGNyZWF0ZWQ6JywgcmVzcG9uc2UuZGF0YSk7XG4vLyAgICAgICAvLyBPcHRpb25hbGx5LCByZWRpcmVjdCB0aGUgdXNlciB0byBhIHN1Y2Nlc3MgcGFnZSBvciBkaXNwbGF5IGEgc3VjY2VzcyBtZXNzYWdlXG5cbi8vICAgICAgIGF3YWl0IGF4aW9zLmRlbGV0ZSgnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS9jYXJ0L2NsZWFyJywge1xuLy8gICAgICAgICBoZWFkZXJzOiB7XG4vLyAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWBcbi8vICAgICAgICAgfVxuLy8gICAgICAgfSk7XG5cbi8vICAgICB9IGNhdGNoIChlcnJvcikge1xuLy8gICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgb3JkZXI6JywgZXJyb3IpO1xuLy8gICAgICAgLy8gRGlzcGxheSBhbiBlcnJvciBtZXNzYWdlIHRvIHRoZSB1c2VyXG4vLyAgICAgfVxuLy8gICB9O1xuXG4vLyAgIHJldHVybiAoXG4vLyAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PlBsYWNlIG9yZGVyPC9idXR0b24+XG5cbi8vICAgKTtcbi8vIH07XG5cbi8vIGV4cG9ydCBkZWZhdWx0IENyZWF0ZU9yZGVyRm9ybTtcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5jb25zdCBDcmVhdGVPcmRlckZvcm0gPSAoeyBjYXJ0IH0pID0+IHtcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgZXZlbnQgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XG5cbiAgICAgIC8vIEZvcm1hdCBkYXRhIHRvIG1hdGNoIHRoZSByZXF1aXJlZCBvcmRlciBmb3JtYXRcbiAgICAgIGNvbnN0IHRpY2tldEl0ZW1zID0gY2FydC5pdGVtcy5tYXAoaXRlbSA9PiAoe1xuICAgICAgICB0aWNrZXRJZDogaXRlbS50aWNrZXQuX2lkLFxuICAgICAgICBxdWFudGl0eTogaXRlbS5xdWFudGl0eVxuICAgICAgfSkpO1xuICAgICAgY29uc29sZS5sb2codGlja2V0SXRlbXMpXG5cbiAgICAgIC8vIFNlbmQgUE9TVCByZXF1ZXN0IHRvIGNyZWF0ZSBvcmRlclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxuICAgICAgICAnaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS9vcmRlcnMnLFxuICAgICAgICB7IHRpY2tldEl0ZW1zIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgY29uc29sZS5sb2coJ09yZGVyIGNyZWF0ZWQ6JywgcmVzcG9uc2UuZGF0YSk7XG5cbiAgICAgIC8vIENsZWFyIHRoZSBjYXJ0IGFmdGVyIHBsYWNpbmcgdGhlIG9yZGVyXG4gICAgICBhd2FpdCBheGlvcy5kZWxldGUoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvY2FydC9jbGVhcicsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBvcmRlcjonLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTdWJtaXR9PlBsYWNlIG9yZGVyPC9idXR0b24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVPcmRlckZvcm07XG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsImF4aW9zIiwiQ3JlYXRlT3JkZXJGb3JtIiwiY2FydCIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ0aWNrZXRJdGVtcyIsIml0ZW1zIiwibWFwIiwiaXRlbSIsInRpY2tldElkIiwidGlja2V0IiwiX2lkIiwicXVhbnRpdHkiLCJjb25zb2xlIiwibG9nIiwicmVzcG9uc2UiLCJwb3N0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJkYXRhIiwiZGVsZXRlIiwiZXJyb3IiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/components/CreatOrder.js\n"));

/***/ })

});