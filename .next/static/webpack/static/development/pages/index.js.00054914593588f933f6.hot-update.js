webpackHotUpdate("static/development/pages/index.js",{

/***/ "./utils/paginationValues.ts":
/*!***********************************!*\
  !*** ./utils/paginationValues.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
    for (var i = 1; i <= count; i++) {
      res.push(i.toString());
    }
  }

  return res;
};

/* harmony default export */ __webpack_exports__["default"] = (paginationValues);

/***/ })

})
//# sourceMappingURL=index.js.00054914593588f933f6.hot-update.js.map