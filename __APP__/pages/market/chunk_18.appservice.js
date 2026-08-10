$gwx5_XC_10 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx5_XC_10 || [];
    function gz$gwx5_XC_10_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx5_XC_10_1)
        return __WXML_GLOBAL__.ops_cached.$gwx5_XC_10_1;
      __WXML_GLOBAL__.ops_cached.$gwx5_XC_10_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div t0-trading-zone-page data-v-49b67da0"]);
        Z([3, "__l"]);
        Z([3, "data-v-49b67da0"]);
        Z([3, "49b67da0-0"]);
        Z([[7], [3, "b"]]);
        Z(z[1]);
        Z(z[2]);
        Z([3, "49b67da0-1"]);
        Z(z[4]);
        Z(z[1]);
        Z([3, "r data-v-49b67da0"]);
        Z([3, "49b67da0-2"]);
        Z([3, "t0Page"]);
      })(__WXML_GLOBAL__.ops_cached.$gwx5_XC_10_1);
      return __WXML_GLOBAL__.ops_cached.$gwx5_XC_10_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx5_XC_10 = z;
    __WXML_GLOBAL__.ops_init.$gwx5_XC_10 = true;
    var x = ["./pages/market/pages/T0TradingZonePage.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx5_XC_10_1();
      var oFT = _n("view");
      _rz(z, oFT, "class", 0, e, s, gg);
      var cHT = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 1, "class", 1, "uI", 2],
        [],
        e,
        s,
        gg
      );
      _(oFT, cHT);
      var fGT = _v();
      _(oFT, fGT);
      if (_oz(z, 4, e, s, gg)) {
        fGT.wxVkey = 1;
        var hIT = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 5, "class", 1, "uI", 2, "uP", 3],
          [],
          e,
          s,
          gg
        );
        _(fGT, hIT);
      }
      var oJT = _mz(
        z,
        "t0-trading-zone-page",
        ["bind:__l", 9, "class", 1, "uI", 2, "uR", 3],
        [],
        e,
        s,
        gg
      );
      _(oFT, oJT);
      fGT.wxXCkey = 1;
      fGT.wxXCkey = 3;
      _(r, oFT);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx5_XC_10";
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
if (__vd_version_info__.delayedGwx || false) $gwx5_XC_10();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/market/pages/T0TradingZonePage.wxml"] = [
    $gwx5_XC_10,
    "./pages/market/pages/T0TradingZonePage.wxml",
  ];
else
  __wxAppCode__["pages/market/pages/T0TradingZonePage.wxml"] = $gwx5_XC_10(
    "./pages/market/pages/T0TradingZonePage.wxml"
  );
__wxRoute = "pages/market/pages/T0TradingZonePage";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/market/pages/T0TradingZonePage.js";
define(
  "pages/market/pages/T0TradingZonePage.js",
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
      o = {
        components: {
          T0TradingZonePage: function () {
            return "../../marketSbg/@tencent/stock-hq-etf/t0Zone/pages/T0TradingZonePage.js";
          },
        },
        provide: function () {
          return { hqBridge: this.hqBridge };
        },
        data: function () {
          return { hqBridge: new e.HQBridge() };
        },
        onPageScroll: function (o) {
          var r,
            n,
            t,
            a = null != (r = null == o ? void 0 : o.scrollTop) ? r : 0;
          null ==
            (t = null == (n = this.$refs.t0Page) ? void 0 : n.setScrollTop) ||
            t.call(n, a),
            e.scrollDepthStat.onScroll(a, this.__route__);
        },
      };
    Array ||
      (
        e.resolveComponent("mp-privacy-dialog") +
        e.resolveComponent("stock-privacy-dialog") +
        e.resolveComponent("T0TradingZonePage")
      )();
    var r = e._export_sfc(o, [
      [
        "render",
        function (o, r, n, t, a, i) {
          return {
            a: o.rootFontSize,
            b: e.p({ "no-auto": !0 }),
            c: e.sr("t0Page", "49b67da0-2"),
          };
        },
      ],
      ["__scopeId", "data-v-49b67da0"],
    ]);
    (o.__runtimeHooks = 1), wx.createPage(r);
  },
  {
    isPage: true,
    isComponent: true,
    currentFile: "pages/market/pages/T0TradingZonePage.js",
  }
);
require("pages/market/pages/T0TradingZonePage.js");
