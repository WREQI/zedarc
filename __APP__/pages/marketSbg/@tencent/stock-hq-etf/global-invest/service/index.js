var e = require("../../../../../../@babel/runtime/helpers/regeneratorRuntime");
require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../../../@babel/runtime/helpers/slicedToArray");
require("../../../../../../@babel/runtime/helpers/Objectentries");
var r = require("../../../../../../@babel/runtime/helpers/toConsumableArray"),
  n = require("../../../../../../@babel/runtime/helpers/typeof"),
  a = require("../../../../../../@babel/runtime/helpers/defineProperty"),
  o = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  i = Object.defineProperty,
  u = Object.defineProperties,
  l = Object.getOwnPropertyDescriptors,
  c = Object.getOwnPropertySymbols,
  s = Object.prototype.hasOwnProperty,
  d = Object.prototype.propertyIsEnumerable,
  f = function (e, t, r) {
    return t in e
      ? i(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r);
  },
  p = function (e, t) {
    for (var r in t || (t = {})) s.call(t, r) && f(e, r, t[r]);
    if (c) {
      var n,
        a = o(c(t));
      try {
        for (a.s(); !(n = a.n()).done; ) {
          r = n.value;
          d.call(t, r) && f(e, r, t[r]);
        }
      } catch (e) {
        a.e(e);
      } finally {
        a.f();
      }
    }
    return e;
  },
  h = function (e, t) {
    return u(e, l(t));
  },
  m = function (e, t, r) {
    return new Promise(function (n, a) {
      var o = function (e) {
          try {
            u(r.next(e));
          } catch (e) {
            a(e);
          }
        },
        i = function (e) {
          try {
            u(r.throw(e));
          } catch (e) {
            a(e);
          }
        },
        u = function (e) {
          return e.done ? n(e.value) : Promise.resolve(e.value).then(o, i);
        };
      u((r = r.apply(e, t)).next());
    });
  },
  b = require("../../../../../../common/vendor.js"),
  g = require("../../../stock-hq-data/index.js"),
  v = require("../../api/index.js"),
  _ = require("../../utils/route.js"),
  k = "global_invest_index_filter_enabled",
  y = { us: "美国", hk: "中国香港", jp: "日本", eu: "欧洲", other: "其他" },
  x = [
    { key: "us", name: "美国", isDefault: !0 },
    { key: "hk", name: "中国香港", isDefault: !1 },
    { key: "jp", name: "日本", isDefault: !1 },
    { key: "eu", name: "欧洲", isDefault: !1 },
    { key: "other", name: "其他", isDefault: !1 },
  ];
b.reactive({ indexFilterStorageKey: k });
var S = b.reactive({
  homeData: {},
  marketList: [],
  allMarketData: { us: [], hk: [], jp: [], eu: [], other: [] },
  longTermList: [],
  selectedMarket: "us",
  indexFilterEnabled: !1,
  loadingState: {},
  errorState: {},
  buyContext: null,
});
function L(e, t) {
  S.loadingState = h(p({}, S.loadingState), a({}, e, t));
}
function T(e, t) {
  S.errorState = h(p({}, S.errorState), a({}, e, t || null));
}
function j(e) {
  S.buyContext = e || null;
}
var A = ["mpwzq", "mpweapp"].includes("mpweapp"),
  E = new Map(),
  w = null,
  D = null;
function I() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  return {
    indexFilterEnabled:
      "boolean" == typeof e.indexFilterEnabled
        ? e.indexFilterEnabled
        : S.indexFilterEnabled,
    top_n: e.top_n || -1,
    include_holdings: !1 !== e.include_holdings,
    source: e.source || "global_market",
  };
}
var O = {
    brand: {},
    askShare: {
      scene: "global_invest",
      contentId: "",
      reportPrefix: "hq_global_invest",
      reportInfo: {},
      material: null,
      sharePayload: { title: "投全球", path: "" },
    },
  },
  B = { sz: 0, sh: 1, hk: 2, us: 3, pt: "p", bj: "bj" };
