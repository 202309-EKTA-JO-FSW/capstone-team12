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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var _components_GoogleSignupButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/GoogleSignupButton */ \"(app-pages-browser)/./src/app/components/GoogleSignupButton.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Login = ()=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].post(\"http://localhost:3001/api/users/login\", {\n                email,\n                password\n            });\n            if (response.data.token) {\n                localStorage.setItem(\"token\", response.data.token);\n                localStorage.setItem(\"userId\", response.data._id);\n                router.push(\"/profile\");\n            } else {\n                setError(\"Authentication failed: Token not received\");\n            }\n            setEmail(\"\");\n            setPassword(\"\");\n            setError(\"\");\n        } catch (error) {\n            console.error(\"Login error:\", error.response.data.message);\n            setError(error.response.data.message);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container \",\n        style: {\n            backgroundColor: \"blue\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row justify-content-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-lg-6\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card shadow-lg p-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-center mb-4\",\n                            children: \"Login\"\n                        }, void 0, false, {\n                            fileName: \"/usr/src/app/client/src/app/Login/page.jsx\",\n                            lineNumber: 42,\n                            columnNumber: 13\n                        }, undefined),\n                        error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-danger text-center mb-4\",\n                            children: error\n                        }, void 0, false, {\n                            fileName: \"/usr/src/app/client/src/app/Login/page.jsx\",\n                            lineNumber: 43,\n                            columnNumber: 23\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                            onSubmit: handleSubmit,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mb-3\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"email\",\n                                            className: \"form-label\",\n                                            children: \"Email:\"\n                                        }, void 0, false, {\n                                            fileName: \"/usr/src/app/client/src/app/Login/page.jsx\",\n                                            lineNumber: 46,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"email\",\n                                            className: \"form-control\",\n                                            id: \"email\",\n                                            value: email,\n                                            onChange: (e)=>setEmail(e.target.value),\n                                            required: true\n                                        }, void 0, false, {\n                                            fileName: \"/usr/src/app/client/src/app/Login/page.jsx\",\n                                            lineNumber: 47,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/usr/src/app/client/src/app/Login/page.jsx\",\n                                    lineNumber: 45,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mb-3\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            htmlFor: \"password\",\n                                            className: \"form-label\",\n                                            children: \"Password:\"\n                                        }, void 0, false, {\n                                            fileName: \"/usr/src/app/client/src/app/Login/page.jsx\",\n                                            lineNumber: 50,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"password\",\n                                            className: \"form-control\",\n                                            id: \"password\",\n                                            value: password,\n                                            onChange: (e)=>setPassword(e.target.value),\n                                            required: true\n                                        }, void 0, false, {\n                                            fileName: \"/usr/src/app/client/src/app/Login/page.jsx\",\n                                            lineNumber: 51,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/usr/src/app/client/src/app/Login/page.jsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"d-grid mb-3\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        type: \"submit\",\n                                        className: \"btn btn-primary btn-block\",\n                                        children: \"Login\"\n                                    }, void 0, false, {\n                                        fileName: \"/usr/src/app/client/src/app/Login/page.jsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/usr/src/app/client/src/app/Login/page.jsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-center mb-3\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            children: \"Or Login using\"\n                                        }, void 0, false, {\n                                            fileName: \"/usr/src/app/client/src/app/Login/page.jsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_GoogleSignupButton__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                            fileName: \"/usr/src/app/client/src/app/Login/page.jsx\",\n                                            lineNumber: 58,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/usr/src/app/client/src/app/Login/page.jsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                                    fileName: \"/usr/src/app/client/src/app/Login/page.jsx\",\n                                    lineNumber: 60,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"text-center\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"mb-0\",\n                                        children: [\n                                            \"Don't have an account? \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                href: \"/signup\",\n                                                className: \"text-decoration-none\",\n                                                children: \"Sign Up\"\n                                            }, void 0, false, {\n                                                fileName: \"/usr/src/app/client/src/app/Login/page.jsx\",\n                                                lineNumber: 62,\n                                                columnNumber: 60\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/usr/src/app/client/src/app/Login/page.jsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/usr/src/app/client/src/app/Login/page.jsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/usr/src/app/client/src/app/Login/page.jsx\",\n                            lineNumber: 44,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/usr/src/app/client/src/app/Login/page.jsx\",\n                    lineNumber: 41,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/usr/src/app/client/src/app/Login/page.jsx\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/usr/src/app/client/src/app/Login/page.jsx\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/usr/src/app/client/src/app/Login/page.jsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Login, \"+lKicfYUJDOkcWSjeVyJJI3Dn3Q=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Login;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Login);\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvTG9naW4vcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUN3QztBQUNkO0FBQ2tCO0FBQ2Y7QUFDcUM7QUFFbEUsTUFBTU0sUUFBUTs7SUFDWixNQUFNQyxTQUFTSiwwREFBU0E7SUFDeEIsTUFBTSxDQUFDSyxPQUFPQyxTQUFTLEdBQUdSLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ1MsVUFBVUMsWUFBWSxHQUFHViwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNXLE9BQU9DLFNBQVMsR0FBR1osK0NBQVFBLENBQUM7SUFFbkMsTUFBTWEsZUFBZSxPQUFPQztRQUMxQkEsRUFBRUMsY0FBYztRQUVoQixJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNZiw2Q0FBS0EsQ0FBQ2dCLElBQUksQ0FBQyx5Q0FBeUM7Z0JBQUVWO2dCQUFPRTtZQUFTO1lBRTdGLElBQUlPLFNBQVNFLElBQUksQ0FBQ0MsS0FBSyxFQUFFO2dCQUN2QkMsYUFBYUMsT0FBTyxDQUFDLFNBQVNMLFNBQVNFLElBQUksQ0FBQ0MsS0FBSztnQkFDakRDLGFBQWFDLE9BQU8sQ0FBQyxVQUFVTCxTQUFTRSxJQUFJLENBQUNJLEdBQUc7Z0JBQ2hEaEIsT0FBT2lCLElBQUksQ0FBQztZQUNkLE9BQU87Z0JBQ0xYLFNBQVM7WUFDWDtZQUVBSixTQUFTO1lBQ1RFLFlBQVk7WUFDWkUsU0FBUztRQUNYLEVBQUUsT0FBT0QsT0FBTztZQUNkYSxRQUFRYixLQUFLLENBQUMsZ0JBQWdCQSxNQUFNSyxRQUFRLENBQUNFLElBQUksQ0FBQ08sT0FBTztZQUN6RGIsU0FBU0QsTUFBTUssUUFBUSxDQUFDRSxJQUFJLENBQUNPLE9BQU87UUFDdEM7SUFDRjtJQUVBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVO1FBQWFDLE9BQU87WUFBRUMsaUJBQWlCO1FBQU87a0JBQzNELDRFQUFDSDtZQUFJQyxXQUFVO3NCQUNiLDRFQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0Q7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDRzs0QkFBR0gsV0FBVTtzQ0FBbUI7Ozs7Ozt3QkFDaENoQix1QkFBUyw4REFBQ29COzRCQUFFSixXQUFVO3NDQUFnQ2hCOzs7Ozs7c0NBQ3ZELDhEQUFDcUI7NEJBQUtDLFVBQVVwQjs7OENBQ2QsOERBQUNhO29DQUFJQyxXQUFVOztzREFDYiw4REFBQ087NENBQU1DLFNBQVE7NENBQVFSLFdBQVU7c0RBQWE7Ozs7OztzREFDOUMsOERBQUNTOzRDQUFNQyxNQUFLOzRDQUFRVixXQUFVOzRDQUFlVyxJQUFHOzRDQUFRQyxPQUFPaEM7NENBQU9pQyxVQUFVLENBQUMxQixJQUFNTixTQUFTTSxFQUFFMkIsTUFBTSxDQUFDRixLQUFLOzRDQUFHRyxRQUFROzs7Ozs7Ozs7Ozs7OENBRTNILDhEQUFDaEI7b0NBQUlDLFdBQVU7O3NEQUNiLDhEQUFDTzs0Q0FBTUMsU0FBUTs0Q0FBV1IsV0FBVTtzREFBYTs7Ozs7O3NEQUNqRCw4REFBQ1M7NENBQU1DLE1BQUs7NENBQVdWLFdBQVU7NENBQWVXLElBQUc7NENBQVdDLE9BQU85Qjs0Q0FBVStCLFVBQVUsQ0FBQzFCLElBQU1KLFlBQVlJLEVBQUUyQixNQUFNLENBQUNGLEtBQUs7NENBQUdHLFFBQVE7Ozs7Ozs7Ozs7Ozs4Q0FFdkksOERBQUNoQjtvQ0FBSUMsV0FBVTs4Q0FDYiw0RUFBQ2dCO3dDQUFPTixNQUFLO3dDQUFTVixXQUFVO2tEQUE0Qjs7Ozs7Ozs7Ozs7OENBRTlELDhEQUFDRDtvQ0FBSUMsV0FBVTs7c0RBQ2IsOERBQUNJO3NEQUFFOzs7Ozs7c0RBQ0gsOERBQUMzQixzRUFBa0JBOzs7Ozs7Ozs7Ozs4Q0FFckIsOERBQUN3Qzs7Ozs7OENBQ0QsOERBQUNsQjtvQ0FBSUMsV0FBVTs4Q0FDYiw0RUFBQ0k7d0NBQUVKLFdBQVU7OzRDQUFPOzBEQUF1Qiw4REFBQ3hCLGlEQUFJQTtnREFBQzBDLE1BQUs7Z0RBQVVsQixXQUFVOzBEQUF1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRakg7R0E5RE10Qjs7UUFDV0gsc0RBQVNBOzs7S0FEcEJHO0FBZ0VOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvTG9naW4vcGFnZS5qc3g/NTk0YyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBHb29nbGVTaWdudXBCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9Hb29nbGVTaWdudXBCdXR0b24nO1xuXG5jb25zdCBMb2dpbiA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCdodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3VzZXJzL2xvZ2luJywgeyBlbWFpbCwgcGFzc3dvcmQgfSk7XG4gICAgXG4gICAgICBpZiAocmVzcG9uc2UuZGF0YS50b2tlbikge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCByZXNwb25zZS5kYXRhLnRva2VuKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJJZCcsIHJlc3BvbnNlLmRhdGEuX2lkKTtcbiAgICAgICAgcm91dGVyLnB1c2goJy9wcm9maWxlJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRFcnJvcignQXV0aGVudGljYXRpb24gZmFpbGVkOiBUb2tlbiBub3QgcmVjZWl2ZWQnKTtcbiAgICAgIH1cblxuICAgICAgc2V0RW1haWwoJycpO1xuICAgICAgc2V0UGFzc3dvcmQoJycpO1xuICAgICAgc2V0RXJyb3IoJycpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdMb2dpbiBlcnJvcjonLCBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpO1xuICAgICAgc2V0RXJyb3IoZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBcIiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICdibHVlJyB9fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBzaGFkb3ctbGcgcC01XCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgbWItNFwiPkxvZ2luPC9oMj5cbiAgICAgICAgICAgIHtlcnJvciAmJiA8cCBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlciB0ZXh0LWNlbnRlciBtYi00XCI+e2Vycm9yfTwvcD59XG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImZvcm0tbGFiZWxcIj5FbWFpbDo8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBpZD1cImVtYWlsXCIgdmFsdWU9e2VtYWlsfSBvbkNoYW5nZT17KGUpID0+IHNldEVtYWlsKGUudGFyZ2V0LnZhbHVlKX0gcmVxdWlyZWQgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJmb3JtLWxhYmVsXCI+UGFzc3dvcmQ6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgaWQ9XCJwYXNzd29yZFwiIHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXNzd29yZChlLnRhcmdldC52YWx1ZSl9IHJlcXVpcmVkIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZ3JpZCBtYi0zXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1ibG9ja1wiPkxvZ2luPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIG1iLTNcIj5cbiAgICAgICAgICAgICAgICA8cD5PciBMb2dpbiB1c2luZzwvcD5cbiAgICAgICAgICAgICAgICA8R29vZ2xlU2lnbnVwQnV0dG9uLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMFwiPkRvbid0IGhhdmUgYW4gYWNjb3VudD8gPExpbmsgaHJlZj1cIi9zaWdudXBcIiBjbGFzc05hbWU9XCJ0ZXh0LWRlY29yYXRpb24tbm9uZVwiPlNpZ24gVXA8L0xpbms+PC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJheGlvcyIsInVzZVJvdXRlciIsIkxpbmsiLCJHb29nbGVTaWdudXBCdXR0b24iLCJMb2dpbiIsInJvdXRlciIsImVtYWlsIiwic2V0RW1haWwiLCJwYXNzd29yZCIsInNldFBhc3N3b3JkIiwiZXJyb3IiLCJzZXRFcnJvciIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3BvbnNlIiwicG9zdCIsImRhdGEiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJfaWQiLCJwdXNoIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImgyIiwicCIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsImlkIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInJlcXVpcmVkIiwiYnV0dG9uIiwiaHIiLCJocmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Login/page.jsx\n"));

/***/ })

});