var e,
  t,
  i,
  n = require("../../../@babel/runtime/helpers/inherits"),
  o = require("../../../@babel/runtime/helpers/createSuper"),
  r = require("../../../@babel/runtime/helpers/classCallCheck"),
  a = require("../../../@babel/runtime/helpers/createClass"),
  s = require("../../../@babel/runtime/helpers/createForOfIteratorHelper"),
  u = Object.defineProperty,
  h = Object.defineProperties,
  l = Object.getOwnPropertyDescriptors,
  c = Object.getOwnPropertySymbols,
  f = Object.prototype.hasOwnProperty,
  g = Object.prototype.propertyIsEnumerable,
  d = function (e, t, i) {
    return t in e
      ? u(e, t, { enumerable: !0, configurable: !0, writable: !0, value: i })
      : (e[t] = i);
  },
  p = function (e, t) {
    for (var i in t || (t = {})) f.call(t, i) && d(e, i, t[i]);
    if (c) {
      var n,
        o = s(c(t));
      try {
        for (o.s(); !(n = o.n()).done; ) {
          i = n.value;
          g.call(t, i) && d(e, i, t[i]);
        }
      } catch (e) {
        o.e(e);
      } finally {
        o.f();
      }
    }
    return e;
  },
  v = function (e, t) {
    return h(e, l(t));
  },
  w = require("../../../common/vendor.js"),
  m = require("../../../mixins/subpkg_reload.js"),
  S = new Date().getTime(),
  k = {
    fproduct_id: 10012,
    fbrowertime: S,
    fwebsessionid: Math.floor(1e6 * Math.random()) + "" + S,
  },
  y = function (e) {
    return Object.assign(
      {},
      v(p({}, k), { fcreatetime: new Date().getTime() }),
      e
    );
  },
  H = function (e) {
    return (k = p(p({}, k), e));
  },
  b = function (e, t) {
    var i = "https://fdc.tenpay.com/fdc/commonClick.do?",
      n = p(p({}, t), e);
    for (var o in n) i += "&".concat(o, "=").concat(n[o]);
    return i;
  },
  T = (function () {
    function e() {
      r(this, e), (this.userinfo = null), (this.wxUserinfo = null);
    }
    return (
      a(e, [
        {
          key: "auth",
          value: function () {
            var e = w.login.isLogin(),
              t = this;
            return e
              ? ((this.userinfo = w.login.getLoginInfo()),
                Promise.resolve(this.userinfo))
              : new Promise(function (e) {
                  w.login.login().then(function () {
                    (t.userinfo = w.login.getLoginInfo()), e(t.userinfo);
                  });
                });
          },
        },
        {
          key: "fetch",
          value: function (e, t) {
            if (!e) throw new Error("no url");
            return (t = t || {}), x(w.wx$1.request, { url: e, data: t });
          },
        },
        {
          key: "getDataWithAuth",
          value: function (e, t) {
            var i = this;
            if (!e) throw new Error("no url");
            return (
              (t = t || {}),
              this.auth()
                .then(function () {
                  var n = i.userinfo,
                    o = p(p({}, n), t),
                    r = {
                      url: e,
                      data: o,
                      method: "POST",
                      header: {
                        "content-type": "application/x-www-form-urlencoded",
                      },
                    };
                  return new Promise(function (e, t) {
                    w.wx$1.request(
                      v(p({}, r), {
                        success: function (t) {
                          var i = t.data || t;
                          e(i);
                        },
                        fail: function (e) {
                          t(e);
                        },
                      })
                    );
                  });
                })
                .then(
                  function (n) {
                    "string" == typeof n &&
                      ((n = n.replace(/\\x.{2}/g, function (e) {
                        var t = parseInt(e.substr(2), 16),
                          i = String.fromCharCode(t);
                        return '"' === i ? "'" : i;
                      })),
                      (n = JSON.parse(n)));
                    var o = n.code || Number(n.retcode);
                    if (-401 === o)
                      return i._handleUserinfoInvalid().then(function () {
                        return i.getDataWithAuth(e, t);
                      });
                    if (0 === o) return n.data || n;
                    throw new Error(n.msg);
                  },
                  function (e) {}
                )
            );
          },
        },
        {
          key: "_handleUserinfoInvalid",
          value: function () {
            return (this.userinfo = null), this.getUserinfo();
          },
        },
        {
          key: "getData",
          value: function (e, t) {
            var i = this,
              n = getApp().globalData.RequestApi;
            return n
              ? n.auth().then(function (n) {
                  return (i.userinfo = n), i.getDataWithAuth(e, t);
                })
              : this.getDataWithAuth(e, t);
          },
        },
        {
          key: "setReportCommonParams",
          value: function (e) {
            H(p(p({}, e), this.userinfo));
          },
        },
        {
          key: "sendReport",
          value: function (e) {
            var t = y(p(p({}, e), this.userinfo)),
              i = b(t);
            x(w.wx$1.request, { url: i });
          },
        },
        {
          key: "setTitle",
          value: function (e) {
            return x(w.wx$1.setNavigationBarTitle, { title: e });
          },
        },
        {
          key: "getNetworkStatus",
          value: function () {
            return x(w.wx$1.getNetworkType).then(function (e) {
              var t = e.networkType;
              return { isConnected: "none" !== t, networkType: t };
            });
          },
        },
        {
          key: "pageScrollTo",
          value: function (e, t) {
            return x(w.wx$1.pageScrollTo, { scrollTop: e, duration: t });
          },
        },
        {
          key: "onNetworkStatusChange",
          value: function () {
            return x(w.wx$1.onNetworkStatusChange);
          },
        },
        {
          key: "getDomSize",
          value: function (e, t) {
            w.wx$1.createSelectorQuery().select(e).boundingClientRect().exec(t);
          },
        },
        {
          key: "getWindowHeight",
          value: function () {
            return getApp().globalData.device.windowHeight;
          },
        },
        {
          key: "getStorage",
          value: function (e) {
            return x(w.wx$1.getStorage, { key: e });
          },
        },
        {
          key: "getStorageSync",
          value: function (e) {
            return w.wx$1.getStorageSync(e);
          },
        },
        {
          key: "setStorage",
          value: function (e, t) {
            return x(w.wx$1.setStorage, { key: e, data: t });
          },
        },
        {
          key: "navigateTo",
          value: function (e, t) {
            if (t) {
              var i = [];
              for (var n in t) i.push("".concat(n, "=").concat(t[n]));
              e += "?".concat(i.join("&"));
            }
            return x(w.wx$1.navigateTo, { url: e });
          },
        },
        {
          key: "stopPullDownRefresh",
          value: function () {
            return x(w.wx$1.stopPullDownRefresh);
          },
        },
        { key: "FdcReport", value: function () {} },
        { key: "reportData", value: function (e, t) {} },
      ]),
      e
    );
  })();
