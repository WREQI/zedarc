$gwx14_XC_1 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx14_XC_1 || [];
    function gz$gwx14_XC_1_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx14_XC_1_1)
        return __WXML_GLOBAL__.ops_cached.$gwx14_XC_1_1;
      __WXML_GLOBAL__.ops_cached.$gwx14_XC_1_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "a"]]);
        Z([[7], [3, "f"]]);
        Z([
          [4],
          [
            [5],
            [
              [5],
              [[5], [[5], [1, "_div"]], [1, "data-v-423b52ba"]],
              [1, "ai-search-bar"],
            ],
            [[7], [3, "e"]],
          ],
        ]);
        Z([3, "aiSearchBar"]);
        Z([[7], [3, "b"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx14_XC_1_1);
      return __WXML_GLOBAL__.ops_cached.$gwx14_XC_1_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx14_XC_1 = z;
    __WXML_GLOBAL__.ops_init.$gwx14_XC_1 = true;
    var x = [
      "./pages/searchAi/@tencent/stock-ai-common-bar/components/stock-bottom-ai-bar/index.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx14_XC_1_1();
      var cW = _v();
      _(r, cW);
      if (_oz(z, 0, e, s, gg)) {
        cW.wxVkey = 1;
        var oX = _mz(
          z,
          "view",
          ["bindtap", 1, "class", 1, "id", 2],
          [],
          e,
          s,
          gg
        );
        var lY = _v();
        _(oX, lY);
        if (_oz(z, 4, e, s, gg)) {
          lY.wxVkey = 1;
        }
        lY.wxXCkey = 1;
        _(cW, oX);
      }
      cW.wxXCkey = 1;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx14_XC_1";
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
if (__vd_version_info__.delayedGwx || false) $gwx14_XC_1();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/searchAi/@tencent/stock-ai-common-bar/components/stock-bottom-ai-bar/index.wxml"
  ] = [
    $gwx14_XC_1,
    "./pages/searchAi/@tencent/stock-ai-common-bar/components/stock-bottom-ai-bar/index.wxml",
  ];
else
  __wxAppCode__[
    "pages/searchAi/@tencent/stock-ai-common-bar/components/stock-bottom-ai-bar/index.wxml"
  ] = $gwx14_XC_1(
    "./pages/searchAi/@tencent/stock-ai-common-bar/components/stock-bottom-ai-bar/index.wxml"
  );
__wxRoute =
  "pages/searchAi/@tencent/stock-ai-common-bar/components/stock-bottom-ai-bar/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/searchAi/@tencent/stock-ai-common-bar/components/stock-bottom-ai-bar/index.js";
define(
  "pages/searchAi/@tencent/stock-ai-common-bar/components/stock-bottom-ai-bar/index.js",
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
      o = Object.prototype.propertyIsEnumerable,
      a = function (e, r, n) {
        return r in e
          ? t(e, r, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n,
            })
          : (e[r] = n);
      },
      i = require("../../../../../../common/vendor.js"),
      u = require("../../hooks/zxg/useAiCommonBarEntry.js"),
      l = i.defineComponent({
        name: "NewsAiBar",
        components: {},
        props: {
          scene: { type: String, default: "" },
          contentId: { type: String, default: "" },
          reportPrefix: { type: String, default: "" },
          reportInfo: { type: Object, default: null },
          material: { type: Object, default: null },
          forceLite: { type: Boolean, default: !1 },
        },
        setup: function (t, l) {
          var c = l.emit,
            f = i.getCurrentInstance().proxy || i.getCurrentInstance(),
            s = {},
            p = !1,
            h = i._default().env,
            b = h.IS_ZXG,
            d = h.IS_PCWEIXIN;
          return (
            b
              ? (s = u.useSearchBar(t, { emit: c }, f))
              : ((s = u.useSearchBar$1(t, { emit: c }, f)),
                (p = ["mpwzq", "wzqlight"].includes("mpweapp")),
                t.forceLite && (p = !0)),
            i.watch(
              function () {
                return t.contentId;
              },
              function (e, t) {
                e && t && e !== t && s.fetchAIConfigStatus();
              }
            ),
            (function (t, i) {
              for (var u in i || (i = {})) n.call(i, u) && a(t, u, i[u]);
              if (r) {
                var l,
                  c = e(r(i));
                try {
                  for (c.s(); !(l = c.n()).done; ) {
                    u = l.value;
                    o.call(i, u) && a(t, u, i[u]);
                  }
                } catch (e) {
                  c.e(e);
                } finally {
                  c.f();
                }
              }
              return t;
            })(
              {
                isLite: p,
                fontLevel: i.computed(function () {
                  var e, t;
                  if (d) return "";
                  var r =
                    null ==
                    (t =
                      null == (e = s.showSearchBarObj) ? void 0 : e.value.title)
                      ? void 0
                      : t.length;
                  return 15 === r
                    ? "font-26"
                    : 16 === r
                    ? "font-24"
                    : 17 === r
                    ? "font-23"
                    : 18 === r
                    ? "font-22"
                    : r >= 19
                    ? "font-21"
                    : "";
                }),
              },
              s
            )
          );
        },
      }),
      c = i._export_sfc(l, [
        [
          "render",
          function (e, t, r, n, o, a) {
            return i.e(
              { a: e.showSearchBarList },
              e.showSearchBarList
                ? i.e(
                    { b: e.showSearchBarObj.title },
                    e.showSearchBarObj.title
                      ? {
                          c: i.t(e.showSearchBarObj.title),
                          d: i.n(e.fontLevel),
                        }
                      : {},
                    {
                      e: i.n(e.isLite ? "lite" : ""),
                      f: i.o(function (t) {
                        return e.onClickAiDialog();
                      }, 3024),
                    }
                  )
                : {}
            );
          },
        ],
        ["__scopeId", "data-v-423b52ba"],
      ]);
    wx.createComponent(c);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/searchAi/@tencent/stock-ai-common-bar/components/stock-bottom-ai-bar/index.js",
  }
);
require("pages/searchAi/@tencent/stock-ai-common-bar/components/stock-bottom-ai-bar/index.js");
