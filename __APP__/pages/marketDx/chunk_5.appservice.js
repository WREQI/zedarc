$gwx45_XC_5 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx45_XC_5 || [];
    function gz$gwx45_XC_5_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx45_XC_5_1)
        return __WXML_GLOBAL__.ops_cached.$gwx45_XC_5_1;
      __WXML_GLOBAL__.ops_cached.$gwx45_XC_5_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "i"]]);
        Z([[7], [3, "h"]]);
        Z([[7], [3, "g"]]);
        Z([
          [4],
          [
            [5],
            [
              [5],
              [[5], [[5], [1, "_div"]], [1, "cont"]],
              [1, "data-v-fa75ed0a"],
            ],
            [[7], [3, "f"]],
          ],
        ]);
        Z([[7], [3, "a"]]);
        Z([
          [4],
          [
            [5],
            [
              [5],
              [[5], [[5], [1, "_div"]], [1, "tab"]],
              [1, "data-v-fa75ed0a"],
            ],
            [[7], [3, "c"]],
          ],
        ]);
        Z([[7], [3, "b"]]);
        Z([[7], [3, "e"]]);
        Z([
          [4],
          [
            [5],
            [
              [5],
              [[5], [[5], [1, "_div"]], [1, "tab"]],
              [1, "data-v-fa75ed0a"],
            ],
            [[7], [3, "d"]],
          ],
        ]);
      })(__WXML_GLOBAL__.ops_cached.$gwx45_XC_5_1);
      return __WXML_GLOBAL__.ops_cached.$gwx45_XC_5_1;
    }
    function gz$gwx45_XC_5_2() {
      if (__WXML_GLOBAL__.ops_cached.$gwx45_XC_5_2)
        return __WXML_GLOBAL__.ops_cached.$gwx45_XC_5_2;
      __WXML_GLOBAL__.ops_cached.$gwx45_XC_5_2 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "f"]]);
        Z([[7], [3, "e"]]);
        Z([3, "_div tabbar-scroll-wrapper data-v-0a4670a6"]);
        Z([[7], [3, "a"]]);
        Z([[7], [3, "c"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx45_XC_5_2);
      return __WXML_GLOBAL__.ops_cached.$gwx45_XC_5_2;
    }
    __WXML_GLOBAL__.ops_set.$gwx45_XC_5 = z;
    __WXML_GLOBAL__.ops_init.$gwx45_XC_5 = true;
    var x = [
      "./pages/marketDx/@tencent/stock-hq-dxpage/components/common/Tab/Tab.wxml",
      "./pages/marketDx/@tencent/stock-hq-dxpage/components/common/Tab/Tabbar.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx45_XC_5_1();
      var aZO = _mz(
        z,
        "view",
        [
          "bindtouchend",
          0,
          "bindtouchmove",
          1,
          "bindtouchstart",
          1,
          "class",
          2,
        ],
        [],
        e,
        s,
        gg
      );
      var t1O = _v();
      _(aZO, t1O);
      if (_oz(z, 4, e, s, gg)) {
        t1O.wxVkey = 1;
        var e2O = _n("view");
        _rz(z, e2O, "class", 5, e, s, gg);
        var b3O = _v();
        _(e2O, b3O);
        if (_oz(z, 6, e, s, gg)) {
          b3O.wxVkey = 1;
        }
        var o4O = _n("slot");
        _(e2O, o4O);
        b3O.wxXCkey = 1;
        _(t1O, e2O);
      } else {
        t1O.wxVkey = 2;
        var x5O = _mz(z, "view", ["bindtap", 7, "class", 1], [], e, s, gg);
        var o6O = _n("slot");
        _(x5O, o6O);
        _(t1O, x5O);
      }
      t1O.wxXCkey = 1;
      _(r, aZO);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    d_[x[1]] = {};
    var m1 = function (e, s, r, gg) {
      var z = gz$gwx45_XC_5_2();
      var c8O = _mz(
        z,
        "view",
        ["bindtouchmove", 0, "catchtouchstart", 1, "class", 1],
        [],
        e,
        s,
        gg
      );
      var h9O = _v();
      _(c8O, h9O);
      if (_oz(z, 3, e, s, gg)) {
        h9O.wxVkey = 1;
      }
      var cAP = _n("slot");
      _(c8O, cAP);
      var o0O = _v();
      _(c8O, o0O);
      if (_oz(z, 4, e, s, gg)) {
        o0O.wxVkey = 1;
      }
      h9O.wxXCkey = 1;
      o0O.wxXCkey = 1;
      _(r, c8O);
      return r;
    };
    e_[x[1]] = { f: m1, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx45_XC_5";
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
if (__vd_version_info__.delayedGwx || false) $gwx45_XC_5();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/marketDx/@tencent/stock-hq-dxpage/components/common/Tab/Tab.wxml"
  ] = [
    $gwx45_XC_5,
    "./pages/marketDx/@tencent/stock-hq-dxpage/components/common/Tab/Tab.wxml",
  ];
else
  __wxAppCode__[
    "pages/marketDx/@tencent/stock-hq-dxpage/components/common/Tab/Tab.wxml"
  ] = $gwx45_XC_5(
    "./pages/marketDx/@tencent/stock-hq-dxpage/components/common/Tab/Tab.wxml"
  );
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/marketDx/@tencent/stock-hq-dxpage/components/common/Tab/Tabbar.wxml"
  ] = [
    $gwx45_XC_5,
    "./pages/marketDx/@tencent/stock-hq-dxpage/components/common/Tab/Tabbar.wxml",
  ];
else
  __wxAppCode__[
    "pages/marketDx/@tencent/stock-hq-dxpage/components/common/Tab/Tabbar.wxml"
  ] = $gwx45_XC_5(
    "./pages/marketDx/@tencent/stock-hq-dxpage/components/common/Tab/Tabbar.wxml"
  );
__wxRoute = "pages/marketDx/@tencent/stock-hq-dxpage/components/common/Tab/Tab";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/marketDx/@tencent/stock-hq-dxpage/components/common/Tab/Tab.js";
define(
  "pages/marketDx/@tencent/stock-hq-dxpage/components/common/Tab/Tab.js",
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
    var e = require("../../../../../../../common/vendor.js"),
      t = {
        inject: ["hqBridge"],
        props: {
          name: [String, Number],
          isNotify: [Boolean],
          isTitle: [Boolean],
        },
        data: function () {
          return { selected: !1, touch: null, isClick: !1 };
        },
        computed: {
          isMobile: function () {
            return !!this.isMp || "ontouchstart" in window;
          },
          isMp: function () {
            return this.hqBridge.ENV;
          },
        },
        methods: {
          onClick: function () {
            this.$parent.$emit("select", this.name);
          },
          onTouchStart: function (e) {
            1 === e.touches.length &&
              ((this.touch = e.touches[0]), (this.isClick = !0));
          },
          onTouchMove: function (e) {
            if (1 === e.touches.length && this.isClick) {
              var t = e.touches[0],
                n = Math.abs(t.screenX - this.touch.screenX),
                i = Math.abs(t.screenY - this.touch.screenY);
              (n >= 9 || i >= 9) && (this.isClick = !1);
            }
          },
          onTouchEnd: function (e) {
            this.isClick && (this.onClick(), e.preventDefault()),
              (this.isClick = !1);
          },
          changeTab: function (e) {
            this.selected = this.name === e;
          },
        },
      },
      n = e._export_sfc(t, [
        [
          "render",
          function (t, n, i, o, c, s) {
            return e.e(
              { a: s.isMobile },
              s.isMobile
                ? e.e({ b: i.isNotify }, (i.isNotify, {}), {
                    c: e.n(
                      s.isMp && c.selected
                        ? "selectedmp"
                        : c.selected
                        ? "selectedwzq"
                        : ""
                    ),
                  })
                : {
                    d: e.n(
                      s.isMp && c.selected
                        ? "selectedmp"
                        : c.selected
                        ? "selectedwzq"
                        : ""
                    ),
                    e: e.o(function () {
                      return s.onClick && s.onClick.apply(s, arguments);
                    }, 2488),
                  },
              {
                f: e.n(i.isTitle ? "cont-title" : "cont-content"),
                g: e.o(function () {
                  return s.onTouchStart && s.onTouchStart.apply(s, arguments);
                }, 2489),
                h: e.o(function () {
                  return s.onTouchMove && s.onTouchMove.apply(s, arguments);
                }, 2490),
                i: e.o(function () {
                  return s.onTouchEnd && s.onTouchEnd.apply(s, arguments);
                }, 2491),
              }
            );
          },
        ],
        ["__scopeId", "data-v-fa75ed0a"],
      ]);
    wx.createComponent(n);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/marketDx/@tencent/stock-hq-dxpage/components/common/Tab/Tab.js",
  }
);
require("pages/marketDx/@tencent/stock-hq-dxpage/components/common/Tab/Tab.js");
__wxRoute =
  "pages/marketDx/@tencent/stock-hq-dxpage/components/common/Tab/Tabbar";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/marketDx/@tencent/stock-hq-dxpage/components/common/Tab/Tabbar.js";