function x(e, t) {
  return (
    (t = t || {}),
    new Promise(function (i, n) {
      e(
        v(p({}, t), {
          success: function (e) {
            var t = e.data || e;
            i(t);
          },
          fail: function (e) {
            n(e);
          },
        })
      );
    })
  );
}
i = T || T;
var I = null,
  B =
    (null === I &&
      (I = new ((function (e) {
        n(s, i);
        var t = o(s);
        function s() {
          return r(this, s), t.call(this);
        }
        return a(s);
      })())()),
    I),
  P =
    (null == (t = null == (e = getApp().globalData.detect) ? void 0 : e.env)
      ? void 0
      : t.IS_PCWEIXIN) || !1,
  $ = {
    mixins: [m.SubpkgReloadMixin],
    components: {
      TopBar: function () {
        return "../topbar/index.js";
      },
      information: function () {
        return "../../information/main.js";
      },
    },
    provide: function () {
      return {
        hqBridge: this.hqBridge,
        wzqConfig: this.wzqConfig,
        stockBridge: w.StockBridge,
      };
    },
    data: function () {
      return {
        skin: w.wx$1.getStorageSync("user/skin"),
        tabIndex: 1,
        hqBridge: new w.HQBridge(this),
        wzqConfig: { Helper: B },
        fromBrief: !1,
        videoShareInfo: null,
        isPageShow: !1,
        topBarHeight: 0,
        titleHeight: 44,
        hideTitle: "init",
        scrollTop: 0,
        containerHeight: 0,
        scrollHeight: 0,
        hideLoading: !1,
        subpkgName: "pages/information/",
      };
    },
    watch: {
      hideTitle: function (e) {
        this.mpRealTopBarHeight =
          "init" === e || !1 === e
            ? this.topBarHeight
            : this.topBarHeight - this.titleHeight;
      },
    },
    onTabItemTap: function () {
      w.Request.reportMTAData({ eventName: "xcx_news_click" });
    },
    onLoad: function (e) {
      w.wx$1.setNavigationBarTitle({ title: "腾讯自选股" }),
        e &&
          (void 0 !== e.tabIndex && (this.tabIndex = e.tabIndex),
          (this.fromBrief = e.fromBrief || !1));
    },
    onShow: function () {
      var e = this;
      if (!P || !this.isPageShow) {
        var t = w.wx$1.getStorageSync("user/skin");
        t !== this.skin && (this.skin = t), (this.isPageShow = !0);
        try {
          this.$refs.information
            ? this.$refs.information && this.$refs.information.onMpPageShow()
            : setTimeout(function () {
                e.isPageShow &&
                  e.$refs.information &&
                  e.$refs.information.onMpPageShow();
              }, 300);
        } catch (e) {}
      }
    },
    onHide: function () {
      if (!P) {
        this.isPageShow = !1;
        try {
          this.$refs.information && this.$refs.information.onMpPageHide();
        } catch (e) {}
      }
    },
    created: function () {
      this.getAuth(), (this.lastScrollTop = -1);
    },
    mounted: function () {
      var e = this;
      this.setContainerHeight(),
        w.wx$1.onWindowResize(function (t) {
          t && t.size && e.setContainerHeight();
        });
    },
    onShareAppMessage: function (e) {
      var t = this;
      return "button" === e.from
        ? this.videoShareInfo && this.videoShareInfo.news_id
          ? this.formatVideoShareData()
          : new Promise(function (e) {
              var i = setTimeout(function () {
                t.videoShareInfo &&
                  t.videoShareInfo.news_id &&
                  (clearTimeout(i), e(t.formatVideoShareData()));
              }, 300);
            })
        : { path: "pages/index/information/main" };
    },
    methods: {
      formatVideoShareData: function () {
        if (this.videoShareInfo && this.videoShareInfo.news_id) {
          var e = this.videoShareInfo,
            t = e.news_title,
            i = e.focus_img,
            n = e.isLive,
            o = e.shareUrl;
          return {
            title: "【"
              .concat(n ? "直播" : "视频", "】")
              .concat(decodeURIComponent((t || "").replace(/%/g, "%25"))),
            imageUrl: i,
            path: o,
            success: function (e) {
              this.videoShareInfo = null;
            },
            fail: function (e) {
              this.videoShareInfo = null;
            },
          };
        }
      },
      pageInit: function () {
        (this.hideLoading = !0), this.onPageSubpkgMounted();
      },
      setContainerHeight: function () {
        var e = this,
          t = setTimeout(function () {
            if (e.topBarHeight <= 0)
              try {
                var i = (e.$refs.topBar || {}).getSafeArea;
                "function" == typeof i && i();
              } catch (e) {}
            var n = (
                (w.wx$1.getWindowInfo && w.wx$1.getWindowInfo()) ||
                w.wx$1.getSystemInfoSync()
              ).windowHeight,
              o = void 0 === n ? 0 : n;
            e.windowHeight !== o && (e.windowHeight = o),
              e.topBarHeight > 0
                ? ((e.containerHeight = e.windowHeight - e.topBarHeight),
                  (e.scrollHeight = e.windowHeight - e.topBarHeight))
                : e.setContainerHeight(),
              clearTimeout(t);
          }, 100);
      },
      onMpScroll: function (e) {
        var t = e.target || {},
          i = t.scrollTop,
          n = t.scrollHeight;
        if (((this.scrollTop = i), !(i > n - this.scrollHeight || i < 0))) {
          if (i < 30 && !1 !== this.hideTitle)
            return (
              (this.hideTitle = !1),
              (this.scrollHeight = this.containerHeight),
              void (this.lastScrollTop = -1)
            );
          if (-1 !== this.lastScrollTop) {
            var o = i - this.lastScrollTop;
            return o >= 38
              ? ((this.lastScrollTop = -1),
                void (
                  !0 !== this.hideTitle &&
                  ((this.hideTitle = !0),
                  (this.scrollHeight = this.containerHeight + this.titleHeight))
                ))
              : o <= -38
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
      setBarHeight: function (e) {
        this.topBarHeight = e;
      },
      setTitleHeight: function (e) {
        this.titleHeight = e;
      },
      getAuth: function () {
        var e = w.login.getLoginInfo() || {},
          t = e.qluin,
          i = e.qlskey;
        t &&
          i &&
          (this.userinfo = {
            qlskey: i,
            qluin: t,
            qlappid: "wx4ffb369b6881ee5e",
            appid: "wx4ffb369b6881ee5e",
            openid: t,
            fskey: i,
          });
      },
      videoShareClick: function (e) {
        this.videoShareInfo = e;
      },
    },
  };
Array ||
  (
    w.resolveComponent("mp-privacy-dialog") +
    w.resolveComponent("stock-privacy-dialog") +
    w.resolveComponent("TopBar") +
    w.resolveComponent("information") +
    w.resolveComponent("st-status")
  )();
var C = w._export_sfc($, [
  [
    "render",
    function (e, t, i, n, o, r) {
      return w.e(
        {
          a: e.rootFontSize,
          b: w.p({ "no-auto": !0 }),
          c: w.sr("topBar", "e5e1da00-2"),
          d: w.o(r.setBarHeight, 35),
          e: w.o(r.setTitleHeight, 36),
          f: w.p({
            from: "discover",
            skin: o.skin,
            "is-show": o.isPageShow,
            "hide-title": o.hideTitle,
          }),
          g: o.topBarHeight > 0,
        },
        o.topBarHeight > 0
          ? w.e(
              { h: e.subpkgReady },
              e.subpkgReady
                ? {
                    i: w.sr("information", "e5e1da00-3"),
                    j: w.o(r.videoShareClick, 37),
                    k: w.o(r.onMpScroll, 38),
                    l: w.o(r.pageInit, 39),
                    m: w.p({
                      tabIndex: o.tabIndex,
                      userInfo: e.userinfo,
                      skin: o.skin,
                      fromBrief: o.fromBrief,
                      mpRealTopBarHeight: e.mpRealTopBarHeight,
                      topBarHeight: o.topBarHeight,
                      scrollHeight: o.scrollHeight,
                      isPageShow: o.isPageShow,
                    }),
                  }
                : {},
              { n: !o.hideLoading },
              o.hideLoading
                ? {}
                : {
                    o: w.o(e.reloadSubpkg, 40),
                    p: w.p({ type: e.subpkgStatus }),
                  }
            )
          : {},
        { q: w.n(o.skin), r: o.skin }
      );
    },
  ],
  ["__scopeId", "data-v-e5e1da00"],
]);
($.__runtimeHooks = 2), wx.createPage(C);
