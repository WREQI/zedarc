var e = require("../config/enum.js"),
  r = require("../common/vendor.js");
exports.marketId = function (n) {
  var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
    t = r.upperCase(e.MARKET[n]) || "";
  return t ? o + t : "";
};
