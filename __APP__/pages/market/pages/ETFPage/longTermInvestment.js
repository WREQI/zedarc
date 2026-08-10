var e = require("../../../../common/vendor.js"),
  n = require("../../@tencent/stock-base/bridge/mpwzq.js"),
  o = {
    name: "LongTermInvestmentRoutePage",
    components: {
      LongTermInvestmentPage: function () {
        return "../../../marketSbg/@tencent/stock-hq-etf/global-invest/pages/LongTermInvestmentPage.js";
      },
    },
    provide: function () {
      return {
        hqBridge: n.StockBridge,
        stockBridge: n.StockBridge,
        stockRouter: e.StockRouter,
      };
    },
    data: function () {
      return { skin: n.StockBridge.getStorage("user/skin") || "light" };
    },
    onPageScroll: function (e) {
      var n, o, t;
      null ==
        (t =
          null == (n = this.$refs.longTermInvestmentPageRef)
            ? void 0
            : n.setScrollTop) ||
        t.call(n, null != (o = null == e ? void 0 : e.scrollTop) ? o : 0);
    },
  };
Array ||
  (
    e.resolveComponent("mp-privacy-dialog") +
    e.resolveComponent("stock-privacy-dialog") +
    e.resolveComponent("LongTermInvestmentPage")
  )();
var t = e._export_sfc(o, [
  [
    "render",
    function (n, o, t, r, s, a) {
      return {
        a: n.rootFontSize,
        b: e.p({ "no-auto": !0 }),
        c: e.sr("longTermInvestmentPageRef", "3034466d-2"),
        d: s.skin,
      };
    },
  ],
  ["__scopeId", "data-v-3034466d"],
]);
(o.__runtimeHooks = 1), wx.createPage(t);
