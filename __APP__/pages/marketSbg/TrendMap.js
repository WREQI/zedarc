var e = require("../../common/vendor.js");
Array ||
  (
    e.resolveComponent("mp-privacy-dialog") +
    e.resolveComponent("stock-privacy-dialog") +
    e.resolveComponent("TrendMap")
  )();
var o = e._export_sfc(
  {
    components: {
      TrendMap: function () {
        return "./@tencent/stock-hq-sbg/components/TrendMap.js";
      },
    },
  },
  [
    [
      "render",
      function (o, n, r, t, a, c) {
        return { a: o.rootFontSize, b: e.p({ "no-auto": !0 }) };
      },
    ],
  ]
);
wx.createPage(o);
