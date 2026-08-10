$gwx3_XC_51 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx3_XC_51 || [];
    function gz$gwx3_XC_51_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx3_XC_51_1)
        return __WXML_GLOBAL__.ops_cached.$gwx3_XC_51_1;
      __WXML_GLOBAL__.ops_cached.$gwx3_XC_51_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div rate-page-outter data-v-889cb18d"]);
        Z([[7], [3, "d"]]);
        Z([[7], [3, "e"]]);
        Z([3, "__l"]);
        Z([3, "data-v-889cb18d"]);
        Z([3, "889cb18d-0"]);
        Z([[7], [3, "b"]]);
        Z(z[3]);
        Z(z[4]);
        Z([3, "889cb18d-1"]);
        Z(z[6]);
        Z([[7], [3, "c"]]);
        Z(z[3]);
        Z(z[4]);
        Z([3, "889cb18d-2"]);
        Z(z[11]);
      })(__WXML_GLOBAL__.ops_cached.$gwx3_XC_51_1);
      return __WXML_GLOBAL__.ops_cached.$gwx3_XC_51_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx3_XC_51 = z;
    __WXML_GLOBAL__.ops_init.$gwx3_XC_51 = true;
    var x = ["./pages/detailSbg/jgrate.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx3_XC_51_1();
      var fQPB = _mz(
        z,
        "view",
        ["class", 0, "data-st-theme", 1, "skin", 1],
        [],
        e,
        s,
        gg
      );
      var oTPB = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 3, "class", 1, "uI", 2],
        [],
        e,
        s,
        gg
      );
      _(fQPB, oTPB);
      var cRPB = _v();
      _(fQPB, cRPB);
      if (_oz(z, 6, e, s, gg)) {
        cRPB.wxVkey = 1;
        var cUPB = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 7, "class", 1, "uI", 2, "uP", 3],
          [],
          e,
          s,
          gg
        );
        _(cRPB, cUPB);
      }
      var hSPB = _v();
      _(fQPB, hSPB);
      if (_oz(z, 11, e, s, gg)) {
        hSPB.wxVkey = 1;
        var oVPB = _mz(
          z,
          "ratepage",
          ["bind:__l", 12, "class", 1, "uI", 2, "uP", 3],
          [],
          e,
          s,
          gg
        );
        _(hSPB, oVPB);
      }
      cRPB.wxXCkey = 1;
      cRPB.wxXCkey = 3;
      hSPB.wxXCkey = 1;
      hSPB.wxXCkey = 3;
      _(r, fQPB);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx3_XC_51";
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
if (__vd_version_info__.delayedGwx || false) $gwx3_XC_51();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/detailSbg/jgrate.wxml"] = [
    $gwx3_XC_51,
    "./pages/detailSbg/jgrate.wxml",
  ];
else
  __wxAppCode__["pages/detailSbg/jgrate.wxml"] = $gwx3_XC_51(
    "./pages/detailSbg/jgrate.wxml"
  );
__wxRoute = "pages/detailSbg/jgrate";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/detailSbg/jgrate.js";
define(
  "pages/detailSbg/jgrate.js",
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
    var e = require("../../common/vendor.js"),
      o = {
        components: {
          Ratepage: function () {
            return "../quote/@tencent/wzq-lite-mergenews/Ratepage.js";
          },
        },
        provide: function () {
          return { hqBridge: this.hqBridge };
        },
        data: function () {
          var o = new e.HQBridge();
          return {
            symbol: "",
            hqBridge: o,
            skin: o.getStorage("user/skin") || "white",
          };
        },
        onLoad: function (o) {
          (this.symbol = o.symbol || ""),
            "black" === this.skin &&
              e.wx$1.setNavigationBarColor({
                frontColor: "#ffffff",
                backgroundColor: "#12161f",
              });
        },
      };
    Array ||
      (
        e.resolveComponent("mp-privacy-dialog") +
        e.resolveComponent("stock-privacy-dialog") +
        e.resolveComponent("Ratepage")
      )();
    var r = e._export_sfc(o, [
      [
        "render",
        function (o, r, n, t, a, i) {
          return {
            a: o.rootFontSize,
            b: e.p({ "no-auto": !0 }),
            c: e.p({ symbol: a.symbol }),
            d: a.skin,
            e: a.skin,
          };
        },
      ],
      ["__scopeId", "data-v-889cb18d"],
    ]);
    wx.createPage(r);
  },
  { isPage: true, isComponent: true, currentFile: "pages/detailSbg/jgrate.js" }
);
require("pages/detailSbg/jgrate.js");
