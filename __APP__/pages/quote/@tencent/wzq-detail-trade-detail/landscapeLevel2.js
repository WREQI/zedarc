var e = require("../stock-hq-data/index.js"),
  t = require("../../../../common/vendor.js"),
  s = [
    { key: "handicap", value: "五档" },
    { key: "tradeDetail", value: "明细" },
  ],
  i = {
    components: {
      Handicap: function () {
        return "./components/Handicap.js";
      },
      TradeList: function () {
        return "./components/TradeList.js";
      },
      TradeListHkLv2: function () {
        return "./components/TradeListHkLv2.js";
      },
    },
    inject: ["hqBridge"],
    props: ["market", "scode", "quote", "chartHeight", "hkVIP"],
    data: function () {
      return { sideTabs: s, sideTabKey: s[0].key, hideFiveTab: !1 };
    },
    computed: {
      showSideTabs: function () {
        return !e.utils.isNQMarket(this.market) && this.sideTabs.length > 1;
      },
      stockType: function () {
        var e, t;
        return (
          (null == (t = null == (e = this.quote) ? void 0 : e.secuInfo)
            ? void 0
            : t.stocktype) || ""
        );
      },
    },
    watch: {
      hkVIP: function (t, s) {
        e.utils.isHKMarket(this.market) &&
          !s &&
          t &&
          (this.sideTabs[0].value = "十档");
      },
    },
    created: function () {
      (e.utils.isBJMarket(this.market) ||
        e.utils.isNQMarket(this.market) ||
        e.utils.isFutures(this.market)) &&
        (this.sideTabs = this.sideTabs.slice(0, 2)),
        (this.symbol = e.utils.getSymbol(this.market, this.scode)),
        e.utils.isFutures(this.market) &&
          ((this.sideTabKey = "tradeDetail"),
          (this.sideTabs = this.sideTabs.filter(function (e) {
            return "handicap" !== e.key;
          }))),
        e.utils.isHKMarket(this.market) && this.hkVIP
          ? (this.sideTabs[0].value = "十档")
          : (this.sideTabs[0].value = "五档");
    },
    mounted: function () {
      this.hqBridge.report("hq.stock_detail.handicap.tab_brow", {
        stockid: this.symbol,
      });
    },
    methods: {
      handleTabChange: function (e) {
        e &&
          ((this.sideTabKey = e),
          this.hqBridge.report("hq.stock_detail.tab_click.".concat(e), {
            stockid: this.symbol,
          }));
      },
    },
  };
Array ||
  (
    t.resolveComponent("Handicap") +
    t.resolveComponent("TradeListHkLv2") +
    t.resolveComponent("trade-list")
  )();
var a = t._export_sfc(i, [
  [
    "render",
    function (e, s, i, a, r, o) {
      return t.e(
        {
          a: "handicap" === r.sideTabKey,
          b: t.p({
            market: i.market,
            scode: i.scode,
            "hk-v-i-p": i.hkVIP,
            quote: i.quote,
            landscape: !0,
          }),
          c: "tradeDetail" === r.sideTabKey && i.hkVIP,
        },
        "tradeDetail" === r.sideTabKey && i.hkVIP
          ? { d: t.p({ scode: i.scode, market: i.market, quote: i.quote }) }
          : {},
        { e: "tradeDetail" === r.sideTabKey && !i.hkVIP },
        "tradeDetail" !== r.sideTabKey || i.hkVIP
          ? {}
          : {
              f: t.p({
                market: i.market,
                scode: i.scode,
                quote: i.quote,
                "chart-height": i.chartHeight - (o.showSideTabs ? 45 : 0),
              }),
            },
        { g: t.n(o.showSideTabs ? "" : "no-tab-bar"), h: o.showSideTabs },
        o.showSideTabs
          ? {
              i: t.f(r.sideTabs, function (e, s, i) {
                return {
                  a: t.t(e.value),
                  b: e.key,
                  c: r.sideTabKey === e.key ? 1 : "",
                  d: t.o(
                    function (t) {
                      return o.handleTabChange(e.key);
                    },
                    6064,
                    e.key
                  ),
                };
              }),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-c8b99ca4"],
]);
wx.createComponent(a);
