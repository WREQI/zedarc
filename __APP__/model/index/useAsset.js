var o = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  e = require("../../@babel/runtime/helpers/asyncToGenerator"),
  n = require("../../@babel/runtime/helpers/createForOfIteratorHelper"),
  t = require("../../@babel/runtime/helpers/objectSpread2"),
  r = require("../../@babel/runtime/helpers/toConsumableArray"),
  i = require("../../common/vendor.js"),
  d = require("../../config/enum.js"),
  a = require("../../common/components/Notify/index.js"),
  s = require("../trade/Order.js"),
  u = require("../trade/utils.js"),
  c = require("./assetDataProcess.js"),
  l = require("./strategy.js"),
  f = require("../../config/key.js");
require("../../service/broker.js");
var _ = require("../../service/aegis/platform/not-wujie.js"),
  v = require("../../service/aegis/utils.js"),
  m = require("../../utils/getPlatform.js"),
  p = require("../../stores/user/useUserinfo.js"),
  h = require("../../stores/app/useMode.js"),
  y = require("../../cgi/delisted.js"),
  b = require("../../config/enum/condition.js"),
  k = require("../../utils/hardware.js"),
  g = require("../../config/broker/11100/index.js");
exports.useAsset = function () {
  var S,
    C = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
    T = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : i.noop,
    E = i.getCurrentInstance().proxy,
    q = m.getPlatform(),
    P = q.isZxg,
    j = q.platform,
    D = "ios" === j,
    N = {},
    x = {},
    A = {},
    z = { fund: 0, stock: 0 },
    O = g.brokerConfig.trade.notification,
    w = O.showBeepSwitch,
    H = O.showVibrateSwitch,
    I = i.reactive({
      isAssetV2Control: !1,
      isFetchedData: !1,
      fundsinfo: { earn_val_today: "", total_money: "", pos_val: "" },
      stock: [],
      debt: [],
      holdbalance: [],
      holdoutbalance: [],
      pzstock: [],
      history: [],
      pgstock: [],
      holdrepoHistory: [],
      orderinfoCombine: {},
      orderinfo: {},
      borderinfo: {},
      condlist: [],
      condTotalNum: 0,
      condNumber: 0,
      repoCond: {},
      holdDelisted: [],
    }),
    L = i.ref([]),
    R = i.ref([]),
    V = i.ref([]),
    J = i.ref({}),
    M = i.ref(!1),
    U = new Map(),
    B = Date.now(),
    Q = i.ref(!1),
    G = null,
    K = null,
    $ = i.computed(function () {
      return "(".concat(
        I.stock.length +
          I.debt.length +
          I.holdbalance.length +
          I.holdoutbalance.length +
          I.pzstock.length,
        ")"
      );
    });
  function F(o, e) {
    var n = o || 0,
      t = e || 0;
    return n <= 0 && t <= 0 ? "(0)" : "(".concat(n, "/").concat(t, ")");
  }
  i.watch(
    function () {
      return I.history;
    },
    function (o, e) {
      !(function (o, e) {
        o.length > e.length && T();
      })(o, e);
      var n = {
        newHistory: o,
        oldHistory: e,
        revokingItemsMaps: J.value,
        enablePredictiveLogic: M.value,
        isTradeTime: C.value,
        predictivedMap: N,
      };
      !(function (o) {
        var e = o.undoneOrderList,
          n = o.doneOrderList,
          t = o.combinedOrderList,
          r = o.trigger,
          d = o.needDelKeys,
          a = o.notifyArray;
        (L.value = e),
          (R.value = n),
          (V.value = t),
          r && i.index.$emit("hit-predictive"),
          a.length > 0 && vo(a[a.length - 1]),
          d.forEach(function (o) {
            delete J.value[o];
          });
      })(c.assetDataProcess.historyChange(n));
    }
  ),
    i.onBeforeUnmount(function () {});
  var Y = i.computed(function () {
      var o = I.orderinfoCombine;
      return F(o.order_num_undone, o.order_num_all);
    }),
    Z = i.computed(function () {
      var o = I.orderinfo;
      return F(o.order_num_undone, o.order_num_all);
    }),
    W = i.computed(function () {
      var o = I.condlist.filter(function (o) {
        return b.LEGAL_COND_TYPES.includes(o.cond_type);
      });
      return eo.value
        ? [t(t({}, oo.value), {}, { isRepoCond: !0 })].concat(r(o))
        : o;
    }),
    X = i.computed(function () {
      if (I.condNumber) return I.condNumber || "";
      if (eo.value) {
        var o = +(I.condTotalNum || 0) + 1;
        return isNaN(o) ? "" : o;
      }
      return I.condTotalNum || "";
    }),
    oo = i.computed(function () {
      return I.repoCond;
    }),
    eo = i.computed(function () {
      var o;
      return (
        !i.isEmpty(oo.value) && (null == (o = oo.value) ? void 0 : o.stock_code)
      );
    }),
    no = i.throttle(function (o) {
      var e = o.code,
        n = o.market,
        t = o.dqj,
        r = o.market_state;
      (A["".concat(e, ":").concat(n)] = { dqj: t, marketState: r }),
        i.index.$emit("$$updateDqj");
    }, 2e3);
  function to(o, e) {
    i.isEmpty(o) || (I.orderinfo = o), i.isEmpty(e) || (I.borderinfo = e);
    var n = I.orderinfo || {},
      t = I.borderinfo || {},
      r = i.__CJS__export_add__(n.order_num_all || 0, t.order_num_all || 0),
      d = i.__CJS__export_add__(
        n.order_num_undone || 0,
        t.order_num_undone || 0
      );
    (I.orderinfoCombine = { order_num_all: r, order_num_undone: d }),
      0 === I.orderinfoCombine.order_num_all && ((I.history = []), (x = {}));
  }
  function ro(o) {
    (I.fundsinfo = o), (z.fund = z.fund + 1);
  }
  function io(o) {
    var e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
    if (((I.stock = o), (z.stock = z.stock + 1), e && K)) _o(K);
    else {
      var n = i.index.getStorageSync(f.ASSET_SORT_TYPE) || {
        key: "hold_val",
        value: lo.DES,
      };
      _o({ sortKey: n.key, sortOrder: n.value });
    }
  }
  function ao() {
    var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return o.reduce(function (o, e) {
      return o + Number(e.total_agree);
    }, 0);
  }
  function so() {
    var o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
    return o.reduce(function (o, e) {
      return o + Number(e.purchase_amt / 100);
    }, 0);
  }
  function uo(o) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
      n = {
        dataVersion: z,
        fundsinfo: I.fundsinfo,
        stock: I.stock,
        quotations: o,
        spread: e,
      };
    !(function (o) {
      var e = o.stock,
        n = o.fundsinfo,
        t = o.origin;
      z.stock === t.dataVersion.stock && (I.stock = e),
        z.fund === t.dataVersion.fund && (I.fundsinfo = n);
    })(c.assetDataProcess.batchProcessQuotationChange(n));
  }
  function co(o) {
    var e = o.market,
      n = o.code,
      t = o.dqj,
      r = o.zdf,
      i = o.zde,
      d = o.spread,
      a = void 0 === d ? 2 : d,
      s = {
        dataVersion: z,
        fundsinfo: I.fundsinfo,
        stock: I.stock,
        market: e,
        code: n,
        dqj: t,
        zdf: r,
        zde: i,
        spread: a,
      };
    !(function (o) {
      var e = o.stock,
        n = o.fundsinfo,
        t = o.origin;
      z.stock === t.dataVersion.stock && (I.stock = e),
        z.fund === t.dataVersion.fund && (I.fundsinfo = n);
    })(c.assetDataProcess.processQuotationChange(s));
  }
  var lo = { RESET: 0, DES: 1, ASC: 2 };
  function fo(o, e) {
    var n = e.sortKey,
      t = e.sortOrder;
    return t === lo.RESET
      ? o.sort(function (o, e) {
          return o._index - e._index;
        })
      : o.sort(function (o, e) {
          return t === lo.DES ? e[n] - o[n] : o[n] - e[n];
        });
  }
  function _o(o) {
    var e = o.sortKey,
      n = o.sortOrder;
    I.stock = fo(I.stock, { sortKey: e, sortOrder: n });
  }
  function vo(o) {
    var e = p.useUserinfoStore(),
      n = h.useModeStore(),
      r = u.getNotifyMessage(
        o,
        function (o) {
          i.index.$emit("notify-click", o);
        },
        n.simpleMode,
        e.accountMode
      ),
      d = e.userinfo,
      s = d.tradesuccshake,
      c = d.tradesuccsound;
    r.message &&
      "TradeStock" === E.$options.name &&
      (r.title.includes("提交") || a.Notify(t(t({}, r), {}, { context: E })),
      "1" !== c ||
        !w ||
        (!P && D) ||
        (po(),
        k.beep(function (o) {
          G = o;
        })),
      "1" === s && H && k.vibrate());
  }
  var mo,
    po = function () {
      k.destroyInnerAudioContext(G);
    };
  return {
    data: I,
    numHolding: $,
    numHistory: Y,
    numCondition: X,
    numStockHistory: Z,
    enablePredictiveLogic: M,
    undoneOrderList: L,
    doneOrderList: R,
    combinedOrderList: V,
    noTriggerConditions: W,
    revokingItemsMaps: J,
    newPriceMap: A,
    QUOTATION_CACHE: U,
    isDifferenceInHoldAndCanuse: Q,
    updateDqjInHistory: no,
    updateByCGI: function (o) {
      var e = o.fundsinfo,
        d = void 0 === e ? {} : e,
        a = o.holdstock,
        s = void 0 === a ? [] : a,
        u = o.pgstock,
        l = void 0 === u ? [] : u,
        f = o.holdrepo_today,
        v = void 0 === f ? [] : f,
        m = o.holdrepo_history,
        h = void 0 === m ? [] : m,
        y = o.orderinfo,
        b = void 0 === y ? {} : y,
        k = o.orderlist,
        g = void 0 === k ? [] : k,
        S = o.holdbalance,
        C = void 0 === S ? [] : S,
        T = o.out_holdbalance,
        E = void 0 === T ? [] : T,
        q = o.balancelist,
        P = void 0 === q ? [] : q,
        j = o.pzstock,
        D = void 0 === j ? [] : j,
        N = o.borderinfo,
        A = void 0 === N ? {} : N,
        z = o.market_state_h,
        O = o.market_state_s,
        w = o.market_state_kc_after_h,
        H = o.market_state_trade_after_all,
        L = o.market_state_bj,
        R = o.market_state_nq,
        V = o.market_state_hk,
        J = o.hold_delisted,
        M = void 0 === J ? [] : J,
        U = o.cond_list,
        B = void 0 === U ? [] : U,
        G = o.cond_total_num,
        K = o.cond_num,
        $ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        F = $.sort,
        Y = void 0 === F || F,
        Z = $.updateCondNum,
        W = void 0 === Z || Z;
      return new Promise(function (o) {
        i.isEmpty(l) || (I.pgstock = l);
        var e = {
          historyMap: x,
          fundsinfo: d,
          holdstock: s,
          pgstock: I.pgstock,
          orderlist: g,
          balancelist: P,
          marketStateH: z,
          marketStateS: O,
          marketStateKcAfterH: w,
          marketStateAfterTrade: H,
          marketStateBJ: L,
          marketStateNQ: R,
          marketStateHK: V,
          holdrepoHistory: h,
          holdrepoToday: v,
          holdbalance: C,
          holdoutbalance: E,
          borderinfo: A,
          orderinfo: b,
          condlist: B,
          condTotalNum: G,
          condNumber: K,
          holdDelisted: M,
        };
        !(function (e) {
          var d,
            a,
            s,
            u,
            l,
            f,
            v,
            m,
            h,
            y,
            b,
            k = e.holdstock,
            g = e.orders,
            S = e.historyMap,
            C = e.origin,
            T = e.isDifferenceInHoldAndCanuse;
          if (
            ((Q.value = "1" === T), io(k, Y), !i.isEmpty(C.holdrepoHistory))
          ) {
            var E,
              q = n(C.holdrepoHistory);
            try {
              for (q.s(); !(E = q.n()).done; ) {
                var P = E.value;
                (P.spread = 3), (P.history = !0);
              }
            } catch (o) {
              q.e(o);
            } finally {
              q.f();
            }
            (I.holdrepoHistory = C.holdrepoHistory),
              (I.debt = C.holdrepoHistory);
          }
          var j = p.useUserinfoStore(),
            N =
              "1" ===
                (null == (d = j.userinfo) ? void 0 : d.assets_drawer_control) ||
              I.isAssetV2Control;
          if (!i.isEmpty(C.holdrepoToday)) {
            var A,
              z = n(C.holdrepoToday);
            try {
              for (z.s(); !(A = z.n()).done; ) {
                A.value.spread = 3;
              }
            } catch (o) {
              z.e(o);
            } finally {
              z.f();
            }
            var O = [].concat(r(C.holdrepoToday), r(I.holdrepoHistory));
            I.debt = O;
          }
          if (
            ((I.isFetchedData = !0),
            i.isEmpty(C.fundsinfo) ||
              ro(N ? t(t({}, I.fundsinfo), C.fundsinfo) : C.fundsinfo),
            (I.holdbalance = C.holdbalance),
            i.isEmpty(C.holdoutbalance) ||
              (I.holdoutbalance = C.holdoutbalance),
            "1" ===
            (null == (a = j.userinfo) ? void 0 : a.delisted_position_control)
              ? i.isEmpty(C.holdDelisted) || (I.holdDelisted = C.holdDelisted)
              : (I.holdDelisted = []),
            (I.condTotalNum = C.condTotalNum),
            W && (I.condNumber = C.condNumber),
            (I.condlist = C.condlist),
            i.isEmpty(D) || (I.pzstock = D),
            (I.history = g),
            (x = S),
            to(C.orderinfo, C.borderinfo),
            N)
          )
            try {
              (I.fundsinfo.bal_val = i.__CJS__export_add__(
                ao(I.debt),
                so(I.holdbalance)
              )),
                (I.fundsinfo.fe_funds_balance = i.__CJS__export_add__(
                  (null == (s = I.fundsinfo) ? void 0 : s.funds_balance) || 0,
                  (null == (u = null == I ? void 0 : I.fundsinfo)
                    ? void 0
                    : u.unknown) || 0
                )),
                (I.fundsinfo.feCashPosition = c.assetDataProcess.calcPosition(
                  I.fundsinfo.fe_funds_balance,
                  I.fundsinfo.total_money
                )),
                (I.fundsinfo.fe_freeze_money = i.__CJS__export_add__(
                  (null == (l = null == I ? void 0 : I.fundsinfo)
                    ? void 0
                    : l.freeze_money) || 0,
                  (null == (f = null == I ? void 0 : I.fundsinfo)
                    ? void 0
                    : f.unknown) || 0
                )),
                (null == (v = I.debt) ? void 0 : v.length) > 0 &&
                  I.debt.forEach(function (o, e) {
                    I.debt[e].position = c.assetDataProcess.calcPosition(
                      o.total_agree,
                      I.fundsinfo.total_money
                    );
                  }),
                (null == (m = I.holdbalance) ? void 0 : m.length) > 0 &&
                  I.holdbalance.forEach(function (o, e) {
                    I.holdbalance[e].position = c.assetDataProcess.calcPosition(
                      i.__CJS__export_div__(o.purchase_amt, 100),
                      I.fundsinfo.total_money
                    );
                  });
            } catch (o) {
              null ==
                (b =
                  null == (y = null == (h = _.aegisReporter) ? void 0 : h.sdk)
                    ? void 0
                    : y.error) ||
                b.call(y, {
                  msg: "onUpdateByCGI error",
                  ext3: JSON.stringify(o),
                });
            }
          o();
        })(c.assetDataProcess.updateByCGI(e));
      });
    },
    updateByPush: function (o) {
      var e = o.fundsinfo,
        d = void 0 === e ? {} : e,
        a = o.holdstock,
        s = void 0 === a ? [] : a,
        u = o.orderlist,
        l = void 0 === u ? [] : u,
        f = o.orderinfo,
        v = void 0 === f ? {} : f,
        m = o.holdrepo_today,
        h = void 0 === m ? [] : m,
        y = o.position_num,
        b = void 0 === y ? {} : y,
        k = o.holdbalance,
        g = void 0 === k ? [] : k,
        S = o.balancelist,
        C = o.out_holdbalance,
        T = void 0 === C ? [] : C,
        E = o.pzstock,
        q = void 0 === E ? [] : E,
        P = o.borderinfo,
        j = void 0 === P ? {} : P,
        D = o.cond_list,
        N = void 0 === D ? [] : D,
        A = o.total_num,
        z = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        O = z.sort,
        w = void 0 === O || O;
      return new Promise(function (o) {
        var e,
          a = p.useUserinfoStore();
        i.isEmpty(d) &&
          (null == s ? void 0 : s.length) > 0 &&
          (d = I.fundsinfo || {});
        var u = {
          historyMap: x,
          fundsinfo: d,
          prevHoldstock: I.stock,
          holdstock: s,
          pgstock: I.pgstock,
          orderlist: l,
          balancelist: S,
          holdbalance: g,
          holdoutbalance: T,
          positionNum: b,
          holdrepoToday: h,
          orderinfo: v,
          borderinfo: j,
          condTotalNum: A,
          condlist: N,
          earnCalcMode:
            "1" ===
            (null == (e = a.userinfo) ? void 0 : e.home_incometoday_control)
              ? "2"
              : "1",
        };
        !(function (e) {
          var a,
            s,
            u,
            l,
            f,
            v,
            m,
            h,
            y,
            b,
            k = e.holdstock,
            g = e.orders,
            S = e.diffacc,
            C = e.historyMap,
            T = e.origin,
            E = e.isDifferenceInHoldAndCanuse;
          (Q.value = "1" === E),
            i.isEmpty(k) ||
              (io(k, w),
              i.isEmpty(I.fundsinfo) ||
                (I.fundsinfo.earn_val_today = i.__CJS__export_add__(
                  I.fundsinfo.earn_val_today || 0,
                  S
                ))),
            i.isEmpty(g) || (I.history = g),
            (x = C),
            i.isEmpty(d) || ro(t(t({}, I.fundsinfo), T.fundsinfo)),
            to(T.orderinfo, T.borderinfo);
          var P =
            "1" ===
              (null == (a = p.useUserinfoStore().userinfo)
                ? void 0
                : a.assets_drawer_control) || I.isAssetV2Control;
          if (!i.isEmpty(T.holdrepoToday)) {
            var j,
              D = n(T.holdrepoToday);
            try {
              for (D.s(); !(j = D.n()).done; ) {
                j.value.spread = 3;
              }
            } catch (o) {
              D.e(o);
            } finally {
              D.f();
            }
            var N = [].concat(r(T.holdrepoToday), r(I.holdrepoHistory));
            I.debt = N;
          }
          if (
            (i.isEmpty(T.positionNum) ||
              (0 == +T.positionNum.holdrepo_today_num &&
                (I.debt = I.debt.filter(function (o) {
                  return o.history;
                })),
              0 == +T.positionNum.holdstock_num &&
                (io([], w), (I.fundsinfo.earn_val_today = 0))),
            i.isEmpty(T.holdbalance) || (I.holdbalance = T.holdbalance),
            i.isEmpty(T.holdoutbalance) ||
              (I.holdoutbalance = T.holdoutbalance),
            i.isEmpty(q) || (I.pzstock = q),
            P)
          )
            try {
              (I.fundsinfo.bal_val = i.__CJS__export_add__(
                ao(I.debt),
                so(I.holdbalance)
              )),
                (I.fundsinfo.fe_funds_balance = i.__CJS__export_add__(
                  (null == (s = I.fundsinfo) ? void 0 : s.funds_balance) || 0,
                  (null == (u = null == I ? void 0 : I.fundsinfo)
                    ? void 0
                    : u.unknown) || 0
                )),
                (I.fundsinfo.feCashPosition = c.assetDataProcess.calcPosition(
                  I.fundsinfo.fe_funds_balance,
                  I.fundsinfo.total_money || 0
                )),
                (I.fundsinfo.fe_freeze_money = i.__CJS__export_add__(
                  (null == (l = null == I ? void 0 : I.fundsinfo)
                    ? void 0
                    : l.freeze_money) || 0,
                  (null == (f = null == I ? void 0 : I.fundsinfo)
                    ? void 0
                    : f.unknown) || 0
                )),
                (null == (v = I.debt) ? void 0 : v.length) > 0 &&
                  I.debt.forEach(function (o, e) {
                    I.debt[e].position = c.assetDataProcess.calcPosition(
                      o.total_agree,
                      I.fundsinfo.total_money
                    );
                  }),
                (null == (m = I.holdbalance) ? void 0 : m.length) > 0 &&
                  I.holdbalance.forEach(function (o, e) {
                    I.holdbalance[e].position = c.assetDataProcess.calcPosition(
                      i.__CJS__export_div__(o.purchase_amt, 100),
                      I.fundsinfo.total_money
                    );
                  });
            } catch (o) {
              null ==
                (b =
                  null == (y = null == (h = _.aegisReporter) ? void 0 : h.sdk)
                    ? void 0
                    : y.error) ||
                b.call(y, {
                  msg: "onUpdateByPush error",
                  ext3: JSON.stringify(o),
                });
            }
          o();
        })(c.assetDataProcess.updateByPush(u));
      });
    },
    processQuotationChange: co,
    getScode: function () {
      var o =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        e = [];
      return 0 !==
        (e = (e = (e = (e = e.concat(
          o.map(function (o) {
            return "".concat(o.market, ":").concat(o.code);
          })
        )).concat(
          I.stock.map(function (o) {
            return "".concat(o.market, ":").concat(o.code);
          })
        )).concat(
          I.debt.map(function (o) {
            return "".concat(o.market, ":").concat(o.code);
          })
        )).concat(
          I.history
            .filter(function (o) {
              return (
                -1 ===
                [
                  d.TARGET.ALLOT,
                  d.TARGET.ALLOCATE_DEBT,
                  d.TARGET.DUOTIANQI,
                ].indexOf(o.stock_type)
              );
            })
            .map(function (o) {
              return "".concat(o.market, ":").concat(o.code);
            })
        )).length
        ? i.uniq(e).join(",")
        : "";
    },
    addOrderRecord: function (o) {
      vo(s.genOrder(o)),
        x["".concat(o.code, ":").concat(o.market, ":").concat(o.contract_no)] ||
          ((I.history = [s.genOrder(o)].concat(r(I.history))),
          (I.orderinfo = {
            order_num_undone: Number(I.orderinfo.order_num_undone || 0) + 1,
            order_num_all: Number(I.orderinfo.order_num_all || 0) + 1,
          }));
    },
    batchProcessQuotationChange: uo,
    onStockListSort: _o,
    quotationProcessStrategy: function (o) {
      var e = o.market,
        n = o.code,
        t = o.dqj,
        r = o.zdf,
        i = o.zde,
        d = "".concat(e, ":").concat(n),
        a = U.get(d);
      U.set(d, { dqj: t, zdf: r, zde: i });
      var s = l.getPositionStrategy(I.stock.length);
      if (s > 0)
        S && clearTimeout(S),
          Date.now() - B > s
            ? ((B = Date.now()), uo(U))
            : (S = setTimeout(function () {
                uo(U);
              }, 2e3));
      else {
        if ((null == a ? void 0 : a.dqj) === t) return;
        co({ market: e, code: n, dqj: t, zdf: r, zde: i });
      }
    },
    processQuotationUpdate: function (o) {
      var e = o.market,
        n = o.code,
        t = o.dqj,
        r = o.zdf,
        i = o.zsz,
        d = o.zde,
        a = {
          dataVersion: z,
          fundsinfo: I.fundsinfo,
          stock: I.stock,
          market: e,
          code: n,
          dqj: t,
          zdf: r,
          zsz: i,
          zde: d,
        };
      !(function (o) {
        var e = o.stock,
          n = o.fundsinfo,
          t = o.origin;
        z.stock === t.dataVersion.stock && (I.stock = e),
          z.fund === t.dataVersion.fund && (I.fundsinfo = n);
      })(c.assetDataProcess.processQuotationUpdate(a));
    },
    setSortType: function (o) {
      K = o;
    },
    getSortType: function () {
      return K;
    },
    sortStockList: fo,
    updateRepoCond: function (o) {
      I.repoCond = o;
    },
    hideDelistedInfo:
      ((mo = e(
        o().mark(function e(n) {
          return o().wrap(function (o) {
            for (;;)
              switch ((o.prev = o.next)) {
                case 0:
                  return (o.next = 2), y.delistedApi.delistedPosition(n);
                case 2:
                case "end":
                  return o.stop();
              }
          }, e);
        })
      )),
      function (o) {
        return mo.apply(this, arguments);
      }),
    updateCondTotalNum: function (o) {
      I.condNumber = o || 0;
    },
    updateAssetV2Control: function (o) {
      var e, n, t, r;
      try {
        I.isAssetV2Control = !!(null == (e = null == o ? void 0 : o.fundsinfo)
          ? void 0
          : e.rate);
      } catch (o) {
        null ==
          (r =
            null == (t = null == (n = _.aegisReporter) ? void 0 : n.sdk)
              ? void 0
              : t.error) ||
          r.call(t, {
            msg: "updateAssetV2Control error",
            ext3: JSON.stringify(o || {}),
          });
      }
    },
    destroyAssetInnerAudioContext: po,
    checkAndReportStaleRevokingItems: function () {
      var o =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      try {
        var e,
          t = J.value,
          r = I.history,
          i = [],
          d = new Set(),
          a = n(r);
        try {
          for (a.s(); !(e = a.n()).done; ) {
            var s = e.value,
              u = s.uniqueKey;
            d.add(u);
            var c = !!t[u],
              l = !!s.isRevoking;
            c !== l &&
              i.push(
                ""
                  .concat(u, ":F")
                  .concat(c ? 1 : 0, "B")
                  .concat(l ? 1 : 0, "S")
                  .concat(s.trade_state)
              );
          }
        } catch (o) {
          a.e(o);
        } finally {
          a.f();
        }
        var f = Object.keys(t).filter(function (o) {
          return !!t[o] && !d.has(o);
        });
        (i.length > 0 || f.length > 0) &&
          v.reportEventSafely("mon_trade_cancel_stale_revoking", {
            ext3: i.join(","),
            ext4: o,
            ext5: f.join(","),
          });
      } catch (o) {}
    },
  };
};
