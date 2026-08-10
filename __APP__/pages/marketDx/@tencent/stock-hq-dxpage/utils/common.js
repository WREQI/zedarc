var t = require("../../../../../common/vendor.js");
function o(t) {
  var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    e = Object.keys(o);
  return e.length > 0
    ? "".concat(t, "?").concat(
        e
          .map(function (t) {
            return "".concat(t, "=").concat(encodeURIComponent(o[t]));
          })
          .join("&")
      )
    : t;
}
(exports.addSign = function (t) {
  return t <= 0 ? t : "+".concat(t);
}),
  (exports.formatNum = function (t) {
    var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
      e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
      n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
      r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
      a = parseFloat(t),
      c = "";
    if (isNaN(a)) a = "--";
    else {
      if (r) {
        var i = Math.pow(10, o);
        a = parseInt(a * i, 10) / i;
      }
      o && (a = a.toFixed(o)), n && a > 0 && (c = "+");
    }
    return "".concat(c).concat(a).concat(e);
  }),
  (exports.getSubTitle = function (t) {
    var o,
      e =
        (null == (o = null == t ? void 0 : t.data) ? void 0 : o.summary) || {},
      n = e.sssl,
      r = e.pfsl;
    return (
      (r = "--" === r ? 0 : r || "--"),
      "上市"
        .concat((n = "--" === n ? 0 : n || "--"), "只，首日破发")
        .concat(r, "只")
    );
  }),
  (exports.goToMiniAppQuote = function (e, n) {
    e &&
      n &&
      t.wx$1.miniProgram.navigateTo({
        url: o("/pages/quote/quote", { market: e, scode: n }),
      });
  }),
  (exports.isNumber = function (t) {
    return /^([0-9]+\.?[0-9]*|-[0-9]+\.?[0-9]*)$/.test(t);
  }),
  (exports.setColor = function (t) {
    return (
      (t = parseFloat(t)),
      /^([0-9]+\.?[0-9]*|-[0-9]+\.?[0-9]*)$/.test(t)
        ? t > 0
          ? "quote-rise"
          : t < 0
          ? "quote-drop"
          : "quote-equal"
        : ""
    );
  });
