var o = require("../../../common/vendor.js");
Array ||
  (
    o.resolveComponent("mp-privacy-dialog") +
    o.resolveComponent("stock-privacy-dialog")
  )();
var e = o._export_sfc({ components: {} }, [
  [
    "render",
    function (e, r, n, t, a, c) {
      return { a: e.rootFontSize, b: o.p({ "no-auto": !0 }) };
    },
  ],
]);
wx.createPage(e);
