"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/Login/page",{

/***/ "(app-pages-browser)/./src/app/Login/page.jsx":
/*!********************************!*\
  !*** ./src/app/Login/page.jsx ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _components_GoogleSignupButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/GoogleSignupButton */ \"(app-pages-browser)/./src/app/components/GoogleSignupButton.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Login = ()=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"http://localhost:3001/api/users/login\", {\n                email,\n                password\n            });\n            if (response.data.token) {\n                localStorage.setItem(\"token\", response.data.token);\n                localStorage.setItem(\"userId\", response.data._id);\n                router.push(\"/profile\");\n            } else {\n                setError(\"Invalid email or password. Please try again.\");\n            }\n            setEmail(\"\");\n            setPassword(\"\");\n        } catch (error) {\n            console.error(\"Login error:\", error.response.data.message);\n            setError(error.response.data.message);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container py-5\",\n        style: {\n            backgroundColor: \"#f8f9fa\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row justify-content-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-lg-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card shadow-lg p-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-center mb-4\",\n                            children: \"Login\"\n                        }, void 0, false, {\n                            fileName: \"/usr/src/app/client/src/app/Login/page.jsx\",\n                            lineNumber: 40,\n                            columnNumber: 13\n                        }, undefined),\n                        error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-danger text-center mb-4\",\n                            children: error\n                        }, void 0, false, {\n                            fileName: \"/usr/src/app/client/src/app/Login/page.jsx\",\n                            lineNumber: 41,\n                            columnNumber: 23\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handleSubmit,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mb-3\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"email\",\n                                            className: \"form-label\",\n                                            children: \"Email:\"\n                                        }, void 0, false, {\n                                            fileName: \"/usr/src/app/client/src/app/Login/page.jsx\",\n                                            lineNumber: 44,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"email\",\n                                            className: \"form-control\",\n                                            id: \"email\",\n                                            value: email,\n                                            onChange: (e)=>setEmail(e.target.value),\n                                            required: true\n                                        }, void 0, false, {\n                                            fileName: \"/usr/src/app/client/src/app/Login/page.jsx\",\n                                            lineNumber: 45,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/usr/src/app/client/src/app/Login/page.jsx\",\n                                    lineNumber: 43,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mb-3\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"password\",\n                                            className: \"form-label\",\n                                            children: \"Password:\"\n                                        }, void 0, false, {\n                                            fileName: \"/usr/src/app/client/src/app/Login/page.jsx\",\n                                            lineNumber: 48,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"password\",\n                                            className: \"form-control\",\n                                            id: \"password\",\n                                            value: password,\n                                            onChange: (e)=>setPassword(e.target.value),\n                                            required: true\n                                        }, void 0, false, {\n                                            fileName: \"/usr/src/app/client/src/app/Login/page.jsx\",\n                                            lineNumber: 49,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/usr/src/app/client/src/app/Login/page.jsx\",\n                                    lineNumber: 47,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"d-grid mb-3\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"submit\",\n                                        className: \"btn btn-primary btn-block\",\n                                        children: \"Login\"\n                                    }, void 0, false, {\n                                        fileName: \"/usr/src/app/client/src/app/Login/page.jsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/usr/src/app/client/src/app/Login/page.jsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-center mb-3\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"Or Login using\"\n                                        }, void 0, false, {\n                                            fileName: \"/usr/src/app/client/src/app/Login/page.jsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GoogleSignupButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                            fileName: \"/usr/src/app/client/src/app/Login/page.jsx\",\n                                            lineNumber: 56,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/usr/src/app/client/src/app/Login/page.jsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                                    fileName: \"/usr/src/app/client/src/app/Login/page.jsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-center\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"mb-0\",\n                                        children: [\n                                            \"Don't have an account? \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                href: \"/signup\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                    className: \"text-decoration-none\",\n                                                    children: \"Sign Up\"\n                                                }, void 0, false, {\n                                                    fileName: \"/usr/src/app/client/src/app/Login/page.jsx\",\n                                                    lineNumber: 60,\n                                                    columnNumber: 81\n                                                }, undefined)\n                                            }, void 0, false, {\n                                                fileName: \"/usr/src/app/client/src/app/Login/page.jsx\",\n                                                lineNumber: 60,\n                                                columnNumber: 60\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/usr/src/app/client/src/app/Login/page.jsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/usr/src/app/client/src/app/Login/page.jsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/usr/src/app/client/src/app/Login/page.jsx\",\n                            lineNumber: 42,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/usr/src/app/client/src/app/Login/page.jsx\",\n                    lineNumber: 39,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/usr/src/app/client/src/app/Login/page.jsx\",\n                lineNumber: 38,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/usr/src/app/client/src/app/Login/page.jsx\",\n            lineNumber: 37,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/usr/src/app/client/src/app/Login/page.jsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Login, \"+lKicfYUJDOkcWSjeVyJJI3Dn3Q=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvTG9naW4vcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF3QztBQUNkO0FBQ2tCO0FBQ2Y7QUFDcUM7QUFFbEUsTUFBTU0sUUFBUTs7SUFDWixNQUFNQyxTQUFTSiwwREFBU0E7SUFDeEIsTUFBTSxDQUFDSyxPQUFPQyxTQUFTLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ1MsVUFBVUMsWUFBWSxHQUFHViwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNXLE9BQU9DLFNBQVMsR0FBR1osK0NBQVFBLENBQUM7SUFFbkMsTUFBTWEsZUFBZSxPQUFPQztRQUMxQkEsRUFBRUMsY0FBYztRQUVoQixJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNZiw2Q0FBS0EsQ0FBQ2dCLElBQUksQ0FBQyx5Q0FBeUM7Z0JBQUVWO2dCQUFPRTtZQUFTO1lBRTdGLElBQUlPLFNBQVNFLElBQUksQ0FBQ0MsS0FBSyxFQUFFO2dCQUN2QkMsYUFBYUMsT0FBTyxDQUFDLFNBQVNMLFNBQVNFLElBQUksQ0FBQ0MsS0FBSztnQkFDakRDLGFBQWFDLE9BQU8sQ0FBQyxVQUFVTCxTQUFTRSxJQUFJLENBQUNJLEdBQUc7Z0JBQ2hEaEIsT0FBT2lCLElBQUksQ0FBQztZQUNkLE9BQU87Z0JBQ0xYLFNBQVM7WUFDWDtZQUVBSixTQUFTO1lBQ1RFLFlBQVk7UUFDZCxFQUFFLE9BQU9DLE9BQU87WUFDZGEsUUFBUWIsS0FBSyxDQUFDLGdCQUFnQkEsTUFBTUssUUFBUSxDQUFDRSxJQUFJLENBQUNPLE9BQU87WUFDekRiLFNBQVNELE1BQU1LLFFBQVEsQ0FBQ0UsSUFBSSxDQUFDTyxPQUFPO1FBQ3RDO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtRQUFpQkMsT0FBTztZQUFFQyxpQkFBaUI7UUFBVTtrQkFDbEUsNEVBQUNIO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNHOzRCQUFHSCxXQUFVO3NDQUFtQjs7Ozs7O3dCQUNoQ2hCLHVCQUFTLDhEQUFDb0I7NEJBQUVKLFdBQVU7c0NBQWdDaEI7Ozs7OztzQ0FDdkQsOERBQUNxQjs0QkFBS0MsVUFBVXBCOzs4Q0FDZCw4REFBQ2E7b0NBQUlDLFdBQVU7O3NEQUNiLDhEQUFDTzs0Q0FBTUMsU0FBUTs0Q0FBUVIsV0FBVTtzREFBYTs7Ozs7O3NEQUM5Qyw4REFBQ1M7NENBQU1DLE1BQUs7NENBQVFWLFdBQVU7NENBQWVXLElBQUc7NENBQVFDLE9BQU9oQzs0Q0FBT2lDLFVBQVUsQ0FBQzFCLElBQU1OLFNBQVNNLEVBQUUyQixNQUFNLENBQUNGLEtBQUs7NENBQUdHLFFBQVE7Ozs7Ozs7Ozs7Ozs4Q0FFM0gsOERBQUNoQjtvQ0FBSUMsV0FBVTs7c0RBQ2IsOERBQUNPOzRDQUFNQyxTQUFROzRDQUFXUixXQUFVO3NEQUFhOzs7Ozs7c0RBQ2pELDhEQUFDUzs0Q0FBTUMsTUFBSzs0Q0FBV1YsV0FBVTs0Q0FBZVcsSUFBRzs0Q0FBV0MsT0FBTzlCOzRDQUFVK0IsVUFBVSxDQUFDMUIsSUFBTUosWUFBWUksRUFBRTJCLE1BQU0sQ0FBQ0YsS0FBSzs0Q0FBR0csUUFBUTs7Ozs7Ozs7Ozs7OzhDQUV2SSw4REFBQ2hCO29DQUFJQyxXQUFVOzhDQUNiLDRFQUFDZ0I7d0NBQU9OLE1BQUs7d0NBQVNWLFdBQVU7a0RBQTRCOzs7Ozs7Ozs7Ozs4Q0FFOUQsOERBQUNEO29DQUFJQyxXQUFVOztzREFDYiw4REFBQ0k7c0RBQUU7Ozs7OztzREFDSCw4REFBQzNCLHNFQUFrQkE7Ozs7Ozs7Ozs7OzhDQUVyQiw4REFBQ3dDOzs7Ozs4Q0FDRCw4REFBQ2xCO29DQUFJQyxXQUFVOzhDQUNiLDRFQUFDSTt3Q0FBRUosV0FBVTs7NENBQU87MERBQXVCLDhEQUFDeEIsaURBQUlBO2dEQUFDMEMsTUFBSzswREFBVSw0RUFBQ0M7b0RBQUVuQixXQUFVOzhEQUF1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVFwSDtHQTdETXRCOztRQUNXSCxzREFBU0E7OztLQURwQkc7QUErRE4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9Mb2dpbi9wYWdlLmpzeD81OTRjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBHb29nbGVTaWdudXBCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9Hb29nbGVTaWdudXBCdXR0b24nO1xuXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3VzZXJzL2xvZ2luJywgeyBlbWFpbCwgcGFzc3dvcmQgfSk7XG4gICAgXG4gICAgICBpZiAocmVzcG9uc2UuZGF0YS50b2tlbikge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCByZXNwb25zZS5kYXRhLnRva2VuKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJJZCcsIHJlc3BvbnNlLmRhdGEuX2lkKTtcbiAgICAgICAgcm91dGVyLnB1c2goJy9wcm9maWxlJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRFcnJvcignSW52YWxpZCBlbWFpbCBvciBwYXNzd29yZC4gUGxlYXNlIHRyeSBhZ2Fpbi4nKTtcbiAgICAgIH1cblxuICAgICAgc2V0RW1haWwoJycpO1xuICAgICAgc2V0UGFzc3dvcmQoJycpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdMb2dpbiBlcnJvcjonLCBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpO1xuICAgICAgc2V0RXJyb3IoZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBweS01XCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnI2Y4ZjlmYScgfX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgc2hhZG93LWxnIHAtNVwiPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTRcIj5Mb2dpbjwvaDI+XG4gICAgICAgICAgICB7ZXJyb3IgJiYgPHAgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXIgdGV4dC1jZW50ZXIgbWItNFwiPntlcnJvcn08L3A+fVxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+RW1haWw6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJlbWFpbFwiIHZhbHVlPXtlbWFpbH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9IHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiZm9ybS1sYWJlbFwiPlBhc3N3b3JkOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwicGFzc3dvcmRcIiB2YWx1ZT17cGFzc3dvcmR9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0UGFzc3dvcmQoZS50YXJnZXQudmFsdWUpfSByZXF1aXJlZCAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWdyaWQgbWItM1wiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeSBidG4tYmxvY2tcIj5Mb2dpbjwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBtYi0zXCI+XG4gICAgICAgICAgICAgICAgPHA+T3IgTG9naW4gdXNpbmc8L3A+XG4gICAgICAgICAgICAgICAgPEdvb2dsZVNpZ251cEJ1dHRvbi8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8aHIgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTBcIj5Eb24ndCBoYXZlIGFuIGFjY291bnQ/IDxMaW5rIGhyZWY9XCIvc2lnbnVwXCI+PGEgY2xhc3NOYW1lPVwidGV4dC1kZWNvcmF0aW9uLW5vbmVcIj5TaWduIFVwPC9hPjwvTGluaz48L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9naW47XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwidXNlUm91dGVyIiwiTGluayIsIkdvb2dsZVNpZ251cEJ1dHRvbiIsIkxvZ2luIiwicm91dGVyIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJlcnJvciIsInNldEVycm9yIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicmVzcG9uc2UiLCJwb3N0IiwiZGF0YSIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIl9pZCIsInB1c2giLCJjb25zb2xlIiwibWVzc2FnZSIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwiaDIiLCJwIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicmVxdWlyZWQiLCJidXR0b24iLCJociIsImhyZWYiLCJhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Login/page.jsx\n"));

/***/ })

});