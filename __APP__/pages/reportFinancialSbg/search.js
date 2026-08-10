var e = require("../../common/vendor.js"),
  r = {
    components: {
      AIFinancialReportSearchList: function () {
        return "./@tencent/stock-ai-financial-report/pages/AIFinancialReportSearchList.js";
      },
    },
    provide: function () {
      return { hqBridge: new e.HQBridge() };
    },
    methods: {
      cancelClick: function () {
        e.wx$1.navigateBack();
      },
      handleScroll: function () {
        this.$refs &&
          this.$refs.searchList &&
          this.$refs.searchList.handleScroll();
      },
    },
  };
Array || e.resolveComponent("AIFinancialReportSearchList")();
var n = e._export_sfc(r, [
  [
    "render",
    function (r, n, c, t, a, i) {
      return {
        a: e.sr("searchList", "8e0edc3a-0"),
        b: e.o(i.cancelClick, 944),
      };
    },
  ],
  ["__scopeId", "data-v-8e0edc3a"],
]);
wx.createComponent(n);
