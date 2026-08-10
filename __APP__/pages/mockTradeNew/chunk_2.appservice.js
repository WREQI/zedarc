$gwx33_XC_4 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx33_XC_4 || [];
    function gz$gwx33_XC_4_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx33_XC_4_1)
        return __WXML_GLOBAL__.ops_cached.$gwx33_XC_4_1;
      __WXML_GLOBAL__.ops_cached.$gwx33_XC_4_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "a"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx33_XC_4_1);
      return __WXML_GLOBAL__.ops_cached.$gwx33_XC_4_1;
    }
    function gz$gwx33_XC_4_2() {
      if (__WXML_GLOBAL__.ops_cached.$gwx33_XC_4_2)
        return __WXML_GLOBAL__.ops_cached.$gwx33_XC_4_2;
      __WXML_GLOBAL__.ops_cached.$gwx33_XC_4_2 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([3, "_div rank-list-wrapper data-v-e487da62"]);
        Z([[7], [3, "a"]]);
        Z([[7], [3, "e"]]);
        Z([3, "__l"]);
        Z([3, "data-v-e487da62"]);
        Z([3, "e487da62-0"]);
        Z(z[2]);
      })(__WXML_GLOBAL__.ops_cached.$gwx33_XC_4_2);
      return __WXML_GLOBAL__.ops_cached.$gwx33_XC_4_2;
    }
    __WXML_GLOBAL__.ops_set.$gwx33_XC_4 = z;
    __WXML_GLOBAL__.ops_init.$gwx33_XC_4 = true;
    var x = [
      "./pages/mockTradeNew/@tencent/st-act-mocktrade/src/components/emptyTips.wxml",
      "./pages/mockTradeNew/@tencent/st-act-mocktrade/src/components/rankList.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx33_XC_4_1();
      var oBH = _v();
      _(r, oBH);
      if (_oz(z, 0, e, s, gg)) {
        oBH.wxVkey = 1;
      }
      oBH.wxXCkey = 1;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    d_[x[1]] = {};
    var m1 = function (e, s, r, gg) {
      var z = gz$gwx33_XC_4_2();
      var oDH = _n("view");
      _rz(z, oDH, "class", 0, e, s, gg);
      var fEH = _v();
      _(oDH, fEH);
      if (_oz(z, 1, e, s, gg)) {
        fEH.wxVkey = 1;
      } else {
        fEH.wxVkey = 2;
        var cFH = _v();
        _(fEH, cFH);
        if (_oz(z, 2, e, s, gg)) {
          cFH.wxVkey = 1;
          var hGH = _mz(
            z,
            "empty-tips",
            ["bind:__l", 3, "class", 1, "uI", 2, "uP", 3],
            [],
            e,
            s,
            gg
          );
          _(cFH, hGH);
        }
        cFH.wxXCkey = 1;
        cFH.wxXCkey = 3;
      }
      fEH.wxXCkey = 1;
      fEH.wxXCkey = 3;
      _(r, oDH);
      return r;
    };
    e_[x[1]] = { f: m1, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx33_XC_4";
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
if (__vd_version_info__.delayedGwx || false) $gwx33_XC_4();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/mockTradeNew/@tencent/st-act-mocktrade/src/components/emptyTips.wxml"
  ] = [
    $gwx33_XC_4,
    "./pages/mockTradeNew/@tencent/st-act-mocktrade/src/components/emptyTips.wxml",
  ];
else
  __wxAppCode__[
    "pages/mockTradeNew/@tencent/st-act-mocktrade/src/components/emptyTips.wxml"
  ] = $gwx33_XC_4(
    "./pages/mockTradeNew/@tencent/st-act-mocktrade/src/components/emptyTips.wxml"
  );
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/mockTradeNew/@tencent/st-act-mocktrade/src/components/rankList.wxml"
  ] = [
    $gwx33_XC_4,
    "./pages/mockTradeNew/@tencent/st-act-mocktrade/src/components/rankList.wxml",
  ];
