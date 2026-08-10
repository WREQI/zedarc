var e = require("../../../../../common/vendor.js"),
  t = require("../utils/common.js"),
  r = require("../../stock-hq-data/index.js"),
  i = e.defineComponent({
    name: "T0StrategyItem",
    components: {
      StMiniMins: function () {
        return "../../../../asyncCom/@tencent/st-mini-mins/src/index.js";
      },
      FundTags: function () {
        return "./FundTags.js";
      },
    },
    props: {
      item: { type: Object, required: !0 },
      index: { type: Number, default: 1 },
    },
    setup: function (i) {
      var n = e.computed(function () {
          var e = t.getRatioClass(parseFloat(i.item.fund.zdf));
          return "rise" === e
            ? "bg-rise"
            : "drop" === e
            ? "bg-drop"
            : "bg-peace";
        }),
        s = e.computed(function () {
          return "premium" === i.item.strategy;
        }),
        o = e.computed(function () {
          if (!s.value) return "";
          var e = parseFloat(String(i.item.percentile));
          return Number.isNaN(e) ? "" : String(Math.round(100 - e));
        });
      return {
        zdfStyle: n,
        isPremiumStrategy: s,
        reversePercentile: o,
        handleClick: function () {
          try {
            var t = i.item.fund.code || "",
              n = {
                column_id: "etf_real_time_trade",
                item_type: "banner_desc",
                banner_desc: encodeURIComponent("ETF_T+0交易"),
                stockid: t,
                attribute_type: "stockid",
              };
            "riseFast" === i.item.strategy
              ? e.StockBridge.report(
                  "hq.etf-page.t_entry_fast_rise_target_click",
                  n
                )
              : "volatile" === i.item.strategy &&
                e.StockBridge.report(
                  "hq.etf-page.t_entry_volatility_asset_click",
                  n
                );
          } catch (e) {}
          var s = r.utils.splitSymbol(i.item.fund.code),
            o = s.scode,
            m = s.market;
          o &&
            e.StockRouter.routeTo({
              name: "stockdetail",
              query: { scode: o, market: m },
            });
        },
      };
    },
  });
Array ||
  (e.resolveComponent("st-mini-mins") + e.resolveComponent("fund-tags"))();
var n = e._export_sfc(i, [
  [
    "render",
    function (t, r, i, n, s, o) {
      return e.e(
        { a: !t.item.isEmpty },
        t.item.isEmpty
          ? { l: e.t(t.item.emptyText) }
          : e.e(
              { b: t.item.fund.symbol },
              t.item.fund.symbol
                ? {
                    c: e.p({
                      "choose-symbol": t.item.fund.symbol,
                      "rise-drop-val": t.item.fund.zdf,
                      "rise-drop-style": t.zdfStyle,
                      width: 40,
                      height: 40,
                    }),
                  }
                : {},
              {
                d: e.t(t.item.fund.name),
                e: e.p({ tags: t.item.tags }),
                f: t.isPremiumStrategy && "" !== t.reversePercentile,
              },
              t.isPremiumStrategy && "" !== t.reversePercentile
                ? { g: e.t(t.reversePercentile) }
                : { h: e.t(t.item.metricValue), i: e.n(t.item.metricClass) },
              {
                j: e.t(t.item.metricLabel),
                k: e.o(function () {
                  return t.handleClick && t.handleClick.apply(t, arguments);
                }, 4362),
              }
            )
      );
    },
  ],
  ["__scopeId", "data-v-012bf9c9"],
]);
wx.createComponent(n);