define(
  "pages/marketDx/@tencent/stock-hq-dxpage/components/common/Tab/Tabbar.js",
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
    var t = require("../../../../../../../@babel/runtime/helpers/createForOfIteratorHelper"),
      e = require("../../../../../../../common/vendor.js"),
      n = {
        inject: ["hqBridge"],
        props: {
          index: [String, Number],
          indicator: { type: Boolean, default: !0 },
          isScroll: { type: Boolean, default: !1 },
          stat: { default: "", type: String },
          typeid: { default: "", type: String },
        },
        data: function () {
          return {
            indicatorStyle: { width: 0, left: 0 },
            touched: !1,
            firstTime: !0,
          };
        },
        watch: {
          index: {
            handler: function (t) {
              var e = this;
              this.$nextTick(function () {
                return e.update();
              });
            },
          },
        },
        mounted: function () {
          this.update();
        },
        activated: function () {
          this.firstTime = !1;
        },
        methods: {
          update: function () {
            if (this.indicator) {
              var n,
                o = { left: 0, width: 0 },
                i = t(this.$slots.default);
              try {
                for (i.s(); !(n = i.n()).done; ) {
                  var r = n.value.componentInstance;
                  if (r) {
                    var a = r.$el.scrollWidth;
                    if (r.name === this.index) {
                      o.width = a;
                      break;
                    }
                    o.left += a;
                  }
                }
              } catch (t) {
                i.e(t);
              } finally {
                i.f();
              }
              this.indicatorStyle = e.mapValues(o, function (t) {
                return "".concat(t, "px");
              });
            }
          },
          onTouchStart: function () {
            var t = this;
            (this.touched = !0),
              setTimeout(function () {
                return (t.touched = !1);
              }, 1e3);
          },
          onTouchMove: function (t) {
            this.isScroll && t.stopPropagation();
          },
        },
      },
      o = e._export_sfc(n, [
        [
          "render",
          function (t, n, o, i, r, a) {
            return e.e(
              { a: r.touched },
              (r.touched, {}),
              { b: o.typeid, c: o.indicator },
              o.indicator ? { d: e.s(r.indicatorStyle) } : {},
              {
                e: e.o(function () {
                  return a.onTouchStart && a.onTouchStart.apply(a, arguments);
                }, 2486),
                f: e.o(function () {
                  return a.onTouchMove && a.onTouchMove.apply(a, arguments);
                }, 2487),
              }
            );
          },
        ],
        ["__scopeId", "data-v-0a4670a6"],
      ]);
    wx.createComponent(o);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/marketDx/@tencent/stock-hq-dxpage/components/common/Tab/Tabbar.js",
  }
);
require("pages/marketDx/@tencent/stock-hq-dxpage/components/common/Tab/Tabbar.js");
