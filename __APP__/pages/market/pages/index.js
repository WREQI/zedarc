var e = require("../../../common/vendor.js");
Array ||
  (e.resolveComponent("HqPage") + e.resolveComponent("stock-privacy-dialog"))();
var o = e._export_sfc(
  {
    components: {
      HqPage: function () {
        return "../components/hqPage.js";
      },
    },
  },
  [
    [
      "render",
      function (o, r, n, t, a, c) {
        return { a: o.rootFontSize, b: e.p({ "no-auto": !0 }) };
      },
    ],
  ]
);
wx.createPage(o);
