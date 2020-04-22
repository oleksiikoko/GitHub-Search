webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ItemTopics.tsx":
/*!***********************************!*\
  !*** ./components/ItemTopics.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styles_ItemTopics_global_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/ItemTopics.global.scss */ "./styles/ItemTopics.global.scss");
/* harmony import */ var styles_ItemTopics_global_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styles_ItemTopics_global_scss__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "/home/oleksii/Documents/Programming/BetterMeTest/components/ItemTopics.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var ItemTopics = function ItemTopics(_ref) {
  var topics = _ref.topics;
  return __jsx("div", {
    className: "topics",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, topics.map(function (topic, index) {
    return __jsx("a", {
      key: index,
      href: "https://github.com/topics/".concat(topic),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "topics__topic",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 13
      }
    }, topic));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ItemTopics);

/***/ })

})
//# sourceMappingURL=index.js.1ba84d4fee41e5bc818b.hot-update.js.map