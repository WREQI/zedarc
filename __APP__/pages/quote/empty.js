var o = require("../../common/vendor.js"),
  e = {
    props: ["useForPreload"],
    created: function () {},
    onShow: function () {
      this.useForPreload ||
        setTimeout(function () {
          o.wx$1.navigateBack();
        }, 300);
    },
  };
Array ||
  (
    o.resolveComponent("mp-privacy-dialog") +
    o.resolveComponent("stock-privacy-dialog")
  )();
var r = o._export_sfc(e, [
  [
    "render",
    function (e, r, n, t, a, i) {
      return { a: e.rootFontSize, b: o.p({ "no-auto": !0 }) };
    },
  ],
]);
wx.createPage(r);
