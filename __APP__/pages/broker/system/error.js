var r = require("../../../common/vendor.js");
Array ||
  (
    r.resolveComponent("mp-privacy-dialog") +
    r.resolveComponent("stock-privacy-dialog") +
    r.resolveComponent("Error")
  )();
var o = r._export_sfc(
  {
    components: {
      Error: function () {
        return "./components/error.js";
      },
    },
  },
  [
    [
      "render",
      function (o, e, n, t, a, c) {
        return { a: o.rootFontSize, b: r.p({ "no-auto": !0 }) };
      },
    ],
  ]
);
wx.createPage(o);
