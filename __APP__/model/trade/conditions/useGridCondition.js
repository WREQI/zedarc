var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../@babel/runtime/helpers/slicedToArray"),
  r = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js");
var n = require("../../../common/vendor.js"),
  i = require("./GridCondition.js"),
  c = require("./useConditionBase.js"),
  s = require("./useGridCheck.js"),
  a = require("../../../config/enum/condition.js"),
  o = require("../../../utils/getPlatform.js"),
  u = require("../../../utils/toast.js"),
  d = require("../../../components/NetworkDetect/useNetworkDetect.js");
exports.useGridCondition = function () {
  var p,
    l,
    f = null == (p = n.getCurrentInstance()) ? void 0 : p.proxy,
    y = o.getPlatform(),
    m = y.isMiniProgram,
    k = y.isMpPlugin,
    v = n.reactive(new i.GridCondition()),
    h = !1;
  n.watch(
    function () {
      return v.basePrice;
    },
    function (e) {
      v.setPrice(e);
    }
  ),
    n.watch(
      function () {
        return v.quantity;
      },
      function (e) {
        v.setAmount(e);
      }
    );
  var _,
    x,
    b,
    w,
    S,
    P = c.useConditionBase(v),
    q = P.initCond,
    g = P.initTradeService,
    T = P.tradeAccount,
    C = P.stockInfo,
    B = P.quoteInfo,
    I = P.orderCheckService,
    G = P.isSubmitLoading,
    D = P.checkInit,
    N = P.signedProtocol,
    R = P.updateSignStatus,
    j = P.orderSubmit,
    A = P.queryInfo,
    E = P.checkBlockTips,
    F = s.useGridCheck({ gridCondition: v, checkService: I, stockInfo: C }),
    U = F.weekHint,
    Q = F.requiredFieldTips,
    L = F.clearRequiredFieldTips,
    M = F.checkGrid,
    $ = F.checkStock;
  function H() {
    v.basePriceStrategy === a.BasePriceStrategy.DQJ &&
      v.setBasePrice("".concat(C.value.secu_quote.dqj || 0));
  }
  function V() {
    return J.apply(this, arguments);
  }
  function J() {
    return (J = r(
      e().mark(function r() {
        var n, i, c, s, a, o, p, y, m;
        return e().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.prev = 0), (e.next = 3), g();
                case 3:
                  (n = e.sent),
                    (i = t(n, 1)),
                    (c = i[0]),
                    (s = c.holdstock),
                    (function (e) {
                      var t = e.find(function (e) {
                        return v.code === e.code;
                      });
                      t && v.setCostPrice(t.hold_cost);
                    })(void 0 === s ? [] : s),
                    (a = $()),
                    (o = t(a, 2)),
                    (p = o[0]),
                    (y = o[1]),
                    v.setIsSupportStock(p),
                    p ||
                      !(null == y ? void 0 : y.retmsg) ||
                      h ||
                      (l = u.showToast({
                        title: y.retmsg,
                        icon: "none",
                        duration: 3e3,
                      })),
                    (e.next = 17);
                  break;
                case 13:
                  throw (
                    ((e.prev = 13),
                    (e.t0 = e.catch(0)),
                    k &&
                      ((m = d.useNetworkDetect()),
                      (0, m.handleNetworkDetectError)(f, e.t0, function () {
                        V();
                      })),
                    e.t0)
                  );
                case 17:
                case "end":
                  return e.stop();
              }
          },
          r,
          null,
          [[0, 13]]
        );
      })
    )).apply(this, arguments);
  }
  function z() {
    return K.apply(this, arguments);
  }
  function K() {
    return (K = r(
      e().mark(function t() {
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return q(), (e.next = 3), V();
              case 3:
                H();
              case 4:
              case "end":
                return e.stop();
            }
        }, t);
      })
    )).apply(this, arguments);
  }
  return (
    n.watch(
      [
        function () {
          var e, t;
          return null == (t = null == (e = C.value) ? void 0 : e.secu_quote)
            ? void 0
            : t.dqj;
        },
        function () {
          return T.max_buy_money;
        },
      ],
      function (e) {
        var r = t(e, 1)[0],
          n = Number(r);
        n &&
          !isNaN(n) &&
          T.max_buy_money &&
          T.debounceForGetMaxBuyQty(C.value, r);
      }
    ),
    n.onBeforeUnmount(function () {
      (h = !0), l && l();
    }),
    {
      requiredFieldTips: Q,
      clearRequiredFieldTips: L,
      weekHint: U,
      gridCondition: v,
      initGridCondition:
        ((S = r(
          e().mark(function t() {
            var n, i, c, s, o, u, d;
            return e().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (
                      ((n = (null == f ? void 0 : f.$route.query) || {}),
                      (i = n.cond_id),
                      (c = n.market),
                      (s = n.code),
                      (o = n.name),
                      (u = n.is_recreate),
                      v.isStockSet)
                    ) {
                      t.next = 6;
                      break;
                    }
                    if (c && s) {
                      t.next = 4;
                      break;
                    }
                    return t.abrupt("return");
                  case 4:
                    (d = decodeURIComponent(decodeURIComponent(o || ""))),
                      v.setBaseInfo({
                        condId: i,
                        market: c,
                        code: s,
                        name: d,
                        isRecreate: u,
                      });
                  case 6:
                    if (!v.isUpdate) {
                      t.next = 11;
                      break;
                    }
                    return (
                      (t.next = 9),
                      (function () {
                        var t = r(
                          e().mark(function t(r) {
                            var n;
                            return e().wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (e.next = 2), V();
                                  case 2:
                                    return (e.next = 4), A(r);
                                  case 4:
                                    if (((e.t0 = e.sent.condinfo), e.t0)) {
                                      e.next = 7;
                                      break;
                                    }
                                    e.t0 = {};
                                  case 7:
                                    (n = e.t0),
                                      v.setLatestBasePrice(n.base_price),
                                      v.setBasePrice(n.base_price),
                                      v.setBasePriceStrategy(
                                        a.BasePriceStrategy.BasePrice
                                      ),
                                      v.setGridType(n.grid_type),
                                      v.setUpStep(n.up_step),
                                      v.setDownStep(n.down_step),
                                      v.setBuyPriceType(n.buy_price_type),
                                      v.setSellPriceType(n.sell_price_type),
                                      v.setQuatity(n.quantity),
                                      v.setValidDayEnum(n.valid_day_enum),
                                      v.setEndTime(+n.end_time);
                                  case 9:
                                  case "end":
                                    return e.stop();
                                }
                            }, t);
                          })
                        );
                        return function (e) {
                          return t.apply(this, arguments);
                        };
                      })()(i)
                    );
                  case 9:
                    t.next = 17;
                    break;
                  case 11:
                    return (t.next = 13), z();
                  case 13:
                    if (((t.t0 = v.isRecreate), !t.t0)) {
                      t.next = 17;
                      break;
                    }
                    return (
                      (t.next = 17),
                      (function () {
                        var t = r(
                          e().mark(function t(r) {
                            var n, i;
                            return e().wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    if (r) {
                                      e.next = 2;
                                      break;
                                    }
                                    return e.abrupt("return");
                                  case 2:
                                    return (e.next = 4), A(r);
                                  case 4:
                                    (n = e.sent),
                                      (i = n.condinfo || {}),
                                      v.setGridType(i.grid_type),
                                      v.setUpStep(i.up_step),
                                      v.setDownStep(i.down_step),
                                      v.setBuyPriceType(i.buy_price_type),
                                      v.setSellPriceType(i.sell_price_type),
                                      v.setQuatity(i.quantity),
                                      v.setValidDayEnum(i.valid_day_enum),
                                      v.setEndTime(+i.end_time),
                                      H();
                                  case 7:
                                  case "end":
                                    return e.stop();
                                }
                            }, t);
                          })
                        );
                        return function (e) {
                          return t.apply(this, arguments);
                        };
                      })()(i)
                    );
                  case 17:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )),
        function () {
          return S.apply(this, arguments);
        }),
      gridPreCheck:
        ((w = r(
          e().mark(function t() {
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), E();
                  case 2:
                    return (e.next = 4), D();
                  case 4:
                    return (e.next = 6), M();
                  case 6:
                    return (
                      (e.next = 8), N(null == f ? void 0 : f.$refs.condProtocol)
                    );
                  case 8:
                    !(function () {
                      if (
                        C.value.spreadAcc &&
                        !isNaN(C.value.spreadAcc) &&
                        !isNaN(v.basePrice)
                      ) {
                        var e = Number(v.basePrice).toFixed(C.value.spreadAcc);
                        v.setBasePrice(e);
                      }
                    })();
                  case 9:
                  case "end":
                    return e.stop();
                }
            }, t);
          })
        )),
        function () {
          return w.apply(this, arguments);
        }),
      submitGrid:
        ((b = r(
          e().mark(function t(r) {
            var n;
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (n = {
                        cond_id: v.condId,
                        market: v.market,
                        scode: v.code,
                        name: v.name,
                        stockholder_code: T.stockholder_code,
                        cond_type: a.CondTypesBackEnd.GRID,
                        quantity: v.amount,
                        valid_day_enum: v.validDayEnum,
                        base_price: v.basePrice,
                        grid_type: v.gridType,
                        up_step: v.upStep,
                        down_step: v.downStep,
                        sell_price_type: v.sellPriceType,
                        buy_price_type: v.buyPriceType,
                      }),
                      (e.next = 3),
                      j(n, r)
                    );
                  case 3:
                  case "end":
                    return e.stop();
                }
            }, t);
          })
        )),
        function (e) {
          return b.apply(this, arguments);
        }),
      switchStock:
        ((x = r(
          e().mark(function t(r) {
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    v.changeStock(r), z();
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, t);
          })
        )),
        function (e) {
          return x.apply(this, arguments);
        }),
      handleRefresh:
        ((_ = r(
          e().mark(function t() {
            var r;
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (((e.t0 = v.isStockSet), !e.t0)) {
                      e.next = 4;
                      break;
                    }
                    return (e.next = 4), V();
                  case 4:
                    m
                      ? n.index.stopPullDownRefresh()
                      : null ==
                          (r = null == f ? void 0 : f.$refs.condGridRef) ||
                        r.resetRefresh();
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, t);
          })
        )),
        function () {
          return _.apply(this, arguments);
        }),
      initTradeService: V,
      tradeAccount: T,
      stockInfo: C,
      quoteInfo: B,
      isSubmitLoading: G,
      updateSignStatus: R,
    }
  );
};
