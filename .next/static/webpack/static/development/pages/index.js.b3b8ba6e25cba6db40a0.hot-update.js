webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils/index.ts":
/*!************************!*\
  !*** ./utils/index.ts ***!
  \************************/
/*! exports provided: getRequestParser, searchCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _getRequestParser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getRequestParser */ "./utils/getRequestParser.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRequestParser", function() { return _getRequestParser__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _searchCache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./searchCache */ "./utils/searchCache.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "searchCache", function() { return _searchCache__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./utils/searchCache.ts":
/*!******************************!*\
  !*** ./utils/searchCache.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var GIT_SEARCH_CACHE = "gitSearchCache";
/* harmony default export */ __webpack_exports__["default"] = ({
  writeTo: function writeTo(searchRequest) {
    if (localStorage) {
      var store = new Set(JSON.parse(localStorage[GIT_SEARCH_CACHE]));
      store.add(searchRequest);
      localStorage[GIT_SEARCH_CACHE] = JSON.stringify(Array.from(store));
    }
  },
  searchIn: function searchIn(searchRequest) {
    if (localStorage) {
      var store = new Set(JSON.parse(localStorage[GIT_SEARCH_CACHE]));
      var result = Array.from(store).filter(function (item) {
        return item.search(searchRequest) !== -1;
      });
      return result;
    }
  }
});

/***/ })

})
//# sourceMappingURL=index.js.b3b8ba6e25cba6db40a0.hot-update.js.map