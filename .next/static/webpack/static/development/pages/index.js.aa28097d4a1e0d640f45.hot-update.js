webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/AutocompleteItem.tsx":
/*!*****************************************!*\
  !*** ./components/AutocompleteItem.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styles_AutocompleteItem_global_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/AutocompleteItem.global.scss */ "./styles/AutocompleteItem.global.scss");
/* harmony import */ var styles_AutocompleteItem_global_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styles_AutocompleteItem_global_scss__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "/home/oleksii/Documents/Programming/BetterMeTest/components/AutocompleteItem.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var AutocompleteItem = function AutocompleteItem(_ref) {
  var search = _ref.search,
      _onClick = _ref.onClick;
  console.log(search);
  return __jsx("div", {
    className: "autocomplete__item autocomplete__item--animation",
    onClick: function onClick() {
      console.log("search");

      _onClick(search);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, search !== "" && __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("svg", {
    height: "16",
    width: "16",
    "aria-label": "Search",
    viewBox: "0 0 16 16",
    version: "1.1",
    role: "img",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, __jsx("path", {
    fillRule: "evenodd",
    d: "M15.7 13.3l-3.81-3.83A5.93 5.93 0 0013 6c0-3.31-2.69-6-6-6S1 2.69 1 6s2.69 6 6 6c1.3 0 2.48-.41 3.47-1.11l3.83 3.81c.19.2.45.3.7.3.25 0 .52-.09.7-.3a.996.996 0 000-1.41v.01zM7 10.7c-2.59 0-4.7-2.11-4.7-4.7 0-2.59 2.11-4.7 4.7-4.7 2.59 0 4.7 2.11 4.7 4.7 0 2.59-2.11 4.7-4.7 4.7z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: "repo-name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, search !== "" ? search : "No result in cache"), search !== "" && __jsx("div", {
    className: "autocomplete__item-type",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, __jsx("span", {
    "aria-label": "in all of GitHub",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, "All GitHub"), __jsx("span", {
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, "\u21B5")));
};

/* harmony default export */ __webpack_exports__["default"] = (AutocompleteItem);

/***/ })

})
//# sourceMappingURL=index.js.aa28097d4a1e0d640f45.hot-update.js.map