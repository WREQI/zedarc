$gwx14_XC_6 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx14_XC_6 || [];
    function gz$gwx14_XC_6_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx14_XC_6_1)
        return __WXML_GLOBAL__.ops_cached.$gwx14_XC_6_1;
      __WXML_GLOBAL__.ops_cached.$gwx14_XC_6_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "a"]]);
        Z([[7], [3, "l"]]);
        Z([
          [4],
          [
            [5],
            [
              [5],
              [[5], [[5], [1, "_div"]], [1, "data-v-61b7c22b"]],
              [1, "ai-search-enrty"],
            ],
            [[7], [3, "k"]],
          ],
        ]);
        Z([[7], [3, "c"]]);
        Z([[7], [3, "f"]]);
        Z([[7], [3, "h"]]);
        Z([3, "__l"]);
        Z([[7], [3, "g"]]);
        Z([3, "data-v-61b7c22b"]);
        Z([3, "61b7c22b-0"]);
        Z(z[5]);
        Z([[7], [3, "j"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx14_XC_6_1);
      return __WXML_GLOBAL__.ops_cached.$gwx14_XC_6_1;
    }
    function gz$gwx14_XC_6_2() {
      if (__WXML_GLOBAL__.ops_cached.$gwx14_XC_6_2)
        return __WXML_GLOBAL__.ops_cached.$gwx14_XC_6_2;
      __WXML_GLOBAL__.ops_cached.$gwx14_XC_6_2 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "a"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx14_XC_6_2);
      return __WXML_GLOBAL__.ops_cached.$gwx14_XC_6_2;
    }
    __WXML_GLOBAL__.ops_set.$gwx14_XC_6 = z;
    __WXML_GLOBAL__.ops_init.$gwx14_XC_6 = true;
    var x = [
      "./pages/searchAi/@tencent/stock-ai-common-bar/components/stock-search-ai-bar/index.wxml",
      "./pages/searchAi/@tencent/stock-ai-common-bar/components/stock-search-ai-bar/scrollboard.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx14_XC_6_1();
      var h1B = _v();
      _(r, h1B);
      if (_oz(z, 0, e, s, gg)) {
        h1B.wxVkey = 1;
        var o2B = _mz(z, "view", ["catchtap", 1, "class", 1], [], e, s, gg);
        var c3B = _v();
        _(o2B, c3B);
        if (_oz(z, 3, e, s, gg)) {
          c3B.wxVkey = 1;
        } else if (_oz(z, 4, e, s, gg)) {
          c3B.wxVkey = 2;
          var l5B = _v();
          _(c3B, l5B);
          if (_oz(z, 5, e, s, gg)) {
            l5B.wxVkey = 1;
            var a6B = _mz(
              z,
              "scrollboard",
              [
                "bind:__l",
                6,
                "bindhandleClick",
                1,
                "class",
                2,
                "uI",
                3,
                "uP",
                4,
              ],
              [],
              e,
              s,
              gg
            );
            _(l5B, a6B);
          }
          l5B.wxXCkey = 1;
          l5B.wxXCkey = 3;
        }
        var o4B = _v();
        _(o2B, o4B);
        if (_oz(z, 11, e, s, gg)) {
          o4B.wxVkey = 1;
        }
        c3B.wxXCkey = 1;
        c3B.wxXCkey = 3;
        o4B.wxXCkey = 1;
        _(h1B, o2B);
      }
      h1B.wxXCkey = 1;
      h1B.wxXCkey = 3;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    d_[x[1]] = {};
    var m1 = function (e, s, r, gg) {
      var z = gz$gwx14_XC_6_2();
      var e8B = _v();
      _(r, e8B);
      if (_oz(z, 0, e, s, gg)) {
        e8B.wxVkey = 1;
      }
      e8B.wxXCkey = 1;
      return r;
    };
    e_[x[1]] = { f: m1, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx14_XC_6";
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
if (__vd_version_info__.delayedGwx || false) $gwx14_XC_6();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/searchAi/@tencent/stock-ai-common-bar/components/stock-search-ai-bar/index.wxml"
  ] = [
    $gwx14_XC_6,
    "./pages/searchAi/@tencent/stock-ai-common-bar/components/stock-search-ai-bar/index.wxml",
  ];
else
  __wxAppCode__[
    "pages/searchAi/@tencent/stock-ai-common-bar/components/stock-search-ai-bar/index.wxml"
  ] = $gwx14_XC_6(
    "./pages/searchAi/@tencent/stock-ai-common-bar/components/stock-search-ai-bar/index.wxml"
  );
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/searchAi/@tencent/stock-ai-common-bar/components/stock-search-ai-bar/scrollboard.wxml"
  ] = [
    $gwx14_XC_6,
    "./pages/searchAi/@tencent/stock-ai-common-bar/components/stock-search-ai-bar/scrollboard.wxml",
  ];
