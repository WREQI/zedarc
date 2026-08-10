require("../app.js");
var r = require("../common/vendor.js");
exports.getStockFactor = function (t) {
  if (!r.isNumber(+t)) return "0.01";
  var e = t.toString().split(".");
  if (e.length < 2) return "0.01";
  var n = e[1].length;
  return 0 === n ? "0.01" : 1 / Math.pow(10, n);
};
