var e = require("../../../common/vendor.js"),
  t = require("../@tencent/stock-news-core/hooks/useUserProtocol.js"),
  i = require("../@tencent/stock-hq-data/index.js"),
  o = {
    components: {
      remindList: function () {
        return "../../marketSbg/@tencent/stock-remind-setting/remindList.js";
      },
      FollowGuide: function () {
        return "../../asyncCom/components/followGuideType.js";
      },
    },
    provide: function () {
      return { hqBridge: this.hqBridge, isSubscribed: this.isSubscribed };
    },
    setup: function () {
      var i = t.useUserProtocol(),
        o = i.didAgreeUserAgreement,
        n = i.subUserAgreementStatus,
        r = i.unsubUserAgreementStatus;
      e.provide("didAgreeUserAgreement", o),
        e.provide("onCheckUserAgreementStatus", function () {
          var t, i;
          null ==
            (i =
              null == (t = e.StockBridge.privacyAgreement)
                ? void 0
                : t.check) || i.call(t).catch(function () {});
        }),
        n(),
        e.onUnmounted(function () {
          r();
        });
    },
    data: function () {
      return {
        hqBridge: new e.HQBridge(),
        isSubscribed: e.getAccountChatSubscribed(),
        active: !0,
        symbol: "",
        showFollowGuide: !1,
      };
    },
    onLoad: function (t) {
      var o = t.market,
        n = t.scode;
      (this.symbol = i.utils.getSymbol(o, n)),
        e.wx$1.setNavigationBarTitle({ title: "股票提醒" });
    },
    onShow: function () {
      (this.isSubscribed = e.getAccountChatSubscribed()),
        this.active ||
          (this.$refs.remindList && this.$refs.remindList.queryRemindList()),
        (this.active = !0),
        e.querySubscribedByuserinfo(),
        e.ensureScenePrivacyPopup("stock_remind");
    },
    onHide: function () {
      this.active = !1;
    },
    methods: {
      onCheckUserSubscribe: function (t) {
        try {
          if (!this.isSubscribed) {
            e.wx$1.navigateTo({
              url: "/pages/additional/webview/index?url=".concat(
                encodeURIComponent(
                  ""
                    .concat(
                      "https://zqact05.tenpay.com/activity/page/fitXcxQrcode/#/index?stat="
                    )
                    .concat("I2w00p000q027")
                )
              ),
            });
          }
        } catch (e) {
        } finally {
          t && t(this.isSubscribed);
        }
      },
    },
  };
Array ||
  (
    e.resolveComponent("mp-privacy-dialog") +
    e.resolveComponent("stock-privacy-dialog") +
    e.resolveComponent("remindList") +
    e.resolveComponent("FollowGuide")
  )();
var n = e._export_sfc(o, [
  [
    "render",
    function (t, i, o, n, r, s) {
      return {
        a: t.rootFontSize,
        b: e.sr("remindList", "0c5426f8-2"),
        c: e.o(s.onCheckUserSubscribe, 75),
        d: e.p({ symbol: r.symbol }),
        e: e.o(function (e) {
          return (r.showFollowGuide = !1);
        }, 76),
        f: e.p({ show: r.showFollowGuide, stat: "I2w00p000q027" }),
      };
    },
  ],
]);
wx.createPage(n);
