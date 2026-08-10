var e = require("../../common/vendor.js");
Array ||
  (
    e.resolveComponent("mp-privacy-dialog") +
    e.resolveComponent("stock-privacy-dialog")
  )();
var o = e._export_sfc({ name: "VideoIndex" }, [
  [
    "render",
    function (o, r, n, a, t, i) {
      return { a: o.rootFontSize, b: e.p({ "no-auto": !0 }) };
    },
  ],
]);
wx.createPage(o);
