require("../../../../../../@babel/runtime/helpers/Arrayincludes");
var e,
  t = require("../../../../../../@babel/runtime/helpers/defineProperty"),
  n = require("../../../../../../common/vendor.js"),
  a = require("useWidget.js"),
  r = {
    MARKET: "market",
    MARKET_ORANGE: "market-orange",
    MARKET_BLUE: "market-blue",
    WATCHLIST: "watchlist",
    DEFAULT: "default",
    EARNINGS: "earnings",
    MACRO: "macro",
    TRADING: "trading",
    PROFIT_FORECAST: "profit-forecast",
  },
  i =
    (t((e = {}), r.EARNINGS, {
      url: "https://st.gtimg.com/design/ab86b35d2a9c174d4c2c2a6fbeb6d72e.png",
    }),
    t(e, r.MACRO, {
      url: "https://st.gtimg.com/design/8c9efbf4086c732f0a90720bb148e767.png",
    }),
    t(e, r.TRADING, {
      url: "https://st.gtimg.com/design/49a77456d98ad66d9680a6972ed81f6f.png",
    }),
    t(e, r.PROFIT_FORECAST, {
      url: "https://st.gtimg.com/design/0e98787f24122884a1c669fdf597fb20.png",
    }),
    t(e, r.MARKET, {
      url: "https://st.gtimg.com/design/41913fdc2763c6ba299d8fd53799e16f.png",
    }),
    t(e, r.WATCHLIST, {
      url: "https://st.gtimg.com/design/8f6112ab09b025c7e1d4792052fd8518.png",
    }),
    t(e, r.MARKET_BLUE, {
      url: "https://st.gtimg.com/design/50066afd77b7cdc743ac4787444aa832.png",
    }),
    t(e, r.MARKET_ORANGE, {
      url: "https://st.gtimg.com/design/03058d8cc332164160b98f3093a42423.png",
    }),
    e),
  o = n.defineComponent({
    name: "WidgetOverview",
    components: {
      Tag: function () {
        return "../common/Tag.js";
      },
    },
    props: {
      widgetData: {
        type: Object,
        default: function () {
          return { earnings: [], macro_sectors: [], trade_notify: [] };
        },
      },
      subscribed: { type: Boolean, default: !1 },
      maxCount: { type: Number, default: 1 },
      loaded: { type: Boolean, default: !1 },
    },
    emits: ["subscribe", "item-click", "more", "hide"],
    setup: function (e, t) {
      var i = t.emit,
        o = r.EARNINGS,
        c = r.MACRO,
        u = r.TRADING,
        d = r.PROFIT_FORECAST,
        s = n.computed(function () {
          return e.widgetData.earnings || [];
        }),
        l = n.computed(function () {
          return e.widgetData.macro_sectors || [];
        }),
        g = n.computed(function () {
          return e.widgetData.trade_notify || [];
        }),
        f = n.computed(function () {
          return s.value.length > 0 ? s.value.slice(0, 1) : [];
        }),
        p = n.computed(function () {
          var e = s.value.length > 0,
            t = g.value.length > 0;
          if (!e && !t) return l.value.slice(0, 3);
          var n = e ? 1 : 2;
          return l.value.slice(0, n);
        }),
        m = n.computed(function () {
          var e = s.value.length > 0,
            t = l.value.length > 0;
          return e || t ? g.value.slice(0, 1) : g.value.slice(0, 3);
        }),
        b = n.computed(function () {
          return f.value.length + p.value.length + m.value.length;
        }),
        T = n.computed(function () {
          return b.value >= 3;
        });
      n.watch(
        function () {
          return e.widgetData;
        },
        function () {
          e.loaded &&
            b.value < 3 &&
            i("hide", { reason: "insufficient_data", count: b.value });
        },
        { immediate: !0 }
      ),
        n.watch(
          function () {
            return e.loaded;
          },
          function (e) {
            e &&
              b.value < 3 &&
              i("hide", { reason: "insufficient_data", count: b.value });
          }
        );
      var h = n.ref(n.StockBridge.ENV === n.EnvTypeEnum.MP);
      return {
        earningsTagType: o,
        macroTagType: c,
        tradingTagType: u,
        profitForecastTagType: d,
        shouldShow: T,
        earningsList: s,
        macroList: l,
        tradingList: g,
        displayEarnings: f,
        displayMacro: p,
        displayTrading: m,
        formatDate: a.formatDate,
        getMarketCloseText: function (e) {
          return e.includes("美股") || e.includes("美国")
            ? "美股休市"
            : e.includes("港股")
            ? "港股休市"
            : e.includes("A股") || e.includes("元旦")
            ? "A股休市"
            : e.includes("英国")
            ? "英股休市"
            : "休市";
        },
        handleSubscribe: function () {
          i("subscribe", !e.subscribed);
        },
        handleItemClick: function (e, t) {
          i("item-click", { item: e, type: t });
        },
        handleMore: function () {
          i("more"),
            n.StockRouter.routeTo({
              name: "financialcalendar",
              query: { viewtype: "month", column: "all", market: "all" },
            });
        },
        isMP: h,
      };
    },
  });
