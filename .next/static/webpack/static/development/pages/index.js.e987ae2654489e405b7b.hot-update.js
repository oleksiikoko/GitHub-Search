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
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styles_Pagination_global_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styles/Pagination.global.scss */ "./styles/Pagination.global.scss");
/* harmony import */ var styles_Pagination_global_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styles_Pagination_global_scss__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "/home/oleksii/Documents/bettermetest/components/Pagination.tsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var paginationValues = function paginationValues(count, current) {
  var res = [];

  if (count > 9) {
    res.push("1");
    res.push("2");

    if (current > 5) {
      res.push("...");
      res.push((current - 2).toString());
      res.push((current - 1).toString());
      res.push(current.toString());
      res.push((current + 1).toString());
      res.push((current + 2).toString());

      if (count - current > 3) {
        res.push("...");
        res.push((count - 1).toString());
        res.push(count.toString());
      } else {
        res.push((count - 2).toString());
        res.push((count - 1).toString());
        res.push(count.toString());
      }
    } else {
      res.push("3");
      res.push("4");
      res.push("5");
      res.push("...");
      res.push((count - 2).toString());
      res.push((count - 1).toString());
    }
  } else {
    for (var i = 1; i <= current; i++) {
      res.push(i.toString());
    }
  }

  return res;
};

var PaginationItem = function PaginationItem(_ref) {
  var disable = _ref.disable,
      enable = _ref.enable,
      text = _ref.text,
      _onClick = _ref.onClick;
  return __jsx("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("pagination__item", {
      "pagination__item--enable": enable,
      "pagination__item--disable": disable
    }),
    onClick: function onClick() {
      return _onClick(text);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, text);
};

var Pagination = function Pagination(_ref2) {
  var count = _ref2.count,
      _ref2$current = _ref2.current,
      current = _ref2$current === void 0 ? 1 : _ref2$current,
      _onClick2 = _ref2.onClick;
  var paginationArray = paginationValues(count, current);
  return __jsx("div", {
    className: "pagination",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 5
    }
  }, __jsx(PaginationItem, {
    disable: current === 1,
    enable: false,
    text: "Previous",
    onClick: _onClick2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }), paginationArray.map(function (item, index) {
    return __jsx("div", {
      key: index,
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()("pagination__item", {
        "pagination__item--enable": item === current.toString(),
        "pagination__item--disable": item === "..."
      }),
      onClick: function onClick() {
        return _onClick2(item);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 11
      }
    }, item);
  }), __jsx(PaginationItem, {
    disable: current === count,
    enable: false,
    text: "Next",
    onClick: _onClick2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Pagination);

/***/ })

})
//# sourceMappingURL=index.js.e987ae2654489e405b7b.hot-update.js.map