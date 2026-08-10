$gwx5_XC_17 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx5_XC_17 || [];
    function gz$gwx5_XC_17_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx5_XC_17_1)
        return __WXML_GLOBAL__.ops_cached.$gwx5_XC_17_1;
      __WXML_GLOBAL__.ops_cached.$gwx5_XC_17_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "d"]]);
        Z([3, "__l"]);
        Z([3, "r"]);
        Z([[7], [3, "c"]]);
        Z([3, "38db5445-0"]);
        Z(z[0]);
        Z([3, "hotTopicDetailPageRef"]);
        Z(z[1]);
        Z([3, "38db5445-1"]);
        Z([[7], [3, "e"]]);
        Z(z[1]);
        Z([3, "38db5445-2"]);
        Z(z[9]);
      })(__WXML_GLOBAL__.ops_cached.$gwx5_XC_17_1);
      return __WXML_GLOBAL__.ops_cached.$gwx5_XC_17_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx5_XC_17 = z;
    __WXML_GLOBAL__.ops_init.$gwx5_XC_17 = true;
    var x = ["./pages/market/pages/ETFPage/etfhotspotdetail.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx5_XC_17_1();
      var oLU = _v();
      _(r, oLU);
      if (_oz(z, 0, e, s, gg)) {
        oLU.wxVkey = 1;
        var cNU = _mz(
          z,
          "hot-topic-detail-page",
          [
            "bind:__l",
            1,
            "class",
            1,
            "data-st-theme",
            2,
            "uI",
            3,
            "uP",
            4,
            "uR",
            5,
          ],
          [],
          e,
          s,
          gg
        );
        _(oLU, cNU);
      }
      var hOU = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 7, "uI", 1],
        [],
        e,
        s,
        gg
      );
      _(r, hOU);
      var fMU = _v();
      _(r, fMU);
      if (_oz(z, 9, e, s, gg)) {
        fMU.wxVkey = 1;
        var oPU = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 10, "uI", 1, "uP", 2],
          [],
          e,
          s,
          gg
        );
        _(fMU, oPU);
      }
      oLU.wxXCkey = 1;
      oLU.wxXCkey = 3;
      fMU.wxXCkey = 1;
      fMU.wxXCkey = 3;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx5_XC_17";
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
if (__vd_version_info__.delayedGwx || false) $gwx5_XC_17();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/market/pages/ETFPage/etfhotspotdetail.wxml"] = [
    $gwx5_XC_17,
    "./pages/market/pages/ETFPage/etfhotspotdetail.wxml",
  ];
else
  __wxAppCode__["pages/market/pages/ETFPage/etfhotspotdetail.wxml"] =
    $gwx5_XC_17("./pages/market/pages/ETFPage/etfhotspotdetail.wxml");
__wxRoute = "pages/market/pages/ETFPage/etfhotspotdetail";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/market/pages/ETFPage/etfhotspotdetail.js";
define(
  "pages/market/pages/ETFPage/etfhotspotdetail.js",
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
      t = Object.defineProperty,
      o = Object.getOwnPropertySymbols,
      r = Object.prototype.hasOwnProperty,
      n = Object.prototype.propertyIsEnumerable,
      i = function (e, o, r) {
        return o in e
          ? t(e, o, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: r,
            })
          : (e[o] = r);
      },
      a = require("../../../../common/vendor.js"),
      c = require("../../@tencent/stock-base/bridge/mpwzq.js"),
      l = {
        name: "HotTopicDetailRoutePage",
        components: {
          HotTopicDetailPage: function () {
            return "../../../marketSbg/@tencent/stock-hq-etf/hotTopicPages/DetailPage.js";
          },
        },
        provide: function () {
          return {
            stockBridge: c.StockBridge,
            stockRouter: a.StockRouter,
            hqBridge: c.StockBridge,
          };
        },
        data: function () {
          return {
            query: {},
            skin: a.wx$1.getStorageSync("user/skin") || "white",
          };
        },
        onLoad: function () {
          var t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.query = (function (t, a) {
            for (var c in a || (a = {})) r.call(a, c) && i(t, c, a[c]);
            if (o) {
              var l,
                u = e(o(a));
              try {
                for (u.s(); !(l = u.n()).done; ) {
                  c = l.value;
                  n.call(a, c) && i(t, c, a[c]);
                }
              } catch (e) {
                u.e(e);
              } finally {
                u.f();
              }
            }
            return t;
          })({}, t);
        },
        onPageScroll: function (e) {
          var t,
            o,
            r,
            n = null != (t = null == e ? void 0 : e.scrollTop) ? t : 0;
          null ==
            (r =
              null == (o = this.$refs.hotTopicDetailPageRef)
                ? void 0
                : o.setScrollTop) || r.call(o, n),
            a.scrollDepthStat.onScroll(n, this.__route__);
        },
      };
    Array ||
      (
        a.resolveComponent("HotTopicDetailPage") +
        a.resolveComponent("mp-privacy-dialog") +
        a.resolveComponent("stock-privacy-dialog")
      )();
    var u = a._export_sfc(l, [
      [
        "render",
        function (e, t, o, r, n, i) {
          return {
            a: e.rootFontSize,
            b: a.sr("hotTopicDetailPageRef", "38db5445-0"),
            c: n.skin,
            d: a.p({ query: n.query }),
            e: a.p({ "no-auto": !0 }),
          };
        },
      ],
    ]);
    (l.__runtimeHooks = 1), wx.createPage(u);
  },
  {
    isPage: true,
    isComponent: true,
    currentFile: "pages/market/pages/ETFPage/etfhotspotdetail.js",
  }
);
require("pages/market/pages/ETFPage/etfhotspotdetail.js");