Array || n.resolveComponent("Tag")();
var c = n._export_sfc(o, [
  [
    "render",
    function (e, t, a, r, i, o) {
      return n.e(
        { a: e.shouldShow },
        e.shouldShow
          ? n.e(
              { b: e.isMP },
              e.isMP
                ? {
                    c: n.t(e.subscribed ? "已订阅" : "订阅日历"),
                    d: n.n({
                      "widget-overview__subscribe--subscribed": e.subscribed,
                    }),
                    e: n.o(function () {
                      return (
                        e.handleSubscribe &&
                        e.handleSubscribe.apply(e, arguments)
                      );
                    }, 5836),
                  }
                : {},
              { f: e.earningsList.length },
              e.earningsList.length
                ? {
                    g: n.f(e.displayEarnings, function (t, a, r) {
                      return {
                        a: n.t(t.widget_title || t.title),
                        b: "b601d328-0-" + r,
                        c: n.t(e.formatDate(t.dateStr)),
                        d: n.t(t.forecast_net),
                        e: "b601d328-1-" + r,
                        f: "earnings-" + a,
                        g: n.o(
                          function (n) {
                            return e.handleItemClick(t, "earnings");
                          },
                          5837,
                          "earnings-" + a
                        ),
                      };
                    }),
                    h: n.p({ type: e.earningsTagType }),
                    i: n.p({ type: e.profitForecastTagType }),
                  }
                : {},
              { j: e.macroList.length },
              e.macroList.length
                ? {
                    k: n.f(e.displayMacro, function (t, a, r) {
                      return {
                        a: n.t(t.widget_title || t.title),
                        b: "b601d328-2-" + r,
                        c: n.t(e.formatDate(t.dateStr)),
                        d: n.t(t.widget_content || t.name),
                        e: "macro-" + a,
                        f: n.o(
                          function (n) {
                            return e.handleItemClick(t, "macro");
                          },
                          5838,
                          "macro-" + a
                        ),
                      };
                    }),
                    l: n.p({ type: e.macroTagType }),
                  }
                : {},
              { m: e.tradingList.length },
              e.tradingList.length
                ? {
                    n: n.f(e.displayTrading, function (t, a, r) {
                      return {
                        a: n.t(t.widget_title || t.title),
                        b: "b601d328-3-" + r,
                        c: n.t(e.formatDate(t.startStr)),
                        d: n.t(
                          t.widget_content || e.getMarketCloseText(t.title)
                        ),
                        e: "trading-" + a,
                        f: n.o(
                          function (n) {
                            return e.handleItemClick(t, "trading");
                          },
                          5839,
                          "trading-" + a
                        ),
                      };
                    }),
                    o: n.p({ type: e.tradingTagType }),
                  }
                : {},
              {
                p: n.o(function () {
                  return e.handleMore && e.handleMore.apply(e, arguments);
                }, 5840),
              }
            )
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-b601d328"],
]);
wx.createComponent(c);
var u = Object.freeze(
  Object.defineProperty({ __proto__: null }, Symbol.toStringTag, {
    value: "Module",
  })
);
(exports.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3d6cS1pbnZlc3RtZW50LWNhbGVuZGFyL2NvbXBvbmVudHMvd2lkZ2V0L1dpZGdldE92ZXJ2aWV3LnZ1ZQ =
  u),
  (exports.TAG_IMAGE_CONFIG = i),
  (exports.TagType = r);
