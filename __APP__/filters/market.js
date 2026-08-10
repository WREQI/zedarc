var e = require("../config/enum.js");
exports.marketName = function (r) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
    n = e.MARKET[r] ? e.MARKET[r].toUpperCase() : "";
  return n ? t + n : "";
};
