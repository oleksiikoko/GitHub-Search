webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Pagination.tsx":
/*!***********************************!*\
  !*** ./components/Pagination.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styles_Pagination_global_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styles/Pagination.global.scss */ "./styles/Pagination.global.scss");
/* harmony import */ var styles_Pagination_global_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styles_Pagination_global_scss__WEBPACK_IMPORTED_MODULE_1__);
var _this = undefined,
    _jsxFileName = "/home/oleksii/Documents/Programming/BetterMeTest/components/Pagination.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var paginationValues = function paginationValues(count, current) {
  var res = [];

  if (count > 9) {
    res.push("1");
    res.push("2");

    if (current > 5) {
      res.push("...");
      res.push((current - 2).toString);
      res.push((current - 1).toString);
      res.push(current.toString);
      res.push((current + 1).toString);
      res.push((current + 2).toString);

      if (count - current > 3) {
        res.push("...");
        res.push(count - 1);
        res.push(count);
      } else {
        res.push(count - 2);
        res.push(count - 1);
        res.push(count);
      }
    }
  } else {
    for (var i = 1; i <= current; i++) {
      res.push(i.toString);
    }
  }
};

var Pagination = function Pagination(_ref) {
  var count = _ref.count,
      _ref$current = _ref.current,
      current = _ref$current === void 0 ? 1 : _ref$current;
  return __jsx("div", {
    className: "pagination",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "pagination__item pagination__item--disable",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, "Previous"), __jsx("div", {
    className: "pagination__item pagination__item--enable",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, "1"), __jsx("div", {
    className: "pagination__item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, "2"), __jsx("div", {
    className: "pagination__item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, "3"), __jsx("div", {
    className: "pagination__item pagination__item--disable",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, "..."), __jsx("div", {
    className: "pagination__item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, "5"), __jsx("div", {
    className: "pagination__item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, "6"), __jsx("div", {
    className: "pagination__item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }
  }, "7"), __jsx("div", {
    className: "pagination__item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, "8"), __jsx("div", {
    className: "pagination__item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }
  }, "Next"));
};

/* harmony default export */ __webpack_exports__["default"] = (Pagination);

/***/ })

})
//# sourceMappingURL=index.js.877c301c155a94d975ee.hot-update.js.map