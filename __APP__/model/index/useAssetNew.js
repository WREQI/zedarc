var e = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  o = require("../../@babel/runtime/helpers/asyncToGenerator"),
  t = require("../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = require("../../@babel/runtime/helpers/objectSpread2"),
  n = require("../../@babel/runtime/helpers/toConsumableArray"),
  a = require("../../common/vendor.js"),
  i = require("../../config/enum.js"),
  d = require("../../common/components/Notify/index.js"),
  s = require("../trade/Order.js"),
  l = require("../trade/utils.js"),
  c = require("./assetDataProcess.js"),
  u = require("./strategy.js"),
  f = require("../../config/key.js");
require("../../service/broker.js");
var m = require("../../service/aegis/platform/not-wujie.js"),
  p = require("../../service/aegis/utils.js"),
  v = require("../../utils/getPlatform.js"),
  _ = require("../../stores/user/useUserinfo.js"),
  h = require("../../stores/app/useMode.js"),
  y = require("../../cgi/delisted.js"),
  g = require("../../config/enum/condition.js"),
  k = require("../../utils/hardware.js"),
  b = require("../../config/broker/11100/index.js");
exports.useAsset = function () {
  var S,
    T = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
    C = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.noop,
    E = a.getCurrentInstance().proxy,
    x = v.getPlatform(),
    N = x.isZxg,
    O = x.platform,
    D = x.isMpPlugin,
    q = "ios" === O,
    H = 0,
    A = 1,
    j = 2,
    P = 3,
    R = 4,
    B = 5,
    w = 6,
    I = 7,
    L = {},
    M = {},
    V = {},
    J = { fund: 0, stock: 0 },
    U = b.brokerConfig.trade.notification,
    z = U.showBeepSwitch,
    G = U.showVibrateSwitch,
    Q = a.reactive({
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
      preOrderlist: [],
      preBalancelist: [],
      preHoldrepoToday: [],
    }),
    K = a.ref([]),
    $ = a.ref([]),
    F = a.ref([]),
    Y = a.ref({}),
    Z = a.ref(!1),
    W = new Map(),
    X = Date.now(),
    ee = a.ref(!1),
    oe = null,
    te = a.computed(function () {
      return "(".concat(
        Q.stock.length +
          Q.debt.length +
          Q.holdbalance.length +
          Q.holdoutbalance.length +
          Q.pzstock.length,
        ")"
      );
    });
  function re(e, o) {
    var t = e || 0,
      r = o || 0;
    return t <= 0 && r <= 0 ? "(0)" : "(".concat(t, "/").concat(r, ")");
  }
  a.watch(
    function () {
      return Q.history;
    },
    function (e, o) {
      !(function (e, o) {
        e.length > o.length && C();
      })(e, o);
      var t = {
        newHistory: e,
        oldHistory: o,
        revokingItemsMaps: Y.value,
        enablePredictiveLogic: Z.value,
        isTradeTime: T.value,
        predictivedMap: L,
      };
      !(function (e) {
        var o = e.undoneOrderList,
          t = e.doneOrderList,
          r = e.combinedOrderList,
          n = e.trigger,
          i = e.needDelKeys,
          d = e.notifyArray;
        (K.value = o),
          ($.value = t),
          (F.value = r),
          n && a.index.$emit("hit-predictive"),
          d.length > 0 && Se(d[d.length - 1]),
          i.forEach(function (e) {
            delete Y.value[e];
          });
      })(c.assetDataProcess.historyChange(t));
    }
  ),
    a.onBeforeUnmount(function () {});
  var ne = a.computed(function () {
      var e = Q.orderinfoCombine;
      return re(e.order_num_undone, e.order_num_all);
    }),
    ae = a.computed(function () {
      var e = Q.orderinfo;
      return re(e.order_num_undone, e.order_num_all);
    }),
    ie = a.computed(function () {
      var e = Q.condlist.filter(function (e) {
        return g.LEGAL_COND_TYPES.includes(e.cond_type);
      });
      return le.value
        ? [r(r({}, se.value), {}, { isRepoCond: !0 })].concat(n(e))
        : e;
    }),
    de = a.computed(function () {
      if (Q.condNumber) return Q.condNumber || "";
      if (le.value) {
        var e = +(Q.condTotalNum || 0) + 1;
        return isNaN(e) ? "" : e;
      }
      return Q.condTotalNum || "";
    }),
    se = a.computed(function () {
      return Q.repoCond;
    }),
    le = a.computed(function () {
      var e;
      return (
        !a.isEmpty(se.value) && (null == (e = se.value) ? void 0 : e.stock_code)
      );
    }),
    ce = a.throttle(function (e) {
      var o = e.code,
        t = e.market,
        r = e.dqj,
        n = e.market_state;
      (V["".concat(o, ":").concat(t)] = { dqj: r, marketState: n }),
        a.index.$emit("$$updateDqj");
    }, 2e3);
  function ue() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    (!t && a.isEmpty(e)) || (Q.orderinfo = e),
      (!t && a.isEmpty(o)) || (Q.borderinfo = o);
    var r = Q.orderinfo || {},
      n = Q.borderinfo || {};
    (Q.orderinfoCombine = {
      order_num_all: a.__CJS__export_add__(
        r.order_num_all || 0,
        n.order_num_all || 0
      ),
      order_num_undone: a.__CJS__export_add__(
        r.order_num_undone || 0,
        n.order_num_undone || 0
      ),
    }),
      0 === Q.orderinfoCombine.order_num_all && ((Q.history = []), (M = {}));
  }
  function fe(e) {
    (Q.fundsinfo = e), (J.fund = J.fund + 1);
  }
  function me(e) {
    var o = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
    if (((Q.stock = e), (J.stock = J.stock + 1), o && oe)) be(oe);
    else {
      var t = a.index.getStorageSync(f.ASSET_SORT_TYPE) || {
        key: "hold_val",
        value: ge.DES,
      };
      be({ sortKey: t.key, sortOrder: t.value });
    }
  }
  function pe() {
    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
      o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
    try {
      return !!(e & (1 << o));
    } catch (e) {
      return !1;
    }
  }
  function ve() {
    var e, o, t, r, n, a;
    return (
      Q.isAssetV2Control ||
      "1" ===
        (null ==
        (t =
          null == (o = null == (e = _.useUserinfoStore) ? void 0 : e.call(_))
            ? void 0
            : o.userinfo)
          ? void 0
          : t.assets_drawer_control) ||
      (D &&
        (null ==
        (a =
          null == (n = null == (r = b.brokerConfig) ? void 0 : r.trade)
            ? void 0
            : n.index)
          ? void 0
          : a.isLiteAssetV2))
    );
  }
  function _e(e) {
    var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
      t = {
        dataVersion: J,
        fundsinfo: Q.fundsinfo,
        stock: Q.stock,
        quotations: e,
        spread: o,
      };
    !(function (e) {
      var o = e.stock,
        t = e.fundsinfo,
        r = e.origin;
      J.stock === r.dataVersion.stock && (Q.stock = o),
        J.fund === r.dataVersion.fund && (Q.fundsinfo = t),
        ve() && Ce();
    })(c.assetDataProcess.batchProcessQuotationChange(t));
  }
  function he(e) {
    var o = e.market,
      t = e.code,
      r = e.dqj,
      n = e.spread,
      a = void 0 === n ? 2 : n,
      i = {
        dataVersion: J,
        fundsinfo: Q.fundsinfo,
        stock: Q.stock,
        market: o,
        code: t,
        dqj: r,
        spread: a,
      };
    !(function (e) {
      var o = e.stock,
        t = e.fundsinfo,
        r = e.origin;
      J.stock === r.dataVersion.stock && (Q.stock = o),
        J.fund === r.dataVersion.fund && (Q.fundsinfo = t),
        ve() && Ce();
    })(c.assetDataProcess.processQuotationChange(i));
  }
  var ye,
    ge = { RESET: 0, DES: 1, ASC: 2 };
  function ke(e, o) {
    var t = o.sortKey,
      r = o.sortOrder;
    return r === ge.RESET
      ? e.sort(function (e, o) {
          return e._index - o._index;
        })
      : e.sort(function (e, o) {
          return r === ge.DES ? o[t] - e[t] : e[t] - o[t];
        });
  }
  function be(e) {
    var o = e.sortKey,
      t = e.sortOrder;
    Q.stock = ke(Q.stock, { sortKey: o, sortOrder: t });
  }
  function Se(e) {
    var o = _.useUserinfoStore(),
      t = h.useModeStore(),
      n = l.getNotifyMessage(
        e,
        function (e) {
          a.index.$emit("notify-click", e);
        },
        t.simpleMode,
        o.accountMode
      ),
      i = o.userinfo,
      s = i.tradesuccshake,
      c = i.tradesuccsound;
    n.message &&
      "TradeStock" === E.$options.name &&
      ((E.embeddedMode && n.title.includes("提交")) ||
        d.Notify(r(r({}, n), {}, { context: E })),
      "1" !== c || !z || (!N && q) || k.beep(),
      "1" === s && G && k.vibrate());
  }
  function Te() {
    var e, o;
    (Q.fundsinfo.bal_val = a.__CJS__export_add__(
      (function () {
        var e,
          o,
          t,
          r =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          n =
            (null ==
            (t =
              null == (o = null == (e = b.brokerConfig) ? void 0 : e.trade)
                ? void 0
                : o.balValCalc)
              ? void 0
              : t.holdDebt) || "";
        return r.reduce(function (e, o) {
          return a.__CJS__export_add__(
            e,
            a.__CJS__export_add__(
              Number(null == o ? void 0 : o.total_agree) || 0,
              Number(null == o ? void 0 : o[n]) || 0
            )
          );
        }, 0);
      })(Q.debt),
      (function () {
        var e,
          o,
          t,
          r =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          n =
            (null ==
            (t =
              null == (o = null == (e = b.brokerConfig) ? void 0 : e.trade)
                ? void 0
                : o.balValCalc)
              ? void 0
              : t.holdBalance) || "";
        return a.__CJS__export_div__(
          r.reduce(function (e, o) {
            return a.__CJS__export_add__(
              e,
              a.__CJS__export_add__(
                Number(null == o ? void 0 : o.purchase_amt) || 0,
                Number(null == o ? void 0 : o[n]) || 0
              )
            );
          }, 0),
          100
        );
      })(Q.holdbalance)
    )),
      (Q.fundsinfo.fe_funds_balance = a.__CJS__export_add__(
        Number(null == (e = Q.fundsinfo) ? void 0 : e.funds_balance) || 0,
        Number(null == (o = Q.fundsinfo) ? void 0 : o.unknown) || 0
      ));
  }
  function Ce() {
    var e, o;
    (Q.fundsinfo.feCashPosition = c.assetDataProcess.calcPosition(
      Q.fundsinfo.can_trade,
      Q.fundsinfo.total_money || 0
    )),
      (null == (e = Q.debt) ? void 0 : e.length) > 0 &&
        Q.debt.forEach(function (e, o) {
          Q.debt[o].position = c.assetDataProcess.calcPosition(
            e.total_agree,
            Q.fundsinfo.total_money
          );
        }),
      (null == (o = Q.holdbalance) ? void 0 : o.length) > 0 &&
        Q.holdbalance.forEach(function (e, o) {
          Q.holdbalance[o].position = c.assetDataProcess.calcPosition(
            a.__CJS__export_div__(e.purchase_amt, 100),
            Q.fundsinfo.total_money
          );
        });
  }
  return {
    data: Q,
    numHolding: te,
    numHistory: ne,
    numCondition: de,
    numStockHistory: ae,
    enablePredictiveLogic: Z,
    undoneOrderList: K,
    doneOrderList: $,
    combinedOrderList: F,
    noTriggerConditions: ie,
    revokingItemsMaps: Y,
    newPriceMap: V,
    QUOTATION_CACHE: W,
    isDifferenceInHoldAndCanuse: ee,
    updateDqjInHistory: ce,
    updateByCGI: function (e) {
      var o = e.fundsinfo,
        i = void 0 === o ? {} : o,
        d = e.holdstock,
        s = void 0 === d ? [] : d,
        l = e.pgstock,
        u = void 0 === l ? [] : l,
        f = e.holdrepo_today,
        p = void 0 === f ? [] : f,
        v = e.holdrepo_history,
        h = void 0 === v ? [] : v,
        y = e.orderinfo,
        g = void 0 === y ? {} : y,
        k = e.orderlist,
        b = void 0 === k ? [] : k,
        S = e.holdbalance,
        T = void 0 === S ? [] : S,
        C = e.balancelist,
        E = void 0 === C ? [] : C,
        x = e.pzstock,
        N = void 0 === x ? [] : x,
        O = e.borderinfo,
        D = void 0 === O ? {} : O,
        q = e.market_state_h,
        L = e.market_state_s,
        V = e.market_state_bj,
        J = e.market_state_nq,
        U = e.market_state_hk,
        z = e.market_state_kc_after_h,
        G = e.market_state_trade_after_all,
        K = e.hold_delisted,
        $ = void 0 === K ? [] : K,
        F = e.cond_list,
        Y = void 0 === F ? [] : F,
        Z = e.cond_total_num,
        W = e.cond_num,
        X = e.data_status,
        oe = void 0 === X ? 0 : X,
        te =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        re = te.sort,
        ne = void 0 === re || re,
        ae = te.forceUpdate,
        ie = void 0 === ae || ae,
        de = te.updateCondNum,
        se = void 0 === de || de;
      return new Promise(function (e) {
        (!ie && a.isEmpty(u)) || (Q.pgstock = u),
          ie || pe(oe, B) ? (Q.preOrderlist = b) : (b = Q.preOrderlist),
          ie || pe(oe, w) ? (Q.preBalancelist = E) : (E = Q.preBalancelist);
        var o = {
          historyMap: M,
          fundsinfo: i,
          holdstock: s,
          pgstock: Q.pgstock,
          orderlist: b,
          balancelist: E,
          marketStateH: q,
          marketStateS: L,
          marketStateKcAfterH: z,
          marketStateAfterTrade: G,
          marketStateBJ: V,
          marketStateNQ: J,
          marketStateHK: U,
          holdrepoHistory: h,
          holdrepoToday: p,
          holdbalance: T,
          borderinfo: D,
          orderinfo: g,
          condlist: Y,
          condTotalNum: Z,
          condNumber: W,
          holdDelisted: $,
          dataStatus: oe,
        };
        !(function (o) {
          var i, d, s, l, c, u, f;
          try {
            var p = o.holdstock,
              v = void 0 === p ? [] : p,
              h = o.orders,
              y = o.historyMap,
              g = o.origin,
              k = o.isDifferenceInHoldAndCanuse,
              b = _.useUserinfoStore();
            (ee.value = "1" === k),
              (Q.isFetchedData = !0),
              (ie || pe(oe, A)) && me(v, ne),
              (ie || pe(oe, H)) && fe(r(r({}, Q.fundsinfo), g.fundsinfo));
            var S = ie || pe(g.dataStatus, P),
              T = ie || pe(g.dataStatus, j);
            if (S || T) {
              if (S)
                if (a.isEmpty(g.holdrepoHistory)) Q.holdrepoHistory = [];
                else {
                  var C,
                    E = t(g.holdrepoHistory);
                  try {
                    for (E.s(); !(C = E.n()).done; ) {
                      var x = C.value;
                      (x.spread = 3), (x.history = !0);
                    }
                  } catch (e) {
                    E.e(e);
                  } finally {
                    E.f();
                  }
                  Q.holdrepoHistory = g.holdrepoHistory;
                }
              if (T)
                if (a.isEmpty(g.holdrepoToday)) Q.preHoldrepoToday = [];
                else {
                  var O,
                    D = t(g.holdrepoToday);
                  try {
                    for (D.s(); !(O = D.n()).done; ) {
                      O.value.spread = 3;
                    }
                  } catch (e) {
                    D.e(e);
                  } finally {
                    D.f();
                  }
                  Q.preHoldrepoToday = g.holdrepoToday;
                }
              Q.debt = [].concat(n(Q.preHoldrepoToday), n(Q.holdrepoHistory));
            }
            (ie || pe(g.dataStatus, R)) &&
              (Q.holdbalance = g.holdbalance || []),
              "1" ===
              (null == (i = b.userinfo) ? void 0 : i.delisted_position_control)
                ? (!ie && a.isEmpty(g.holdDelisted)) ||
                  (Q.holdDelisted = g.holdDelisted || [])
                : (Q.holdDelisted = []),
              (Q.condTotalNum = g.condTotalNum),
              se && (Q.condNumber = g.condNumber),
              (ie || pe(g.dataStatus, I)) && (Q.condlist = g.condlist || []),
              (!ie && a.isEmpty(N)) || (Q.pzstock = N),
              (Q.history = h);
            try {
              var q = "A";
              [
                { min: 10, max: 50, label: "B" },
                { min: 50, max: 100, label: "C" },
                { min: 100, max: 200, label: "D" },
                { min: 200, max: 300, label: "E1" },
                { min: 300, max: 400, label: "E2" },
                { min: 400, max: 500, label: "E3" },
                { min: 500, max: 600, label: "E4" },
                { min: 600, max: 700, label: "E5" },
                { min: 700, max: 800, label: "E6" },
                { min: 800, max: 900, label: "E7" },
                { min: 900, max: 1e3, label: "F" },
                { min: 1e3, max: 1 / 0, label: "G" },
              ].some(function (e) {
                if (h.length >= e.min && h.length < e.max)
                  return (q = e.label), !0;
              }),
                m.aegisReporter.reportEvent("ASSET_ORDER_LABEL", { ext3: q });
            } catch (e) {}
            if (((M = y), ue(g.orderinfo, g.borderinfo, ie), ve()))
              try {
                Te(), Ce();
              } catch (e) {
                null ==
                  (l =
                    null == (s = null == (d = m.aegisReporter) ? void 0 : d.sdk)
                      ? void 0
                      : s.error) ||
                  l.call(s, {
                    msg: "onUpdateByCGI error",
                    ext3:
                      e instanceof Error
                        ? e.stack || e.message
                        : JSON.stringify(e || {}),
                  });
              }
            e();
          } catch (e) {
            null ==
              (f =
                null == (u = null == (c = m.aegisReporter) ? void 0 : c.sdk)
                  ? void 0
                  : u.error) ||
              f.call(u, {
                msg: "MONITOR-ASSET-UPDATEBYCGI-ERROR",
                ext3:
                  e instanceof Error
                    ? e.stack || e.message
                    : JSON.stringify(e || {}),
              });
          }
        })(c.assetDataProcess.updateByCGI(o));
      });
    },
    updateByPush: function (e) {
      var o = e.fundsinfo,
        i = void 0 === o ? {} : o,
        d = e.holdstock,
        s = void 0 === d ? [] : d,
        l = e.orderlist,
        u = void 0 === l ? [] : l,
        f = e.orderinfo,
        p = void 0 === f ? {} : f,
        v = e.holdrepo_today,
        h = void 0 === v ? [] : v,
        y = e.position_num,
        g = void 0 === y ? {} : y,
        k = e.holdbalance,
        b = void 0 === k ? [] : k,
        S = e.balancelist,
        T = e.pzstock,
        C = void 0 === T ? [] : T,
        E = e.borderinfo,
        x = void 0 === E ? {} : E,
        N = e.cond_list,
        O = void 0 === N ? [] : N,
        D = e.total_num,
        q = e.data_status,
        I = void 0 === q ? 0 : q,
        L = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        V = L.sort,
        J = void 0 === V || V;
      return new Promise(function (e) {
        var o;
        pe(I, B) ? (Q.preOrderlist = u || []) : (u = Q.preOrderlist),
          pe(I, w) ? (Q.preBalancelist = S || []) : (S = Q.preBalancelist),
          a.isEmpty(i) &&
            (null == s ? void 0 : s.length) > 0 &&
            (i = Q.fundsinfo || {});
        var d = _.useUserinfoStore(),
          l = {
            historyMap: M,
            fundsinfo: i,
            prevHoldstock: Q.stock,
            holdstock: s,
            pgstock: Q.pgstock,
            orderlist: u,
            balancelist: S,
            holdbalance: b,
            positionNum: g,
            holdrepoToday: h,
            orderinfo: p,
            borderinfo: x,
            condTotalNum: D,
            condlist: O,
            dataStatus: I,
            earnCalcMode:
              "1" ===
              (null == (o = d.userinfo) ? void 0 : o.home_incometoday_control)
                ? "2"
                : "1",
          };
        !(function (o) {
          var i, d, s, l, c, u, f;
          try {
            var p = o.holdstock,
              v = o.orders,
              _ = o.diffacc,
              h = o.historyMap,
              y = o.origin,
              g = o.isDifferenceInHoldAndCanuse;
            (ee.value = "1" === g),
              pe(I, A) &&
                (me(p || [], J),
                (null == p ? void 0 : p.length) > 0 &&
                  !a.isEmpty(Q.fundsinfo) &&
                  (Q.fundsinfo.earn_val_today = a.__CJS__export_add__(
                    Number(
                      null == (i = Q.fundsinfo) ? void 0 : i.earn_val_today
                    ) || 0,
                    _
                  ))),
              pe(I, H) && fe(r(r({}, Q.fundsinfo), y.fundsinfo)),
              (Q.history = v),
              (M = h),
              ue(y.orderinfo, y.borderinfo);
            var k = pe(y.dataStatus, P),
              b = pe(y.dataStatus, j);
            if (k || b) {
              if (k)
                if (a.isEmpty(y.holdrepoHistory)) Q.holdrepoHistory = [];
                else {
                  var S,
                    T = t(y.holdrepoHistory);
                  try {
                    for (T.s(); !(S = T.n()).done; ) {
                      var E = S.value;
                      (E.spread = 3), (E.history = !0);
                    }
                  } catch (e) {
                    T.e(e);
                  } finally {
                    T.f();
                  }
                  Q.holdrepoHistory = y.holdrepoHistory;
                }
              if (b)
                if (a.isEmpty(y.holdrepoToday)) Q.preHoldrepoToday = [];
                else {
                  var x,
                    N = t(y.holdrepoToday);
                  try {
                    for (N.s(); !(x = N.n()).done; ) {
                      x.value.spread = 3;
                    }
                  } catch (e) {
                    N.e(e);
                  } finally {
                    N.f();
                  }
                  Q.preHoldrepoToday = y.holdrepoToday;
                }
              Q.debt = [].concat(n(Q.preHoldrepoToday), n(Q.holdrepoHistory));
            }
            if (
              (a.isEmpty(y.positionNum) ||
                (0 == +y.positionNum.holdrepo_today_num &&
                  (Q.debt = Q.debt.filter(function (e) {
                    return e.history;
                  })),
                0 == +y.positionNum.holdstock_num &&
                  (me([], J), (Q.fundsinfo.earn_val_today = 0))),
              pe(y.dataStatus, R) && (Q.holdbalance = y.holdbalance || []),
              a.isEmpty(C) || (Q.pzstock = C),
              ve())
            )
              try {
                Te(), Ce();
              } catch (e) {
                null ==
                  (l =
                    null == (s = null == (d = m.aegisReporter) ? void 0 : d.sdk)
                      ? void 0
                      : s.error) ||
                  l.call(s, {
                    msg: "onUpdateByPush error",
                    ext3:
                      e instanceof Error
                        ? e.stack || e.message
                        : JSON.stringify(e || {}),
                  });
              }
            e();
          } catch (e) {
            null ==
              (f =
                null == (u = null == (c = m.aegisReporter) ? void 0 : c.sdk)
                  ? void 0
                  : u.error) ||
              f.call(u, {
                msg: "MONITOR-ASSET-UPDATEBYPUSH-ERROR",
                ext3:
                  e instanceof Error
                    ? e.stack || e.message
                    : JSON.stringify(e || {}),
              });
          }
        })(c.assetDataProcess.updateByPush(l));
      });
    },
    processQuotationChange: he,
    getScode: function () {
      var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
        o = [];
      return 0 !==
        (o = (o = (o = (o = o.concat(
          e.map(function (e) {
            return "".concat(e.market, ":").concat(e.code);
          })
        )).concat(
          Q.stock.map(function (e) {
            return "".concat(e.market, ":").concat(e.code);
          })
        )).concat(
          Q.debt.map(function (e) {
            return "".concat(e.market, ":").concat(e.code);
          })
        )).concat(
          Q.history
            .filter(function (e) {
              return (
                -1 ===
                [
                  i.TARGET.ALLOT,
                  i.TARGET.ALLOCATE_DEBT,
                  i.TARGET.DUOTIANQI,
                ].indexOf(e.stock_type)
              );
            })
            .map(function (e) {
              return "".concat(e.market, ":").concat(e.code);
            })
        )).length
        ? a.uniq(o).join(",")
        : "";
    },
    addOrderRecord: function (e) {
      Se(s.genOrder(e)),
        M["".concat(e.code, ":").concat(e.market, ":").concat(e.contract_no)] ||
          ((Q.history = [s.genOrder(e)].concat(n(Q.history))),
          (Q.orderinfo = {
            order_num_undone: Number(Q.orderinfo.order_num_undone || 0) + 1,
            order_num_all: Number(Q.orderinfo.order_num_all || 0) + 1,
          }));
    },
    batchProcessQuotationChange: _e,
    onStockListSort: be,
    quotationProcessStrategy: function (e) {
      var o = e.market,
        t = e.code,
        r = e.dqj,
        n = "".concat(o, ":").concat(t),
        a = W.get(n);
      W.set(n, r);
      var i = u.getPositionStrategy(Q.stock.length);
      if (i > 0)
        S && clearTimeout(S),
          Date.now() - X > i
            ? ((X = Date.now()), _e(W))
            : (S = setTimeout(function () {
                _e(W);
              }, 2e3));
      else {
        if (a === r) return;
        he({ market: o, code: t, dqj: r });
      }
    },
    processQuotationUpdate: function (e) {
      var o = e.market,
        t = e.code,
        r = e.dqj,
        n = e.zdf,
        a = e.zsz,
        i = e.zde,
        d = {
          dataVersion: J,
          fundsinfo: Q.fundsinfo,
          stock: Q.stock,
          market: o,
          code: t,
          dqj: r,
          zdf: n,
          zsz: a,
          zde: i,
        };
      !(function (e) {
        var o = e.stock,
          t = e.fundsinfo,
          r = e.origin;
        J.stock === r.dataVersion.stock && (Q.stock = o),
          J.fund === r.dataVersion.fund && (Q.fundsinfo = t);
      })(c.assetDataProcess.processQuotationUpdate(d));
    },
    setSortType: function (e) {
      oe = e;
    },
    getSortType: function () {
      return oe;
    },
    sortStockList: ke,
    updateRepoCond: function (e) {
      Q.repoCond = e;
    },
    hideDelistedInfo:
      ((ye = o(
        e().mark(function o(t) {
          return e().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), y.delistedApi.delistedPosition(t);
                case 2:
                case "end":
                  return e.stop();
              }
          }, o);
        })
      )),
      function (e) {
        return ye.apply(this, arguments);
      }),
    updateCondTotalNum: function (e) {
      Q.condNumber = e || 0;
    },
    updateAssetV2Control: function (e) {
      var o, t, r, n;
      try {
        Q.isAssetV2Control = !!(null == (o = null == e ? void 0 : e.fundsinfo)
          ? void 0
          : o.rate);
      } catch (e) {
        null ==
          (n =
            null == (r = null == (t = m.aegisReporter) ? void 0 : t.sdk)
              ? void 0
              : r.error) ||
          n.call(r, {
            msg: "updateAssetV2Control error",
            ext3:
              e instanceof Error
                ? e.stack || e.message
                : JSON.stringify(e || {}),
          });
      }
    },
    isAssetV2User: ve,
    checkAndReportStaleRevokingItems: function () {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
      try {
        var o,
          r = Y.value,
          n = Q.history,
          a = [],
          i = new Set(),
          d = t(n);
        try {
          for (d.s(); !(o = d.n()).done; ) {
            var s = o.value,
              l = s.uniqueKey;
            i.add(l);
            var c = !!r[l],
              u = !!s.isRevoking;
            c !== u &&
              a.push(
                ""
                  .concat(l, ":F")
                  .concat(c ? 1 : 0, "B")
                  .concat(u ? 1 : 0, "S")
                  .concat(s.trade_state)
              );
          }
        } catch (e) {
          d.e(e);
        } finally {
          d.f();
        }
        var f = Object.keys(r).filter(function (e) {
          return !!r[e] && !i.has(e);
        });
        (a.length > 0 || f.length > 0) &&
          p.reportEventSafely("mon_trade_cancel_stale_revoking", {
            ext3: a.join(","),
            ext4: e,
            ext5: f.join(","),
          });
      } catch (e) {}
    },
  };
};
