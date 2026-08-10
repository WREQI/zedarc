var o = require("../../common/vendor.js");
Array ||
  (
    o.resolveComponent("mp-privacy-dialog") +
    o.resolveComponent("stock-privacy-dialog") +
    o.resolveComponent("NoAccountPage")
  )();
var e = o._export_sfc(
  {
    components: {
      NoAccountPage: function () {
        return "./components/index.js";
      },
    },
  },
  [
    [
      "render",
      function (e, n, r, t, c, a) {
        return { a: e.rootFontSize, b: o.p({ "no-auto": !0 }) };
      },
    ],
  ]
);
wx.createPage(e);
