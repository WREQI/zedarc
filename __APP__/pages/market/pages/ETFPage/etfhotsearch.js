var e = require("../../../../common/vendor.js"),
  o = require("../../@tencent/stock-base/bridge/mpwzq.js"),
  t = {
    name: "HotTopicSearchRoutePage",
    components: {
      HotTopicSearchPage: function () {
        return "../../../marketSbg/@tencent/stock-hq-etf/hotTopicPages/SearchPage.js";
      },
    },
    provide: function () {
      return { stockBridge: o.StockBridge, stockRouter: e.StockRouter };
    },
  };
Array ||
  (
    e.resolveComponent("hot-topic-search-page") +
    e.resolveComponent("mp-privacy-dialog") +
    e.resolveComponent("stock-privacy-dialog")
  )();
var r = e._export_sfc(t, [
  [
    "render",
    function (o, t, r, c, n, a) {
      return { a: o.rootFontSize, b: e.p({ "no-auto": !0 }) };
    },
  ],
]);
wx.createPage(r);
