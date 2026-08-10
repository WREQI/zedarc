require("../../@babel/runtime/helpers/Arrayincludes");
var e = require("../../common/vendor.js"),
  r = {
    components: {
      AccountHistory: function () {
        return "../account/@tencent/st-browsing-history/page/mp.js";
      },
    },
    setup: function () {
      return {
        skin: e.ref(
          ["black", "dark"].includes(e.StockBridge.getStorage("user/skin"))
            ? "dark"
            : "light"
        ),
      };
    },
    onPageShow: function () {
      this.skin = ["black", "dark"].includes(
        e.StockBridge.getStorage("user/skin")
      )
        ? "dark"
        : "light";
    },
  };
Array ||
  (
    e.resolveComponent("mp-privacy-dialog") +
    e.resolveComponent("stock-privacy-dialog") +
    e.resolveComponent("account-history")
  )();
var n = e._export_sfc(r, [
  [
    "render",
    function (e, r, n, o, t, i) {
      return { a: e.rootFontSize, b: o.skin };
    },
  ],
  ["__scopeId", "data-v-f919c1f9"],
]);
wx.createPage(n);
