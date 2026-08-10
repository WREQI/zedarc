require("../../../@babel/runtime/helpers/Arrayincludes"),
  require("../../../app.js");
var r = require("../../../utils/market.js"),
  e = require("../../../config/enum.js");
require("../../../service/broker.js");
var t = require("../../../config/broker/11100/index.js");
function n(r) {
  for (var e = 0; e < r.length; e++) {
    var t = (0, r[e])();
    if (!t || !t[0]) return t;
  }
  return [!0];
}
function u(r) {
  var t,
    n = null == (t = null == r ? void 0 : r.secu_info) ? void 0 : t.status;
  return n && n !== e.STOCK_STATE.NORMAL
    ? [
        !1,
        {
          retmsg: "该股票当前".concat(
            e.TIPS_STOCK_STATE[n] || "状态",
            "不支持设置条件单"
          ),
        },
      ]
    : [!0];
}
function c(r) {
  return r
    ? [e.MARKET.HA, e.MARKET.SA].includes(r)
      ? [!0]
      : [!1, { retcode: "NOT_SUPPORT_MARKET", retmsg: "该标的暂不支持条件单" }]
    : [!0];
}
(exports.checkCompositeSync = n),
  (exports.checkMarket = c),
  (exports.checkStock = function (e) {
    var s = e.stockCls,
      i = e.isST,
      o = void 0 !== i && i,
      S = e.market,
      T = e.quote;
    return n([
      function () {
        return c(S);
      },
      function () {
        return s
          ? (function (e) {
              var n = e.stockCls,
                u = e.isST,
                c = [
                  r.MARKET_CLASS.A,
                  r.MARKET_CLASS.S,
                  r.MARKET_CLASS.NG,
                  r.MARKET_CLASS.G,
                  r.MARKET_CLASS.C,
                  r.MARKET_CLASS.F,
                  r.MARKET_CLASS.B,
                ],
                s = t.brokerConfig.trade.condUnsupportType || [],
                i = u && s.includes("ST");
              return !c.includes(n) || s.includes(n) || i
                ? [
                    !1,
                    {
                      retcode: "NOT_SUPPORT_STOCK",
                      retmsg: "该标的不支持设置价格条件单",
                    },
                  ]
                : [!0];
            })({ stockCls: s, isST: o })
          : [!0];
      },
      function () {
        return u(T);
      },
    ]);
  }),
  (exports.checkStockStatus = u);
