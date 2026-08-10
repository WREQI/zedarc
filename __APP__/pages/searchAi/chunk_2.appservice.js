$gwx14_XC_5 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx14_XC_5 || [];
    function gz$gwx14_XC_5_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx14_XC_5_1)
        return __WXML_GLOBAL__.ops_cached.$gwx14_XC_5_1;
      __WXML_GLOBAL__.ops_cached.$gwx14_XC_5_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "a"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx14_XC_5_1);
      return __WXML_GLOBAL__.ops_cached.$gwx14_XC_5_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx14_XC_5 = z;
    __WXML_GLOBAL__.ops_init.$gwx14_XC_5 = true;
    var x = [
      "./pages/searchAi/@tencent/stock-ai-common-bar/components/stock-news-ai-bar/index.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx14_XC_5_1();
      var fYB = _v();
      _(r, fYB);
      if (_oz(z, 0, e, s, gg)) {
        fYB.wxVkey = 1;
      }
      fYB.wxXCkey = 1;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx14_XC_5";
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
if (__vd_version_info__.delayedGwx || false) $gwx14_XC_5();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/searchAi/@tencent/stock-ai-common-bar/components/stock-news-ai-bar/index.wxml"
  ] = [
    $gwx14_XC_5,
    "./pages/searchAi/@tencent/stock-ai-common-bar/components/stock-news-ai-bar/index.wxml",
  ];
else
  __wxAppCode__[
    "pages/searchAi/@tencent/stock-ai-common-bar/components/stock-news-ai-bar/index.wxml"
  ] = $gwx14_XC_5(
    "./pages/searchAi/@tencent/stock-ai-common-bar/components/stock-news-ai-bar/index.wxml"
  );
__wxRoute =
  "pages/searchAi/@tencent/stock-ai-common-bar/components/stock-news-ai-bar/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/searchAi/@tencent/stock-ai-common-bar/components/stock-news-ai-bar/index.js";
define(
  "pages/searchAi/@tencent/stock-ai-common-bar/components/stock-news-ai-bar/index.js",
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
    var e = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper");
    require("../../../../../../@babel/runtime/helpers/Arrayincludes");
    var t = Object.defineProperty,
      r = Object.getOwnPropertySymbols,
      n = Object.prototype.hasOwnProperty,
      a = Object.prototype.propertyIsEnumerable,
      i = function (e, r, n) {
        return r in e
          ? t(e, r, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n,
            })
          : (e[r] = n);
      },
      o = require("../../../../../../common/vendor.js"),
      u = require("../../hooks/zxg/useAiCommonBarEntry.js"),
      c = o.defineComponent({
        name: "NewsAiBar",
        components: {},
        props: {
          scene: { type: String, default: "" },
          contentId: { type: String, default: "" },
          reportPrefix: { type: String, default: "" },
          reportInfo: { type: Object, default: null },
          material: { type: Object, default: null },
        },
        setup: function (t, c) {
          var l = c.emit,
            s = o.getCurrentInstance().proxy || o.getCurrentInstance(),
            p = {},
            f = !1;
          return (
            o._default().env.IS_ZXG
              ? (p = u.useSearchBar(t, { emit: l }, s))
              : ((p = u.useSearchBar$1(t, { emit: l }, s)),
                (f = ["mpwzq", "wzqlight"].includes("mpweapp"))),
            o.watch(
              function () {
                return t.contentId;
              },
              function (e, t) {
                e && t && e !== t && p.fetchAIConfigStatus();
              }
            ),
            (function (t, o) {
              for (var u in o || (o = {})) n.call(o, u) && i(t, u, o[u]);
              if (r) {
                var c,
                  l = e(r(o));
                try {
                  for (l.s(); !(c = l.n()).done; ) {
                    u = c.value;
                    a.call(o, u) && i(t, u, o[u]);
                  }
                } catch (e) {
                  l.e(e);
                } finally {
                  l.f();
                }
              }
              return t;
            })({ isLite: f }, p)
          );
        },
      }),
      l = o._export_sfc(c, [
        [
          "render",
          function (e, t, r, n, a, i) {
            return o.e(
              { a: e.showSearchBarList },
              e.showSearchBarList
                ? {
                    b: o.f(e.showSearchBarList.slice(0, 3), function (t, r, n) {
                      return {
                        a: o.t(t.title),
                        b: t.uuid,
                        c: o.o(
                          function (r) {
                            return e.onClickAiDialog(t);
                          },
                          5369,
                          t.uuid
                        ),
                      };
                    }),
                    c: o.n(e.isLite ? "lite" : ""),
                  }
                : {}
            );
          },
        ],
        ["__scopeId", "data-v-befbded4"],
      ]);
    wx.createComponent(l);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/searchAi/@tencent/stock-ai-common-bar/components/stock-news-ai-bar/index.js",
  }
);
require("pages/searchAi/@tencent/stock-ai-common-bar/components/stock-news-ai-bar/index.js");
