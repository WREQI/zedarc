var e = require("../../../@babel/runtime/helpers/slicedToArray"),
  t = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js");
var n = require("../../../common/vendor.js"),
  i = require("../../../config/enum/condition.js");
require("../../../service/connect/index.js");
var o = require("./OpeningSellCondition.js"),
  c = require("../../../utils/getPlatform.js"),
  s = require("../../../utils/toast.js"),
  a = require("./useConditionBase.js"),
  u = require("./useOpeningSellCheck.js"),
  d = require("../../../components/NetworkDetect/useNetworkDetect.js"),
  p = require("../../../service/connect/maps.js");
exports.useOpeningSellCondition = function () {
  var l,
    f,
    k = null == (l = n.getCurrentInstance()) ? void 0 : l.proxy,
    m = c.getPlatform(),
    h = m.isMiniProgram,
    y = m.isMpPlugin,
    v = m.isWzqXcx,
    w = n.reactive(new o.OpeningSellCondition()),
    x = !1,
    S = a.useConditionBase(w, { wbSchema: [p.SCHEME.TRADE_HQ] }),
    g = S.initCond,
    T = S.initTradeService,
    _ = S.tradeAccount,
    q = S.stockInfo,
    b = S.quoteInfo,
    I = S.orderCheckService,
    C = S.isSubmitLoading,
    E = S.clearWss,
    O = S.checkInit,
    P = S.signedProtocol,
    R = S.updateSignStatus,
    D = S.queryInfo,
    j = S.orderSubmit,
    N = S.checkBlockTips;
  function L() {
    return A.apply(this, arguments);
  }
  function A() {
    return (A = r(
      t().mark(function r() {
        var n, i, o, c, a, u;
        return t().wrap(
          function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (t.prev = 0), (t.next = 3), T();
                case 3:
                  (n = K()),
                    (i = e(n, 2)),
                    (o = i[0]),
                    (c = i[1]),
                    w.setIsSupportStock(o),
                    (a = Z()),
                    (o = o && a[0]),
                    (c = c || a[1]),
                    o ||
                      !(null == c ? void 0 : c.retmsg) ||
                      x ||
                      (f = s.showToast({
                        title: c.retmsg,
                        icon: "none",
                        duration: 3e3,
                      })),
                    (t.next = 13);
                  break;
                case 9:
                  throw (
                    ((t.prev = 9),
                    (t.t0 = t.catch(0)),
                    y &&
                      v &&
                      ((u = d.useNetworkDetect()),
                      (0, u.handleNetworkDetectError)(k, t.t0, function () {
                        L();
                      })),
                    t.t0)
                  );
                case 13:
                case "end":
                  return t.stop();
              }
          },
          r,
          null,
          [[0, 9]]
        );
      })
    )).apply(this, arguments);
  }
  function B() {
    return G.apply(this, arguments);
  }
  function G() {
    return (G = r(
      t().mark(function e() {
        return t().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  g(),
                  w.setTriggerType(i.OPENING_SELL_TRIGGER_TYPE.immediately),
                  w.setDownType(i.OPENING_SELL_DOWNTO_TYPE.percent),
                  w.setOrderPriceType(i.PriceType.BuyOne),
                  w.setDownValue(""),
                  w.setQuantity(""),
                  (e.next = 8),
                  L()
                );
              case 8:
              case "end":
                return e.stop();
            }
        }, e);
      })
    )).apply(this, arguments);
  }
  function U(e) {
    return F.apply(this, arguments);
  }
  function F() {
    return (F = r(
      t().mark(function e(r) {
        var n;
        return t().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), D(r);
              case 2:
                if (((e.t0 = e.sent.condinfo), e.t0)) {
                  e.next = 5;
                  break;
                }
                e.t0 = {};
              case 5:
                (n = e.t0),
                  w.setTriggerType(n.trigger_type),
                  w.setDownType(n.down_type),
                  w.setDownValue(n.down_value),
                  w.setOrderPriceType(n.order_price_type),
                  w.setQuantity(n.quantity),
                  w.setValidDayEnum(n.valid_day_enum),
                  w.setEndTime(+n.end_time);
              case 7:
              case "end":
                return e.stop();
            }
        }, e);
      })
    )).apply(this, arguments);
  }
  n.watch(
    function () {
      return w.quantity;
    },
    function (e) {
      w.setAmount(e);
    }
  );
  var H,
    V,
    W,
    M,
    Q,
    $ = u.useConditionCheck({
      conditionOrder: w,
      checkService: I,
      stockInfo: q,
      tradeAccount: _,
    }),
    Y = $.weekHint,
    z = $.requiredFieldTips,
    X = $.clearRequiredFieldTips,
    J = $.checkOrder,
    K = $.checkStock,
    Z = $.checkIsLimitUp;
  return (
    n.onBeforeUnmount(function () {
      (x = !0), f && f();
    }),
    {
      conditionOrder: w,
      stockInfo: q,
      quoteInfo: b,
      tradeAccount: _,
      isSubmitLoading: C,
      handleRefresh:
        ((Q = r(
          t().mark(function e() {
            var r;
            return t().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (((e.t0 = w.isStockSet), !e.t0)) {
                      e.next = 4;
                      break;
                    }
                    return (e.next = 4), L();
                  case 4:
                    h
                      ? n.index.stopPullDownRefresh()
                      : null == (r = null == k ? void 0 : k.$refs.condRef) ||
                        r.resetRefresh();
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        function () {
          return Q.apply(this, arguments);
        }),
      clearWss: E,
      switchStock:
        ((M = r(
          t().mark(function e(r) {
            return t().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    w.changeStock(r), w.setAmount(w.quantity), B();
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        function (e) {
          return M.apply(this, arguments);
        }),
      initTradeService: L,
      updateSignStatus: R,
      orderPreCheck:
        ((W = r(
          t().mark(function e() {
            return t().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), N();
                  case 2:
                    return (e.next = 4), O();
                  case 4:
                    return (e.next = 6), J();
                  case 6:
                    return (
                      (e.next = 8), P(null == k ? void 0 : k.$refs.condProtocol)
                    );
                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        function () {
          return W.apply(this, arguments);
        }),
      submitOrder:
        ((V = r(
          t().mark(function e(r) {
            var n;
            return t().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = {
                        cond_id: w.condId,
                        market: w.market,
                        scode: w.code,
                        name: w.name,
                        stockholder_code: _.stockholder_code,
                        cond_type: i.CondTypesBackEnd.OPENING_SELL,
                        trigger_type: w.triggerType,
                        down_type: w.downType,
                        down_value: w.downValue,
                        order_price_type: w.orderPriceType,
                        quantity: w.quantity,
                        valid_day_enum: w.validDayEnum,
                      }),
                      (e.next = 3),
                      j(n, r)
                    );
                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        function (e) {
          return V.apply(this, arguments);
        }),
      initOpeningSellCondition:
        ((H = r(
          t().mark(function e() {
            var n, i, o, c, s, a, u;
            return t().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((n = (null == k ? void 0 : k.$route.query) || {}),
                      (i = n.cond_id),
                      (o = n.market),
                      (c = n.code),
                      (s = n.name),
                      (a = n.is_recreate),
                      w.isStockSet)
                    ) {
                      e.next = 6;
                      break;
                    }
                    if (o && c) {
                      e.next = 4;
                      break;
                    }
                    return e.abrupt("return");
                  case 4:
                    (u = decodeURIComponent(decodeURIComponent(s || ""))),
                      w.setBaseInfo({
                        condId: i,
                        market: o,
                        code: c,
                        name: u,
                        isRecreate: a,
                      });
                  case 6:
                    if (!w.isUpdate) {
                      e.next = 11;
                      break;
                    }
                    return (
                      (e.next = 9),
                      (function () {
                        var e = r(
                          t().mark(function e(r) {
                            return t().wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return L(), (e.next = 3), U(r);
                                  case 3:
                                  case "end":
                                    return e.stop();
                                }
                            }, e);
                          })
                        );
                        return function (t) {
                          return e.apply(this, arguments);
                        };
                      })()(i)
                    );
                  case 9:
                    e.next = 17;
                    break;
                  case 11:
                    return (e.next = 13), B();
                  case 13:
                    if (((e.t0 = w.isRecreate), !e.t0)) {
                      e.next = 17;
                      break;
                    }
                    return (e.next = 17), U(i);
                  case 17:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        function () {
          return H.apply(this, arguments);
        }),
      orderCheckService: I,
      weakHint: Y,
      requiredFieldTips: z,
      clearRequiredFieldTips: X,
    }
  );
};
