$gwx31_XC_2 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx31_XC_2 || [];
    function gz$gwx31_XC_2_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx31_XC_2_1)
        return __WXML_GLOBAL__.ops_cached.$gwx31_XC_2_1;
      __WXML_GLOBAL__.ops_cached.$gwx31_XC_2_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div apply-wrapper data-v-cc91a4a1"]);
        Z([3, "__l"]);
        Z([3, "data-v-cc91a4a1"]);
        Z([3, "cc91a4a1-0"]);
        Z([[7], [3, "b"]]);
        Z(z[1]);
        Z(z[2]);
        Z([3, "cc91a4a1-1"]);
        Z(z[4]);
        Z(z[1]);
        Z(z[2]);
        Z([3, "cc91a4a1-2"]);
      })(__WXML_GLOBAL__.ops_cached.$gwx31_XC_2_1);
      return __WXML_GLOBAL__.ops_cached.$gwx31_XC_2_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx31_XC_2 = z;
    __WXML_GLOBAL__.ops_init.$gwx31_XC_2 = true;
    var x = ["./pages/apply/index.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx31_XC_2_1();
      var xIB = _n("view");
      _rz(z, xIB, "class", 0, e, s, gg);
      var fKB = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 1, "class", 1, "uI", 2],
        [],
        e,
        s,
        gg
      );
      _(xIB, fKB);
      var oJB = _v();
      _(xIB, oJB);
      if (_oz(z, 4, e, s, gg)) {
        oJB.wxVkey = 1;
        var cLB = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 5, "class", 1, "uI", 2, "uP", 3],
          [],
          e,
          s,
          gg
        );
        _(oJB, cLB);
      }
      var hMB = _mz(
        z,
        "noaccount-view",
        ["bind:__l", 9, "class", 1, "uI", 2],
        [],
        e,
        s,
        gg
      );
      _(xIB, hMB);
      oJB.wxXCkey = 1;
      oJB.wxXCkey = 3;
      _(r, xIB);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx31_XC_2";
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
if (__vd_version_info__.delayedGwx || false) $gwx31_XC_2();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/apply/index.wxml"] = [
    $gwx31_XC_2,
    "./pages/apply/index.wxml",
  ];
else
  __wxAppCode__["pages/apply/index.wxml"] = $gwx31_XC_2(
    "./pages/apply/index.wxml"
  );
__wxRoute = "pages/apply/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/apply/index.js";
define(
  "pages/apply/index.js",
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
    var o = require("../../common/vendor.js"),
      e = {
        components: {
          NoaccountView: function () {
            return "../noaccount/components/index.js";
          },
        },
        setup: function () {
          return o.wx$1.hideShareMenu(), {};
        },
      };
    Array ||
      (
        o.resolveComponent("mp-privacy-dialog") +
        o.resolveComponent("stock-privacy-dialog") +
        o.resolveComponent("noaccount-view")
      )();
    var n = o._export_sfc(e, [
      [
        "render",
        function (e, n, r, t, c, a) {
          return { a: e.rootFontSize, b: o.p({ "no-auto": !0 }) };
        },
      ],
      ["__scopeId", "data-v-cc91a4a1"],
    ]);
    wx.createPage(n);
  },
  { isPage: true, isComponent: true, currentFile: "pages/apply/index.js" }
);
require("pages/apply/index.js");
