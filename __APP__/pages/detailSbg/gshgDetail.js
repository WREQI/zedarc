var e = require("../../common/vendor.js"),
  n = {
    components: {
      Detail: function () {
        return "./@tencent/wzq-detail-subpage/brief-pages/pages/GshgDetail.js".then(
          function (e) {
            return e.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3d6cS1kZXRhaWwtc3VicGFnZS9icmllZi1wYWdlcy9wYWdlcy9Hc2hnRGV0YWlsLnZ1ZQ;
          }
        );
      },
    },
    provide: function () {
      return { hqBridge: new e.HQBridge(this) };
    },
    data: function () {
      return { symbol: "" };
    },
    onLoad: function (e) {
      this.symbol = e.symbol;
    },
    onPageScroll: function (e) {
      var n;
      null == (n = this.$refs.detail) || n.handlePageScroll(e);
    },
  };
Array ||
  (
    e.resolveComponent("mp-privacy-dialog") +
    e.resolveComponent("stock-privacy-dialog") +
    e.resolveComponent("detail")
  )();
var o = e._export_sfc(n, [
  [
    "render",
    function (n, o, t, r, a, i) {
      return {
        a: n.rootFontSize,
        b: e.p({ "no-auto": !0 }),
        c: e.sr("detail", "a3cb3488-2"),
        d: e.p({ symbol: a.symbol }),
      };
    },
  ],
  ["__scopeId", "data-v-a3cb3488"],
]);
(n.__runtimeHooks = 1), wx.createPage(o);
