var e = require("../@tencent/stock-hq-data/index.js"),
  t = require("../../../common/vendor.js"),
  o = {
    components: {
      Cbzy: function () {
        return "../@tencent/wzq-detail-subpage/finance-pages/pages/mp/Cbzy.js".then(
          function (e) {
            return e.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3d6cS1kZXRhaWwtc3VicGFnZS9maW5hbmNlLXBhZ2VzL3BhZ2VzL21wL0NienkudnVl;
          }
        );
      },
    },
    data: function () {
      return { symbol: "", stockName: "" };
    },
    onLoad: function (t) {
      var o = t.market,
        n = t.scode,
        a = t.stockName;
      (this.symbol = e.utils.getSymbol(o, n)), (this.stockName = a);
    },
  };
Array ||
  (
    t.resolveComponent("mp-privacy-dialog") +
    t.resolveComponent("stock-privacy-dialog") +
    t.resolveComponent("Cbzy")
  )();
var n = t._export_sfc(o, [
  [
    "render",
    function (e, o, n, a, r, s) {
      return {
        a: e.rootFontSize,
        b: t.p({ "no-auto": !0 }),
        c: t.p({ symbol: r.symbol, stockName: r.stockName }),
      };
    },
  ],
]);
wx.createPage(n);
