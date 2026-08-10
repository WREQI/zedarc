$gwx4_XC_7 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx4_XC_7 || [];
    function gz$gwx4_XC_7_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx4_XC_7_1)
        return __WXML_GLOBAL__.ops_cached.$gwx4_XC_7_1;
      __WXML_GLOBAL__.ops_cached.$gwx4_XC_7_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div intro-page data-v-09ee6ffa"]);
        Z([3, "__l"]);
        Z([3, "data-v-09ee6ffa"]);
        Z([3, "09ee6ffa-0"]);
        Z([[7], [3, "b"]]);
        Z(z[1]);
        Z(z[2]);
        Z([3, "09ee6ffa-1"]);
        Z(z[4]);
      })(__WXML_GLOBAL__.ops_cached.$gwx4_XC_7_1);
      return __WXML_GLOBAL__.ops_cached.$gwx4_XC_7_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx4_XC_7 = z;
    __WXML_GLOBAL__.ops_init.$gwx4_XC_7 = true;
    var x = ["./pages/quote/tradeLineIntro.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx4_XC_7_1();
      var o8Q = _n("view");
      _rz(z, o8Q, "class", 0, e, s, gg);
      var o0Q = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 1, "class", 1, "uI", 2],
        [],
        e,
        s,
        gg
      );
      _(o8Q, o0Q);
      var c9Q = _v();
      _(o8Q, c9Q);
      if (_oz(z, 4, e, s, gg)) {
        c9Q.wxVkey = 1;
        var lAR = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 5, "class", 1, "uI", 2, "uP", 3],
          [],
          e,
          s,
          gg
        );
        _(c9Q, lAR);
      }
      c9Q.wxXCkey = 1;
      c9Q.wxXCkey = 3;
      _(r, o8Q);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx4_XC_7";
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
if (__vd_version_info__.delayedGwx || false) $gwx4_XC_7();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/quote/tradeLineIntro.wxml"] = [
    $gwx4_XC_7,
    "./pages/quote/tradeLineIntro.wxml",
  ];
else
  __wxAppCode__["pages/quote/tradeLineIntro.wxml"] = $gwx4_XC_7(
    "./pages/quote/tradeLineIntro.wxml"
  );
__wxRoute = "pages/quote/tradeLineIntro";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/quote/tradeLineIntro.js";
define(
  "pages/quote/tradeLineIntro.js",
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
    var t = require("../../common/vendor.js"),
      e = {
        data: function () {
          return {
            hqBridge: new t.HQBridge(),
            imageUrl: "https://st.gtimg.com/image/kline/trade-line",
            stat: "",
          };
        },
        onLoad: function (t) {
          (this.stat = t.stat || ""),
            this.hqBridge.report("hq.stock_detail.trade_line_intro_exposure");
        },
        methods: {
          goOpenAccount: function (e) {
            t.useApplyEntry.toApply({ dealerCode: "10100", stat: this.stat }),
              this.hqBridge.report(
                "hq.stock_detail.trade_line_".concat(e, "_account_click")
              );
          },
        },
      };
    Array ||
      (
        t.resolveComponent("mp-privacy-dialog") +
        t.resolveComponent("stock-privacy-dialog")
      )();
    var n = t._export_sfc(e, [
      [
        "render",
        function (e, n, o, r, i, a) {
          return {
            a: e.rootFontSize,
            b: t.p({ "no-auto": !0 }),
            c: "".concat(i.imageUrl, "/intro-header.png"),
            d: t.o(function (t) {
              return a.goOpenAccount("top");
            }, 199),
            e: "".concat(i.imageUrl, "/intro-general.png"),
            f: "".concat(i.imageUrl, "/intro-title-left.png"),
            g: "".concat(i.imageUrl, "/intro-title-right.png"),
            h: "".concat(i.imageUrl, "/intro-rise.png"),
            i: "".concat(i.imageUrl, "/intro-drop.png"),
            j: "".concat(i.imageUrl, "/intro-title-left.png"),
            k: "".concat(i.imageUrl, "/intro-title-right.png"),
            l: "".concat(i.imageUrl, "/intro-usage.png"),
            m: t.o(function (t) {
              return a.goOpenAccount("bottom");
            }, 200),
          };
        },
      ],
      ["__scopeId", "data-v-09ee6ffa"],
    ]);
    wx.createPage(n);
  },
  {
    isPage: true,
    isComponent: true,
    currentFile: "pages/quote/tradeLineIntro.js",
  }
);
require("pages/quote/tradeLineIntro.js");
