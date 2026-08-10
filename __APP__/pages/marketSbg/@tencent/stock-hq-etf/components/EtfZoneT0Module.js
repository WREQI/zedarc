var e = require("../../../../../@babel/runtime/helpers/toConsumableArray");
require("../../../../../@babel/runtime/helpers/Arrayincludes");
var t = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  r = Object.defineProperty,
  n = Object.defineProperties,
  i = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  o = Object.prototype.hasOwnProperty,
  c = Object.prototype.propertyIsEnumerable,
  l = function (e, t, n) {
    return t in e
      ? r(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n);
  },
  u = function (e, r) {
    for (var n in r || (r = {})) o.call(r, n) && l(e, n, r[n]);
    if (a) {
      var i,
        u = t(a(r));
      try {
        for (u.s(); !(i = u.n()).done; ) {
          n = i.value;
          c.call(r, n) && l(e, n, r[n]);
        }
      } catch (e) {
        u.e(e);
      } finally {
        u.f();
      }
    }
    return e;
  },
  s = function (e, t) {
    return n(e, i(t));
  },
  p = require("../../../../../common/vendor.js"),
  d = require("../../stock-base/visibilityObserver/index.js"),
  f = require("../../stock-hq-data/index.js"),
  m = require("../utils/common.js"),
  g = [
    {
      strategy: "riseFast",
      tip: "涨的快：挑正在快速上涨的，冲高就卖",
      metricLabel: "5分钟涨速",
      protoKey: "fast_riser",
      emptyText: "“市场行情偏弱，暂无标的，静待机会”",
    },
    {
      strategy: "volatile",
      tip: "波动大：选波动大的ETF，抄底反弹后卖出",
      metricLabel: "振幅",
      protoKey: "high_volatility",
      emptyText: "“市场行情偏弱，暂无标的，静待机会”",
    },
    {
      strategy: "premium",
      tip: "溢折率回归：低买高卖，赚溢折率回归的钱",
      metricLabel: "溢折率水平",
      protoKey: "premium_reversion",
      emptyText: "“暂无满足策略标的，静待机会”",
    },
  ];
