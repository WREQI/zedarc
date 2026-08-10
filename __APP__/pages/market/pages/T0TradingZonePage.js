var e = require("../../../common/vendor.js"),
  o = {
    components: {
      T0TradingZonePage: function () {
        return "../../marketSbg/@tencent/stock-hq-etf/t0Zone/pages/T0TradingZonePage.js";
      },
    },
    provide: function () {
      return { hqBridge: this.hqBridge };
    },
    data: function () {
      return { hqBridge: new e.HQBridge() };
    },
    onPageScroll: function (o) {
      var r,
        n,
        t,
        a = null != (r = null == o ? void 0 : o.scrollTop) ? r : 0;
      null == (t = null == (n = this.$refs.t0Page) ? void 0 : n.setScrollTop) ||
        t.call(n, a),
        e.scrollDepthStat.onScroll(a, this.__route__);
    },
  };
Array ||
  (
    e.resolveComponent("mp-privacy-dialog") +
    e.resolveComponent("stock-privacy-dialog") +
    e.resolveComponent("T0TradingZonePage")
  )();
var r = e._export_sfc(o, [
  [
    "render",
    function (o, r, n, t, a, i) {
      return {
        a: o.rootFontSize,
        b: e.p({ "no-auto": !0 }),
        c: e.sr("t0Page", "49b67da0-2"),
      };
    },
  ],
  ["__scopeId", "data-v-49b67da0"],
]);
(o.__runtimeHooks = 1), wx.createPage(r);
