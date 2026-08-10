var e = require("../../../../common/vendor.js"),
  o = require("../../@tencent/stock-base/bridge/mpwzq.js"),
  l = {
    name: "GlobalInvestHomeRoutePage",
    components: {
      GlobalInvestHomePage: function () {
        return "../../../marketSbg/@tencent/stock-hq-etf/global-invest/pages/HomePage/GlobalInvestHomePage.js";
      },
    },
    provide: function () {
      return {
        hqBridge: o.StockBridge,
        stockBridge: o.StockBridge,
        stockRouter: e.StockRouter,
      };
    },
    onShow: function () {
      var e, o;
      null ==
        (o =
          null == (e = this.$refs.globalInvestHomePageRef)
            ? void 0
            : e.handlePageShow) || o.call(e);
    },
    onHide: function () {
      var e, o;
      null ==
        (o =
          null == (e = this.$refs.globalInvestHomePageRef)
            ? void 0
            : e.handlePageHide) || o.call(e);
    },
    onUnload: function () {
      var e, o;
      null ==
        (o =
          null == (e = this.$refs.globalInvestHomePageRef)
            ? void 0
            : e.handlePageHide) || o.call(e);
    },
    onPageScroll: function (o) {
      var l,
        n,
        t,
        a = null != (l = null == o ? void 0 : o.scrollTop) ? l : 0;
      null ==
        (t =
          null == (n = this.$refs.globalInvestHomePageRef)
            ? void 0
            : n.setScrollTop) || t.call(n, a),
        e.scrollDepthStat.onScroll(a, this.__route__);
    },
  };
Array ||
  (
    e.resolveComponent("GlobalInvestHomePage") +
    e.resolveComponent("mp-privacy-dialog") +
    e.resolveComponent("stock-privacy-dialog")
  )();
var n = e._export_sfc(l, [
  [
    "render",
    function (o, l, n, t, a, r) {
      return {
        a: o.rootFontSize,
        b: e.sr("globalInvestHomePageRef", "53dbc6d8-0"),
        c: e.p({ "no-auto": !0 }),
      };
    },
  ],
]);
(l.__runtimeHooks = 1), wx.createPage(n);
