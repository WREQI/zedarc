$gwx34_XC_5 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx34_XC_5 || [];
    function gz$gwx34_XC_5_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx34_XC_5_1)
        return __WXML_GLOBAL__.ops_cached.$gwx34_XC_5_1;
      __WXML_GLOBAL__.ops_cached.$gwx34_XC_5_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "__l"]);
        Z([3, "0d92519e-0"]);
      })(__WXML_GLOBAL__.ops_cached.$gwx34_XC_5_1);
      return __WXML_GLOBAL__.ops_cached.$gwx34_XC_5_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx34_XC_5 = z;
    __WXML_GLOBAL__.ops_init.$gwx34_XC_5 = true;
    var x = ["./pages/act/navigateToMp/main.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx34_XC_5_1();
      var aJC = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 0, "uI", 1],
        [],
        e,
        s,
        gg
      );
      _(r, aJC);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx34_XC_5";
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
if (__vd_version_info__.delayedGwx || false) $gwx34_XC_5();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/act/navigateToMp/main.wxml"] = [
    $gwx34_XC_5,
    "./pages/act/navigateToMp/main.wxml",
  ];
else
  __wxAppCode__["pages/act/navigateToMp/main.wxml"] = $gwx34_XC_5(
    "./pages/act/navigateToMp/main.wxml"
  );
__wxRoute = "pages/act/navigateToMp/main";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/act/navigateToMp/main.js";
define(
  "pages/act/navigateToMp/main.js",
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
        data: function () {
          return {
            logo: "",
            desc: "",
            btnText: "",
            miniPath: "",
            envVersion: "",
          };
        },
        onLoad: function (e) {
          var t = e.json_str,
            a = void 0 === t ? "" : t;
          if (a) {
            var n = JSON.parse(decodeURIComponent(a));
            (this.logo = n.logo),
              (this.desc = n.desc),
              (this.btnText = n.btnText || "立即前往"),
              (this.envVersion = n.envVersion || "release"),
              (this.appId = n.appId),
              (this.miniPath = decodeURIComponent(n.miniPath)),
              (this.extraData = n.extraData || {});
          }
        },
        methods: {
          handleNavigate: function () {
            e.wx$1.navigateToMiniProgram({
              appId: this.appId,
              path: this.miniPath,
              envVersion: this.envVersion,
              extraData: this.extraData,
            });
          },
        },
      };
    Array || e.resolveComponent("mp-privacy-dialog")();
    var a = e._export_sfc(t, [
      [
        "render",
        function (t, a, n, o, i, r) {
          return {
            a: t.rootFontSize,
            b: i.logo,
            c: e.t(i.desc),
            d: e.t(i.btnText),
            e: e.o(function () {
              return r.handleNavigate && r.handleNavigate.apply(r, arguments);
            }, 369),
          };
        },
      ],
    ]);
    wx.createPage(a);
  },
  {
    isPage: true,
    isComponent: true,
    currentFile: "pages/act/navigateToMp/main.js",
  }
);
require("pages/act/navigateToMp/main.js");
