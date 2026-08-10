$gwx3_XC_14 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx3_XC_14 || [];
    function gz$gwx3_XC_14_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx3_XC_14_1)
        return __WXML_GLOBAL__.ops_cached.$gwx3_XC_14_1;
      __WXML_GLOBAL__.ops_cached.$gwx3_XC_14_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
      })(__WXML_GLOBAL__.ops_cached.$gwx3_XC_14_1);
      return __WXML_GLOBAL__.ops_cached.$gwx3_XC_14_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx3_XC_14 = z;
    __WXML_GLOBAL__.ops_init.$gwx3_XC_14 = true;
    var x = [
      "./pages/detailSbg/@tencent/stock-markets-base/components/SelectPlate.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx3_XC_14_1();
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx3_XC_14";
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
if (__vd_version_info__.delayedGwx || false) $gwx3_XC_14();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/detailSbg/@tencent/stock-markets-base/components/SelectPlate.wxml"
  ] = [
    $gwx3_XC_14,
    "./pages/detailSbg/@tencent/stock-markets-base/components/SelectPlate.wxml",
  ];
else
  __wxAppCode__[
    "pages/detailSbg/@tencent/stock-markets-base/components/SelectPlate.wxml"
  ] = $gwx3_XC_14(
    "./pages/detailSbg/@tencent/stock-markets-base/components/SelectPlate.wxml"
  );
__wxRoute =
  "pages/detailSbg/@tencent/stock-markets-base/components/SelectPlate";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/detailSbg/@tencent/stock-markets-base/components/SelectPlate.js";
