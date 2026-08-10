var e,
  t,
  i = require("../../@babel/runtime/helpers/regeneratorRuntime"),
  r = function (e, t, i) {
    return new Promise(function (r, n) {
      var s = function (e) {
          try {
            a(i.next(e));
          } catch (e) {
            n(e);
          }
        },
        o = function (e) {
          try {
            a(i.throw(e));
          } catch (e) {
            n(e);
          }
        },
        a = function (e) {
          return e.done ? r(e.value) : Promise.resolve(e.value).then(s, o);
        };
      a((i = i.apply(e, t)).next());
    });
  },
  n = require("../../common/vendor.js"),
  s = require("../../utils/broker/usePluginInfo.js"),
  o = require("./const.js"),
  a = require("../../module/delivery/deliveryMixin.js"),
  h = require("../../mixins/subpkg_reload.js"),
  u = n.useBrokerInfo().navigateToTrade,
  c = getApp().globalData,
  l = c.rpxToPx(208),
  g =
    (null == (t = null == (e = c.detect) ? void 0 : e.env)
      ? void 0
      : t.IS_PCWEIXIN) || !1,
  d = {
    components: {
      Market: function () {
        return "../market/components/hqPage.js";
      },
      TopBar: function () {
        return "./topbar/index.js";
      },
      PrivacyPolicyModal: function () {
        return "../indexSbg/@tencent/wzq-privacy-policy-modal/PrivacyPolicyModal.js";
      },
    },
    mixins: [a.deliveryMixin, h.SubpkgReloadMixin],
    provide: function () {
      var e = this;
      return {
        hqBridge: this.hqBridge,
        isAccountOpen: this.hasAccount,
        didAgreeUserAgreement: this.didAgreeUserAgreement,
        onCheckUserAgreementStatus: this.onCheckUserAgreementStatus,
        isZhongJinCaiFu: this.isZJCF,
        theme: this.skin,
        isHqShow: function () {
          return e.isHqShow.value;
        },
        brokerName: this.brokerName,
      };
    },
    data: function () {
      var e = new n.HQBridge();
      return {
        isPC: g,
        titleHeight: g ? 42 : 44,
        hqBridge: e,
        skin: n.wx$1.getStorageSync("user/skin") || "white",
        triggered: !1,
        isHqShow: n.reactive({ value: !1 }),
        scrollHeight: 558,
        hideTitle: "init",
        isHsTrading: !1,
        scrollTop: 0,
        hideLoading: !1,
        showPrivacyPolicy: !1,
        didAgreeUserAgreement: n.reactive({ value: !0 }),
        queryData: null,
        safeTop: 0,
        retryCount: 0,
        retryTimer: null,
        resizeTimer: null,
        firstShow: !0,
        subpkgName: "pages/market/",
        barHeight: 0,
      };
    },
    onTabItemTap: function () {
      this.handleSilentSubscribe(),
        n.Request.reportMTAData({ eventName: "xcx_market_click" });
    },
    computed: {
      hasAccount: function () {
        return n.useBrokerInfo().hasBind.value;
      },
      isZJCF: function () {
        return s.usePluginInfo(n.useBrokerInfo().highestPriorityDealer)
          .isZhongJinCaiFu.value;
      },
      brokerName: function () {
        return s.usePluginInfo(n.useBrokerInfo().highestPriorityDealer);
      },
    },
    watch: {},
    onLoad: function (e) {
      (this.lastScrollTop = -1),
        this.subUserAgreementStatus(),
        (this.queryData = e);
      try {
        n.preload.queryUserSetting();
      } catch (e) {}
    },
    onUnload: function () {
      this.unsubUserAgreementStatus();
    },
    onShow: function () {
      var e,
        t,
        i = this;
      g && this.isHqShow.value && this.handlePCResize(),
        (this.isHqShow.value = !0);
      var r =
        null == (t = null == (e = o.SEAR_STAT_MAP) ? void 0 : e.hq)
          ? void 0
          : t.exposure;
      this.hqBridge.report(r),
        (this.skin = n.wx$1.getStorageSync("user/skin") || "white");
      try {
        getApp().globalData.setSkin(function (e) {
          i.skin = "black" === e ? "black" : "white";
        });
      } catch (e) {}
      this.hqBridge.busOn("navigateToTrade", this.navigateToTrade),
        this.hqBridge.busOn("navigateToApplyIndex", this.navigateToApplyIndex);
    },
    onHide: function () {
      (this.isHqShow.value = !1),
        this.hqBridge.busOff("navigateToTrade", this.navigateToTrade),
        this.hqBridge.busOff("navigateToApplyIndex", this.navigateToApplyIndex),
        this.clearRetryTimer(),
        this.clearResizeTimer();
    },
    onReady: function () {
      this.setContainerHeight(),
        n.mpReporter.reportEvent("MONITOR-HQ-MARKET-READY");
    },
    onShareAppMessage: function (e) {
      return r(
        this,
        null,
        i().mark(function t() {
          return i().wrap(function (t) {
            for (;;)
              switch ((t.prev = t.next)) {
                case 0:
                  e.from;
                case 1:
                case "end":
                  return t.stop();
              }
          }, t);
        })
      );
    },
    onResize: function () {
      return r(
        this,
        null,
        i().mark(function e() {
          return i().wrap(
            function (e) {
              for (;;)
                switch ((e.prev = e.next)) {
                  case 0:
                    this.isPC && this.handlePCResize();
                  case 1:
                  case "end":
                    return e.stop();
                }
            },
            e,
            this
          );
        })
      );
    },
    beforeDestroy: function () {
      this.clearRetryTimer(), this.clearResizeTimer();
    },
    methods: {
      handleSilentSubscribe: function () {
        return r(
          this,
          null,
          i().mark(function e() {
            var t;
            return i().wrap(
              function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return (
                        (e.prev = 0),
                        (e.next = 3),
                        require
                          .async(
                            "../yy/@tencent/st-act-subscribe/utils/subscribe_wx_message.js"
                          )
                          .then(function (e) {
                            return e.subscribe_wx_message;
                          })
                      );
                    case 3:
                      (t = e.sent),
                        (0, t.silentSubscribe)("ai_pre_post_market"),
                        (e.next = 10);
                      break;
                    case 8:
                      (e.prev = 8), (e.t0 = e.catch(0));
                    case 10:
                    case "end":
                      return e.stop();
                  }
              },
              e,
              null,
              [[0, 8]]
            );
          })
        );
      },
      handlePCResize: function () {
        var e;
        try {
          e = this.$refs.hq.$refs.main || {};
        } catch (e) {}
        if (e) {
          var t = n.wx$1.createSelectorQuery();
          t.selectViewport().boundingClientRect(),
            t.exec(function (t) {
              if (t && t[0]) {
                var i = t[0].height,
                  r = (e || {}).setSwiperHeight;
                "function" == typeof r && r(i);
              }
            });
        }
      },
      pageInit: function () {
        var e = this;
        (this.hideLoading = !0),
          this.onPageSubpkgMounted(),
          this.isPC &&
            (this.clearResizeTimer(),
            (this.resizeTimer = setTimeout(function () {
              e.handlePCResize();
            }, 100)));
      },
      onCheckUserAgreementStatus: function () {
        this.didAgreeUserAgreement.value || (this.showPrivacyPolicy = !0);
      },
      handleProtocolStatusChange: function () {
        this.checkUserAgreementStatus();
      },
      checkUserAgreementStatus: function () {
        var e = !0;
        try {
          var t = n.StockBridge.store.protocolStatus;
          "string" == typeof t && (e = "agree" === t);
        } catch (e) {}
        return (this.didAgreeUserAgreement.value = e), e;
      },
      unsubUserAgreementStatus: function () {
        n.StockBridge.store.unsubscribeProtocolStatus(
          this.handleProtocolStatusChange
        );
      },
      subUserAgreementStatus: function () {
        this.checkUserAgreementStatus() ||
          (this.unsubUserAgreementStatus(),
          n.StockBridge.store.subscribeProtocolStatus(
            this.handleProtocolStatusChange
          ));
      },
      initData: function () {
        var e = (
            (n.wx$1.getWindowInfo && n.wx$1.getWindowInfo()) ||
            n.wx$1.getSystemInfoSync()
          ).windowHeight,
          t = void 0 === e ? 0 : e;
        (this.windowHeight = t),
          (this.containerHeight = this.windowHeight - l),
          (this.scrollHeight = this.containerHeight),
          (this.titleHeight = 0),
          (this.freshing = !1),
          (this.isHsTrading = !1),
          (this.pullTimeOut = null);
      },
      clearRetryTimer: function () {
        this.retryTimer &&
          (clearTimeout(this.retryTimer), (this.retryTimer = null));
      },
      clearResizeTimer: function () {
        this.resizeTimer &&
          (clearTimeout(this.resizeTimer), (this.resizeTimer = null));
      },
      setContainerHeight: function () {
        var e = this;
        this.clearRetryTimer();
        var t = (
            (n.wx$1.getWindowInfo && n.wx$1.getWindowInfo()) ||
            n.wx$1.getSystemInfoSync()
          ).windowHeight,
          i = void 0 === t ? 0 : t;
        if (this.windowHeight !== i) {
          this.windowHeight = i;
          try {
            var r = (this.$refs.topBar || {}).getSafeArea;
            "function" == typeof r && r();
          } catch (e) {}
        }
        if (this.barHeight > 0)
          return (
            (this.containerHeight = this.windowHeight - this.barHeight),
            void (this.scrollHeight = this.windowHeight - this.barHeight)
          );
        this.retryCount < 3
          ? ((this.retryCount += 1),
            (this.retryTimer = setTimeout(function () {
              e.setContainerHeight();
            }, 100)))
          : ((this.containerHeight = this.windowHeight - l),
            (this.scrollHeight = this.windowHeight - l));
      },
      setHeight: function (e) {
        this.barHeight = e;
      },
      setTHeight: function (e, t) {
        (this.titleHeight = e), (this.safeTop = t);
      },
      scroll: function (e) {
        var t = e.target || {},
          i = t.scrollTop,
          r = t.scrollHeight;
        if (((this.scrollTop = i), !(i > r - this.scrollHeight || i < 0))) {
          if (i < 30 && !1 !== this.hideTitle)
            return (
              (this.hideTitle = !1),
              (this.scrollHeight = this.containerHeight),
              void (this.lastScrollTop = -1)
            );
          if (-1 !== this.lastScrollTop) {
            var n = i - this.lastScrollTop;
            return n >= 38
              ? ((this.lastScrollTop = -1),
                void (
                  !0 !== this.hideTitle &&
                  ((this.hideTitle = !0),
                  (this.scrollHeight = this.containerHeight + this.titleHeight))
                ))
              : n <= -38
              ? ((this.lastScrollTop = -1),
                void (
                  !1 !== this.hideTitle &&
                  ((this.hideTitle = !1),
                  (this.scrollHeight = this.containerHeight))
                ))
              : void 0;
          }
          this.lastScrollTop = i;
        }
      },
      navigateToTrade: function () {
        u({ name: "NewStock" });
      },
      navigateToApplyIndex: function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        u({ name: "ApplyIndex", query: e });
      },
    },
  };
