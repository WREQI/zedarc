$gwx47_XC_13 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx47_XC_13 || [];
    function gz$gwx47_XC_13_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx47_XC_13_1)
        return __WXML_GLOBAL__.ops_cached.$gwx47_XC_13_1;
      __WXML_GLOBAL__.ops_cached.$gwx47_XC_13_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "a"]]);
        Z([3, "__l"]);
        Z([[7], [3, "e"]]);
        Z([[7], [3, "d"]]);
        Z([[7], [3, "c"]]);
        Z([3, "footer-bar__ask r data-v-fdf16d42"]);
        Z([3, "fdf16d42-0"]);
        Z([[7], [3, "f"]]);
        Z([3, "aiBarRef"]);
      })(__WXML_GLOBAL__.ops_cached.$gwx47_XC_13_1);
      return __WXML_GLOBAL__.ops_cached.$gwx47_XC_13_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx47_XC_13 = z;
    __WXML_GLOBAL__.ops_init.$gwx47_XC_13 = true;
    var x = [
      "./pages/marketSbg/@tencent/stock-hq-etf/hotTopicPages/components/FooterBar.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx47_XC_13_1();
      var xCO = _v();
      _(r, xCO);
      if (_oz(z, 0, e, s, gg)) {
        xCO.wxVkey = 1;
        var oDO = _mz(
          z,
          "ai-bar",
          [
            "bind:__l",
            1,
            "bindonClickAiDialog",
            1,
            "bindonHideAiEntry",
            2,
            "bindonShowAiEntry",
            3,
            "class",
            4,
            "uI",
            5,
            "uP",
            6,
            "uR",
            7,
          ],
          [],
          e,
          s,
          gg
        );
        _(xCO, oDO);
      }
      xCO.wxXCkey = 1;
      xCO.wxXCkey = 3;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx47_XC_13";
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
if (__vd_version_info__.delayedGwx || false) $gwx47_XC_13();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/marketSbg/@tencent/stock-hq-etf/hotTopicPages/components/FooterBar.wxml"
  ] = [
    $gwx47_XC_13,
    "./pages/marketSbg/@tencent/stock-hq-etf/hotTopicPages/components/FooterBar.wxml",
  ];
else
  __wxAppCode__[
    "pages/marketSbg/@tencent/stock-hq-etf/hotTopicPages/components/FooterBar.wxml"
  ] = $gwx47_XC_13(
    "./pages/marketSbg/@tencent/stock-hq-etf/hotTopicPages/components/FooterBar.wxml"
  );
__wxRoute =
  "pages/marketSbg/@tencent/stock-hq-etf/hotTopicPages/components/FooterBar";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/marketSbg/@tencent/stock-hq-etf/hotTopicPages/components/FooterBar.js";
define(
  "pages/marketSbg/@tencent/stock-hq-etf/hotTopicPages/components/FooterBar.js",
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
      t = e.defineComponent({
        name: "FooterBar",
        components: {
          AiBar: function () {
            return "../../../../../searchAi/@tencent/stock-ai-common-bar/components/stock-bottom-ai-bar/index.js";
          },
        },
        props: {
          scene: { type: String, default: "" },
          contentId: { type: String, default: "" },
          aiReportPrefix: { type: String, default: "hq.hot_topic_detail" },
          aiReportInfo: {
            type: Object,
            default: function () {
              return {};
            },
          },
          isMp: { type: Boolean, default: !1 },
          fixed: { type: Boolean, default: !0 },
        },
        setup: function (t, n) {
          var r = n.emit,
            i = { light: "light", white: "light", black: "dark", dark: "dark" },
            o = ["mpwzq", "mpweapp"].includes("mpweapp"),
            a = {
              light:
                "https://st.gtimg.com/pcm/mp16i5d4_9d81e6b809b5af0a7467b7e70c6dbf2e.svg",
              dark: "https://st.gtimg.com/design/cd51328fb51ac3594b33b953e67518f5.svg",
            },
            l = e.ref(
              o
                ? i[e.wx$1.getStorageSync("user/skin") || "light"]
                : i[document.body.getAttribute("data-theme") || "light"]
            ),
            c = e.computed(function () {
              return a[l.value] || a.light;
            }),
            d = e.ref(null),
            u = e.ref(!1);
          function f() {
            var e,
              t = null == (e = d.value) ? void 0 : e.showSearchBarObj;
            return (null == t ? void 0 : t.value) || t || null;
          }
          return (
            e.onMounted(function () {
              e.StockBridge.report(
                "hq.etfhotspotdetail.ask_yuanbao_entry_brow"
              );
            }),
            {
              shareIcon: c,
              aiBarRef: d,
              isAiEntryShown: u,
              getAiBarQuestion: f,
              getAiBarTitle: function () {
                var e,
                  t = null == (e = f()) ? void 0 : e.title;
                return null == t ? "" : String(t).trim();
              },
              handleShowAiEntry: function (e) {
                (u.value = !0), r("ai-show", e);
              },
              handleHideAiEntry: function () {
                (u.value = !1), r("ai-hide");
              },
              handleClickAiDialog: function (e, t) {
                r("ask", e, t);
              },
            }
          );
        },
      });
    Array || e.resolveComponent("AiBar")();
    var n = e._export_sfc(t, [
      [
        "render",
        function (t, n, r, i, o, a) {
          return e.e(
            { a: t.scene },
            t.scene
              ? {
                  b: e.sr("aiBarRef", "fdf16d42-0"),
                  c: e.o(t.handleShowAiEntry, 2441),
                  d: e.o(t.handleHideAiEntry, 2442),
                  e: e.o(t.handleClickAiDialog, 2443),
                  f: e.p({
                    scene: t.scene,
                    "content-id": t.contentId,
                    "report-prefix": t.aiReportPrefix,
                    "report-info": t.aiReportInfo,
                    "force-lite": !0,
                  }),
                }
              : {},
            {
              g: t.shareIcon,
              h: t.isMp ? "share" : null,
              i: e.o(function (e) {
                return t.$emit("share");
              }, 2444),
              j: t.isAiEntryShown,
              k: e.n({ "footer-bar--fixed": t.fixed }),
            }
          );
        },
      ],
      ["__scopeId", "data-v-fdf16d42"],
    ]);
    wx.createComponent(n);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/marketSbg/@tencent/stock-hq-etf/hotTopicPages/components/FooterBar.js",
  }
);
require("pages/marketSbg/@tencent/stock-hq-etf/hotTopicPages/components/FooterBar.js");
