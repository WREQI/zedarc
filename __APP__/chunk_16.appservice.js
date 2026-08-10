$gwx_XC_8 = (function (
  _,
  _v,
  _n,
  _p,
  _s,
  _wp,
  _wl,
  $gwn,
  $gwl,
  $gwh,
  wh,
  $gstack,
  $gwrt,
  gra,
  grb,
  TestTest,
  wfor,
  _ca,
  _da,
  _r,
  _rz,
  _o,
  _oz,
  _1,
  _1z,
  _2,
  _2z,
  _m,
  _mz,
  nv_getDate,
  nv_getRegExp,
  nv_console,
  nv_parseInt,
  nv_parseFloat,
  nv_isNaN,
  nv_isFinite,
  nv_decodeURI,
  nv_decodeURIComponent,
  nv_encodeURI,
  nv_encodeURIComponent,
  $gdc,
  nv_JSON,
  _af,
  _gv,
  _ai,
  _grp,
  _gd,
  _gapi,
  $ixc,
  _ic,
  _w,
  _ev,
  _tsd
) {
  return function (path, global) {
    if (typeof global === "undefined") {
      if (typeof __GWX_GLOBAL__ === "undefined") global = {};
      else global = __GWX_GLOBAL__;
    }
    if (typeof __WXML_GLOBAL__ === "undefined") {
      __WXML_GLOBAL__ = {};
    }
    __WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
    var e_ = {};
    if (typeof global.entrys === "undefined") global.entrys = {};
    e_ = global.entrys;
    var d_ = {};
    if (typeof global.defines === "undefined") global.defines = {};
    d_ = global.defines;
    var f_ = {};
    if (typeof global.modules === "undefined") global.modules = {};
    f_ = global.modules || {};
    var p_ = {};
    __WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {};
    __WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
    __WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
    var z = __WXML_GLOBAL__.ops_set.$gwx_XC_8 || [];
    function gz$gwx_XC_8_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx_XC_8_1)
        return __WXML_GLOBAL__.ops_cached.$gwx_XC_8_1;
      __WXML_GLOBAL__.ops_cached.$gwx_XC_8_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div market-index data-v-14379b87"]);
        Z([[7], [3, "p"]]);
        Z([3, "__l"]);
        Z([3, "data-v-14379b87"]);
        Z([3, "14379b87-0"]);
        Z(z[2]);
        Z(z[3]);
        Z([3, "14379b87-1"]);
        Z([[7], [3, "e"]]);
        Z(z[2]);
        Z([[7], [3, "c"]]);
        Z([[7], [3, "d"]]);
        Z([3, "r data-v-14379b87"]);
        Z([3, "14379b87-2"]);
        Z(z[8]);
        Z([3, "topBar"]);
        Z([3, "_div data-v-14379b87"]);
        Z([[7], [3, "f"]]);
        Z(z[2]);
        Z([[7], [3, "i"]]);
        Z([[7], [3, "h"]]);
        Z([3, "market-wrapper r data-v-14379b87"]);
        Z([3, "14379b87-3"]);
        Z([[7], [3, "j"]]);
        Z([3, "hq"]);
        Z([[7], [3, "k"]]);
        Z(z[2]);
        Z([[7], [3, "l"]]);
        Z([3, "market-status data-v-14379b87"]);
        Z([3, "14379b87-4"]);
        Z([[7], [3, "m"]]);
        Z([[7], [3, "o"]]);
        Z(z[2]);
        Z([[7], [3, "n"]]);
        Z(z[3]);
        Z([3, "14379b87-5"]);
        Z(z[31]);
      })(__WXML_GLOBAL__.ops_cached.$gwx_XC_8_1);
      return __WXML_GLOBAL__.ops_cached.$gwx_XC_8_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx_XC_8 = z;
    __WXML_GLOBAL__.ops_init.$gwx_XC_8 = true;
    var x = ["./pages/index/market.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx_XC_8_1();
      var fCC = _mz(z, "view", ["class", 0, "data-st-theme", 1], [], e, s, gg);
      var oFC = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 2, "class", 1, "uI", 2],
        [],
        e,
        s,
        gg
      );
      _(fCC, oFC);
      var cGC = _mz(
        z,
        "stock-privacy-dialog",
        ["bind:__l", 5, "class", 1, "uI", 2],
        [],
        e,
        s,
        gg
      );
      _(fCC, cGC);
      var cDC = _v();
      _(fCC, cDC);
      if (_oz(z, 8, e, s, gg)) {
        cDC.wxVkey = 1;
        var oHC = _mz(
          z,
          "top-bar",
          [
            "bind:__l",
            9,
            "bindgetBarHeight",
            1,
            "bindgetTitleHeight",
            2,
            "class",
            3,
            "uI",
            4,
            "uP",
            5,
            "uR",
            6,
          ],
          [],
          e,
          s,
          gg
        );
        _(cDC, oHC);
      }
      var lIC = _n("view");
      _rz(z, lIC, "class", 16, e, s, gg);
      var aJC = _v();
      _(lIC, aJC);
      if (_oz(z, 17, e, s, gg)) {
        aJC.wxVkey = 1;
        var eLC = _mz(
          z,
          "market",
          [
            "bind:__l",
            18,
            "bindonTabScroll",
            1,
            "bindpageInit",
            2,
            "class",
            3,
            "uI",
            4,
            "uP",
            5,
            "uR",
            6,
          ],
          [],
          e,
          s,
          gg
        );
        _(aJC, eLC);
      }
      var tKC = _v();
      _(lIC, tKC);
      if (_oz(z, 25, e, s, gg)) {
        tKC.wxVkey = 1;
        var bMC = _mz(
          z,
          "st-status",
          ["bind:__l", 26, "bindhandleError", 1, "class", 2, "uI", 3, "uP", 4],
          [],
          e,
          s,
          gg
        );
        _(tKC, bMC);
      }
      aJC.wxXCkey = 1;
      aJC.wxXCkey = 3;
      tKC.wxXCkey = 1;
      tKC.wxXCkey = 3;
      _(fCC, lIC);
      var hEC = _v();
      _(fCC, hEC);
      if (_oz(z, 31, e, s, gg)) {
        hEC.wxVkey = 1;
        var oNC = _mz(
          z,
          "privacy-policy-modal",
          ["bind:__l", 32, "bindinput", 1, "class", 2, "uI", 3, "uP", 4],
          [],
          e,
          s,
          gg
        );
        _(hEC, oNC);
      }
      cDC.wxXCkey = 1;
      cDC.wxXCkey = 3;
      hEC.wxXCkey = 1;
      hEC.wxXCkey = 3;
      _(r, fCC);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx_XC_8";
        var main = e_[path].f;
        if (typeof global === "undefined") global = {};
        global.f = $gdc(f_[path], "", 1);
        try {
          main(env, {}, root, global);
          _tsd(root);
        } catch (err) {
          console.log(err);
        }
        g = "";
        return root;
      };
    }
  };
})(
  __g.a,
  __g.b,
  __g.c,
  __g.d,
  __g.e,
  __g.f,
  __g.g,
  __g.h,
  __g.i,
  __g.j,
  __g.k,
  __g.l,
  __g.m,
  __g.n,
  __g.o,
  __g.p,
  __g.q,
  __g.r,
  __g.s,
  __g.t,
  __g.u,
  __g.v,
  __g.w,
  __g.x,
  __g.y,
  __g.z,
  __g.A,
  __g.B,
  __g.C,
  __g.D,
  __g.E,
  __g.F,
  __g.G,
  __g.H,
  __g.I,
  __g.J,
  __g.K,
  __g.L,
  __g.M,
  __g.N,
  __g.O,
  __g.P,
  __g.Q,
  __g.R,
  __g.S,
  __g.T,
  __g.U,
  __g.V,
  __g.W,
  __g.X,
  __g.Y,
  __g.Z,
  __g.aa
);
if (__vd_version_info__.delayedGwx || false) $gwx_XC_8();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/index/market.wxml"] = [
    $gwx_XC_8,
    "./pages/index/market.wxml",
  ];
