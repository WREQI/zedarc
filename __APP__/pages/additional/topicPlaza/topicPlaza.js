var o = require("../../../common/vendor.js");
Array ||
  (
    o.resolveComponent("mp-privacy-dialog") +
    o.resolveComponent("stock-privacy-dialog") +
    o.resolveComponent("zxg-webview")
  )();
var e = o._export_sfc(
  {
    components: {
      zxgWebview: function () {
        return "../../../components/webView.js";
      },
    },
    data: function () {
      return { url: "" };
    },
    onLoad: function () {
      this.url =
        "https://wzq.tenpay.com/mp/v2/index.html#/topicPlaza/topicPlaza?from=miniapp";
    },
  },
  [
    [
      "render",
      function (e, n, r, t, i, a) {
        return {
          a: e.rootFontSize,
          b: o.p({ "no-auto": !0 }),
          c: o.p({ src: i.url }),
          d: o.n("black" == e.skin ? "skin-black" : "skin-white"),
        };
      },
    ],
  ]
);
wx.createPage(e);
