$gwx16_XC_2 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx16_XC_2 || [];
    function gz$gwx16_XC_2_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx16_XC_2_1)
        return __WXML_GLOBAL__.ops_cached.$gwx16_XC_2_1;
      __WXML_GLOBAL__.ops_cached.$gwx16_XC_2_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "financial-report-wrapper data-v-60647581"]);
        Z([3, "__l"]);
        Z([3, "data-v-60647581"]);
        Z([3, "60647581-0"]);
        Z([[7], [3, "b"]]);
        Z(z[1]);
        Z(z[2]);
        Z([3, "60647581-1"]);
        Z(z[4]);
        Z(z[1]);
        Z([3, "r data-v-60647581"]);
        Z([3, "60647581-2"]);
        Z([3, "searchList"]);
      })(__WXML_GLOBAL__.ops_cached.$gwx16_XC_2_1);
      return __WXML_GLOBAL__.ops_cached.$gwx16_XC_2_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx16_XC_2 = z;
    __WXML_GLOBAL__.ops_init.$gwx16_XC_2 = true;
    var x = ["./pages/report/AIFinancial/search.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx16_XC_2_1();
      var bO = _n("view");
      _rz(z, bO, "class", 0, e, s, gg);
      var xQ = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 1, "class", 1, "uI", 2],
        [],
        e,
        s,
        gg
      );
      _(bO, xQ);
      var oP = _v();
      _(bO, oP);
      if (_oz(z, 4, e, s, gg)) {
        oP.wxVkey = 1;
        var oR = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 5, "class", 1, "uI", 2, "uP", 3],
          [],
          e,
          s,
          gg
        );
        _(oP, oR);
      }
      var fS = _mz(
        z,
        "a-i-financial-report-search-list",
        ["bind:__l", 9, "class", 1, "uI", 2, "uR", 3],
        [],
        e,
        s,
        gg
      );
      _(bO, fS);
      oP.wxXCkey = 1;
      oP.wxXCkey = 3;
      _(r, bO);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx16_XC_2";
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
if (__vd_version_info__.delayedGwx || false) $gwx16_XC_2();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/report/AIFinancial/search.wxml"] = [
    $gwx16_XC_2,
    "./pages/report/AIFinancial/search.wxml",
  ];
else
  __wxAppCode__["pages/report/AIFinancial/search.wxml"] = $gwx16_XC_2(
    "./pages/report/AIFinancial/search.wxml"
  );
__wxRoute = "pages/report/AIFinancial/search";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/report/AIFinancial/search.js";
define(
  "pages/report/AIFinancial/search.js",
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
      r = {
        components: {
          AIFinancialReportSearchList: function () {
            return "../../reportFinancialSbg/search.js";
          },
        },
        onPageScroll: getApp().globalData.throttle(16, function (e) {
          try {
            this.$refs.searchList && this.$refs.searchList.handleScroll(e);
          } catch (e) {}
        }),
        onShow: function () {
          e.StockBridge.report("news.aifinancialreport.search.brow");
        },
        onShareAppMessage: function () {
          return {
            title: "【财报速递】您的财报小助手",
            path: "/pages/report/AIFinancial/search?from=share",
          };
        },
        onShareTimeline: function () {
          return {
            title: "【财报速递】您的财报小助手",
            query: "pageType=search&from=share",
          };
        },
      };
    Array ||
      (
        e.resolveComponent("mp-privacy-dialog") +
        e.resolveComponent("stock-privacy-dialog") +
        e.resolveComponent("AIFinancialReportSearchList")
      )();
    var o = e._export_sfc(r, [
      [
        "render",
        function (r, o, t, a, n, i) {
          return {
            a: r.rootFontSize,
            b: e.p({ "no-auto": !0 }),
            c: e.sr("searchList", "60647581-2"),
          };
        },
      ],
      ["__scopeId", "data-v-60647581"],
    ]);
    (r.__runtimeHooks = 7), wx.createPage(o);
  },
  {
    isPage: true,
    isComponent: true,
    currentFile: "pages/report/AIFinancial/search.js",
  }
);
require("pages/report/AIFinancial/search.js");
