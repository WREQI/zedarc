var e = require("../../@babel/runtime/helpers/typeof"),
  r = require("../../@babel/runtime/helpers/createForOfIteratorHelper"),
  a = require("../../@babel/runtime/helpers/objectSpread2"),
  t = require("../../@babel/runtime/helpers/slicedToArray"),
  _ = require("../../config/enum.js"),
  n = require("../../common/vendor.js"),
  o = require("../trade/Order.js"),
  d = require("../trade/utils.js"),
  i = require("../../common/utils/colorHelper.js");
function c() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
    r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
    a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1 / 0,
    _ = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
    n = [];
  try {
    isNaN(+e) ||
      "" === e ||
      (r.forEach(function (r) {
        var a = r.split(":"),
          _ = t(a, 2),
          o = _[0],
          d = _[1];
        Math.abs(+e) > o && d && n.push("fs-".concat(d));
      }),
      !_ && e >= a && n.push("no-line-height"));
  } catch (e) {}
  return n;
}
function l(e) {
  var r;
  (e.feNameCls = c(
    null == (r = e.name) ? void 0 : r.length,
    ["5:28", "6:24"],
    6,
    !1
  )),
    (e.feHoldValCls = c(e.hold_val, ["100000:28", "1000000:24"])),
    (e.feHoldNumCls = c(e.hold_num, ["1000000:22"])),
    (e.feNewPriceCls = c(
      e.new_price,
      e.market === _.MARKET.HK ? ["100:28", "1000:24"] : ["1000:28", "10000:24"]
    )),
    (e.feHoldCostCls = c(e.hold_cost, ["10000:28", "100000:24"])),
    (e.feEarnValDayCls = c(e.earn_val_day, [
      "10000:28",
      "100000:24",
      "10000000:22",
    ]).concat(i.redOrGreen(e.earn_val_day, e.feKey))),
    (e.feEarnPerDayCls = i.redOrGreen(e.earn_per_day, e.feKey)),
    (e.feEarnValCls = c(e.earn_val, [
      "100000:28",
      "1000000:24",
      "100000000:22",
    ]).concat(i.redOrGreen(e.earn_val, e.feKey))),
    (e.feEarnPerCls = i.redOrGreen(e.earn_per, e.feKey));
}
function s(e, r, a, t, _, n) {
  var o = e.uniqueKey;
  if (
    (e.isUndone
      ? ((e.frontOrderType = "undone"), e.isRevoking && (e.cancelSubmited = !0))
      : (e.frontOrderType = "done"),
    "undone" === e.frontOrderType || void 0 === e.frontOrderType)
  ) {
    var i = e.time_type;
    if (void 0 === i) {
      var c =
        e.isAfterTrade && (e.marketStateAfterTrade || e.marketStateKcAfter)
          ? e.marketStateAfterTrade || e.marketStateKcAfter
          : e.marketState;
      i = d.getTimeTypeByMarketState(c);
    }
    e.submitTip ||
      (e.submitTip = d.getSubmitResultTip(
        { time_type: i },
        e.trade_type
      ).title),
      r.push(e);
  } else "done" === e.frontOrderType && a.push(e);
  t.push(e), !e.isRevokable && _[o] && n.push(o);
}
function u(e, r, a) {
  var t = e.uniqueKey,
    n = d.getFinalTradeState(e),
    o = r.findIndex(function (e) {
      return t === e.uniqueKey;
    });
  if (-1 !== o) {
    var i = r[o],
      c = d.getFinalTradeState(i),
      l = function (e) {
        return [
          _.TRADE_STATE[e.stock_type].WIP,
          _.TRADE_STATE[e.stock_type].REVOKING,
        ];
      };
    l(i).indexOf(c) > -1 && -1 === l(e).indexOf(n) && a.push(e);
  }
}
function p(e) {
  return isNaN(e) || null == e || "" === e;
}
function v(e, r) {
  try {
    return p(r) || p(e) || 0 === Number(r)
      ? "0.00"
      : n.__CJS__export_mul__(n.__CJS__export_div__(e, r, 4), 100).toFixed(2);
  } catch (e) {
    return "--";
  }
}
function f(e, r, a, t, o, d) {
  var i = e.rate || 1,
    c = e.spread || t;
  (e.new_price = r), void 0 !== o && (e.zdf = o), void 0 !== d && (e.zde = d);
  var s = n.__CJS__export_mul__(n.__CJS__export_mul__(r, e.hold_num), i),
    u = n.__CJS__export_reduce__(s, e.hold_val),
    p = n.__CJS__export_add__(e.earn_val, u);
  if ("" !== e.earn_val_day) {
    var f = n.__CJS__export_add__(e.earn_val_day, u);
    e.earn_val_day = f.toFixed(c);
  }
  if (
    ((e.earn_val = p.toFixed(c)),
    (e.hold_val = s.toFixed(
      (null == e ? void 0 : e.market) === _.MARKET.HK ? 3 : c
    )),
    e.hold_cost <= 0
      ? (e.earn_per = "--")
      : (e.earn_per = n
          .__CJS__export_mul__(
            100,
            n.__CJS__export_div__(
              e.earn_val,
              n.__CJS__export_mul__(e.hold_cost, e.hold_num),
              c + 2
            )
          )
          .toFixed(c)),
    e.hold_cost_day <= 0 || "" === e.earn_val_day)
  )
    e.earn_per_day = "--";
  else {
    var y = n.__CJS__export_mul__(
      100,
      n.__CJS__export_div__(e.earn_val_day, e.hold_cost_day, c + 2)
    );
    isNaN(y) ? (e.earn_per_day = "--") : (e.earn_per_day = y.toFixed(c));
  }
  (e.earn_per =
    "NaN" === e.earn_per || Number.isNaN(e.earn_per) ? "--" : e.earn_per),
    (e.earn_per_day =
      "NaN" === e.earn_per_day || Number.isNaN(e.earn_per_day)
        ? "--"
        : e.earn_per_day),
    (e.earn_val =
      "NaN" === e.earn_val || Number.isNaN(e.earn_val) ? "--" : e.earn_val),
    (e.earn_val_day =
      "NaN" === e.earn_val_day || Number.isNaN(e.earn_val_day)
        ? "--"
        : e.earn_val_day),
    n.isEmpty(a) ||
      ((a.earn_val_today = n.__CJS__export_add__(a.earn_val_today || 0, u)),
      (a.earn_val = n.__CJS__export_add__(a.earn_val || 0, u)),
      (a.total_money = n.__CJS__export_add__(a.total_money || 0, u)),
      (a.hold_val = n.__CJS__export_add__(a.hold_val || 0, u)),
      (a.pos_val = n.__CJS__export_add__(a.pos_val || 0, u))),
    (e.position = v(e.hold_val, a.total_money)),
    l(e);
}
var y = {
  updateByCGI: function (e) {
    for (
      var r = e.historyMap,
        t = e.fundsinfo,
        d = e.holdstock,
        i = e.pgstock,
        c = e.orderlist,
        s = e.balancelist,
        u = e.marketStateH,
        p = e.marketStateS,
        f = e.marketStateKcAfterH,
        y = e.marketStateAfterTrade,
        m = e.marketStateBJ,
        h = e.marketStateNQ,
        k = e.marketStateHK,
        S = "0",
        N = function () {
          var e = d[T];
          if (((e.spread = 2), !n.isEmpty(i))) {
            var r = i.find(function (r) {
              return r.market === e.market && r.code === e.code;
            });
            r && (e.allotment = r);
          }
          (e.position = v(e.hold_val, t.total_money)),
            (e.feKey = ""
              .concat(e.market, "-")
              .concat(e.code, "-")
              .concat(e.stockholder_code || "0")),
            (e._index = T),
            +e.can_use < +e.hold_num && (S = "1"),
            l(e);
        },
        T = 0;
      T < d.length;
      T++
    )
      N();
    var C = c;
    n.isEmpty(s) || (C = n.isEmpty(c) ? s : c.concat(s));
    var x = [];
    return (
      C.forEach(function (e) {
        if (
          (e.stock_type === _.TARGET.ALLOT && (e.dqj = e.order_price),
          e.stock_type === _.TARGET.STOCK)
        ) {
          switch (e.market) {
            case _.MARKET.SA:
              void 0 !== p && (e.marketState = p);
              break;
            case _.MARKET.HA:
              void 0 !== u && (e.marketState = u),
                void 0 !== f && (e.marketStateKcAfter = f);
              break;
            case _.MARKET.BJ:
              void 0 !== m && (e.marketState = m);
              break;
            case _.MARKET.NQ:
              void 0 !== h && (e.marketState = h);
              break;
            case _.MARKET.HK:
              void 0 !== k && (e.marketState = k);
          }
          void 0 !== y && (e.marketStateAfterTrade = y);
        }
        var t = a(
          a(
            {},
            r[
              "".concat(e.code, ":").concat(e.market, ":").concat(e.contract_no)
            ] || {}
          ),
          e
        );
        (r["".concat(e.code, ":").concat(e.market, ":").concat(e.contract_no)] =
          t),
          x.push(o.genOrder(t));
      }),
      {
        holdstock: d,
        orders: x,
        historyMap: r,
        origin: e,
        isDifferenceInHoldAndCanuse: S,
      }
    );
  },
  updateByPush: function (e) {
    var r = e.historyMap,
      t = e.fundsinfo,
      d = e.prevHoldstock,
      i = e.holdstock,
      c = e.pgstock,
      s = e.orderlist,
      u = e.balancelist,
      p = e.earnCalcMode,
      f = void 0 === p ? "1" : p,
      y = s,
      m = "0";
    if (u && n.isArray(u)) y = n.isEmpty(s) ? u : s.concat(u);
    else {
      var h = [];
      Object.keys(r).forEach(function (e) {
        r[e] && r[e].stock_type === _.TARGET.DUOTIANQI && h.push(r[e]);
      }),
        h.length > 0 && (y = s.concat(h));
    }
    var k = [];
    n.isEmpty(y) ||
      (k = y.map(function (e) {
        var t = a(
          a(
            {},
            r[
              "".concat(e.code, ":").concat(e.market, ":").concat(e.contract_no)
            ] || {}
          ),
          e
        );
        return (
          (r[
            "".concat(e.code, ":").concat(e.market, ":").concat(e.contract_no)
          ] = t),
          o.genOrder(t)
        );
      }));
    var S = [],
      N = 0;
    return (
      n.isEmpty(i) ||
        (S = i.map(function (e, r) {
          var _ =
            d.find(function (r) {
              return !(
                r.code !== e.code ||
                r.market !== e.market ||
                (e.stockholder_code &&
                  r.stockholder_code &&
                  r.stockholder_code !== e.stockholder_code)
              );
            }) || {};
          n.isEmpty(_) && (_.hold_cost_day = e.today_new_cost);
          var o = _.spread || 2,
            i = n.__CJS__export_reduce__(e.earn_val, _.earn_val || 0);
          if (
            ((N = n.__CJS__export_add__(N, i)),
            ("2" === f &&
              void 0 !== e.earn_per_day &&
              void 0 !== e.earn_val_day) ||
              (void 0 === e.earn_val_day &&
                (e.earn_val_day = n
                  .__CJS__export_add__(_.earn_val_day || 0, i)
                  .toFixed(o)),
              0 ===
                n.__CJS__export_add__(
                  _.hold_open_value || 0,
                  e.today_new_cost
                ) || "" === e.earn_val_day
                ? (e.earn_per_day = "--")
                : ((e.earn_per_day = n.__CJS__export_div__(
                    n.__CJS__export_mul__(e.earn_val_day, 100),
                    n.__CJS__export_add__(
                      _.hold_open_value || 0,
                      e.today_new_cost
                    )
                  )),
                  isNaN(e.earn_per_day)
                    ? (e.earn_per_day = "--")
                    : (e.earn_per_day = e.earn_per_day.toFixed(o)))),
            0 == +e.hold_num
              ? (e.earn_per = isNaN(_.earn_per) ? "--" : _.earn_per)
              : (e.earn_per = isNaN(e.earn_per) ? "--" : e.earn_per),
            (e.earn_per_day = isNaN(e.earn_per_day) ? "--" : e.earn_per_day),
            (e.earn_val = isNaN(e.earn_val) ? "--" : e.earn_val),
            (e.earn_val_day = isNaN(e.earn_val_day) ? "--" : e.earn_val_day),
            !n.isEmpty(c))
          ) {
            var s = c.find(function (r) {
              return r.market === e.market && r.code === e.code;
            });
            s && (e.allotment = s);
          }
          (e.position = v(e.hold_val, t.total_money)),
            (e.feKey = ""
              .concat(e.market, "-")
              .concat(e.code, "-")
              .concat(e.stockholder_code || "0")),
            (e._index = r),
            l(e);
          var u = a(a({}, _), e);
          return +u.can_use < +u.hold_num && (m = "1"), u;
        })),
      {
        holdstock: S,
        orders: k,
        diffacc: N,
        historyMap: r,
        origin: e,
        isDifferenceInHoldAndCanuse: m,
      }
    );
  },
  historyChange: function (e) {
    for (
      var r = e.newHistory,
        a = e.oldHistory,
        t = e.revokingItemsMaps,
        _ = (e.enablePredictiveLogic, e.isTradeTime, e.predictivedMap, []),
        o = [],
        d = [],
        i = [],
        c = [],
        l = !1,
        p = 0;
      p < r.length;
      p++
    ) {
      var v = r[p];
      s(v, _, o, d, t, i), l || (v.uniqueKey, (l = !1)), u(v, a, c);
    }
    return {
      undoneOrderList: (_ = _.sort(function (e, r) {
        return (
          n.dayjs(r.trade_time).valueOf() - n.dayjs(e.trade_time).valueOf()
        );
      })),
      doneOrderList: (o = o.sort(function (e, r) {
        return (
          n.dayjs(r.trade_time).valueOf() - n.dayjs(e.trade_time).valueOf()
        );
      })),
      combinedOrderList: (d = d.sort(function (e, r) {
        return (
          n.dayjs(r.trade_time).valueOf() - n.dayjs(e.trade_time).valueOf()
        );
      })),
      trigger: l,
      needDelKeys: i,
      notifyArray: c,
    };
  },
  processQuotationChange: function (e) {
    var a,
      t = e.type,
      n = e.fundsinfo,
      o = e.stock,
      d = e.market,
      i = e.code,
      c = e.dqj,
      l = e.zdf,
      s = e.zde,
      u = e.spread,
      p = o.filter(function (e) {
        return e.market === d && e.code === i;
      }),
      v = r(p);
    try {
      for (v.s(); !(a = v.n()).done; ) {
        var y = a.value;
        if (y.hold_num <= 0) {
          y.new_price = c;
          break;
        }
        if (y.new_price === c || (y.market === _.MARKET.HK && !y.rate)) break;
        f(y, c, n, u, l, s);
      }
    } catch (e) {
      v.e(e);
    } finally {
      v.f();
    }
    return { type: t, stock: o, fundsinfo: n, origin: e };
  },
  batchProcessQuotationChange: function (r) {
    for (
      var a = r.type,
        t = r.fundsinfo,
        n = r.stock,
        o = r.quotations,
        d = r.spread,
        i = 0;
      i < n.length;
      i++
    ) {
      var c = n[i],
        l = o.get("".concat(c.market, ":").concat(c.code));
      if (l) {
        var s = "object" == e(l),
          u = s ? l.dqj : l,
          p = s ? l.zdf : void 0,
          v = s ? l.zde : void 0;
        c.hold_num <= 0
          ? (c.new_price = u)
          : c.new_price !== u &&
            (c.market !== _.MARKET.HK || c.rate) &&
            f(c, u, t, d, p, v);
      }
    }
    return { type: a, stock: n, fundsinfo: t, origin: r };
  },
  processQuotationUpdate: function (e) {
    var a,
      t = e.type,
      _ = e.fundsinfo,
      n = e.stock,
      o = e.market,
      d = e.code,
      i = e.dqj,
      c = e.zdf,
      l = e.zsz,
      s = e.zde,
      u = n.filter(function (e) {
        return e.market === o && e.code === d;
      }),
      p = r(u);
    try {
      for (p.s(); !(a = p.n()).done; ) {
        var v = a.value;
        v.hold_num <= 0
          ? (v.new_price = i)
          : ((v.new_price = i), (v.zdf = c), (v.zsz = l), (v.zde = s));
      }
    } catch (e) {
      p.e(e);
    } finally {
      p.f();
    }
    return { type: t, stock: n, fundsinfo: _, origin: e };
  },
  calcPosition: v,
};
exports.assetDataProcess = y;
