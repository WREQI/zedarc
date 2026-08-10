var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../@babel/runtime/helpers/Arrayincludes"),
  require("../../../app.js");
var n = require("../../../common/vendor.js"),
  t = require("../../../config/enum.js");
require("../../../config/enum/trade.js"), require("../../../service/broker.js");
var o = require("../../../utils/market.js"),
  c = require("../../../domain/applications/trade-stock/pre-condition-check.js"),
  a = require("../../../service/stat/mp-weixin.js");
require("../../../domain/entities/trade-stock/stock-order.js"),
  require("../../../domain/entities/trade-stock/condition-order.js"),
  require("./ConditionBase.js");
var i = require("../../../common/components/Dialog/index.js"),
  s = require("../../../domain/applications/trade-stock/pre-check.js"),
  u = require("../../../stores/user/useUserinfo.js"),
  d = require("../check-handlers/useRiskTips.js"),
  l = require("../check-handlers/auth-handlers.js"),
  m = require("../../../stores/app/useMode.js"),
  k = require("./useCondCheck.js"),
  h = require("../../common/useServerTime.js"),
  f = require("../../../config/broker/11100/index.js");
exports.useConditionCheck = function (p) {
  var v,
    g = p.conditionOrder,
    C = p.checkService,
    x = p.stockInfo,
    T = null == (v = n.getCurrentInstance()) ? void 0 : v.proxy,
    _ = u.useUserinfoStore().userinfo,
    H = void 0 === _ ? {} : _,
    P = m.useModeStore(),
    S = n.storeToRefs(P).simpleMode,
    R = k.useCondCheck(C).checkCompositeSync;
  function D(e) {
    return (
      i.Dialog({
        title: "".concat(g.orderTypeName, "失败"),
        message: e.retmsg,
        context: T,
      }),
      Promise.reject(e)
    );
  }
  var j = d.useRiskTips({
    checkService: C,
    stock: x,
    statPrefix: g.isInvestCondOrder ? "trade.invest" : "trade.price",
    skipBrokerStockRisk: function () {
      return !g.isInvestCondOrder && g.tradeType === t.ACTION.SELL;
    },
  }).checkTradeRiskHandler;
  function q() {
    var e,
      r = H.shareholdercards,
      t = void 0 === r ? [] : r,
      c = (
        (null == (e = f.brokerConfig.trade)
          ? void 0
          : e.checkShareHolderCards) || {}
      ).canBindOnline,
      a = void 0 !== c && c,
      s = f.brokerConfig.trade.canContact || !1;
    if (0 === t.length || n.isEmpty(H)) return !0;
    var u =
        t.findIndex(function (e) {
          return e.market === o.MARKET_CODE_SH;
        }) > -1,
      d =
        t.findIndex(function (e) {
          return e.market === o.MARKET_CODE_SZ;
        }) > -1,
      l = "我知道了";
    a ? (l = "添加股东卡") : s && (l = "联系券商客服");
    var m = "";
    g.market !== o.MARKET_CODE_SH || u
      ? g.market !== o.MARKET_CODE_SZ || d || (m = "深市")
      : (m = "沪市");
    var k = "请联系"
      .concat(f.brokerConfig.base.name, "：客服电话")
      .concat(f.brokerConfig.base.tel);
    return (
      !m ||
      (i.Dialog({
        context: T,
        title: "无法交易",
        message: "当前未开通".concat(m, "股东卡。如有需要，").concat(k),
        messageAlign: "left",
        showCancelButton: a || s,
        cancelButtonText: "我知道了",
        confirmButtonText: l,
        onConfirm: function () {
          if (a) T.$router.push({ name: "BizShareHolderBind" });
          else if (s) {
            var e = "".concat(f.brokerConfig.base.tel).replace(/-/g, "");
            T.$sdk.makePhoneCall(e);
          }
        },
      }),
      !1)
    );
  }
  var w = k.useCondCheck({ checkService: C, stockInfo: x }).checkStock;
  function E() {
    return new Promise(function (e, r) {
      "1" !== H.trade_limit
        ? x.value.secu_info.status !== t.STOCK_STATE.DELISTED
          ? e(!0)
          : r("股票已退市")
        : r("交易受限");
    });
  }
  function I() {
    return R([w]);
  }
  var b,
    A,
    O = h.useServerTime().checkTransferTime;
  function y(e) {
    return new Promise(function (r, n) {
      return i.Dialog({ context: T, message: e.retmsg }), n("input error");
    });
  }
  function B(e) {
    return new Promise(function (r, n) {
      if (e.stop)
        return (
          i.Dialog({ context: T, message: e.retmsg }),
          a.stat.click("trade.trade.stop.amount_error"),
          n("amount_error")
        );
      r(!0);
    });
  }
  function L(e) {
    return new Promise(function (e, r) {
      e(!0);
    });
  }
  function M(e) {
    return new Promise(function (e, r) {
      e(!0);
    });
  }
  function N(e) {
    return new Promise(function (r, n) {
      [
        "kc_less_min_amount",
        "kc_onetime_sell",
        "amount_partial_max_noodd",
        "amount_partial_max_hasodd",
      ].includes(null == e ? void 0 : e.retcode)
        ? i.Dialog({
            context: T,
            message: e.retmsg,
            confirmButtonText: "调整数量",
            cancelButtonText: "我知道了",
            showCancelButton: !0,
            onConfirm: function () {
              (g.amount = e.data.suggestAmount),
                a.stat.click("trade.trade.stop.adjust_amount"),
                n(e.retcode);
            },
            onCancel: function () {
              n(e.retcode);
            },
          })
        : i.Dialog({
            context: T,
            message: null == e ? void 0 : e.retmsg,
            confirmButtonText: "我知道了",
            cancelButtonText: "仍要卖出",
            showCancelButton: !0,
            onConfirm: function () {
              n("取消");
            },
            onCancel: function () {
              r(!0), a.stat.click("trade.trade.stop.amount_error_confrim");
            },
          }),
        a.stat.click("trade.trade.stop.amount_error");
    });
  }
  function K(e) {
    return new Promise(function (r, n) {
      switch (null == e ? void 0 : e.retcode) {
        case "order-status-change":
          return (
            (function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { retmsg: "该条件单状态可能已变更，您可确认后重新创建" };
              i.Dialog({
                context: T,
                title: "".concat(g.orderTypeName, "失败"),
                message: e.retmsg,
                confirmButtonText: "重新创建",
                cancelButtonText: "知道了",
                showCancelButton: !0,
                onConfirm: function () {
                  T.$router.replace({
                    name: "TradeStock",
                    query: {
                      code: code.value,
                      market: market.value,
                      name: encodeURIComponent(name.value),
                      order_type: g.isInvestCondOrder
                        ? t.ORDER_TYPES.INVEST
                        : t.ORDER_TYPES.PRICE,
                    },
                  });
                },
              });
            })(),
            n()
          );
        case "not-trade-time":
          return i.Dialog({ context: T, message: e.retmsg }), n();
      }
    });
  }
  return {
    checkPrice:
      ((A = r(
        e().mark(function t() {
          return e().wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  if (q()) {
                    t.next = 2;
                    break;
                  }
                  return t.abrupt(
                    "return",
                    Promise.reject({
                      retcode: "NO_SHAREHOLDER_CARD",
                      retmsg: "没有股东卡交易权限",
                    })
                  );
                case 2:
                  return (t.next = 4), s.handlerPromise(I, D);
                case 4:
                  return (
                    (t.next = 6),
                    r(
                      e().mark(function r() {
                        var t, o, a, i;
                        return e().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  S.value || n.index.showLoading({ title: "" }),
                                  (e.next = 3),
                                  O()
                                );
                              case 3:
                                return (
                                  (t = e.sent),
                                  (o = t.date),
                                  (a = t.isTradeDay),
                                  (i = c.check({
                                    checkInputCompleteHandler: y,
                                    checkTradeRiskHandler: j,
                                    checkCanTradeHandler: E,
                                    checkAuthHandle: l.checkAuthHandle,
                                    checkOrderPurchaseQuantityHandler: B,
                                    checkIsInLimitChgRangeHandler: L,
                                    checkSellAmountInMaxLimitHandler: M,
                                    checkPartialAmountHandler: N,
                                    checkValidDayHandler: K,
                                  })),
                                  (e.next = 9),
                                  i(C, o, a, H)
                                );
                              case 9:
                                n.index.hideLoading();
                              case 10:
                              case "end":
                                return e.stop();
                            }
                        }, r);
                      })
                    )()
                  );
                case 6:
                case "end":
                  return t.stop();
              }
          }, t);
        })
      )),
      function () {
        return A.apply(this, arguments);
      }),
    checkInvest:
      ((b = r(
        e().mark(function t() {
          return e().wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  if (q()) {
                    t.next = 2;
                    break;
                  }
                  return t.abrupt(
                    "return",
                    Promise.reject({
                      retcode: "NO_SHAREHOLDER_CARD",
                      retmsg: "没有股东卡交易权限",
                    })
                  );
                case 2:
                  return (
                    (t.next = 4), s.handlerPromise(C.checkInvestCond.bind(C), D)
                  );
                case 4:
                  return (t.next = 6), s.handlerPromise(I, D);
                case 6:
                  return (
                    (t.next = 8),
                    r(
                      e().mark(function r() {
                        var t, o, a, i;
                        return e().wrap(function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  S.value || n.index.showLoading({ title: "" }),
                                  (e.next = 3),
                                  O()
                                );
                              case 3:
                                return (
                                  (t = e.sent),
                                  (o = t.date),
                                  (a = t.isTradeDay),
                                  (i = c.check({
                                    checkInputCompleteHandler: function () {
                                      return Promise.resolve();
                                    },
                                    checkTradeRiskHandler: j,
                                    checkCanTradeHandler: E,
                                    checkAuthHandle: l.checkAuthHandle,
                                    checkOrderPurchaseQuantityHandler:
                                      function () {
                                        return Promise.resolve();
                                      },
                                    checkIsInLimitChgRangeHandler: function () {
                                      return Promise.resolve();
                                    },
                                    checkSellAmountInMaxLimitHandler:
                                      function () {
                                        return Promise.resolve();
                                      },
                                    checkPartialAmountHandler: function () {
                                      return Promise.resolve();
                                    },
                                    checkValidDayHandler: function () {
                                      return Promise.resolve();
                                    },
                                  })),
                                  (e.next = 9),
                                  i(C, o, a, H)
                                );
                              case 9:
                                n.index.hideLoading();
                              case 10:
                              case "end":
                                return e.stop();
                            }
                        }, r);
                      })
                    )()
                  );
                case 8:
                case "end":
                  return t.stop();
              }
          }, t);
        })
      )),
      function () {
        return b.apply(this, arguments);
      }),
    checkStock: w,
  };
};
