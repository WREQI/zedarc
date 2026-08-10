$gwx3_XC_27 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx3_XC_27 || [];
    function gz$gwx3_XC_27_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx3_XC_27_1)
        return __WXML_GLOBAL__.ops_cached.$gwx3_XC_27_1;
      __WXML_GLOBAL__.ops_cached.$gwx3_XC_27_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
      })(__WXML_GLOBAL__.ops_cached.$gwx3_XC_27_1);
      return __WXML_GLOBAL__.ops_cached.$gwx3_XC_27_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx3_XC_27 = z;
    __WXML_GLOBAL__.ops_init.$gwx3_XC_27 = true;
    var x = [
      "./pages/detailSbg/@tencent/wzq-detail-finance/components/SelectPlate.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx3_XC_27_1();
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx3_XC_27";
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
if (__vd_version_info__.delayedGwx || false) $gwx3_XC_27();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/detailSbg/@tencent/wzq-detail-finance/components/SelectPlate.wxml"
  ] = [
    $gwx3_XC_27,
    "./pages/detailSbg/@tencent/wzq-detail-finance/components/SelectPlate.wxml",
  ];
else
  __wxAppCode__[
    "pages/detailSbg/@tencent/wzq-detail-finance/components/SelectPlate.wxml"
  ] = $gwx3_XC_27(
    "./pages/detailSbg/@tencent/wzq-detail-finance/components/SelectPlate.wxml"
  );
__wxRoute =
  "pages/detailSbg/@tencent/wzq-detail-finance/components/SelectPlate";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/detailSbg/@tencent/wzq-detail-finance/components/SelectPlate.js";
define(
  "pages/detailSbg/@tencent/wzq-detail-finance/components/SelectPlate.js",
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
        props: ["data", "curTabIndex", "skin", "tabType"],
        data: function () {
          return {
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
        computed: {
          isLite: function () {
            return ["mpwzq", "wzqlight"].includes("mpweapp");
          },
          isDark: function () {
            return "dark" === this.skin || "black" === this.skin;
          },
          arrowImage: function () {
            return "https://st.gtimg.com/image/kline/arrow".concat(
              this.isDark ? "-dark" : "",
              ".png"
            );
          },
        },
        methods: {
          getRectForMP: function (t, p) {
            return new Promise(function (n) {
              e.wx$1
                .createSelectorQuery()
                .in(t)
                .select(p)
                .boundingClientRect(function (t) {
                  n(t);
                })
                .exec();
            });
          },
          onPopupMore: function () {
            var e = this;
            (this.popup.optionMaxHeight = ""),
              (this.popup.show = !0),
              (this.popup.ready = !1);
            var p = this.data.length;
            this.$nextTick(function () {
              return (
                (n = e),
                null,
                (i = t().mark(function () {
                  var e, n, i, o, r, a, u, s, c, h, l, f, d;
                  return t().wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (
                              (t.next = 2),
                              this.getRectForMP(
                                this.$parent,
                                "#".concat(this.tabType, "Selectbtn")
                              )
                            );
                          case 2:
                            return (
                              (n = t.sent),
                              (i = n.top),
                              (o = n.bottom),
                              (r = n.left),
                              (a = n.width),
                              (t.next = 9),
                              this.getRectForMP(this, "#popup")
                            );
                          case 9:
                            (u = t.sent),
                              (s = u.width),
                              (c =
                                (null == (e = getApp().globalData)
                                  ? void 0
                                  : e.systemInfo) || {}),
                              (h = c.windowHeight),
                              (l = c.statusBarHeight),
                              (f = c.pixelRatio),
                              i - l - (d = 38 * f) > h - o - 40 * f
                                ? ((this.popup.flip = !1),
                                  (this.popup.height = Math.min(
                                    i - l - d - 3 * f,
                                    50 * p
                                  )),
                                  (this.popup.top = Math.max(
                                    i - this.popup.height - 3 * f,
                                    5 * f
                                  )),
                                  (this.popup.left = r + a - s),
                                  (this.popup.optionMaxHeight =
                                    i - 5 * f + "px"))
                                : ((this.popup.flip = !0),
                                  (this.popup.top = o + 3 * f),
                                  (this.popup.left = r + a - s),
                                  (this.popup.height = Math.min(
                                    h - o - 40 * f,
                                    50 * p
                                  ))),
                              (this.popup.ready = !0);
                          case 17:
                          case "end":
                            return t.stop();
                        }
                    },
                    o,
                    this
                  );
                })),
                new Promise(function (t, e) {
                  var p = function (t) {
                      try {
                        r(i.next(t));
                      } catch (t) {
                        e(t);
                      }
                    },
                    o = function (t) {
                      try {
                        r(i.throw(t));
                      } catch (t) {
                        e(t);
                      }
                    },
                    r = function (e) {
                      return e.done
                        ? t(e.value)
                        : Promise.resolve(e.value).then(p, o);
                    };
                  r((i = i.apply(n, null)).next());
                })
              );
              var n, i;
            });
          },
          changeTab: function (t, e, p) {
            (this.popup.show = !1), this.$emit("changeTab", t, e, p);
          },
        },
      },
      n = e._export_sfc(p, [
        [
          "render",
          function (t, p, n, i, o, r) {
            return {
              a: o.popup.flip,
              b: r.arrowImage,
              c: e.f(n.data, function (t, p, i) {
                return {
                  a: e.t(t.name),
                  b: t.id,
                  c: n.curTabIndex === t.id ? 1 : "",
                  d: e.o(
                    function (e) {
                      return (
                        o.popup.canClick && r.changeTab(t.id, t.name, t.type)
                      );
                    },
                    2237,
                    t.id
                  ),
                  e: p !== n.data.length - 1,
                  f: t.id + "line",
                  g: t.id,
                };
              }),
              d: e.n(o.popup.flip ? "flip" : ""),
              e: o.popup.height + "px",
              f: e.o(function () {}, 2238),
              g: !o.popup.flip,
              h: r.arrowImage,
              i: o.popup.top + "px",
              j: o.popup.left + "px",
              k: e.o(function () {}, 2239),
              l: o.popup.show,
              m: r.isDark ? 1 : "",
              n: r.isLite ? 1 : "",
              o: o.popup.ready ? 1 : 0,
              p: e.o(function () {}, 2240),
              q: e.o(function (t) {
                return (o.popup.show = !1);
              }, 2241),
            };
          },
        ],
        ["__scopeId", "data-v-ac7f28e9"],
      ]);
    wx.createComponent(n);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/detailSbg/@tencent/wzq-detail-finance/components/SelectPlate.js",
  }
);
require("pages/detailSbg/@tencent/wzq-detail-finance/components/SelectPlate.js");
