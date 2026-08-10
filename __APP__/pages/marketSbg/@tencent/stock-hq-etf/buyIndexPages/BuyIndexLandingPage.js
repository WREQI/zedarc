require("../../../../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../../../../@babel/runtime/helpers/defineProperty"),
  n = require("../../../../../@babel/runtime/helpers/slicedToArray"),
  t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  r = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  a = Object.defineProperty,
  o = Object.defineProperties,
  i = Object.getOwnPropertyDescriptors,
  u = Object.getOwnPropertySymbols,
  l = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable,
  s = function (e, n, t) {
    return n in e
      ? a(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t })
      : (e[n] = t);
  },
  d = function (e, n) {
    for (var t in n || (n = {})) l.call(n, t) && s(e, t, n[t]);
    if (u) {
      var a,
        o = r(u(n));
      try {
        for (o.s(); !(a = o.n()).done; ) {
          t = a.value;
          c.call(n, t) && s(e, t, n[t]);
        }
      } catch (e) {
        o.e(e);
      } finally {
        o.f();
      }
    }
    return e;
  },
  p = function (e, n) {
    return o(e, i(n));
  },
  f = function (e, n, t) {
    return new Promise(function (r, a) {
      var o = function (e) {
          try {
            u(t.next(e));
          } catch (e) {
            a(e);
          }
        },
        i = function (e) {
          try {
            u(t.throw(e));
          } catch (e) {
            a(e);
          }
        },
        u = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(o, i);
        };
      u((t = t.apply(e, n)).next());
    });
  },
  v = require("../../../../../common/vendor.js"),
  h = require("../node-modules/@tencent/st-tools/dist/index.js"),
  m = require("../api/index.js"),
  g = require("../../stock-hq-data/index.js"),
  b = {
    recommendPools: { conservative: null, growth: null },
    askYuanbao: {
      questions: [
        {
          text: "沪深300、中证500、创业板怎么选？",
          scene: "buy_index_landing",
          subScene: "ask_yuanbao",
        },
        {
          text: "如何用ETF跟上A股行情？",
          scene: "buy_index_landing",
          subScene: "ask_yuanbao",
        },
        {
          text: "国家队重仓的宽基ETF有哪些？",
          scene: "buy_index_landing",
          subScene: "ask_yuanbao",
        },
      ],
    },
  };
function y() {
  return f(
    this,
    null,
    t().mark(function e() {
      return t().wrap(function (e) {
        for (;;)
          switch ((e.prev = e.next)) {
            case 0:
              return e.abrupt("return", b);
            case 1:
            case "end":
              return e.stop();
          }
      }, e);
    })
  );
}
var k = {
    all: "all",
    net_inflow: "all",
    national_team: "state_hold",
    scale: "all",
    valuation: "all",
  },
  _ = {
    all: "price_ratio",
    net_inflow: "net_purchase_5d",
    national_team: "state_hold_ratio",
    scale: "market_value",
    valuation: "pe_ttm_pct",
  },
  w = { all: !0, net_inflow: !0, national_team: !0, scale: !0, valuation: !1 },
  x = {
    price: "latest",
    price_ratio: "change_pct",
    net_purchase_5d: "net_purchase_5d",
    state_hold_ratio: "state_hold_ratio",
    market_value: "market_value",
    pe_ttm_pct: "pe_ttm_pct",
    pe_ttm: "pe_ttm",
    turnover: "turnover",
  };