Array ||
  (
    n.resolveComponent("mp-privacy-dialog") +
    n.resolveComponent("stock-privacy-dialog") +
    n.resolveComponent("TopBar") +
    n.resolveComponent("market") +
    n.resolveComponent("st-status") +
    n.resolveComponent("PrivacyPolicyModal")
  )();
var p = n._export_sfc(d, [
  [
    "render",
    function (e, t, i, r, s, o) {
      return n.e(
        {
          a: e.rootFontSize,
          b: n.sr("topBar", "14379b87-2"),
          c: n.o(o.setHeight, 28),
          d: n.o(o.setTHeight, 29),
          e: n.p({
            from: "hq",
            "hide-title": s.hideTitle,
            "premote-mixin": e.premoteMixin,
            "is-show": s.isHqShow.value,
          }),
          f: e.subpkgReady,
        },
        e.subpkgReady
          ? {
              g: n.sr("hq", "14379b87-3"),
              h: n.o(o.pageInit, 30),
              i: n.o(o.scroll, 31),
              j: n.p({
                "premote-mixin": e.premoteMixin,
                "scroll-top": s.scrollTop,
                "safe-top": s.safeTop,
                "title-height": s.titleHeight,
                "query-data": s.queryData,
                "bar-height": s.barHeight,
              }),
            }
          : {},
        { k: !s.hideLoading },
        s.hideLoading
          ? {}
          : { l: n.o(e.reloadSubpkg, 32), m: n.p({ type: e.subpkgStatus }) },
        {
          n: n.o(function (e) {
            return (s.showPrivacyPolicy = e);
          }, 33),
          o: n.p({ value: s.showPrivacyPolicy }),
          p: s.skin,
        }
      );
    },
  ],
  ["__scopeId", "data-v-14379b87"],
]);
(d.__runtimeHooks = 2), wx.createPage(p);
