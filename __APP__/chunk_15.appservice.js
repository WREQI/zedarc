$gwx_XC_7 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx_XC_7 || [];
    function gz$gwx_XC_7_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx_XC_7_1)
        return __WXML_GLOBAL__.ops_cached.$gwx_XC_7_1;
      __WXML_GLOBAL__.ops_cached.$gwx_XC_7_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([
          [4],
          [
            [5],
            [[5], [[5], [1, "container"]], [1, "data-v-e5e1da00"]],
            [[7], [3, "q"]],
          ],
        ]);
        Z([[7], [3, "r"]]);
        Z([3, "__l"]);
        Z([3, "data-v-e5e1da00"]);
        Z([3, "e5e1da00-0"]);
        Z([[7], [3, "b"]]);
        Z(z[2]);
        Z(z[3]);
        Z([3, "e5e1da00-1"]);
        Z(z[5]);
        Z([[7], [3, "f"]]);
        Z(z[2]);
        Z([[7], [3, "d"]]);
        Z([[7], [3, "e"]]);
        Z([3, "top-bar r data-v-e5e1da00"]);
        Z([3, "e5e1da00-2"]);
        Z(z[10]);
        Z([3, "topBar"]);
        Z([[7], [3, "g"]]);
        Z([3, "_div data-v-e5e1da00"]);
        Z([[7], [3, "h"]]);
        Z(z[2]);
        Z([[7], [3, "k"]]);
        Z([[7], [3, "l"]]);
        Z([[7], [3, "j"]]);
        Z([3, "r data-v-e5e1da00"]);
        Z([3, "e5e1da00-3"]);
        Z([[7], [3, "m"]]);
        Z([3, "information"]);
        Z([[7], [3, "n"]]);
        Z(z[2]);
        Z([[7], [3, "o"]]);
        Z([3, "information-status data-v-e5e1da00"]);
        Z([3, "e5e1da00-4"]);
        Z([[7], [3, "p"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx_XC_7_1);
      return __WXML_GLOBAL__.ops_cached.$gwx_XC_7_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx_XC_7 = z;
    __WXML_GLOBAL__.ops_init.$gwx_XC_7 = true;
    var x = ["./pages/index/information/main.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx_XC_7_1();
      var cZB = _mz(z, "view", ["class", 0, "data-st-theme", 1], [], e, s, gg);
      var o4B = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 2, "class", 1, "uI", 2],
        [],
        e,
        s,
        gg
      );
      _(cZB, o4B);
      var h1B = _v();
      _(cZB, h1B);
      if (_oz(z, 5, e, s, gg)) {
        h1B.wxVkey = 1;
        var l5B = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 6, "class", 1, "uI", 2, "uP", 3],
          [],
          e,
          s,
          gg
        );
        _(h1B, l5B);
      }
      var o2B = _v();
      _(cZB, o2B);
      if (_oz(z, 10, e, s, gg)) {
        o2B.wxVkey = 1;
        var a6B = _mz(
          z,
          "top-bar",
          [
            "bind:__l",
            11,
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
        _(o2B, a6B);
      }
      var c3B = _v();
      _(cZB, c3B);
      if (_oz(z, 18, e, s, gg)) {
        c3B.wxVkey = 1;
        var t7B = _n("view");
        _rz(z, t7B, "class", 19, e, s, gg);
        var e8B = _v();
        _(t7B, e8B);
        if (_oz(z, 20, e, s, gg)) {
          e8B.wxVkey = 1;
          var o0B = _mz(
            z,
            "information",
            [
              "bind:__l",
              21,
              "bindonMpScroll",
              1,
              "bindpageInit",
              2,
              "bindvideoShareClick",
              3,
              "class",
              4,
              "uI",
              5,
              "uP",
              6,
              "uR",
              7,
            ],
            [],
            e,
            s,
            gg
          );
          _(e8B, o0B);
        }
        var b9B = _v();
        _(t7B, b9B);
        if (_oz(z, 29, e, s, gg)) {
          b9B.wxVkey = 1;
          var xAC = _mz(
            z,
            "st-status",
            [
              "bind:__l",
              30,
              "bindhandleError",
              1,
              "class",
              2,
              "uI",
              3,
              "uP",
              4,
            ],
            [],
            e,
            s,
            gg
          );
          _(b9B, xAC);
        }
        e8B.wxXCkey = 1;
        e8B.wxXCkey = 3;
        b9B.wxXCkey = 1;
        b9B.wxXCkey = 3;
        _(c3B, t7B);
      }
      h1B.wxXCkey = 1;
      h1B.wxXCkey = 3;
      o2B.wxXCkey = 1;
      o2B.wxXCkey = 3;
      c3B.wxXCkey = 1;
      c3B.wxXCkey = 3;
      _(r, cZB);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx_XC_7";
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
if (__vd_version_info__.delayedGwx || false) $gwx_XC_7();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/index/information/main.wxml"] = [
    $gwx_XC_7,
    "./pages/index/information/main.wxml",
  ];
else
  __wxAppCode__["pages/index/information/main.wxml"] = $gwx_XC_7(
    "./pages/index/information/main.wxml"
  );
__wxRoute = "pages/index/information/main";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/index/information/main.js";
define(
  "pages/index/information/main.js",
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
          ? u(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: i,
            })
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
                w.wx$1
                  .createSelectorQuery()
                  .select(e)
                  .boundingClientRect()
                  .exec(t);
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
                ? this.$refs.information &&
                  this.$refs.information.onMpPageShow()
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
                      (this.scrollHeight =
                        this.containerHeight + this.titleHeight))
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
  },
  {
    isPage: true,
    isComponent: true,
    currentFile: "pages/index/information/main.js",
  }
);
require("pages/index/information/main.js");
