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
  var onSearch = _ref.onSearch;

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
  };

  var onInputBlur = function onInputBlur() {
    setInputFocused(false);
  };

  var onInputChange = function onInputChange(event) {
    setSearchCacheValue(utils__WEBPACK_IMPORTED_MODULE_2__["searchCache"].searchIn(inputValue));
    setInputValue(event.target.value);
  };

  var onEnter = function onEnter(event) {
    if (event.key === "Enter") {
      onSearch(event.target.value);
      utils__WEBPACK_IMPORTED_MODULE_2__["searchCache"].writeTo(event.target.value);
      event.target.blur();
    }
  };

  return __jsx("div", {
    className: "search",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("search__input", {
      "search__input--focus": inputFocused
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
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
      lineNumber: 35,
      columnNumber: 9
    }
  }), __jsx("img", {
    src: "https://github.githubassets.com/images/search-key-slash.svg",
    alt: "Search icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 9
    }
  })), __jsx("div", {
    className: "search__autocomplete",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, inputFocused && // <div className="autocomplete">
  //   <AutocompleteItem
  //     searchCache={searchCacheValue}
  //     search={inputValue}
  //   />
  // </div>
  __jsx(containers_Autocomplete__WEBPACK_IMPORTED_MODULE_3__["default"], {
    searchCache: searchCacheValue,
    search: inputValue,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

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
  }, searchCache !== [] && __jsx(components__WEBPACK_IMPORTED_MODULE_1__["AutocompleteItem"], {
    search: search,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 30
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Autocomplete);

/***/ })

})
//# sourceMappingURL=index.js.dfc1ff4c10a03b56516e.hot-update.js.map