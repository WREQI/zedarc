var e = require("../../../../@babel/runtime/helpers/objectSpread2");
require("../../../../app.js");
var r = require("../formatter.js"),
  t = require("../debtFormatter.js"),
  o = require("../profitFormatter.js"),
  a = require("../../../../config/enum/condition.js"),
  i = require("./enum.js"),
  n = require("../../../debt/debtAutoOrderTime.js");
(exports.transferRepo = function (e) {
  var m = t.orderRateFormatter({
      incomeRate: e.income_rate,
      incomeRateType: e.income_rate_type,
    }),
    s = t.orderPriceFormatter({
      orderPriceType: e.order_price_type,
      remainAssets: e.remain_assets,
    }),
    d = o.orderProfitFormatter({
      run_day: e.run_day,
      trade_num: e.trade_num,
      total_income: e.total_income,
    });
  return {
    name: e.stock_name,
    type_desc: e.type_desc || a.CondTags.DEBT,
    market: e.trade_market,
    scode: e.stock_code,
    triggerCondText:
      n.isDebtAutoOrderNeedSetTime() && e.invest_time
        ? "每交易日".concat(e.invest_time)
        : "每交易日15:00~15:30",
    orderPriceText: m,
    amountText: s,
    amountLabel: i.AmountLabel.Price,
    timeText: r.timeFormatter(e.end_time),
    profit: d,
  };
}),
  (exports.transferRepoBase = function () {
    var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return e(
      e({}, r),
      {},
      {
        name: r.stock_name,
        type_desc: r.type_desc || a.CondTags.DEBT,
        market: r.trade_market,
        scode: r.stock_code,
        invalid_time: r.end_time,
      }
    );
  });
