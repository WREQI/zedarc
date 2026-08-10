require("../../../../app.js");
var e = require("../formatter.js"),
  t = require("./enum.js");
exports.transferPrice = function (r) {
  return {
    name: r.name,
    type_desc: r.type_desc,
    market: r.market,
    scode: r.scode,
    triggerCondText: r.order_cond,
    orderPriceText: e.priceFormatter(r.order_price),
    amountText: e.quantityFormatter(r.quantity, r.stock_cls),
    amountLabel: t.AmountLabel.Quantity,
    timeText: e.timeFormatter(r.invalid_time || r.end_time),
  };
};