else
  __wxAppCode__[
    "pages/mockTradeNew/@tencent/st-act-mocktrade/src/components/rankList.wxml"
  ] = $gwx33_XC_4(
    "./pages/mockTradeNew/@tencent/st-act-mocktrade/src/components/rankList.wxml"
  );
__wxRoute =
  "pages/mockTradeNew/@tencent/st-act-mocktrade/src/components/emptyTips";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/mockTradeNew/@tencent/st-act-mocktrade/src/components/emptyTips.js";
define(
  "pages/mockTradeNew/@tencent/st-act-mocktrade/src/components/emptyTips.js",
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
    var e = require("../../../../../../common/vendor.js"),
      t = {
        props: {
          text: { type: String, default: "" },
          showIcon: { type: Boolean, default: !0 },
        },
      },
      o = e._export_sfc(t, [
        [
          "render",
          function (t, o, n, r, c, s) {
            return e.e({ a: 1 == n.showIcon }, (n.showIcon, {}), {
              b: e.t(n.text ? n.text : "暂无内容"),
            });
          },
        ],
        ["__scopeId", "data-v-2614e97b"],
      ]);
    wx.createComponent(o);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/mockTradeNew/@tencent/st-act-mocktrade/src/components/emptyTips.js",
  }
);
require("pages/mockTradeNew/@tencent/st-act-mocktrade/src/components/emptyTips.js");
__wxRoute =
  "pages/mockTradeNew/@tencent/st-act-mocktrade/src/components/rankList";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/mockTradeNew/@tencent/st-act-mocktrade/src/components/rankList.js";
define(
  "pages/mockTradeNew/@tencent/st-act-mocktrade/src/components/rankList.js",
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
    var e = require("../utils/tool.js"),
      t = require("../../../../../../common/vendor.js"),
      r = {
        components: {
          emptyTips: function () {
            return "./emptyTips.js";
          },
        },
        props: {
          data: {
            type: Array,
            default: function () {
              return [];
            },
          },
          emptyText: { type: String, default: "" },
          order: { type: Number, default: 0 },
          listType: { type: String, default: "" },
        },
        setup: function () {
          return {
            onePixel: t.ref(!0),
            cutString: function (t) {
              return e.cutStr(t, 6, 1);
            },
          };
        },
      };
    Array || t.resolveComponent("empty-tips")();
    var n = t._export_sfc(r, [
      [
        "render",
        function (e, r, n, a, o, i) {
          return t.e(
            { a: n.data && n.data.length > 0 },
            n.data && n.data.length > 0
              ? {
                  b: t.t("week" == n.listType ? "本周收益率" : "累计收益"),
                  c: t.f(n.data, function (e, r, o) {
                    return t.e(
                      {
                        a: t.t(n.order + r + 1),
                        b: e.headimgurl
                          ? e.headimgurl
                          : "https://wzq.gtimg.com/resources/mocktrade/default_avatar.png",
                        c: e.nickname,
                      },
                      e.nickname ? { d: t.t(a.cutString(e.nickname)) } : {},
                      {
                        e: t.t((e.score / 1e4).toFixed(2)),
                        f: t.n(e.score > 0 ? "red" : "green"),
                        g: t.n(e.score > 0 ? "red" : "green"),
                        h: t.n(r + 1 == n.data.length ? "last" : ""),
                        i: r,
                      }
                    );
                  }),
                  d: a.onePixel,
                }
              : { e: t.p({ text: n.emptyText }) }
          );
        },
      ],
      ["__scopeId", "data-v-e487da62"],
    ]);
    wx.createComponent(n);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/mockTradeNew/@tencent/st-act-mocktrade/src/components/rankList.js",
  }
);
require("pages/mockTradeNew/@tencent/st-act-mocktrade/src/components/rankList.js");
