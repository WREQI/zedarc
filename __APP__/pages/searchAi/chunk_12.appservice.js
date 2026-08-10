$gwx14_XC_4 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx14_XC_4 || [];
    function gz$gwx14_XC_4_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx14_XC_4_1)
        return __WXML_GLOBAL__.ops_cached.$gwx14_XC_4_1;
      __WXML_GLOBAL__.ops_cached.$gwx14_XC_4_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([
          [4],
          [
            [5],
            [[5], [1, "_div"]],
            [
              [2, "&&"],
              [[7], [3, "f"]],
              [1, "skin-black"],
            ],
          ],
        ]);
        Z([[7], [3, "e"]]);
        Z([3, "__l"]);
        Z([3, "4b983e9c-0"]);
        Z([[7], [3, "b"]]);
        Z(z[2]);
        Z([3, "4b983e9c-1"]);
        Z(z[4]);
        Z([[7], [3, "c"]]);
        Z(z[2]);
        Z([3, "4b983e9c-2"]);
        Z([[7], [3, "d"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx14_XC_4_1);
      return __WXML_GLOBAL__.ops_cached.$gwx14_XC_4_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx14_XC_4 = z;
    __WXML_GLOBAL__.ops_init.$gwx14_XC_4 = true;
    var x = ["./pages/searchAi/jgpjDetail.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx14_XC_4_1();
      var aRB = _mz(z, "view", ["class", 0, "data-st-theme", 1], [], e, s, gg);
      var bUB = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 2, "uI", 1],
        [],
        e,
        s,
        gg
      );
      _(aRB, bUB);
      var tSB = _v();
      _(aRB, tSB);
      if (_oz(z, 4, e, s, gg)) {
        tSB.wxVkey = 1;
        var oVB = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 5, "uI", 1, "uP", 2],
          [],
          e,
          s,
          gg
        );
        _(tSB, oVB);
      }
      var eTB = _v();
      _(aRB, eTB);
      if (_oz(z, 8, e, s, gg)) {
        eTB.wxVkey = 1;
        var xWB = _mz(
          z,
          "detail",
          ["bind:__l", 9, "uI", 1, "uP", 2],
          [],
          e,
          s,
          gg
        );
        _(eTB, xWB);
      }
      tSB.wxXCkey = 1;
      tSB.wxXCkey = 3;
      eTB.wxXCkey = 1;
      eTB.wxXCkey = 3;
      _(r, aRB);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx14_XC_4";
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
if (__vd_version_info__.delayedGwx || false) $gwx14_XC_4();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/searchAi/jgpjDetail.wxml"] = [
    $gwx14_XC_4,
    "./pages/searchAi/jgpjDetail.wxml",
  ];
else
  __wxAppCode__["pages/searchAi/jgpjDetail.wxml"] = $gwx14_XC_4(
    "./pages/searchAi/jgpjDetail.wxml"
  );
__wxRoute = "pages/searchAi/jgpjDetail";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/searchAi/jgpjDetail.js";
define(
  "pages/searchAi/jgpjDetail.js",
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
    require("../../@babel/runtime/helpers/Arrayincludes");
    var e = require("../../common/vendor.js"),
      r = getApp().globalData,
      n = {
        components: {
          Detail: function () {
            return "../detailSbg/@tencent/wzq-detail-subpage/brief-pages/jgpjDetail.js";
          },
        },
        provide: function () {
          return { hqBridge: new e.HQBridge() };
        },
        data: function () {
          var n = r.skin || e.StockBridge.getStorage("user/skin");
          return {
            symbol: null,
            skin: ["black", "dark"].includes(n) ? "black" : "white",
          };
        },
        onLoad: function (e) {
          this.symbol = e.symbol;
        },
      };
    Array ||
      (
        e.resolveComponent("mp-privacy-dialog") +
        e.resolveComponent("stock-privacy-dialog") +
        e.resolveComponent("Detail")
      )();
    var o = e._export_sfc(n, [
      [
        "render",
        function (r, n, o, t, i, a) {
          return e.e(
            { a: r.rootFontSize, b: e.p({ "no-auto": !0 }), c: i.symbol },
            i.symbol ? { d: e.p({ symbol: i.symbol }) } : {},
            { e: i.skin, f: "black" === i.skin || "dark" === i.skin ? 1 : "" }
          );
        },
      ],
    ]);
    wx.createPage(o);
  },
  {
    isPage: true,
    isComponent: true,
    currentFile: "pages/searchAi/jgpjDetail.js",
  }
);
require("pages/searchAi/jgpjDetail.js");
