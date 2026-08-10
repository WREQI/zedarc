$gwx3_XC_30 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx3_XC_30 || [];
    function gz$gwx3_XC_30_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx3_XC_30_1)
        return __WXML_GLOBAL__.ops_cached.$gwx3_XC_30_1;
      __WXML_GLOBAL__.ops_cached.$gwx3_XC_30_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "a"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx3_XC_30_1);
      return __WXML_GLOBAL__.ops_cached.$gwx3_XC_30_1;
    }
    function gz$gwx3_XC_30_2() {
      if (__WXML_GLOBAL__.ops_cached.$gwx3_XC_30_2)
        return __WXML_GLOBAL__.ops_cached.$gwx3_XC_30_2;
      __WXML_GLOBAL__.ops_cached.$gwx3_XC_30_2 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
      })(__WXML_GLOBAL__.ops_cached.$gwx3_XC_30_2);
      return __WXML_GLOBAL__.ops_cached.$gwx3_XC_30_2;
    }
    __WXML_GLOBAL__.ops_set.$gwx3_XC_30 = z;
    __WXML_GLOBAL__.ops_init.$gwx3_XC_30 = true;
    var x = [
      "./pages/detailSbg/@tencent/wzq-detail-indexrank/components/MarketIcon.wxml",
      "./pages/detailSbg/@tencent/wzq-detail-indexrank/components/NoData.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx3_XC_30_1();
      var hQ7 = _v();
      _(r, hQ7);
      if (_oz(z, 0, e, s, gg)) {
        hQ7.wxVkey = 1;
      }
      hQ7.wxXCkey = 1;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    d_[x[1]] = {};
    var m1 = function (e, s, r, gg) {
      var z = gz$gwx3_XC_30_2();
      var cS7 = _n("slot");
      _(r, cS7);
      return r;
    };
    e_[x[1]] = { f: m1, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx3_XC_30";
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
if (__vd_version_info__.delayedGwx || false) $gwx3_XC_30();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/detailSbg/@tencent/wzq-detail-indexrank/components/MarketIcon.wxml"
  ] = [
    $gwx3_XC_30,
    "./pages/detailSbg/@tencent/wzq-detail-indexrank/components/MarketIcon.wxml",
  ];
else
  __wxAppCode__[
    "pages/detailSbg/@tencent/wzq-detail-indexrank/components/MarketIcon.wxml"
  ] = $gwx3_XC_30(
    "./pages/detailSbg/@tencent/wzq-detail-indexrank/components/MarketIcon.wxml"
  );
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/detailSbg/@tencent/wzq-detail-indexrank/components/NoData.wxml"
  ] = [
    $gwx3_XC_30,
    "./pages/detailSbg/@tencent/wzq-detail-indexrank/components/NoData.wxml",
  ];
else
  __wxAppCode__[
    "pages/detailSbg/@tencent/wzq-detail-indexrank/components/NoData.wxml"
  ] = $gwx3_XC_30(
    "./pages/detailSbg/@tencent/wzq-detail-indexrank/components/NoData.wxml"
  );
__wxRoute =
  "pages/detailSbg/@tencent/wzq-detail-indexrank/components/MarketIcon";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/detailSbg/@tencent/wzq-detail-indexrank/components/MarketIcon.js";
define(
  "pages/detailSbg/@tencent/wzq-detail-indexrank/components/MarketIcon.js",
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
    var t = require("../../stock-hq-data/index.js"),
      e = require("../api/temp.js"),
      s = require("../../../../../common/vendor.js"),
      o = {
        props: ["iconType", "stockType", "stockCode"],
        data: function () {
          return { showImg: !0 };
        },
        computed: {
          iconStyle: function () {
            return this.getIconType(this.iconType, this.stockType);
          },
          imgsrc: function () {
            var t = this.getIconType(this.iconType, this.stockType),
              e = t && t.slice(8);
            return e
              ? "https://wzq.tenpay.com/resources/mp-files/portfolio/icon/".concat(
                  e,
                  ".svg"
                )
              : ((this.showImg = !1), "");
          },
        },
        methods: {
          getIconType: function (s, o) {
            if (s) {
              var i = e.getMarketPYName(s) || "";
              if (!i)
                try {
                  +s > 600 ? (i = "us") : +s > 300 && (i = "hk"),
                    ("uk" !== s && "jj" !== s && "nq" !== s) || (i = s),
                    "ft" === s && (i = "hqzhi");
                } catch (t) {}
              var c = o;
              if (
                (t.utils.isKeChuangStock(c)
                  ? (i = "ke")
                  : t.utils.isChuangYeStock(c)
                  ? (i = "chuang")
                  : t.utils.isFund(c) && "jj" !== s
                  ? (i = "cnjj")
                  : t.utils.isFund(c) && "jj" === s && (i = "cwjj"),
                "sh" === i)
              ) {
                var n = this.stockCode;
                n && /^68/.test(n) && (i = "ke");
              }
              if ("sz" === i) {
                var r = this.stockCode;
                r && /^30/.test(r) && (i = "chuang");
              }
              return (this.imgtype = i), "hq-icon-".concat(i);
            }
          },
        },
      },
      i = s._export_sfc(o, [
        [
          "render",
          function (t, e, o, i, c, n) {
            return s.e(
              { a: c.showImg },
              c.showImg ? { b: n.imgsrc, c: s.n(n.iconStyle) } : {}
            );
          },
        ],
        ["__scopeId", "data-v-09a34809"],
      ]);
    wx.createComponent(i);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/detailSbg/@tencent/wzq-detail-indexrank/components/MarketIcon.js",
  }
);
require("pages/detailSbg/@tencent/wzq-detail-indexrank/components/MarketIcon.js");
__wxRoute = "pages/detailSbg/@tencent/wzq-detail-indexrank/components/NoData";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/detailSbg/@tencent/wzq-detail-indexrank/components/NoData.js";
define(
  "pages/detailSbg/@tencent/wzq-detail-indexrank/components/NoData.js",
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
    var e = require("../../../../../common/vendor.js")._export_sfc(
      { name: "noData" },
      [
        [
          "render",
          function (e, r, n, o, t, a) {
            return {};
          },
        ],
        ["__scopeId", "data-v-46055043"],
      ]
    );
    wx.createComponent(e);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/detailSbg/@tencent/wzq-detail-indexrank/components/NoData.js",
  }
);
require("pages/detailSbg/@tencent/wzq-detail-indexrank/components/NoData.js");
