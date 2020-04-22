webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Search.tsx":
/*!*******************************!*\
  !*** ./components/Search.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_AutocompleteItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/AutocompleteItem */ "./components/AutocompleteItem.tsx");
var _this = undefined,
    _jsxFileName = "/home/oleksii/Documents/Programming/BetterMeTest/components/Search.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Search = function Search(_ref) {
  var onSearch = _ref.onSearch;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      inputFocused = _useState[0],
      setInputFocused = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      inputValue = _useState2[0],
      setInputValue = _useState2[1];

  var onInputFocus = function onInputFocus() {
    setInputFocused(true);
  };

  var onInputBlur = function onInputBlur() {
    setInputFocused(false);
  };

  var onEnter = function onEnter(event) {
    if (event.key === "Enter") {
      onSearch(event.target.value);
      event.target.blur();
    }
  };

  return __jsx("div", {
    className: "search",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("search__input", {
      "search__input--focus": inputFocused
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx("input", {
    type: "text",
    placeholder: "Search or jump to...",
    onFocus: onInputFocus,
    onBlur: onInputBlur,
    onKeyDown: onEnter,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }), __jsx("img", {
    src: "https://github.githubassets.com/images/search-key-slash.svg",
    alt: "Search icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "search__autocomplete",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, inputFocused && __jsx("div", {
    className: "autocomplete",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }, __jsx(components_AutocompleteItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ })

})
//# sourceMappingURL=index.js.cfb812a9cd92fb9c150a.hot-update.js.map