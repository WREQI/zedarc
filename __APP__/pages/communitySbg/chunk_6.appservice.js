$gwx23_XC_6 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx23_XC_6 || [];
    function gz$gwx23_XC_6_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx23_XC_6_1)
        return __WXML_GLOBAL__.ops_cached.$gwx23_XC_6_1;
      __WXML_GLOBAL__.ops_cached.$gwx23_XC_6_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div"]);
        Z([3, "__l"]);
        Z([3, "690eaf2d-0"]);
        Z([[7], [3, "b"]]);
        Z(z[1]);
        Z([3, "690eaf2d-1"]);
        Z(z[3]);
      })(__WXML_GLOBAL__.ops_cached.$gwx23_XC_6_1);
      return __WXML_GLOBAL__.ops_cached.$gwx23_XC_6_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx23_XC_6 = z;
    __WXML_GLOBAL__.ops_init.$gwx23_XC_6 = true;
    var x = ["./pages/communitySbg/index.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx23_XC_6_1();
      var hYK = _n("view");
      _rz(z, hYK, "class", 0, e, s, gg);
      var c1K = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 1, "uI", 1],
        [],
        e,
        s,
        gg
      );
      _(hYK, c1K);
      var oZK = _v();
      _(hYK, oZK);
      if (_oz(z, 3, e, s, gg)) {
        oZK.wxVkey = 1;
        var o2K = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 4, "uI", 1, "uP", 2],
          [],
          e,
          s,
          gg
        );
        _(oZK, o2K);
      }
      oZK.wxXCkey = 1;
      oZK.wxXCkey = 3;
      _(r, hYK);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx23_XC_6";
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
if (__vd_version_info__.delayedGwx || false) $gwx23_XC_6();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/communitySbg/index.wxml"] = [
    $gwx23_XC_6,
    "./pages/communitySbg/index.wxml",
  ];
else
  __wxAppCode__["pages/communitySbg/index.wxml"] = $gwx23_XC_6(
    "./pages/communitySbg/index.wxml"
  );
__wxRoute = "pages/communitySbg/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/communitySbg/index.js";
define(
  "pages/communitySbg/index.js",
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
    var o = require("../../common/vendor.js");
    Array ||
      (
        o.resolveComponent("mp-privacy-dialog") +
        o.resolveComponent("stock-privacy-dialog")
      )();
    var e = o._export_sfc({ components: {}, data: function () {} }, [
      [
        "render",
        function (e, r, n, t, a, c) {
          return { a: e.rootFontSize, b: o.p({ "no-auto": !0 }) };
        },
      ],
    ]);
    wx.createPage(e);
  },
  {
    isPage: true,
    isComponent: true,
    currentFile: "pages/communitySbg/index.js",
  }
);
require("pages/communitySbg/index.js");
