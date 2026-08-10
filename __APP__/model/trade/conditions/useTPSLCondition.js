var e = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
  t = require("../../../@babel/runtime/helpers/slicedToArray"),
  n = require("../../../@babel/runtime/helpers/asyncToGenerator");
require("../../../app.js");
var r = require("../../../common/vendor.js"),
  c = require("./TPSLCondition.js"),
  o = require("./useConditionBase.js"),
  a = require("./useTPSLCheck.js"),
  u = require("../../../config/enum/condition.js"),
  i = require("../../../utils/getPlatform.js"),
  s = require("../../../utils/toast.js"),
  l = require("./tpsl-utils.js"),
  d = require("../../../components/NetworkDetect/useNetworkDetect.js");
exports.useTPSLCondition = function () {
  var p,
    y,
    _ = null == (p = r.getCurrentInstance()) ? void 0 : p.proxy,
    f = i.getPlatform(),
    k = f.isMiniProgram,
    v = f.isMpPlugin,
    m = r.reactive(new c.TPSLCondition()),
    b = !1,
    h = r.ref([]),
    P = r.ref(!1),
    z = r.ref("0");
  r.watch(
    function () {
      return m.basePrice;
    },
    function (e) {
      m.setPrice(e);
    }
  ),
    r.watch(
      function () {
        return m.quantity;
      },
      function (e) {
        m.setAmount(e);
      }
    );
  var x,
    C,
    T,
    S,
    w,
    q = o.useConditionBase(m),
    g = q.initCond,
    I = q.initTradeService,
    Z = q.tradeAccount,
    L = q.stockInfo,
    V = q.quoteInfo,
    R = q.orderCheckService,
    j = q.isSubmitLoading,
    B = q.checkInit,
    F = q.signedProtocol,
    D = q.updateSignStatus,
    E = q.orderSubmit,
    N = q.queryInfo,
    A = q.checkBlockTips,
    M = r.computed(function () {
      return Z.max_sell_qty;
    }),
    Q = a.useTPSLCheck({
      tpslCondition: m,
      checkService: R,
      stockInfo: L,
      currentMaxSell: M,
    }),
    U = Q.weekHint,
    H = Q.requiredFieldTips,
    $ = Q.clearRequiredFieldTips,
    G = Q.checkTPSL,
    O = Q.checkStock;
  function J() {
    return K.apply(this, arguments);
  }
  function K() {
    return (K = n(
      e().mark(function n() {
        var r, c, o, a, u, i, l, p, f, k;
        return e().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.prev = 0), (e.next = 3), I();
                case 3:
                  (r = e.sent),
                    (c = t(r, 1)),
                    (o = c[0]),
                    (a = o.holdstock),
                    (u = void 0 === a ? [] : a),
                    (h.value = u),
                    (P.value = !0),
                    (function (e) {
                      var t = e.find(function (e) {
                        return m.code === e.code;
                      });
                      t &&
                        ((z.value = t.hold_num),
                        m.setCostPrice(
                          (+t.hold_cost).toFixed(L.value.spreadAcc || 2)
                        ));
                    })(u),
                    (i = O()),
                    (l = t(i, 2)),
                    (p = l[0]),
                    (f = l[1]),
                    m.setIsSupportStock(p),
                    p ||
                      !(null == f ? void 0 : f.retmsg) ||
                      b ||
                      (y = s.showToast({
                        title: f.retmsg,
                        icon: "none",
                        duration: 3e3,
                      })),
                    (e.next = 17);
                  break;
                case 13:
                  throw (
                    ((e.prev = 13),
                    (e.t0 = e.catch(0)),
                    v &&
                      ((k = d.useNetworkDetect()),
                      (0, k.handleNetworkDetectError)(_, e.t0, function () {
                        J();
                      })),
                    e.t0)
                  );
                case 17:
                case "end":
                  return e.stop();
              }
          },
          n,
          null,
          [[0, 13]]
        );
      })
    )).apply(this, arguments);
  }
  function W() {
    return X.apply(this, arguments);
  }
  function X() {
    return (X = n(
      e().mark(function t() {
        return e().wrap(function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return g(), (e.next = 3), J();
              case 3:
                !(function () {
                  var e = l.isNumeric(m.costPrice) ? m.costPrice : 0;
                  "" === m.basePrice && +e >= 0 && m.setBasePrice("".concat(e));
                })();
              case 4:
              case "end":
                return e.stop();
            }
        }, t);
      })
    )).apply(this, arguments);
  }
  return (
    r.watch(
      [
        function () {
          var e, t;
          return null == (t = null == (e = L.value) ? void 0 : e.secu_quote)
            ? void 0
            : t.dqj;
        },
        function () {
          return Z.max_buy_money;
        },
      ],
      function (e) {
        var n = t(e, 1)[0],
          r = Number(n);
        r &&
          !isNaN(r) &&
          Z.max_buy_money &&
          Z.debounceForGetMaxBuyQty(L.value, n);
      }
    ),
    r.onBeforeUnmount(function () {
      (b = !0), y && y();
    }),
    {
      currentHoldItemQuantity: z,
      requiredFieldTips: H,
      clearRequiredFieldTips: $,
      weekHint: U,
      tpslCondition: m,
      initTPSLCondition:
        ((w = n(
          e().mark(function t() {
            var r, c, o, a, u, i, s;
            return e().wrap(function (t) {
              for (;;)
                switch ((t.prev = t.next)) {
                  case 0:
                    if (
                      ((r = (null == _ ? void 0 : _.$route.query) || {}),
                      (c = r.cond_id),
                      (o = r.market),
                      (a = r.code),
                      (u = r.name),
                      (i = r.is_recreate),
                      m.isStockSet)
                    ) {
                      t.next = 6;
                      break;
                    }
                    if (o && a) {
                      t.next = 4;
                      break;
                    }
                    return t.abrupt("return");
                  case 4:
                    (s = decodeURIComponent(decodeURIComponent(u || ""))),
                      m.setBaseInfo({
                        condId: c,
                        market: o,
                        code: a,
                        name: s,
                        isRecreate: i,
                      });
                  case 6:
                    if (!m.isUpdate) {
                      t.next = 11;
                      break;
                    }
                    return (
                      (t.next = 9),
                      (function () {
                        var t = n(
                          e().mark(function t(n) {
                            var r;
                            return e().wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    return (e.next = 2), J();
                                  case 2:
                                    return (e.next = 4), N(n);
                                  case 4:
                                    if (((e.t0 = e.sent.condinfo), e.t0)) {
                                      e.next = 7;
                                      break;
                                    }
                                    e.t0 = {};
                                  case 7:
                                    (r = e.t0),
                                      m.setLatestBasePrice(r.base_price),
                                      m.setBasePrice(r.base_price),
                                      r.zy_cond_type &&
                                        m.setZyCondType(r.zy_cond_type),
                                      r.zs_cond_type &&
                                        m.setZsCondType(r.zs_cond_type),
                                      m.setZyCondPrice(r.zy_cond_price),
                                      m.setZsCondPrice(r.zs_cond_price),
                                      m.setZyCondValue(r.zy_cond_value),
                                      m.setZsCondValue(r.zs_cond_value),
                                      m.setOrderPriceType(r.order_price_type),
                                      m.setQuatity(r.quantity),
                                      m.setValidDayEnum(r.valid_day_enum),
                                      m.setEndTime(+r.end_time),
                                      m.setZyPullbackFlag(
                                        "1" === r.zy_pullback_flag
                                      ),
                                      r.zy_pullback_type &&
                                        m.setZyPullbackType(r.zy_pullback_type),
                                      m.setZyPullbackValue(
                                        r.zy_pullback_value || ""
                                      );
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
                      })()(c)
                    );
                  case 9:
                    t.next = 17;
                    break;
                  case 11:
                    return (t.next = 13), W();
                  case 13:
                    if (((t.t0 = m.isRecreate), !t.t0)) {
                      t.next = 17;
                      break;
                    }
                    return (
                      (t.next = 17),
                      (function () {
                        var t = n(
                          e().mark(function t(n) {
                            var r, c;
                            return e().wrap(function (e) {
                              for (;;)
                                switch ((e.prev = e.next)) {
                                  case 0:
                                    if (n) {
                                      e.next = 2;
                                      break;
                                    }
                                    return e.abrupt("return");
                                  case 2:
                                    return (e.next = 4), N(n);
                                  case 4:
                                    (r = e.sent),
                                      (c = r.condinfo || {}).zy_cond_type &&
                                        m.setZyCondType(c.zy_cond_type),
                                      c.zs_cond_type &&
                                        m.setZsCondType(c.zs_cond_type),
                                      m.setZyCondPrice(c.zy_cond_price),
                                      m.setZsCondPrice(c.zs_cond_price),
                                      m.setZyCondValue(c.zy_cond_value),
                                      m.setZsCondValue(c.zs_cond_value),
                                      m.setOrderPriceType(c.order_price_type),
                                      m.setQuatity(c.quantity),
                                      m.setValidDayEnum(c.valid_day_enum),
                                      m.setEndTime(+c.end_time),
                                      m.setZyPullbackFlag(
                                        "1" === c.zy_pullback_flag
                                      ),
                                      c.zy_pullback_type &&
                                        m.setZyPullbackType(c.zy_pullback_type),
                                      m.setZyPullbackValue(
                                        c.zy_pullback_value || ""
                                      );
                                  case 10:
                                  case "end":
                                    return e.stop();
                                }
                            }, t);
                          })
                        );
                        return function (e) {
                          return t.apply(this, arguments);
                        };
                      })()(c)
                    );
                  case 17:
                  case "end":
                    return t.stop();
                }
            }, t);
          })
        )),
        function () {
          return w.apply(this, arguments);
        }),
      tpslPreCheck:
        ((S = n(
          e().mark(function t() {
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    return (e.next = 2), A();
                  case 2:
                    return (e.next = 4), B();
                  case 4:
                    return (e.next = 6), G();
                  case 6:
                    return (
                      (e.next = 8), F(null == _ ? void 0 : _.$refs.condProtocol)
                    );
                  case 8:
                  case "end":
                    return e.stop();
                }
            }, t);
          })
        )),
        function () {
          return S.apply(this, arguments);
        }),
      submitTPSL:
        ((T = n(
          e().mark(function t(n) {
            var r, c, o;
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (m.basePrice && !(+m.basePrice <= 0)) {
                      e.next = 2;
                      break;
                    }
                    return e.abrupt(
                      "return",
                      void (
                        null == (r = null == n ? void 0 : n.onFail) ||
                        r.call(n, {
                          retcode: "BASE_PRICE_INVALID",
                          retmsg: "基准价异常，请重新设置后提交",
                        })
                      )
                    );
                  case 2:
                    return (
                      (c = m.zyPullbackFlag && !!m.zyPullbackValue),
                      (o = {
                        cond_id: m.condId,
                        market: m.market,
                        scode: m.code,
                        name: m.name,
                        stockholder_code: Z.stockholder_code,
                        cond_type: u.CondTypesBackEnd.TPSL,
                        quantity: m.amount,
                        valid_day_enum: m.validDayEnum,
                        base_price: m.basePrice,
                        zy_cond_type: m.zyCondValue ? m.zyCondType : "",
                        zs_cond_type: m.zsCondValue ? m.zsCondType : "",
                        zy_cond_price: m.zyCondPrice,
                        zs_cond_price: m.zsCondPrice,
                        zy_cond_value: m.zyCondValue,
                        zs_cond_value: m.zsCondValue,
                        order_price_type: m.orderPriceType,
                        zy_pullback_flag: m.zyPullbackFlag ? "1" : "0",
                        zy_pullback_type: c ? m.zyPullbackType : "",
                        zy_pullback_value: c ? m.zyPullbackValue : "",
                      }),
                      (e.next = 5),
                      E(o, n)
                    );
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, t);
          })
        )),
        function (e) {
          return T.apply(this, arguments);
        }),
      switchStock:
        ((C = n(
          e().mark(function t(n) {
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    m.changeStock(n), W();
                  case 1:
                  case "end":
                    return e.stop();
                }
            }, t);
          })
        )),
        function (e) {
          return C.apply(this, arguments);
        }),
      handleRefresh:
        ((x = n(
          e().mark(function t() {
            var n;
            return e().wrap(function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    if (((e.t0 = m.isStockSet), !e.t0)) {
                      e.next = 4;
                      break;
                    }
                    return (e.next = 4), J();
                  case 4:
                    k
                      ? r.index.stopPullDownRefresh()
                      : null ==
                          (n = null == _ ? void 0 : _.$refs.condTPSLRef) ||
                        n.resetRefresh();
                  case 5:
                  case "end":
                    return e.stop();
                }
            }, t);
          })
        )),
        function () {
          return x.apply(this, arguments);
        }),
      initTradeService: J,
      tradeAccount: Z,
      stockInfo: L,
      quoteInfo: V,
      holdStockList: h,
      isTradeServiceLoaded: P,
      isSubmitLoading: j,
      updateSignStatus: D,
    }
  );
};
