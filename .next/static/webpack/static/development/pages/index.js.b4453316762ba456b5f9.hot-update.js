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
var _jsxFileName = "/home/oleksii/Documents/bettermetest/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function HomePage(_ref) {
  var total_count = _ref.total_count,
      repos = _ref.repos,
      fetchSearch = _ref.fetchSearch;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1),
      curPage = _useState[0],
      setCurPage = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      curRequest = _useState2[0],
      setCurRequest = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      loading = _useState3[0],
      setloading = _useState3[1];

  var onSearch = function onSearch(request) {
    setloading(true);
    setCurRequest(request);
    fetchSearch({
      q: request,
      sort: "stars",
      order: "desc",
      per_page: 30,
      page: curPage
    });
    setCurPage(1);
  };

  var onPaginationClick = function onPaginationClick(value) {
    setloading(true);

    if (value === "Previous") {
      if (curPage !== 1) setCurPage(curPage - 1);
    } else if (value === "Next") {
      if (curPage !== Math.floor(total_count / 30)) setCurPage(curPage + 1);
    } else if (curPage.toString !== value) {
      setCurPage(Number(value));
    }

    window.scrollTo(0, 0);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (curRequest === "") return;
    fetchSearch({
      q: curRequest,
      sort: "stars",
      order: "desc",
      per_page: 30,
      page: curPage
    });
    setloading(true);
  }, [curPage]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setloading(false);
  }, [repos]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(components__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    onSearch: onSearch,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }), repos && !loading && __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(components__WEBPACK_IMPORTED_MODULE_3__["SearchResult"], {
    total_count: total_count,
    repos: repos,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }), __jsx("div", {
    className: "content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }, __jsx(components__WEBPACK_IMPORTED_MODULE_3__["Pagination"], {
    count: Math.floor(total_count / 30),
    current: curPage,
    onClick: onPaginationClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }))), loading && __jsx("div", {
    className: "content-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, __jsx("h3", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, "Loading...")));
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
//# sourceMappingURL=index.js.b4453316762ba456b5f9.hot-update.js.map