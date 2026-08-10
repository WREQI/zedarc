var e = require("../../../../common/vendor.js"),
  o = require("../../@tencent/stock-base/bridge/mpwzq.js"),
  t = {
    name: "GlobalMarketRoutePage",
    components: {
      GlobalMarketPage: function () {
        return "../../../marketSbg/@tencent/stock-hq-etf/global-invest/pages/GlobalMarketPage.js";
      },
    },
    onPageScroll: function (e) {
      var o, t, r;
      null ==
        (r =
          null == (o = this.$refs.globalMarketPageRef)
            ? void 0
            : o.setScrollTop) ||
        r.call(o, null != (t = null == e ? void 0 : e.scrollTop) ? t : 0);
    },
    onReachBottom: function () {
      var e, o;
      null ==
        (o =
          null == (e = this.$refs.globalMarketPageRef)
            ? void 0
            : e.onReachBottom) || o.call(e);
    },
    provide: function () {
      return {
        hqBridge: o.StockBridge,
        stockBridge: o.StockBridge,
        stockRouter: e.StockRouter,
      };
    },
  };
Array ||
  (
    e.resolveComponent("GlobalMarketPage") +
    e.resolveComponent("mp-privacy-dialog") +
    e.resolveComponent("stock-privacy-dialog")
  )();
var r = e._export_sfc(t, [
  [
    "render",
    function (o, t, r, a, l, n) {
      return {
        a: o.rootFontSize,
        b: e.sr("globalMarketPageRef", "b489d54a-0"),
        c: e.p({ "no-auto": !0 }),
      };
    },
  ],
]);
(t.__runtimeHooks = 1), wx.createPage(r);