function y(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    r = t.noSign;
  if (null == e || "" === e || "--" === e) return "--";
  var n = parseFloat(e);
  return Number.isNaN(n)
    ? "--"
    : "".concat(r ? "" : n > 0 ? "+" : "").concat(e, "%");
}
var v = p.defineComponent({
  name: "EtfZoneT0Module",
  components: {
    T0StrategyItem: function () {
      return "./T0StrategyItem.js";
    },
  },
  props: { t0Data: { type: Object, default: null } },
  setup: function (t) {
    var r = p.getCurrentInstance(),
      n = (null == r ? void 0 : r.proxy) || r,
      i = ["mpwzq", "wzqlight"].includes("mpweapp"),
      a = m.skin(),
      o = p.computed(function () {
        return "dark" === a || "black" === a
          ? "https://st.gtimg.com/design/7255fa4b3a47d575212430437ce77949.png"
          : "https://st.gtimg.com/design/fdc027da0dcb871e9de09a100783e257.png";
      }),
      c = p.ref([]),
      l = p.ref([]),
      v = null,
      b = !1,
      _ = !1;
    function h() {
      return {
        column_id: "etf_real_time_trade",
        item_type: "banner_desc",
        banner_desc: encodeURIComponent("ETF_T+0交易"),
      };
    }
    function k() {
      var e, t, r, n;
      if (!_ && b) {
        var i = l.value || [];
        if (i.length) {
          _ = !0;
          var a = h();
          try {
            p.StockBridge.report("hq.etf-page.t_entry_brow", a);
          } catch (e) {}
          try {
            var o =
                null == (t = null == (e = i[0]) ? void 0 : e.fund)
                  ? void 0
                  : t.code,
              c =
                null == (n = null == (r = i[1]) ? void 0 : r.fund)
                  ? void 0
                  : n.code;
            o &&
              p.StockBridge.report(
                "hq.etf-page.t_entry_fast_rise_target_brow",
                s(u({}, a), { stockid: o, attribute_type: "stockid" })
              ),
              c &&
                p.StockBridge.report(
                  "hq.etf-page.t_entry_volatility_asset_brow",
                  s(u({}, a), { stockid: c, attribute_type: "stockid" })
                );
          } catch (e) {}
        }
      }
    }
    function x() {
      p.nextTick$1(function () {
        v ||
          (q.value &&
            (v = new d.VisibilityObserver(
              ".t0-card",
              {
                once: !0,
                callback: function (e) {
                  e && ((b = !0), k());
                },
                intersection: { threshold: 0 },
              },
              { context: n }
            )));
      });
    }
    p.watch(
      function () {
        return t.t0Data;
      },
      function (t) {
        !(function (t) {
          var r = new Set(),
            n = [],
            i = [];
          g.forEach(function (a) {
            var o = t && t[a.protoKey],
              c = ((o && o.items) || []).find(function (e) {
                return e && e.code && !r.has(e.code);
              });
            c
              ? (r.add(c.code),
                n.push(
                  (function (t, r) {
                    var n,
                      i,
                      a,
                      o,
                      c = t.code || "",
                      l = (f.utils.splitSymbol(c) || {}).scode,
                      u = ["T+0"]
                        .concat(
                          e(
                            (t.holding_top_list || [])
                              .map(function (e) {
                                return e.name || "";
                              })
                              .filter(Boolean)
                          )
                        )
                        .slice(0, 3),
                      s = t.change_pct;
                    "volatile" === r.strategy
                      ? (s = null != (n = t.amplitude) ? n : "--")
                      : "premium" === r.strategy
                      ? (s = o = null != (i = t.percentile) ? i : t.rate)
                      : (s = null != (a = t.change_5m) ? a : t.change_pct);
                    var p =
                        "volatile" === r.strategy
                          ? "t0-card__item-metric-value--dark"
                          : m.getRatioClass(parseFloat(s)),
                      d = r.tip.indexOf("："),
                      g = d >= 0 ? r.tip.slice(0, d + 1) : "",
                      v = d >= 0 ? r.tip.slice(d + 1) : r.tip;
                    return {
                      strategy: r.strategy,
                      tip: r.tip,
                      tipPrefix: g,
                      tipSuffix: v,
                      metricLabel: r.metricLabel,
                      metricValue: y(s, { noSign: "volatile" === r.strategy }),
                      metricClass: p,
                      percentile: o,
                      tags: u,
                      fund: {
                        name: t.name,
                        code: c,
                        scode: l || c,
                        market: "",
                        symbol: c,
                        zdf: t.change_pct,
                      },
                    };
                  })(c, a)
                ))
              : i.push(
                  (function (e) {
                    var t = e.tip.indexOf("："),
                      r = t >= 0 ? e.tip.slice(0, t + 1) : "",
                      n = t >= 0 ? e.tip.slice(t + 1) : e.tip;
                    return {
                      strategy: e.strategy,
                      isEmpty: !0,
                      emptyText: e.emptyText,
                      tip: e.tip,
                      tipPrefix: r,
                      tipSuffix: n,
                    };
                  })(a)
                );
          }),
            (c.value = [].concat(n, i)),
            (l.value = n),
            k();
        })(t);
      },
      { immediate: !0 }
    );
    var S = p.computed(function () {
        return c.value.slice(0, 2);
      }),
      q = p.computed(function () {
        return S.value.length > 0;
      });
    return (
      p.watch(q, function (e) {
        e && x();
      }),
      p.onMounted(function () {
        x();
      }),
      p.onUnmounted(function () {
        var e, t;
        null ==
          (t =
            null == (e = null == v ? void 0 : v.observer)
              ? void 0
              : e.disconnect) || t.call(e),
          (v = null);
      }),
      {
        tagImage: o,
        hasModule: q,
        displayStrategies: S,
        handleModuleClick: function () {
          try {
            var e = h();
            p.StockBridge.report("hq.etf-page.t_entry_click", e),
              p.StockBridge.report(
                "hq.etf-page.t_top_right_triangle_jump_click",
                e
              );
          } catch (e) {}
          p.StockRouter.routeTo({ name: "ttradezone" });
        },
        isLite: i,
      }
    );
  },
});
Array || p.resolveComponent("t0-strategy-item")();
var b = p._export_sfc(v, [
  [
    "render",
    function (e, t, r, n, i, a) {
      return p.e(
        { a: e.hasModule },
        e.hasModule
          ? {
              b: e.tagImage,
              c: p.o(function () {
                return (
                  e.handleModuleClick && e.handleModuleClick.apply(e, arguments)
                );
              }, 3572),
              d: p.f(e.displayStrategies, function (e, t, r) {
                return {
                  a: p.t(e.tipPrefix),
                  b: p.t(e.tipSuffix),
                  c: "47896f04-0-" + r,
                  d: p.p({ item: e, index: t + 1 }),
                  e: e.strategy,
                  f: e.strategy,
                };
              }),
              e: e.isLite ? "" : 1,
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-47896f04"],
]);
wx.createComponent(b);
