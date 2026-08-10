var o = require("../../common/vendor.js");
Array ||
  (
    o.resolveComponent("mp-privacy-dialog") +
    o.resolveComponent("stock-privacy-dialog") +
    o.resolveComponent("zxg-webview")
  )();
var n = o._export_sfc(
  {
    components: {
      zxgWebview: function () {
        return "../../components/webView.js";
      },
    },
    data: function () {
      return { url: "" };
    },
    onLoad: function (o) {
      if (o) {
        var n = o.topicId || "";
        this.url =
          "https://wzq.tenpay.com/mp/v2/index.html#/topic/topic?topicId=".concat(
            n,
            "&from=miniapp"
          );
      }
    },
  },
  [
    [
      "render",
      function (n, e, t, r, i, c) {
        return {
          a: n.rootFontSize,
          b: o.p({ "no-auto": !0 }),
          c: o.p({ src: i.url }),
          d: o.n("black" == n.skin ? "skin-black" : "skin-white"),
        };
      },
    ],
  ]
);
wx.createPage(n);
