webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var store_repoSearch_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! store/repoSearch/actions */ "./store/repoSearch/actions.ts");
/* harmony import */ var components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components */ "./components/index.ts");
/* harmony import */ var containers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! containers */ "./containers/index.ts");
var _jsxFileName = "/home/oleksii/Documents/Programming/BetterMeTest/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// import { gitApi } from "utils/api";





function HomePage(_ref) {
  var total_count = _ref.total_count,
      repos = _ref.repos,
      fetchSearch = _ref.fetchSearch;

  var onSearch = function onSearch(request) {
    fetchSearch({
      q: request,
      sort: "stars",
      order: "desc",
      per_page: 30,
      page: 1
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(components__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    onSearch: onSearch,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }), repos && __jsx(containers__WEBPACK_IMPORTED_MODULE_4__["SearchResult"], {
    total_count: total_count,
    repos: repos,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }), __jsx(components__WEBPACK_IMPORTED_MODULE_3__["Pagination"], {
    count: total_count,
    current: 1,
    onClick: onPaginationClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }));
}

var mapStateToProps = function mapStateToProps(_ref2) {
  var repoSearchReducer = _ref2.repoSearchReducer;
  return {
    total_count: repoSearchReducer.total_count,
    repos: repoSearchReducer.repos
  };
};

var mapDispatchToProps = {
  fetchSearch: store_repoSearch_actions__WEBPACK_IMPORTED_MODULE_2__["default"].fetchSearch
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(HomePage));

/***/ })

})
//# sourceMappingURL=index.js.751a45fac7836b93ec92.hot-update.js.map