var e = require("../../../common/vendor.js"),
  r = {
    components: {
      AIFinancialReportSearchList: function () {
        return "../../reportFinancialSbg/search.js";
      },
    },
    onPageScroll: getApp().globalData.throttle(16, function (e) {
      try {
        this.$refs.searchList && this.$refs.searchList.handleScroll(e);
      } catch (e) {}
    }),
    onShow: function () {
      e.StockBridge.report("news.aifinancialreport.search.brow");
    },
    onShareAppMessage: function () {
      return {
        title: "【财报速递】您的财报小助手",
        path: "/pages/report/AIFinancial/search?from=share",
      };
    },
    onShareTimeline: function () {
      return {
        title: "【财报速递】您的财报小助手",
        query: "pageType=search&from=share",
      };
    },
  };
Array ||
  (
    e.resolveComponent("mp-privacy-dialog") +
    e.resolveComponent("stock-privacy-dialog") +
    e.resolveComponent("AIFinancialReportSearchList")
  )();
var o = e._export_sfc(r, [
  [
    "render",
    function (r, o, t, a, n, i) {
      return {
        a: r.rootFontSize,
        b: e.p({ "no-auto": !0 }),
        c: e.sr("searchList", "60647581-2"),
      };
    },
  ],
  ["__scopeId", "data-v-60647581"],
]);
(r.__runtimeHooks = 7), wx.createPage(o);
