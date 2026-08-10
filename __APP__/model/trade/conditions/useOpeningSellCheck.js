var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../@babel/runtime/helpers/asyncToGenerator"),
  n = require("../../../@babel/runtime/helpers/slicedToArray");
require("../../../app.js");
var t = require("../../../common/vendor.js");
require("../../../config/enum.js"),
  require("../../../domain/entities/trade-stock/stock-order.js"),
  require("../../../domain/entities/trade-stock/condition-order.js"),
  require("../../../service/broker.js");
var i = require("../../../config/enum/condition.js");
require("./OpeningSellCondition.js");
var o = require("../../../common/components/Dialog/index.js"),
  c = require("../../../domain/applications/trade-stock/pre-check.js");
require("../../../config/enum/trade.js");
var s = require("./opening-sell-utils.js"),
  u = require("./useCondCheck.js"),
  a = require("../../../stores/user/useUserinfo.js"),
  l = require("../check-handlers/auth-handlers.js"),
  d = require("../check-handlers/check-shareholders-handler.js"),
  h = require("../check-handlers/useRiskTips.js");
exports.useConditionCheck = function (m) {
  var k,
    f,
    v = m.conditionOrder,
    p = m.checkService,
    g = m.stockInfo,
    q = m.tradeAccount,
    T = null == (k = t.getCurrentInstance()) ? void 0 : k.proxy,
    S = a.useUserinfoStore(),
    b = t.storeToRefs(S).userinfo,
    _ = t.ref([]),
    j = t.reactive({ downToInfo: !1, quantity: !1 }),
    y = u.useCondCheck({ checkService: p }),
    x = y.checkValidDay,
    P = y.checkCompositeSync,
    C = h.useRiskTips({
      checkService: p,
      stock: g,
      statPrefix: "trade.opening-sell",
      skipBrokerStockRisk: !0,
    }).checkTradeRiskHandler;
  function N() {
    var e,
      r,
      n = (function () {
        var e,
          r = null == (e = g.value.secu_quote) ? void 0 : e.dqj;
        return r && t.isNumber(+r) ? r : 0;
      })();
    if (
      t.isNumber(+n) &&
      t.isNumber(
        +(null == (r = null == (e = g.value.quote) ? void 0 : e.info)
          ? void 0
          : r.price_ceiling)
      )
    )
      return [
        +g.value.quote.info.price_ceiling <= +n,
        { retcode: "STOCK_NOT_LIMIT_UP", retmsg: "请选择当前已涨停的股票" },
      ];
  }
  function I() {
    var e;
    return s.checkSupportType(
      null == (e = g.value.quote) ? void 0 : e.stock_cls,
      g.value.isST
    );
  }
  function O(e) {
    return o.Dialog({ message: e.retmsg, context: T }), Promise.reject(e);
  }
  function w(e) {
    return new Promise(function (r, n) {
      switch (null == e ? void 0 : e.retcode) {
        case "order-status-change":
          return (
            (function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { retmsg: "该条件单状态可能已变更，您可确认后重新创建" };
              o.Dialog({
                context: T,
                title: "开板卖出条件单".concat(
                  v.isUpdate ? "修改" : "创建",
                  "失败"
                ),
                message: e.retmsg,
                confirmButtonText: "重新创建",
                cancelButtonText: "知道了",
                showCancelButton: !0,
                onConfirm: function () {
                  null == T ||
                    T.$router.replace({
                      name: "OpeningSellCondition",
                      query: { name: v.name, code: v.code, market: v.market },
                    });
                },
              });
            })(),
            n({ retcode: "COND_STATUS_CHANGE", retmsg: "条件单状态可能变更" })
          );
        case "not-trade-time":
          return O(e);
      }
    });
  }
  function E(e) {
    return d.checkShareHoldersHandler(e, {
      browStat: "trade.openingsell.holderdialog.brow",
      confirmStat: "trade.openingsell.holderdialog.confirm",
    });
  }
  function R(e) {
    return (
      t.index.showToast({ title: e.retmsg, icon: "none" }), Promise.reject(e)
    );
  }
  function L() {
    var e = p.checkOrderPurchaseQuantity();
    return (null == e ? void 0 : e.valid) ? [!0] : e;
  }
  function G() {
    var e = "请完整填写条件单参数";
    Object.keys(j).forEach(function (e) {
      return (j[e] = !1);
    });
    var r =
        v.triggerType === i.OPENING_SELL_TRIGGER_TYPE.immediately ||
        v.triggerType !== i.OPENING_SELL_TRIGGER_TYPE.downTo ||
        v.downValue
          ? [!0]
          : [!1, { retmsg: "请输入回落幅度" }],
      t = n(r, 2),
      o = t[0],
      c = t[1];
    o ||
      ((j.downToInfo = !0),
      (e = (null == c ? void 0 : c.retmsg) || "请输入触发条件信息")),
      v.quantity ||
        ((j.quantity = !0),
        (e = (null == c ? void 0 : c.retmsg) || "请输入卖出数量信息"));
    var s = Object.keys(j).every(function (e) {
      return !j[e];
    });
    return s
      ? [s]
      : [s, { retcode: "OPENING_SELL_FIELDS_NOT_FILL", retmsg: e }];
  }
  function A() {
    return P([p.checkMarket.bind(p), I, p.checkStockStatus.bind(p)]);
  }
  return {
    clearRequiredFieldTips: function (e) {
      j[e] = !1;
    },
    requiredFieldTips: j,
    weekHint: _,
    checkOrder:
      ((f = r(
        e().mark(function r() {
          var i, o, s, u;
          return e().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (_.value = []), (e.next = 3), c.handlerPromise(N, O);
                case 3:
                  return (
                    (e.next = 5),
                    c.handlerPromise(p.checkShareholderCards.bind(p), E)
                  );
                case 5:
                  return (e.next = 7), c.handlerPromise(G, R);
                case 7:
                  return (e.next = 9), c.handlerPromise(L, O);
                case 9:
                  return (e.next = 11), x();
                case 11:
                  if (
                    ((i = e.sent), (o = n(i, 2)), (s = o[0]), (u = o[1]), s)
                  ) {
                    e.next = 17;
                    break;
                  }
                  return e.abrupt("return", w(u));
                case 17:
                  return (e.next = 19), c.handlerPromise(A, O);
                case 19:
                  return (
                    (e.next = 21),
                    c.handlerPromise(
                      p.checkAuth.bind(p, b.value),
                      l.checkAuthHandle
                    )
                  );
                case 21:
                  return (
                    (e.next = 23), c.handlerPromise(p.checkTradeRisk.bind(p), C)
                  );
                case 23:
                  t.isNumber(+v.quantity) &&
                    t.isNumber(+q.max_sell_qty) &&
                    +v.quantity > +q.max_sell_qty &&
                    _.value.push("委托超出当前可卖数量，触发时可能委托失败");
                case 24:
                case "end":
                  return e.stop();
              }
          }, r);
        })
      )),
      function () {
        return f.apply(this, arguments);
      }),
    checkStock: A,
    checkIsLimitUp: N,
  };
};
