require("../../app.js");
var e = (function (e) {
    return (
      (e[(e.entrust = 1)] = "entrust"),
      (e[(e.complete = 2)] = "complete"),
      (e[(e.recently = 3)] = "recently"),
      (e[(e.filterEntrustByStock = 4)] = "filterEntrustByStock"),
      (e[(e.filterCompleteByStock = 5)] = "filterCompleteByStock"),
      e
    );
  })(e || {}),
  t = (function (e) {
    return (
      (e[(e.all = 0)] = "all"),
      (e[(e.entrust = 1)] = "entrust"),
      (e[(e.finance = 2)] = "finance"),
      e
    );
  })(t || {}),
  n = (function (e) {
    return (
      (e[(e.all = 0)] = "all"),
      (e[(e.stockFund = 1)] = "stockFund"),
      (e[(e.debt = 2)] = "debt"),
      (e[(e.balance = 3)] = "balance"),
      (e[(e.stock = 4)] = "stock"),
      (e[(e.fund = 5)] = "fund"),
      (e[(e.bond = 6)] = "bond"),
      e
    );
  })(n || {}),
  r = (function (e) {
    return (
      (e[(e.all = 0)] = "all"),
      (e[(e.buy = 1)] = "buy"),
      (e[(e.sell = 2)] = "sell"),
      (e[(e.finance = 3)] = "finance"),
      (e[(e.playNew = 4)] = "playNew"),
      (e[(e.etfPurchase = 5)] = "etfPurchase"),
      (e[(e.other = 99)] = "other"),
      e
    );
  })(r || {}),
  s = (function (e) {
    return (e.TRADE = "trade"), (e.BUSINESS = "business"), e;
  })(s || {});
(exports.BusinessType = n),
  (exports.DataType = t),
  (exports.ETYPE = s),
  (exports.ReqAction = e),
  (exports.TradeType = r),
  (exports.TypeTextMap = {
    trade: {
      0: "全部",
      1: "买入",
      2: "卖出",
      3: "理财",
      4: "打新",
      5: "ETF认购",
      99: "其他",
    },
    business: {
      0: "全部",
      1: "股票/基金",
      2: "通用回购",
      3: "余额增值",
      4: "股票",
      5: "基金",
      6: "债券",
    },
  });
