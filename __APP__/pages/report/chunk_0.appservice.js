$gwx16_XC_0 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx16_XC_0 || [];
    function gz$gwx16_XC_0_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx16_XC_0_1)
        return __WXML_GLOBAL__.ops_cached.$gwx16_XC_0_1;
      __WXML_GLOBAL__.ops_cached.$gwx16_XC_0_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "__l"]);
        Z([3, "7cb11478-0"]);
        Z([[7], [3, "b"]]);
        Z(z[0]);
        Z([3, "7cb11478-1"]);
        Z(z[2]);
        Z([[7], [3, "c"]]);
        Z(z[0]);
        Z([3, "r"]);
        Z([3, "7cb11478-2"]);
        Z([[7], [3, "e"]]);
        Z([3, "aiFinancialRef"]);
      })(__WXML_GLOBAL__.ops_cached.$gwx16_XC_0_1);
      return __WXML_GLOBAL__.ops_cached.$gwx16_XC_0_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx16_XC_0 = z;
    __WXML_GLOBAL__.ops_init.$gwx16_XC_0 = true;
    var x = ["./pages/report/AIFinancial/index.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx16_XC_0_1();
      var oB = _n("view");
      var fE = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 0, "uI", 1],
        [],
        e,
        s,
        gg
      );
      _(oB, fE);
      var xC = _v();
      _(oB, xC);
      if (_oz(z, 2, e, s, gg)) {
        xC.wxVkey = 1;
        var cF = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 3, "uI", 1, "uP", 2],
          [],
          e,
          s,
          gg
        );
        _(xC, cF);
      }
      var oD = _v();
      _(oB, oD);
      if (_oz(z, 6, e, s, gg)) {
        oD.wxVkey = 1;
        var hG = _mz(
          z,
          "a-i-financial",
          ["bind:__l", 7, "class", 1, "uI", 2, "uP", 3, "uR", 4],
          [],
          e,
          s,
          gg
        );
        _(oD, hG);
      }
      xC.wxXCkey = 1;
      xC.wxXCkey = 3;
      oD.wxXCkey = 1;
      oD.wxXCkey = 3;
      _(r, oB);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx16_XC_0";
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
if (__vd_version_info__.delayedGwx || false) $gwx16_XC_0();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/report/AIFinancial/index.wxml"] = [
    $gwx16_XC_0,
    "./pages/report/AIFinancial/index.wxml",
  ];
else
  __wxAppCode__["pages/report/AIFinancial/index.wxml"] = $gwx16_XC_0(
    "./pages/report/AIFinancial/index.wxml"
  );
__wxRoute = "pages/report/AIFinancial/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/report/AIFinancial/index.js";
define(
  "pages/report/AIFinancial/index.js",
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
    var n = require("../../../@babel/runtime/helpers/regeneratorRuntime"),
      e = require("../../../common/vendor.js"),
      a = {
        components: {
          AIFinancial: function () {
            return "../../reportFinancialSbg/report.js";
          },
        },
        data: function () {
          return { param: null };
        },
        onLoad: function (n) {
          this.param = n;
        },
        onShow: function () {
          try {
            this.$refs.aiFinancialRef && this.$refs.aiFinancialRef.onShow();
          } catch (n) {}
        },
        onPageScroll: getApp().globalData.throttle(16, function (n) {
          try {
            this.$refs.aiFinancialRef &&
              this.$refs.aiFinancialRef.onPageScroll(n);
          } catch (n) {}
        }),
        onReachBottom: function () {
          try {
            this.$refs.aiFinancialRef &&
              this.$refs.aiFinancialRef.onReachBottom();
          } catch (n) {}
        },
        onHide: function () {
          try {
            this.$refs.aiFinancialRef && this.$refs.aiFinancialRef.onHide();
          } catch (n) {}
        },
        onShareAppMessage: function () {
          return (
            (e = this),
            null,
            (a = n().mark(function e() {
              return n().wrap(
                function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (n.prev = 0), (n.next = 3), this.$refs.aiFinancialRef
                        );
                      case 3:
                        if (((n.t0 = n.sent), !n.t0)) {
                          n.next = 6;
                          break;
                        }
                        n.t0 = this.$refs.aiFinancialRef.onShareAppMessage();
                      case 6:
                        return n.abrupt("return", n.t0);
                      case 9:
                        (n.prev = 9), (n.t1 = n.catch(0));
                      case 11:
                      case "end":
                        return n.stop();
                    }
                },
                e,
                this,
                [[0, 9]]
              );
            })),
            new Promise(function (n, t) {
              var r = function (n) {
                  try {
                    o(a.next(n));
                  } catch (n) {
                    t(n);
                  }
                },
                i = function (n) {
                  try {
                    o(a.throw(n));
                  } catch (n) {
                    t(n);
                  }
                },
                o = function (e) {
                  return e.done
                    ? n(e.value)
                    : Promise.resolve(e.value).then(r, i);
                };
              o((a = a.apply(e, null)).next());
            })
          );
          var e, a;
        },
        onShareTimeline: function () {
          try {
            return (
              this.$refs.aiFinancialRef &&
              this.$refs.aiFinancialRef.onShareTimeline()
            );
          } catch (n) {}
        },
      };
    Array ||
      (
        e.resolveComponent("mp-privacy-dialog") +
        e.resolveComponent("stock-privacy-dialog") +
        e.resolveComponent("AIFinancial")
      )();
    var t = e._export_sfc(a, [
      [
        "render",
        function (n, a, t, r, i, o) {
          return e.e(
            { a: n.rootFontSize, b: e.p({ "no-auto": !0 }), c: i.param },
            i.param
              ? {
                  d: e.sr("aiFinancialRef", "7cb11478-2"),
                  e: e.p({ param: i.param }),
                }
              : {}
          );
        },
      ],
    ]);
    (a.__runtimeHooks = 7), wx.createPage(t);
  },
  {
    isPage: true,
    isComponent: true,
    currentFile: "pages/report/AIFinancial/index.js",
  }
);
require("pages/report/AIFinancial/index.js");
