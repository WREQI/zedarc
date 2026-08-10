require("../../../../app.js");
var e = require("../formatter.js"),
  t = require("./enum.js");
exports.transferInvest = function (r, a) {
  var i = "invest_quantity",
    n = r[i]
      ? e.quantityFormatter(r[i], r.stock_cls)
      : e.priceFormatter(r.max_amount),
    m = r[i] ? t.AmountLabel.Quantity : t.AmountLabel.Price;
  return {
    name: r.name,
    type_desc: r.type_desc,
    market: r.market,
    scode: r.scode,
    triggerCondText: r.order_cond,
    orderPriceText: e.orderPriceFormatter(r.buy_price_type),
    amountLabel: m,
    amountText: n,
    timeText: e.timeFormatter(r.invalid_time || r.end_time),
  };
};
