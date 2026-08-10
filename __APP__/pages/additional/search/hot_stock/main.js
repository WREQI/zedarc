var e = require("../../../../common/vendor.js"),
  t = {
    components: {
      mainIndex: function () {
        return "../../@tencent/wzq-search-page/pages/hot-rank/mp/index.js".then(
          function (e) {
            return e.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3d6cS1zZWFyY2gtcGFnZS9wYWdlcy9ob3QtcmFuay9tcC9pbmRleC52dWU;
          }
        );
      },
      task: function () {
        return "../../../asyncCom/@tencent/st-act-task/components/task/index.js".then(
          function (e) {
            return e.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0LWFjdC10YXNrL2NvbXBvbmVudHMvdGFzay9pbmRleC52dWU;
          }
        );
      },
    },
    provide: function () {
      return {
        hqBridge: this.hqBridge,
        stockBridge: e.StockBridge,
        didAgreeUserAgreement: e.Vue.observable({ value: !0 }),
        onCheckUserAgreementStatus: null,
      };
    },
    onShareAppMessage: function () {
      return {
        title: "一起看热榜，投资更有数",
        path: "/pages/additional/search/hot_stock/main",
      };
    },
    onLoad: function (e) {
      this.queryData = e;
    },
    data: function () {
      return { tabCeiling: !1, queryData: null, hqBridge: new e.HQBridge() };
    },
    onShow: function () {
      var e = this;
      this.$nextTick(function () {
        var t, n, r;
        null ==
          (r =
            null == (n = null == (t = e.$refs) ? void 0 : t.main)
              ? void 0
              : n.updateUserStock) || r.call(n);
      });
    },
  };
Array ||
  (
    e.resolveComponent("mp-privacy-dialog") +
    e.resolveComponent("stock-privacy-dialog") +
    e.resolveComponent("mainIndex") +
    e.resolveComponent("task")
  )();
var n = e._export_sfc(t, [
  [
    "render",
    function (t, n, r, a, o, i) {
      return e.e(
        { a: t.rootFontSize, b: e.p({ "no-auto": !0 }), c: o.queryData },
        o.queryData
          ? {
              d: e.sr("main", "26eaee99-2"),
              e: e.p({ "query-data": o.queryData }),
            }
          : {}
      );
    },
  ],
  ["__scopeId", "data-v-26eaee99"],
]);
(t.__runtimeHooks = 2), wx.createPage(n);
