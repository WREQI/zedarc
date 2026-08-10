$gwx5_XC_2 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx5_XC_2 || [];
    function gz$gwx5_XC_2_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx5_XC_2_1)
        return __WXML_GLOBAL__.ops_cached.$gwx5_XC_2_1;
      __WXML_GLOBAL__.ops_cached.$gwx5_XC_2_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "__l"]);
        Z([3, "r"]);
        Z([3, "b489d54a-0"]);
        Z([3, "globalMarketPageRef"]);
        Z(z[0]);
        Z([3, "b489d54a-1"]);
        Z([[7], [3, "c"]]);
        Z(z[0]);
        Z([3, "b489d54a-2"]);
        Z(z[6]);
      })(__WXML_GLOBAL__.ops_cached.$gwx5_XC_2_1);
      return __WXML_GLOBAL__.ops_cached.$gwx5_XC_2_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx5_XC_2 = z;
    __WXML_GLOBAL__.ops_init.$gwx5_XC_2 = true;
    var x = ["./pages/market/pages/ETFPage/globalMarket.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx5_XC_2_1();
      var a4R = _mz(
        z,
        "global-market-page",
        ["bind:__l", 0, "class", 1, "uI", 1, "uR", 2],
        [],
        e,
        s,
        gg
      );
      _(r, a4R);
      var t5R = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 4, "uI", 1],
        [],
        e,
        s,
        gg
      );
      _(r, t5R);
      var l3R = _v();
      _(r, l3R);
      if (_oz(z, 6, e, s, gg)) {
        l3R.wxVkey = 1;
        var e6R = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 7, "uI", 1, "uP", 2],
          [],
          e,
          s,
          gg
        );
        _(l3R, e6R);
      }
      l3R.wxXCkey = 1;
      l3R.wxXCkey = 3;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx5_XC_2";
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
if (__vd_version_info__.delayedGwx || false) $gwx5_XC_2();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/market/pages/ETFPage/globalMarket.wxml"] = [
    $gwx5_XC_2,
    "./pages/market/pages/ETFPage/globalMarket.wxml",
  ];
else
  __wxAppCode__["pages/market/pages/ETFPage/globalMarket.wxml"] = $gwx5_XC_2(
    "./pages/market/pages/ETFPage/globalMarket.wxml"
  );
__wxRoute = "pages/market/pages/ETFPage/globalMarket";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/market/pages/ETFPage/globalMarket.js";
define(
  "pages/market/pages/ETFPage/globalMarket.js",
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
    var e = require("../../../../common/vendor.js"),
      o = require("../../@tencent/stock-base/bridge/mpwzq.js"),
      t = {
        name: "GlobalMarketRoutePage",
        components: {
          GlobalMarketPage: function () {
            return "../../../marketSbg/@tencent/stock-hq-etf/global-invest/pages/GlobalMarketPage.js";
          },
        },
        onPageScroll: function (e) {
          var o, t, r;
          null ==
            (r =
              null == (o = this.$refs.globalMarketPageRef)
                ? void 0
                : o.setScrollTop) ||
            r.call(o, null != (t = null == e ? void 0 : e.scrollTop) ? t : 0);
        },
        onReachBottom: function () {
          var e, o;
          null ==
            (o =
              null == (e = this.$refs.globalMarketPageRef)
                ? void 0
                : e.onReachBottom) || o.call(e);
        },
        provide: function () {
          return {
            hqBridge: o.StockBridge,
            stockBridge: o.StockBridge,
            stockRouter: e.StockRouter,
          };
        },
      };
    Array ||
      (
        e.resolveComponent("GlobalMarketPage") +
        e.resolveComponent("mp-privacy-dialog") +
        e.resolveComponent("stock-privacy-dialog")
      )();
    var r = e._export_sfc(t, [
      [
        "render",
        function (o, t, r, a, l, n) {
          return {
            a: o.rootFontSize,
            b: e.sr("globalMarketPageRef", "b489d54a-0"),
            c: e.p({ "no-auto": !0 }),
          };
        },
      ],
    ]);
    (t.__runtimeHooks = 1), wx.createPage(r);
  },
  {
    isPage: true,
    isComponent: true,
    currentFile: "pages/market/pages/ETFPage/globalMarket.js",
  }
);
require("pages/market/pages/ETFPage/globalMarket.js");
