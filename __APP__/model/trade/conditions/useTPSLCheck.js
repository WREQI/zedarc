var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../@babel/runtime/helpers/asyncToGenerator"),
  t = require("../../../@babel/runtime/helpers/slicedToArray");
require("../../../app.js");
var n = require("../../../common/vendor.js");
require("../../../config/enum.js"),
  require("../../../domain/entities/trade-stock/stock-order.js"),
  require("../../../domain/entities/trade-stock/condition-order.js"),
  require("../../../service/broker.js"),
  require("./TPSLCondition.js");
var c = require("../../../common/components/Dialog/index.js"),
  s = require("../../../domain/applications/trade-stock/pre-check.js");
require("../../../config/enum/trade.js");
var o = require("./grid-utils.js"),
  i = require("./tpsl-utils.js"),
  u = require("./useCondCheck.js"),
  a = require("../../../stores/user/useUserinfo.js"),
  l = require("../check-handlers/auth-handlers.js"),
  d = require("../check-handlers/check-shareholders-handler.js"),
  h = require("../check-handlers/useRiskTips.js"),
  m = require("../../../config/enum/condition.js");
exports.useTPSLCheck = function (k) {
  var p,
    T,
    P = k.tpslCondition,
    v = k.checkService,
    y = k.stockInfo,
    f = k.currentMaxSell,
    C = null == (p = n.getCurrentInstance()) ? void 0 : p.proxy,
    S = a.useUserinfoStore(),
    g = n.storeToRefs(S).userinfo,
    b = n.ref([]),
    _ = n.reactive({
      basePrice: !1,
      zyCondValue: !1,
      zsCondValue: !1,
      quantity: !1,
      zyPullbackValue: !1,
    }),
    q = u.useCondCheck({ checkService: v }),
    E = q.checkValidDay,
    z = q.checkCompositeSync,
    I = h.useRiskTips({
      checkService: v,
      stock: y,
      statPrefix: "trade.tpsl",
      skipBrokerStockRisk: !0,
    }).checkTradeRiskHandler;
  function j() {
    return !o.checkIsEmpty(P.zyCondValue) &&
      P.zyCondType === m.LimitType.Absolute &&
      +P.zyCondValue <= +P.basePrice
      ? ((_.zyCondValue = !0),
        [
          !1,
          {
            retcode: "TPSL_ZS_LIMIT_UNREASONABLE",
            retmsg: "止盈价格需高于基准价",
          },
        ])
      : !o.checkIsEmpty(P.zsCondValue) &&
        P.zsCondType === m.LimitType.Absolute &&
        +P.zsCondValue >= +P.basePrice
      ? ((_.zsCondValue = !0),
        [
          !1,
          {
            retcode: "TPSL_ZS_LIMIT_UNREASONABLE",
            retmsg: "止损价格需低于基准价",
          },
        ])
      : [!0];
  }
  function L() {
    var e = v.checkOrderPurchaseQuantity();
    return (null == e ? void 0 : e.valid) ? [!0] : e;
  }
  function x() {
    var e;
    return i.checkSupportType({
      stockCls: null == (e = y.value.quote) ? void 0 : e.stock_cls,
      isST: y.value.isST,
    });
  }
  function V(e) {
    return c.Dialog({ message: e.retmsg, context: C }), Promise.reject(e);
  }
  function A(e) {
    return (
      n.index.showToast({ title: e.retmsg, icon: "none" }), Promise.reject(e)
    );
  }
  function R(e) {
    return new Promise(function (r, t) {
      switch (null == e ? void 0 : e.retcode) {
        case "order-status-change":
          return (
            (function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { retmsg: "该条件单状态可能已变更，您可确认后重新创建" };
              c.Dialog({
                context: C,
                title: "止盈止损条件单".concat(
                  P.isUpdate ? "修改" : "创建",
                  "失败"
                ),
                message: e.retmsg,
                confirmButtonText: "重新创建",
                cancelButtonText: "知道了",
                showCancelButton: !0,
                onConfirm: function () {
                  null == C ||
                    C.$router.replace({
                      name: "TPSLCondition",
                      query: { name: P.name, code: P.code, market: P.market },
                    });
                },
              });
            })(),
            t({ retcode: "COND_STATUS_CHANGE", retmsg: "条件单状态可能变更" })
          );
        case "not-trade-time":
          return V(e);
      }
    });
  }
  function M(e) {
    return d.checkShareHoldersHandler(e, {
      browStat: "trade.tpsl.holderdialog.brow",
      confirmStat: "trade.tpsl.holderdialog.confirm",
    });
  }
  function N() {
    var e = (function () {
      var e,
        r = null == (e = y.value.secu_quote) ? void 0 : e.dqj;
      return r && n.isNumber(+r) ? r : 0;
    })();
    if (e <= 0) return !1;
    try {
      var r = Boolean(P.zyCondPrice && +e >= +P.zyCondPrice),
        t = Boolean(P.zsCondPrice && +e <= +P.zsCondPrice);
      return r || t;
    } catch (e) {
      return !1;
    }
  }
  function O(e) {
    return (
      n.index.showToast({ title: e.retmsg, icon: "none" }), Promise.reject(e)
    );
  }
  function w() {
    var e = "请完整填写条件单参数";
    Object.keys(_).forEach(function (e) {
      return (_[e] = !1);
    });
    var r = o.checkIsEmpty(P.quantity)
      ? [!1, { retcode: "TPSL_QUANTITY_EMPTY", retmsg: "请填写数量，不可为0" }]
      : [!0];
    t(r, 1)[0] || ((_.quantity = !0), (e = "请填写卖出数量"));
    var n =
        o.checkIsEmpty(P.zyCondValue) || o.checkIsEmpty(P.zyCondPrice)
          ? [
              !1,
              {
                retcode: "TPSL_ZY_LIMIT_EMPTY",
                retmsg: "请填写止盈条件，不可为0",
              },
            ]
          : [!0],
      c = t(n, 1)[0],
      s =
        o.checkIsEmpty(P.zsCondValue) || o.checkIsEmpty(P.zsCondPrice)
          ? [
              !1,
              {
                retcode: "TPSL_ZS_LIMIT_EMPTY",
                retmsg: "请填写止损条件，不可为0",
              },
            ]
          : [!0],
      i = t(s, 1)[0];
    c || i || ((_.zyCondValue = !0), (e = "请设置止盈止损条件"));
    var u =
        P.zyPullbackFlag && o.checkIsEmpty(P.zyPullbackValue)
          ? [
              !1,
              {
                retcode: "TPSL_ZY_PULLBACK_EMPTY",
                retmsg: "请填写最高点回落止盈值，不可为0",
              },
            ]
          : [!0],
      a = t(u, 2),
      l = a[0],
      d = a[1];
    l || ((_.zyPullbackValue = !0), (e = (null == d ? void 0 : d.retmsg) || e)),
      P.zyPullbackFlag &&
        !c &&
        ((_.zyCondValue = !0), (e = "请设置止盈止损条件"));
    var h = o.checkIsEmpty(P.basePrice)
      ? [!1, { retcode: "BASE_PRICE_EMPTY", retmsg: "请填写基准价，不可为0" }]
      : [!0];
    t(h, 1)[0] || ((_.basePrice = !0), (e = "请填写基准价"));
    var m = Object.keys(_).every(function (e) {
      return !_[e];
    });
    return m ? [m] : [m, { retcode: "TPSL_FIELDS_NOT_FILL", retmsg: e }];
  }
  function B() {
    return z([v.checkMarket.bind(v), x, v.checkStockStatus.bind(v)]);
  }
  return {
    clearRequiredFieldTips: function (e) {
      _[e] = !1;
    },
    requiredFieldTips: _,
    weekHint: b,
    checkTPSL:
      ((T = r(
        e().mark(function r() {
          var n, c, o, u;
          return e().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (b.value = []),
                    (e.next = 3),
                    s.handlerPromise(v.checkShareholderCards.bind(v), M)
                  );
                case 3:
                  return (e.next = 5), s.handlerPromise(w, O);
                case 5:
                  return (e.next = 7), s.handlerPromise(j, A);
                case 7:
                  return (e.next = 9), s.handlerPromise(L, V);
                case 9:
                  return (e.next = 11), E();
                case 11:
                  if (
                    ((n = e.sent), (c = t(n, 2)), (o = c[0]), (u = c[1]), o)
                  ) {
                    e.next = 17;
                    break;
                  }
                  return e.abrupt("return", R(u));
                case 17:
                  return (e.next = 19), s.handlerPromise(B, V);
                case 19:
                  return (
                    (e.next = 21),
                    s.handlerPromise(
                      v.checkAuth.bind(v, g.value),
                      l.checkAuthHandle
                    )
                  );
                case 21:
                  return (
                    (e.next = 23), s.handlerPromise(v.checkTradeRisk.bind(v), I)
                  );
                case 23:
                  N() &&
                    0 === b.value.length &&
                    b.value.push("设置参数已达到触发条件，提交可能立即触发"),
                    i.shouldTipsAmount(P, f.value) &&
                      0 === b.value.length &&
                      b.value.push(i.AMOUNT_EXCEEDS_TIPS),
                    i.shouldTipsFee(P) &&
                      0 === b.value.length &&
                      b.value.push(i.PROFIT_NOT_COVER_FEE);
                case 26:
                case "end":
                  return e.stop();
              }
          }, r);
        })
      )),
      function () {
        return T.apply(this, arguments);
      }),
    checkStock: B,
  };
};
