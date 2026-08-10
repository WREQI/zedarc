require("../../../app.js");
var t = require("../../../common/vendor.js"),
  r = require("../../../config/enum/condition.js"),
  e = require("./formatter.js");
(exports.orderPriceFormatter = function (t) {
  var e;
  return "".concat(
    (null == (e = r.PriceTypeObject[t]) ? void 0 : e.text) || ""
  );
}),
  (exports.quantityFormatter = function (r, n) {
    if (!r) return "";
    var c = e.unitFormatter(n);
    return ""
      .concat(t.__CJS__export_default__.toCurrency(r, 0))
      .concat(c || "");
  }),
  (exports.statusFormatter = function (t) {
    return r.CondStatusText[t];
  }),
  (exports.triggerCondFormatter = function (t, e, n) {
    var c = (function (t) {
      if (!t || "1" !== t.zyPullbackFlag || !t.zyPullbackValue) return "";
      var e = t.zyPullbackType === r.LimitType.Percent ? "%" : "";
      return "回落".concat(t.zyPullbackValue).concat(e);
    })(n);
    return t && e
      ? "≥".concat(t).concat(c, "止盈 / ≤").concat(e, "止损")
      : t
      ? "≥".concat(t).concat(c, "止盈")
      : e
      ? "≤".concat(e, "止损")
      : "";
  });
