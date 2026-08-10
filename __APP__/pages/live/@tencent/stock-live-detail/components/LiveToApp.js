var e = require("../../../../../@babel/runtime/helpers/slicedToArray"),
  t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
  n = require("../../../../../common/vendor.js"),
  i = require("../utils/mapi.js"),
  o = require("../Index.js"),
  s = require("../utils/checkSupportBroker.js"),
  c = { IS_ZXG_XCX: !1, IS_WZQ_XCX: !1 },
  r = c.IS_PCWEIXIN,
  a = "goto_open_account_storage_key",
  u = "goto_jumpapp_storage_key",
  l = "close_jump_video_storage_key",
  h = {
    components: {
      SubscribeWxMsgBar: function () {
        return "./SubscribeWxMsgBar.js";
      },
      LiveCommonBar: function () {
        return "./LiveCommonBar.js";
      },
    },
    inject: {
      useBroker: { value: "useBroker", default: null },
      hqBridge: { default: function () {} },
      TradeFunc: { default: function () {} },
    },
    props: [
      "wxurl",
      "live",
      "hasSubscribed",
      "userinfo",
      "showSubscribe",
      "isLightMode",
    ],
    data: function () {
      return {
        installed: !1,
        closed: !1,
        enableOpenAccount: !1,
        didReportOpenAccountBar: !1,
        showSubscribeBanner: !1,
        showToAppBanner: !1,
        showWeChatChannelBanner: !1,
        isMP: !0,
        isPC: r,
        isWx: !0,
      };
    },
    computed: {
      didOpenAccount: function () {
        if (!this.userinfo) return !1;
        var e = this.userinfo.userstate;
        return e === o.USERSTATE.HASACCOUNT || e === o.USERSTATE.HASBUNDLE;
      },
      showCloseOpenAccount: function () {
        return !o.getItem(a);
      },
    },
    watch: {
      live: {
        immediate: !0,
        handler: function (e) {
          this.updateOpenAccountState();
        },
      },
      userinfo: {
        immediate: !0,
        handler: function (e) {
          this.updateOpenAccountState();
        },
      },
    },
    created: function () {
      this.isWx || this.checkInstall(),
        this.updateSubscribeBannerShow(),
        this.updateToAppGuideBannerShow(),
        this.hqBridge.busOn(
          o.SUBSCRIBE_WXMSG_STORAGE_KEY,
          this.onSubscribeBanerClose
        ),
        this.checkGuideClosed(),
        this.updateVideoBannerStatus();
    },
    beforeDestroy: function () {
      this.hqBridge.busOff(o.SUBSCRIBE_WXMSG_STORAGE_KEY);
    },
    methods: {
      updateOpenAccountState: function () {
        return (
          (e = this),
          null,
          (n = t().mark(function e() {
            var n, i;
            return t().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (
                        !(
                          this.userinfo &&
                          this.live &&
                          this.live.account_desc &&
                          this.live.account_desc.length > 0 &&
                          this.live.account_wzq_link &&
                          this.live.account_wzq_link.length > 0
                        )
                      ) {
                        e.next = 6;
                        break;
                      }
                      return (
                        (n = this.live.account_wzq_link),
                        (e.next = 4),
                        s.checkSupportBroker(n, this.useBroker, this.TradeFunc)
                      );
                    case 4:
                      (i = e.sent),
                        (this.enableOpenAccount =
                          i &&
                          !this.closed &&
                          !this.didOpenAccount &&
                          this.showCloseOpenAccount),
                        this.enableOpenAccount &&
                          !this.didReportOpenAccountBar &&
                          (this.reportAnalytics(
                            "news.live-detail.showNavToOpenAccount"
                          ),
                          (this.didReportOpenAccountBar = !0));
                    case 6:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              this
            );
          })),
          new Promise(function (t, i) {
            var o = function (e) {
                try {
                  c(n.next(e));
                } catch (e) {
                  i(e);
                }
              },
              s = function (e) {
                try {
                  c(n.throw(e));
                } catch (e) {
                  i(e);
                }
              },
              c = function (e) {
                return e.done
                  ? t(e.value)
                  : Promise.resolve(e.value).then(o, s);
              };
            c((n = n.apply(e, null)).next());
          })
        );
        var e, n;
      },
      closeSubscribeBar: function () {
        o.setItem(o.SUBSCRIBE_WXMSG_STORAGE_KEY, !0),
          (this.showSubscribeBanner = !1),
          (this.closed = !0),
          this.$emit("onLiveGuideBarClose");
      },
      onSubscribeBanerClose: function () {
        (this.closed = !0), this.$emit("onLiveGuideBarClose");
      },
      updateSubscribeBannerShow: function () {
        var e = o.getItem(o.SUBSCRIBE_WXMSG_STORAGE_KEY);
        this.showSubscribeBanner = !e;
      },
      updateToAppGuideBannerShow: function () {
        var e = o.getItem(u);
        this.showToAppBanner = null == e;
      },
      closeToAppGuide: function () {
        o.setItem(u, !0),
          (this.showToAppBanner = !1),
          (this.closed = !0),
          this.$emit("onLiveGuideBarClose");
      },
      updateVideoBannerStatus: function () {
        var e;
        !0 !== o.getItem(l) &&
          (null == (e = this.live) ? void 0 : e.wx_video_id) &&
          (this.showWeChatChannelBanner = !0);
      },
      closeWeChatChannelBanner: function () {
        o.setItem(l, !0),
          (this.showWeChatChannelBanner = !1),
          (this.closed = !0),
          this.$emit("onLiveGuideBarClose");
      },
      gotoWetChatChannel: function () {
        var e;
        (null == (e = this.live) ? void 0 : e.wx_video_id) &&
          n.wx$1.openChannelsLive({
            finderUserName: this.live.wx_video_id,
            complete: function (e) {},
            fail: function (e) {},
            success: function (e) {},
          });
      },
      checkGuideClosed: function () {
        var e = !this.showSubscribeBanner,
          t = !this.showToAppBanner || this.isMP;
        !this.enableOpenAccount &&
          e &&
          t &&
          ((this.closed = !0), this.$emit("onLiveGuideBarClose"));
      },
      reportAnalytics: function (e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        this.$emit("report", e, t);
      },
      subscribeBarExplore: function () {
        this.reportAnalytics("news.live-detail.subscribe_bar_explore");
      },
      btnClickOpenApp: function () {
        this.reportAnalytics("news.live-detail.navToApp"),
          this.installed ? this.openApp() : this.install();
      },
      checkInstall: function () {
        var e = this;
        i.mapiExports.check(function (t) {
          t && (e.installed = !0);
        });
      },
      install: function () {
        var e = this;
        i.mapiExports.install(function (t) {
          t && ((e.buttonText = "安装完毕"), e.checkInstall()),
            (e.buttonText = "下载中");
        });
      },
      setLocationHref: function (e) {
        location && (location.href = e);
      },
      openApp: function (e) {
        var t = this,
          n = null == navigator ? void 0 : navigator.userAgent,
          o = n.indexOf("Android") > -1 || n.indexOf("Adr") > -1,
          s = e || t.wxurl,
          c = o ? encodeURIComponent(s) : s,
          r = t.version ? t.version : "8.0.0";
        if (
          ((s =
            "qqstock://stockhybrid/com.tencent.shy.update_proxy/index?jumpUrl="
              .concat(c, "&version=")
              .concat(r)),
          location && "gu.qq.com" !== location.hostname)
        ) {
          var a = location.href.match(/[?&]fchannel_id_fm=([^&#]+)/),
            u = a ? a[1] : "";
          this.setLocationHref(
            "https://gu.qq.com/resource/jump/m.htm?immediate=0&number="
              .concat(u, "&url=")
              .concat(encodeURIComponent(s))
          );
        } else
          o
            ? i.mapiExports.check(function (e, n) {
                e &&
                  (t.relateNews ||
                  ("number" == typeof e && e < 246) ||
                  ("string" == typeof e &&
                    (e[0] < 5 ||
                      (5 === e[0] && e[1] < 3) ||
                      (5 === e[0] && 3 === e[1] && e[2] < 5)))
                    ? t.setLocationHref("tencentstockapp282://")
                    : n(s));
              }, s)
            : i.mapiExports.check(function (e, t) {
                e && t();
              }, s);
      },
      closeOpenAccountGuide: function () {
        o.setItem(a, !0), (this.closed = !0), this.$emit("onLiveGuideBarClose");
      },
      gotoOpenAccount: function () {
        var t, i;
        if (
          (this.reportAnalytics("news.live-detail.navToOpenAccount", {
            stat_data: "Ixa53p007s025",
          }),
          n.wx$1)
        )
          n.wx$1.switchTab({ url: "/pages/index/trade" });
        else {
          var o = "";
          if (this.live && this.live.account_wzq_link) {
            var s = this.live.account_wzq_link.match(/broker=(\d+)/);
            if (s) o = e(s, 2)[1];
          }
          o
            ? (null == (t = this.TradeFunc) ? void 0 : t.navToApplyStep) &&
              (null == (i = this.TradeFunc) ||
                i.navToApplyStep({ broker: o, stat: "Ixa53p007s025" }))
            : this.$router.push({
                path: "/apply/index?stat_data=Ixa53p007s025",
              });
        }
      },
      onSubscribe: function (e) {
        this.$emit("onSubscribe", e),
          this.reportAnalytics("news.live-detail.subscribe_bar_click");
      },
    },
  };
Array ||
  (
    n.resolveComponent("LiveCommonBar") +
    n.resolveComponent("SubscribeWxMsgBar")
  )();
var p = n._export_sfc(h, [
  [
    "render",
    function (e, t, i, o, s, c) {
      return n.e(
        { a: s.isMP && s.showWeChatChannelBanner && !s.closed },
        s.isMP && s.showWeChatChannelBanner && !s.closed
          ? {
              b: n.o(c.gotoWetChatChannel, 4605),
              c: n.o(c.closeWeChatChannelBanner, 4606),
              d: n.p({
                logo: "https://st.gtimg.com/design/55b82a6a8f93cc2d498b85213d509d37.png",
                "bubble-white":
                  "https://st.gtimg.com/design/22d956f8297a2903b023344a32a4665d.png",
                "bubble-black":
                  "https://st.gtimg.com/design/0ed204b77c8c41928a333e1da2a008bf.png",
                "bubble-margin": -5,
                "tips-text": "您可跳转视频号体验锁屏播放",
                "button-text": "跳转",
              }),
            }
          : s.enableOpenAccount && !s.closed
          ? {
              f: n.o(c.gotoOpenAccount, 4607),
              g: n.o(c.closeOpenAccountGuide, 4608),
              h: n.p({
                logo: "https://st.gtimg.com/design/b221c57d4225222125103b30eaebed45.png",
                "bubble-white":
                  "https://st.gtimg.com/design/22d956f8297a2903b023344a32a4665d.png",
                "bubble-black":
                  "https://st.gtimg.com/design/0ed204b77c8c41928a333e1da2a008bf.png",
                "tips-text":
                  i.live && i.live.account_desc
                    ? i.live.account_desc
                    : "开户入市把握行情机会",
                "button-text": "去开户",
              }),
            }
          : s.showSubscribeBanner && !s.closed
          ? {
              j: n.o(c.onSubscribe, 4609),
              k: n.o(c.closeSubscribeBar, 4610),
              l: n.o(c.subscribeBarExplore, 4611),
              m: n.p({
                "has-subscribed": i.hasSubscribed,
                "show-subscribe": i.showSubscribe,
              }),
            }
          : !s.showToAppBanner || s.closed || s.isWx || s.isPC
          ? {}
          : {
              o: n.o(c.btnClickOpenApp, 4612),
              p: n.o(c.closeToAppGuide, 4613),
              q: n.p({
                logo: "https://st.gtimg.com/design/2da657154f2de72492229334c37c7851.png",
                "bubble-white":
                  "https://st.gtimg.com/design/cded6b61efc23a4c47eb898534209df7.png",
                "bubble-black":
                  "https://st.gtimg.com/design/fa4eefe304fbf73c45833c04dae1e0f3.png",
                "bubble-margin": -5,
                "tips-text": "下载腾讯自选股 锁屏听直播",
                "button-text": "去体验",
              }),
            },
        {
          e: s.enableOpenAccount && !s.closed,
          i: s.showSubscribeBanner && !s.closed,
          n: s.showToAppBanner && !s.closed && !s.isWx && !s.isPC,
          r: n.n(i.isLightMode ? "light" : ""),
        }
      );
    },
  ],
]);
wx.createComponent(p);
