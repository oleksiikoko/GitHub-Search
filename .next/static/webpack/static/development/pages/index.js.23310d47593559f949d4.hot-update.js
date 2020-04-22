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
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils */ "./utils/index.ts");
/* harmony import */ var containers_Autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! containers/Autocomplete */ "./containers/Autocomplete.tsx");
var _this = undefined,
    _jsxFileName = "/home/oleksii/Documents/Programming/BetterMeTest/components/Search.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Search = function Search(_ref) {
  var _onSearch = _ref.onSearch;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      inputFocused = _useState[0],
      setInputFocused = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      inputValue = _useState2[0],
      setInputValue = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      searchCacheValue = _useState3[0],
      setSearchCacheValue = _useState3[1];

  var onInputFocus = function onInputFocus() {
    setInputFocused(true);
    setSearchCacheValue(utils__WEBPACK_IMPORTED_MODULE_2__["searchCache"].searchIn(inputValue));
  };

  var onInputBlur = function onInputBlur() {
    setTimeout(function () {
      setInputFocused(false);
    }, 100);
  };

  var onInputChange = function onInputChange(event) {
    setSearchCacheValue(utils__WEBPACK_IMPORTED_MODULE_2__["searchCache"].searchIn(inputValue));
    setInputValue(event.target.value);
  };

  var onEnter = function onEnter(event) {
    if (event.key === "Enter") {
      _onSearch(event.target.value);

      utils__WEBPACK_IMPORTED_MODULE_2__["searchCache"].writeTo(event.target.value);
      event.target.blur();
    }
  };

  return __jsx("div", {
    className: "search",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("search__input", {
      "search__input--focus": inputFocused
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx("input", {
    type: "text",
    placeholder: "Search or jump to...",
    onFocus: onInputFocus,
    onBlur: onInputBlur,
    onKeyDown: onEnter,
    onChange: onInputChange,
    value: inputValue,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }), __jsx("img", {
    src: "https://github.githubassets.com/images/search-key-slash.svg",
    alt: "Search icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "search__autocomplete",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }
  }, inputFocused && __jsx(containers_Autocomplete__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onSearch: function onSearch(value) {
      setInputValue(value);

      _onSearch(value);
    },
    searchCache: searchCacheValue,
    search: inputValue,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ })

})
//# sourceMappingURL=index.js.23310d47593559f949d4.hot-update.js.map