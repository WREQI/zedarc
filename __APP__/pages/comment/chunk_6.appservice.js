$gwx24_XC_6 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx24_XC_6 || [];
    function gz$gwx24_XC_6_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx24_XC_6_1)
        return __WXML_GLOBAL__.ops_cached.$gwx24_XC_6_1;
      __WXML_GLOBAL__.ops_cached.$gwx24_XC_6_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[4], [[5], [[5], [1, "container"]], [[7], [3, "d"]]]]);
        Z([3, "__l"]);
        Z([3, "37869bb6-0"]);
        Z([[7], [3, "b"]]);
        Z(z[1]);
        Z([3, "37869bb6-1"]);
        Z(z[3]);
        Z([[7], [3, "c"]]);
        Z(z[1]);
        Z([3, "37869bb6-2"]);
        Z(z[7]);
      })(__WXML_GLOBAL__.ops_cached.$gwx24_XC_6_1);
      return __WXML_GLOBAL__.ops_cached.$gwx24_XC_6_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx24_XC_6 = z;
    __WXML_GLOBAL__.ops_init.$gwx24_XC_6 = true;
    var x = ["./pages/comment/topicDetail.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx24_XC_6_1();
      var lGE = _n("view");
      _rz(z, lGE, "class", 0, e, s, gg);
      var eJE = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 1, "uI", 1],
        [],
        e,
        s,
        gg
      );
      _(lGE, eJE);
      var aHE = _v();
      _(lGE, aHE);
      if (_oz(z, 3, e, s, gg)) {
        aHE.wxVkey = 1;
        var bKE = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 4, "uI", 1, "uP", 2],
          [],
          e,
          s,
          gg
        );
        _(aHE, bKE);
      }
      var tIE = _v();
      _(lGE, tIE);
      if (_oz(z, 7, e, s, gg)) {
        tIE.wxVkey = 1;
        var oLE = _mz(
          z,
          "zxg-webview",
          ["bind:__l", 8, "uI", 1, "uP", 2],
          [],
          e,
          s,
          gg
        );
        _(tIE, oLE);
      }
      aHE.wxXCkey = 1;
      aHE.wxXCkey = 3;
      tIE.wxXCkey = 1;
      tIE.wxXCkey = 3;
      _(r, lGE);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx24_XC_6";
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
if (__vd_version_info__.delayedGwx || false) $gwx24_XC_6();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/comment/topicDetail.wxml"] = [
    $gwx24_XC_6,
    "./pages/comment/topicDetail.wxml",
  ];
else
  __wxAppCode__["pages/comment/topicDetail.wxml"] = $gwx24_XC_6(
    "./pages/comment/topicDetail.wxml"
  );
__wxRoute = "pages/comment/topicDetail";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/comment/topicDetail.js";
define(
  "pages/comment/topicDetail.js",
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
        o.resolveComponent("stock-privacy-dialog") +
        o.resolveComponent("zxg-webview")
      )();
    var n = o._export_sfc(
      {
        components: {
          zxgWebview: function () {
            return "../../components/webView.js";
          },
        },
        data: function () {
          return { url: "" };
        },
        onLoad: function (o) {
          if (o) {
            var n = o.topicId || "";
            this.url =
              "https://wzq.tenpay.com/mp/v2/index.html#/topic/topic?topicId=".concat(
                n,
                "&from=miniapp"
              );
          }
        },
      },
      [
        [
          "render",
          function (n, e, t, r, i, c) {
            return {
              a: n.rootFontSize,
              b: o.p({ "no-auto": !0 }),
              c: o.p({ src: i.url }),
              d: o.n("black" == n.skin ? "skin-black" : "skin-white"),
            };
          },
        ],
      ]
    );
    wx.createPage(n);
  },
  {
    isPage: true,
    isComponent: true,
    currentFile: "pages/comment/topicDetail.js",
  }
);
require("pages/comment/topicDetail.js");
