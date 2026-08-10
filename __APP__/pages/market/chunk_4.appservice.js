$gwx5_XC_14 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx5_XC_14 || [];
    function gz$gwx5_XC_14_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx5_XC_14_1)
        return __WXML_GLOBAL__.ops_cached.$gwx5_XC_14_1;
      __WXML_GLOBAL__.ops_cached.$gwx5_XC_14_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "c"]]);
        Z([3, "__l"]);
        Z([3, "r"]);
        Z([3, "0ed04c9f-0"]);
        Z(z[0]);
        Z([3, "buyIndexLandingPageRef"]);
        Z(z[1]);
        Z([3, "0ed04c9f-1"]);
        Z([[7], [3, "d"]]);
        Z(z[1]);
        Z([3, "0ed04c9f-2"]);
        Z(z[8]);
      })(__WXML_GLOBAL__.ops_cached.$gwx5_XC_14_1);
      return __WXML_GLOBAL__.ops_cached.$gwx5_XC_14_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx5_XC_14 = z;
    __WXML_GLOBAL__.ops_init.$gwx5_XC_14 = true;
    var x = ["./pages/market/pages/ETFPage/buyIndexLanding.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx5_XC_14_1();
      var o6T = _v();
      _(r, o6T);
      if (_oz(z, 0, e, s, gg)) {
        o6T.wxVkey = 1;
        var o8T = _mz(
          z,
          "buy-index-landing-page",
          ["bind:__l", 1, "class", 1, "uI", 2, "uP", 3, "uR", 4],
          [],
          e,
          s,
          gg
        );
        _(o6T, o8T);
      }
      var f9T = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 6, "uI", 1],
        [],
        e,
        s,
        gg
      );
      _(r, f9T);
      var x7T = _v();
      _(r, x7T);
      if (_oz(z, 8, e, s, gg)) {
        x7T.wxVkey = 1;
        var c0T = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 9, "uI", 1, "uP", 2],
          [],
          e,
          s,
          gg
        );
        _(x7T, c0T);
      }
      o6T.wxXCkey = 1;
      o6T.wxXCkey = 3;
      x7T.wxXCkey = 1;
      x7T.wxXCkey = 3;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx5_XC_14";
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
if (__vd_version_info__.delayedGwx || false) $gwx5_XC_14();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/market/pages/ETFPage/buyIndexLanding.wxml"] = [
    $gwx5_XC_14,
    "./pages/market/pages/ETFPage/buyIndexLanding.wxml",
  ];
else
  __wxAppCode__["pages/market/pages/ETFPage/buyIndexLanding.wxml"] =
    $gwx5_XC_14("./pages/market/pages/ETFPage/buyIndexLanding.wxml");
__wxRoute = "pages/market/pages/ETFPage/buyIndexLanding";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/market/pages/ETFPage/buyIndexLanding.js";
define(
  "pages/market/pages/ETFPage/buyIndexLanding.js",
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
    var e = require("../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
      n = Object.defineProperty,
      r = Object.getOwnPropertySymbols,
      o = Object.prototype.hasOwnProperty,
      t = Object.prototype.propertyIsEnumerable,
      a = function (e, r, o) {
        return r in e
          ? n(e, r, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: o,
            })
          : (e[r] = o);
      },
      l = require("../../../../common/vendor.js"),
      i = require("../../@tencent/stock-base/bridge/mpwzq.js"),
      u = {
        name: "BuyIndexLandingRoutePage",
        components: {
          BuyIndexLandingPage: function () {
            return "../../../marketSbg/@tencent/stock-hq-etf/buyIndexPages/BuyIndexLandingPage.js";
          },
        },
        provide: function () {
          return {
            hqBridge: i.StockBridge,
            stockBridge: i.StockBridge,
            stockRouter: l.StockRouter,
          };
        },
        data: function () {
          return { query: {} };
        },
        onLoad: function () {
          var n =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.query = (function (n, l) {
            for (var i in l || (l = {})) o.call(l, i) && a(n, i, l[i]);
            if (r) {
              var u,
                c = e(r(l));
              try {
                for (c.s(); !(u = c.n()).done; ) {
                  i = u.value;
                  t.call(l, i) && a(n, i, l[i]);
                }
              } catch (e) {
                c.e(e);
              } finally {
                c.f();
              }
            }
            return n;
          })({}, n);
        },
        onShow: function () {
          var e, n;
          null ==
            (n =
              null == (e = this.$refs.buyIndexLandingPageRef)
                ? void 0
                : e.handlePageShow) || n.call(e);
        },
        onHide: function () {
          var e, n;
          null ==
            (n =
              null == (e = this.$refs.buyIndexLandingPageRef)
                ? void 0
                : e.handlePageHide) || n.call(e);
        },
        onUnload: function () {
          var e, n;
          null ==
            (n =
              null == (e = this.$refs.buyIndexLandingPageRef)
                ? void 0
                : e.handlePageHide) || n.call(e);
        },
        onPageScroll: function (e) {
          var n,
            r,
            o,
            t = null != (n = null == e ? void 0 : e.scrollTop) ? n : 0;
          null ==
            (o =
              null == (r = this.$refs.buyIndexLandingPageRef)
                ? void 0
                : r.setScrollTop) || o.call(r, t),
            l.scrollDepthStat.onScroll(t, this.__route__);
        },
      };
    Array ||
      (
        l.resolveComponent("BuyIndexLandingPage") +
        l.resolveComponent("mp-privacy-dialog") +
        l.resolveComponent("stock-privacy-dialog")
      )();
    var c = l._export_sfc(u, [
      [
        "render",
        function (e, n, r, o, t, a) {
          return {
            a: e.rootFontSize,
            b: l.sr("buyIndexLandingPageRef", "0ed04c9f-0"),
            c: l.p({ query: t.query }),
            d: l.p({ "no-auto": !0 }),
          };
        },
      ],
    ]);
    (u.__runtimeHooks = 1), wx.createPage(c);
  },
  {
    isPage: true,
    isComponent: true,
    currentFile: "pages/market/pages/ETFPage/buyIndexLanding.js",
  }
);
require("pages/market/pages/ETFPage/buyIndexLanding.js");
