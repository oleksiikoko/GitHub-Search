webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/RepoItem.tsx":
/*!*********************************!*\
  !*** ./components/RepoItem.tsx ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styles_RepoItem_global_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/RepoItem.global.scss */ "./styles/RepoItem.global.scss");
/* harmony import */ var styles_RepoItem_global_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styles_RepoItem_global_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components */ "./components/index.ts");
/* harmony import */ var _ItemAbout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ItemAbout */ "./components/ItemAbout/index.tsx");
var _this = undefined,
    _jsxFileName = "/home/oleksii/Documents/Programming/BetterMeTest/components/RepoItem.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var RepoItem = function RepoItem(_ref) {
  var item = _ref.item;
  var full_name = item.full_name,
      owner = item.owner,
      html_url = item.html_url,
      description = item.description,
      stargazers_count = item.stargazers_count,
      language = item.language,
      license = item.license,
      updated_at = item.updated_at,
      topics = item.topics,
      issues_need_help = item.issues_need_help;
  return __jsx("div", {
    className: "repo-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "repo-item__icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, __jsx("svg", {
    height: "16",
    viewBox: "0 0 12 16",
    version: "1.1",
    width: "12",
    "aria-hidden": "true",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx("path", {
    fill: "#586069",
    fillRule: "evenodd",
    d: "M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }))), __jsx("div", {
    className: "repo-item__info",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "repo-item__name",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: html_url,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, full_name)), __jsx("p", {
    className: "repo-item__description",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, description), __jsx(components__WEBPACK_IMPORTED_MODULE_2__["ItemTopics"], {
    topics: topics,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }), __jsx(_ItemAbout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    full_name: full_name,
    stargazers_count: stargazers_count,
    language: language,
    license: license,
    updated_at: updated_at,
    issues_need_help: issues_need_help,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (RepoItem);

/***/ })

})
//# sourceMappingURL=index.js.aae18a370c12d5793d06.hot-update.js.map