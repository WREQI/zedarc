var e = require("../../../@babel/runtime/helpers/objectSpread2"),
  t = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../@babel/runtime/helpers/asyncToGenerator"),
  r = require("../../../@babel/runtime/helpers/defineProperty");
require("../../../app.js");
var u = require("../../../common/vendor.js"),
  o = require("../../../cgi/trade/stock.js"),
  i = require("../../../cgi/trade/quote.js"),
  c = require("../../../domain/entities/trade-stock/trade-account.js"),
  s = require("../../../domain/entities/trade-stock/trade-auth.js"),
  a = require("../../../domain/entities/trade-stock/stock-order.js"),
  l = require("../../../domain/entities/trade-stock/service/pre-check.js"),
  d = require("../../../domain/applications/trade-stock/create-stock.js"),
  v = require("../useStockSetting.js"),
  f = require("../../../stores/app/useMode.js"),
  _ = require("../../../config/enum.js"),
  A = require("../../../domain/entities/utils.js"),
  T = require("../../../utils/number.js"),
  S = require("../../../config/key.js");
exports.useTradeStockStore = function () {
  var m,
    p = v.useStockSetting().setting,
    k = u.storeToRefs(f.useModeStore()).simpleMode,
    g = new o.TradeStockService(),
    q = new i.TradeQuoteService(),
    E = u.reactive(new c.TradeAccount(g)),
    R = u.reactive(new s.AccountTradeAuth()),
    h = u.reactive(new a.StockOrder(g)),
    j = u.ref({}),
    y = new l.OrderCheckService(h, E, R),
    G = u.computed(function () {
      var e = p.value.filter(function (e) {
        return "1" === e.is_open || !(!k.value || "1/3" !== e.stock_shift);
      });
      return E.getQuickAmount(j.value, e, h.orderType);
    });
  function P(e) {
    var t,
      n,
      r,
      u,
      o,
      i = d.createStock("unknow", e);
    (null ==
    (r =
      null == (n = null == (t = j.value) ? void 0 : t.quote) ? void 0 : n.info)
      ? void 0
      : r.secu_code) ===
      (null == (u = null == e ? void 0 : e.info) ? void 0 : u.secu_code) &&
      (null == (o = j.value) ? void 0 : o.riskInfo) &&
      (i.riskInfo = j.value.riskInfo),
      (j.value = i),
      y.setStock(i);
  }
  function b(e) {
    var t,
      n,
      r,
      u,
      o,
      i,
      c = (null == (t = null == e ? void 0 : e.info) ? void 0 : t.class) || "",
      s = d.createStock(c, e);
    (null ==
    (u =
      null == (r = null == (n = j.value) ? void 0 : n.quote) ? void 0 : r.info)
      ? void 0
      : u.secu_code) ===
      (null == (o = null == e ? void 0 : e.info) ? void 0 : o.secu_code) &&
      (null == (i = j.value) ? void 0 : i.riskInfo) &&
      (s.riskInfo = j.value.riskInfo),
      (j.value = s),
      y.setStock(s);
  }
  function D(e, t) {
    (e.secu_info = e.info),
      (e.secu_quote = e.quote),
      (e.secu_info.secu_name = e.info.name),
      (e.secu_info.secu_cls = e.info.class),
      (e.secu_info.secu_code = t),
      I(e);
  }
  function I(e) {
    var t;
    (e.secu_info.spread = +e.secu_info.spread || 0.01),
      (e.secu_info.spreadAcc =
        e.secu_info.spread && e.secu_info.spread > 0
          ? parseFloat(String(1 / e.secu_info.spread)).toFixed(0).length - 1
          : 2),
      (e.secu_info.trd_unit =
        +e.secu_info.trd_unit ||
        (function (e) {
          var t = r({}, _.MARKET.BJ, 1);
          return t[e] ? t[e] : 100;
        })(null == (t = e.secu_info) ? void 0 : t.market));
  }
  var Y,
    w,
    F,
    L =
      (r((m = {}), _.STRATEGY.MANUAL, {
        getPrice: function () {
          var e, t, n, r, u, o, i;
          return h.isBuyAction &&
            !A.isZeroValue(
              null == (t = null == (e = j.value) ? void 0 : e.five_trans)
                ? void 0
                : t.mcjg1
            )
            ? j.value.five_trans.mcjg1
            : h.isSellAction &&
              !A.isZeroValue(
                null == (r = null == (n = j.value) ? void 0 : n.five_trans)
                  ? void 0
                  : r.mrjg1
              )
            ? j.value.five_trans.mrjg1
            : (null == (u = j.value.quote) ? void 0 : u.isFrontDefaultStock)
            ? h.price
            : null == (i = null == (o = j.value) ? void 0 : o.secu_quote)
            ? void 0
            : i.dqj;
        },
      }),
      r(m, _.STRATEGY.LATEST, {
        getPrice: function () {
          var e, t, n, r;
          return (
            (null == (t = null == (e = j.value) ? void 0 : e.secu_quote)
              ? void 0
              : t.dqj) ||
            (null == (r = null == (n = j.value) ? void 0 : n.secu_quote)
              ? void 0
              : r.dqj)
          );
        },
      }),
      r(m, _.STRATEGY.BUY, {
        getPrice: function () {
          var e, t, n, r;
          return (
            (null == (t = null == (e = j.value) ? void 0 : e.five_trans)
              ? void 0
              : t.mrjg1) ||
            (null == (r = null == (n = j.value) ? void 0 : n.secu_quote)
              ? void 0
              : r.dqj)
          );
        },
      }),
      r(m, _.STRATEGY.SELL, {
        getPrice: function () {
          var e, t, n, r;
          return (
            (null == (t = null == (e = j.value) ? void 0 : e.five_trans)
              ? void 0
              : t.mcjg1) ||
            (null == (r = null == (n = j.value) ? void 0 : n.secu_quote)
              ? void 0
              : r.dqj)
          );
        },
      }),
      r(m, _.STRATEGY.AFTER_CLOSED, {
        getPrice: function () {
          var e, t;
          return null == (t = null == (e = j.value) ? void 0 : e.secu_quote)
            ? void 0
            : t.dqj;
        },
      }),
      m);
  return {
    tradeAccount: E,
    tradeAuth: R,
    order: h,
    stock: j,
    orderCheckService: y,
    stockSetting: p,
    quickAmount: G,
    strategyMap: L,
    fetchQuotes:
      ((F = n(
        t().mark(function e(n, r) {
          var u, o;
          return t().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.prev = 0), (e.next = 3), q.fetchQuotes(n);
                  case 3:
                    return (u = e.sent), e.abrupt("return", (b(u), u));
                  case 7:
                    if (((e.prev = 7), (e.t0 = e.catch(0)), r)) {
                      e.next = 11;
                      break;
                    }
                    throw e.t0;
                  case 11:
                    return (
                      (o = {
                        isFrontDefaultStock: !0,
                        info: {
                          name: r.name,
                          market: r.market,
                          secu_code: r.code,
                          spread: T.getStockFactor(r.defaultDqj || ""),
                        },
                      }),
                      e.abrupt("return", (D(o, n.code), P(o), o))
                    );
                  case 13:
                  case "end":
                    return e.stop();
                }
            },
            e,
            null,
            [[0, 7]]
          );
        })
      )),
      function (e, t) {
        return F.apply(this, arguments);
      }),
    handleFetchQuotes: b,
    handleFetchQuotesDefault: P,
    mapStockinfo: D,
    mapStockinfoFromPushToReq: function (t) {
      if (t.secu_info) {
        var n = e({}, t.secu_info);
        (n.name = t.secu_info.secu_name || t.info.name),
          (n.class = t.secu_info.secu_cls || t.info.class),
          (n.status = t.secu_info.secu_status || t.info.status),
          delete n.secu_name,
          delete n.secu_cls,
          delete n.secu_status,
          (t.info = n);
      }
    },
    formatSecuInfo: I,
    fetchTradeAccount:
      ((w = n(
        t().mark(function e(n) {
          var r;
          return t().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), E.fetchAccountInfo(n);
                case 2:
                  return (
                    (r = e.sent),
                    e.abrupt(
                      "return",
                      (h.resetTradeSetInfo(),
                      h.setTradeSetInfo(r),
                      r.stock_setting && (p.value = r.stock_setting || []),
                      r)
                    )
                  );
                case 4:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )),
      function (e) {
        return w.apply(this, arguments);
      }),
    reloadTradeAccount:
      ((Y = n(
        t().mark(function e(n) {
          var r;
          return t().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), E.fetchAccountInfo(n, !0);
                case 2:
                  return (
                    (r = e.sent),
                    e.abrupt(
                      "return",
                      (r.stock_setting && (p.value = r.stock_setting || []), r)
                    )
                  );
                case 4:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      )),
      function (e) {
        return Y.apply(this, arguments);
      }),
    fetchPositionAndOrder: function () {
      return E.fetchPositionAndOrder();
    },
    getQuickAmountValue: function (e, t) {
      return G.value[t][e] || "--";
    },
    resetPriceStrategy: function () {
      var e;
      h.strategy = _.STRATEGY.MANUAL;
      var t = _.STRATEGY.MANUAL;
      try {
        var n;
        (t =
          null !==
            (n = (u.index.getStorageSync(S.LAST_TRADE_PRICE_STRATEGY) || {})
              .lastPriceStrategy) && void 0 !== n
            ? n
            : _.STRATEGY.MANUAL) === _.STRATEGY.AFTER_CLOSED &&
          u.index.removeStorageSync(S.LAST_TRADE_PRICE_STRATEGY);
      } catch (e) {}
      t === _.STRATEGY.AFTER_CLOSED
        ? (h.strategy = _.STRATEGY.MANUAL)
        : (h.strategy = t),
        [_.MARKET_STATE.AFTER_PREPARE, _.MARKET_STATE.AFTER_TRADING].indexOf(
          null == (e = null == j ? void 0 : j.value) ? void 0 : e.market_state
        ) > -1 && (h.strategy = _.STRATEGY.AFTER_CLOSED);
    },
    initOrderInfo: function (e, t) {
      var n, r, u;
      (h.price =
        (null == (n = L[h.strategy]) ? void 0 : n.getPrice()) ||
        (null == (u = null == (r = j.value) ? void 0 : r.secu_quote)
          ? void 0
          : u.dqj)),
        t !== _.TRADE_MODE.STANDARD || e
          ? (h.amount = h.isBuyAction ? "0" : String(j.value.minAmount))
          : (h.amount = String(j.value.minAmount)),
        (h.manualMoney = "");
    },
  };
};
