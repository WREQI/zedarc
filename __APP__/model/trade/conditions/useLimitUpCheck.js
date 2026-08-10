var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../@babel/runtime/helpers/slicedToArray"),
  n = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js");
var t = require("../../../common/vendor.js");
require("../../../config/enum.js"),
  require("../../../domain/entities/trade-stock/stock-order.js"),
  require("../../../domain/entities/trade-stock/condition-order.js"),
  require("../../../service/broker.js"),
  require("./LimitUpCondition.js");
var i = require("../../../common/components/Dialog/index.js"),
  u = require("../../../domain/applications/trade-stock/pre-check.js");
require("../../../config/enum/trade.js");
var o = require("./limit-up-utils.js"),
  c = require("./useCondCheck.js"),
  s = require("../../../stores/user/useUserinfo.js"),
  a = require("../check-handlers/auth-handlers.js"),
  l = require("../check-handlers/check-shareholders-handler.js"),
  d = require("../check-handlers/useRiskTips.js"),
  m = require("../../common/useServerTime.js");
exports.useConditionCheck = function (h) {
  var v,
    k,
    f = h.conditionOrder,
    p = h.checkService,
    q = h.stockInfo,
    g = h.tradeAccount,
    x = null == (v = t.getCurrentInstance()) ? void 0 : v.proxy,
    b = s.useUserinfoStore(),
    j = t.storeToRefs(b).userinfo,
    y = t.ref([]),
    T = t.reactive({ entrust: !1 }),
    S = c.useCondCheck({ checkService: p }),
    C = S.checkValidDay,
    _ = S.checkCompositeSync,
    A = d.useRiskTips({
      checkService: p,
      stock: q,
      statPrefix: "trade.limit-up",
    }).checkTradeRiskHandler;
  function P() {
    var e;
    return o.checkSupportType(
      null == (e = q.value.quote) ? void 0 : e.stock_cls,
      q.value.isST
    );
  }
  function w(e) {
    return i.Dialog({ message: e.retmsg, context: x }), Promise.reject(e);
  }
  function N(e) {
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
                context: x,
                title: "涨停买入条件单".concat(
                  f.isUpdate ? "修改" : "创建",
                  "失败"
                ),
                message: e.retmsg,
                confirmButtonText: "重新创建",
                cancelButtonText: "知道了",
                showCancelButton: !0,
                onConfirm: function () {
                  null == x ||
                    x.$router.replace({
                      name: "LimitUpCondition",
                      query: { name: f.name, code: f.code, market: f.market },
                    });
                },
              });
            })(),
            n({ retcode: "COND_STATUS_CHANGE", retmsg: "条件单状态可能变更" })
          );
        case "not-trade-time":
          return w(e);
      }
    });
  }
  function R(e) {
    return l.checkShareHoldersHandler(e, {
      browStat: "trade.limitup.holderdialog.brow",
      confirmStat: "trade.limitup.holderdialog.confirm",
    });
  }
  function O() {
    return U.apply(this, arguments);
  }
  function U() {
    return (U = n(
      e().mark(function r() {
        var n, i, u, o, c;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (
                  ((u = (function () {
                    var e,
                      r = null == (e = q.value.secu_quote) ? void 0 : e.dqj;
                    return r && t.isNumber(+r) ? r : 0;
                  })()),
                  t.isNumber(+u) &&
                    t.isNumber(
                      +(null ==
                      (i = null == (n = q.value.quote) ? void 0 : n.info)
                        ? void 0
                        : i.price_ceiling)
                    ))
                ) {
                  e.next = 3;
                  break;
                }
                return e.abrupt("return");
              case 3:
                return (
                  (o = +q.value.quote.info.price_ceiling <= +u),
                  (e.next = 6),
                  m.useServerTime().checkConditionRunningTime()
                );
              case 6:
                (c = e.sent),
                  o &&
                    0 === y.value.length &&
                    c &&
                    y.value.push("当前股票已经触达涨停，可能会立即触发");
              case 8:
              case "end":
                return e.stop();
            }
        }, r);
      })
    )).apply(this, arguments);
  }
  function D() {
    var e, r, n;
    return isNaN(
      +(null == (r = null == (e = q.value.quote) ? void 0 : e.info)
        ? void 0
        : r.price_ceiling)
    ) || +(null == (n = q.value.quote) ? void 0 : n.info.price_ceiling) <= 0
      ? [!1, { retmsg: "新上市股票暂不支持" }]
      : [!0];
  }
  function H(e) {
    return (
      t.index.showToast({ title: e.retmsg, icon: "none" }), Promise.reject(e)
    );
  }
  function I() {
    var e = "请完整填写条件单参数";
    Object.keys(T).forEach(function (e) {
      return (T[e] = !1);
    });
    var n =
        f.isAmountMode && !f.maxAmount
          ? [!1, { retmsg: "请输入委托金额" }]
          : "" === f.maxAmount && "" === f.investQuantity
          ? [!1, { retmsg: "请输入委托数量" }]
          : [!0],
      t = r(n, 2),
      i = t[0],
      u = t[1];
    i ||
      ((T.entrust = !0),
      (e = (null == u ? void 0 : u.retmsg) || "请填写委托信息"));
    var o = Object.keys(T).every(function (e) {
      return !T[e];
    });
    return o ? [o] : [o, { retcode: "LIMIT_UP_FIELDS_NOT_FILL", retmsg: e }];
  }
  function L() {
    if (!f.isAmountMode) {
      var e = p.checkOrderPurchaseQuantity();
      if (!(null == e ? void 0 : e.valid)) return e;
    }
    return [!0];
  }
  function M() {
    return _([p.checkMarket.bind(p), P, p.checkStockStatus.bind(p)]);
  }
  return {
    clearRequiredFieldTips: function (e) {
      T[e] = !1;
    },
    requiredFieldTips: T,
    weekHint: y,
    checkOrder:
      ((k = n(
        e().mark(function n() {
          var t, i, o, c;
          return e().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (y.value = []),
                    (e.next = 3),
                    u.handlerPromise(p.checkShareholderCards.bind(p), R)
                  );
                case 3:
                  return (e.next = 5), u.handlerPromise(I, H);
                case 5:
                  return (e.next = 7), u.handlerPromise(L, w);
                case 7:
                  return (e.next = 9), u.handlerPromise(D, w);
                case 9:
                  return (e.next = 11), C();
                case 11:
                  if (
                    ((t = e.sent), (i = r(t, 2)), (o = i[0]), (c = i[1]), o)
                  ) {
                    e.next = 17;
                    break;
                  }
                  return e.abrupt("return", N(c));
                case 17:
                  return (e.next = 19), u.handlerPromise(M, w);
                case 19:
                  return (
                    (e.next = 21),
                    u.handlerPromise(
                      p.checkAuth.bind(p, j.value),
                      a.checkAuthHandle
                    )
                  );
                case 21:
                  return (
                    (e.next = 23), u.handlerPromise(p.checkTradeRisk.bind(p), A)
                  );
                case 23:
                  return (
                    ((f.isAmountMode &&
                      f.maxAmount &&
                      +f.maxAmount > g.max_buy_money) ||
                      (!f.isAmountMode &&
                        f.investQuantity &&
                        +f.investQuantity > g.max_buy_qty)) &&
                      y.value.push("委托超出现金可买数量，触发时可能委托失败"),
                    (e.next = 26),
                    O()
                  );
                case 26:
                case "end":
                  return e.stop();
              }
          }, n);
        })
      )),
      function () {
        return k.apply(this, arguments);
      }),
    checkStock: M,
  };
};
