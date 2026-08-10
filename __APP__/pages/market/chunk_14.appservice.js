$gwx5_XC_6 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx5_XC_6 || [];
    function gz$gwx5_XC_6_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx5_XC_6_1)
        return __WXML_GLOBAL__.ops_cached.$gwx5_XC_6_1;
      __WXML_GLOBAL__.ops_cached.$gwx5_XC_6_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div etf-hs-index-page data-v-3ae62a90"]);
        Z([[7], [3, "l"]]);
        Z([3, "__l"]);
        Z([3, "data-v-3ae62a90"]);
        Z([3, "3ae62a90-0"]);
        Z([[7], [3, "b"]]);
        Z(z[2]);
        Z(z[3]);
        Z([3, "3ae62a90-1"]);
        Z(z[5]);
        Z([[7], [3, "c"]]);
        Z([[7], [3, "k"]]);
        Z(z[2]);
        Z([3, "r data-v-3ae62a90"]);
        Z([3, "3ae62a90-2"]);
        Z(z[11]);
        Z([3, "discoverDetailPage"]);
      })(__WXML_GLOBAL__.ops_cached.$gwx5_XC_6_1);
      return __WXML_GLOBAL__.ops_cached.$gwx5_XC_6_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx5_XC_6 = z;
    __WXML_GLOBAL__.ops_init.$gwx5_XC_6 = true;
    var x = ["./pages/market/pages/HsIndexEtf.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx5_XC_6_1();
      var hQS = _mz(z, "view", ["class", 0, "data-st-theme", 1], [], e, s, gg);
      var lUS = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 2, "class", 1, "uI", 2],
        [],
        e,
        s,
        gg
      );
      _(hQS, lUS);
      var oRS = _v();
      _(hQS, oRS);
      if (_oz(z, 5, e, s, gg)) {
        oRS.wxVkey = 1;
        var aVS = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 6, "class", 1, "uI", 2, "uP", 3],
          [],
          e,
          s,
          gg
        );
        _(oRS, aVS);
      }
      var cSS = _v();
      _(hQS, cSS);
      if (_oz(z, 10, e, s, gg)) {
        cSS.wxVkey = 1;
      }
      var oTS = _v();
      _(hQS, oTS);
      if (_oz(z, 11, e, s, gg)) {
        oTS.wxVkey = 1;
        var tWS = _mz(
          z,
          "discover-detail-page",
          ["bind:__l", 12, "class", 1, "uI", 2, "uP", 3, "uR", 4],
          [],
          e,
          s,
          gg
        );
        _(oTS, tWS);
      }
      oRS.wxXCkey = 1;
      oRS.wxXCkey = 3;
      cSS.wxXCkey = 1;
      oTS.wxXCkey = 1;
      oTS.wxXCkey = 3;
      _(r, hQS);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx5_XC_6";
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
if (__vd_version_info__.delayedGwx || false) $gwx5_XC_6();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/market/pages/HsIndexEtf.wxml"] = [
    $gwx5_XC_6,
    "./pages/market/pages/HsIndexEtf.wxml",
  ];
else
  __wxAppCode__["pages/market/pages/HsIndexEtf.wxml"] = $gwx5_XC_6(
    "./pages/market/pages/HsIndexEtf.wxml"
  );
