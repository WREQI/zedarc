function e(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
  return void 0 === e
    ? ""
    : ((e = Number(e)), isNaN(e) ? "" : 0 == t ? ~~e : e.toFixed(t));
}
function t(t) {
  return null == t
    ? ""
    : (/%$/.test(t.toString()) && (t = parseInt(t, 10)),
      "".concat(t > 0 ? "+" : "").concat(e(t, 2), "%"));
}
require("../../../../../../../../@babel/runtime/helpers/Arrayincludes"),
  (exports.flucColor = function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
    if (null == e) return "";
    /%$/.test(e.toString()) && (e = parseInt(e, 10) / 100);
    var n = "green";
    return e > 0 ? (n = "red") : 0 == e && (n = "flat"), t + n;
  }),
  (exports.fundField = function (n, r) {
    return void 0 === n
      ? "--"
      : "price" === r
      ? e(n, 2)
      : "change_percent" === r
      ? t(n)
      : "turnover_ratio" === r
      ? (function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
          return void 0 === e
            ? ""
            : ((e = Number(e)),
              isNaN(e) ? "" : "".concat((100 * e).toFixed(t), "%"));
        })(n / 100)
      : "turnover_amount" === r
      ? "".concat((n / 1e4).toFixed(1), "万手")
      : "market_cap" === r
      ? "".concat(n.toFixed(1), "亿")
      : ("turnover_money" === r && (n *= 1e4),
        ["main_net_inflow", "turnover_money", "flow"].includes(r)
          ? ((n = Number(n)),
            (n =
              Math.abs(n) < 1e4
                ? n.toFixed(2)
                : Math.abs(n) < 1e8
                ? "".concat((n / 1e4).toFixed(1), "万")
                : "".concat((n / 1e8).toFixed(1), "亿")))
          : n);
  }),
  (exports.priceChangePercent = t),
  (exports.stockNameFix = function (e) {
    for (
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 8,
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = e.split(""),
        o = 0,
        i = 0;
      i < r.length;
      i++
    )
      if ((/[\u4e00-\u9fa5]/.test(r[i]) ? (o += 2) : (o += 1), o > t)) {
        e = n
          ? "".concat(r.slice(0, i - 1).join(""), "...")
          : r.slice(0, i).join("");
        break;
      }
    return e;
  });