else
  __wxAppCode__[
    "pages/searchAi/@tencent/stock-ai-common-bar/components/stock-search-ai-bar/scrollboard.wxml"
  ] = $gwx14_XC_6(
    "./pages/searchAi/@tencent/stock-ai-common-bar/components/stock-search-ai-bar/scrollboard.wxml"
  );
__wxRoute =
  "pages/searchAi/@tencent/stock-ai-common-bar/components/stock-search-ai-bar/index";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/searchAi/@tencent/stock-ai-common-bar/components/stock-search-ai-bar/index.js";
define(
  "pages/searchAi/@tencent/stock-ai-common-bar/components/stock-search-ai-bar/index.js",
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
    var e = require("../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
      r = Object.defineProperty,
      t = Object.defineProperties,
      n = Object.getOwnPropertyDescriptors,
      o = Object.getOwnPropertySymbols,
      i = Object.prototype.hasOwnProperty,
      a = Object.prototype.propertyIsEnumerable,
      c = function (e, t, n) {
        return t in e
          ? r(e, t, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: n,
            })
          : (e[t] = n);
      },
      l = require("../../../../../../common/vendor.js"),
      s = require("../../hooks/zxg/useAiCommonBarEntry.js"),
      u = l.defineComponent({
        name: "SearchAiBar",
        components: {
          scrollboard: function () {
            return "./scrollboard.js";
          },
        },
        props: {
          scene: { type: String, default: "" },
          contentId: { type: String, default: "" },
          reportPrefix: { type: String, default: "" },
          reportInfo: { type: Object, default: null },
          componentType: { type: String, default: "common" },
          material: { type: Object, default: null },
          preData: { type: Object, default: null },
        },
        setup: function (r, u) {
          var p = u.emit,
            y = l.getCurrentInstance().proxy || l.getCurrentInstance(),
            f = {},
            b = l._default().env.IS_ZXG;
          try {
            f =
              b && shy
                ? s.useSearchBar(r, { emit: p }, y)
                : s.useSearchBar$1(r, { emit: p }, y);
          } catch (e) {
            f = s.useSearchBar$1(r, { emit: p }, y);
          }
          var h,
            d = l.computed(function () {
              return "xiaobao" === r.scene;
            });
          return (
            (h = (function (r, t) {
              for (var n in t || (t = {})) i.call(t, n) && c(r, n, t[n]);
              if (o) {
                var l,
                  s = e(o(t));
                try {
                  for (s.s(); !(l = s.n()).done; ) {
                    n = l.value;
                    a.call(t, n) && c(r, n, t[n]);
                  }
                } catch (e) {
                  s.e(e);
                } finally {
                  s.f();
                }
              }
              return r;
            })({}, f)),
            t(h, n({ isAiXiaobaoScene: d }))
          );
        },
      });
    Array || l.resolveComponent("scrollboard")();
    var p = l._export_sfc(u, [
      [
        "render",
        function (e, r, t, n, o, i) {
          return l.e(
            { a: e.showSearchBarObj || e.showSearchBarList },
            e.showSearchBarObj || e.showSearchBarList
              ? l.e(
                  {
                    b: l.o(function (r) {
                      return e.isAiXiaobaoScene
                        ? e.onClickAiIcon()
                        : e.onClickEntireEntry();
                    }, 2815),
                    c: e.isSingleEntry,
                  },
                  e.isSingleEntry
                    ? {
                        d: l.t(e.showSearchBarObj.title),
                        e: l.o(function (r) {
                          return e.onClickAiDialog();
                        }, 2816),
                      }
                    : 2 === e.displayType
                    ? {
                        g: l.o(e.onScrollShowAiDialog, 2817),
                        h: l.p({ items: e.showSearchBarList }),
                      }
                    : {},
                  {
                    f: 2 === e.displayType,
                    i: l.o(function (r) {
                      return e.onClickEntireEntry();
                    }, 2818),
                    j: e.isWzq || e.isWzqLight,
                  },
                  (e.isWzq || e.isWzqLight, {}),
                  {
                    k: l.n(e.componentType),
                    l: l.o(function (r) {
                      return e.isAiXiaobaoScene
                        ? void 0
                        : e.onClickEntireEntry();
                    }, 2819),
                  }
                )
              : {}
          );
        },
      ],
      ["__scopeId", "data-v-61b7c22b"],
    ]);
    wx.createComponent(p);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/searchAi/@tencent/stock-ai-common-bar/components/stock-search-ai-bar/index.js",
  }
);
require("pages/searchAi/@tencent/stock-ai-common-bar/components/stock-search-ai-bar/index.js");
__wxRoute =
  "pages/searchAi/@tencent/stock-ai-common-bar/components/stock-search-ai-bar/scrollboard";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/searchAi/@tencent/stock-ai-common-bar/components/stock-search-ai-bar/scrollboard.js";
