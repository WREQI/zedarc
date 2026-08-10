var e = require("../../common/vendor.js"),
  t = {
    components: {
      Detail: function () {
        return "./@tencent/wzq-detail-subpage/brief-pages/fhspDetail.js";
      },
    },
    provide: function () {
      return { hqBridge: new e.HQBridge() };
    },
    data: function () {
      return { symbol: null, dataType: "GP" };
    },
    onLoad: function (t) {
      (this.symbol = t.symbol),
        t.dataType && (this.dataType = t.dataType),
        e.wx$1.setNavigationBarTitle({
          title: "GP" === this.dataType ? "分红送配" : "基金分红",
        });
    },
  };
Array ||
  (
    e.resolveComponent("mp-privacy-dialog") +
    e.resolveComponent("stock-privacy-dialog") +
    e.resolveComponent("Detail")
  )();
var o = e._export_sfc(t, [
  [
    "render",
    function (t, o, a, n, r, i) {
      return e.e(
        { a: t.rootFontSize, b: r.symbol },
        r.symbol
          ? {
              c: e.p({ "no-auto": !0 }),
              d: e.p({ symbol: r.symbol, dataType: r.dataType }),
            }
          : {}
      );
    },
  ],
]);
wx.createPage(o);
