$gwx3_XC_2 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx3_XC_2 || [];
    function gz$gwx3_XC_2_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx3_XC_2_1)
        return __WXML_GLOBAL__.ops_cached.$gwx3_XC_2_1;
      __WXML_GLOBAL__.ops_cached.$gwx3_XC_2_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "a"]]);
        Z([3, "_div brief-block data-v-acd98b98"]);
        Z([[7], [3, "d"]]);
        Z([3, "_div item-title-zxg data-v-acd98b98"]);
        Z([[7], [3, "b"]]);
        Z([3, "_div item-block one-column data-v-acd98b98"]);
        Z([[7], [3, "f"]]);
        Z([3, "val"]);
        Z([[7], [3, "j"]]);
        Z([3, "k"]);
        Z([[6], [[7], [3, "val"]], [3, "a"]]);
        Z([[6], [[7], [3, "val"]], [3, "d"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx3_XC_2_1);
      return __WXML_GLOBAL__.ops_cached.$gwx3_XC_2_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx3_XC_2 = z;
    __WXML_GLOBAL__.ops_init.$gwx3_XC_2 = true;
    var x = [
      "./pages/detailSbg/@tencent/stock-detail-brief/components/gshg-card.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx3_XC_2_1();
      var bWG = _v();
      _(r, bWG);
      if (_oz(z, 0, e, s, gg)) {
        bWG.wxVkey = 1;
        var oXG = _n("view");
        _rz(z, oXG, "class", 1, e, s, gg);
        var xYG = _mz(z, "view", ["bindtap", 2, "class", 1], [], e, s, gg);
        var oZG = _v();
        _(xYG, oZG);
        if (_oz(z, 4, e, s, gg)) {
          oZG.wxVkey = 1;
        }
        oZG.wxXCkey = 1;
        _(oXG, xYG);
        var f1G = _n("view");
        _rz(z, f1G, "class", 5, e, s, gg);
        var c2G = _v();
        _(f1G, c2G);
        if (_oz(z, 6, e, s, gg)) {
          c2G.wxVkey = 1;
        }
        var h3G = _v();
        _(f1G, h3G);
        var o4G = function (o6G, c5G, l7G, gg) {
          var t9G = _v();
          _(l7G, t9G);
          if (_oz(z, 10, o6G, c5G, gg)) {
            t9G.wxVkey = 1;
            var e0G = _v();
            _(t9G, e0G);
            if (_oz(z, 11, o6G, c5G, gg)) {
              e0G.wxVkey = 1;
            }
            e0G.wxXCkey = 1;
          }
          t9G.wxXCkey = 1;
          return l7G;
        };
        h3G.wxXCkey = 2;
        _2z(z, 8, o4G, e, s, gg, h3G, "val", "index", "k");
        c2G.wxXCkey = 1;
        _(oXG, f1G);
        _(bWG, oXG);
      }
      bWG.wxXCkey = 1;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx3_XC_2";
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
if (__vd_version_info__.delayedGwx || false) $gwx3_XC_2();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/detailSbg/@tencent/stock-detail-brief/components/gshg-card.wxml"
  ] = [
    $gwx3_XC_2,
    "./pages/detailSbg/@tencent/stock-detail-brief/components/gshg-card.wxml",
  ];
else
  __wxAppCode__[
    "pages/detailSbg/@tencent/stock-detail-brief/components/gshg-card.wxml"
  ] = $gwx3_XC_2(
    "./pages/detailSbg/@tencent/stock-detail-brief/components/gshg-card.wxml"
  );
__wxRoute = "pages/detailSbg/@tencent/stock-detail-brief/components/gshg-card";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/detailSbg/@tencent/stock-detail-brief/components/gshg-card.js";
define(
  "pages/detailSbg/@tencent/stock-detail-brief/components/gshg-card.js",
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
      t = [34, 0, 33, 33],
      n = [27, 20, 26, 27],
      i = {
        props: {
          hgData: {
            type: Array,
            default: function () {
              return [];
            },
          },
          listOverShowhg: { type: Boolean, default: !1 },
          showTip: { type: Boolean, default: !1 },
        },
        data: function () {
          return { isWindows: !1 };
        },
        computed: {
          linePercent: function () {
            var e;
            return (null == (e = this.hgData) ? void 0 : e[0].MARKET) ? n : t;
          },
        },
        methods: {
          openDetail: function () {
            this.$emit("openDetail");
          },
          showTeachTips: function () {
            this.$emit("showTeachTips");
          },
        },
      },
      r = e._export_sfc(i, [
        [
          "render",
          function (t, n, i, r, o, a) {
            return e.e(
              { a: i.hgData && i.hgData.length > 0 },
              i.hgData && i.hgData.length > 0
                ? e.e(
                    { b: i.showTip },
                    i.showTip
                      ? {
                          c: e.o(function () {
                            return (
                              a.showTeachTips &&
                              a.showTeachTips.apply(a, arguments)
                            );
                          }, 3212),
                        }
                      : {},
                    {
                      d: e.o(function () {
                        return a.openDetail && a.openDetail.apply(a, arguments);
                      }, 3213),
                      e: a.linePercent[0] + "%",
                      f: a.linePercent[1],
                    },
                    a.linePercent[1] ? { g: a.linePercent[1] + "%" } : {},
                    {
                      h: a.linePercent[2] + "%",
                      i: a.linePercent[3] + "%",
                      j: e.f(i.hgData, function (t, n, r) {
                        return e.e(
                          { a: n < 3 || i.listOverShowhg },
                          n < 3 || i.listOverShowhg
                            ? e.e(
                                {
                                  b: e.t(t.REP_DATE),
                                  c: a.linePercent[0] + "%",
                                  d: a.linePercent[1],
                                },
                                a.linePercent[1]
                                  ? {
                                      e: e.t(t.MARKET),
                                      f: a.linePercent[1] + "%",
                                    }
                                  : {},
                                {
                                  g: e.t(t.FUND),
                                  h: a.linePercent[2] + "%",
                                  i: e.t(t.REDEEN_AVG_PRICE),
                                  j: a.linePercent[3] + "%",
                                }
                              )
                            : {},
                          { k: n }
                        );
                      }),
                    }
                  )
                : {}
            );
          },
        ],
        ["__scopeId", "data-v-acd98b98"],
      ]);
    wx.createComponent(r);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/detailSbg/@tencent/stock-detail-brief/components/gshg-card.js",
  }
);
require("pages/detailSbg/@tencent/stock-detail-brief/components/gshg-card.js");
