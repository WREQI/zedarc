var e = require("../../common/vendor.js"),
  o = {
    components: {
      SharePage: function () {
        return "./@tencent/stock-search-ai/pages/SharePage.js";
      },
    },
    provide: function () {
      return { hqBridge: new e.HQBridge(this) };
    },
    data: function () {
      return { shareCode: "" };
    },
    onLoad: function (e) {
      this.shareCode = e.shareCode;
    },
  };
Array ||
  (
    e.resolveComponent("mp-privacy-dialog") +
    e.resolveComponent("stock-privacy-dialog") +
    e.resolveComponent("SharePage")
  )();
var r = e._export_sfc(o, [
  [
    "render",
    function (o, r, a, n, t, s) {
      return e.e(
        { a: o.rootFontSize, b: e.p({ "no-auto": !0 }), c: t.shareCode },
        t.shareCode ? { d: e.p({ "share-code": t.shareCode }) } : {}
      );
    },
  ],
  ["__scopeId", "data-v-689a9206"],
]);
wx.createPage(r);
