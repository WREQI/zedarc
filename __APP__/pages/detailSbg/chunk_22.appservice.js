$gwx3_XC_15 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx3_XC_15 || [];
    function gz$gwx3_XC_15_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx3_XC_15_1)
        return __WXML_GLOBAL__.ops_cached.$gwx3_XC_15_1;
      __WXML_GLOBAL__.ops_cached.$gwx3_XC_15_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div slider-content data-v-535470b8"]);
        Z([[7], [3, "q"]]);
        Z([[7], [3, "a"]]);
        Z([[7], [3, "c"]]);
        Z([[7], [3, "m"]]);
        Z([[7], [3, "o"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx3_XC_15_1);
      return __WXML_GLOBAL__.ops_cached.$gwx3_XC_15_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx3_XC_15 = z;
    __WXML_GLOBAL__.ops_init.$gwx3_XC_15 = true;
    var x = [
      "./pages/detailSbg/@tencent/stock-markets-base/components/Slide/mp.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx3_XC_15_1();
      var cKT = _mz(z, "view", ["class", 0, "style", 1], [], e, s, gg);
      var oLT = _v();
      _(cKT, oLT);
      if (_oz(z, 2, e, s, gg)) {
        oLT.wxVkey = 1;
      }
      var lMT = _v();
      _(cKT, lMT);
      if (_oz(z, 3, e, s, gg)) {
        lMT.wxVkey = 1;
      }
      var aNT = _v();
      _(cKT, aNT);
      if (_oz(z, 4, e, s, gg)) {
        aNT.wxVkey = 1;
      }
      var tOT = _v();
      _(cKT, tOT);
      if (_oz(z, 5, e, s, gg)) {
        tOT.wxVkey = 1;
      }
      oLT.wxXCkey = 1;
      lMT.wxXCkey = 1;
      aNT.wxXCkey = 1;
      tOT.wxXCkey = 1;
      _(r, cKT);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx3_XC_15";
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
if (__vd_version_info__.delayedGwx || false) $gwx3_XC_15();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/detailSbg/@tencent/stock-markets-base/components/Slide/mp.wxml"
  ] = [
    $gwx3_XC_15,
    "./pages/detailSbg/@tencent/stock-markets-base/components/Slide/mp.wxml",
  ];
else
  __wxAppCode__[
    "pages/detailSbg/@tencent/stock-markets-base/components/Slide/mp.wxml"
  ] = $gwx3_XC_15(
    "./pages/detailSbg/@tencent/stock-markets-base/components/Slide/mp.wxml"
  );
__wxRoute = "pages/detailSbg/@tencent/stock-markets-base/components/Slide/mp";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/detailSbg/@tencent/stock-markets-base/components/Slide/mp.js";
define(
  "pages/detailSbg/@tencent/stock-markets-base/components/Slide/mp.js",
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
    require("../../../../../../@babel/runtime/helpers/Arrayincludes");
    var e = require("../../../../../../common/vendor.js"),
      o = e.defineComponent({
        props: {
          max: { type: Number, default: 250 },
          min: { type: Number, default: 1 },
          value: { type: Number, default: 1 },
          showOperator: { type: Boolean, default: !0 },
          width: { type: Number, default: 320 },
          showMaxMin: { type: Boolean, default: !0 },
        },
        emits: ["emit"],
        setup: function (o, n) {
          var a = n.emit,
            t = ["mpwzq", "wzqlight"].includes("mpweapp"),
            u = e.ref(o.value),
            r = e.ref({
              backgroundColor: "#E9EBF0",
              activeColor: t ? "#E63535" : "#3077ec",
              blockSize: 18,
              min: o.min,
              max: o.max,
              showValue: !1,
            }),
            i = e.computed(function () {
              return o.width ? { width: "".concat(o.width, "px") } : "";
            });
          return (
            e.watch(
              function () {
                return o.value;
              },
              function (e) {
                u.value = e;
              }
            ),
            {
              contentStyle: i,
              options: r,
              curValue: u,
              reduce: function () {
                u.value <= o.min || ((u.value -= 1), a("valueChange", u.value));
              },
              add: function () {
                u.value >= o.max || ((u.value += 1), a("valueChange", u.value));
              },
              changeSlide: function (e) {
                var n;
                (u.value =
                  (null == (n = e.detail) ? void 0 : n.value) || o.min),
                  a("valueChange", u.value);
              },
            }
          );
        },
      }),
      n = e._export_sfc(o, [
        [
          "render",
          function (o, n, a, t, u, r) {
            return e.e(
              { a: o.showOperator },
              o.showOperator
                ? {
                    b: e.o(function () {
                      return o.reduce && o.reduce.apply(o, arguments);
                    }, 2283),
                  }
                : {},
              { c: o.showMaxMin },
              o.showMaxMin ? { d: e.t(o.min) } : {},
              {
                e: o.options.backgroundColor,
                f: o.options.activeColor,
                g: o.curValue,
                h: o.options.blockSize,
                i: o.options.min,
                j: o.options.max,
                k: o.options.showValue,
                l: e.o(function () {
                  return o.changeSlide && o.changeSlide.apply(o, arguments);
                }, 2284),
                m: o.showMaxMin,
              },
              o.showMaxMin ? { n: e.t(o.max) } : {},
              { o: o.showOperator },
              o.showOperator
                ? {
                    p: e.o(function () {
                      return o.add && o.add.apply(o, arguments);
                    }, 2285),
                  }
                : {},
              { q: e.s(o.contentStyle) }
            );
          },
        ],
        ["__scopeId", "data-v-535470b8"],
      ]);
    wx.createComponent(n);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/detailSbg/@tencent/stock-markets-base/components/Slide/mp.js",
  }
);
require("pages/detailSbg/@tencent/stock-markets-base/components/Slide/mp.js");
