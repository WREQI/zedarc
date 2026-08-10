$gwx1_XC_14 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx1_XC_14 || [];
    function gz$gwx1_XC_14_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx1_XC_14_1)
        return __WXML_GLOBAL__.ops_cached.$gwx1_XC_14_1;
      __WXML_GLOBAL__.ops_cached.$gwx1_XC_14_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "a"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx1_XC_14_1);
      return __WXML_GLOBAL__.ops_cached.$gwx1_XC_14_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx1_XC_14 = z;
    __WXML_GLOBAL__.ops_init.$gwx1_XC_14 = true;
    var x = [
      "./pages/asyncCom/@tencent/stock-monitoring-remind/components/CloseMonitoringPop.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx1_XC_14_1();
      var hCE = _v();
      _(r, hCE);
      if (_oz(z, 0, e, s, gg)) {
        hCE.wxVkey = 1;
      }
      hCE.wxXCkey = 1;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx1_XC_14";
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
if (__vd_version_info__.delayedGwx || false) $gwx1_XC_14();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/asyncCom/@tencent/stock-monitoring-remind/components/CloseMonitoringPop.wxml"
  ] = [
    $gwx1_XC_14,
    "./pages/asyncCom/@tencent/stock-monitoring-remind/components/CloseMonitoringPop.wxml",
  ];
else
  __wxAppCode__[
    "pages/asyncCom/@tencent/stock-monitoring-remind/components/CloseMonitoringPop.wxml"
  ] = $gwx1_XC_14(
    "./pages/asyncCom/@tencent/stock-monitoring-remind/components/CloseMonitoringPop.wxml"
  );
__wxRoute =
  "pages/asyncCom/@tencent/stock-monitoring-remind/components/CloseMonitoringPop";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/asyncCom/@tencent/stock-monitoring-remind/components/CloseMonitoringPop.js";
define(
  "pages/asyncCom/@tencent/stock-monitoring-remind/components/CloseMonitoringPop.js",
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
    var e = require("../../../../../common/vendor.js"),
      n = require("../utils/util.js"),
      t = e.defineComponent({
        name: "CloseMonitoringPop",
        props: { enableTheme: { type: Boolean, default: !1 } },
        emits: ["cancel", "confirm"],
        setup: function (t, i) {
          var o = i.emit,
            r = e.ref(!0),
            c = n.getTheme(),
            l = e.computed(function () {
              return t.enableTheme ? c : "white";
            }),
            a = function () {
              r.value = !1;
            },
            u = function () {
              a(), o("cancel");
            };
          return {
            visible: r,
            lite: !1,
            currentTheme: l,
            show: function () {
              r.value = !0;
            },
            hide: a,
            handleCancel: u,
            handleConfirm: function () {
              a(), o("confirm");
            },
            handleMaskClick: function () {
              u();
            },
          };
        },
      }),
      i = e._export_sfc(t, [
        [
          "render",
          function (n, t, i, o, r, c) {
            return e.e(
              { a: n.visible },
              n.visible
                ? {
                    b: e.o(function () {
                      return (
                        n.handleCancel && n.handleCancel.apply(n, arguments)
                      );
                    }, 2364),
                    c: e.n(n.lite ? "lite-style" : ""),
                    d: e.o(function () {
                      return (
                        n.handleConfirm && n.handleConfirm.apply(n, arguments)
                      );
                    }, 2365),
                    e: e.n("theme-".concat(n.currentTheme)),
                  }
                : {}
            );
          },
        ],
        ["__scopeId", "data-v-f4b9004b"],
      ]);
    wx.createComponent(i);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/asyncCom/@tencent/stock-monitoring-remind/components/CloseMonitoringPop.js",
  }
);
require("pages/asyncCom/@tencent/stock-monitoring-remind/components/CloseMonitoringPop.js");
