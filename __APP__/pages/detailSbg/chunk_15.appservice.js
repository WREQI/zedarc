$gwx3_XC_7 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx3_XC_7 || [];
    function gz$gwx3_XC_7_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx3_XC_7_1)
        return __WXML_GLOBAL__.ops_cached.$gwx3_XC_7_1;
      __WXML_GLOBAL__.ops_cached.$gwx3_XC_7_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "f"]]);
        Z([[7], [3, "e"]]);
        Z([3, "_div tabbar-scroll-wrapper data-v-46ed6ca3"]);
        Z([3, "tabRef"]);
        Z([[7], [3, "a"]]);
        Z([[7], [3, "c"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx3_XC_7_1);
      return __WXML_GLOBAL__.ops_cached.$gwx3_XC_7_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx3_XC_7 = z;
    __WXML_GLOBAL__.ops_init.$gwx3_XC_7 = true;
    var x = [
      "./pages/detailSbg/@tencent/stock-hq-core/components/Tab/Tabbar.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx3_XC_7_1();
      var oFR = _mz(
        z,
        "view",
        ["bindtouchmove", 0, "catchtouchstart", 1, "class", 1, "ref", 2],
        [],
        e,
        s,
        gg
      );
      var xGR = _v();
      _(oFR, xGR);
      if (_oz(z, 4, e, s, gg)) {
        xGR.wxVkey = 1;
      }
      var fIR = _n("slot");
      _(oFR, fIR);
      var oHR = _v();
      _(oFR, oHR);
      if (_oz(z, 5, e, s, gg)) {
        oHR.wxVkey = 1;
      }
      xGR.wxXCkey = 1;
      oHR.wxXCkey = 1;
      _(r, oFR);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx3_XC_7";
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
if (__vd_version_info__.delayedGwx || false) $gwx3_XC_7();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/detailSbg/@tencent/stock-hq-core/components/Tab/Tabbar.wxml"
  ] = [
    $gwx3_XC_7,
    "./pages/detailSbg/@tencent/stock-hq-core/components/Tab/Tabbar.wxml",
  ];
else
  __wxAppCode__[
    "pages/detailSbg/@tencent/stock-hq-core/components/Tab/Tabbar.wxml"
  ] = $gwx3_XC_7(
    "./pages/detailSbg/@tencent/stock-hq-core/components/Tab/Tabbar.wxml"
  );
__wxRoute = "pages/detailSbg/@tencent/stock-hq-core/components/Tab/Tabbar";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/detailSbg/@tencent/stock-hq-core/components/Tab/Tabbar.js";
define(
  "pages/detailSbg/@tencent/stock-hq-core/components/Tab/Tabbar.js",
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
      t = require("../../../../../../common/vendor.js"),
      n = {
        provide: function () {
          return { parent: this };
        },
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
            dragState: { flag: !1, downX: 0, scrollLeft: 0 },
          };
        },
        watch: {
          index: {
            handler: function (e) {
              var t = this;
              this.$emit("change", e),
                this.$nextTick(function () {
                  return t.update();
                });
            },
          },
        },
        mounted: function () {
          var e = this;
          this.update(),
            this.isMobile() ||
              this.$nextTick(function () {
                return e.dragScroll();
              });
        },
        activated: function () {
          this.firstTime = !1;
        },
        beforeDestroy: function () {
          this.cleanupDragScroll();
        },
        methods: {
          isMobile: function () {
            return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
              null == navigator ? void 0 : navigator.userAgent
            );
          },
          handleMouseDown: function (e) {
            var t = this.$refs.tabRef;
            (this.dragState.flag = !0),
              (this.dragState.downX = e.clientX),
              (this.dragState.scrollLeft = t.scrollLeft);
          },
          handleMouseMove: function (e) {
            if (this.dragState.flag) {
              var t = this.$refs.tabRef,
                n = e.clientX - this.dragState.downX,
                o = this.dragState.scrollLeft - n;
              t.scrollLeft = o;
            }
          },
          clearDragFlag: function () {
            this.dragState.flag = !1;
          },
          dragScroll: function () {
            var e = this,
              t = this.$refs.tabRef;
            if (t) {
              var n = {
                mousedown: function (t) {
                  return e.handleMouseDown(t);
                },
                mousemove: function (t) {
                  return e.handleMouseMove(t);
                },
                mouseup: function () {
                  return e.clearDragFlag();
                },
                mouseleave: function () {
                  return e.clearDragFlag();
                },
              };
              this.cleanupDragScroll(),
                t.addEventListener("mousedown", n.mousedown),
                t.addEventListener("mousemove", n.mousemove),
                t.addEventListener("mouseup", n.mouseup),
                t.addEventListener("mouseleave", n.mouseleave),
                (this._dragScrollHandlers = { el: t, handlers: n });
            }
          },
          cleanupDragScroll: function () {
            if (this._dragScrollHandlers) {
              var e = this._dragScrollHandlers,
                t = e.el,
                n = e.handlers;
              t.removeEventListener("mousedown", n.mousedown),
                t.removeEventListener("mousemove", n.mousemove),
                t.removeEventListener("mouseup", n.mouseup),
                t.removeEventListener("mouseleave", n.mouseleave),
                delete this._dragScrollHandlers;
            }
          },
          update: function () {
            if (this.indicator) {
              var n,
                o = { left: 0, width: 0 },
                r = e(this.$slots.default);
              try {
                for (r.s(); !(n = r.n()).done; ) {
                  var i = n.value.componentInstance;
                  if (i) {
                    var a = i.$el.scrollWidth;
                    if (i.name === this.index) {
                      o.width = a;
                      break;
                    }
                    o.left += a;
                  }
                }
              } catch (e) {
                r.e(e);
              } finally {
                r.f();
              }
              this.indicatorStyle = t.mapValues(o, function (e) {
                return "".concat(e, "px");
              });
            }
          },
          onTouchStart: function () {
            var e = this;
            (this.touched = !0),
              setTimeout(function () {
                return (e.touched = !1);
              }, 1e3);
          },
          onTouchMove: function (e) {
            this.isScroll && e.stopPropagation();
          },
        },
      },
      o = t._export_sfc(n, [
        [
          "render",
          function (e, n, o, r, i, a) {
            return t.e(
              { a: i.touched },
              (i.touched, {}),
              { b: o.typeid, c: o.indicator },
              o.indicator ? { d: t.s(i.indicatorStyle) } : {},
              {
                e: t.o(function () {
                  return a.onTouchStart && a.onTouchStart.apply(a, arguments);
                }, 4709),
                f: t.o(function () {
                  return a.onTouchMove && a.onTouchMove.apply(a, arguments);
                }, 4710),
              }
            );
          },
        ],
        ["__scopeId", "data-v-46ed6ca3"],
      ]);
    wx.createComponent(o);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/detailSbg/@tencent/stock-hq-core/components/Tab/Tabbar.js",
  }
);
require("pages/detailSbg/@tencent/stock-hq-core/components/Tab/Tabbar.js");
