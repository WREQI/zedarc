var e = require("../../common/vendor.js"),
  n = {
    name: "NewsColumnEdit",
    components: {
      NewsColumnItemEdit: function () {
        return "./@tencent/stock-news-column-edit-new/pages/mp.js";
      },
    },
    data: function () {
      return { skin: e.wx$1.getStorageSync("user/skin") };
    },
  };
Array ||
  (
    e.resolveComponent("mp-privacy-dialog") +
    e.resolveComponent("stock-privacy-dialog") +
    e.resolveComponent("NewsColumnItemEdit")
  )();
var o = e._export_sfc(n, [
  [
    "render",
    function (n, o, t, r, s, i) {
      return { a: n.rootFontSize, b: e.p({ "no-auto": !0 }), c: s.skin };
    },
  ],
]);
wx.createPage(o);
