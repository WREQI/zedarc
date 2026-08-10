var e = require("../../../@babel/runtime/helpers/slicedToArray"),
  t = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../@babel/runtime/helpers/objectSpread2");
require("../../../@babel/runtime/helpers/Arrayincludes");
var r = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js");
var i = require("../../../common/vendor.js");
require("../../../service/connect/index.js");
var o = require("../../../config/enum.js"),
  a = require("../../../config/enum/condition.js"),
  c = require("../../../utils/getPlatform.js"),
  u = require("./InvestCondition.js"),
  s = require("./useConditionCheck.js"),
  d = require("./useConditionBase.js"),
  p = require("../../../components/NetworkDetect/useNetworkDetect.js"),
  l = require("../../../service/connect/maps.js"),
  m = {
    price: "0",
    amount: "0",
    order_price: "0",
    quantity: "0",
    trade_type: o.ACTION.BUY,
    valid_day_enum: "",
    cond_id: "",
  };
exports.useInvestCondition = function () {
  var v,
    f = null == (v = i.getCurrentInstance()) ? void 0 : v.proxy,
    h = c.getPlatform(),
    k = h.isMiniProgram,
    y = h.isMpPlugin,
    _ = i.reactive(new u.InvestCondition()),
    w = d.useConditionBase(_, { wbSchema: [l.SCHEME.TRADE_HQ] }),
    x = w.initCond,
    S = w.initTradeService,
    b = w.fetchTradeShow,
    q = w.tradeAccount,
    I = w.stockInfo,
    g = w.quoteInfo,
    C = w.orderCheckService,
    T = w.isSubmitLoading,
    A = w.clearWss,
    D = w.checkInit,
    E = w.signedProtocol,
    P = w.updateSignStatus,
    R = w.orderSubmit,
    j = w.checkBlockTips,
    L = null;
  i.watch(
    function () {
      return _.quantity;
    },
    function (e) {
      _.setAmount(e);
    }
  );
  var N,
    B,
    U,
    O,
    M = i.ref(!1),
    Q = s.useConditionCheck({
      conditionOrder: _,
      checkService: C,
      stockInfo: I,
    }),
    W = Q.checkInvest,
    $ = Q.checkStock,
    H = i.ref([]),
    V = i.computed(function () {
      if (void 0 !== I.value.spreadAcc) return I.value.spreadAcc;
      var e = (_.upperLimit || "").split(".")[1],
        t = (_.lowerLimit || "").split(".")[1],
        n = Math.max(
          (null == e ? void 0 : e.length) || 0,
          (null == t ? void 0 : t.length) || 0
        );
      return n > 0 ? n : void 0;
    });
  function Y() {
    return G.apply(this, arguments);
  }
  function G() {
    return (G = r(
      t().mark(function n() {
        var r;
        return t().wrap(
          function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (t.prev = 0), (t.next = 3), S();
                case 3:
                  K(),
                    (L = setTimeout(function () {
                      var t = C.investCondStockCheck();
                      if (t)
                        i.index.showToast({
                          title: t || "定期定投不支持当前标的",
                          icon: "none",
                          duration: 3e3,
                        });
                      else {
                        var n = $(),
                          r = e(n, 2),
                          o = r[0],
                          a = r[1];
                        _.setIsSupportStock(o),
                          !o &&
                            (null == a ? void 0 : a.retmsg) &&
                            i.index.showToast({
                              title: a.retmsg,
                              icon: "none",
                              duration: 3e3,
                            });
                      }
                    }, 1e3)),
                    (t.next = 11);
                  break;
                case 7:
                  throw (
                    ((t.prev = 7),
                    (t.t0 = t.catch(0)),
                    y &&
                      ((r = p.useNetworkDetect()),
                      (0, r.handleNetworkDetectError)(f, t.t0, function () {
                        Y();
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
  function J() {
    return z.apply(this, arguments);
  }
  function z() {
    return (z = r(
      t().mark(function e() {
        var n;
        return t().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (((e.t0 = _.isStockSet), !e.t0)) {
                  e.next = 4;
                  break;
                }
                return (e.next = 4), Y();
              case 4:
                k
                  ? i.index.stopPullDownRefresh()
                  : null == (n = null == f ? void 0 : f.$refs.condRef) ||
                    n.resetRefresh();
              case 5:
              case "end":
                return e.stop();
            }
        }, e);
      })
    )).apply(this, arguments);
  }
  function F() {
    var e = f.$route.query.cond_info,
      t = {};
    if (e)
      try {
        var r = decodeURIComponent(e);
        r.includes("{") || (r = decodeURIComponent(r)), (t = JSON.parse(r));
      } catch (e) {
        t = {};
      }
    return n(n({}, f.$route.query), t);
  }
  function K() {
    L && clearTimeout(L);
  }
  function X() {
    var e,
      t = F(),
      r = n(
        n({}, m),
        {},
        { quantity: null !== (e = I.value.minAmount) && void 0 !== e ? e : 0 },
        t
      );
    (_.amount = r.quantity),
      (_.validDayEnum = r.valid_day_enum || ""),
      (_.endTime = r.end_time),
      (_.investPeriod = r.invest_period || ""),
      (_.investWeekday = r.invest_weekday || ""),
      (_.investDate = r.invest_date || ""),
      (_.investTime = r.invest_time || "10:00"),
      (_.investQuantity = r.invest_quantity || ""),
      (_.maxAmount = r.max_amount || ""),
      (_.highSettingExpanded = !(!r.upper_limit && !r.lower_limit)),
      (_.highSettingChecked = !(!r.upper_limit && !r.lower_limit)),
      (_.upperLimit = r.upper_limit || ""),
      (_.lowerLimit = r.lower_limit || ""),
      (_.buyPriceType = r.buy_price_type || a.PriceType.SellOne),
      (_.isInvestAmountMode = "" === _.investQuantity),
      _.validDayEnum || (_.validDayEnum = o.INVEST_ORDER_VALIDATES.YEAR1);
  }
  return (
    i.onBeforeUnmount(function () {
      K();
    }),
    {
      handleRefresh: J,
      switchStock:
        ((O = r(
          t().mark(function e(n) {
            return t().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    _.changeStock(n), X(), J();
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        function (e) {
          return O.apply(this, arguments);
        }),
      initInvestCondition:
        ((U = r(
          t().mark(function e() {
            var n, i, o, a, c, u, s, d;
            return t().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (
                      ((n = F() || {}),
                      (i = n.cond_id),
                      (o = n.market),
                      (a = n.code),
                      (c = n.name),
                      (u = n.is_recreate),
                      _.isStockSet)
                    ) {
                      e.next = 9;
                      break;
                    }
                    if (o && a) {
                      e.next = 7;
                      break;
                    }
                    return (e.next = 5), b();
                  case 5:
                    return (
                      (s = e.sent),
                      e.abrupt(
                        "return",
                        void (
                          s.fundsinfo &&
                          (q.max_buy_money = String(
                            +s.fundsinfo.can_trade || 0
                          ))
                        )
                      )
                    );
                  case 7:
                    (d = decodeURIComponent(decodeURIComponent(c || ""))),
                      _.setBaseInfo({
                        condId: i,
                        market: o,
                        code: a,
                        name: d,
                        isRecreate: u,
                      });
                  case 9:
                    return (
                      (e.next = 11),
                      r(
                        t().mark(function e() {
                          var n = arguments;
                          return t().wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (n.length > 0 && void 0 !== n[0] && n[0]) ||
                                      x(),
                                    (e.next = 4),
                                    Y()
                                  );
                                case 4:
                                  X();
                                case 5:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })
                      )(_.isUpdate)
                    );
                  case 11:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        function () {
          return U.apply(this, arguments);
        }),
      updateSignStatus: P,
      investPreCheck:
        ((B = r(
          t().mark(function e() {
            return t().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), j();
                  case 2:
                    return (e.next = 4), D();
                  case 4:
                    return (e.next = 6), W();
                  case 6:
                    return (
                      (e.next = 8), E(null == f ? void 0 : f.$refs.condProtocol)
                    );
                  case 8:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        function () {
          return B.apply(this, arguments);
        }),
      submitInvest:
        ((N = r(
          t().mark(function e(r) {
            var i;
            return t().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (i = {
                        market: _.market,
                        scode: _.code,
                        name: _.name,
                        stockholder_code: q.stockholder_code,
                        cond_id: _.condId,
                        cond_type: a.CondTypesBackEnd.INVEST,
                        invest_period: _.investPeriod,
                        invest_weekday: _.investWeekday,
                        invest_date: _.investDate,
                        invest_time: _.investTime,
                        invest_quantity: _.investQuantity,
                        max_amount: _.maxAmount,
                        upper_limit: _.upperLimit,
                        lower_limit: _.lowerLimit,
                        buy_price_type: _.buyPriceType,
                      }),
                      _.validDayEnum &&
                        (i = n(
                          n({}, i),
                          {},
                          { valid_day_enum: _.validDayEnum }
                        )),
                      (e.next = 4),
                      R(i, r)
                    );
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, e);
          })
        )),
        function (e) {
          return N.apply(this, arguments);
        }),
      initTradeService: Y,
      clearWss: A,
      weakHint: H,
      confirmDialog: M,
      pricePrecision: V,
      conditionOrder: _,
      orderCheckService: C,
      stockInfo: I,
      quoteInfo: g,
      tradeAccount: q,
      isSubmitLoading: T,
    }
  );
};
