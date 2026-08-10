var o = require("../../common/vendor.js"),
  e = {
    components: {
      NoaccountView: function () {
        return "../noaccount/components/index.js";
      },
    },
    setup: function () {
      return o.wx$1.hideShareMenu(), {};
    },
  };
Array ||
  (
    o.resolveComponent("mp-privacy-dialog") +
    o.resolveComponent("stock-privacy-dialog") +
    o.resolveComponent("noaccount-view")
  )();
var n = o._export_sfc(e, [
  [
    "render",
    function (e, n, r, t, c, a) {
      return { a: e.rootFontSize, b: o.p({ "no-auto": !0 }) };
    },
  ],
  ["__scopeId", "data-v-cc91a4a1"],
]);
wx.createPage(n);
