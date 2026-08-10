var t = require("../../../common/vendor.js"),
  e = {
    components: {
      ChannelCooperation: function () {
        return "../@tencent/st-mini-channel-cooperation/Index.js".then(
          function (t) {
            return t.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0LW1pbmktY2hhbm5lbC1jb29wZXJhdGlvbi9JbmRleC52dWU;
          }
        );
      },
    },
    provide: function () {
      return {
        TradeFunc: t.sdkBridge,
        mpReporter: t.mpReporter,
        stockBridge: this.stockBridge,
      };
    },
    data: function () {
      return { stockBridge: t.StockBridge, shareInfo: {}, stat: "" };
    },
    onShareAppMessage: function () {
      return { title: this.shareInfo.title || "工行、中行特邀用户专享福利" };
    },
    onLoad: function (e) {
      var n = e.stat,
        o = e.stat_data;
      (this.stat = n || o),
        this.stat || t.mpReporter.reportEvent("CHANNEL_COOPERATION_STAT_ERROR");
    },
    methods: {
      handleMessage: function (t) {
        this.shareInfo = t || {};
      },
    },
  };
Array ||
  (
    t.resolveComponent("mp-privacy-dialog") +
    t.resolveComponent("stock-privacy-dialog") +
    t.resolveComponent("ChannelCooperation")
  )();
var n = t._export_sfc(e, [
  [
    "render",
    function (e, n, o, r, a, s) {
      return {
        a: e.rootFontSize,
        b: t.p({ "no-auto": !0 }),
        c: t.o(s.handleMessage, 402),
        d: t.p({ stat: a.stat }),
      };
    },
  ],
]);
(e.__runtimeHooks = 2), wx.createPage(n);
