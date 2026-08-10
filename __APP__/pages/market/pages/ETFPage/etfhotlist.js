var o = require("../../../../common/vendor.js"),
  t = require("../../@tencent/stock-base/bridge/mpwzq.js"),
  e = {
    name: "HotTopicListRoutePage",
    components: {
      HotTopicListPage: function () {
        return "../../../marketSbg/@tencent/stock-hq-etf/hotTopicPages/ListPage.js";
      },
    },
    provide: function () {
      return { stockBridge: t.StockBridge, stockRouter: o.StockRouter };
    },
    methods: {
      onScroll: getApp().globalData.throttle(16, function (t) {
        var e = t || {},
          r = e.scrollTop,
          c = e.scrollHeight;
        o.scrollDepthStat.recordScrollFromView({
          scrollTop: r,
          scrollHeight: c,
          path: this.__route__,
        });
      }),
    },
  };
Array ||
  (
    o.resolveComponent("hot-topic-list-page") +
    o.resolveComponent("mp-privacy-dialog") +
    o.resolveComponent("stock-privacy-dialog")
  )();
var r = o._export_sfc(e, [
  [
    "render",
    function (t, e, r, c, n, i) {
      return {
        a: t.rootFontSize,
        b: o.o(i.onScroll, 204),
        c: o.p({ "no-auto": !0 }),
      };
    },
  ],
]);
(e.__runtimeHooks = 1), wx.createPage(r);
