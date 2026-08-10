function t(t, e) {
  return n(t)
    ? "pt".concat(e)
    : (function (t) {
        return "bj" === t;
      })(t)
    ? "bj".concat(e)
    : (function (t) {
        return "nq" === t;
      })(t)
    ? "nq".concat(e)
    : (function (t) {
        return "uk" === t;
      })(t)
    ? "uk".concat(e)
    : "cs" === t
    ? "cs".concat(e)
    : (function (t) {
        return "ft" === t;
      })(t)
    ? "ft".concat(e)
    : (function (t) {
        return "fu" === t || "hd" === t;
      })(t)
    ? "".concat(t).concat(e)
    : (function (t) {
        return "jj" === t;
      })(t)
    ? "jj".concat(e)
    : (function (t) {
        return "fx" === t;
      })(t)
    ? "fx".concat(e)
    : (function (t) {
        return "bc" === t;
      })(t)
    ? "bc".concat(e)
    : ["sz", "sh", "hk", "us"][t] + e;
}
function n(t) {
  return "p" === t || "pt" === t;
}
require("../../../../../@babel/runtime/helpers/Arrayincludes"),
  (exports.bigNumberToText = function (t) {
    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
      e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2,
      c = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
      r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1;
    if (isNaN(t) || "" === t) return "" === t ? "--" : t;
    var o = parseFloat(t || 0);
    return (
      (o =
        o < 1e4 * r
          ? o.toFixed(c)
          : o >= 1e4 * r && o < 1e8
          ? "".concat((o / 1e4).toFixed(e), "万")
          : o >= 1e8 && o < 1e11
          ? "".concat((o / 1e8).toFixed(e), "亿")
          : o >= 1e11 && o < 1e12
          ? "".concat((o / 1e11).toFixed(e), "千亿")
          : o >= 1e12 && o < 1e16
          ? "".concat((o / 1e12).toFixed(e), "万亿")
          : "".concat((o / 1e16).toFixed(e), "兆")) + n
    );
  }),
  (exports.formatStock = function (e) {
    var c = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    return e.split(",").map(function (e) {
      var r,
        o = e.substr(0, e.indexOf(":"));
      if (!isNaN(o) || n(o)) {
        var u = t(o, e.substr(e.indexOf(":") + 1));
        return c
          ? ["usDJI", "usINX", "usIXIC", "usNDX", "usHXC", "usNBI"].includes(
              (r = u)
            )
            ? "us.".concat(r.slice(2))
            : r
          : u;
      }
      return e.replace(/:/g, "");
    });
  }),
  (exports.getSymbol = t),
  (exports.splitSymbol = function (t) {
    var n = t.slice(0, 2),
      e = ["sz", "sh", "hk", "us"].indexOf(n);
    return { market: -1 === e ? n : "".concat(e), scode: t.slice(2) };
  });
