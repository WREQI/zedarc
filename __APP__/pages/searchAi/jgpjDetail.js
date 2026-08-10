require("../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../common/vendor.js"),
  r = getApp().globalData,
  n = {
    components: {
      Detail: function () {
        return "../detailSbg/@tencent/wzq-detail-subpage/brief-pages/jgpjDetail.js";
      },
    },
    provide: function () {
      return { hqBridge: new e.HQBridge() };
    },
    data: function () {
      var n = r.skin || e.StockBridge.getStorage("user/skin");
      return {
        symbol: null,
        skin: ["black", "dark"].includes(n) ? "black" : "white",
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
var o = e._export_sfc(n, [
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
wx.createPage(o);
