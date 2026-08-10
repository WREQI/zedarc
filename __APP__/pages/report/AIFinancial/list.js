var e = require("../../../common/vendor.js"),
  o = {
    components: {
      AIFinancialReportList: function () {
        return "../../reportFinancialSbg/list.js";
      },
    },
    onReachBottom: function () {
      this.$refs.reportList && this.$refs.reportList.onReachBottom();
    },
    onShow: function () {
      e.StockBridge.report("news.aifinancialreport.list.brow");
    },
    onShareAppMessage: function () {
      return {
        title: "【财报速递】您的财报小助手",
        path: "/pages/report/AIFinancial/list?from=share",
      };
    },
    onShareTimeline: function () {
      return {
        title: "【财报速递】您的财报小助手",
        query: "pageType=list&from=share",
      };
    },
  };
Array ||
  (
    e.resolveComponent("mp-privacy-dialog") +
    e.resolveComponent("stock-privacy-dialog") +
    e.resolveComponent("AIFinancialReportList")
  )();
var r = e._export_sfc(o, [
  [
    "render",
    function (o, r, t, n, i, a) {
      return {
        a: o.rootFontSize,
        b: e.p({ "no-auto": !0 }),
        c: e.sr("reportList", "6e484b4b-2"),
      };
    },
  ],
  ["__scopeId", "data-v-6e484b4b"],
]);
(o.__runtimeHooks = 6), wx.createPage(r);
