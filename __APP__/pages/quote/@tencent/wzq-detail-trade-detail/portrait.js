var e = require("../../../../common/vendor.js"),
  t = require("../stock-hq-data/index.js"),
  a = [
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
    props: ["market", "scode", "quote", "chartHeight", "hkVIP"],
    data: function () {
      return { sideTabs: a, sideTabKey: a[0].key, hideFiveTab: !1 };
    },
    computed: {
      showSideTabs: function () {
        return !t.utils.isNQMarket(this.market) && this.sideTabs.length > 1;
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
      hkVIP: {
        handler: function (e, a) {
          t.utils.isHKMarket(this.market) &&
            !a &&
            e &&
            (this.sideTabs[0].value = "十档");
        },
        immediate: !0,
      },
    },
    created: function () {
      (this.symbol = t.utils.getSymbol(this.market, this.scode)),
        t.utils.isFutures(this.market) &&
          ((this.sideTabKey = "tradeDetail"),
          (this.sideTabs = this.sideTabs.filter(function (e) {
            return "handicap" !== e.key;
          }))),
        t.utils.isHKMarket(this.market) && this.hkVIP
          ? (this.sideTabs[0].value = "十档")
          : (this.sideTabs[0].value = "五档");
    },
    mounted: function () {
      e.StockBridge.report("hq.stock_detail.handicap.tab_brow", {
        stockid: this.symbol,
      });
    },
    methods: {
      changeRefreshStatus: function (e) {
        this.$emit("changeRefreshStatus", e);
      },
      handleTabChange: function (t) {
        t &&
          ((this.sideTabKey = t),
          e.StockBridge.report("hq.stock_detail.tab_click.".concat(t), {
            stockid: this.symbol,
          }),
          this.hkVIP &&
            ("handicap" === this.sideTabKey &&
              e.StockBridge.report("hq.hk_detail.pankou_tab_click", {
                stockid: this.symbol,
              }),
            "tradeDetail" === this.sideTabKey &&
              e.StockBridge.report("hq.hk_detail.mingxi_tab_click", {
                stockid: this.symbol,
              })));
      },
    },
  };
Array ||
  (
    e.resolveComponent("Handicap") +
    e.resolveComponent("TradeListHkLv2") +
    e.resolveComponent("trade-list")
  )();
var s = e._export_sfc(i, [
  [
    "render",
    function (t, a, i, s, o, r) {
      return e.e(
        { a: "handicap" === o.sideTabKey },
        "handicap" === o.sideTabKey
          ? {
              b: e.o(r.changeRefreshStatus, 6058),
              c: e.p({
                market: i.market,
                scode: i.scode,
                "hk-v-i-p": i.hkVIP,
                quote: i.quote,
              }),
            }
          : {},
        { d: "tradeDetail" === o.sideTabKey && i.hkVIP },
        "tradeDetail" === o.sideTabKey && i.hkVIP
          ? { e: e.p({ scode: i.scode, market: i.market, quote: i.quote }) }
          : {},
        { f: "tradeDetail" === o.sideTabKey && !i.hkVIP },
        "tradeDetail" !== o.sideTabKey || i.hkVIP
          ? {}
          : {
              g: e.p({
                market: i.market,
                scode: i.scode,
                quote: i.quote,
                "chart-height": i.chartHeight - (r.showSideTabs ? 45 : 0),
              }),
            },
        { h: e.n(r.showSideTabs ? "" : "no-tab-bar"), i: r.showSideTabs },
        r.showSideTabs
          ? {
              j: e.f(o.sideTabs, function (t, a, i) {
                return {
                  a: e.t(t.value),
                  b: t.key,
                  c: o.sideTabKey === t.key ? 1 : "",
                  d: e.o(
                    function (e) {
                      return r.handleTabChange(t.key);
                    },
                    6059,
                    t.key
                  ),
                };
              }),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-85aaf8ae"],
]);
wx.createComponent(s);
