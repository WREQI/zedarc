$gwx4_XC_6 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx4_XC_6 || [];
    function gz$gwx4_XC_6_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx4_XC_6_1)
        return __WXML_GLOBAL__.ops_cached.$gwx4_XC_6_1;
      __WXML_GLOBAL__.ops_cached.$gwx4_XC_6_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([
          [4],
          [
            [5],
            [
              [5],
              [[5], [[5], [1, "detail-page-rotate"]], [1, "data-v-e7badb50"]],
              [
                [2, "&&"],
                [[7], [3, "r"]],
                [1, "skin-black"],
              ],
            ],
            [
              [2, "&&"],
              [[7], [3, "s"]],
              [1, "padding-bottom"],
            ],
          ],
        ]);
        Z([[7], [3, "q"]]);
        Z([3, "__l"]);
        Z([3, "data-v-e7badb50"]);
        Z([3, "e7badb50-0"]);
        Z([[7], [3, "b"]]);
        Z(z[2]);
        Z(z[3]);
        Z([3, "e7badb50-1"]);
        Z(z[5]);
        Z([[7], [3, "c"]]);
        Z(z[2]);
        Z([[7], [3, "g"]]);
        Z([[7], [3, "e"]]);
        Z([[7], [3, "f"]]);
        Z([3, "r data-v-e7badb50"]);
        Z([3, "e7badb50-2"]);
        Z([[7], [3, "h"]]);
        Z([3, "quotation"]);
        Z([[7], [3, "i"]]);
        Z(z[2]);
        Z([[7], [3, "n"]]);
        Z([[7], [3, "k"]]);
        Z([[7], [3, "j"]]);
        Z([[7], [3, "l"]]);
        Z([[7], [3, "m"]]);
        Z([[7], [3, "o"]]);
        Z(z[3]);
        Z([3, "e7badb50-3"]);
        Z([[7], [3, "p"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx4_XC_6_1);
      return __WXML_GLOBAL__.ops_cached.$gwx4_XC_6_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx4_XC_6 = z;
    __WXML_GLOBAL__.ops_init.$gwx4_XC_6 = true;
    var x = ["./pages/quote/rotateDetail.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx4_XC_6_1();
      var tYQ = _mz(z, "view", ["class", 0, "data-st-theme", 1], [], e, s, gg);
      var x3Q = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 2, "class", 1, "uI", 2],
        [],
        e,
        s,
        gg
      );
      _(tYQ, x3Q);
      var eZQ = _v();
      _(tYQ, eZQ);
      if (_oz(z, 5, e, s, gg)) {
        eZQ.wxVkey = 1;
        var o4Q = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 6, "class", 1, "uI", 2, "uP", 3],
          [],
          e,
          s,
          gg
        );
        _(eZQ, o4Q);
      }
      var b1Q = _v();
      _(tYQ, b1Q);
      if (_oz(z, 10, e, s, gg)) {
        b1Q.wxVkey = 1;
        var f5Q = _mz(
          z,
          "mini-quotation",
          [
            "bind:__l",
            11,
            "bindcloseLandscape",
            1,
            "bindonInitData",
            2,
            "bindonUpdateData",
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
        _(b1Q, f5Q);
      }
      var o2Q = _v();
      _(tYQ, o2Q);
      if (_oz(z, 19, e, s, gg)) {
        o2Q.wxVkey = 1;
        var c6Q = _mz(
          z,
          "chart-wrapper",
          [
            "bind:__l",
            20,
            "bindcloseLandscape",
            1,
            "bindgetExtraInfo",
            2,
            "bindgetMarketState",
            3,
            "bindgetUSPanData",
            4,
            "bindgetZDP",
            5,
            "bindswitchChart",
            6,
            "class",
            7,
            "uI",
            8,
            "uP",
            9,
          ],
          [],
          e,
          s,
          gg
        );
        _(o2Q, c6Q);
      }
      eZQ.wxXCkey = 1;
      eZQ.wxXCkey = 3;
      b1Q.wxXCkey = 1;
      b1Q.wxXCkey = 3;
      o2Q.wxXCkey = 1;
      o2Q.wxXCkey = 3;
      _(r, tYQ);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx4_XC_6";
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
if (__vd_version_info__.delayedGwx || false) $gwx4_XC_6();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/quote/rotateDetail.wxml"] = [
    $gwx4_XC_6,
    "./pages/quote/rotateDetail.wxml",
  ];
else
  __wxAppCode__["pages/quote/rotateDetail.wxml"] = $gwx4_XC_6(
    "./pages/quote/rotateDetail.wxml"
  );
__wxRoute = "pages/quote/rotateDetail";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/quote/rotateDetail.js";
define(
  "pages/quote/rotateDetail.js",
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
    var t = require("../../@babel/runtime/helpers/createForOfIteratorHelper"),
      e = Object.defineProperty,
      a = Object.defineProperties,
      n = Object.getOwnPropertyDescriptors,
      o = Object.getOwnPropertySymbols,
      i = Object.prototype.hasOwnProperty,
      r = Object.prototype.propertyIsEnumerable,
      s = function (t, a, n) {
        return a in t
          ? e(t, a, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n,
            })
          : (t[a] = n);
      },
      c = function (e, a) {
        for (var n in a || (a = {})) i.call(a, n) && s(e, n, a[n]);
        if (o) {
          var c,
            u = t(o(a));
          try {
            for (u.s(); !(c = u.n()).done; ) {
              n = c.value;
              r.call(a, n) && s(e, n, a[n]);
            }
          } catch (t) {
            u.e(t);
          } finally {
            u.f();
          }
        }
        return e;
      },
      u = require("../../common/vendor.js"),
      d = require("@tencent/stock-hq-data/index.js"),
      l = require("../../utils/hqWSHelper.js"),
      h = getApp().globalData,
      p = {
        provide: function () {
          return { hqBridge: this.hqBridge, hqWSHelper: l.hqWSHelper };
        },
        components: {
          MiniQuotation: function () {
            return "./@tencent/stock-detail-quotation/Quotation.js".then(
              function (t) {
                return t.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0b2NrLWRldGFpbC1xdW90YXRpb24vUXVvdGF0aW9uLnZ1ZQ;
              }
            );
          },
          ChartWrapper: function () {
            return "./components/ChartWrapper.js".then(function (t) {
              return t.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvc3JjL3BhZ2VzL3F1b3RlL2NvbXBvbmVudHMvQ2hhcnRXcmFwcGVyLnZ1ZQ;
            });
          },
        },
        data: function () {
          return {
            width: 0,
            height: 0,
            hqBridge: new u.HQBridge(),
            skin: "white",
            dataReady: !1,
            landscape: !0,
            stockName: "",
            stockOverView: {},
            query: null,
            tabkey: "",
            isPageHidden: !1,
          };
        },
        computed: {
          market: function () {
            var t, e, a;
            return (
              (null == (t = this.query) ? void 0 : t.market) ||
              ((
                null == (a = null == (e = this.query) ? void 0 : e.scode)
                  ? void 0
                  : a.startsWith("5")
              )
                ? 1
                : 0)
            );
          },
          scode: function () {
            var t;
            return null == (t = this.query) ? void 0 : t.scode;
          },
          stockType: function () {
            var t, e;
            return null ==
              (e = null == (t = this.stockOverView) ? void 0 : t.secuInfo)
              ? void 0
              : e.stocktype;
          },
          isIndex: function () {
            return d.utils.isIndex(this.stockType);
          },
          isPlate: function () {
            return d.utils.isHSPlate(this.market);
          },
          queryTabKey: function () {
            return this.query ? this.query.tabkey : "";
          },
          formattedCode: function () {
            return d.utils.trimScode(this.scode);
          },
        },
        created: function () {
          var t = this;
          h.setSkin(function (e) {
            t.skin = "black" === e ? "black" : "white";
          });
        },
        onLoad: function (t) {
          var e = this;
          t.wxParamData &&
            Object.assign(t, Tool.handleWXParamData(t.wxParamData)),
            setTimeout(function () {
              var a =
                  (u.wx$1.getWindowInfo && u.wx$1.getWindowInfo()) ||
                  u.wx$1.getSystemInfoSync(),
                n = a.screenWidth,
                o = a.screenHeight;
              (e.width = Math.max(o, n)),
                (e.height = Math.min(n, o)),
                (e.query = t),
                (e.tabkey = e.query.tabkey);
            }, 500);
        },
        onUnload: function () {
          this.isPageHidden = !0;
          var t = getCurrentPages(),
            e = t[t.length - 2];
          null == e || e.setData({ needRepaintChart: !0, tabkey: this.tabkey });
        },
        onHide: function () {
          this.isPageHidden = !0;
        },
        onShow: function () {
          this.isPageHidden = !1;
        },
        methods: {
          onInitData: function (t) {
            (this.stockName = t.secu_info.stk_name),
              this.handleCallback(t),
              (this.dataReady = !0);
          },
          onUpdateData: function (t) {
            this.handleCallback(t);
          },
          handleCallback: function (t) {
            var e, o;
            this.stockOverView =
              ((e = c(c(c({}, this.stockOverView), t.secu_quote), t.secu_info)),
              (o = { secuInfo: t.secu_info, fiveTrans: t.five_trans }),
              a(e, n(o)));
          },
          getMarketState: function (t) {
            var e;
            null == (e = this.$refs.quotation) || e.getMarketState(t);
          },
          getExtraInfo: function (t) {
            var e;
            null == (e = this.$refs.quotation) || e.getExtraInfo(t);
          },
          getUSPanData: function (t) {
            var e;
            null == (e = this.$refs.quotation) || e.getUSPanData(t);
          },
          getZDP: function (t) {
            var e;
            null == (e = this.$refs.quotation) || e.getZDP(t);
          },
          getPlateIntro: function (t) {
            this.plateIntro = t;
          },
          closeLandscape: function () {
            var t = getApp().globalData.systemInfo || {},
              e = t.SDKVersion,
              a = t.system.indexOf("iOS") >= 0,
              n = u.dist.versionCompare.isVersionLower(e, "2.31.1");
            a && n
              ? u.wx$1.redirectTo({
                  url: "/pages/quote/empty",
                  fail: function (t) {},
                })
              : getCurrentPages().length > 1
              ? u.wx$1.navigateBack()
              : u.wx$1.switchTab({ url: "/pages/index/index" });
          },
          switchChart: function (t) {
            this.tabkey = t;
          },
        },
        onShareAppMessage: function () {
          return {
            title: ""
              .concat(this.stockName, "(")
              .concat(this.formattedCode, ")"),
            path: "/pages/quote/rotateDetail?market="
              .concat(this.market, "&scode=")
              .concat(this.scode),
            mtaParams: { stockid: d.utils.getSymbol(this.market, this.scode) },
          };
        },
        onShareTimeline: function () {
          return {
            title: ""
              .concat(this.stockName, "(")
              .concat(this.formattedCode, ")"),
            path: "/pages/quote/rotateDetail?market="
              .concat(this.market, "&scode=")
              .concat(this.scode),
            mtaParams: { stockid: d.utils.getSymbol(this.market, this.scode) },
          };
        },
      };
    Array ||
      (
        u.resolveComponent("mp-privacy-dialog") +
        u.resolveComponent("stock-privacy-dialog") +
        u.resolveComponent("MiniQuotation") +
        u.resolveComponent("ChartWrapper")
      )();
    var f = u._export_sfc(p, [
      [
        "render",
        function (t, e, a, n, o, i) {
          return u.e(
            { a: t.rootFontSize, b: u.p({ "no-auto": !0 }), c: o.query },
            o.query
              ? {
                  d: u.sr("quotation", "e7badb50-2"),
                  e: u.o(i.onInitData, 190),
                  f: u.o(i.onUpdateData, 191),
                  g: u.o(i.closeLandscape, 192),
                  h: u.p({
                    landscape: o.landscape,
                    skin: o.skin,
                    market: i.market,
                    scode: i.scode,
                    "is-hidden": o.isPageHidden,
                  }),
                }
              : {},
            { i: o.dataReady },
            o.dataReady
              ? {
                  j: u.o(i.getMarketState, 193),
                  k: u.o(i.getExtraInfo, 194),
                  l: u.o(i.getUSPanData, 195),
                  m: u.o(i.getZDP, 196),
                  n: u.o(i.closeLandscape, 197),
                  o: u.o(i.switchChart, 198),
                  p: u.p({
                    landscape: o.landscape,
                    skin: o.skin,
                    market: i.market,
                    scode: i.scode,
                    quote: o.stockOverView,
                    stockType: i.stockType,
                    queryTabKey: i.queryTabKey,
                  }),
                }
              : {},
            {
              q: o.skin,
              r: "black" === o.skin ? 1 : "",
              s: o.dataReady ? 1 : "",
            }
          );
        },
      ],
      ["__scopeId", "data-v-e7badb50"],
    ]);
    (p.__runtimeHooks = 6), wx.createPage(f);
  },
  {
    isPage: true,
    isComponent: true,
    currentFile: "pages/quote/rotateDetail.js",
  }
);
require("pages/quote/rotateDetail.js");