__wxRoute = "pages/market/pages/HsIndexEtf";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/market/pages/HsIndexEtf.js";
define(
  "pages/market/pages/HsIndexEtf.js",
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
      r = require("../../../@babel/runtime/helpers/slicedToArray"),
      o = require("../../../common/vendor.js"),
      i = require("../@tencent/stock-base/bridge/mpwzq.js"),
      n =
        (null == (t = null == (e = getApp().globalData.detect) ? void 0 : e.env)
          ? void 0
          : t.IS_PCWEIXIN) || !1,
      a = {
        components: {
          discoverDetailPage: function () {
            return "../../marketSbg/@tencent/stock-hq-etf/components/DiscoverDetail.js";
          },
        },
        provide: function () {
          return {
            hqBridge: new o.HQBridge(this),
            stockBridge: i.StockBridge,
            stockRouter: o.StockRouter,
          };
        },
        data: function () {
          var e =
            (o.wx$1.getWindowInfo && o.wx$1.getWindowInfo()) ||
            o.wx$1.getSystemInfoSync();
          return {
            pageType: "index",
            statusBarHeight: (null == e ? void 0 : e.statusBarHeight) || 0,
            headerHeight: 0,
            scrollTop: 0,
            navBarHeight: 0,
            contentWraperTop: 0,
            isPc: n,
            hideBtn: !1,
            skin: o.wx$1.getStorageSync("user/skin") || "white",
          };
        },
        computed: {
          headerAlpha: function () {
            return 0 === this.headerHeight
              ? 0
              : this.scrollTop > 0
              ? this.scrollTop + this.navBarHeight <=
                (this.contentWraperTop || this.headerHeight)
                ? (this.scrollTop + this.navBarHeight) /
                  (this.contentWraperTop || this.headerHeight)
                : 1
              : 0;
          },
          backgroundColor: function () {
            return "black" === this.skin
              ? "rgba(18, 22, 31, ".concat(this.headerAlpha || 0, ")")
              : "rgba(255, 255, 255, ".concat(this.headerAlpha || 0, ")");
          },
          headerOpacityAlpha: function () {
            return 0 === this.contentWraperTop
              ? 0
              : this.scrollTop > 0
              ? this.scrollTop + this.navBarHeight <= this.contentWraperTop
                ? (this.scrollTop + this.navBarHeight) / this.contentWraperTop
                : 1
              : 0;
          },
        },
        onPageScroll: function (e) {
          var t = this,
            i = e.scrollTop;
          (this.scrollTop = i),
            i < 0 ||
              (o.wx$1
                .createSelectorQuery()
                .in(this.$refs.discoverDetailPage)
                .selectAll(".header-wrapper, .content-wrapper")
                .boundingClientRect(function (e) {
                  if (e) {
                    var o = r(e, 2),
                      i = o[0],
                      n = o[1];
                    if (i) {
                      var a = i.height;
                      t.headerHeight = a;
                    }
                    if (n) {
                      var c = n.top;
                      t.contentWraperTop = Math.max(c, t.contentWraperTop);
                    }
                  }
                })
                .exec(),
              0 === this.navBarHeight &&
                o.wx$1
                  .createSelectorQuery()
                  .in(this)
                  .select("#navBar")
                  .boundingClientRect(function (e) {
                    if (e) {
                      var r = e.height;
                      r > 0 && (t.navBarHeight = r);
                    }
                  })
                  .exec());
        },
        created: function () {
          var e = (getApp().globalData.systemInfo || {}).SDKVersion,
            t = o.gte(e, "3.6.1");
          this.hideBtn = this.isPc && !t;
        },
        methods: {
          goBack: function () {
            o.wx$1.navigateBack();
          },
        },
      };
    Array ||
      (
        o.resolveComponent("mp-privacy-dialog") +
        o.resolveComponent("stock-privacy-dialog") +
        o.resolveComponent("discover-detail-page")
      )();
    var c = o._export_sfc(a, [
      [
        "render",
        function (e, t, r, i, n, a) {
          return o.e(
            { a: e.rootFontSize, b: o.p({ "no-auto": !0 }), c: !n.isPc },
            n.isPc
              ? {}
              : o.e(
                  { d: n.hideBtn },
                  n.hideBtn
                    ? {}
                    : {
                        e: o.n(n.skin),
                        f: o.o(function () {
                          return a.goBack && a.goBack.apply(a, arguments);
                        }, 203),
                      },
                  {
                    g: "".concat(a.headerOpacityAlpha || 0),
                    h: "".concat(n.statusBarHeight, "px"),
                    i: a.backgroundColor,
                  }
                ),
            {
              j: o.sr("discoverDetailPage", "3ae62a90-2"),
              k: o.p({ type: n.pageType }),
              l: n.skin,
            }
          );
        },
      ],
      ["__scopeId", "data-v-3ae62a90"],
    ]);
    (a.__runtimeHooks = 1), wx.createPage(c);
  },
  {
    isPage: true,
    isComponent: true,
    currentFile: "pages/market/pages/HsIndexEtf.js",
  }
);
require("pages/market/pages/HsIndexEtf.js");