function S(e) {
  var n = Number(e);
  return Number.isFinite(n) && 0 !== n ? (n > 0 ? "rise" : "drop") : "equal";
}
function B(e) {
  var n = String(null != e ? e : "").trim();
  if (!n) return "--";
  var t = Number(n);
  return Number.isFinite(t) ? "".concat(t > 0 ? "+" : "").concat(n, "%") : "--";
}
function T(e) {
  var n,
    t,
    r,
    a,
    o,
    i,
    u,
    l,
    c,
    s = String(e.symbol || ""),
    d = (function (e) {
      var n = String(e || "").toLowerCase(),
        t = n.match(/^([a-z]+)(\d+)$/);
      return t ? { market: t[1], etfCode: t[2] } : { market: "sh", etfCode: n };
    })(s),
    p = d.market,
    f = d.etfCode;
  return {
    symbol: s,
    name: String(e.name || ""),
    price: String(null != (n = e.price) ? n : ""),
    price_ratio: String(null != (t = e.price_ratio) ? t : ""),
    turnover: String(null != (r = e.turnover) ? r : ""),
    market_value: String(null != (a = e.market_value) ? a : ""),
    net_purchase_5d: String(null != (o = e.net_purchase_5d) ? o : ""),
    state_hold_ratio: String(null != (i = e.state_hold_ratio) ? i : ""),
    pe_ttm_pct: String(null != (u = e.pe_ttm_pct) ? u : ""),
    pe_ttm: String(null != (l = e.pe_ttm) ? l : ""),
    selling_point: String(null != (c = e.selling_point) ? c : ""),
    market: p,
    etfCode: f,
    ratioClass: S(e.price_ratio),
    ratioText: B(e.price_ratio),
  };
}
function C(e, n) {
  return f(
    this,
    null,
    t().mark(function r() {
      var a, o, i, u, l, c;
      return t().wrap(
        function (t) {
          for (;;)
            switch ((t.prev = t.next)) {
              case 0:
                return (
                  (u = null != (a = n.count) ? a : 3),
                  (t.prev = 1),
                  (t.next = 4),
                  m.api.getScaleIndexETFRankList(
                    e,
                    (function (e) {
                      var n = e.tab,
                        t = e.offset,
                        r = e.count,
                        a = e.sortKey,
                        o = e.sortDesc,
                        i = null != a ? a : _[n],
                        u = k[n] || "all";
                      return {
                        board_type: e.filterOn
                          ? "".concat(u, "_group_by_index")
                          : u,
                        sort_type: x[i] || i,
                        direct: ("boolean" == typeof o ? o : w[n])
                          ? "down"
                          : "up",
                        offset: t,
                        count: r,
                        with_selling_point: !0,
                      };
                    })({
                      tab: n.tab,
                      offset: 0,
                      count: u,
                      filterOn: n.filterOn,
                    })
                  )
                );
              case 4:
                return (
                  (l = t.sent),
                  (c =
                    (null == (o = null == l ? void 0 : l.data)
                      ? void 0
                      : o.items) || []),
                  t.abrupt("return", {
                    tab: n.tab,
                    filterOn: n.filterOn,
                    rows: Array.isArray(c) ? c.slice(0, u).map(T) : [],
                    total:
                      null == (i = null == l ? void 0 : l.data)
                        ? void 0
                        : i.total,
                  })
                );
              case 9:
                return (
                  (t.prev = 9),
                  (t.t0 = t.catch(1)),
                  t.abrupt("return", {
                    tab: n.tab,
                    filterOn: n.filterOn,
                    rows: [],
                    total: 0,
                  })
                );
              case 12:
              case "end":
                return t.stop();
            }
        },
        r,
        null,
        [[1, 9]]
      );
    })
  );
}
function A(e, n) {
  var t = String(e.symbol || "").toLowerCase(),
    r = t.match(/^([a-z]+)(\d+)$/),
    a = r ? r[1] : "sh",
    o = r ? r[2] : t,
    i = String(e.price_ratio || "").trim(),
    u = Number(i),
    l = "equal";
  u > 0 ? (l = "rise") : u < 0 && (l = "drop");
  var c = i ? "".concat(u > 0 ? "+" : "").concat(i, "%") : "--",
    s = Number(e.price),
    d =
      Number.isFinite(s) && s > 0
        ? "".concat((100 * s).toFixed(2), "元")
        : "--";
  return {
    etfCode: o,
    market: a,
    symbol: t || "".concat(a).concat(o),
    name: String(e.name || ""),
    poolType: n,
    highlight: String(e.highlight || ""),
    ratio: c,
    ratioClass: l,
    minBuyAmount: d,
  };
}
function I(e) {
  return f(
    this,
    null,
    t().mark(function n() {
      var r, a, o, i, u;
      return t().wrap(
        function (n) {
          for (;;)
            switch ((n.prev = n.next)) {
              case 0:
                return (
                  (o = null),
                  (n.prev = 1),
                  (n.next = 4),
                  m.api.getEtfIndexZone(e)
                );
              case 4:
                (o = n.sent), (n.next = 9);
                break;
              case 7:
                (n.prev = 7), (n.t0 = n.catch(1));
              case 9:
                return (
                  (i =
                    0 === (null == o ? void 0 : o.code) &&
                    Array.isArray(
                      null == (r = null == o ? void 0 : o.data)
                        ? void 0
                        : r.conservative
                    )
                      ? o.data.conservative
                      : []),
                  (u =
                    0 === (null == o ? void 0 : o.code) &&
                    Array.isArray(
                      null == (a = null == o ? void 0 : o.data)
                        ? void 0
                        : a.growth
                    )
                      ? o.data.growth
                      : []),
                  n.abrupt("return", {
                    recommendPools: {
                      conservative: i[0] ? A(i[0], "conservative") : null,
                      growth: u[0] ? A(u[0], "growth") : null,
                    },
                  })
                );
              case 11:
              case "end":
                return n.stop();
            }
        },
        n,
        null,
        [[1, 7]]
      );
    })
  );
}
function P() {
  var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
    a = r.defaultRankTab,
    o = void 0 === a ? "all" : a,
    i = ["mpwzq", "mpweapp"].includes("mpweapp"),
    u = !1;
  i ||
    "undefined" == typeof navigator ||
    (u = !!h.dist.detect(navigator.userAgent).env.IS_ZXG);
  var l = v.computed(function () {
      return i || u;
    }),
    c = v.ref(
      "function" == typeof v.StockBridge.getStorage
        ? String(v.StockBridge.getStorage("user/skin") || "light")
        : "light"
    ),
    s = v.ref(0),
    m = v.ref(88),
    g = v.ref(0),
    b = v.ref("买指数"),
    k = v.ref(null),
    _ = v.ref(!0),
    w = v.ref(!1),
    x = v.ref({
      all: [],
      net_inflow: [],
      national_team: [],
      scale: [],
      valuation: [],
    }),
    S = v.ref(!0),
    B = v.ref(!1),
    T = v.ref(!0),
    A = v.computed(function () {
      var e = g.value / 200;
      return e < 0 ? 0 : e > 1 ? 1 : Number(e.toFixed(2));
    }),
    P = v.computed(function () {
      return {};
    }),
    q = v.computed(function () {
      var e,
        n = null == (e = k.value) ? void 0 : e.recommendPools,
        t = null == n ? void 0 : n.conservative,
        r = null == n ? void 0 : n.growth,
        a = t || r || null;
      if (!a) return "";
      var o = String(a.market || "").toLowerCase(),
        i = String(a.etfCode || "");
      return i ? "".concat(o).concat(i) : "";
    }),
    R = v.computed(function () {
      return { symbol: q.value, topic_name: "买指数" };
    }),
    D = v.ref(o);
  function O() {
    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    return f(
      this,
      null,
      t().mark(function r() {
        var a, o, i, u;
        return t().wrap(
          function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (
                    e || ((_.value = !0), (w.value = !1)),
                    (t.prev = 1),
                    (t.next = 4),
                    Promise.all([y(), I(v.StockBridge)])
                  );
                case 4:
                  (a = t.sent),
                    (o = n(a, 2)),
                    (i = o[0]),
                    (u = o[1]),
                    (k.value = p(d({}, i), {
                      recommendPools: u.recommendPools,
                    })),
                    (t.next = 14);
                  break;
                case 11:
                  (t.prev = 11), (t.t0 = t.catch(1)), e || (w.value = !0);
                case 14:
                  return (t.prev = 14), e || (_.value = !1), t.finish(14);
                case 17:
                case "end":
                  return t.stop();
              }
          },
          r,
          null,
          [[1, 11, 14, 17]]
        );
      })
    );
  }
  function j(n) {
    return f(this, arguments, function (n) {
      var r =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : T.value,
        a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
      return t().mark(function o() {
        var i;
        return t().wrap(
          function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (
                    a || ((S.value = !0), (B.value = !1)),
                    (t.prev = 1),
                    (t.next = 4),
                    C(v.StockBridge, { tab: n, filterOn: r, count: 3 })
                  );
                case 4:
                  if (((i = t.sent), !a || r === T.value)) {
                    t.next = 7;
                    break;
                  }
                  return t.abrupt("return");
                case 7:
                  (x.value = p(d({}, x.value), e({}, n, i.rows))),
                    (t.next = 13);
                  break;
                case 10:
                  (t.prev = 10), (t.t0 = t.catch(1)), a || (B.value = !0);
                case 13:
                  return (t.prev = 13), a || (S.value = !1), t.finish(13);
                case 16:
                case "end":
                  return t.stop();
              }
          },
          o,
          null,
          [[1, 10, 13, 16]]
        );
      })();
    });
  }
  function L(e, n) {
    return f(
      this,
      null,
      t().mark(function r() {
        var a;
        return t().wrap(
          function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  if (null == n ? void 0 : n.etfCode) {
                    t.next = 2;
                    break;
                  }
                  return t.abrupt("return");
                case 2:
                  return (
                    (a =
                      "buy" === e
                        ? "/pages/trade/buy?symbol="
                            .concat(n.market)
                            .concat(n.etfCode)
                        : "autoinvest" === e
                        ? "/pages/trade/autoinvest?symbol="
                            .concat(n.market)
                            .concat(n.etfCode)
                        : "/pages/etf/detail?symbol="
                            .concat(n.market)
                            .concat(n.etfCode)),
                    (t.prev = 3),
                    (t.next = 6),
                    v.StockRouter.routeTo({ url: a })
                  );
                case 6:
                  t.next = 10;
                  break;
                case 8:
                  (t.prev = 8), (t.t0 = t.catch(3));
                case 10:
                case "end":
                  return t.stop();
              }
          },
          r,
          null,
          [[3, 8]]
        );
      })
    );
  }
  var E = v.computed(function () {
    return "undefined" != typeof window ? window.location.href : void 0;
  });
  function N() {
    "function" == typeof v.StockBridge.userShare &&
      v.StockBridge.userShare({
        title: "用ETF布局核心指数",
        desc: "紧跟市场，分散风险，无需选股",
        path: E.value,
      });
  }
  return {
    brandImageSrc:
      "https://st.gtimg.com/design/114b3ab0b5052774e13de00c771146a1.png",
    isMP: i,
    hasCustomNav: l,
    skin: c,
    navTitle: b,
    navSafeTop: s,
    navHeight: m,
    headerAlpha: A,
    scrollStyle: P,
    aiReportInfo: R,
    landingData: k,
    landingLoading: _,
    landingError: w,
    rankPreviewByTab: x,
    rankLoading: S,
    rankError: B,
    handleBack: function () {
      var e;
      if (i && void 0 !== v.wx$1 && "function" == typeof v.wx$1.navigateBack)
        try {
          return void v.wx$1.navigateBack({ delta: 1 });
        } catch (e) {}
      try {
        v.StockRouter.routeBack(1);
      } catch (n) {
        "undefined" != typeof window &&
          (null == (e = window.history) ? void 0 : e.length) > 1 &&
          window.history.back();
      }
    },
    handleNavLayout: function (e) {
      (s.value = e.safeTop), (m.value = e.navBarHeight);
    },
    handleScroll: function (e) {
      var n = e.target;
      n && (g.value = n.scrollTop || 0);
    },
    setScrollTop: function (e) {
      g.value = Number(e) || 0;
    },
    handlePageShow: function () {},
    handlePageHide: function () {},
    handleBuy: function (e) {
      L("buy", e);
    },
    handleAutoInvest: function (e) {
      L("autoinvest", e);
    },
    handleCardClick: function (e) {
      L("detail", e);
    },
    handleRankTabChange: function (e) {
      var n = e.tabType;
      (D.value = n), (x.value[n] && 0 !== x.value[n].length) || j(n);
    },
    handleFilterChange: function (n) {
      return f(
        this,
        null,
        t().mark(function r() {
          var a, i;
          return t().wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  return (
                    (T.value = n.enabled),
                    (a = n.currentTab || o),
                    (i = x.value[a] || []),
                    (x.value = e(
                      {
                        all: [],
                        net_inflow: [],
                        national_team: [],
                        scale: [],
                        valuation: [],
                      },
                      a,
                      i
                    )),
                    (D.value = a),
                    (t.next = 6),
                    j(a, n.enabled, !0)
                  );
                case 6:
                case "end":
                  return t.stop();
              }
          }, r);
        })
      );
    },
    handleRankViewAll: function (e) {
      return f(
        this,
        null,
        t().mark(function n() {
          var r;
          return t().wrap(
            function (n) {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    return (
                      (r = {
                        defaultTab: (null == e ? void 0 : e.tabType) || "all",
                        defaultFilterEnabled: (
                          "boolean" ==
                          typeof (null == e ? void 0 : e.filterEnabled)
                            ? e.filterEnabled
                            : T.value
                        )
                          ? "1"
                          : "0",
                      }),
                      (n.prev = 1),
                      "https://wzq.tenpay.com/mp/v2/index.html#/buy-index-broad-rank",
                      n.abrupt(
                        "return",
                        void v.StockBridge.openExtraWebview(
                          "https://wzq.tenpay.com/mp/v2/index.html#/buy-index-broad-rank",
                          r
                        )
                      )
                    );
                  case 6:
                    (n.prev = 6), (n.t0 = n.catch(1));
                  case 8:
                  case "end":
                    return n.stop();
                }
            },
            n,
            null,
            [[1, 6]]
          );
        })
      );
    },
    handleShare: function () {
      N(),
        u &&
        (("undefined" != typeof navigator && navigator.userAgent) || "").match(
          /(OpenHarmony);?[\s\/]+([\d.]+)?/
        )
          ? v.StockBridge.toast("暂未支持，敬请期待", "none")
          : i ||
            ("function" == typeof v.StockBridge.openShareGuide &&
              v.StockBridge.openShareGuide());
    },
    handleAskYuanbao: function (e) {
      return f(
        this,
        null,
        t().mark(function n() {
          var r, a;
          return t().wrap(
            function (n) {
              for (;;)
                switch ((n.prev = n.next)) {
                  case 0:
                    return (
                      (r =
                        (null == e ? void 0 : e.title) ||
                        (null == e ? void 0 : e.text) ||
                        (null == e ? void 0 : e.question) ||
                        "问问元宝"),
                      (n.prev = 1),
                      (a = "/pages/ai/search?q=".concat(
                        encodeURIComponent(r),
                        "&scene=buy_index_landing"
                      )),
                      (n.next = 5),
                      v.StockRouter.routeTo({ url: a })
                    );
                  case 5:
                    n.next = 9;
                    break;
                  case 7:
                    (n.prev = 7), (n.t0 = n.catch(1));
                  case 9:
                  case "end":
                    return n.stop();
                }
            },
            n,
            null,
            [[1, 7]]
          );
        })
      );
    },
    updateShareInfo: N,
    initLoadData: function () {
      return f(
        this,
        null,
        t().mark(function e() {
          return t().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.next = 2), Promise.all([O(), j(o)]);
                case 2:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      );
    },
    refreshLandingSilent: function () {
      return f(
        this,
        null,
        t().mark(function e() {
          return t().wrap(function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (e.next = 2), Promise.all([O(!0), j(D.value, T.value, !0)])
                  );
                case 2:
                case "end":
                  return e.stop();
              }
          }, e);
        })
      );
    },
  };
}
function q(e) {
  var n = e.fetchData,
    r = e.marketIntervalMs,
    a = void 0 === r ? 3e4 : r,
    o = e.dataIntervalMs,
    i = void 0 === o ? 5e3 : o,
    u = e.fetchOnStart,
    l = void 0 === u || u,
    c = v.ref(!1),
    s = null,
    d = null,
    p = null,
    h = !1;
  function m() {
    d && (clearTimeout(d), (d = null));
  }
  function b() {
    p && (clearInterval(p), (p = null));
  }
  function y() {
    return f(
      this,
      null,
      t().mark(function e() {
        var n, r;
        return t().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (
                    (e.prev = 0),
                    (e.next = 3),
                    (s ||
                      (s = new g.DetailApi(function (e) {
                        return v.StockBridge.request(e, v.RequestTypeEnum.GET);
                      })),
                    s).getMarketState({ market: 0 }, { needProcess: !0 })
                  );
                case 3:
                  (n = e.sent),
                    (r = ((null == n ? void 0 : n.split("|")) || [])
                      .map(function (e) {
                        return e.split("_");
                      })
                      .filter(function (e) {
                        return "NEWSH" === e[0];
                      })).length
                      ? (c.value = "open" === r[0][1])
                      : (c.value = !1),
                    (e.next = 11);
                  break;
                case 8:
                  (e.prev = 8), (e.t0 = e.catch(0)), (c.value = !1);
                case 11:
                case "end":
                  return e.stop();
              }
          },
          e,
          null,
          [[0, 8]]
        );
      })
    );
  }
  function k() {
    return f(
      this,
      null,
      t().mark(function e() {
        return t().wrap(
          function (e) {
            for (;;)
              switch ((e.prev = e.next)) {
                case 0:
                  return (e.prev = 0), (e.next = 3), n();
                case 3:
                  e.next = 7;
                  break;
                case 5:
                  (e.prev = 5), (e.t0 = e.catch(0));
                case 7:
                case "end":
                  return e.stop();
              }
          },
          e,
          null,
          [[0, 5]]
        );
      })
    );
  }
  function _() {
    (h = !1), m(), b();
  }
  return (
    v.onBeforeUnmount(function () {
      _();
    }),
    {
      isTrading: c,
      start: function () {
        h ||
          ((h = !0),
          l && (k(), y()),
          (function e() {
            var n = this;
            m(),
              (d = setTimeout(function () {
                return f(
                  n,
                  null,
                  t().mark(function n() {
                    return t().wrap(function (n) {
                      for (;;)
                        switch ((n.prev = n.next)) {
                          case 0:
                            if (((n.t0 = h), !n.t0)) {
                              n.next = 5;
                              break;
                            }
                            return (n.next = 4), y();
                          case 4:
                            h && e();
                          case 5:
                          case "end":
                            return n.stop();
                        }
                    }, n);
                  })
                );
              }, a));
          })(),
          b(),
          (p = setInterval(function () {
            h && c.value && k();
          }, i)));
      },
      stop: _,
      refresh: k,
      checkTradeTime: y,
    }
  );
}
var R = "etf_buy_index",
  D = "沪深300、中证500、创业板怎么选？",
  O = { light: "white", white: "white", black: "dark", dark: "dark" },
  j = v.defineComponent({
    name: "BuyIndexLandingPage",
    components: {
      BuyIndexNavBar: function () {
        return "./components/BuyIndexNavBar.js";
      },
      BuyIndexHeroSection: function () {
        return "./components/BuyIndexHeroSection.js";
      },
      BuyIndexBenefitsSection: function () {
        return "./components/BuyIndexBenefitsSection.js";
      },
      BuyIndexRecommendBlock: function () {
        return "./components/BuyIndexRecommendBlock.js";
      },
      TrustFooter: function () {
        return "../../../../detailSbg/@tencent/stock-markets-base/components/TrustFooter/index.js";
      },
      BuyIndexBroadRankBlock: function () {
        return "./components/BuyIndexBroadRankBlock.js";
      },
      BuyIndexRiskTips: function () {
        return "./components/BuyIndexRiskTips.js";
      },
      FooterBar: function () {
        return "../hotTopicPages/components/FooterBar.js";
      },
      HalfScreenAiEntry: function () {
        return "../../../../searchAi/@tencent/stock-search-ai/pages/HalfScreenAiEntry.js";
      },
    },
    props: {
      defaultRankTab: { type: String, default: "all" },
      query: { type: Object, default: null },
    },
    setup: function (e) {
      var n = this,
        r = ["mpwzq", "wzqlight"].includes("mpweapp"),
        a = ["mpwzq", "mpweapp"].includes("mpweapp"),
        o = !1;
      a ||
        "undefined" == typeof navigator ||
        (o = Boolean(h.dist.detect(navigator.userAgent).env.IS_ZXG));
      var i = v.getCurrentInstance(),
        u = v.computed(function () {
          var e, n;
          return null !=
            (n = null == (e = null == i ? void 0 : i.proxy) ? void 0 : e.$route)
            ? n
            : {};
        }),
        l = v.computed(function () {
          var n;
          return e.query || (null == (n = u.value) ? void 0 : n.query) || {};
        }),
        c = v.computed(function () {
          var e;
          return String((null == (e = l.value) ? void 0 : e.banner_desc) || "");
        }),
        s = {
          fromColumnId: R,
          bannerDesc: c,
          commonClickOptions: function () {
            return { from_column_id: R, banner_desc: c.value };
          },
        };
      v.provide("buyIndexTracking", s);
      var m = v.ref(null);
      function g() {
        var e = m.value;
        e && "function" == typeof e.syncAllWatchlist && e.syncAllWatchlist();
      }
      var b = P({ defaultRankTab: e.defaultRankTab }),
        y = b.isMP,
        k = b.hasCustomNav,
        _ = b.skin,
        w = b.navTitle,
        x = b.navSafeTop,
        S = b.navHeight,
        B = b.headerAlpha,
        T = b.scrollStyle,
        C = b.aiReportInfo,
        A = b.landingData,
        I = b.landingLoading,
        j = b.landingError,
        L = b.rankPreviewByTab,
        E = b.rankLoading,
        N = b.rankError,
        F = b.handleBack,
        H = b.handleNavLayout,
        Q = b.setScrollTop,
        M = b.handleBuy,
        W = b.handleAutoInvest,
        z = b.handleCardClick,
        $ = b.handleRankTabChange,
        U = b.handleFilterChange,
        Y = b.handleRankViewAll,
        G = b.handleShare,
        V = b.initLoadData,
        J = b.refreshLandingSilent,
        Z = b.updateShareInfo,
        X = q({ fetchData: J, fetchOnStart: !1 }),
        K = X.isTrading,
        ee = X.start,
        ne = X.stop,
        te = X.refresh,
        re = function () {
          if ("undefined" != typeof window && "undefined" != typeof document) {
            var e = document.documentElement,
              n = window.pageYOffset || e.scrollTop || 0;
            Q(n);
          }
        };
      v.StockBridge.report("hq.buyindexlanding.overall_page_brow", {
        from_column_id: R,
        banner_desc: c.value,
      });
      var ae = v.ref(!1),
        oe = v.ref(null),
        ie = v.computed(function () {
          return (oe.value && oe.value.title) || D;
        }),
        ue = v.computed(function () {
          return (oe.value && (oe.value.prompt || oe.value.query)) || ie.value;
        }),
        le = v.computed(function () {
          var e = oe.value || {};
          return p(d({}, e), {
            title: ie.value,
            prompt: ue.value,
            scene: e.scene || "buy_index_landing",
            sub_channel: e.sub_channel || "manual",
            sub_scene: e.sub_scene || "buy_index_landing",
            ext_content: e.ext_content || (C.value && C.value.symbol) || "",
          });
        }),
        ce = v.computed(function () {
          return (
            O[
              (function () {
                if ("undefined" != typeof document && document.body) {
                  var e =
                    document.body.getAttribute("data-theme") ||
                    document.body.getAttribute("data-st-theme");
                  if (e) return e;
                }
                return void 0 !== v.wx$1 &&
                  "function" == typeof v.wx$1.getStorageSync
                  ? v.wx$1.getStorageSync("user/skin") || "light"
                  : _.value || "light";
              })()
            ] || "white"
          );
        });
      return (
        v.onMounted(function () {
          return f(
            n,
            null,
            t().mark(function e() {
              return t().wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        v.StockBridge.report(
                          "hq.buyindexlanding.bottom_question_gold_brow"
                        ),
                        y ||
                          "undefined" == typeof window ||
                          window.addEventListener("scroll", re, {
                            passive: !0,
                          }),
                        (e.next = 4),
                        V()
                      );
                    case 4:
                      ee(), Z();
                    case 6:
                    case "end":
                      return e.stop();
                  }
              }, e);
            })
          );
        }),
        v.onBeforeUnmount(function () {
          y ||
            "undefined" == typeof window ||
            window.removeEventListener("scroll", re),
            ne();
        }),
        v.onActivated(function () {
          Z(), g(), te(), ee();
        }),
        v.onDeactivated(function () {
          ne();
        }),
        {
          isMP: y,
          isLite: r,
          hasCustomNav: k,
          skin: _,
          navTitle: w,
          navSafeTop: x,
          navHeight: S,
          headerAlpha: B,
          scrollStyle: T,
          aiReportInfo: C,
          landingData: A,
          landingLoading: I,
          landingError: j,
          rankPreviewByTab: L,
          rankLoading: E,
          rankError: N,
          isTrading: K,
          handleBack: F,
          handleNavLayout: H,
          setScrollTop: Q,
          handleBuy: M,
          handleAutoInvest: W,
          handleCardClick: z,
          handleRankTabChange: $,
          handleFilterChange: U,
          handleRankViewAll: Y,
          handleShare: G,
          handleShareWithTracking: function () {
            v.StockBridge.report(
              "hq.buyindexlanding.bottom_ask_yuanbao_share_click",
              { from_column_id: R, banner_desc: c.value }
            ),
              G();
          },
          handleAskYuanbaoWithTracking: function (e) {
            if (
              (v.StockBridge.report(
                "hq.buyindexlanding.bottom_ask_yuanbao_click",
                { from_column_id: R, banner_desc: c.value }
              ),
              o)
            ) {
              var n = (C.value && C.value.symbol) || "",
                t = e || {},
                r = t.title,
                a = t.prompt,
                i = t.scene,
                u = r || D,
                l = a || r || D,
                s = i || "buy_index_landing",
                d = e ? JSON.stringify(e) : "{}",
                p =
                  ("undefined" != typeof document &&
                    document.body.getAttribute("data-theme")) ||
                  "light",
                f = "light" === p || "white" === p,
                h = {
                  url: "qqstock://SHY?info=".concat(
                    encodeURIComponent(
                      JSON.stringify({
                        p_key: "com.tencent.shy.search_ai",
                        p_url: "semiAi?stockCode="
                          .concat(n, "&sourceFrom=")
                          .concat(s, "&aiDialogQuestion=")
                          .concat(encodeURIComponent(u), "&aiQuestionQuery=")
                          .concat(encodeURIComponent(l), "&serverObj=")
                          .concat(encodeURIComponent(d)),
                        showNav: !1,
                      })
                    )
                  ),
                  height:
                    0.8 *
                    ("undefined" != typeof window ? window.screen.height : 812),
                  coverColor: f ? "#66000000" : "#99000000",
                  cornerRadius: 8,
                };
              "undefined" != typeof location &&
                (location.href = "qqstock://SDModal?info=".concat(
                  encodeURIComponent(JSON.stringify(h))
                ));
            } else (oe.value = e || null), (ae.value = !0);
          },
          isAPP: o,
          showAiDialog: ae,
          aiDialogQuestion: ie,
          aiQuestionQuery: ue,
          aiDialogServerObj: le,
          aiDialogTheme: ce,
          handleCloseAiDialog: function () {
            (ae.value = !1), (oe.value = null);
          },
          updateShareInfo: Z,
          startTradePolling: ee,
          stopTradePolling: ne,
          refreshTradePolling: te,
          recommendBlockRef: m,
          syncRecommendWatchlist: g,
        }
      );
    },
    onPageShow: function () {
      this.updateShareInfo(),
        this.syncRecommendWatchlist(),
        this.refreshTradePolling(),
        this.startTradePolling();
    },
    onPageHide: function () {
      this.stopTradePolling();
    },
  });
