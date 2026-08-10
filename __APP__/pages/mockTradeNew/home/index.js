var e = require("../../../common/vendor.js"),
  t = require("../@tencent/stock-news-core/hooks/useUserProtocol.js"),
  n = e.useBrokerInfo(),
  r = n.hasBind,
  o = n.navigateToTrade,
  a = {
    components: {
      mocktrade: function () {
        return "../@tencent/st-act-mocktrade/src/pages/home/index.js";
      },
    },
    provide: function () {
      return {
        stockBridge: e.StockBridge,
        AbtInfoAPI: e.AbtInfoAPI,
        hasBind: r,
        navigateToTrade: o,
      };
    },
    setup: function () {
      var n = t.useUserProtocol(),
        r = n.didAgreeUserAgreement,
        o = n.subUserAgreementStatus,
        a = n.unsubUserAgreementStatus;
      e.provide("didAgreeUserAgreement", r),
        e.provide("onCheckUserAgreementStatus", function () {
          var t, n;
          null ==
            (n =
              null == (t = e.StockBridge.privacyAgreement)
                ? void 0
                : t.check) || n.call(t).catch(function () {});
        }),
        o(),
        e.onUnmounted(function () {
          a();
        });
    },
    onShow: function () {
      e.ensureScenePrivacyPopup("mocktrade");
    },
    onShareAppMessage: function () {
      return {
        title: "一起参加腾讯模拟炒股周赛吧！",
        path: "/pages/mockTradeNew/home/index?tab=1&stat=FMzxgxcxW004010001",
        imageUrl:
          "https://st.gtimg.com/design/f92bacaa3643f6c2a49f056daa1b9478.png",
      };
    },
    onShareTimeline: function () {
      return {
        title: "一起参加腾讯模拟炒股周赛吧！",
        query: "tab=1&stat=FMzxgxcxW004030001",
        imageUrl:
          "https://st.gtimg.com/design/f92bacaa3643f6c2a49f056daa1b9478.png",
      };
    },
  };
Array ||
  (
    e.resolveComponent("mp-privacy-dialog") +
    e.resolveComponent("stock-privacy-dialog") +
    e.resolveComponent("mocktrade")
  )();
var c = e._export_sfc(a, [
  [
    "render",
    function (e, t, n, r, o, a) {
      return { a: e.rootFontSize };
    },
  ],
  ["__scopeId", "data-v-e9f6e486"],
]);
(a.__runtimeHooks = 6), wx.createPage(c);
