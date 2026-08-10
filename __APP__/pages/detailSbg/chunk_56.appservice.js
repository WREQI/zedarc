$gwx3_XC_52 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx3_XC_52 || [];
    function gz$gwx3_XC_52_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx3_XC_52_1)
        return __WXML_GLOBAL__.ops_cached.$gwx3_XC_52_1;
      __WXML_GLOBAL__.ops_cached.$gwx3_XC_52_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div kline-setting-container data-v-49c97c5e"]);
        Z([[7], [3, "d"]]);
        Z([3, "__l"]);
        Z([3, "data-v-49c97c5e"]);
        Z([3, "49c97c5e-0"]);
        Z([[7], [3, "b"]]);
        Z(z[2]);
        Z(z[3]);
        Z([3, "49c97c5e-1"]);
        Z(z[5]);
        Z([[7], [3, "c"]]);
        Z(z[2]);
        Z(z[3]);
        Z([3, "49c97c5e-2"]);
        Z(z[10]);
      })(__WXML_GLOBAL__.ops_cached.$gwx3_XC_52_1);
      return __WXML_GLOBAL__.ops_cached.$gwx3_XC_52_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx3_XC_52 = z;
    __WXML_GLOBAL__.ops_init.$gwx3_XC_52 = true;
    var x = ["./pages/detailSbg/klineSetting.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx3_XC_52_1();
      var aXPB = _mz(z, "view", ["class", 0, "data-st-theme", 1], [], e, s, gg);
      var b1PB = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 2, "class", 1, "uI", 2],
        [],
        e,
        s,
        gg
      );
      _(aXPB, b1PB);
      var tYPB = _v();
      _(aXPB, tYPB);
      if (_oz(z, 5, e, s, gg)) {
        tYPB.wxVkey = 1;
        var o2PB = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 6, "class", 1, "uI", 2, "uP", 3],
          [],
          e,
          s,
          gg
        );
        _(tYPB, o2PB);
      }
      var eZPB = _v();
      _(aXPB, eZPB);
      if (_oz(z, 10, e, s, gg)) {
        eZPB.wxVkey = 1;
        var x3PB = _mz(
          z,
          "more-kline-setting",
          ["bind:__l", 11, "class", 1, "uI", 2, "uP", 3],
          [],
          e,
          s,
          gg
        );
        _(eZPB, x3PB);
      }
      tYPB.wxXCkey = 1;
      tYPB.wxXCkey = 3;
      eZPB.wxXCkey = 1;
      eZPB.wxXCkey = 3;
      _(r, aXPB);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx3_XC_52";
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
if (__vd_version_info__.delayedGwx || false) $gwx3_XC_52();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/detailSbg/klineSetting.wxml"] = [
    $gwx3_XC_52,
    "./pages/detailSbg/klineSetting.wxml",
  ];
else
  __wxAppCode__["pages/detailSbg/klineSetting.wxml"] = $gwx3_XC_52(
    "./pages/detailSbg/klineSetting.wxml"
  );
__wxRoute = "pages/detailSbg/klineSetting";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/detailSbg/klineSetting.js";
define(
  "pages/detailSbg/klineSetting.js",
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
      n = {
        components: {
          MoreKlineSetting: function () {
            return "../quote/@tencent/stock-hq-chart/components/SettingPopup/MoreKlineSetting.js";
          },
        },
        data: function () {
          return {
            skin: ["black", "dark"].includes(
              e.StockBridge.getStorage("user/skin")
            )
              ? "black"
              : "white",
          };
        },
        onLoad: function () {
          e.StockBridge.report("hq.stock_detail.kline_more_set_brow");
        },
      };
    Array ||
      (
        e.resolveComponent("mp-privacy-dialog") +
        e.resolveComponent("stock-privacy-dialog") +
        e.resolveComponent("MoreKlineSetting")
      )();
    var o = e._export_sfc(n, [
      [
        "render",
        function (n, o, t, r, i, c) {
          return {
            a: n.rootFontSize,
            b: e.p({ "no-auto": !0 }),
            c: e.p({ skin: i.skin }),
            d: i.skin,
          };
        },
      ],
      ["__scopeId", "data-v-49c97c5e"],
    ]);
    wx.createPage(o);
  },
  {
    isPage: true,
    isComponent: true,
    currentFile: "pages/detailSbg/klineSetting.js",
  }
);
require("pages/detailSbg/klineSetting.js");