Array ||
  (
    v.resolveComponent("BuyIndexNavBar") +
    v.resolveComponent("BuyIndexHeroSection") +
    v.resolveComponent("BuyIndexBenefitsSection") +
    v.resolveComponent("BuyIndexRecommendBlock") +
    v.resolveComponent("BuyIndexBroadRankBlock") +
    v.resolveComponent("BuyIndexRiskTips") +
    v.resolveComponent("TrustFooter") +
    v.resolveComponent("FooterBar") +
    v.resolveComponent("half-screen-ai-entry")
  )();
var L = v._export_sfc(j, [
  [
    "render",
    function (e, n, t, r, a, o) {
      return v.e(
        {
          a: v.o(e.handleBack, 542),
          b: v.o(e.handleNavLayout, 543),
          c: v.p({
            title: e.navTitle,
            opacity: e.headerAlpha,
            "app-title-visible": !1,
          }),
          d: v.p({
            "has-custom-nav": e.hasCustomNav,
            "safe-top": e.navSafeTop,
            "nav-bar-height": e.navHeight,
          }),
          e: v.sr("recommendBlockRef", "46c16173-3"),
          f: v.o(e.handleBuy, 544),
          g: v.o(e.handleAutoInvest, 545),
          h: v.o(e.handleCardClick, 546),
          i: v.p({
            "recommend-pools": e.landingData
              ? e.landingData.recommendPools
              : null,
            loading: e.landingLoading,
            error: e.landingError,
          }),
          j: v.o(e.handleRankTabChange, 547),
          k: v.o(e.handleFilterChange, 548),
          l: v.o(e.handleRankViewAll, 549),
          m: v.o(e.handleShare, 550),
          n: v.p({
            "rank-preview-by-tab": e.rankPreviewByTab,
            loading: e.rankLoading,
            error: e.rankError,
            "default-tab": e.defaultRankTab,
          }),
          o: v.p({ "has-brand-logo": e.isLite }),
          p: e.isLite,
        },
        (e.isLite, {}),
        {
          q: v.o(e.handleAskYuanbaoWithTracking, 551),
          r: v.o(e.handleShareWithTracking, 552),
          s: v.p({
            scene: "etfbuyindex",
            "ai-report-info": e.aiReportInfo,
            "is-mp": e.isMP,
          }),
          t: e.showAiDialog && e.isMP,
        },
        e.showAiDialog && e.isMP
          ? {
              v: v.o(e.handleCloseAiDialog, 553),
              w: v.p({
                "show-ai-dialog": e.showAiDialog,
                "ai-dialog-question": e.aiDialogQuestion,
                "ai-question-query": e.aiQuestionQuery,
                "server-obj": e.aiDialogServerObj,
                theme: e.aiDialogTheme,
                "source-from": "buy_index_landing",
              }),
            }
          : e.showAiDialog && !e.isAPP
          ? {
              y: v.o(e.handleCloseAiDialog, 554),
              z: v.p({
                "show-ai-dialog": e.showAiDialog,
                "ai-dialog-question": e.aiDialogQuestion,
                "ai-question-query": e.aiQuestionQuery,
                "server-obj": e.aiDialogServerObj,
                "source-from": "buy_index_landing",
              }),
            }
          : {},
        { x: e.showAiDialog && !e.isAPP, A: e.skin }
      );
    },
  ],
  ["__scopeId", "data-v-46c16173"],
]);
wx.createComponent(L);
