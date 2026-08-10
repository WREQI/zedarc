$gwx3_XC_48 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx3_XC_48 || [];
    function gz$gwx3_XC_48_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx3_XC_48_1)
        return __WXML_GLOBAL__.ops_cached.$gwx3_XC_48_1;
      __WXML_GLOBAL__.ops_cached.$gwx3_XC_48_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div chart-params-container data-v-04d494a3"]);
        Z([[7], [3, "e"]]);
        Z([3, "__l"]);
        Z([3, "data-v-04d494a3"]);
        Z([3, "04d494a3-0"]);
        Z([[7], [3, "b"]]);
        Z(z[2]);
        Z(z[3]);
        Z([3, "04d494a3-1"]);
        Z(z[5]);
        Z([[7], [3, "c"]]);
        Z(z[2]);
        Z(z[3]);
        Z([3, "04d494a3-2"]);
        Z([[7], [3, "d"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx3_XC_48_1);
      return __WXML_GLOBAL__.ops_cached.$gwx3_XC_48_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx3_XC_48 = z;
    __WXML_GLOBAL__.ops_init.$gwx3_XC_48 = true;
    var x = ["./pages/detailSbg/chartSettingParams.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx3_XC_48_1();
      var e8OB = _mz(z, "view", ["class", 0, "data-st-theme", 1], [], e, s, gg);
      var xAPB = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 2, "class", 1, "uI", 2],
        [],
        e,
        s,
        gg
      );
      _(e8OB, xAPB);
      var b9OB = _v();
      _(e8OB, b9OB);
      if (_oz(z, 5, e, s, gg)) {
        b9OB.wxVkey = 1;
        var oBPB = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 6, "class", 1, "uI", 2, "uP", 3],
          [],
          e,
          s,
          gg
        );
        _(b9OB, oBPB);
      }
      var o0OB = _v();
      _(e8OB, o0OB);
      if (_oz(z, 10, e, s, gg)) {
        o0OB.wxVkey = 1;
        var fCPB = _mz(
          z,
          "chart-setting-params",
          ["bind:__l", 11, "class", 1, "uI", 2, "uP", 3],
          [],
          e,
          s,
          gg
        );
        _(o0OB, fCPB);
      }
      b9OB.wxXCkey = 1;
      b9OB.wxXCkey = 3;
      o0OB.wxXCkey = 1;
      o0OB.wxXCkey = 3;
      _(r, e8OB);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx3_XC_48";
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
if (__vd_version_info__.delayedGwx || false) $gwx3_XC_48();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/detailSbg/chartSettingParams.wxml"] = [
    $gwx3_XC_48,
    "./pages/detailSbg/chartSettingParams.wxml",
  ];
else
  __wxAppCode__["pages/detailSbg/chartSettingParams.wxml"] = $gwx3_XC_48(
    "./pages/detailSbg/chartSettingParams.wxml"
  );
__wxRoute = "pages/detailSbg/chartSettingParams";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/detailSbg/chartSettingParams.js";
define(
  "pages/detailSbg/chartSettingParams.js",
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
      t = {
        components: {
          ChartSettingParams: function () {
            return "../quote/@tencent/stock-hq-chart/components/SettingPopup/chartSettingParams.js";
          },
        },
        data: function () {
          return {
            type: "",
            skin: ["black", "dark"].includes(
              e.StockBridge.getStorage("user/skin")
            )
              ? "black"
              : "white",
          };
        },
        onLoad: function (e) {
          this.type = e.type;
        },
      };
    Array ||
      (
        e.resolveComponent("mp-privacy-dialog") +
        e.resolveComponent("stock-privacy-dialog") +
        e.resolveComponent("ChartSettingParams")
      )();
    var n = e._export_sfc(t, [
      [
        "render",
        function (t, n, r, o, a, i) {
          return e.e(
            { a: t.rootFontSize, b: e.p({ "no-auto": !0 }), c: a.type },
            a.type ? { d: e.p({ type: a.type, skin: a.skin }) } : {},
            { e: a.skin }
          );
        },
      ],
      ["__scopeId", "data-v-04d494a3"],
    ]);
    wx.createPage(n);
  },
  {
    isPage: true,
    isComponent: true,
    currentFile: "pages/detailSbg/chartSettingParams.js",
  }
);
require("pages/detailSbg/chartSettingParams.js");
