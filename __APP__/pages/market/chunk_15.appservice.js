$gwx5_XC_7 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx5_XC_7 || [];
    function gz$gwx5_XC_7_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx5_XC_7_1)
        return __WXML_GLOBAL__.ops_cached.$gwx5_XC_7_1;
      __WXML_GLOBAL__.ops_cached.$gwx5_XC_7_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "b"]]);
        Z([3, "__l"]);
        Z([3, "cbbaeda4-0"]);
        Z(z[0]);
        Z(z[1]);
        Z([3, "cbbaeda4-1"]);
        Z([[7], [3, "c"]]);
        Z(z[1]);
        Z([3, "cbbaeda4-2"]);
        Z(z[6]);
      })(__WXML_GLOBAL__.ops_cached.$gwx5_XC_7_1);
      return __WXML_GLOBAL__.ops_cached.$gwx5_XC_7_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx5_XC_7 = z;
    __WXML_GLOBAL__.ops_init.$gwx5_XC_7 = true;
    var x = ["./pages/market/pages/NewPubETFTeach.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx5_XC_7_1();
      var bYS = _v();
      _(r, bYS);
      if (_oz(z, 0, e, s, gg)) {
        bYS.wxVkey = 1;
        var x1S = _mz(
          z,
          "newpub-etf-teach",
          ["bind:__l", 1, "uI", 1, "uP", 2],
          [],
          e,
          s,
          gg
        );
        _(bYS, x1S);
      }
      var o2S = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 4, "uI", 1],
        [],
        e,
        s,
        gg
      );
      _(r, o2S);
      var oZS = _v();
      _(r, oZS);
      if (_oz(z, 6, e, s, gg)) {
        oZS.wxVkey = 1;
        var f3S = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 7, "uI", 1, "uP", 2],
          [],
          e,
          s,
          gg
        );
        _(oZS, f3S);
      }
      bYS.wxXCkey = 1;
      bYS.wxXCkey = 3;
      oZS.wxXCkey = 1;
      oZS.wxXCkey = 3;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx5_XC_7";
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
if (__vd_version_info__.delayedGwx || false) $gwx5_XC_7();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/market/pages/NewPubETFTeach.wxml"] = [
    $gwx5_XC_7,
    "./pages/market/pages/NewPubETFTeach.wxml",
  ];
else
  __wxAppCode__["pages/market/pages/NewPubETFTeach.wxml"] = $gwx5_XC_7(
    "./pages/market/pages/NewPubETFTeach.wxml"
  );
__wxRoute = "pages/market/pages/NewPubETFTeach";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/market/pages/NewPubETFTeach.js";
define(
  "pages/market/pages/NewPubETFTeach.js",
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
      t = {
        components: {
          NewpubEtfTeach: function () {
            return "../../marketSbg/@tencent/stock-hq-newpubetf/NewpubEtfTeach.js";
          },
        },
        provide: function () {
          return { hqBridge: new e.HQBridge(this) };
        },
        data: function () {
          return { queryData: null };
        },
        onLoad: function (e) {
          this.queryData = e;
        },
        created: function () {},
        methods: {},
      };
    Array ||
      (
        e.resolveComponent("NewpubEtfTeach") +
        e.resolveComponent("mp-privacy-dialog") +
        e.resolveComponent("stock-privacy-dialog")
      )();
    var n = e._export_sfc(t, [
      [
        "render",
        function (t, n, r, o, a, u) {
          return {
            a: t.rootFontSize,
            b: e.p({ "query-data": a.queryData }),
            c: e.p({ "no-auto": !0 }),
          };
        },
      ],
    ]);
    wx.createPage(n);
  },
  {
    isPage: true,
    isComponent: true,
    currentFile: "pages/market/pages/NewPubETFTeach.js",
  }
);
require("pages/market/pages/NewPubETFTeach.js");
