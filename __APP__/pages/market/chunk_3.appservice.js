$gwx5_XC_13 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx5_XC_13 || [];
    function gz$gwx5_XC_13_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx5_XC_13_1)
        return __WXML_GLOBAL__.ops_cached.$gwx5_XC_13_1;
      __WXML_GLOBAL__.ops_cached.$gwx5_XC_13_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div etf-main-page data-v-73f91289"]);
        Z([3, "__l"]);
        Z([3, "data-v-73f91289"]);
        Z([3, "73f91289-0"]);
        Z([[7], [3, "b"]]);
        Z(z[1]);
        Z(z[2]);
        Z([3, "73f91289-1"]);
        Z(z[4]);
        Z([[7], [3, "d"]]);
        Z(z[1]);
        Z([3, "r data-v-73f91289"]);
        Z([3, "73f91289-2"]);
        Z(z[9]);
        Z([3, "etfPage"]);
      })(__WXML_GLOBAL__.ops_cached.$gwx5_XC_13_1);
      return __WXML_GLOBAL__.ops_cached.$gwx5_XC_13_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx5_XC_13 = z;
    __WXML_GLOBAL__.ops_init.$gwx5_XC_13 = true;
    var x = ["./pages/market/pages/ETFPage.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx5_XC_13_1();
      var cYT = _n("view");
      _rz(z, cYT, "class", 0, e, s, gg);
      var a2T = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 1, "class", 1, "uI", 2],
        [],
        e,
        s,
        gg
      );
      _(cYT, a2T);
      var oZT = _v();
      _(cYT, oZT);
      if (_oz(z, 4, e, s, gg)) {
        oZT.wxVkey = 1;
        var t3T = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 5, "class", 1, "uI", 2, "uP", 3],
          [],
          e,
          s,
          gg
        );
        _(oZT, t3T);
      }
      var l1T = _v();
      _(cYT, l1T);
      if (_oz(z, 9, e, s, gg)) {
        l1T.wxVkey = 1;
        var e4T = _mz(
          z,
          "e-t-f-main-page",
          ["bind:__l", 10, "class", 1, "uI", 2, "uP", 3, "uR", 4],
          [],
          e,
          s,
          gg
        );
        _(l1T, e4T);
      }
      oZT.wxXCkey = 1;
      oZT.wxXCkey = 3;
      l1T.wxXCkey = 1;
      l1T.wxXCkey = 3;
      _(r, cYT);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx5_XC_13";
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
if (__vd_version_info__.delayedGwx || false) $gwx5_XC_13();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/market/pages/ETFPage.wxml"] = [
    $gwx5_XC_13,
    "./pages/market/pages/ETFPage.wxml",
  ];
else
  __wxAppCode__["pages/market/pages/ETFPage.wxml"] = $gwx5_XC_13(
    "./pages/market/pages/ETFPage.wxml"
  );
__wxRoute = "pages/market/pages/ETFPage";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/market/pages/ETFPage.js";
define(
  "pages/market/pages/ETFPage.js",
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
    var e = require("../../../common/vendor.js"),
      t = require("../@tencent/stock-base/bridge/mpwzq.js"),
      o = {
        components: {
          ETFMainPage: function () {
            return "../../marketSbg/@tencent/stock-hq-etf/ETFMainPage.js";
          },
        },
        provide: function () {
          return {
            hqBridge: this.hqBridge,
            stockBridge: t.StockBridge,
            stockRouter: e.StockRouter,
          };
        },
        data: function () {
          return { hqBridge: new e.HQBridge(), hasReport: !1 };
        },
        onPageScroll: function () {
          this.hasReport ||
            ((this.hasReport = !0),
            this.hqBridge.report("hq.etfpage.page_scroll"));
        },
        onPullDownRefresh: function () {
          this.$refs.etfPage && this.$refs.etfPage.tabActivated(),
            this.$nextTick(function () {
              e.wx$1.stopPullDownRefresh();
            });
        },
        onShow: function () {
          this.$refs.etfPage && this.$refs.etfPage.tabActivated();
        },
        onHide: function () {
          this.$refs.etfPage && this.$refs.etfPage.tabDeactivated();
        },
      };
    Array ||
      (
        e.resolveComponent("mp-privacy-dialog") +
        e.resolveComponent("stock-privacy-dialog") +
        e.resolveComponent("ETFMainPage")
      )();
    var r = e._export_sfc(o, [
      [
        "render",
        function (t, o, r, n, i, s) {
          return {
            a: t.rootFontSize,
            b: e.p({ "no-auto": !0 }),
            c: e.sr("etfPage", "73f91289-2"),
            d: e.p({
              "show-e-t-f-bar": !0,
              "show-e-t-f-bulletin": !1,
              "show-quick-entry": !0,
            }),
          };
        },
      ],
      ["__scopeId", "data-v-73f91289"],
    ]);
    (o.__runtimeHooks = 1), wx.createPage(r);
  },
  {
    isPage: true,
    isComponent: true,
    currentFile: "pages/market/pages/ETFPage.js",
  }
);
require("pages/market/pages/ETFPage.js");
