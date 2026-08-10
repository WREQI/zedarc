var o = require("../../common/vendor.js");
Array ||
  (
    o.resolveComponent("nav-bar") + o.resolveComponent("stock-privacy-dialog")
  )();
var n = o._export_sfc(
  {
    components: {
      NavBar: function () {
        return "../asyncCom/components/navBar/index.js";
      },
    },
  },
  [
    [
      "render",
      function (n, r, e, a, t, c) {
        return { a: n.rootFontSize, b: o.p({ "no-auto": !0 }) };
      },
    ],
  ]
);
wx.createPage(n);
