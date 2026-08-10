var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../@babel/runtime/helpers/slicedToArray"),
  n = require("../../../@babel/runtime/helpers/objectSpread2");
require("../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js");
var i = require("../../../common/vendor.js"),
  o = require("../../../config/enum.js"),
  c = require("../../../config/enum/condition.js");
require("../../../service/connect/index.js");
var u = require("../../../filters/money.js"),
  a = require("../../../utils/getPlatform.js"),
  s = require("../../../utils/toast.js"),
  d = require("./PriceCondition.js"),
  p = require("../../../stores/app/useMode.js"),
  l = require("./useConditionCheck.js"),
  f = require("./useConditionBase.js"),
  m = require("../../../components/NetworkDetect/useNetworkDetect.js"),
  v = require("../../../service/connect/maps.js"),
  y = {
    price: "0",
    amount: "0",
    order_price: "0",
    quantity: "0",
    cond_price: "0",
    trade_type: o.ACTION.BUY,
    valid_day_enum: "",
    cond_id: "",
  };
exports.usePriceCondition = function () {
  var h,
    k,
    q = null == (h = i.getCurrentInstance()) ? void 0 : h.proxy,
    _ = a.getPlatform(),
    T = _.isMiniProgram,
    w = _.isMpPlugin,
    b = p.useModeStore(),
    P = i.storeToRefs(b).simpleMode,
    S = i.reactive(new d.PriceCondition()),
    x = f.useConditionBase(S, { wbSchema: [v.SCHEME.TRADE_HQ] }),
    C = x.initCond,
    g = x.initTradeService,
    R = x.tradeAccount,
    j = x.stockInfo,
    I = x.quoteInfo,
    A = x.stockSetting,
    N = x.orderCheckService,
    D = x.isSubmitLoading,
    E = x.clearWss,
    M = x.checkInit,
    U = x.signedProtocol,
    B = x.updateSignStatus,
    O = x.orderSubmit,
    L = x.checkBlockTips,
    Q = !1,
    V = !1,
    $ = i.computed(function () {
      var e = A.value.filter(function (e) {
        return "1" === e.is_open || !(!P.value || "1/3" !== e.stock_shift);
      });
      return R.getQuickAmount(j.value, e);
    });
  i.watch(
    function () {
      return S.quantity;
    },
    function (e) {
      S.setAmount(e);
    }
  );
  var H,
    W,
    G,
    Y,
    F = i.ref(!1),
    J = l.useConditionCheck({
      conditionOrder: S,
      checkService: N,
      stockInfo: j,
    }),
    Z = J.checkPrice,
    z = J.checkStock,
    K = i.ref([]),
    X = i.computed(function () {
      if (void 0 !== j.value.spreadAcc) return j.value.spreadAcc;
      if (S.condPrice) {
        var e = S.condPrice.split(".")[1];
        if (e) return e.length;
      }
    }),
    ee = i.computed(function () {
      var e = 0,
        r = S.condPrice,
        n = (j.value.secu_quote || {}).dqj;
      return r && n
        ? ((e = u.formatNoUnit(((+r - n) / n) * 100, !0)),
          0 === Number(e) ? "+".concat(u.formatNoUnit(0)) : e)
        : "+".concat(u.formatNoUnit(0));
    }),
    re = i.computed(function () {
      var e = S.condPrice,
        r = (j.value.secu_quote || {}).dqj;
      if (!e || !r) return 0;
      var n = ((+e - r) / r) * 100;
      return ""
        .concat(n >= 0 ? "+" : "-")
        .concat(Math.floor(Math.abs(n) * Math.pow(10, 2)) / Math.pow(10, 2));
    });
  function ne() {
    return te.apply(this, arguments);
  }
  function te() {
    return (te = t(
      e().mark(function n() {
        var t, i, o, c, u;
        return e().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.prev = 0), (e.next = 3), g();
                case 3:
                  (t = z()),
                    (i = r(t, 2)),
                    (o = i[0]),
                    (c = i[1]),
                    S.setIsSupportStock(o),
                    o ||
                      !(null == c ? void 0 : c.retmsg) ||
                      Q ||
                      (k = s.showToast({
                        title: c.retmsg,
                        icon: "none",
                        duration: 3e3,
                      })),
                    (e.next = 11);
                  break;
                case 7:
                  throw (
                    ((e.prev = 7),
                    (e.t0 = e.catch(0)),
                    w &&
                      ((u = m.useNetworkDetect()),
                      (0, u.handleNetworkDetectError)(q, e.t0, function () {
                        ne();
                      })),
                    e.t0)
                  );
                case 11:
                case "end":
                  return e.stop();
              }
          },
          n,
          null,
          [[0, 7]]
        );
      })
    )).apply(this, arguments);
  }
  function ie() {
    return oe.apply(this, arguments);
  }
  function oe() {
    return (oe = t(
      e().mark(function r() {
        var n;
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (((e.t0 = S.isStockSet), !e.t0)) {
                  e.next = 4;
                  break;
                }
                return (e.next = 4), ne();
              case 4:
                T
                  ? i.index.stopPullDownRefresh()
                  : null == (n = null == q ? void 0 : q.$refs.condRef) ||
                    n.resetRefresh();
              case 5:
              case "end":
                return e.stop();
            }
        }, r);
      })
    )).apply(this, arguments);
  }
  function ce(e) {
    var r,
      n = ((null == (r = j.value) ? void 0 : r.secu_quote) || {}).dqj,
      t = Number(e),
      i = Number(n);
    n &&
      (t > i
        ? (S.remindType = c.PriceConditionRemindType.upTo)
        : t < i
        ? (S.remindType = c.PriceConditionRemindType.downTo)
        : ((S.remindType =
            S.tradeType === o.ACTION.SELL
              ? c.PriceConditionRemindType.upTo
              : c.PriceConditionRemindType.downTo),
          K.value.push(c.CondWeakTipsText.meet)));
  }
  function ue() {
    var e = q.$route.query.cond_info,
      r = {};
    if (e)
      try {
        var t = decodeURIComponent(e);
        t.includes("{") || (t = decodeURIComponent(t)), (r = JSON.parse(t));
      } catch (e) {
        r = {};
      }
    return n(n({}, q.$route.query), r);
  }
  function ae() {
    var e, r, t, i, u, a;
    V = !0;
    var s = ue(),
      d = n(
        n({}, y),
        {},
        {
          cond_price:
            null !==
              (e =
                null == (i = null == (t = j.value.quote) ? void 0 : t.quote)
                  ? void 0
                  : i.dqj) && void 0 !== e
              ? e
              : "",
          quantity: null !== (r = j.value.minAmount) && void 0 !== r ? r : 0,
        },
        s
      );
    if (
      ((S.condPrice = d.cond_price),
      (S.price = d.order_price),
      (S.amount = d.quantity),
      (S.tradeType = d.trade_type),
      (S.validDayEnum = d.valid_day_enum || ""),
      (S.endTime = d.end_time),
      (S.buyPriceType = d.buy_price_type || c.PriceType.SellOne),
      S.validDayEnum || (S.validDayEnum = o.ORDER_VALIDATES.YEAR),
      !S.isUpdate && !S.isRecreate)
    ) {
      var p =
        null == (a = null == (u = j.value.quote) ? void 0 : u.quote)
          ? void 0
          : a.dqj;
      p && ((S.condPrice = p), (S.price = p));
    }
    setTimeout(function () {
      V = !1;
    }, 0);
  }
  return (
    i.watch(
      function () {
        return S.condPrice;
      },
      function (e) {
        V || (S.price = e), ce(e);
      }
    ),
    i.watch(
      [
        function () {
          return S.price;
        },
        function () {
          return R.max_buy_money;
        },
      ],
      function (e) {
        var n = r(e, 1)[0],
          t = Number(n);
        t &&
          !isNaN(t) &&
          R.max_buy_money &&
          R.debounceForGetMaxBuyQty(j.value, n);
      }
    ),
    i.onBeforeUnmount(function () {
      (Q = !0), k && k();
    }),
    {
      handleRefresh: ie,
      switchStock:
        ((Y = t(
          e().mark(function r(n) {
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return S.changeStock(n), (e.next = 3), ie();
                  case 3:
                    ae();
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, r);
          })
        )),
        function (e) {
          return Y.apply(this, arguments);
        }),
      initPriceCondition:
        ((G = t(
          e().mark(function r() {
            var n, i, o, c, u, a, s;
            return e().wrap(function (r) {
              for (;;)
                switch ((r.prev = r.next)) {
                  case 0:
                    if (
                      ((n = ue() || {}),
                      (i = n.cond_id),
                      (o = n.market),
                      (c = n.code),
                      (u = n.name),
                      (a = n.is_recreate),
                      S.isStockSet)
                    ) {
                      r.next = 6;
                      break;
                    }
                    if (o && c) {
                      r.next = 4;
                      break;
                    }
                    return r.abrupt("return");
                  case 4:
                    (s = decodeURIComponent(decodeURIComponent(u || ""))),
                      S.setBaseInfo({
                        condId: i,
                        market: o,
                        code: c,
                        name: s,
                        isRecreate: a,
                      });
                  case 6:
                    return (
                      (r.next = 8),
                      t(
                        e().mark(function r() {
                          var n = arguments;
                          return e().wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  return (
                                    (n.length > 0 && void 0 !== n[0] && n[0]) ||
                                      C(),
                                    (e.next = 4),
                                    ne()
                                  );
                                case 4:
                                  ae();
                                case 5:
                                case "end":
                                  return e.stop();
                              }
                          }, r);
                        })
                      )(S.isUpdate)
                    );
                  case 8:
                  case "end":
                    return r.stop();
                }
            }, r);
          })
        )),
        function () {
          return G.apply(this, arguments);
        }),
      updateSignStatus: B,
      pricePreCheck:
        ((W = t(
          e().mark(function r() {
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (K.value = []), ce(S.condPrice), (e.next = 4), L();
                  case 4:
                    return (e.next = 6), M();
                  case 6:
                    return (e.next = 8), Z();
                  case 8:
                    return (
                      (e.next = 10),
                      U(null == q ? void 0 : q.$refs.condProtocol)
                    );
                  case 10:
                  case "end":
                    return e.stop();
                }
            }, r);
          })
        )),
        function () {
          return W.apply(this, arguments);
        }),
      submitPrice:
        ((H = t(
          e().mark(function r(t) {
            var i;
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (
                      (i = {
                        market: S.market,
                        scode: S.code,
                        name: S.name,
                        stockholder_code: R.stockholder_code,
                        cond_id: S.condId,
                        cond_type: c.CondTypesBackEnd.PRICE,
                        trade_type: S.tradeType,
                        cond_price: S.condPrice,
                        order_price: S.price,
                        quantity: S.amount,
                        remind_type: S.remindType,
                      }),
                      S.validDayEnum &&
                        (i = n(
                          n({}, i),
                          {},
                          { valid_day_enum: S.validDayEnum }
                        )),
                      (e.next = 4),
                      O(i, t)
                    );
                  case 4:
                  case "end":
                    return e.stop();
                }
            }, r);
          })
        )),
        function (e) {
          return H.apply(this, arguments);
        }),
      initTradeService: ne,
      clearWss: E,
      weakHint: K,
      confirmDialog: F,
      pricePrecision: X,
      triggerValZdf: ee,
      triggerValDiff: re,
      getQuickAmountValue: function (e, r) {
        return $.value[r][e] || "--";
      },
      conditionOrder: S,
      orderCheckService: N,
      stockInfo: j,
      quoteInfo: I,
      tradeAccount: R,
      isSubmitLoading: D,
    }
  );
};
