webpackHotUpdate("static/development/pages/index.js",{

/***/ "./containers/Autocomplete.tsx":
/*!*************************************!*\
  !*** ./containers/Autocomplete.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components */ "./components/index.ts");
var _this = undefined,
    _jsxFileName = "/home/oleksii/Documents/Programming/BetterMeTest/containers/Autocomplete.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Autocomplete = function Autocomplete(_ref) {
  var searchCache = _ref.searchCache,
      search = _ref.search;
  console.log(searchCache);
  return __jsx("div", {
    className: "autocomplete",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, searchCache !== [] && searchCache.map(function (item) {
    return __jsx(components__WEBPACK_IMPORTED_MODULE_1__["AutocompleteItem"], {
      search: item,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 35
      }
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Autocomplete);

/***/ })

})
//# sourceMappingURL=index.js.3d2ac1732cea8e3b8347.hot-update.js.map