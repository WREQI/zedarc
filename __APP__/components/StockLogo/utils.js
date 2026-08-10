require("../../app.js");
var t = require("../../utils/market.js"),
  r = new Set(["sz", "sh", "hk", "nq", "bj"]);
exports.buildStockLogoUrl = function (e, n) {
  var s = (function (e) {
      if ("" === e || null == e) return "";
      var n = String(e).toLowerCase();
      if (r.has(n)) return n;
      var s = t.getMarketPYName(Number(n));
      return s && r.has(s) ? s : "";
    })(e),
    o = (function (t, r) {
      var e = String(t || "").trim();
      return e && r && e.toLowerCase().startsWith(r) ? e.slice(r.length) : e;
    })(n, s);
  return s && o
    ? "https://st.gtimg.com/stock/logo/".concat(s).concat(o, ".png")
    : "";
};
