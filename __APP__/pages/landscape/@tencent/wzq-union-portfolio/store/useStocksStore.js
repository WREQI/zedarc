require("../../../../../@babel/runtime/helpers/Objectentries");
var e = require("../../../../../@babel/runtime/helpers/slicedToArray");
require("../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../../@babel/runtime/helpers/toConsumableArray"),
  r = require("../../../../../@babel/runtime/helpers/defineProperty"),
  a = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  n = Object.defineProperty,
  i = Object.defineProperties,
  l = Object.getOwnPropertyDescriptors,
  o = Object.getOwnPropertySymbols,
  s = Object.prototype.hasOwnProperty,
  u = Object.prototype.propertyIsEnumerable,
  c = function (e, t, r) {
    return t in e
      ? n(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  f = function (e, t) {
    for (var r in t || (t = {})) s.call(t, r) && c(e, r, t[r]);
    if (o) {
      var n,
        i = a(o(t));
      try {
        for (i.s(); !(n = i.n()).done; ) {
          r = n.value;
          u.call(t, r) && c(e, r, t[r]);
        }
      } catch (e) {
        i.e(e);
      } finally {
        i.f();
      }
    }
    return e;
  },
  v = function (e, t) {
    return i(e, l(t));
  },
  d = require("../../../../../common/vendor.js"),
  p = require("../utils/util.js"),
  h = require("../../stock-markets-base/utils/market.js"),
  S = require("../../stock-hq-data/index.js"),
  b = function (e, t) {
    if (!e) return { stockList: {}, groups: [] };
    var r = {},
      a = {},
      n = {},
      i = [],
      l = {},
      o = e.grouplist,
      s = void 0 === o ? [] : o,
      u = t && !!Object.keys(t).length,
      c = s.findIndex(function (e) {
        var t = e.groupinfo;
        return "1" === t.type && "全部" === t.name;
      });
    if (c > -1) {
      var f,
        v = s[c],
        d = v.groupinfo,
        h = v.stocklist,
        b = void 0 === h ? [] : h,
        y = 0,
        m = [],
        g = b.map(function (e, i) {
          if (!e) return null;
          var l = O(e, i, t);
          if (
            (2 != +l.type ||
              "i" === l.cls ||
              S.utils.isIndex(l.stock_type) ||
              ((y += 1), (l.HK_INDEX = y), (l.delay = l.HK_INDEX > 20 ? 1 : 0)),
            l.star)
          ) {
            var o = b[i + 1];
            l.lastStar = !o || !o.star;
          }
          if (
            (l.delay ? (a[l.chooseSymbol] = !0) : (r[l.chooseSymbol] = !0),
            m.length < 2)
          ) {
            var s = U(l);
            s && !m.includes(s) && m.push(s);
          }
          return (n[l.chooseSymbol] = l), l;
        });
      (f = m.length > 1),
        (l[d.id] = {
          list: g,
          len: g.length,
          hkstocklen: y,
          hasMultMarket: f,
          hasRateInfo: u,
        });
    }
    for (
      var z = function () {
          var e = s[I],
            o = e.groupinfo,
            c = e.stocklist,
            f = void 0 === c ? [] : c,
            v = e.watchlist,
            d = void 0 === v ? {} : v;
          if (o.id === p.STOCKBASKET_GROUPID) {
            var h = d.list && d.list.length ? d.list : f;
            (l[o.id] = { list: h, len: h.length, hkstocklen: 0 }),
              o && i.push(o);
          } else {
            if ("1" === o.type && "全部" === o.name && l[o.id]) {
              if (o) {
                var b = l[o.id],
                  y = b.hasMultMarket,
                  m = b.hasRateInfo;
                (o.hasMultMarket = y), (o.hasRateInfo = m), i.push(o);
              }
              return 1;
            }
            var g,
              z = 0,
              _ = [],
              T = f.map(function (e, i) {
                var l = n[e.symbol]
                    ? Object.assign({}, n[e.symbol])
                    : O(e, i, t),
                  o = e.star,
                  s = e.delay;
                if (
                  ((l.star = o),
                  (l.delay = s),
                  (l[p.INNER_INDEX] = i),
                  (l.listIndex = i),
                  2 != +l.type ||
                    "i" === l.cls ||
                    S.utils.isIndex(l.stock_type) ||
                    ((z += 1),
                    (l.HK_INDEX = z),
                    (l.delay = l.HK_INDEX > 20 ? 1 : 0)),
                  l.star)
                ) {
                  var u = f[i + 1];
                  l.lastStar = !u || !u.star;
                }
                if (
                  (l.delay
                    ? (a[l.chooseSymbol] = !0)
                    : (r[l.chooseSymbol] = !0),
                  _.length < 2)
                ) {
                  var c = U(l);
                  c && !_.includes(c) && _.push(c);
                }
                return l;
              });
            (g = _.length > 1),
              (l[o.id] = {
                list: T,
                len: T.length,
                hkstocklen: z,
                hasMultMarket: g,
                hasRateInfo: u,
              }),
              o && ((o.hasMultMarket = g), (o.hasRateInfo = u), i.push(o));
          }
        },
        I = 0;
      I < s.length;
      I++
    )
      z();
    return { stockList: l, groups: i, hkDelaySymbolMap: a, symbolMap: r };
  },
  O = function (e, t, a) {
    var n,
      i = e.qt,
      l = void 0 === i ? {} : i,
      o = e.market,
      s = e.star,
      u = e.wzq_usable,
      c = (l.isdelay, l.type),
      d = l.symbol,
      S = l.name,
      b = l.code,
      O = l.zd,
      m = l.zdf,
      g = l.zxj,
      z = l.wf,
      I = l.sz,
      C = l.xssz,
      N = l.state,
      k = l.jnzdf,
      j = l.wzq_usable,
      E = l.price,
      D = l.volume,
      U = l.hsl,
      R = l.sjl,
      M = l.syl,
      L = l.roe,
      x = l.roa,
      F = l.unit,
      P = c,
      w = T(o),
      q = 0 === (null == d ? void 0 : d.indexOf(".")) ? d.substr(1) : d,
      K = v(
        f({}, e),
        ((n = {
          chooseSymbol: e.symbol,
          name: _((S || "").replace(/%/g, "%25")),
          marketIcon: h.transMarket(o, w, q, P),
          delay: 0,
          usable: u || j,
          scode: q,
          trimedCode: h.trimScode(q || b),
          market: o,
          type: w,
          stock_type: P,
          zjcj: "KJ-HB" === c ? z : g,
          zdf: +m > 0 ? "+".concat(m) : m,
          rise_per: +m > 0 ? "+".concat(m) : m,
          zde: +O > 0 ? "+".concat(O) : O,
          rise: +O > 0 ? "+".concat(O) : O,
          zsz: C || I,
          jnzdf: +k > 0 ? "+".concat(k) : k,
          volume: D,
          hsl: U,
          sjl: R,
          syl: M,
          roe: L,
          roa: x,
          star: s,
          price: E,
          trimedPrice: p.trim(E || g, ","),
          susp_flag: "S" === N,
          status: N || "0",
          cls: e.wzq_cls || l.wzq_cls,
        }),
        r(n, p.INNER_INDEX, t),
        r(n, "listIndex", t),
        r(n, "riseDropVal", ""),
        r(n, "jnzdfVal", ""),
        r(n, "priceVal", ""),
        r(n, "riseDropStyle", ""),
        r(n, "zdeDropVal", ""),
        r(n, "zszVal", ""),
        r(n, "zszUSD", ""),
        r(n, "zszUSDDropVal", ""),
        r(n, "showDollar", !1),
        r(n, "riseDropChartStyle", ""),
        r(n, "unit", F),
        n)
      );
    return (
      Object.assign(K, y(K, t, a)),
      D &&
        (K.volumeForSort =
          h.isKeChuangStock(P) ||
          h.isUKMarket(w) ||
          h.isUSMarket(w) ||
          h.isHKMarket(w)
            ? D
            : 100 * D),
      K
    );
  },
  y = function (e, t, r) {
    var a,
      n,
      i = N(e, "rise_per"),
      l = N(e, "jnzdf"),
      o = N(e, "rise"),
      s = N(e, "zsz"),
      u = m(e),
      c = j(e, "rise_per"),
      d = j(e, "jnzdf"),
      h = j(e, "rise_per", !0),
      S = e.listIndex || e[p.INNER_INDEX],
      b = void 0 === t ? S : t,
      O = !1;
    return (
      r &&
        Object.keys(r).length &&
        ((a = D(e, r)),
        (n = N(v(f({}, e), { zszUSD: a }), "zszUSD")),
        (O = R(e, n))),
      {
        riseDropVal: i,
        jnzdfVal: l,
        priceVal: u,
        riseDropStyle: c,
        jnzdfStyle: d,
        riseDropChartStyle: h,
        listIndex: b,
        zdeDropVal: o,
        zszVal: s,
        zszUSD: a,
        zszUSDDropVal: n,
        showDollar: O,
      }
    );
  },
  m = function (e) {
    return p.trim(e.price || e.zjcj, ",");
  },
  g = /(\\u)(\w{1,4})/gi,
  z = /(&#x)(\w{1,4});/gi,
  I = /(&#)(\d{1,6});/gi,
  _ = function (e) {
    return e
      .replace(g, function (e) {
        return String.fromCharCode(parseInt(e.replace(g, "$2"), 16));
      })
      .replace(z, function (e) {
        return String.fromCharCode(parseInt(e.replace(z, "$2"), 16));
      })
      .replace(I, function (e) {
        return String.fromCharCode(parseInt(e.replace(I, "$2")));
      });
  },
  T = function (e) {
    return { sz: "0", sh: "1", hk: "2", us: "3", pt: "p", bj: "bj" }[e] || e;
  },
  C = function (e) {
    return p.EXCEPTION_CODE.indexOf(e) >= 0;
  },
  N = function (e) {
    var t,
      r =
        arguments.length > 1 && void 0 !== arguments[1]
          ? arguments[1]
          : "rise_per",
      a = p.eq(e.susp_flag, h.STOCK_STATE_SUSPEND) ? e.susp_flag : e.status;
    return C(a)
      ? ((t = a), p.EXCEPTION_STATE[t])
      : k(
          r,
          e[r] ||
            e[
              {
                price: "zjcj",
                rise_per: "zdf",
                rise: "zde",
                zsz: "zsz",
                jnzdf: "jnzdf",
              }[r]
            ]
        );
  },
  k = function (e, t) {
    if (e === p.RISE_COLUMN_MODE[2] || e === p.RISE_COLUMN_MODE[4]) {
      var r = Math.abs(Number(t));
      return r
        ? r > 1e5
          ? "".concat((r / 1e4).toFixed(1), "万亿")
          : "".concat(r > 100 ? r.toFixed(0) : r.toFixed(1), "亿")
        : "—";
    }
    return [p.RISE_COLUMN_MODE[0], p.RISE_COLUMN_MODE[3]].includes(e)
      ? t
        ? t.indexOf("%") < 0
          ? "".concat(t, "%")
          : t
        : "—"
      : t;
  },
  j = function (e, t, r) {
    if (p.eq(e.susp_flag, h.STOCK_STATE_SUSPEND) || C(e.status))
      return "bg-peace";
    var a = parseFloat("jnzdf" !== t || r ? e.rise || e.zde : e.jnzdf);
    return r && 0 === Number(a)
      ? "bg-rise"
      : "bg-".concat(a > 0 ? "rise" : a < 0 ? "drop" : "peace");
  },
  E = function (e, t) {
    return e > t ? "animate-rise" : e < t ? "animate-drop" : "";
  },
  D = function (e, t) {
    if (
      t &&
      Object.keys(t).length &&
      e.zsz &&
      "0" !== e.usable &&
      !(["D"].indexOf(e.status) > -1)
    ) {
      var r = t.USDCNY,
        a = t.USDHKD,
        n = t.GBPUSD;
      switch (e.type) {
        case "0":
        case "1":
        case "p":
        case "pt":
        case "bj":
        case "nq":
          if (r) return +e.zsz / r;
          break;
        case "2":
          if (a) return +e.zsz / a;
          break;
        case "3":
          return +e.zsz;
        case "uk":
          if (n) return +e.zsz / n;
      }
    }
  },
  U = function (e) {
    if (e.zsz && "0" !== e.usable)
      switch (e.type) {
        case "0":
        case "1":
        case "p":
        case "pt":
        case "bj":
        case "nq":
          return 1;
        case "2":
          return 2;
        case "3":
          return 3;
        case "uk":
          return 4;
      }
  },
  R = function (e, t) {
    var r = p.eq(e.susp_flag, h.STOCK_STATE_SUSPEND) ? e.susp_flag : e.status;
    return !C(r) && "—" !== t;
  },
  M = null,
  L = null,
  x = d.defineStore("useStocksStore", function () {
    var n = d.ref({}),
      i = t(p.GROUPS_DEFAULT);
    i = i.filter(function (e) {
      return e.id !== p.STOCKBASKET_GROUPID;
    });
    var l = d.ref(i),
      o = d.ref({}),
      s = d.ref({}),
      u = d.ref({}),
      c = d.ref({}),
      S = d.ref("1"),
      O = d.ref(0),
      m = d.ref(0),
      g = d.ref("1"),
      z = d.ref({}),
      I = d.ref({}),
      _ = d.ref(null),
      T = d.ref({}),
      C = d.ref({}),
      k = d.ref(null),
      j = d.ref("1"),
      U = d.ref(!1),
      x = d.ref(void 0),
      F = function (e, t, r) {
        if (t && e) {
          c.value[e] = t;
          var a = t.order,
            i = t.orderBy;
          0 === a && ((i = p.INNER_INDEX), (a = 1)),
            (i =
              {
                price: "zjcj",
                rise_per: "zdf",
                rise: "zde",
                zsz: "zsz",
                volume: "volumeForSort",
              }[i] || i);
          var l = n.value[e];
          "zsz" === i &&
            l &&
            l.hasMultMarket &&
            l.hasRateInfo &&
            (i = "zszUSD");
          var o = l.list;
          o.sort(function (e, t) {
            var r = e[i] || "",
              n = t[i] || "";
            return "zjcj" === i
              ? a * ((+r.replace(",", "") || 0) - (+n.replace(",", "") || 0))
              : a * ((+r || 0) - (+n || 0));
          }),
            o.forEach(function (e, t) {
              var r = y(e, t, _.value);
              Object.assign(e, r);
            }),
            r && B(e, o.slice(0, s.value[e]));
        }
      },
      P = function (e) {
        var t, r, a;
        "[object Object]" === Object.prototype.toString.call(e) &&
          ((n.value = Object.assign({}, e)),
          ["mpwzq", "wzqlight"].includes("mpweapp") &&
            (k.value =
              (null ==
              (a =
                null == (r = null == (t = n.value) ? void 0 : t[p.ALL_GROUP_ID])
                  ? void 0
                  : r.list)
                ? void 0
                : a.map(function (e) {
                    return e.chooseSymbol;
                  })) || null));
      },
      w = function (e, r) {
        var a,
          n,
          i = (null == e ? void 0 : e.length)
            ? t(e)
            : (null == (n = l.value) ? void 0 : n.length)
            ? t(l.value)
            : t(p.GROUPS_DEFAULT),
          o = i.findIndex(function (e) {
            return "position" === e.id;
          });
        r && -1 === o
          ? i.unshift(p.POSITION_GROUPINFO)
          : r || -1 === o || i.splice(o, 1);
        var s = i.filter(function (e) {
          return 1 == +e.display;
        });
        (s = s.filter(function (e) {
          return e.id !== p.STOCKBASKET_GROUPID;
        })),
          (a = l.value).splice.apply(a, [0, l.value.length].concat(t(s))),
          q();
      },
      q = function () {
        l.value.length > 0 &&
          (j.value =
            "position" === l.value[0].id ? l.value[1].id : l.value[0].id);
      },
      K = function () {
        var e = l.value.findIndex(function (e) {
          return e.id === S.value;
        });
        (-1 !== e && e === O.value) || G();
      },
      A = function (e) {
        m.value = e;
      },
      G = function (e, t) {
        var r;
        !e &&
          !t &&
          l.value.length > 0 &&
          l.value.forEach(function (e, t) {
            (1 != +e.type && "全部" !== e.name) ||
              ((S.value = e.id), (O.value = t), (g.value = e.id));
          }),
          "number" == typeof t &&
            ((O.value = t),
            (e && e.id) ||
              (S.value =
                (null == (r = l.value[O.value]) ? void 0 : r.id) || "1")),
          e &&
            e.id &&
            ((S.value = e.id),
            "number" != typeof t &&
              (O.value = l.value.findIndex(function (e) {
                return e.id === S.value;
              }))),
          m.value !== O.value && A(O.value);
      },
      V = function (t) {
        var r = {};
        Object.entries(n.value).forEach(function (a) {
          var n,
            i,
            l = e(a, 2),
            o = l[0],
            u = l[1].list || [];
          t
            ? ((i = X(o, u)),
              (n =
                0 !== s.value[o] &&
                s.value[o] !== i.length &&
                i.length <= p.FIRST_SECTION_COUNT
                  ? i.length
                  : 0 === s.value[o]
                  ? Math.min(i.length, p.FIRST_SECTION_COUNT)
                  : s.value[o]))
            : ((n = Math.min(u.length, p.FIRST_SECTION_COUNT)),
              (i = X(o, u.slice(0, n)))),
            B(o, i, n),
            (r[o] = n);
        }),
          (s.value = Object.assign({}, r));
      },
      H = function (e, t) {
        e && void 0 !== t && (s.value = v(f({}, s.value), r({}, e, t)));
      },
      X = function (e, t) {
        var r, a;
        if (e)
          return (
            (a =
              t && t.length > 0
                ? t
                : (null == (r = n.value[e]) ? void 0 : r.list) || []),
            1 === C.value[e] &&
              (a = a.filter(function (e) {
                return e.trackedLabel;
              })).forEach(function (e, t) {
                var r = y(e, t, _.value);
                Object.assign(e, r);
              }),
            a
          );
      },
      B = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          r = arguments.length > 2 ? arguments[2] : void 0;
        J(e, t, r);
      },
      J = function (e) {
        var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          r = arguments.length > 2 ? arguments[2] : void 0;
        if (e && t) {
          var a = r || s.value[e] || p.FIRST_SECTION_COUNT,
            n =
              a <= p.FIRST_SECTION_COUNT
                ? 1
                : 1 + Math.ceil((a - p.FIRST_SECTION_COUNT) / p.SECTION_COUNT),
            i = o.value;
          (i[e] = Array.from({ length: n }, function (e, r) {
            var n =
                0 === r ? 0 : p.FIRST_SECTION_COUNT + (r - 1) * p.SECTION_COUNT,
              i =
                0 === r
                  ? p.FIRST_SECTION_COUNT
                  : Math.min(n + p.SECTION_COUNT, a);
            return JSON.parse(JSON.stringify(t.slice(n, i)));
          })),
            (o.value = Object.assign({}, i));
        }
      },
      $ = function (e, r) {
        var a;
        if (e && r && r.length) {
          var n = JSON.parse(JSON.stringify(r)),
            i = null == (a = n[0]) ? void 0 : a.chooseSymbol,
            l = o.value[e];
          i &&
            !(null == l
              ? void 0
              : l.flat().some(function (e) {
                  return e.chooseSymbol === i;
                })) &&
            l.push(t(n));
        }
      },
      Q = function (e) {
        if (e && Object.keys(e).length) {
          var t = n.value;
          Object.keys(e).forEach(function (r) {
            var a;
            (null == (a = t[r]) ? void 0 : a.list) && W(e[r], r);
          });
        }
      },
      W = function (e, t, i) {
        var l;
        if (e && e.length) {
          var o = (null == (l = n.value[t || S]) ? void 0 : l.list) || [],
            s = new Map();
          e.forEach(function (e) {
            s.set(e.symbol, e.abbr_label || "");
          });
          var c,
            f = 0,
            v = a(o);
          try {
            for (v.s(); !(c = v.n()).done; ) {
              var d = c.value,
                p = s.get(d.chooseSymbol) || "";
              (d.trackedLabel = p),
                p.length > 0 && 2 == +d.type && "i" !== d.cls && (f += 1);
            }
          } catch (e) {
            v.e(e);
          } finally {
            v.f();
          }
          u.value[t || S] !== f && Object.assign(u.value, r({}, t || S, f));
        }
      },
      Y = function (e, t) {
        o.value[t].forEach(function (t) {
          var r = t.findIndex(function (t) {
            return t.chooseSymbol === e.chooseSymbol;
          });
          if (r >= 0) {
            var a = t[r].listIndex,
              n = Object.assign({}, e, { listIndex: a });
            Object.assign(t[r], n);
          }
        });
      },
      Z = function () {
        var t = (function (t) {
          var r =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 20,
            a = {};
          return (
            Object.entries(t).forEach(function (t) {
              var n = e(t, 2),
                i = n[0],
                l = n[1].list,
                o = void 0 === l ? [] : l;
              a[i] = { list: o.slice(0, r), len: r };
            }),
            a
          );
        })(n.value, p.FIRST_SECTION_COUNT);
        p.setLocalUserStock(t), p.setLocalUserGroups(l.value);
      },
      ee = function (e, t) {
        e && void 0 !== t && (C.value = v(f({}, C.value), r({}, e, t)));
      },
      te = function (e) {
        var t = _.value;
        if (t && Object.keys(t).length) {
          var r = n.value[e];
          if (r) {
            var a = r.hasMultMarket,
              i = r.hasRateInfo,
              l = r.list;
            if (a && !i) {
              var o = (void 0 === l ? [] : l).map(function (e) {
                var r = D(e, t),
                  a = N(v(f({}, e), { zszUSD: r }), "zszUSD"),
                  n = R(e, a);
                return v(f({}, e), {
                  zszUSD: r,
                  zszUSDDropVal: a,
                  showDollar: n,
                });
              });
              n.value[e] = v(f({}, r), { list: o, hasRateInfo: !0 });
            }
          }
        }
      };
    return {
      stockList: n,
      groups: l,
      renderListSections: o,
      renderListCount: s,
      renderHkCount: u,
      curGroupId: S,
      curGroupIndex: O,
      sortTypes: c,
      allGroupId: g,
      symbolMap: z,
      hkDelaySymbolMap: I,
      chooseSymbolList: k,
      rateConfig: _,
      allLabelList: T,
      filterMap: C,
      curTabIndex: m,
      redBagGroupId: j,
      hkVIP: U,
      isMiniChartHide: x,
      initWithLocalData: function () {
        var e = p.getLocalUserStock();
        e && (P(e), V());
        var t = p.getLocalUserGroups();
        t && t.length > 0 && (w(t), G());
      },
      setGroups: w,
      setCurGroup: G,
      initOrRefresh: function (t) {
        var r = t.res,
          a = t.needSort,
          n = void 0 !== a && a,
          i = (t.fromPreload, t.isRefresh),
          l = void 0 !== i && i,
          o = t.showPosition,
          s = void 0 !== o && o,
          u = r.data;
        if (u) {
          var f = b(u, _.value),
            v = f.stockList,
            d = f.groups,
            p = f.symbolMap,
            h = f.hkDelaySymbolMap;
          w(d, s),
            l ? K() : G(),
            P(v),
            n &&
              Object.entries(c.value).forEach(function (t) {
                var r = e(t, 2),
                  a = r[0],
                  n = r[1];
                F(a, n);
              }),
            (function (e, t) {
              (z.value = Object.assign(z.value, e)),
                (I.value = Object.assign(I.value, t));
            })(p, h),
            Object.keys(T.value).length && Q(T.value),
            V(l),
            (L = setTimeout(function () {
              Z(), clearTimeout(L);
            }, 0));
        }
      },
      setRenderCount: H,
      setRenderListSections: B,
      addRenderSection: $,
      sortStockList: F,
      updateStockListItem: function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : S.value;
        if (e) {
          var r = Object.keys(e);
          if (r.length && (1 !== r.length || "chooseSymbol" !== r[0])) {
            var a = n.value[t] || {},
              i = a.list;
            if (i && i.length) {
              var l = i.findIndex(function (t) {
                  return void 0 !== e.chooseSymbol
                    ? h.hackUSSymbol(h.trimScode(t.chooseSymbol)) ===
                        h.hackUSSymbol(e.chooseSymbol)
                    : t.scode === e.scode && t.type === e.type;
                }),
                o = i[l];
              if (l > -1) {
                var s = f({}, o);
                r.forEach(function (t) {
                  void 0 !== e[t] && (s[t] = e[t]);
                });
                var u = s || {},
                  c = u.price,
                  d = u.rise,
                  b = u.zde,
                  O = u.rise_per,
                  m = u.zdf,
                  g = u.zjcj,
                  z = u.jnzdf,
                  I = u.trackedLabel,
                  T = u.zsz,
                  C = v(f({}, o), {
                    animateClass: E(c, o.price),
                    price: c,
                    zdf: O || m,
                    rise: d || b,
                    rise_per: O || m,
                    trimedPrice: p.trim(c || g, ","),
                    jnzdf: void 0 !== z ? z : o.jnzdf,
                    trackedLabel: I || o.trackedLabel,
                    zsz: void 0 !== T ? T : o.zsz,
                  }),
                  N = f(f({}, C), y(C, l, _.value));
                i.splice(l, 1, N), Y(JSON.parse(JSON.stringify(N)), t);
              }
            }
          }
        }
      },
      updateBasketListData: function (e) {
        Array.isArray(e) &&
          (n.value[1e3] = v(f({}, n.value[1e3] || {}), {
            list: t(e),
            len: e.length,
          }));
      },
      updateStockRateByGroup: te,
      updateRateConfig: function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        e && (_.value = f({}, e));
      },
      updateStockLabel: W,
      updateAllStockListLabel: Q,
      setLabelData: function (e, t) {
        e && (T.value = Object.assign({}, T.value, r({}, t, e)));
      },
      setFilterMap: ee,
      filteList: function (e, t) {
        var r = t;
        void 0 === t ? (r = C.value[e] || 0) : ee(e, t);
        var a = X(e);
        !(function (e, t) {
          e && void 0 !== t && n.value[e] && (n.value[e].filterCount = t);
        })(e, a.length);
        var i = a.length;
        if (1 === r)
          i > p.FIRST_SECTION_COUNT
            ? (H(e, p.FIRST_SECTION_COUNT),
              B(e, a, p.FIRST_SECTION_COUNT),
              (M = setTimeout(function () {
                H(e, i);
                for (
                  var t = a.slice(p.FIRST_SECTION_COUNT), r = 0;
                  r < t.length;
                  r += p.FIRST_SECTION_COUNT
                ) {
                  var n = t.slice(r, r + p.FIRST_SECTION_COUNT);
                  $(e, n);
                }
                clearTimeout(M);
              }, 300)))
            : (H(e, i), B(e, a, i));
        else {
          var l = Math.min(i, p.FIRST_SECTION_COUNT);
          H(e, l), B(e, a, l);
        }
      },
      getCurStockCount: function (e) {
        return (n.value[e] && n.value[e].len) || 0;
      },
      getCurFilterCount: function (e) {
        var t;
        if (!n.value[e]) return 0;
        var r = n.value[e].filterCount;
        return (
          r ||
            ((r =
              1 === C.value[e]
                ? (null == (t = X(e)) ? void 0 : t.length) || 0
                : n.value[e].len || 0),
            (n.value[e].filterCount = r)),
          r
        );
      },
      getCurStockList: function (e) {
        var t;
        return JSON.parse(
          JSON.stringify((null == (t = n.value[e]) ? void 0 : t.list) || [])
        );
      },
      getFilterList: X,
      setCurTabIndex: A,
      setHKVIP: function (e) {
        U.value = e;
      },
      updateAllListRate: function () {
        var e = _.value;
        e &&
          Object.keys(e).length &&
          Object.keys(n.value).forEach(function (e) {
            te(e);
          });
      },
      setIsMiniChartHide: function (e) {
        x.value = e;
      },
    };
  });
(exports.formatDataFromPosition = function (e) {
  return e.map(function (e, t) {
    return v(f({}, e), {
      riseDropVal: N(e),
      riseDropStyle: j(e),
      priceVal: m(e),
      trimedCode: h.trimScode(e.scode),
      riseDropChartStyle: j(e, "rise_per", !0),
    });
  });
}),
  (exports.formatDataFromServer = b),
  (exports.formatNewUserData = function (e) {
    var t = e;
    t.data && (t = t.data);
    var r = t,
      a = r.newUser,
      n = r.wzq_recommend,
      i = void 0 === n ? [] : n,
      l = r.needReauth,
      o = i.map(function (e, t) {
        return O(e, t);
      });
    return v(f({}, t), { newUser: a, recommends: o, needReauth: l });
  }),
  (exports.formatQTData = function (e) {
    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      r = e,
      a = t ? r[40] : r[8];
    if (!C(a)) {
      var n,
        i = r[0],
        l = {
          61: "nq",
          62: "bj",
          51: "0",
          1: "1",
          2: "p",
          100: "2",
          400: "ft",
          320: "sp",
          real: "3",
          delay: "3",
        },
        o = r[4],
        s = r[5];
      if (t) {
        try {
          var u = l[i];
          n =
            h.isUSMarket(u) || S.utils.isFTIndex(u)
              ? r[54]
              : h.isHKMarket(u)
              ? r[61]
              : h.isHSPlate(u)
              ? r[50]
              : h.isSPMarket(u)
              ? r[54]
              : r[62];
        } catch (e) {
          n = "100" === i || "2" === i ? r[61] : r[62];
        }
        (o = r[31]), (s = r[32]);
      }
      return {
        type: l[i],
        name: r[1],
        scode: r[2],
        price: r[3],
        rise: o > 0 ? "+".concat(o) : o,
        rise_per: s > 0 ? "+".concat(s) : s,
        jnzdf: n > 0 ? "+".concat(n) : n,
      };
    }
  }),
  (exports.useStocksStore = x);
