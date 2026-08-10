$gwx3_XC_11 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx3_XC_11 || [];
    function gz$gwx3_XC_11_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx3_XC_11_1)
        return __WXML_GLOBAL__.ops_cached.$gwx3_XC_11_1;
      __WXML_GLOBAL__.ops_cached.$gwx3_XC_11_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
      })(__WXML_GLOBAL__.ops_cached.$gwx3_XC_11_1);
      return __WXML_GLOBAL__.ops_cached.$gwx3_XC_11_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx3_XC_11 = z;
    __WXML_GLOBAL__.ops_init.$gwx3_XC_11 = true;
    var x = [
      "./pages/detailSbg/@tencent/stock-markets-base/components/RangeSlider.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx3_XC_11_1();
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx3_XC_11";
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
if (__vd_version_info__.delayedGwx || false) $gwx3_XC_11();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/detailSbg/@tencent/stock-markets-base/components/RangeSlider.wxml"
  ] = [
    $gwx3_XC_11,
    "./pages/detailSbg/@tencent/stock-markets-base/components/RangeSlider.wxml",
  ];
else
  __wxAppCode__[
    "pages/detailSbg/@tencent/stock-markets-base/components/RangeSlider.wxml"
  ] = $gwx3_XC_11(
    "./pages/detailSbg/@tencent/stock-markets-base/components/RangeSlider.wxml"
  );
__wxRoute =
  "pages/detailSbg/@tencent/stock-markets-base/components/RangeSlider";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/detailSbg/@tencent/stock-markets-base/components/RangeSlider.js";
define(
  "pages/detailSbg/@tencent/stock-markets-base/components/RangeSlider.js",
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
      n = {
        inject: ["hqBridge"],
        data: function () {
          return { startX: 10, endX: 200 };
        },
        computed: {
          barWidth: function () {
            return Math.abs(this.endX - this.startX);
          },
          isClassic: function () {
            return ["mpweapp", "stock"].includes("mpweapp");
          },
        },
        mounted: function () {
          var e = this;
          if ("mp" === this.hqBridge.ENV) {
            var n = getApp().globalData;
            (this.marginLeft = n.rpxToPx(72)),
              (this.contentWidth = n.rpxToPx(606)),
              (this.blockWidth = n.rpxToPx(40));
          }
          (this.debounceTouchChange = (function (t, e) {
            var n,
              i = {},
              o = i.noTrailing,
              r = void 0 !== o && o,
              a = i.noLeading,
              h = void 0 !== a && a,
              c = i.debounceMode,
              s = void 0 === c ? void 0 : c,
              u = !1,
              d = 0;
            function l() {
              n && clearTimeout(n);
            }
            function f() {
              for (
                var i = arguments.length, o = new Array(i), a = 0;
                a < i;
                a++
              )
                o[a] = arguments[a];
              var c = this,
                f = Date.now() - d;
              function p() {
                (d = Date.now()), e.apply(c, o);
              }
              function g() {
                n = void 0;
              }
              u ||
                (h || !s || n || p(),
                l(),
                void 0 === s && f > t
                  ? h
                    ? ((d = Date.now()), r || (n = setTimeout(s ? g : p, t)))
                    : p()
                  : !0 !== r &&
                    (n = setTimeout(s ? g : p, void 0 === s ? t - f : t)));
            }
            return (
              (f.cancel = function (t) {
                var e = (t || {}).upcomingOnly,
                  n = void 0 !== e && e;
                l(), (u = !n);
              }),
              f
            );
          })(200, this.touchChange)),
            this.$nextTick(function () {
              return (
                (n = e),
                null,
                (i = t().mark(function e() {
                  var n, i, o, r;
                  return t().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            if ("mp" !== this.hqBridge.ENV) {
                              t.next = 11;
                              break;
                            }
                            return (
                              (t.next = 3),
                              this.getRectForMP(".range-slider-content")
                            );
                          case 3:
                            return (
                              (n = t.sent),
                              (this.marginLeft = n.left),
                              (this.contentWidth = n.width),
                              (t.next = 7),
                              this.getRectForMP(".range-slider-block")
                            );
                          case 7:
                            (i = t.sent),
                              (this.blockWidth = i.width),
                              this.$emit("init"),
                              (t.next = 15);
                            break;
                          case 11:
                            (o =
                              this.$refs.sliderContent.getBoundingClientRect()),
                              (this.marginLeft = o.left),
                              (this.contentWidth = o.width),
                              (r =
                                this.$refs.sliderBlock.getBoundingClientRect()),
                              (this.blockWidth = r.width),
                              this.$emit("init");
                          case 15:
                          case "end":
                            return t.stop();
                        }
                    },
                    e,
                    this
                  );
                })),
                new Promise(function (t, e) {
                  var o = function (t) {
                      try {
                        a(i.next(t));
                      } catch (t) {
                        e(t);
                      }
                    },
                    r = function (t) {
                      try {
                        a(i.throw(t));
                      } catch (t) {
                        e(t);
                      }
                    },
                    a = function (e) {
                      return e.done
                        ? t(e.value)
                        : Promise.resolve(e.value).then(o, r);
                    };
                  a((i = i.apply(n, null)).next());
                })
              );
              var n, i;
            });
        },
        methods: {
          getRectForMP: function (t) {
            var n = this;
            return new Promise(function (i) {
              e.wx$1
                .createSelectorQuery()
                .in(n)
                .select(t)
                .boundingClientRect(function (t) {
                  i(t);
                })
                .exec();
            });
          },
          setDefaultRange: function (t) {
            var e = t.start,
              n = t.end;
            if (!isNaN(e) && !isNaN(n)) {
              var i = this.contentWidth - this.blockWidth;
              i &&
                ((this.startX = parseFloat(e) * i),
                (this.endX = parseFloat(n) * i));
            }
          },
          touchStartMove: function (t) {
            var e = t.changedTouches[0].pageX,
              n = Math.max(0, e - this.marginLeft);
            (this.startX = Math.min(n, this.endX - this.blockWidth)),
              this.debounceTouchChange();
          },
          touchEndMove: function (t) {
            var e = t.changedTouches[0].pageX,
              n = Math.max(
                Math.max(0, e - this.marginLeft),
                this.startX + this.blockWidth
              );
            (this.endX = Math.min(n, this.contentWidth - this.blockWidth)),
              this.debounceTouchChange();
          },
          touchChange: function () {
            var t = this.contentWidth - this.blockWidth,
              e = {
                start: +(this.startX / t).toFixed(2),
                end: +(this.endX / t).toFixed(2),
              };
            this.$emit("rangeChange", e);
          },
        },
      },
      i = e._export_sfc(n, [
        [
          "render",
          function (t, n, i, o, r, a) {
            return {
              a: e.o(function () {}, 2404),
              b: e.o(function () {
                return a.touchStartMove && a.touchStartMove.apply(a, arguments);
              }, 2405),
              c: r.startX + "px",
              d: a.isClassic ? 1 : "",
              e: r.startX + "px",
              f: a.barWidth + "px",
              g: e.o(function () {}, 2406),
              h: e.o(function () {
                return a.touchEndMove && a.touchEndMove.apply(a, arguments);
              }, 2407),
              i: r.endX + "px",
              j: e.o(function () {}, 2408),
            };
          },
        ],
        ["__scopeId", "data-v-420d60e2"],
      ]);
    wx.createComponent(i);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/detailSbg/@tencent/stock-markets-base/components/RangeSlider.js",
  }
);
require("pages/detailSbg/@tencent/stock-markets-base/components/RangeSlider.js");
