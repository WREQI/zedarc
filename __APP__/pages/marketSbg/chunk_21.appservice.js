$gwx47_XC_14 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx47_XC_14 || [];
    function gz$gwx47_XC_14_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx47_XC_14_1)
        return __WXML_GLOBAL__.ops_cached.$gwx47_XC_14_1;
      __WXML_GLOBAL__.ops_cached.$gwx47_XC_14_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "a"]]);
        Z([3, "__l"]);
        Z([[7], [3, "c"]]);
        Z([3, "r data-v-ce817551"]);
        Z([3, "ce817551-0"]);
        Z([[7], [3, "d"]]);
        Z([3, "appNavigationRef"]);
        Z([[7], [3, "e"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx47_XC_14_1);
      return __WXML_GLOBAL__.ops_cached.$gwx47_XC_14_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx47_XC_14 = z;
    __WXML_GLOBAL__.ops_init.$gwx47_XC_14 = true;
    var x = [
      "./pages/marketSbg/@tencent/stock-hq-etf/hotTopicPages/components/HotTopicNavBar.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx47_XC_14_1();
      var cFO = _v();
      _(r, cFO);
      if (_oz(z, 0, e, s, gg)) {
        cFO.wxVkey = 1;
        var hGO = _mz(
          z,
          "navigation",
          ["bind:__l", 1, "bindback", 1, "class", 2, "uI", 3, "uP", 4, "uR", 5],
          [],
          e,
          s,
          gg
        );
        _(cFO, hGO);
      } else if (_oz(z, 7, e, s, gg)) {
        cFO.wxVkey = 2;
      }
      cFO.wxXCkey = 1;
      cFO.wxXCkey = 3;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx47_XC_14";
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
if (__vd_version_info__.delayedGwx || false) $gwx47_XC_14();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/marketSbg/@tencent/stock-hq-etf/hotTopicPages/components/HotTopicNavBar.wxml"
  ] = [
    $gwx47_XC_14,
    "./pages/marketSbg/@tencent/stock-hq-etf/hotTopicPages/components/HotTopicNavBar.wxml",
  ];
else
  __wxAppCode__[
    "pages/marketSbg/@tencent/stock-hq-etf/hotTopicPages/components/HotTopicNavBar.wxml"
  ] = $gwx47_XC_14(
    "./pages/marketSbg/@tencent/stock-hq-etf/hotTopicPages/components/HotTopicNavBar.wxml"
  );
__wxRoute =
  "pages/marketSbg/@tencent/stock-hq-etf/hotTopicPages/components/HotTopicNavBar";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/marketSbg/@tencent/stock-hq-etf/hotTopicPages/components/HotTopicNavBar.js";
define(
  "pages/marketSbg/@tencent/stock-hq-etf/hotTopicPages/components/HotTopicNavBar.js",
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
      t = require("../../node-modules/@tencent/st-tools/dist/index.js"),
      n = e.defineComponent({
        name: "HotTopicNavBar",
        components: {
          Navigation: function () {
            return "../../components/Navigation.js";
          },
        },
        props: {
          title: { type: String, default: "" },
          opacity: { type: Number, default: 1 },
          appTitleVisible: { type: Boolean, default: !1 },
        },
        emits: ["back", "layout"],
        setup: function (n, a) {
          var i = a.emit,
            o = !1,
            u = ["mpwzq", "mpweapp"].includes("mpweapp"),
            r = ["mpwzq", "wzqlight"].includes("mpweapp");
          if (!u && "undefined" != typeof navigator) {
            var c = t.dist.detect(navigator.userAgent).env.IS_ZXG;
            o = c;
          }
          var l = e.ref(0),
            d = e.ref(44),
            p = e.ref(null),
            s = e.computed(function () {
              return {
                opacity: n.opacity,
                height: "".concat(l.value + d.value, "px"),
              };
            }),
            f = e.computed(function () {
              return { height: "".concat(l.value, "px") };
            }),
            v = e.computed(function () {
              return { height: "".concat(d.value, "px") };
            }),
            g = e.computed(function () {
              return { top: "".concat(l.value, "px") };
            }),
            m = e.computed(function () {
              return (function () {
                if (u) {
                  var t = e.StockBridge.getStorage("user/skin");
                  return ("dark" === t || "black" === t) && !r;
                }
                if ("undefined" == typeof document) return !1;
                var n = document.body.getAttribute("data-theme") || "light";
                return "dark" === n || "black" === n;
              })()
                ? "https://st.gtimg.com/design/eab06029a363028f7b19d1e4aeb5f12c.png"
                : "https://st.gtimg.com/design/2de309bd00716133dd871f1b24307783.png";
            });
          function y() {
            i("layout", { safeTop: l.value, navBarHeight: d.value });
          }
          var h = e.computed(function () {
            return (
              "undefined" != typeof window &&
              window.history &&
              window.history.length > 1
            );
          });
          return (
            e.onMounted(function () {
              !(function () {
                var t, n;
                if (o)
                  e.nextTick$1(function () {
                    var e,
                      t = p.value,
                      n = (null == t ? void 0 : t.$el) || t,
                      a =
                        null ==
                        (e = null == n ? void 0 : n.getBoundingClientRect)
                          ? void 0
                          : e.call(n);
                    (l.value = 0),
                      (d.value = (null == a ? void 0 : a.height) || 0),
                      y();
                  });
                else if (u) {
                  var a =
                      (e.wx$1.getWindowInfo && e.wx$1.getWindowInfo()) ||
                      e.wx$1.getSystemInfoSync() ||
                      {},
                    i = a.statusBarHeight,
                    r = void 0 === i ? 0 : i,
                    c = a.safeArea,
                    s = void 0 === c ? {} : c,
                    f =
                      null == (n = (t = e.wx$1).getMenuButtonBoundingClientRect)
                        ? void 0
                        : n.call(t);
                  (l.value = Math.max((null == s ? void 0 : s.top) || 0, r)),
                    (d.value = (null == f ? void 0 : f.bottom)
                      ? f.bottom - l.value + 8
                      : 44),
                    y();
                }
              })();
            }),
            {
              isMP: u,
              isAPP: o,
              appNavigationRef: p,
              canAppRouteBack: h,
              titleLayerStyle: s,
              safeAreaStyle: f,
              contentStyle: v,
              backStyle: g,
              backSrc: m,
              handleBack: function () {
                i("back");
              },
            }
          );
        },
      });
    Array || e.resolveComponent("Navigation")();
    var a = e._export_sfc(n, [
      [
        "render",
        function (t, n, a, i, o, u) {
          return e.e(
            { a: t.isAPP },
            t.isAPP
              ? {
                  b: e.sr("appNavigationRef", "ce817551-0"),
                  c: e.o(t.handleBack, 2431),
                  d: e.p({
                    title: t.title,
                    fixed: t.appTitleVisible,
                    "show-first": t.appTitleVisible,
                    "custom-back": t.canAppRouteBack,
                  }),
                }
              : t.isMP
              ? {
                  f: e.s(t.safeAreaStyle),
                  g: e.t(t.title),
                  h: e.s(t.contentStyle),
                  i: e.s(t.titleLayerStyle),
                  j: e.s(t.backStyle),
                  k: t.backSrc,
                  l: e.o(function () {
                    return t.handleBack && t.handleBack.apply(t, arguments);
                  }, 2432),
                }
              : {},
            { e: t.isMP }
          );
        },
      ],
      ["__scopeId", "data-v-ce817551"],
    ]);
    wx.createComponent(a);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/marketSbg/@tencent/stock-hq-etf/hotTopicPages/components/HotTopicNavBar.js",
  }
);
require("pages/marketSbg/@tencent/stock-hq-etf/hotTopicPages/components/HotTopicNavBar.js");
