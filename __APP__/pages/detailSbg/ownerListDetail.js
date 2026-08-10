var e = require("../../common/vendor.js"),
  o = {
    components: {
      Detail: function () {
        return "./@tencent/wzq-detail-subpage/brief-pages/etf/OwnerListDetail.js";
      },
    },
    provide: function () {
      return { hqBridge: new e.HQBridge() };
    },
    data: function () {
      return { symbol: null };
    },
    onLoad: function (e) {
      this.symbol = e.symbol;
    },
  };
Array ||
  (
    e.resolveComponent("mp-privacy-dialog") +
    e.resolveComponent("stock-privacy-dialog") +
    e.resolveComponent("Detail")
  )();
var n = e._export_sfc(o, [
  [
    "render",
    function (o, n, r, t, i, s) {
      return e.e(
        { a: o.rootFontSize, b: i.symbol },
        i.symbol
          ? { c: e.p({ "no-auto": !0 }), d: e.p({ symbol: i.symbol }) }
          : {}
      );
    },
  ],
]);
wx.createPage(n);