else
  __wxAppCode__["pages/index/market.wxml"] = $gwx_XC_8(
    "./pages/index/market.wxml"
  );
__wxRoute = "pages/index/market";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/index/market.js";
define(
  "pages/index/market.js",
  function (
    require,
    module,
    exports,
    window,
    document,
    frames,
    self,
    location,
    navigator,
    localStorage,
    history,
    Caches,
    screen,
    alert,
    confirm,
    prompt,
    XMLHttpRequest,
    WebSocket,
    Reporter,
    webkit,
    WeixinJSCore
  ) {
    "use strict";
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
            this.hqBridge.busOn(
              "navigateToApplyIndex",
              this.navigateToApplyIndex
            );
        },
        onHide: function () {
          (this.isHqShow.value = !1),
            this.hqBridge.busOff("navigateToTrade", this.navigateToTrade),
            this.hqBridge.busOff(
              "navigateToApplyIndex",
              this.navigateToApplyIndex
            ),
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
                      (this.scrollHeight =
                        this.containerHeight + this.titleHeight))
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
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
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
              : {
                  l: n.o(e.reloadSubpkg, 32),
                  m: n.p({ type: e.subpkgStatus }),
                },
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
  },
  { isPage: true, isComponent: true, currentFile: "pages/index/market.js" }
);
require("pages/index/market.js");
