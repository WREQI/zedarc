$gwx1_XC_13 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx1_XC_13 || [];
    function gz$gwx1_XC_13_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx1_XC_13_1)
        return __WXML_GLOBAL__.ops_cached.$gwx1_XC_13_1;
      __WXML_GLOBAL__.ops_cached.$gwx1_XC_13_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "a"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx1_XC_13_1);
      return __WXML_GLOBAL__.ops_cached.$gwx1_XC_13_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx1_XC_13 = z;
    __WXML_GLOBAL__.ops_init.$gwx1_XC_13 = true;
    var x = [
      "./pages/asyncCom/@tencent/stock-mini-mins/component/StockItemChartV2.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx1_XC_13_1();
      var fAE = _v();
      _(r, fAE);
      if (_oz(z, 0, e, s, gg)) {
        fAE.wxVkey = 1;
      }
      fAE.wxXCkey = 1;
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx1_XC_13";
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
if (__vd_version_info__.delayedGwx || false) $gwx1_XC_13();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/asyncCom/@tencent/stock-mini-mins/component/StockItemChartV2.wxml"
  ] = [
    $gwx1_XC_13,
    "./pages/asyncCom/@tencent/stock-mini-mins/component/StockItemChartV2.wxml",
  ];
else
  __wxAppCode__[
    "pages/asyncCom/@tencent/stock-mini-mins/component/StockItemChartV2.wxml"
  ] = $gwx1_XC_13(
    "./pages/asyncCom/@tencent/stock-mini-mins/component/StockItemChartV2.wxml"
  );
__wxRoute =
  "pages/asyncCom/@tencent/stock-mini-mins/component/StockItemChartV2";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/asyncCom/@tencent/stock-mini-mins/component/StockItemChartV2.js";
define(
  "pages/asyncCom/@tencent/stock-mini-mins/component/StockItemChartV2.js",
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
    var e = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
      t = require("../../../../../@babel/runtime/helpers/toConsumableArray"),
      r = require("../chartImage/chartImageUtil.js"),
      n = require("../api/StockMiniChartApiV2.js"),
      a = require("../../../../../common/vendor.js"),
      i = {
        props: [
          "tabId",
          "chooseSymbol",
          "cellStyle",
          "riseDropVal",
          "fillChart",
          "miniSize",
          "sectionIndex",
          "itemIndex",
          "skin",
        ],
        setup: function (i) {
          var u = this,
            c = a.ref(!1),
            l = a.ref(""),
            o = a.ref(!1),
            s = a.ref([]),
            d = r.chartImageUtil(i.miniSize),
            h = n.useChartDataStore(),
            f = a.computed(function () {
              return h.renderMinsData && h.renderMinsData[i.tabId]
                ? h.renderMinsData[i.tabId][i.chooseSymbol]
                : null;
            }),
            m = a.computed(function () {
              return i.cellStyle || "";
            }),
            p = function () {
              var r,
                n,
                a,
                h =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0];
              return (
                (r = u),
                (n = null),
                (a = e().mark(function () {
                  var r, n, a, u, m, p, g;
                  return e().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (b()) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return");
                        case 2:
                          if (
                            ((a = f.value),
                            !(null == (r = null == a ? void 0 : a.data)
                              ? void 0
                              : r.priceList) ||
                              !(null == (n = null == a ? void 0 : a.data)
                                ? void 0
                                : n.preClose))
                          ) {
                            e.next = 14;
                            break;
                          }
                          if (
                            ((u = t(a.data.priceList)),
                            (m = a.data.preClose),
                            (p = d.calculateMaxMin(u, m)),
                            h ||
                              !o.value ||
                              u.length !== s.value.length ||
                              u[0] !== s.value[0] ||
                              u[u.length - 1] !== s.value[s.value.length - 1])
                          ) {
                            e.next = 7;
                            break;
                          }
                          return e.abrupt("return");
                        case 7:
                          return (
                            (s.value = u),
                            1 === u.length && u.push(s.value[0]),
                            (e.next = 10),
                            d.startDrawLineChart(
                              p,
                              v(),
                              i.fillChart,
                              i.miniSize
                            )
                          );
                        case 10:
                          (g = e.sent),
                            (o.value = !0),
                            (l.value = g),
                            (e.next = 15);
                          break;
                        case 14:
                          a &&
                            a.data &&
                            a.data.priceList &&
                            0 === a.data.priceList.length &&
                            (c.value = !0);
                        case 15:
                        case "end":
                          return e.stop();
                      }
                  }, a);
                })),
                new Promise(function (e, t) {
                  var i = function (e) {
                      try {
                        c(a.next(e));
                      } catch (e) {
                        t(e);
                      }
                    },
                    u = function (e) {
                      try {
                        c(a.throw(e));
                      } catch (e) {
                        t(e);
                      }
                    },
                    c = function (t) {
                      return t.done
                        ? e(t.value)
                        : Promise.resolve(t.value).then(i, u);
                    };
                  c((a = a.apply(r, n)).next());
                })
              );
            },
            v = function () {
              if ("0.00%" === i.riseDropVal) return "#E63535";
              switch (m.value) {
                case "bg-rise":
                  return "#E63535";
                case "bg-drop":
                  return "#1CAA3C";
                default:
                  return "#7a8499";
              }
            },
            b = function () {
              if (i.chooseSymbol) {
                var e = i.chooseSymbol.slice(0, 2);
                return [
                  "sh",
                  "sz",
                  "bj",
                  "hk",
                  "us",
                  "pt",
                  "uk",
                  "fu",
                  "ft",
                  "nq",
                  "hd",
                  "cs",
                  "sp",
                ].some(function (t) {
                  return t === e;
                });
              }
              return !1;
            };
          return (
            a.watch(
              function () {
                return f.value;
              },
              function (e, t) {
                e && p(!0);
              },
              { immediate: !0 }
            ),
            a.watch(
              function () {
                return m.value;
              },
              function (e, t) {
                e !== t && p(!0);
              }
            ),
            a.onMounted(function () {
              p(!0);
            }),
            {
              hideImg: c,
              imageData: l,
              hasRenderedChart: o,
              handleDrawLineOffscreenChart: p,
            }
          );
        },
      },
      u = a._export_sfc(i, [
        [
          "render",
          function (e, t, r, n, i, u) {
            return a.e(
              { a: !n.hideImg },
              n.hideImg
                ? {}
                : {
                    b:
                      n.imageData ||
                      ("black" === r.skin
                        ? "https://st.gtimg.com/design/2a3294d00f94823aa9f9dfd76f8a11df.gif"
                        : "https://st.gtimg.com/design/912bbaa924bdf06958a48bb0bcf35d0d.gif"),
                    c: a.n(n.hasRenderedChart ? "chart-height" : ""),
                    d: a.n(r.miniSize ? "mini" : ""),
                  }
            );
          },
        ],
      ]);
    wx.createComponent(u);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/asyncCom/@tencent/stock-mini-mins/component/StockItemChartV2.js",
  }
);
require("pages/asyncCom/@tencent/stock-mini-mins/component/StockItemChartV2.js");
