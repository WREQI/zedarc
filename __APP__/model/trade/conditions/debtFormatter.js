require("../../../app.js");
var e = require("../../debt/useDebtAutoOrder.js"),
  r = require("../../../common/vendor.js");
(exports.orderPriceFormatter = function (t) {
  var o = "";
  return (
    t.orderPriceType === e.DEBT_PRICE_TYPE.ALL
      ? (o = "全部可用资金")
      : t.orderPriceType === e.DEBT_PRICE_TYPE.SAVE &&
        (o = t.remainAssets
          ? "保留".concat(
              r.__CJS__export_default__.toCurrency(t.remainAssets),
              "元，其余下单"
            )
          : "部分预留资金"),
    o
  );
}),
  (exports.orderRateFormatter = function (r) {
    var t = "";
    return (
      r.incomeRateType === e.DEBT_RATE_TYPE.REAL
        ? (t = "实时利率")
        : r.incomeRateType === e.DEBT_RATE_TYPE.LEAST &&
          (t = r.incomeRate ? "≥".concat(r.incomeRate, "%") : "--"),
      t
    );
  });
