$gwx47_XC_26 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx47_XC_26 || [];
    function gz$gwx47_XC_26_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx47_XC_26_1)
        return __WXML_GLOBAL__.ops_cached.$gwx47_XC_26_1;
      __WXML_GLOBAL__.ops_cached.$gwx47_XC_26_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "a"]]);
        Z([3, "__l"]);
        Z([[7], [3, "f"]]);
        Z([3, "r data-v-f1f27dbf"]);
        Z([3, "f1f27dbf-0"]);
        Z([3, "semimask"]);
        Z([[4], [[5], [1, "d"]]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx47_XC_26_1);
      return __WXML_GLOBAL__.ops_cached.$gwx47_XC_26_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx47_XC_26 = z;
    __WXML_GLOBAL__.ops_init.$gwx47_XC_26 = true;
    var x = [
      "./pages/marketSbg/@tencent/stock-hq-etf/components/TeachPop.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx47_XC_26_1();
      var cH1 = _v();
      _(r, cH1);
      if (_oz(z, 0, e, s, gg)) {
        cH1.wxVkey = 1;
        var hI1 = _mz(
          z,
          "semi-mask",
          [
            "bind:__l",
            1,
            "bindcloseSemimask",
            1,
            "class",
            2,
            "uI",
            3,
            "uR",
            4,
            "uS",
            5,
          ],
          [],
          e,
          s,
          gg
        );
        _(cH1, hI1);
      }
      cH1.wxXCkey = 1;
      cH1.wxXCkey = 3;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx47_XC_26";
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
if (__vd_version_info__.delayedGwx || false) $gwx47_XC_26();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/marketSbg/@tencent/stock-hq-etf/components/TeachPop.wxml"
  ] = [
    $gwx47_XC_26,
    "./pages/marketSbg/@tencent/stock-hq-etf/components/TeachPop.wxml",
  ];
else
  __wxAppCode__[
    "pages/marketSbg/@tencent/stock-hq-etf/components/TeachPop.wxml"
  ] = $gwx47_XC_26(
    "./pages/marketSbg/@tencent/stock-hq-etf/components/TeachPop.wxml"
  );
__wxRoute = "pages/marketSbg/@tencent/stock-hq-etf/components/TeachPop";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/marketSbg/@tencent/stock-hq-etf/components/TeachPop.js";
define(
  "pages/marketSbg/@tencent/stock-hq-etf/components/TeachPop.js",
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
      o = {
        components: {
          semiMask: function () {
            return "../../../../asyncCom/@tencent/st-semi-modal/index.js";
          },
        },
        props: {
          showPop: { type: Boolean, default: !1 },
          title: { type: String, default: "指数过滤" },
          infoText: {
            type: String,
            default:
              "市场上存在多只ETF跟踪同一指数，这些ETF的走势相近。勾选“指数过滤”后，榜单内跟踪相同指数的ETF仅展示一只。",
          },
        },
        methods: {
          closePop: function () {
            var e;
            null == (e = this.$refs) || e.semimask.closeSemimask();
          },
          closeSemimask: function () {
            this.$emit("closeTeachPop");
          },
        },
      };
    Array || e.resolveComponent("semiMask")();
    var t = e._export_sfc(o, [
      [
        "render",
        function (o, t, s, n, i, r) {
          return e.e(
            { a: s.showPop },
            s.showPop
              ? {
                  b: e.t(s.title),
                  c: e.o(function () {
                    return r.closePop && r.closePop.apply(r, arguments);
                  }, 3161),
                  d: e.t(s.infoText),
                  e: e.sr("semimask", "f1f27dbf-0"),
                  f: e.o(r.closeSemimask, 3162),
                }
              : {}
          );
        },
      ],
      ["__scopeId", "data-v-f1f27dbf"],
    ]);
    wx.createComponent(t);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile: "pages/marketSbg/@tencent/stock-hq-etf/components/TeachPop.js",
  }
);
require("pages/marketSbg/@tencent/stock-hq-etf/components/TeachPop.js");
