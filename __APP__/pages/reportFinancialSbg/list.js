var e = require("../../common/vendor.js"),
  t = {
    components: {
      AIFinancialReportList: function () {
        return "./@tencent/stock-ai-financial-report/pages/AIFinancialReportList.js";
      },
    },
    provide: function () {
      return { hqBridge: new e.HQBridge() };
    },
    methods: {
      onReachBottom: function () {
        this.$refs.reportList && this.$refs.reportList.requestFinancialList();
      },
    },
  };
Array || e.resolveComponent("AIFinancialReportList")();
var r = e._export_sfc(t, [
  [
    "render",
    function (t, r, n, i, o, s) {
      return { a: e.sr("reportList", "84407353-0") };
    },
  ],
  ["__scopeId", "data-v-84407353"],
]);
wx.createComponent(r);
