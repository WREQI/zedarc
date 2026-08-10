require("../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../common/vendor.js"),
  r = {
    components: {
      Detail: function () {
        return "./@tencent/wzq-detail-subpage/brief-pages/jgpjDetail.js";
      },
    },
    provide: function () {
      return { hqBridge: new e.HQBridge() };
    },
    data: function () {
      var r = getApp().globalData.skin || e.StockBridge.getStorage("user/skin");
      return {
        symbol: null,
        skin: ["black", "dark"].includes(r) ? "black" : "white",
      };
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
var n = e._export_sfc(r, [
  [
    "render",
    function (r, n, o, t, i, a) {
      return e.e(
        { a: r.rootFontSize, b: e.p({ "no-auto": !0 }), c: i.symbol },
        i.symbol ? { d: e.p({ symbol: i.symbol }) } : {},
        { e: i.skin, f: "black" === i.skin || "dark" === i.skin ? 1 : "" }
      );
    },
  ],
]);
wx.createPage(n);
