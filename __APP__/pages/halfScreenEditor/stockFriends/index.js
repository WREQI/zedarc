var n = require("../../../common/vendor.js"),
  o = {
    components: {
      StockFriends: function () {
        return "../@tencent/stock-halfscreen-editor/pages/stock-friends/index.js";
      },
    },
    provide: function () {
      return { stockBridge: n.StockBridge };
    },
    data: function () {
      return {};
    },
    onLoad: function () {},
    onShow: function () {},
    onHide: function () {},
    onUnload: function () {},
    methods: {},
  };
Array ||
  (
    n.resolveComponent("mp-privacy-dialog") + n.resolveComponent("StockFriends")
  )();
var e = n._export_sfc(o, [
  [
    "render",
    function (n, o, e, r, t, c) {
      return { a: n.rootFontSize };
    },
  ],
]);
wx.createPage(e);
