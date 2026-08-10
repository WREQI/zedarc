var e = require("../../../common/vendor.js"),
  t = e.useBrokerInfo().navigateToTrade,
  n = {
    components: {
      NewpubEtfPage: function () {
        return "../../marketSbg/@tencent/stock-hq-newpubetf/NewpubEtfPage.js".then(
          function (e) {
            return e.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0b2NrLWhxLW5ld3B1YmV0Zi9OZXdwdWJFdGZQYWdlLnZ1ZQ;
          }
        );
      },
    },
    provide: function () {
      var t = this;
      return {
        hqBridge: new e.HQBridge(this),
        isAccountOpen: function () {
          return t.hasAccount;
        },
      };
    },
    onShow: function () {
      e.StockBridge.busOn("market-navigate-to-trade", this.navigateToTrade),
        e.StockBridge.busOn(
          "market-navigate-to-apply-index",
          this.navigateToApplyIndex
        );
    },
    onHide: function () {
      e.StockBridge.busOff("market-navigate-to-trade", this.navigateToTrade),
        e.StockBridge.busOff(
          "market-navigate-to-apply-index",
          this.navigateToApplyIndex
        );
    },
    onUnload: function () {
      e.StockBridge.busOff("market-navigate-to-trade", this.navigateToTrade),
        e.StockBridge.busOff(
          "market-navigate-to-apply-index",
          this.navigateToApplyIndex
        );
    },
    computed: {
      hasAccount: function () {
        return e.useBrokerInfo().hasBind.value;
      },
    },
    methods: {
      navigateToTrade: function (e) {
        t({ url: "/pages/etf-subscribe/index", query: e });
      },
      navigateToApplyIndex: function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        t({ name: "ApplyIndex", query: e });
      },
    },
  };
Array ||
  (
    e.resolveComponent("mp-privacy-dialog") +
    e.resolveComponent("stock-privacy-dialog") +
    e.resolveComponent("NewpubEtfPage")
  )();
var a = e._export_sfc(n, [
  [
    "render",
    function (t, n, a, o, r, i) {
      return { a: t.rootFontSize, b: e.p({ "no-auto": !0 }) };
    },
  ],
]);
wx.createPage(a);
