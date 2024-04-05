"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/get-user-locale";
exports.ids = ["vendor-chunks/get-user-locale"];
exports.modules = {

/***/ "(ssr)/./node_modules/get-user-locale/dist/esm/index.js":
/*!********************************************************!*\
  !*** ./node_modules/get-user-locale/dist/esm/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getUserLocale: () => (/* binding */ getUserLocale),\n/* harmony export */   getUserLocales: () => (/* binding */ getUserLocales)\n/* harmony export */ });\n/* harmony import */ var lodash_memoize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.memoize */ \"(ssr)/./node_modules/lodash.memoize/index.js\");\n\nfunction resolver(options) {\n    return JSON.stringify(options);\n}\nfunction isString(el) {\n    return typeof el === 'string';\n}\nfunction isUnique(el, index, arr) {\n    return arr.indexOf(el) === index;\n}\nfunction isAllLowerCase(el) {\n    return el.toLowerCase() === el;\n}\nfunction fixCommas(el) {\n    return el.indexOf(',') === -1 ? el : el.split(',');\n}\nfunction normalizeLocale(locale) {\n    if (!locale) {\n        return locale;\n    }\n    if (locale === 'C' || locale === 'posix' || locale === 'POSIX') {\n        return 'en-US';\n    }\n    // If there's a dot (.) in the locale, it's likely in the format of \"en-US.UTF-8\", so we only take the first part\n    if (locale.indexOf('.') !== -1) {\n        var _a = locale.split('.')[0], actualLocale = _a === void 0 ? '' : _a;\n        return normalizeLocale(actualLocale);\n    }\n    // If there's an at sign (@) in the locale, it's likely in the format of \"en-US@posix\", so we only take the first part\n    if (locale.indexOf('@') !== -1) {\n        var _b = locale.split('@')[0], actualLocale = _b === void 0 ? '' : _b;\n        return normalizeLocale(actualLocale);\n    }\n    // If there's a dash (-) in the locale and it's not all lower case, it's already in the format of \"en-US\", so we return it\n    if (locale.indexOf('-') === -1 || !isAllLowerCase(locale)) {\n        return locale;\n    }\n    var _c = locale.split('-'), splitEl1 = _c[0], _d = _c[1], splitEl2 = _d === void 0 ? '' : _d;\n    return \"\".concat(splitEl1, \"-\").concat(splitEl2.toUpperCase());\n}\nfunction getUserLocalesInternal(_a) {\n    var _b = _a === void 0 ? {} : _a, _c = _b.useFallbackLocale, useFallbackLocale = _c === void 0 ? true : _c, _d = _b.fallbackLocale, fallbackLocale = _d === void 0 ? 'en-US' : _d;\n    var languageList = [];\n    if (typeof navigator !== 'undefined') {\n        var rawLanguages = navigator.languages || [];\n        var languages = [];\n        for (var _i = 0, rawLanguages_1 = rawLanguages; _i < rawLanguages_1.length; _i++) {\n            var rawLanguagesItem = rawLanguages_1[_i];\n            languages = languages.concat(fixCommas(rawLanguagesItem));\n        }\n        var rawLanguage = navigator.language;\n        var language = rawLanguage ? fixCommas(rawLanguage) : rawLanguage;\n        languageList = languageList.concat(languages, language);\n    }\n    if (useFallbackLocale) {\n        languageList.push(fallbackLocale);\n    }\n    return languageList.filter(isString).map(normalizeLocale).filter(isUnique);\n}\nvar getUserLocales = lodash_memoize__WEBPACK_IMPORTED_MODULE_0__(getUserLocalesInternal, resolver);\nfunction getUserLocaleInternal(options) {\n    return getUserLocales(options)[0] || null;\n}\nvar getUserLocale = lodash_memoize__WEBPACK_IMPORTED_MODULE_0__(getUserLocaleInternal, resolver);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getUserLocale);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZ2V0LXVzZXItbG9jYWxlL2Rpc3QvZXNtL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsNEJBQTRCO0FBQ3BGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLHFCQUFxQiwyQ0FBTztBQUNuQztBQUNBO0FBQ0E7QUFDTyxvQkFBb0IsMkNBQU87QUFDbEMsaUVBQWUsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vbm9kZV9tb2R1bGVzL2dldC11c2VyLWxvY2FsZS9kaXN0L2VzbS9pbmRleC5qcz8zZGIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtZW1vaXplIGZyb20gJ2xvZGFzaC5tZW1vaXplJztcbmZ1bmN0aW9uIHJlc29sdmVyKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkob3B0aW9ucyk7XG59XG5mdW5jdGlvbiBpc1N0cmluZyhlbCkge1xuICAgIHJldHVybiB0eXBlb2YgZWwgPT09ICdzdHJpbmcnO1xufVxuZnVuY3Rpb24gaXNVbmlxdWUoZWwsIGluZGV4LCBhcnIpIHtcbiAgICByZXR1cm4gYXJyLmluZGV4T2YoZWwpID09PSBpbmRleDtcbn1cbmZ1bmN0aW9uIGlzQWxsTG93ZXJDYXNlKGVsKSB7XG4gICAgcmV0dXJuIGVsLnRvTG93ZXJDYXNlKCkgPT09IGVsO1xufVxuZnVuY3Rpb24gZml4Q29tbWFzKGVsKSB7XG4gICAgcmV0dXJuIGVsLmluZGV4T2YoJywnKSA9PT0gLTEgPyBlbCA6IGVsLnNwbGl0KCcsJyk7XG59XG5mdW5jdGlvbiBub3JtYWxpemVMb2NhbGUobG9jYWxlKSB7XG4gICAgaWYgKCFsb2NhbGUpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsZTtcbiAgICB9XG4gICAgaWYgKGxvY2FsZSA9PT0gJ0MnIHx8IGxvY2FsZSA9PT0gJ3Bvc2l4JyB8fCBsb2NhbGUgPT09ICdQT1NJWCcpIHtcbiAgICAgICAgcmV0dXJuICdlbi1VUyc7XG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3MgYSBkb3QgKC4pIGluIHRoZSBsb2NhbGUsIGl0J3MgbGlrZWx5IGluIHRoZSBmb3JtYXQgb2YgXCJlbi1VUy5VVEYtOFwiLCBzbyB3ZSBvbmx5IHRha2UgdGhlIGZpcnN0IHBhcnRcbiAgICBpZiAobG9jYWxlLmluZGV4T2YoJy4nKSAhPT0gLTEpIHtcbiAgICAgICAgdmFyIF9hID0gbG9jYWxlLnNwbGl0KCcuJylbMF0sIGFjdHVhbExvY2FsZSA9IF9hID09PSB2b2lkIDAgPyAnJyA6IF9hO1xuICAgICAgICByZXR1cm4gbm9ybWFsaXplTG9jYWxlKGFjdHVhbExvY2FsZSk7XG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3MgYW4gYXQgc2lnbiAoQCkgaW4gdGhlIGxvY2FsZSwgaXQncyBsaWtlbHkgaW4gdGhlIGZvcm1hdCBvZiBcImVuLVVTQHBvc2l4XCIsIHNvIHdlIG9ubHkgdGFrZSB0aGUgZmlyc3QgcGFydFxuICAgIGlmIChsb2NhbGUuaW5kZXhPZignQCcpICE9PSAtMSkge1xuICAgICAgICB2YXIgX2IgPSBsb2NhbGUuc3BsaXQoJ0AnKVswXSwgYWN0dWFsTG9jYWxlID0gX2IgPT09IHZvaWQgMCA/ICcnIDogX2I7XG4gICAgICAgIHJldHVybiBub3JtYWxpemVMb2NhbGUoYWN0dWFsTG9jYWxlKTtcbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBhIGRhc2ggKC0pIGluIHRoZSBsb2NhbGUgYW5kIGl0J3Mgbm90IGFsbCBsb3dlciBjYXNlLCBpdCdzIGFscmVhZHkgaW4gdGhlIGZvcm1hdCBvZiBcImVuLVVTXCIsIHNvIHdlIHJldHVybiBpdFxuICAgIGlmIChsb2NhbGUuaW5kZXhPZignLScpID09PSAtMSB8fCAhaXNBbGxMb3dlckNhc2UobG9jYWxlKSkge1xuICAgICAgICByZXR1cm4gbG9jYWxlO1xuICAgIH1cbiAgICB2YXIgX2MgPSBsb2NhbGUuc3BsaXQoJy0nKSwgc3BsaXRFbDEgPSBfY1swXSwgX2QgPSBfY1sxXSwgc3BsaXRFbDIgPSBfZCA9PT0gdm9pZCAwID8gJycgOiBfZDtcbiAgICByZXR1cm4gXCJcIi5jb25jYXQoc3BsaXRFbDEsIFwiLVwiKS5jb25jYXQoc3BsaXRFbDIudG9VcHBlckNhc2UoKSk7XG59XG5mdW5jdGlvbiBnZXRVc2VyTG9jYWxlc0ludGVybmFsKF9hKSB7XG4gICAgdmFyIF9iID0gX2EgPT09IHZvaWQgMCA/IHt9IDogX2EsIF9jID0gX2IudXNlRmFsbGJhY2tMb2NhbGUsIHVzZUZhbGxiYWNrTG9jYWxlID0gX2MgPT09IHZvaWQgMCA/IHRydWUgOiBfYywgX2QgPSBfYi5mYWxsYmFja0xvY2FsZSwgZmFsbGJhY2tMb2NhbGUgPSBfZCA9PT0gdm9pZCAwID8gJ2VuLVVTJyA6IF9kO1xuICAgIHZhciBsYW5ndWFnZUxpc3QgPSBbXTtcbiAgICBpZiAodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdmFyIHJhd0xhbmd1YWdlcyA9IG5hdmlnYXRvci5sYW5ndWFnZXMgfHwgW107XG4gICAgICAgIHZhciBsYW5ndWFnZXMgPSBbXTtcbiAgICAgICAgZm9yICh2YXIgX2kgPSAwLCByYXdMYW5ndWFnZXNfMSA9IHJhd0xhbmd1YWdlczsgX2kgPCByYXdMYW5ndWFnZXNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgIHZhciByYXdMYW5ndWFnZXNJdGVtID0gcmF3TGFuZ3VhZ2VzXzFbX2ldO1xuICAgICAgICAgICAgbGFuZ3VhZ2VzID0gbGFuZ3VhZ2VzLmNvbmNhdChmaXhDb21tYXMocmF3TGFuZ3VhZ2VzSXRlbSkpO1xuICAgICAgICB9XG4gICAgICAgIHZhciByYXdMYW5ndWFnZSA9IG5hdmlnYXRvci5sYW5ndWFnZTtcbiAgICAgICAgdmFyIGxhbmd1YWdlID0gcmF3TGFuZ3VhZ2UgPyBmaXhDb21tYXMocmF3TGFuZ3VhZ2UpIDogcmF3TGFuZ3VhZ2U7XG4gICAgICAgIGxhbmd1YWdlTGlzdCA9IGxhbmd1YWdlTGlzdC5jb25jYXQobGFuZ3VhZ2VzLCBsYW5ndWFnZSk7XG4gICAgfVxuICAgIGlmICh1c2VGYWxsYmFja0xvY2FsZSkge1xuICAgICAgICBsYW5ndWFnZUxpc3QucHVzaChmYWxsYmFja0xvY2FsZSk7XG4gICAgfVxuICAgIHJldHVybiBsYW5ndWFnZUxpc3QuZmlsdGVyKGlzU3RyaW5nKS5tYXAobm9ybWFsaXplTG9jYWxlKS5maWx0ZXIoaXNVbmlxdWUpO1xufVxuZXhwb3J0IHZhciBnZXRVc2VyTG9jYWxlcyA9IG1lbW9pemUoZ2V0VXNlckxvY2FsZXNJbnRlcm5hbCwgcmVzb2x2ZXIpO1xuZnVuY3Rpb24gZ2V0VXNlckxvY2FsZUludGVybmFsKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gZ2V0VXNlckxvY2FsZXMob3B0aW9ucylbMF0gfHwgbnVsbDtcbn1cbmV4cG9ydCB2YXIgZ2V0VXNlckxvY2FsZSA9IG1lbW9pemUoZ2V0VXNlckxvY2FsZUludGVybmFsLCByZXNvbHZlcik7XG5leHBvcnQgZGVmYXVsdCBnZXRVc2VyTG9jYWxlO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/get-user-locale/dist/esm/index.js\n");

/***/ })

};
;