define(
  "pages/searchAi/@tencent/stock-ai-common-bar/components/stock-search-ai-bar/scrollboard.js",
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
      t = function (e, t) {
        return t ? e % t : 0;
      },
      u = {
        name: "ScrollBoard",
        props: {
          items: {
            type: Array,
            default: function () {
              return [];
            },
          },
        },
        setup: function (u, a) {
          var n = a.emit,
            l = e.ref(0),
            o = e.ref(!1),
            i = e.ref(null),
            r = e.ref(null),
            c = e.ref(!1),
            v = e.ref(0);
          e.watch(
            function () {
              return u.items;
            },
            function (e) {
              var t;
              clearTimeout(i.value),
                clearTimeout(r.value),
                (v.value = null != (t = e.length) ? t : 0),
                (l.value = 0);
            },
            { immediate: !0 }
          ),
            e.watch(
              function () {
                return l.value;
              },
              function (e) {
                n("questionChange", e);
              },
              { immediate: !0 }
            );
          var m = function e() {
            0 !== v.value &&
              1 !== v.value &&
              c.value &&
              ((o.value = !0),
              i.value && clearTimeout(i.value),
              (i.value = setTimeout(function () {
                (o.value = !1),
                  v.value ? (l.value = t(l.value + 1, v.value)) : (l.value = 0),
                  r.value && clearTimeout(r.value),
                  (r.value = setTimeout(e, 4e3));
              }, 400)));
          };
          return (
            e.onMounted(function () {
              (c.value = !0),
                r.value && clearTimeout(r.value),
                (r.value = setTimeout(m, 4e3));
            }),
            e.onUnmounted(function () {
              (c.value = !1), clearTimeout(i.value), clearTimeout(r.value);
            }),
            {
              getItemStyle: function (e) {
                if (v.value <= 1) return { top: "0", opacity: "1" };
                var u = e === l.value,
                  a = t(l.value + 1, v.value) === e;
                if (!u && !a)
                  return { top: "100%", opacity: "0", transition: "none" };
                var n = o.value
                  ? "top 400ms ease, opacity 300ms ease 100ms"
                  : "none";
                return u
                  ? {
                      top: o.value ? "-100%" : "0",
                      opacity: o.value ? "0" : "1",
                      transition: n,
                    }
                  : a
                  ? {
                      top: o.value ? "0" : "100%",
                      opacity: o.value ? "1" : "0",
                      transition: n,
                    }
                  : void 0;
              },
              handleClick: function (e) {
                n("handleClick", e);
              },
            }
          );
        },
      },
      a = e._export_sfc(u, [
        [
          "render",
          function (t, u, a, n, l, o) {
            return e.e(
              { a: a.items && a.items.length > 0 },
              a.items && a.items.length > 0
                ? {
                    b: e.f(a.items, function (t, u, a) {
                      return {
                        a: e.t(t.title),
                        b: "scroll-question-".concat(u),
                        c: e.s(n.getItemStyle(u)),
                        d: e.o(
                          function (e) {
                            return n.handleClick(u);
                          },
                          4435,
                          "scroll-question-".concat(u)
                        ),
                      };
                    }),
                  }
                : {}
            );
          },
        ],
        ["__scopeId", "data-v-86a44a02"],
      ]);
    wx.createComponent(a);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/searchAi/@tencent/stock-ai-common-bar/components/stock-search-ai-bar/scrollboard.js",
  }
);
require("pages/searchAi/@tencent/stock-ai-common-bar/components/stock-search-ai-bar/scrollboard.js");
