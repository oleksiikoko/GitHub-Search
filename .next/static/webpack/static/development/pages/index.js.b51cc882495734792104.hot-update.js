webpackHotUpdate("static/development/pages/index.js",{

/***/ "./containers/SearchResult.tsx":
/*!*************************************!*\
  !*** ./containers/SearchResult.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components */ "./components/index.ts");
var _this = undefined,
    _jsxFileName = "/home/oleksii/Documents/Programming/BetterMeTest/containers/SearchResult.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var SearchResult = function SearchResult(_ref) {
  var total_count = _ref.total_count,
      repos = _ref.repos;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "content-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, __jsx("h3", {
    className: "search-result-header",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, total_count.toLocaleString(), " repository results"), repos.map(function (item, index) {
    return __jsx(components__WEBPACK_IMPORTED_MODULE_1__["RepoItem"], {
      key: index,
      item: item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 18
      }
    });
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchResult);

/***/ })

})
//# sourceMappingURL=index.js.b51cc882495734792104.hot-update.js.map