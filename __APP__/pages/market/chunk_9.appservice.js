$gwx5_XC_19 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx5_XC_19 || [];
    function gz$gwx5_XC_19_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx5_XC_19_1)
        return __WXML_GLOBAL__.ops_cached.$gwx5_XC_19_1;
      __WXML_GLOBAL__.ops_cached.$gwx5_XC_19_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "__l"]);
        Z([3, "r"]);
        Z([3, "53dbc6d8-0"]);
        Z([3, "globalInvestHomePageRef"]);
        Z(z[0]);
        Z([3, "53dbc6d8-1"]);
        Z([[7], [3, "c"]]);
        Z(z[0]);
        Z([3, "53dbc6d8-2"]);
        Z(z[6]);
      })(__WXML_GLOBAL__.ops_cached.$gwx5_XC_19_1);
      return __WXML_GLOBAL__.ops_cached.$gwx5_XC_19_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx5_XC_19 = z;
    __WXML_GLOBAL__.ops_init.$gwx5_XC_19 = true;
    var x = ["./pages/market/pages/ETFPage/globalInvest.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx5_XC_19_1();
      var xYU = _mz(
        z,
        "global-invest-home-page",
        ["bind:__l", 0, "class", 1, "uI", 1, "uR", 2],
        [],
        e,
        s,
        gg
      );
      _(r, xYU);
      var oZU = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 4, "uI", 1],
        [],
        e,
        s,
        gg
      );
      _(r, oZU);
      var oXU = _v();
      _(r, oXU);
      if (_oz(z, 6, e, s, gg)) {
        oXU.wxVkey = 1;
        var f1U = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 7, "uI", 1, "uP", 2],
          [],
          e,
          s,
          gg
        );
        _(oXU, f1U);
      }
      oXU.wxXCkey = 1;
      oXU.wxXCkey = 3;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx5_XC_19";
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
if (__vd_version_info__.delayedGwx || false) $gwx5_XC_19();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/market/pages/ETFPage/globalInvest.wxml"] = [
    $gwx5_XC_19,
    "./pages/market/pages/ETFPage/globalInvest.wxml",
  ];
else
  __wxAppCode__["pages/market/pages/ETFPage/globalInvest.wxml"] = $gwx5_XC_19(
    "./pages/market/pages/ETFPage/globalInvest.wxml"
  );
__wxRoute = "pages/market/pages/ETFPage/globalInvest";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/market/pages/ETFPage/globalInvest.js";
define(
  "pages/market/pages/ETFPage/globalInvest.js",
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
      l = {
        name: "GlobalInvestHomeRoutePage",
        components: {
          GlobalInvestHomePage: function () {
            return "../../../marketSbg/@tencent/stock-hq-etf/global-invest/pages/HomePage/GlobalInvestHomePage.js";
          },
        },
        provide: function () {
          return {
            hqBridge: o.StockBridge,
            stockBridge: o.StockBridge,
            stockRouter: e.StockRouter,
          };
        },
        onShow: function () {
          var e, o;
          null ==
            (o =
              null == (e = this.$refs.globalInvestHomePageRef)
                ? void 0
                : e.handlePageShow) || o.call(e);
        },
        onHide: function () {
          var e, o;
          null ==
            (o =
              null == (e = this.$refs.globalInvestHomePageRef)
                ? void 0
                : e.handlePageHide) || o.call(e);
        },
        onUnload: function () {
          var e, o;
          null ==
            (o =
              null == (e = this.$refs.globalInvestHomePageRef)
                ? void 0
                : e.handlePageHide) || o.call(e);
        },
        onPageScroll: function (o) {
          var l,
            n,
            t,
            a = null != (l = null == o ? void 0 : o.scrollTop) ? l : 0;
          null ==
            (t =
              null == (n = this.$refs.globalInvestHomePageRef)
                ? void 0
                : n.setScrollTop) || t.call(n, a),
            e.scrollDepthStat.onScroll(a, this.__route__);
        },
      };
    Array ||
      (
        e.resolveComponent("GlobalInvestHomePage") +
        e.resolveComponent("mp-privacy-dialog") +
        e.resolveComponent("stock-privacy-dialog")
      )();
    var n = e._export_sfc(l, [
      [
        "render",
        function (o, l, n, t, a, r) {
          return {
            a: o.rootFontSize,
            b: e.sr("globalInvestHomePageRef", "53dbc6d8-0"),
            c: e.p({ "no-auto": !0 }),
          };
        },
      ],
    ]);
    (l.__runtimeHooks = 1), wx.createPage(n);
  },
  {
    isPage: true,
    isComponent: true,
    currentFile: "pages/market/pages/ETFPage/globalInvest.js",
  }
);
require("pages/market/pages/ETFPage/globalInvest.js");
