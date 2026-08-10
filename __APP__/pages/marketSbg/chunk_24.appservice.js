$gwx47_XC_17 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx47_XC_17 || [];
    function gz$gwx47_XC_17_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx47_XC_17_1)
        return __WXML_GLOBAL__.ops_cached.$gwx47_XC_17_1;
      __WXML_GLOBAL__.ops_cached.$gwx47_XC_17_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
      })(__WXML_GLOBAL__.ops_cached.$gwx47_XC_17_1);
      return __WXML_GLOBAL__.ops_cached.$gwx47_XC_17_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx47_XC_17 = z;
    __WXML_GLOBAL__.ops_init.$gwx47_XC_17 = true;
    var x = [
      "./pages/marketSbg/@tencent/stock-hq-newpubetf/NewpubEtfTeach.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx47_XC_17_1();
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx47_XC_17";
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
if (__vd_version_info__.delayedGwx || false) $gwx47_XC_17();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/marketSbg/@tencent/stock-hq-newpubetf/NewpubEtfTeach.wxml"
  ] = [
    $gwx47_XC_17,
    "./pages/marketSbg/@tencent/stock-hq-newpubetf/NewpubEtfTeach.wxml",
  ];
else
  __wxAppCode__[
    "pages/marketSbg/@tencent/stock-hq-newpubetf/NewpubEtfTeach.wxml"
  ] = $gwx47_XC_17(
    "./pages/marketSbg/@tencent/stock-hq-newpubetf/NewpubEtfTeach.wxml"
  );
__wxRoute = "pages/marketSbg/@tencent/stock-hq-newpubetf/NewpubEtfTeach";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/marketSbg/@tencent/stock-hq-newpubetf/NewpubEtfTeach.js";
define(
  "pages/marketSbg/@tencent/stock-hq-newpubetf/NewpubEtfTeach.js",
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
    var t = require("../../../../common/vendor.js"),
      e = {
        inject: { hqBridge: { default: function () {} } },
        props: {
          queryData: {
            type: Object,
            default: function () {
              return {};
            },
          },
        },
        data: function () {
          return { from: "" };
        },
        computed: {
          isMp: function () {
            return t.StockBridge.ENV === t.EnvTypeEnum.MP;
          },
          getQueryData: function () {
            var t;
            return this.isMp
              ? this.queryData
              : null == (t = this.$route)
              ? void 0
              : t.query;
          },
        },
        activated: function () {
          var t = this,
            e = (this.getQueryData || {}).type,
            o = void 0 === e ? "" : e;
          this.scrollToTop(),
            this.$nextTick(function () {
              t.scrollTo(+o);
            });
        },
        onPageShow: function () {
          var t = this,
            e = (this.getQueryData || {}).type,
            o = void 0 === e ? "" : e;
          this.scrollToTop(),
            this.$nextTick(function () {
              t.scrollTo(+o);
            });
        },
        mounted: function () {
          var t = this.getQueryData || {},
            e = t.from,
            o = void 0 === e ? "" : e;
          t.type;
          (this.from = o), this.setShare(), this.setTitle();
        },
        methods: {
          setTitle: function () {
            var t, e;
            null == (e = null == (t = this.hqBridge) ? void 0 : t.setTitle) ||
              e.call(t, "认购攻略");
          },
          setShare: function () {},
          scrollToTop: function () {
            this.isMp && t.wx$1.pageScrollTo({ scrollTop: 0, duration: 300 });
          },
          scrollTo: function (e) {
            var o = ["", "one", "two", "three"][e];
            o &&
              this.$refs[o] &&
              this.isMp &&
              t.wx$1
                .createSelectorQuery()
                .in(this)
                .select(".teach-title-s-".concat(o))
                .boundingClientRect()
                .exec(function (e) {
                  (null == e ? void 0 : e[0]) &&
                    t.wx$1.pageScrollTo({ scrollTop: e[0].top, duration: 300 });
                });
          },
        },
      },
      o = t._export_sfc(e, [
        [
          "render",
          function (t, e, o, i, n, r) {
            return {
              a:
                "mini" === n.from
                  ? "https://st.gtimg.com/design/eb179d45e557c8492260f0cf7c7762f4.webp"
                  : "https://st.gtimg.com/design/02171816e0403899017e396aa8a53e80.png",
            };
          },
        ],
        ["__scopeId", "data-v-5c149618"],
      ]);
    wx.createComponent(o);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/marketSbg/@tencent/stock-hq-newpubetf/NewpubEtfTeach.js",
  }
);
require("pages/marketSbg/@tencent/stock-hq-newpubetf/NewpubEtfTeach.js");
