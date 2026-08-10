var e = require("../../../common/vendor.js"),
  r = {
    components: {
      SearchSelect: function () {
        return "../@tencent/stock-search-select/Index.js".then(function (e) {
          return e.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0b2NrLXNlYXJjaC1zZWxlY3QvSW5kZXgudnVl;
        });
      },
    },
    provide: function () {
      return { hqBridge: this.hqBridge, stockBridge: this.stockBridge };
    },
    onLoad: function (e) {
      this.queryData = e;
    },
    data: function () {
      return {
        hqBridge: new e.HQBridge(),
        queryData: null,
        stockBridge: e.StockBridge,
        skin: e.wx$1.getStorageSync("user/skin") || "white",
      };
    },
  };
Array ||
  (
    e.resolveComponent("mp-privacy-dialog") +
    e.resolveComponent("stock-privacy-dialog") +
    e.resolveComponent("search-select")
  )();
var t = e._export_sfc(r, [
  [
    "render",
    function (r, t, n, o, a, i) {
      return e.e(
        { a: r.rootFontSize, b: e.p({ "no-auto": !0 }), c: a.queryData },
        a.queryData
          ? {
              d: e.sr("main", "de7e103b-2"),
              e: e.p({ "query-data": a.queryData, skin: a.skin }),
            }
          : {},
        { f: a.skin }
      );
    },
  ],
  ["__scopeId", "data-v-de7e103b"],
]);
wx.createPage(t);
