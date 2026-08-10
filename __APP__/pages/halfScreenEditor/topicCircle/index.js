var o = require("../../../common/vendor.js"),
  n = {
    components: {
      TopicCircle: function () {
        return "../@tencent/stock-halfscreen-editor/pages/topic-circle/index.js";
      },
    },
    provide: function () {
      return { stockBridge: o.StockBridge };
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
    o.resolveComponent("mp-privacy-dialog") + o.resolveComponent("TopicCircle")
  )();
var e = o._export_sfc(n, [
  [
    "render",
    function (o, n, e, r, t, c) {
      return { a: o.rootFontSize };
    },
  ],
]);
wx.createPage(e);
