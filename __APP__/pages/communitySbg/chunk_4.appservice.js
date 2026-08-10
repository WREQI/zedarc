$gwx23_XC_4 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx23_XC_4 || [];
    function gz$gwx23_XC_4_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx23_XC_4_1)
        return __WXML_GLOBAL__.ops_cached.$gwx23_XC_4_1;
      __WXML_GLOBAL__.ops_cached.$gwx23_XC_4_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "tab"]);
        Z([[7], [3, "a"]]);
        Z([3, "e"]);
        Z([[6], [[7], [3, "tab"]], [3, "g"]]);
        Z([
          [4],
          [
            [5],
            [
              [5],
              [[5], [[5], [1, "_div"]], [1, "data-v-02345cc2"]],
              [1, "tab"],
            ],
            [[6], [[7], [3, "tab"]], [3, "f"]],
          ],
        ]);
        Z([[6], [[7], [3, "tab"]], [3, "d"]]);
        Z([[6], [[7], [3, "tab"]], [3, "b"]]);
        Z([3, "__l"]);
        Z([3, "data-v-02345cc2"]);
        Z([[6], [[7], [3, "tab"]], [3, "c"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx23_XC_4_1);
      return __WXML_GLOBAL__.ops_cached.$gwx23_XC_4_1;
    }
    function gz$gwx23_XC_4_2() {
      if (__WXML_GLOBAL__.ops_cached.$gwx23_XC_4_2)
        return __WXML_GLOBAL__.ops_cached.$gwx23_XC_4_2;
      __WXML_GLOBAL__.ops_cached.$gwx23_XC_4_2 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
      })(__WXML_GLOBAL__.ops_cached.$gwx23_XC_4_2);
      return __WXML_GLOBAL__.ops_cached.$gwx23_XC_4_2;
    }
    __WXML_GLOBAL__.ops_set.$gwx23_XC_4 = z;
    __WXML_GLOBAL__.ops_init.$gwx23_XC_4 = true;
    var x = [
      "./pages/communitySbg/@tencent/stock-community-ui/components/tabs/mp/index.wxml",
      "./pages/communitySbg/@tencent/stock-community-ui/components/tabs/redDot.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx23_XC_4_1();
      var xAJ = _v();
      _(r, xAJ);
      var oBJ = function (cDJ, fCJ, hEJ, gg) {
        var cGJ = _mz(
          z,
          "view",
          ["bindtap", 3, "class", 1, "id", 2],
          [],
          cDJ,
          fCJ,
          gg
        );
        var oHJ = _v();
        _(cGJ, oHJ);
        if (_oz(z, 6, cDJ, fCJ, gg)) {
          oHJ.wxVkey = 1;
          var lIJ = _mz(
            z,
            "red-dot",
            ["bind:__l", 7, "class", 1, "uI", 2],
            [],
            cDJ,
            fCJ,
            gg
          );
          _(oHJ, lIJ);
        }
        oHJ.wxXCkey = 1;
        oHJ.wxXCkey = 3;
        _(hEJ, cGJ);
        return hEJ;
      };
      xAJ.wxXCkey = 4;
      _2z(z, 1, oBJ, e, s, gg, xAJ, "tab", "index", "e");
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    d_[x[1]] = {};
    var m1 = function (e, s, r, gg) {
      var z = gz$gwx23_XC_4_2();
      return r;
    };
    e_[x[1]] = { f: m1, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx23_XC_4";
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
if (__vd_version_info__.delayedGwx || false) $gwx23_XC_4();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/communitySbg/@tencent/stock-community-ui/components/tabs/mp/index.wxml"
  ] = [
    $gwx23_XC_4,
    "./pages/communitySbg/@tencent/stock-community-ui/components/tabs/mp/index.wxml",
  ];
else
  __wxAppCode__[
    "pages/communitySbg/@tencent/stock-community-ui/components/tabs/mp/index.wxml"
  ] = $gwx23_XC_4(
    "./pages/communitySbg/@tencent/stock-community-ui/components/tabs/mp/index.wxml"
  );
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/communitySbg/@tencent/stock-community-ui/components/tabs/redDot.wxml"
  ] = [
    $gwx23_XC_4,
    "./pages/communitySbg/@tencent/stock-community-ui/components/tabs/redDot.wxml",
  ];
else
  __wxAppCode__[
    "pages/communitySbg/@tencent/stock-community-ui/components/tabs/redDot.wxml"
  ] = $gwx23_XC_4(
    "./pages/communitySbg/@tencent/stock-community-ui/components/tabs/redDot.wxml"
  );
__wxRoute =
  "pages/communitySbg/@tencent/stock-community-ui/components/tabs/mp/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/communitySbg/@tencent/stock-community-ui/components/tabs/mp/index.js";
define(
  "pages/communitySbg/@tencent/stock-community-ui/components/tabs/mp/index.js",
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
    var t = require("../../../../../../../common/vendor.js"),
      e = {
        components: {
          redDot: function () {
            return "../redDot.js";
          },
        },
        inject: {
          hqBridge: {
            default: function () {
              return {};
            },
          },
          stockBridge: {
            default: function () {
              return {};
            },
          },
        },
        props: {
          tabConfig: {
            type: Array,
            default: function () {
              return [];
            },
          },
          curIndex: { type: Number, default: 0 },
          showRedDot: { type: Boolean, default: !1 },
        },
        data: function () {
          return { currTabBarIndex: 0 };
        },
        computed: {
          colorClass: function () {
            return "zxg-color";
          },
        },
        methods: {
          switchTab: t.debounce(function (t) {
            this.value !== t && this.$emit("switchTab", t);
          }, 200),
        },
      };
    Array || t.resolveComponent("redDot")();
    var r = t._export_sfc(e, [
      [
        "render",
        function (e, r, n, o, c, u) {
          return {
            a: t.f(n.tabConfig, function (e, r, o) {
              return t.e(
                {
                  a: t.t(e.label),
                  b: n.showRedDot && n.curIndex !== r && 1 === r,
                },
                n.showRedDot && n.curIndex !== r && 1 === r
                  ? { c: "02345cc2-0-" + o }
                  : {},
                {
                  d: "tab-".concat(r),
                  e: r,
                  f: t.n(n.curIndex === r ? ["select-tab", u.colorClass] : ""),
                  g: t.o(
                    function (t) {
                      return u.switchTab(r);
                    },
                    4218,
                    r
                  ),
                }
              );
            }),
            b: "tab-".concat(c.currTabBarIndex),
          };
        },
      ],
      ["__scopeId", "data-v-02345cc2"],
    ]);
    wx.createComponent(r);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/communitySbg/@tencent/stock-community-ui/components/tabs/mp/index.js",
  }
);
require("pages/communitySbg/@tencent/stock-community-ui/components/tabs/mp/index.js");
__wxRoute =
  "pages/communitySbg/@tencent/stock-community-ui/components/tabs/redDot";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/communitySbg/@tencent/stock-community-ui/components/tabs/redDot.js";
define(
  "pages/communitySbg/@tencent/stock-community-ui/components/tabs/redDot.js",
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
    var e = require("../../../../../../common/vendor.js")._export_sfc({}, [
      [
        "render",
        function (e, r) {
          return {};
        },
      ],
      ["__scopeId", "data-v-b3ef1960"],
    ]);
    wx.createComponent(e);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/communitySbg/@tencent/stock-community-ui/components/tabs/redDot.js",
  }
);
require("pages/communitySbg/@tencent/stock-community-ui/components/tabs/redDot.js");