define(
  "pages/detailSbg/@tencent/stock-markets-base/components/SelectPlate.js",
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
    var t = require("../../../../../@babel/runtime/helpers/regeneratorRuntime");
    require("../../../../../@babel/runtime/helpers/Arrayincludes");
    var e = require("../../../../../common/vendor.js"),
      p = {
        inject: ["hqBridge"],
        props: ["data", "curTabIndex", "skin", "targetRef"],
        data: function () {
          return {
            isLite: ["mpwzq", "wzqlight"].includes("mpweapp"),
            isMP: e.StockBridge.ENV === e.EnvTypeEnum.MP,
            popup: {
              show: !1,
              ready: !1,
              flip: !1,
              num: 1,
              height: 0,
              optionMaxHeight: "",
              top: 0,
              left: 0,
              startY: 0,
              canClick: !0,
            },
          };
        },
        methods: {
          onPopupMore: function () {
            var p = this;
            (this.popup.optionMaxHeight = ""),
              (this.popup.show = !0),
              (this.popup.ready = !1),
              this.$nextTick(function () {
                return (
                  (o = p),
                  null,
                  (n = t().mark(function () {
                    var p, o, n, i, u, r, a, c, s, l, h, d, f, g, m, v, y;
                    return t().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (t.next = 2),
                                this.hqBridge.getEleInfo(
                                  "#".concat(this.targetRef),
                                  this.$parent
                                )
                              );
                            case 2:
                              return (
                                (u = t.sent),
                                (r = u.top),
                                (a = u.bottom),
                                (c = u.left),
                                (s = u.width),
                                (t.next = 9),
                                this.hqBridge.getEleInfo("#popup", this)
                              );
                            case 9:
                              (l = t.sent),
                                (h = l.width),
                                (d = l.height),
                                (f = 0),
                                (g = 0),
                                (m = 1),
                                e.StockBridge.ENV === e.EnvTypeEnum.MP
                                  ? ((v =
                                      (null == (o = (p = e.wx$1).getWindowInfo)
                                        ? void 0
                                        : o.call(p)) ||
                                      (null ==
                                      (i = (n = e.wx$1).getSystemInfoSync)
                                        ? void 0
                                        : i.call(n))),
                                    (y = getApp().globalData.systemInfo),
                                    (f = v.windowHeight),
                                    (g = v.statusBarHeight),
                                    (m = y.pixelRatio))
                                  : ((f = document.body.clientHeight),
                                    (m = window.devicePixelRatio)),
                                r - g - 38 * m > f - a - 40 * m
                                  ? ((this.popup.flip = !1),
                                    (this.popup.top = Math.max(
                                      r - d - 3 * m,
                                      5 * m
                                    )),
                                    (this.popup.left = c + s - h),
                                    (this.popup.optionMaxHeight =
                                      r - 5 * m + "px"))
                                  : ((this.popup.flip = !0),
                                    (this.popup.top = a + 3 * m),
                                    (this.popup.left = c + s - h)),
                                (this.popup.ready = !0),
                                e.StockBridge.ENV !== e.EnvTypeEnum.MP &&
                                  document.body.appendChild(this.$el);
                            case 15:
                            case "end":
                              return t.stop();
                          }
                      },
                      n,
                      this
                    );
                  })),
                  new Promise(function (t, e) {
                    var p = function (t) {
                        try {
                          u(n.next(t));
                        } catch (t) {
                          e(t);
                        }
                      },
                      i = function (t) {
                        try {
                          u(n.throw(t));
                        } catch (t) {
                          e(t);
                        }
                      },
                      u = function (e) {
                        return e.done
                          ? t(e.value)
                          : Promise.resolve(e.value).then(p, i);
                      };
                    u((n = n.apply(o, null)).next());
                  })
                );
                var o, n;
              });
          },
          popupTouchStart: function (t) {
            e.StockBridge.ENV !== e.EnvTypeEnum.MP &&
              ((this.popup.startY = t.touches[0].pageY),
              (this.popup.canClick = !0));
          },
          popupTouchMove: function (t) {
            if (e.StockBridge.ENV !== e.EnvTypeEnum.MP) {
              this.popup.canClick = !1;
              var p = this.$refs.popupScroll,
                o = this.$refs.popupScrollInner;
              0 === p.scrollTop &&
                t.touches[0].pageY > this.popup.startY &&
                t.cancelable &&
                t.preventDefault(),
                p.offsetHeight + p.scrollTop + 2 * window.devicePixelRatio >=
                  o.scrollHeight &&
                  t.touches[0].pageY < this.popup.startY &&
                  t.cancelable &&
                  t.preventDefault();
            }
          },
          changeTab: function (t, p, o) {
            (this.popup.show = !1),
              this.$emit("changeTab", t, p, o),
              e.StockBridge.ENV !== e.EnvTypeEnum.MP &&
                document.body.removeChild(this.$el);
          },
        },
      },
      o = e._export_sfc(p, [
        [
          "render",
          function (t, p, o, n, i, u) {
            return e.e(
              { a: i.popup.flip, b: i.isMP },
              i.isMP
                ? {
                    c: e.f(o.data, function (t, p, n) {
                      return {
                        a: e.t(t.name),
                        b: t.id,
                        c: e.n(o.curTabIndex === t.id ? "item-selected" : ""),
                        d: e.o(
                          function (e) {
                            return (
                              i.popup.canClick &&
                              u.changeTab(t.id, t.name, t.type)
                            );
                          },
                          2449,
                          t.id
                        ),
                        e: p !== o.data.length - 1,
                        f: t.id + "line",
                        g: t.id,
                      };
                    }),
                    d: e.n(i.isLite ? "lite" : "pro"),
                    e: e.n(i.popup.flip ? "flip" : ""),
                    f: e.o(function () {
                      return (
                        u.popupTouchStart &&
                        u.popupTouchStart.apply(u, arguments)
                      );
                    }, 2450),
                    g: e.o(function () {
                      return (
                        u.popupTouchMove && u.popupTouchMove.apply(u, arguments)
                      );
                    }, 2451),
                  }
                : {
                    h: e.f(o.data, function (t, p, n) {
                      return {
                        a: e.t(t.name),
                        b: t.id,
                        c: e.n(o.curTabIndex === t.id ? "item-selected" : ""),
                        d: e.o(
                          function (e) {
                            return (
                              i.popup.canClick &&
                              u.changeTab(t.id, t.name, t.type)
                            );
                          },
                          2452,
                          t.id
                        ),
                        e: p !== o.data.length - 1,
                        f: t.id + "line",
                        g: t.id,
                      };
                    }),
                    i: e.n(i.isLite ? "lite" : "pro"),
                    j: e.n(i.popup.flip ? "flip" : ""),
                    k: e.o(function () {
                      return (
                        u.popupTouchStart &&
                        u.popupTouchStart.apply(u, arguments)
                      );
                    }, 2453),
                    l: e.o(function () {
                      return (
                        u.popupTouchMove && u.popupTouchMove.apply(u, arguments)
                      );
                    }, 2454),
                  },
              {
                m: !i.popup.flip,
                n: i.popup.top + "px",
                o: i.popup.left + "px",
                p: e.o(function () {}, 2455),
                q: i.popup.show,
                r: e.n("dark" === o.skin ? "skin-dark" : ""),
                s: e.n(i.isLite ? "lite" : "pro"),
                t: i.popup.ready ? 1 : 0,
                v: e.o(function () {}, 2456),
                w: e.o(function (t) {
                  return (i.popup.show = !1);
                }, 2457),
                x: e.n(o.skin),
                y: e.n(i.isLite ? "lite" : "pro"),
              }
            );
          },
        ],
        ["__scopeId", "data-v-ccadeeaa"],
      ]);
    wx.createComponent(o);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/detailSbg/@tencent/stock-markets-base/components/SelectPlate.js",
  }
);
require("pages/detailSbg/@tencent/stock-markets-base/components/SelectPlate.js");
