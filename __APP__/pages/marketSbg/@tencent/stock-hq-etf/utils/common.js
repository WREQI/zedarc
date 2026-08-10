require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../stock-hq-core/utils/market.js"),
  t = require("../../../../../common/vendor.js"),
  r = function (e) {
    return null == e || "" === e
      ? NaN
      : Number(String(e).replace(/[+%,\s]/g, ""));
  },
  a = new Set(["10800", "10100", "12800", "11100", "10500", "15900", "10900"]);
(exports.formatChangeRateValue = function (e) {
  var t = r(e);
  return Number.isNaN(t)
    ? "--"
    : "".concat(t > 0 ? "+" : "").concat(t.toFixed(2), "%");
}),
  (exports.formatPercentValue = function (e) {
    var t = r(e);
    return Number.isNaN(t) ? "--" : "".concat(t.toFixed(2), "%");
  }),
  (exports.getLimitUpCount = function (e) {
    var t = Number(e);
    return Number.isFinite(t) && t > 0 ? t : 0;
  }),
  (exports.getRatioClass = function (e) {
    var t = parseFloat(e);
    return Number.isNaN(t) || 0 === t ? "equal" : t > 0 ? "rise" : "drop";
  }),
  (exports.isTargetBroker = function (e) {
    return a.has(e);
  }),
  (exports.setZdpClass = function (e) {
    var t = parseFloat(e);
    return t > 0 ? "rise" : t < 0 ? "drop" : "equal";
  }),
  (exports.skin = function () {
    var e = ["mpwzq", "mpweapp"].includes("mpweapp");
    return ["mpwzq", "wzqlight"].includes("mpweapp")
      ? "white"
      : e
      ? t.StockBridge.getStorage("user/skin") || "white"
      : document.body.getAttribute("data-theme")
      ? { light: "white", white: "white", black: "dark", dark: "dark" }[
          document.body.getAttribute("data-theme")
        ]
      : "white";
  }),
  (exports.transMarketIcon = function (t, r, a) {
    if (void 0 !== t) {
      var n = e.getMarketPYName(t);
      if (!n)
        try {
          +t > 600 ? (n = "us") : +t > 300 && (n = "hk"),
            ("uk" !== t &&
              "cnjj" !== t &&
              "cwjj" !== t &&
              "jj" !== t &&
              "nq" !== t &&
              "zhai" !== t) ||
              (n = t),
            "ft" === t && (n = "hqzhi");
        } catch (e) {
          return;
        }
      return (
        e.isKeChuangStock(r)
          ? (n = "ke")
          : e.isChuangYeStock(r) && (n = "chuang"),
        "sh" === n && a && /^68/.test(a) && (n = "ke"),
        "sz" === n && a && /^30/.test(a) && (n = "chuang"),
        "https://wzq.tenpay.com/resources/mp-files/portfolio/icon/".concat(
          n,
          ".svg"
        )
      );
    }
  });
