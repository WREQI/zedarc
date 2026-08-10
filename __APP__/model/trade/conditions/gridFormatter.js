require("../../../app.js");
var t = require("../../../common/vendor.js"),
  r = require("../../../config/enum/condition.js"),
  e = require("./formatter.js");
(exports.orderPriceFormatter = function (t, e) {
  var c = r.PriceTypeObject[t],
    o = r.PriceTypeObject[e];
  return c || o
    ? c && o
      ? "".concat(o.text, "卖出/").concat(c.text, "买入")
      : c
      ? "".concat(c.text, "买入")
      : o
      ? "".concat(o.text, "卖出")
      : void 0
    : "";
}),
  (exports.quantityFormatter = function (r, c) {
    if (!r) return "";
    var o = e.unitFormatter(c);
    return "每笔"
      .concat(t.__CJS__export_default__.toCurrency(r, 0))
      .concat(o || "");
  }),
  (exports.statusFormatter = function (t) {
    return r.CondStatusText[t];
  }),
  (exports.triggerCondFormatter = function (t, e, c) {
    var o = c === r.GridType.Percent ? "%" : "";
    return t && e
      ? "上涨+".concat(t).concat(o, "卖出 / 下跌-").concat(e).concat(o, "买入")
      : t
      ? "上涨+".concat(t).concat(o, "卖出")
      : e
      ? "下跌-".concat(e).concat(o, "买入")
      : void 0;
  });