function F() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  return (
    e.fund_code ||
    e.fundCode ||
    e.code ||
    e.stock_code ||
    e.codeformat ||
    e.id ||
    ""
  );
}
function q() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  return e.fund_id || e.fundId || e.id || F(e);
}
function P() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  return e.name || e.fund_name || e.fundName || e.title || "--";
}
function z(e) {
  return e
    ? "string" == typeof e || "number" == typeof e
      ? String(e)
      : Array.isArray(e)
      ? z(
          e.find(function (e) {
            return e && "object" == n(e) && e.name;
          }) || e.find(Boolean)
        )
      : "object" == n(e)
      ? String(e.name || e.label || "")
      : ""
    : "";
}
function M() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
    t =
      arguments.length > 1 && void 0 !== arguments[1]
        ? arguments[1]
        : "global_invest",
    n = F(e),
    a = q(e),
    o = z(e.label),
    i = e.tags || e.tag || e.labels || [],
    u = e.holdings || e.holding || e.components || [];
  return h(p({}, e), {
    fund_code: n,
    fund_id: a,
    source: t,
    name: P(e),
    fund_name: e.fund_name || e.etf_name || e.name,
    code: n,
    symbol: e.symbol || e.etf_symbol || n,
    market: e.market || e.market_code || "us",
    returnValue:
      e.returnValue ||
      e.zdfformat ||
      e.zdf ||
      e.change ||
      e.price_ratio ||
      "--",
    returnLabel: e.returnLabel || "涨跌幅",
    priceText: e.priceText || e.amountText || e.zxj || e.price || "--",
    priceLabel: e.priceLabel || "买一笔仅需",
    tags: [o].concat(r(Array.isArray(i) ? i : [i])).filter(Boolean),
    holdings: Array.isArray(u) ? u : [u].filter(Boolean),
    highlight: e.highlight || e.description || e.desc || "",
    trendData: e.trendData || e.trend || [],
  });
}
function C(e) {
  var t = (null == e ? void 0 : e.data) && "object" == n(e.data) ? e.data : e;
  return t && "object" == n(t) && ("code" in t || "msg" in t)
    ? t.data || {}
    : t || {};
}
function R(e) {
  var t = C(e);
  return Array.isArray(t.items) ? t.items : [];
}
function G() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  return h(p({}, e), {
    fund_code: e.fund_code || e.etf_symbol || e.symbol,
    fund_id: e.fund_id || e.etf_symbol || e.symbol,
    name: e.name || e.etf_name,
    fund_name: e.fund_name || e.etf_name || e.name,
    returnValue: e.returnValue || e.price_ratio,
    price_ratio: e.price_ratio,
    priceText: e.priceText || e.price,
    code: e.code || e.etf_symbol || e.symbol,
    symbol: e.symbol || e.etf_symbol || "",
  });
}
function V() {
  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
    t = e.event_info || e.eventInfo || {},
    n = t.tag || {},
    a = Array.isArray(e.holding_top_list) ? e.holding_top_list : [];
  return M(
    h(p({}, G(e.etf_info || e.etfInfo || {})), {
      topic_name: n.tag_name || t.tag_name,
      tag_id: n.tag_id,
      event_desc: t.title,
      highlight: t.subtitle,
      holdings: a,
      tags: [n.tag_name]
        .concat(
          r(
            a.map(function (e) {
              return e.name;
            })
          )
        )
        .filter(Boolean),
      label: e.label || e.labels,
      labels: e.labels,
      holding_top_list: e.holding_top_list,
    }),
    "home_hotspot"
  );
}
function N(e) {
  var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    a = (function () {
      var e,
        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return Array.isArray(t.items)
        ? [["", t.items]]
        : t.regions && "object" == n(t.regions)
        ? Object.entries(t.regions)
        : (null == (e = t.data) ? void 0 : e.regions) &&
          "object" == n(t.data.regions)
        ? Object.entries(t.data.regions)
        : [];
    })(C(e)),
    o = { us: [], hk: [], jp: [], eu: [], other: [] };
  return (
    a.forEach(function (e) {
      var n = t(e, 2),
        a = n[0],
        i = n[1];
      if (Array.isArray(i)) {
        var u = (function () {
          var e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "",
            t = String(e).toLowerCase();
          return y[t]
            ? t
            : t.includes("港")
            ? "hk"
            : t.includes("日")
            ? "jp"
            : t.includes("欧")
            ? "eu"
            : t.includes("北美") || t.includes("美国") || t.includes("美")
            ? "us"
            : "other";
        })(a);
        i.forEach(function (e) {
          o[u].push(
            M(
              h(p({}, e), {
                market: u,
                highlight: e.recommend || e.highlight || e.description,
              }),
              r.source || "global_market"
            )
          );
        });
      }
    }),
    o
  );
}
function H() {
  return m(this, arguments, function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return e().mark(function r() {
      var n, a, o;
      return e().wrap(
        function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                if (
                  ((n =
                    "boolean" == typeof t.indexFilterEnabled
                      ? t.indexFilterEnabled
                      : S.indexFilterEnabled),
                  (function () {
                    var e =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {};
                    if (e.forceRefresh) return !0;
                    if (!w) return !0;
                    var t = I(e);
                    return JSON.stringify(t) !== JSON.stringify(D);
                  })(t))
                ) {
                  e.next = 3;
                  break;
                }
                return e.abrupt("return", w);
              case 3:
                return (
                  (e.prev = 3),
                  (a = {
                    top_n: t.top_n || -1,
                    exclude_index: !!n,
                    include_holdings: !1 !== t.include_holdings,
                  }),
                  (e.t0 = N),
                  (e.next = 8),
                  v.api.getEtfOverseaMarketList(b.StockBridge, a)
                );
              case 8:
                return (
                  (e.t1 = e.sent),
                  (e.t2 = h(p({}, t), { source: t.source || "global_market" })),
                  (o = (0, e.t0)(e.t1, e.t2)),
                  e.abrupt("return", ((w = o), (D = I(t)), o))
                );
              case 14:
                return (
                  (e.prev = 14),
                  (e.t3 = e.catch(3)),
                  e.abrupt(
                    "return",
                    w || { us: [], hk: [], jp: [], eu: [], other: [] }
                  )
                );
              case 17:
              case "end":
                return e.stop();
            }
        },
        r,
        null,
        [[3, 14]]
      );
    })();
  });
}
function K() {
  return m(this, arguments, function () {
    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
    return e().mark(function r() {
      var n, a, o, i, u, l, c;
      return e().wrap(
        function (e) {
          for (;;)
            switch ((e.prev = e.next)) {
              case 0:
                return (
                  t.silent || L("longTermList", !0),
                  T("longTermList", null),
                  (e.prev = 1),
                  (u =
                    null !=
                    (i =
                      null !=
                      (o =
                        null != (a = null != (n = t.top_n) ? n : t.count)
                          ? a
                          : t.pageSize)
                        ? o
                        : t.page_size)
                      ? i
                      : 20),
                  (l = t.offset || 0),
                  (e.t0 = R),
                  (e.next = 7),
                  v.api.getEtfOverseaLongTermSelection(b.StockBridge, {
                    top_n: u,
                    offset: l,
                  })
                );
              case 7:
                return (
                  (e.t1 = e.sent),
                  (c = (0, e.t0)(e.t1).map(function (e) {
                    return (function () {
                      var e,
                        t =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {},
                        r =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : "long_term",
                        n = t.etf_info || t.etfInfo || {};
                      return M(
                        h(p({}, G(n)), {
                          price_ratio:
                            null != (e = n.price_ratio) ? e : t.price_ratio,
                          returnValue: t.annual_yield_3y,
                          zdfformat: t.annual_yield_3y,
                          highlight: t.highlight,
                          priceText: n.price || t.priceText || t.price || "",
                          price: n.price || t.priceText || t.price || "",
                        }),
                        r
                      );
                    })(e, t.source || "long_term");
                  })),
                  e.abrupt(
                    "return",
                    (t.skipStateUpdate ||
                      (t.isLoadMore
                        ? (S.longTermList = (S.longTermList || []).concat(c))
                        : (S.longTermList = c)),
                    c)
                  )
                );
              case 12:
                return (
                  (e.prev = 12),
                  (e.t2 = e.catch(1)),
                  e.abrupt("return", (T("longTermList", e.t2), []))
                );
              case 15:
                return (
                  (e.prev = 15), t.silent || L("longTermList", !1), e.finish(15)
                );
              case 18:
              case "end":
                return e.stop();
            }
        },
        r,
        null,
        [[1, 12, 15, 18]]
      );
    })();
  });
}
var U = {
  fetchGlobalHome: function () {
    return m(this, arguments, function () {
      var r =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return e().mark(function n() {
        var a, o, i, u, l, c, s, d, f, m, g;
        return e().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    r.silent || L("homeData", !0),
                    T("homeData", null),
                    (e.prev = 1),
                    (e.next = 4),
                    Promise.all([
                      v.api.getEtfOverseaHotPoint(b.StockBridge, {
                        top_n: r.hotPointTopN || -1,
                      }),
                      H({
                        indexFilterEnabled: !0,
                        source: "home_market_summary",
                        top_n: 3,
                        include_holdings: !0,
                        forceRefresh: !!r.forceRefresh,
                      }),
                      K({
                        count: 1,
                        source: "home_long_term",
                        silent: !!r.silent,
                        skipStateUpdate: !0,
                      }),
                    ])
                  );
                case 4:
                  return (
                    (a = e.sent),
                    (o = t(a, 3)),
                    (i = o[0]),
                    (u = o[1]),
                    (l = o[2]),
                    (c = u[r.market || S.selectedMarket || x[0].key] || []),
                    (s = R(i).map(V)),
                    (d = S.homeData || {}),
                    (f = Array.isArray(d.hotspotList) ? d.hotspotList : []),
                    (m = r.silent
                      ? (function () {
                          var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : [],
                            t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : [];
                          if (!Array.isArray(e) || 0 === e.length) return t;
                          if (!Array.isArray(t) || 0 === t.length) return e;
                          var r = function () {
                              var e =
                                  arguments.length > 0 &&
                                  void 0 !== arguments[0]
                                    ? arguments[0]
                                    : {},
                                t = e.etf_info || e.etfInfo || {};
                              return String(
                                t.etf_symbol ||
                                  e.symbol ||
                                  e.etf_symbol ||
                                  e.fund_code ||
                                  e.code ||
                                  ""
                              );
                            },
                            n = new Map(
                              t.map(function (e) {
                                return [r(e), e];
                              })
                            );
                          return (
                            e.forEach(function (e) {
                              var t,
                                a,
                                o,
                                i = n.get(r(e));
                              if (i) {
                                var u = i.etf_info || i.etfInfo || {},
                                  l = e.etf_info || e.etfInfo || {},
                                  c =
                                    null !=
                                    (o =
                                      null !=
                                      (a =
                                        null != (t = u.price_ratio)
                                          ? t
                                          : i.returnValue)
                                        ? a
                                        : i.zdfformat)
                                      ? o
                                      : i.zdf;
                                null != c &&
                                  ((e.returnValue = c),
                                  (e.zdfformat = c),
                                  (e.zdf = c),
                                  (e.etf_info = h(p({}, l), {
                                    price_ratio: c,
                                  })));
                              }
                            }),
                            e
                          );
                        })(f, s)
                      : s),
                    (g = h(p(p({}, O), r.homeData), {
                      hotPoint: C(i),
                      hotspot: r.hotspot || m[0] || null,
                      hotspotList: m,
                      marketData: u,
                      marketSummary: c,
                      longTermSummary: l[0] || null,
                    })),
                    e.abrupt("return", ((S.homeData = g), g))
                  );
                case 18:
                  return (
                    (e.prev = 18),
                    (e.t0 = e.catch(1)),
                    e.abrupt(
                      "return",
                      (T("homeData", e.t0),
                      (S.homeData = p(p({}, O), r.homeData)),
                      S.homeData)
                    )
                  );
                case 21:
                  return (
                    (e.prev = 21), r.silent || L("homeData", !1), e.finish(21)
                  );
                case 24:
                case "end":
                  return e.stop();
              }
          },
          n,
          null,
          [[1, 18, 21, 24]]
        );
      })();
    });
  },
  fetchGlobalMarketList: function () {
    return m(this, arguments, function () {
      var t =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      return e().mark(function r() {
        var n, a, o, i, u;
        return e().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (n = t.market || S.selectedMarket || x[0].key),
                    (a =
                      "boolean" == typeof t.indexFilterEnabled
                        ? t.indexFilterEnabled
                        : S.indexFilterEnabled),
                    (function (e) {
                      S.selectedMarket = e || x[0].key;
                    })(n),
                    (o = a),
                    (S.indexFilterEnabled = !!o),
                    t.silent || L("marketList", !0),
                    T("marketList", null),
                    (e.prev = 2),
                    (e.next = 5),
                    H({
                      indexFilterEnabled: a,
                      source: t.source || "global_market",
                      top_n:
                        t.count || t.pageSize || t.page_size || t.top_n || 20,
                      include_holdings: !1 !== t.include_holdings,
                      forceRefresh: !!t.forceRefresh,
                    })
                  );
                case 5:
                  return (
                    (i = e.sent),
                    (u = i[n] || []),
                    e.abrupt(
                      "return",
                      (t.skipStateUpdate ||
                        ((S.allMarketData = i), (S.marketList = u)),
                      u)
                    )
                  );
                case 10:
                  return (
                    (e.prev = 10),
                    (e.t0 = e.catch(2)),
                    e.abrupt("return", (T("marketList", e.t0), []))
                  );
                case 13:
                  return (
                    (e.prev = 13), t.silent || L("marketList", !1), e.finish(13)
                  );
                case 16:
                case "end":
                  return e.stop();
              }
          },
          r,
          null,
          [[2, 10, 13, 16]]
        );
      })();
    });
  },
  fetchAllMarketData: H,
  fetchLongTermList: K,
  fetchGlobalEtfQuotes: function () {
    return m(this, arguments, function () {
      var t =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
      return e().mark(function r() {
        var n, a;
        return e().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (0 !== (a = Array.isArray(t) ? t : []).length) {
                    e.next = 3;
                    break;
                  }
                  return e.abrupt("return", []);
                case 3:
                  return (
                    L("quotes", !0),
                    T("quotes", null),
                    (e.prev = 4),
                    e.abrupt(
                      "return",
                      (null == (n = b.StockBridge) || n.request,
                      a.map(function (e) {
                        return M(e, e.source);
                      }))
                    )
                  );
                case 8:
                  return (
                    (e.prev = 8),
                    (e.t0 = e.catch(4)),
                    e.abrupt(
                      "return",
                      (T("quotes", e.t0),
                      a.map(function (e) {
                        return M(e, e.source);
                      }))
                    )
                  );
                case 11:
                  return (e.prev = 11), L("quotes", !1), e.finish(11);
                case 14:
                case "end":
                  return e.stop();
              }
          },
          r,
          null,
          [[4, 8, 11, 14]]
        );
      })();
    });
  },
  navigateToEtfBuy: function () {
    return m(this, arguments, function () {
      var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
      return e().mark(function n() {
        var a, o, i, u, l, c, s, d, f, h;
        return e().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (
                    ((o = p({}, t)),
                    (i = F(o)),
                    (u = q(o)),
                    (l = g.utils.splitSymbol(o.symbol)),
                    (c = l.market),
                    (s = l.scode),
                    j({
                      fund_code: i,
                      fund_id: u,
                      source: o.source || "global_invest",
                    }),
                    (d = b.StockBridge.tradeFunc))
                  ) {
                    e.next = 5;
                    break;
                  }
                  return e.abrupt("return", !1);
                case 5:
                  return (e.prev = 5), (e.next = 8), d.fetchBrokerInfo();
                case 8:
                  if (d.isBind()) {
                    e.next = 10;
                    break;
                  }
                  return e.abrupt("return", (_.navigateToApplyIndex(r), !0));
                case 10:
                  return (
                    (f =
                      (null == (a = d.getCurrentBroker) ? void 0 : a.call(d)) ||
                      {}),
                    (h = f.code),
                    (e.next = 13),
                    d.navToBrokerPage({
                      broker: h,
                      name: "TradeStock",
                      data: { market: c, code: s, entrust_type: "buy" },
                    })
                  );
                case 13:
                  e.next = 18;
                  break;
                case 15:
                  return (
                    (e.prev = 15), (e.t0 = e.catch(5)), e.abrupt("return", !1)
                  );
                case 18:
                  return e.abrupt("return", !0);
                case 19:
                case "end":
                  return e.stop();
              }
          },
          n,
          null,
          [[5, 15]]
        );
      })();
    });
  },
  navigateToRegularInvest: function () {
    return m(this, arguments, function () {
      var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
      return e().mark(function n() {
        var a, o, i, u, l, c, s, d, f, h, m, g, v;
        return e().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  if (
                    ((u = p({}, t)),
                    (l = F(u)),
                    (c = P(u)),
                    (s = (function () {
                      var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : {},
                        t = String(
                          (function () {
                            var e =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : {};
                            return e.code || e.symbol || "--";
                          })(e)
                        ).trim(),
                        r = t.match(/^([a-z]{2})(\d+)$/i);
                      return r
                        ? { market: r[1].toLowerCase(), code: r[2] }
                        : /^5/.test(t)
                        ? { market: "sh", code: t }
                        : /^(0|1|2|3)/.test(t)
                        ? { market: "sz", code: t }
                        : { market: "cnjj", code: t };
                    })(u)),
                    (d = s.market),
                    (f = s.code),
                    (h = Object.prototype.hasOwnProperty.call(B, d) ? B[d] : d),
                    j({
                      fund_code: l,
                      fund_id: q(u),
                      source: u.source || "global_invest",
                    }),
                    l && f && c && "--" !== c && void 0 !== h && "" !== h)
                  ) {
                    e.next = 3;
                    break;
                  }
                  return e.abrupt(
                    "return",
                    (null == (o = (a = b.StockBridge).toast) ||
                      o.call(a, "产品信息缺失，请稍后再试"),
                    !1)
                  );
                case 3:
                  if ((m = b.StockBridge.tradeFunc)) {
                    e.next = 6;
                    break;
                  }
                  return e.abrupt("return", !1);
                case 6:
                  return (e.prev = 6), (e.next = 9), m.fetchBrokerInfo();
                case 9:
                  if (m.isBind()) {
                    e.next = 11;
                    break;
                  }
                  return e.abrupt("return", (_.navigateToApplyIndex(r), !0));
                case 11:
                  if (
                    ((g =
                      (null == (i = m.getCurrentBroker) ? void 0 : i.call(m)) ||
                      {}),
                    (v = g.code),
                    !A)
                  ) {
                    e.next = 17;
                    break;
                  }
                  return (
                    (e.next = 15),
                    m.navToBrokerPage({
                      broker: v,
                      name: "InvestCondition",
                      data: { name: c, code: f, market: h },
                    })
                  );
                case 15:
                  e.next = 19;
                  break;
                case 17:
                  return (
                    (e.next = 19),
                    m.navToBrokerPage({
                      broker: v,
                      path: "/trade/condition/invest",
                      data: { name: c, code: f, market: h },
                    })
                  );
                case 19:
                  return e.abrupt("return", !0);
                case 22:
                  return (
                    (e.prev = 22), (e.t0 = e.catch(6)), e.abrupt("return", !1)
                  );
                case 25:
                case "end":
                  return e.stop();
              }
          },
          n,
          null,
          [[6, 22]]
        );
      })();
    });
  },
  normalizeFundItem: M,
  clearMarketListCache: function (e) {
    [!0, !1].forEach(function (t) {
      E.delete(
        (function (e, t) {
          return "".concat(e, "_").concat(!!t);
        })(e, t)
      );
    });
  },
};
(exports.GLOBAL_INVEST_INDEX_FILTER_STORAGE_KEY = k),
  (exports.GlobalInvestService = U),
  (exports.GlobalInvestState = S),
  (exports.MARKET_CONFIG = x);
