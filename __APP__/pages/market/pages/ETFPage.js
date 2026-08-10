var e = require("../../../common/vendor.js"),
  t = require("../@tencent/stock-base/bridge/mpwzq.js"),
  o = {
    components: {
      ETFMainPage: function () {
        return "../../marketSbg/@tencent/stock-hq-etf/ETFMainPage.js";
      },
    },
    provide: function () {
      return {
        hqBridge: this.hqBridge,
        stockBridge: t.StockBridge,
        stockRouter: e.StockRouter,
      };
    },
    data: function () {
      return { hqBridge: new e.HQBridge(), hasReport: !1 };
    },
    onPageScroll: function () {
      this.hasReport ||
        ((this.hasReport = !0), this.hqBridge.report("hq.etfpage.page_scroll"));
    },
    onPullDownRefresh: function () {
      this.$refs.etfPage && this.$refs.etfPage.tabActivated(),
        this.$nextTick(function () {
          e.wx$1.stopPullDownRefresh();
        });
    },
    onShow: function () {
      this.$refs.etfPage && this.$refs.etfPage.tabActivated();
    },
    onHide: function () {
      this.$refs.etfPage && this.$refs.etfPage.tabDeactivated();
    },
  };
Array ||
  (
    e.resolveComponent("mp-privacy-dialog") +
    e.resolveComponent("stock-privacy-dialog") +
    e.resolveComponent("ETFMainPage")
  )();
var r = e._export_sfc(o, [
  [
    "render",
    function (t, o, r, n, i, s) {
      return {
        a: t.rootFontSize,
        b: e.p({ "no-auto": !0 }),
        c: e.sr("etfPage", "73f91289-2"),
        d: e.p({
          "show-e-t-f-bar": !0,
          "show-e-t-f-bulletin": !1,
          "show-quick-entry": !0,
        }),
      };
    },
  ],
  ["__scopeId", "data-v-73f91289"],
]);
(o.__runtimeHooks = 1), wx.createPage(r);
