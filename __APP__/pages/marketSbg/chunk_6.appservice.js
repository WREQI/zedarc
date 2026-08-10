$gwx47_XC_24 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx47_XC_24 || [];
    function gz$gwx47_XC_24_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx47_XC_24_1)
        return __WXML_GLOBAL__.ops_cached.$gwx47_XC_24_1;
      __WXML_GLOBAL__.ops_cached.$gwx47_XC_24_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "a"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx47_XC_24_1);
      return __WXML_GLOBAL__.ops_cached.$gwx47_XC_24_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx47_XC_24 = z;
    __WXML_GLOBAL__.ops_init.$gwx47_XC_24 = true;
    var x = [
      "./pages/marketSbg/@tencent/stock-hq-etf/components/Navigation.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx47_XC_24_1();
      var fOZ = _v();
      _(r, fOZ);
      if (_oz(z, 0, e, s, gg)) {
        fOZ.wxVkey = 1;
        var cPZ = _n("slot");
        _(fOZ, cPZ);
      }
      fOZ.wxXCkey = 1;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx47_XC_24";
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
if (__vd_version_info__.delayedGwx || false) $gwx47_XC_24();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/marketSbg/@tencent/stock-hq-etf/components/Navigation.wxml"
  ] = [
    $gwx47_XC_24,
    "./pages/marketSbg/@tencent/stock-hq-etf/components/Navigation.wxml",
  ];
else
  __wxAppCode__[
    "pages/marketSbg/@tencent/stock-hq-etf/components/Navigation.wxml"
  ] = $gwx47_XC_24(
    "./pages/marketSbg/@tencent/stock-hq-etf/components/Navigation.wxml"
  );
__wxRoute = "pages/marketSbg/@tencent/stock-hq-etf/components/Navigation";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/marketSbg/@tencent/stock-hq-etf/components/Navigation.js";
define(
  "pages/marketSbg/@tencent/stock-hq-etf/components/Navigation.js",
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
    var t = require("../../../../../common/vendor.js"),
      i = {
        props: ["title", "fixed", "invisible", "showFirst", "customBack"],
        data: function () {
          return {
            theme: "",
            opacity: 0,
            backIconVisible: !1,
            statusBarHeight: window.__statusBarHeight__ || 20,
          };
        },
        watch: {
          backIconVisible: function (t) {
            var i = this;
            t &&
              this.$nextTick(function () {
                i.registerScrollEvents();
              });
          },
        },
        created: function () {
          var t = this;
          this.$sdk.getSystemInfo(function (i) {
            i && i.theme && (t.theme = i.theme);
          }),
            (this.backIconVisible = !0);
        },
        methods: {
          registerScrollEvents: function () {
            var t = this,
              i = this.$refs.navigation;
            this.fixed || this.invisible
              ? (this.opacity = 1)
              : ((this.height = i.getBoundingClientRect().height),
                window.addEventListener(
                  "scroll",
                  function () {
                    t.fadeNavigation();
                  },
                  !1
                ));
          },
          fadeNavigation: function () {
            var t = document.body.getBoundingClientRect().top,
              i = this.height;
            this.opacity =
              t >= 0
                ? 0
                : t > -1 * i
                ? Math.min(1, (0.8 * Math.abs(t)) / i)
                : 1;
          },
          navigateBack: function () {
            this.customBack ? this.$emit("back") : this.$sdk.closeWindow();
          },
        },
      },
      e = t._export_sfc(i, [
        [
          "render",
          function (i, e, n, a, o, s) {
            return t.e(
              { a: !n.invisible && o.backIconVisible },
              !n.invisible && o.backIconVisible
                ? {
                    b: o.opacity,
                    c: o.statusBarHeight + "px",
                    d: o.opacity,
                    e: t.o(function () {
                      return (
                        s.navigateBack && s.navigateBack.apply(s, arguments)
                      );
                    }, 2700),
                    f: t.t(n.title),
                    g: t.n(n.showFirst ? "" : "border-bottom-1px"),
                    h: n.showFirst ? 1 : o.opacity,
                    i: t.n("navigation-" + o.theme),
                    j: t.n(0 == o.opacity ? "navigation-initial" : ""),
                  }
                : {}
            );
          },
        ],
      ]);
    wx.createComponent(e);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/marketSbg/@tencent/stock-hq-etf/components/Navigation.js",
  }
);
require("pages/marketSbg/@tencent/stock-hq-etf/components/Navigation.js");
