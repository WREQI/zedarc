var e = require("../../../../../../common/vendor.js"),
  t = { riseFast: "涨的快", volatile: "波动大", premium: "溢折率回归" },
  r = e.defineComponent({
    name: "T0StrategyBlock",
    components: {
      T0FundCard: function () {
        return "./T0FundCard.js";
      },
      T0PremiumCard: function () {
        return "./T0PremiumCard.js";
      },
    },
    props: {
      strategy: { type: String, required: !0 },
      subtitle: { type: String, default: "" },
      list: {
        type: Array,
        default: function () {
          return [];
        },
      },
      isEmpty: { type: Boolean, default: !1 },
      emptyText: { type: String, default: "" },
      channelId: { type: String, default: "" },
      isChannelIdReady: { type: Boolean, default: !1 },
    },
    emits: ["method:open", "fund:buy", "premium:explain"],
    setup: function (r, o) {
      var n = o.emit,
        a = e.getCurrentInstance(),
        i = (null == a ? void 0 : a.proxy) || a,
        s = e.computed(function () {
          return t[r.strategy] || "";
        }),
        l = e.computed(function () {
          return "premium" === r.strategy
            ? '"暂无满足策略标的，静待机会"'
            : '"市场行情偏弱，暂无标的，静待机会"';
        });
      return (
        e.onMounted(function () {
          try {
            "riseFast" === r.strategy
              ? (e.StockBridge.mtaReport({
                  busi: "hq",
                  eventName: "fast_rise_module_brow",
                  exposure: {
                    selector: ".t0-strategy-block--riseFast",
                    context: i,
                  },
                }),
                e.StockBridge.mtaReport({
                  busi: "hq",
                  eventName: "fast_rise_module_small_i_brow",
                  exposure: {
                    selector:
                      ".t0-strategy-block--riseFast .t0-strategy-block__i-icon",
                    context: i,
                  },
                }))
              : "volatile" === r.strategy
              ? (e.StockBridge.mtaReport({
                  busi: "hq",
                  eventName: "volatility_large_module_brow",
                  exposure: {
                    selector: ".t0-strategy-block--volatile",
                    context: i,
                  },
                }),
                e.StockBridge.mtaReport({
                  busi: "hq",
                  eventName: "volatility_large_module_small_i_brow",
                  exposure: {
                    selector:
                      ".t0-strategy-block--volatile .t0-strategy-block__i-icon",
                    context: i,
                  },
                }))
              : "premium" === r.strategy &&
                (e.StockBridge.mtaReport({
                  busi: "hq",
                  eventName: "yield_spread_regression_module_brow",
                  exposure: {
                    selector: ".t0-strategy-block--premium",
                    context: i,
                  },
                }),
                e.StockBridge.mtaReport({
                  busi: "hq",
                  eventName: "yield_curve_regression_module_i_brow",
                  exposure: {
                    selector:
                      ".t0-strategy-block--premium .t0-strategy-block__i-icon",
                    context: i,
                  },
                }));
          } catch (e) {}
        }),
        {
          strategyLabel: s,
          defaultEmptyText: l,
          onMethodOpen: function () {
            try {
              "riseFast" === r.strategy
                ? e.StockBridge.mtaReport({
                    busi: "hq",
                    eventName: "fast_rise_module_small_i_click",
                  })
                : "volatile" === r.strategy
                ? e.StockBridge.mtaReport({
                    busi: "hq",
                    eventName: "volatility_large_module_i_click",
                  })
                : "premium" === r.strategy &&
                  e.StockBridge.mtaReport({
                    busi: "hq",
                    eventName: "yield_spread_regression_module_i_click",
                  });
            } catch (e) {}
            n("method:open", { strategy: r.strategy });
          },
        }
      );
    },
  });
Array ||
  (
    e.resolveComponent("t0-premium-card") + e.resolveComponent("t0-fund-card")
  )();
var o = e._export_sfc(r, [
  [
    "render",
    function (t, r, o, n, a, i) {
      return e.e(
        {
          a: e.t(t.strategyLabel),
          b: e.o(function () {
            return t.onMethodOpen && t.onMethodOpen.apply(t, arguments);
          }, 3163),
          c: e.t(t.subtitle),
          d: e.o(function () {
            return t.onMethodOpen && t.onMethodOpen.apply(t, arguments);
          }, 3164),
          e: !t.isEmpty,
        },
        t.isEmpty
          ? { j: e.t(t.emptyText || t.defaultEmptyText) }
          : e.e(
              { f: "premium" === t.strategy },
              "premium" === t.strategy
                ? {
                    g: e.o(function (e) {
                      return t.$emit("premium:explain", e);
                    }, 3165),
                    h: e.p({ list: t.list }),
                  }
                : {
                    i: e.f(t.list, function (r, o, n) {
                      return e.e(
                        {
                          a: e.o(
                            function (e) {
                              return t.$emit("fund:buy", e);
                            },
                            3166,
                            "fund-".concat(o)
                          ),
                          b: "b7a2e3ef-1-" + n,
                          c: e.p({
                            fund: r,
                            strategy: t.strategy,
                            "show-premium-explain": !1,
                            "channel-id": t.channelId,
                            "is-channel-id-ready": t.isChannelIdReady,
                          }),
                          d: o < t.list.length - 1,
                        },
                        (t.list.length, {}),
                        { e: "fund-".concat(o) }
                      );
                    }),
                  }
            ),
        { k: e.n("t0-strategy-block--".concat(t.strategy)) }
      );
    },
  ],
  ["__scopeId", "data-v-b7a2e3ef"],
]);
wx.createComponent(o);
