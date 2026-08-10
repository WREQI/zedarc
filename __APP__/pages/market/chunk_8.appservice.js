$gwx5_XC_18 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx5_XC_18 || [];
    function gz$gwx5_XC_18_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx5_XC_18_1)
        return __WXML_GLOBAL__.ops_cached.$gwx5_XC_18_1;
      __WXML_GLOBAL__.ops_cached.$gwx5_XC_18_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "d"]]);
        Z([3, "__l"]);
        Z([3, "r"]);
        Z([[7], [3, "c"]]);
        Z([3, "a0356d50-0"]);
        Z(z[0]);
        Z([3, "etfPage"]);
        Z(z[1]);
        Z([3, "a0356d50-1"]);
        Z([[7], [3, "e"]]);
        Z(z[1]);
        Z([3, "a0356d50-2"]);
        Z(z[9]);
      })(__WXML_GLOBAL__.ops_cached.$gwx5_XC_18_1);
      return __WXML_GLOBAL__.ops_cached.$gwx5_XC_18_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx5_XC_18 = z;
    __WXML_GLOBAL__.ops_init.$gwx5_XC_18 = true;
    var x = ["./pages/market/pages/ETFPage/etfzonebonus.wxml"];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx5_XC_18_1();
      var oRU = _v();
      _(r, oRU);
      if (_oz(z, 0, e, s, gg)) {
        oRU.wxVkey = 1;
        var aTU = _mz(
          z,
          "dividend-detail",
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
        _(oRU, aTU);
      }
      var tUU = _mz(
        z,
        "mp-privacy-dialog",
        ["bind:__l", 7, "uI", 1],
        [],
        e,
        s,
        gg
      );
      _(r, tUU);
      var lSU = _v();
      _(r, lSU);
      if (_oz(z, 9, e, s, gg)) {
        lSU.wxVkey = 1;
        var eVU = _mz(
          z,
          "stock-privacy-dialog",
          ["bind:__l", 10, "uI", 1, "uP", 2],
          [],
          e,
          s,
          gg
        );
        _(lSU, eVU);
      }
      oRU.wxXCkey = 1;
      oRU.wxXCkey = 3;
      lSU.wxXCkey = 1;
      lSU.wxXCkey = 3;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx5_XC_18";
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
if (__vd_version_info__.delayedGwx || false) $gwx5_XC_18();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__["pages/market/pages/ETFPage/etfzonebonus.wxml"] = [
    $gwx5_XC_18,
    "./pages/market/pages/ETFPage/etfzonebonus.wxml",
  ];
else
  __wxAppCode__["pages/market/pages/ETFPage/etfzonebonus.wxml"] = $gwx5_XC_18(
    "./pages/market/pages/ETFPage/etfzonebonus.wxml"
  );
__wxRoute = "pages/market/pages/ETFPage/etfzonebonus";
__wxRouteBegin = true;
__wxAppCurrentFile__ = "pages/market/pages/ETFPage/etfzonebonus.js";
define(
  "pages/market/pages/ETFPage/etfzonebonus.js",
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
      r = Object.getOwnPropertySymbols,
      n = Object.prototype.hasOwnProperty,
      o = Object.prototype.propertyIsEnumerable,
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
      a = require("../../../../common/vendor.js"),
      c = require("../../@tencent/stock-base/bridge/mpwzq.js"),
      s = {
        name: "EtfZoneBonusRoutePage",
        components: {
          DividendDetail: function () {
            return "../../../marketSbg/@tencent/stock-hq-etf/dividendPages/DividendDetail.js".then(
              function (e) {
                return e.L2RhdGEvd29ya3NwYWNlL3AtOTk2MDBkZTM0NmU5NDU4YTkwOTE1MjY2YjE1MzQzNDkvODQzNjQvbm9kZV9tb2R1bGVzL0B0ZW5jZW50L3N0b2NrLWhxLWV0Zi9kaXZpZGVuZFBhZ2VzL0RpdmlkZW5kRGV0YWlsLnZ1ZQ;
              }
            );
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
            for (var c in a || (a = {})) n.call(a, c) && i(t, c, a[c]);
            if (r) {
              var s,
                l = e(r(a));
              try {
                for (l.s(); !(s = l.n()).done; ) {
                  c = s.value;
                  o.call(a, c) && i(t, c, a[c]);
                }
              } catch (e) {
                l.e(e);
              } finally {
                l.f();
              }
            }
            return t;
          })({}, t);
        },
        mounted: function () {
          var e = this;
          this.$nextTick(function () {
            e.$refs.etfPage && e.$refs.etfPage.tabActivated();
          });
        },
        onPageScroll: function (e) {
          var t,
            r,
            n,
            o = null != (t = null == e ? void 0 : e.scrollTop) ? t : 0;
          null ==
            (n = null == (r = this.$refs.etfPage) ? void 0 : r.setScrollTop) ||
            n.call(r, o),
            a.scrollDepthStat.onScroll(o, this.__route__);
        },
        onShow: function () {
          this.$refs.etfPage && this.$refs.etfPage.tabActivated();
        },
        onHide: function () {
          this.$refs.etfPage && this.$refs.etfPage.tabDeactivated();
        },
      };
    Array ||
      (
        a.resolveComponent("DividendDetail") +
        a.resolveComponent("mp-privacy-dialog") +
        a.resolveComponent("stock-privacy-dialog")
      )();
    var l = a._export_sfc(s, [
      [
        "render",
        function (e, t, r, n, o, i) {
          return {
            a: e.rootFontSize,
            b: a.sr("etfPage", "a0356d50-0"),
            c: o.skin,
            d: a.p({ query: o.query }),
            e: a.p({ "no-auto": !0 }),
          };
        },
      ],
    ]);
    (s.__runtimeHooks = 1), wx.createPage(l);
  },
  {
    isPage: true,
    isComponent: true,
    currentFile: "pages/market/pages/ETFPage/etfzonebonus.js",
  }
);
require("pages/market/pages/ETFPage/etfzonebonus.js");
