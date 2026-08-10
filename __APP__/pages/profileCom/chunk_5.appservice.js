$gwx7_XC_5 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx7_XC_5 || [];
    function gz$gwx7_XC_5_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx7_XC_5_1)
        return __WXML_GLOBAL__.ops_cached.$gwx7_XC_5_1;
      __WXML_GLOBAL__.ops_cached.$gwx7_XC_5_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div page data-v-f919c1f9"]);
        Z([[7], [3, "b"]]);
        Z([3, "__l"]);
        Z([3, "data-v-f919c1f9"]);
        Z([3, "f919c1f9-0"]);
        Z(z[2]);
        Z(z[3]);
        Z([3, "f919c1f9-1"]);
        Z(z[2]);
        Z([3, "account-history data-v-f919c1f9"]);
        Z([3, "f919c1f9-2"]);
      })(__WXML_GLOBAL__.ops_cached.$gwx7_XC_5_1);
      return __WXML_GLOBAL__.ops_cached.$gwx7_XC_5_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx7_XC_5 = z;
    __WXML_GLOBAL__.ops_init.$gwx7_XC_5 = true;
    var x = ["./pages/profileCom/history.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx7_XC_5_1();
      var cVF = _mz(z, "view", ["class", 0, "data-st-theme", 1], [], e, s, gg);
      var hWF = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 2, "class", 1, "uI", 2],
        [],
        e,
        s,
        gg
      );
      _(cVF, hWF);
      var oXF = _mz(
        z,
        "stock-privacy-dialog",
        ["bind:__l", 5, "class", 1, "uI", 2],
        [],
        e,
        s,
        gg
      );
      _(cVF, oXF);
      var cYF = _mz(
        z,
        "account-history",
        ["bind:__l", 8, "class", 1, "uI", 2],
        [],
        e,
        s,
        gg
      );
      _(cVF, cYF);
      _(r, cVF);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx7_XC_5";
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
if (__vd_version_info__.delayedGwx || false) $gwx7_XC_5();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/profileCom/history.wxml"] = [
    $gwx7_XC_5,
    "./pages/profileCom/history.wxml",
  ];
else
  __wxAppCode__["pages/profileCom/history.wxml"] = $gwx7_XC_5(
    "./pages/profileCom/history.wxml"
  );
__wxRoute = "pages/profileCom/history";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/profileCom/history.js";
define(
  "pages/profileCom/history.js",
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
      r = {
        components: {
          AccountHistory: function () {
            return "../account/@tencent/st-browsing-history/page/mp.js";
          },
        },
        setup: function () {
          return {
            skin: e.ref(
              ["black", "dark"].includes(e.StockBridge.getStorage("user/skin"))
                ? "dark"
                : "light"
            ),
          };
        },
        onPageShow: function () {
          this.skin = ["black", "dark"].includes(
            e.StockBridge.getStorage("user/skin")
          )
            ? "dark"
            : "light";
        },
      };
    Array ||
      (
        e.resolveComponent("mp-privacy-dialog") +
        e.resolveComponent("stock-privacy-dialog") +
        e.resolveComponent("account-history")
      )();
    var n = e._export_sfc(r, [
      [
        "render",
        function (e, r, n, o, t, i) {
          return { a: e.rootFontSize, b: o.skin };
        },
      ],
      ["__scopeId", "data-v-f919c1f9"],
    ]);
    wx.createPage(n);
  },
  {
    isPage: true,
    isComponent: true,
    currentFile: "pages/profileCom/history.js",
  }
);
require("pages/profileCom/history.js");
