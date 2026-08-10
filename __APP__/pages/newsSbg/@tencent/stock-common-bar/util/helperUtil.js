require("../../../../../common/vendor.js"),
  (exports.numberFormat = function (e) {
    return e ? (e < 1e4 ? e : "".concat((e / 1e4).toFixed(1), "万")) : "0";
  });
