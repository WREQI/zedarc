var e = require("../../common/vendor.js"),
  t = new e.HQBridge(),
  o = e.defineComponent({
    components: {
      UpdateHistory: function () {
        return "./@tencent/wzq-lite-basket/pages/updateHistory.js";
      },
    },
    provide: function () {
      return { hqBridge: t };
    },
    onLoad: function (e) {
      this.gdId = e.gdId;
    },
    onPullDownRefresh: function () {
      this.$refs.updateHistoryRef.pullDownRefresh();
    },
    onReachBottom: function () {
      this.$refs.updateHistoryRef.reachBottom();
    },
    setup: function () {
      e.onMounted(function () {
        e.StockBridge.setTitle("更新记录");
      });
      var t = e.ref("");
      return e.StockBridge.ENV, e.EnvTypeEnum.MP, { isLite: !1, gdId: t };
    },
  });
Array ||
  (
    e.resolveComponent("mp-privacy-dialog") +
    e.resolveComponent("stock-privacy-dialog") +
    e.resolveComponent("update-history")
  )();
var n = e._export_sfc(o, [
  [
    "render",
    function (t, o, n, r, i, d) {
      return {
        a: t.rootFontSize,
        b: e.p({ "no-auto": !0 }),
        c: e.sr("updateHistoryRef", "dfec0ba4-2"),
        d: e.p({ "gd-id": t.gdId }),
      };
    },
  ],
  ["__scopeId", "data-v-dfec0ba4"],
]);
wx.createPage(n);
