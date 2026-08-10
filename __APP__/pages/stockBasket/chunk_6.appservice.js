$gwx0_XC_7 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx0_XC_7 || [];
    function gz$gwx0_XC_7_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx0_XC_7_1)
        return __WXML_GLOBAL__.ops_cached.$gwx0_XC_7_1;
      __WXML_GLOBAL__.ops_cached.$gwx0_XC_7_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "c"]]);
        Z([3, "__l"]);
        Z([[7], [3, "b"]]);
        Z([[7], [3, "a"]]);
        Z([3, "2590c494-0"]);
        Z(z[0]);
      })(__WXML_GLOBAL__.ops_cached.$gwx0_XC_7_1);
      return __WXML_GLOBAL__.ops_cached.$gwx0_XC_7_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx0_XC_7 = z;
    __WXML_GLOBAL__.ops_init.$gwx0_XC_7 = true;
    var x = [
      "./pages/stockBasket/@tencent/wzq-lite-basket/components/basketForChoose.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx0_XC_7_1();
      var lQI = _v();
      _(r, lQI);
      if (_oz(z, 0, e, s, gg)) {
        lQI.wxVkey = 1;
        var aRI = _mz(
          z,
          "basket-overview",
          [
            "bind:__l",
            1,
            "bindgoToBasketDetail",
            1,
            "bindgoToStockDetail",
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
        _(lQI, aRI);
      }
      lQI.wxXCkey = 1;
      lQI.wxXCkey = 3;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx0_XC_7";
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
if (__vd_version_info__.delayedGwx || false) $gwx0_XC_7();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/stockBasket/@tencent/wzq-lite-basket/components/basketForChoose.wxml"
  ] = [
    $gwx0_XC_7,
    "./pages/stockBasket/@tencent/wzq-lite-basket/components/basketForChoose.wxml",
  ];
else
  __wxAppCode__[
    "pages/stockBasket/@tencent/wzq-lite-basket/components/basketForChoose.wxml"
  ] = $gwx0_XC_7(
    "./pages/stockBasket/@tencent/wzq-lite-basket/components/basketForChoose.wxml"
  );
__wxRoute =
  "pages/stockBasket/@tencent/wzq-lite-basket/components/basketForChoose";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/stockBasket/@tencent/wzq-lite-basket/components/basketForChoose.js";
define(
  "pages/stockBasket/@tencent/wzq-lite-basket/components/basketForChoose.js",
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
    var e = require("../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
      t = Object.defineProperty,
      o = Object.defineProperties,
      r = Object.getOwnPropertyDescriptors,
      i = Object.getOwnPropertySymbols,
      a = Object.prototype.hasOwnProperty,
      n = Object.prototype.propertyIsEnumerable,
      s = function (e, o, r) {
        return o in e
          ? t(e, o, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: r,
            })
          : (e[o] = r);
      },
      l = require("../../../../../common/vendor.js"),
      c = {
        components: {
          basketOverview: function () {
            return "./basketOverview.js";
          },
        },
        inject: ["hqBridge"],
        props: {
          basketData: {
            type: Object,
            default: function () {
              return {};
            },
          },
          isPageShow: { type: Boolean, default: !1 },
          positionid: { type: Number, default: 0 },
          from: { type: String, default: "" },
        },
        emits: ["goToStockDetail", "goToBasketDetail"],
        methods: {
          goToStockDetail: function () {
            var e, t;
            this.$emit(
              "goToStockDetail",
              null == (t = null == (e = this.basketData) ? void 0 : e.info)
                ? void 0
                : t.id
            );
          },
          headerReportLog: function (t) {
            var l, c, p, u;
            this.$emit(
              "headerReportLog",
              ((p = (function (t, o) {
                for (var r in o || (o = {})) a.call(o, r) && s(t, r, o[r]);
                if (i) {
                  var l,
                    c = e(i(o));
                  try {
                    for (c.s(); !(l = c.n()).done; ) {
                      r = l.value;
                      n.call(o, r) && s(t, r, o[r]);
                    }
                  } catch (e) {
                    c.e(e);
                  } finally {
                    c.f();
                  }
                }
                return t;
              })({}, t)),
              (u = {
                gdId:
                  null == (c = null == (l = this.basketData) ? void 0 : l.info)
                    ? void 0
                    : c.id,
              }),
              o(p, r(u)))
            );
          },
          goToBasketDetail: function () {
            var e,
              t,
              o =
                null == (t = null == (e = this.basketData) ? void 0 : e.info)
                  ? void 0
                  : t.id;
            this.$emit("goToBasketDetail", o);
          },
        },
      };
    Array || l.resolveComponent("basket-overview")();
    var p = l._export_sfc(c, [
      [
        "render",
        function (e, t, o, r, i, a) {
          return {
            a: l.o(a.goToStockDetail, 4020),
            b: l.o(a.goToBasketDetail, 4021),
            c: l.p({
              "report-prefix": "hq.portfolio",
              "report-extra": { is_from_category: 0 },
              "basket-data": o.basketData,
              "is-show-desc": !1,
              "is-show-footer": !0,
              "is-hstab-show": o.isPageShow,
              positionid: o.positionid,
              from: o.from,
            }),
          };
        },
      ],
    ]);
    wx.createComponent(p);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/stockBasket/@tencent/wzq-lite-basket/components/basketForChoose.js",
  }
);
require("pages/stockBasket/@tencent/wzq-lite-basket/components/basketForChoose.js");
