var e = require("../../../@babel/runtime/helpers/slicedToArray"),
  t = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js");
var r = require("../../../common/vendor.js"),
  i = require("../../../config/enum/condition.js");
require("../../../service/connect/index.js");
var o = require("./LimitUpCondition.js"),
  c = require("../../../utils/getPlatform.js"),
  u = require("../../../utils/toast.js"),
  a = require("./useConditionBase.js"),
  s = require("./useLimitUpCheck.js"),
  d = require("../../../components/NetworkDetect/useNetworkDetect.js"),
  p = require("../../../service/connect/maps.js");
exports.useLimitUpCondition = function () {
  var f,
    l,
    m = null == (f = r.getCurrentInstance()) ? void 0 : f.proxy,
    k = c.getPlatform(),
    h = k.isMiniProgram,
    v = k.isMpPlugin,
    x = k.isWzqXcx,
    y = r.reactive(new o.LimitUpCondition()),
    w = !1,
    q = a.useConditionBase(y, { wbSchema: [p.SCHEME.TRADE_HQ] }),
    S = q.initCond,
    b = q.initTradeService,
    C = q.tradeAccount,
    _ = q.stockInfo,
    I = q.quoteInfo,
    g = q.orderCheckService,
    T = q.isSubmitLoading,
    j = q.clearWss,
    R = q.checkInit,
    A = q.signedProtocol,
    U = q.updateSignStatus,
    P = q.queryInfo,
    B = q.orderSubmit,
    D = q.checkBlockTips;
  function E() {
    return L.apply(this, arguments);
  }
  function L() {
    return (L = n(
      t().mark(function n() {
        var r, i, o, c, a, s, p;
        return t().wrap(
          function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (t.prev = 0), (t.next = 3), b();
                case 3:
                  (r = Y()),
                    (i = e(r, 2)),
                    (o = i[0]),
                    (c = i[1]),
                    y.setIsSupportStock(o),
                    o || !(null == c ? void 0 : c.retmsg) || w
                      ? ((a = _.value.secu_quote || {}),
                        (s = a.dqj),
                        C.debounceForGetMaxBuyQty(_.value, s))
                      : (l = u.showToast({
                          title: c.retmsg,
                          icon: "none",
                          duration: 3e3,
                        })),
                    (t.next = 11);
                  break;
                case 7:
                  throw (
                    ((t.prev = 7),
                    (t.t0 = t.catch(0)),
                    v &&
                      x &&
                      ((p = d.useNetworkDetect()),
                      (0, p.handleNetworkDetectError)(m, t.t0, function () {
                        E();
                      })),
                    t.t0)
                  );
                case 11:
                case "end":
                  return t.stop();
              }
          },
          n,
          null,
          [[0, 7]]
        );
      })
    )).apply(this, arguments);
  }
  function M() {
    return Q.apply(this, arguments);
  }
  function Q() {
    return (Q = n(
      t().mark(function e() {
        return t().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return S(), (e.next = 3), E();
              case 3:
              case "end":
                return e.stop();
            }
        }, e);
      })
    )).apply(this, arguments);
  }
  function F(e) {
    return H.apply(this, arguments);
  }
  function H() {
    return (H = n(
      t().mark(function e(n) {
        var r;
        return t().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (e.next = 2), P(n);
              case 2:
                if (((e.t0 = e.sent.condinfo), e.t0)) {
                  e.next = 5;
                  break;
                }
                e.t0 = {};
              case 5:
                (r = e.t0),
                  y.setInvestQuantity(r.invest_quantity),
                  y.setMaxAmount(r.max_amount),
                  y.setAmountMode(!Boolean(y.investQuantity)),
                  y.setValidDayEnum(r.valid_day_enum),
                  y.setEndTime(+r.end_time);
              case 7:
              case "end":
                return e.stop();
            }
        }, e);
      })
    )).apply(this, arguments);
  }
  r.watch(
    function () {
      return y.investQuantity;
    },
    function (e) {
      y.setAmount(e);
    }
  );
  var N,
    O,
    W,
    $,
    G,
    z = s.useConditionCheck({
      conditionOrder: y,
      checkService: g,
      stockInfo: _,
      tradeAccount: C,
    }),
    V = z.weekHint,
    X = z.requiredFieldTips,
    J = z.clearRequiredFieldTips,
    K = z.checkOrder,
    Y = z.checkStock;
  return (
    r.onBeforeUnmount(function () {
      (w = !0), l && l();
    }),
    {
      conditionOrder: y,
      stockInfo: _,
      quoteInfo: I,
      tradeAccount: C,
      isSubmitLoading: T,
      handleRefresh:
        ((G = n(
          t().mark(function e() {
            var n;
            return t().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (((e.t0 = y.isStockSet), !e.t0)) {
                      e.next = 4;
                      break;
                    }
                    return (e.next = 4), E();
                  case 4:
                    h
                      ? r.index.stopPullDownRefresh()
                      : null == (n = null == m ? void 0 : m.$refs.condRef) ||
                        n.resetRefresh();
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        function () {
          return G.apply(this, arguments);
        }),
      clearWss: j,
      switchStock:
        (($ = n(
          t().mark(function e(n) {
            return t().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    y.changeStock(n), y.setAmount(y.investQuantity), M();
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        function (e) {
          return $.apply(this, arguments);
        }),
      initTradeService: E,
      updateSignStatus: U,
      orderPreCheck:
        ((W = n(
          t().mark(function e() {
            return t().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), D();
                  case 2:
                    return (e.next = 4), R();
                  case 4:
                    return (e.next = 6), K();
                  case 6:
                    return (
                      (e.next = 8), A(null == m ? void 0 : m.$refs.condProtocol)
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
        ((O = n(
          t().mark(function e(n) {
            var r;
            return t().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (r = {
                        cond_id: y.condId,
                        market: y.market,
                        scode: y.code,
                        name: y.name,
                        stockholder_code: C.stockholder_code,
                        cond_type: i.CondTypesBackEnd.LIMIT_UP,
                        invest_quantity: y.investQuantity,
                        max_amount: y.maxAmount,
                        valid_day_enum: y.validDayEnum,
                      }),
                      (e.next = 3),
                      B(r, n)
                    );
                  case 3:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        function (e) {
          return O.apply(this, arguments);
        }),
      initLimitUpCondition:
        ((N = n(
          t().mark(function e() {
            var r, i, o, c, u, a, s;
            return t().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((r = (null == m ? void 0 : m.$route.query) || {}),
                      (i = r.cond_id),
                      (o = r.market),
                      (c = r.code),
                      (u = r.name),
                      (a = r.is_recreate),
                      y.isStockSet)
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
                    (s = decodeURIComponent(decodeURIComponent(u || ""))),
                      y.setBaseInfo({
                        condId: i,
                        market: o,
                        code: c,
                        name: s,
                        isRecreate: a,
                      });
                  case 6:
                    if (!y.isUpdate) {
                      e.next = 11;
                      break;
                    }
                    return (
                      (e.next = 9),
                      (function () {
                        var e = n(
                          t().mark(function e(n) {
                            return t().wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return E(), (e.next = 3), F(n);
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
                    return (e.next = 13), M();
                  case 13:
                    if (((e.t0 = y.isRecreate), !e.t0)) {
                      e.next = 17;
                      break;
                    }
                    return (e.next = 17), F(i);
                  case 17:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        function () {
          return N.apply(this, arguments);
        }),
      orderCheckService: g,
      weakHint: V,
      requiredFieldTips: X,
      clearRequiredFieldTips: J,
    }
  );
};
