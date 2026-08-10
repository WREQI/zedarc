require("../../../../../@babel/runtime/helpers/Arrayincludes"),
  (exports.formatAmount = function (r) {
    var o =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "YUAN",
      e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2;
    if (!["YUAN", "WAN", "YI"].includes(o)) return r;
    if (isNaN(r)) return "--";
    var a = r > 0 ? "+" : r < 0 ? "-" : 0;
    r = Math.abs(r);
    var t = Math.pow(10, 8),
      c = Math.pow(10, 4);
    if (("WAN" === o ? (r *= c) : "YI" === o && (r *= t), r > t)) {
      var n = "亿";
      return (
        (r /= t) >= c && ((r /= c), (n = "万亿")),
        "".concat(a).concat(r.toFixed(e)).concat(n)
      );
    }
    return r > c
      ? "".concat(a).concat((r /= c).toFixed(e), "万")
      : "".concat(a).concat(r.toFixed(e), "元");
  }),
  (exports.formatNum = function (r) {
    var o = "".concat(r).replace(/%/g, "");
    return isNaN(o)
      ? r
      : (o = (o = parseFloat(o)).toFixed(2)) <= 0
      ? o
      : "+".concat(o);
  }),
  (exports.setColor = function (r, o) {
    var e = ""
      .concat(r)
      .replace(/%/g, "")
      .replace(/,/g, "")
      .replace(/亿/g, "")
      .replace(/万/g, "")
      .replace(/万亿/g, "");
    return isNaN(e)
      ? ""
      : 0 === parseFloat(e)
      ? "color-equal"
      : parseFloat(e) > 0
      ? o
        ? "color-rise"
        : "color-drop"
      : parseFloat(e) < 0
      ? o
        ? "color-drop"
        : "color-rise"
      : "color-equal";
  });
