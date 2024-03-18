"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/profile/page",{

/***/ "(app-pages-browser)/./src/app/profile/page.jsx":
/*!**********************************!*\
  !*** ./src/app/profile/page.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _components_ProfilePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ProfilePage */ \"(app-pages-browser)/./src/app/components/ProfilePage.js\");\n/* harmony import */ var _components_EditProfile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/EditProfile */ \"(app-pages-browser)/./src/app/components/EditProfile.js\");\n/* harmony import */ var _components_Logout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Logout */ \"(app-pages-browser)/./src/app/components/Logout.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst ProfilePageWithEdit = ()=>{\n    _s();\n    const [editMode, setEditMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [profileData, setProfileData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchProfileData();\n    }, []);\n    const fetchProfileData = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"http://localhost:3001/api/users/my-profile\", {\n                headers: {\n                    Authorization: \"Bearer \".concat(localStorage.getItem(\"token\"))\n                }\n            });\n            setProfileData(response.data);\n        } catch (error) {\n            console.error(\"Error fetching profile data:\", error);\n        }\n    };\n    const toggleEditMode = ()=>{\n        setEditMode(!editMode);\n    };\n    const handleProfileUpdate = async ()=>{\n        try {\n            const response = await axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(\"http://localhost:3001/api/users/my-profile\", {\n                headers: {\n                    Authorization: \"Bearer \".concat(localStorage.getItem(\"token\"))\n                }\n            });\n            const updatedProfileData = response.data;\n            setProfileData(updatedProfileData);\n            setEditMode(false);\n        } catch (error) {\n            console.error(\"Error fetching updated profile data:\", error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const token = localStorage.getItem(\"token\");\n        if (!token) {\n            router.push(\"/Login\");\n        }\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container py-5\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"row justify-content-center\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"col-md-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"card shadow\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"card-body\",\n                        children: !editMode ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                profileData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProfilePage__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                    profileData: profileData\n                                }, void 0, false, {\n                                    fileName: \"/usr/src/app/client/src/app/profile/page.jsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 35\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: toggleEditMode,\n                                    className: \"btn btn-primary mt-3\",\n                                    children: \"Edit Profile\"\n                                }, void 0, false, {\n                                    fileName: \"/usr/src/app/client/src/app/profile/page.jsx\",\n                                    lineNumber: 69,\n                                    columnNumber: 19\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Logout__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/usr/src/app/client/src/app/profile/page.jsx\",\n                                    lineNumber: 70,\n                                    columnNumber: 19\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DeleteAccountButton, {}, void 0, false, {\n                                    fileName: \"/usr/src/app/client/src/app/profile/page.jsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 19\n                                }, undefined)\n                            ]\n                        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_EditProfile__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                    profileData: profileData,\n                                    onSuccess: handleProfileUpdate\n                                }, void 0, false, {\n                                    fileName: \"/usr/src/app/client/src/app/profile/page.jsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 19\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    onClick: toggleEditMode,\n                                    className: \"btn btn-secondary mt-3\",\n                                    children: \"Cancel\"\n                                }, void 0, false, {\n                                    fileName: \"/usr/src/app/client/src/app/profile/page.jsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 19\n                                }, undefined)\n                            ]\n                        }, void 0, true)\n                    }, void 0, false, {\n                        fileName: \"/usr/src/app/client/src/app/profile/page.jsx\",\n                        lineNumber: 65,\n                        columnNumber: 13\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/usr/src/app/client/src/app/profile/page.jsx\",\n                    lineNumber: 64,\n                    columnNumber: 11\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/usr/src/app/client/src/app/profile/page.jsx\",\n                lineNumber: 63,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/usr/src/app/client/src/app/profile/page.jsx\",\n            lineNumber: 62,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/usr/src/app/client/src/app/profile/page.jsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ProfilePageWithEdit, \"SF+1jPcE+FN8u5Bljd5uhPdqTXE=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = ProfilePageWithEdit;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProfilePageWithEdit);\nvar _c;\n$RefreshReg$(_c, \"ProfilePageWithEdit\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcHJvZmlsZS9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUVtRDtBQUN6QjtBQUMwQjtBQUNJO0FBQ2Q7QUFDRTtBQUc1QyxNQUFNUSxzQkFBc0I7O0lBQzFCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHVCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNVLGFBQWFDLGVBQWUsR0FBR1gsK0NBQVFBLENBQUM7SUFDL0MsTUFBTVksU0FBU04sMERBQVNBO0lBRXhCTCxnREFBU0EsQ0FBQztRQUNSWTtJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1BLG1CQUFtQjtRQUN2QixJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNWiw2Q0FBS0EsQ0FBQ2EsR0FBRyxDQUFDLDhDQUE4QztnQkFDN0VDLFNBQVM7b0JBQ1BDLGVBQWUsVUFBd0MsT0FBOUJDLGFBQWFDLE9BQU8sQ0FBQztnQkFDaEQ7WUFDRjtZQUNBUixlQUFlRyxTQUFTTSxJQUFJO1FBQzlCLEVBQUUsT0FBT0MsT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsZ0NBQWdDQTtRQUNoRDtJQUNGO0lBRUEsTUFBTUUsaUJBQWlCO1FBQ3JCZCxZQUFZLENBQUNEO0lBQ2Y7SUFFQSxNQUFNZ0Isc0JBQXNCO1FBQzFCLElBQUk7WUFDRixNQUFNVixXQUFXLE1BQU1aLDZDQUFLQSxDQUFDYSxHQUFHLENBQUMsOENBQThDO2dCQUM3RUMsU0FBUztvQkFDUEMsZUFBZSxVQUF3QyxPQUE5QkMsYUFBYUMsT0FBTyxDQUFDO2dCQUNoRDtZQUNGO1lBRUEsTUFBTU0scUJBQXFCWCxTQUFTTSxJQUFJO1lBQ3hDVCxlQUFlYztZQUNmaEIsWUFBWTtRQUNkLEVBQUUsT0FBT1ksT0FBTztZQUNkQyxRQUFRRCxLQUFLLENBQUMsd0NBQXdDQTtRQUN4RDtJQUNGO0lBRUFwQixnREFBU0EsQ0FBQztRQUNSLE1BQU15QixRQUFRUixhQUFhQyxPQUFPLENBQUM7UUFDbkMsSUFBSSxDQUFDTyxPQUFPO1lBQ1ZkLE9BQU9lLElBQUksQ0FBQztRQUNkO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ1osQ0FBQ3JCLHlCQUNBOztnQ0FDR0UsNkJBQWUsOERBQUNQLCtEQUFXQTtvQ0FBQ08sYUFBYUE7Ozs7Ozs4Q0FDMUMsOERBQUNvQjtvQ0FBT0MsU0FBU1I7b0NBQWdCTSxXQUFVOzhDQUF1Qjs7Ozs7OzhDQUNsRSw4REFBQ3hCLDBEQUFNQTs7Ozs7OENBQ1AsOERBQUMyQjs7Ozs7O3lEQUdIOzs4Q0FDRSw4REFBQzVCLCtEQUFlQTtvQ0FBQ00sYUFBYUE7b0NBQWF1QixXQUFXVDs7Ozs7OzhDQUN0RCw4REFBQ007b0NBQU9DLFNBQVNSO29DQUFnQk0sV0FBVTs4Q0FBeUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVN0RjtHQTFFTXRCOztRQUdXRCxzREFBU0E7OztLQUhwQkM7QUE0RU4sK0RBQWVBLG1CQUFtQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3Byb2ZpbGUvcGFnZS5qc3g/MGI5ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgUHJvZmlsZVBhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9maWxlUGFnZSc7IFxuaW1wb3J0IEVkaXRQcm9maWxlRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL0VkaXRQcm9maWxlJzsgXG5pbXBvcnQgTG9nb3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTG9nb3V0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XG5cblxuY29uc3QgUHJvZmlsZVBhZ2VXaXRoRWRpdCA9ICgpID0+IHtcbiAgY29uc3QgW2VkaXRNb2RlLCBzZXRFZGl0TW9kZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtwcm9maWxlRGF0YSwgc2V0UHJvZmlsZURhdGFdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hQcm9maWxlRGF0YSgpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgZmV0Y2hQcm9maWxlRGF0YSA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdXNlcnMvbXktcHJvZmlsZScsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKX1gLCBcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgc2V0UHJvZmlsZURhdGEocmVzcG9uc2UuZGF0YSk7IFxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBwcm9maWxlIGRhdGE6JywgZXJyb3IpOyBcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlRWRpdE1vZGUgPSAoKSA9PiB7XG4gICAgc2V0RWRpdE1vZGUoIWVkaXRNb2RlKTsgXG4gIH07XG5cbiAgY29uc3QgaGFuZGxlUHJvZmlsZVVwZGF0ZSA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdXNlcnMvbXktcHJvZmlsZScsIHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKX1gLCBcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCB1cGRhdGVkUHJvZmlsZURhdGEgPSByZXNwb25zZS5kYXRhOyBcbiAgICAgIHNldFByb2ZpbGVEYXRhKHVwZGF0ZWRQcm9maWxlRGF0YSk7XG4gICAgICBzZXRFZGl0TW9kZShmYWxzZSk7IFxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB1cGRhdGVkIHByb2ZpbGUgZGF0YTonLCBlcnJvcik7IFxuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XG4gICAgaWYgKCF0b2tlbikge1xuICAgICAgcm91dGVyLnB1c2goJy9Mb2dpbicpOyBcbiAgICB9XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHB5LTVcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtOFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBzaGFkb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgIHshZWRpdE1vZGUgPyAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgIHtwcm9maWxlRGF0YSAmJiA8UHJvZmlsZVBhZ2UgcHJvZmlsZURhdGE9e3Byb2ZpbGVEYXRhfSAvPn0gXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZUVkaXRNb2RlfSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgbXQtM1wiPkVkaXQgUHJvZmlsZTwvYnV0dG9uPiBcbiAgICAgICAgICAgICAgICAgIDxMb2dvdXQvPlxuICAgICAgICAgICAgICAgICAgPERlbGV0ZUFjY291bnRCdXR0b24vPlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICA8RWRpdFByb2ZpbGVGb3JtIHByb2ZpbGVEYXRhPXtwcm9maWxlRGF0YX0gb25TdWNjZXNzPXtoYW5kbGVQcm9maWxlVXBkYXRlfSAvPiBcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dG9nZ2xlRWRpdE1vZGV9IGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5IG10LTNcIj5DYW5jZWw8L2J1dHRvbj4gXG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2ZpbGVQYWdlV2l0aEVkaXQ7XG5cblxuXG5cblxuXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImF4aW9zIiwiUHJvZmlsZVBhZ2UiLCJFZGl0UHJvZmlsZUZvcm0iLCJMb2dvdXQiLCJ1c2VSb3V0ZXIiLCJQcm9maWxlUGFnZVdpdGhFZGl0IiwiZWRpdE1vZGUiLCJzZXRFZGl0TW9kZSIsInByb2ZpbGVEYXRhIiwic2V0UHJvZmlsZURhdGEiLCJyb3V0ZXIiLCJmZXRjaFByb2ZpbGVEYXRhIiwicmVzcG9uc2UiLCJnZXQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkYXRhIiwiZXJyb3IiLCJjb25zb2xlIiwidG9nZ2xlRWRpdE1vZGUiLCJoYW5kbGVQcm9maWxlVXBkYXRlIiwidXBkYXRlZFByb2ZpbGVEYXRhIiwidG9rZW4iLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayIsIkRlbGV0ZUFjY291bnRCdXR0b24iLCJvblN1Y2Nlc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/profile/page.jsx\n"));

/***/ })

});