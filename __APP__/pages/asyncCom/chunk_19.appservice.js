$gwx1_XC_11 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx1_XC_11 || [];
    function gz$gwx1_XC_11_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx1_XC_11_1)
        return __WXML_GLOBAL__.ops_cached.$gwx1_XC_11_1;
      __WXML_GLOBAL__.ops_cached.$gwx1_XC_11_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
      })(__WXML_GLOBAL__.ops_cached.$gwx1_XC_11_1);
      return __WXML_GLOBAL__.ops_cached.$gwx1_XC_11_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx1_XC_11 = z;
    __WXML_GLOBAL__.ops_init.$gwx1_XC_11 = true;
    var x = [
      "./pages/asyncCom/@tencent/stock-mini-mins/component/StockItemChart.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx1_XC_11_1();
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx1_XC_11";
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
if (__vd_version_info__.delayedGwx || false) $gwx1_XC_11();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/asyncCom/@tencent/stock-mini-mins/component/StockItemChart.wxml"
  ] = [
    $gwx1_XC_11,
    "./pages/asyncCom/@tencent/stock-mini-mins/component/StockItemChart.wxml",
  ];
else
  __wxAppCode__[
    "pages/asyncCom/@tencent/stock-mini-mins/component/StockItemChart.wxml"
  ] = $gwx1_XC_11(
    "./pages/asyncCom/@tencent/stock-mini-mins/component/StockItemChart.wxml"
  );
__wxRoute = "pages/asyncCom/@tencent/stock-mini-mins/component/StockItemChart";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/asyncCom/@tencent/stock-mini-mins/component/StockItemChart.js";
define(
  "pages/asyncCom/@tencent/stock-mini-mins/component/StockItemChart.js",
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
      r = require("../api/StockMiniChartApi.js"),
      n = require("../chartImage/chartImageUtil.js"),
      a = require("../../../../../common/vendor.js"),
      i = {},
      o = {
        props: [
          "tabId",
          "chooseSymbol",
          "cellStyle",
          "riseDropVal",
          "fillChart",
          "miniSize",
          "store",
          "sectionIndex",
          "itemIndex",
        ],
        setup: function (o) {
          var u = this,
            c = a.ref(""),
            l = a.ref(!1),
            s = a.ref([]),
            h = n.chartImageUtil(o.miniSize),
            f = null,
            d = a.computed(function () {
              var e;
              if (o.cellStyle) return o.cellStyle;
              if (!o.store) return "";
              var t = o.store.renderListSections;
              if (t && (null == (e = t[o.tabId]) ? void 0 : e.length) > 0) {
                var r = t[o.tabId][o.sectionIndex];
                if (r && r.length > o.itemIndex) {
                  var n = r[o.itemIndex];
                  if (n && n.riseDropStyle) return n.riseDropStyle;
                }
              }
              return "";
            });
          a.watch(
            function () {
              return d.value;
            },
            function (e, t) {
              e !== t && m(!0);
            }
          ),
            a.onMounted(function () {
              f = setTimeout(function () {
                r.BUS.$on(
                  "stock_chart_render_"
                    .concat(o.chooseSymbol.replace(".", "_"), "_")
                    .concat(o.tabId),
                  function () {
                    m();
                  }
                );
              }, 0);
            }),
            a.onBeforeUnmount(function () {
              f && clearTimeout(f),
                r.BUS.$off(
                  "stock_chart_render_"
                    .concat(o.chooseSymbol.replace(".", "_"), "_")
                    .concat(o.tabId)
                );
            });
          var m = function n() {
              var a,
                f,
                d,
                m =
                  arguments.length > 0 &&
                  void 0 !== arguments[0] &&
                  arguments[0];
              return (
                (a = u),
                (f = null),
                (d = e().mark(function () {
                  var a, u, f, d, v, S, g;
                  return e().wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (p()) {
                            e.next = 2;
                            break;
                          }
                          return e.abrupt("return");
                        case 2:
                          return (
                            (e.next = 4),
                            r.StockMiniChartApi.getOrRequestMiniMinsData(
                              o.chooseSymbol,
                              o.tabId
                            )
                          );
                        case 4:
                          if (
                            ((f = e.sent),
                            !(null == (a = null == f ? void 0 : f.data)
                              ? void 0
                              : a.priceList) ||
                              !(null == (u = null == f ? void 0 : f.data)
                                ? void 0
                                : u.preClose))
                          ) {
                            e.next = 14;
                            break;
                          }
                          if (
                            ((d = t(f.data.priceList)),
                            (v = f.data.preClose),
                            (S = h.calculateMaxMin(d, v)),
                            m ||
                              !l.value ||
                              d.length !== s.value.length ||
                              d[0] !== s.value[0] ||
                              d[d.length - 1] !== s.value[s.value.length - 1])
                          ) {
                            e.next = 9;
                            break;
                          }
                          return e.abrupt("return");
                        case 9:
                          return (
                            (s.value = d),
                            1 === d.length && d.push(s.value[0]),
                            (e.next = 12),
                            h.startDrawLineChart(
                              S,
                              b(),
                              o.fillChart,
                              o.miniSize
                            )
                          );
                        case 12:
                          (g = e.sent),
                            (l.value = !0),
                            (c.value = g),
                            S.autoRefresh &&
                              (i[o.chooseSymbol] &&
                                clearTimeout(i[o.chooseSymbol]),
                              (i[o.chooseSymbol] = setTimeout(function () {
                                n();
                              }, 3e5)));
                        case 14:
                        case "end":
                          return e.stop();
                      }
                  }, f);
                })),
                new Promise(function (e, t) {
                  var r = function (e) {
                      try {
                        i(d.next(e));
                      } catch (e) {
                        t(e);
                      }
                    },
                    n = function (e) {
                      try {
                        i(d.throw(e));
                      } catch (e) {
                        t(e);
                      }
                    },
                    i = function (t) {
                      return t.done
                        ? e(t.value)
                        : Promise.resolve(t.value).then(r, n);
                    };
                  i((d = d.apply(a, f)).next());
                })
              );
            },
            b = function () {
              if ("0.00%" === o.riseDropVal) return "#E63535";
              switch (d.value) {
                case "bg-rise":
                  return "#E63535";
                case "bg-drop":
                  return "#1CAA3C";
                default:
                  return "#7a8499";
              }
            },
            p = function () {
              if (o.chooseSymbol) {
                var e = o.chooseSymbol.slice(0, 2);
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
          return {
            imageData: c,
            hasRenderedChart: l,
            handleDrawLineOffscreenChart: m,
          };
        },
      },
      u = a._export_sfc(o, [
        [
          "render",
          function (e, t, r, n, i, o) {
            return {
              a:
                n.imageData ||
                "https://st.gtimg.com/design/912bbaa924bdf06958a48bb0bcf35d0d.gif",
              b: a.n(n.hasRenderedChart ? "chart-height" : ""),
              c: a.n(r.miniSize ? "mini" : ""),
            };
          },
        ],
      ]);
    wx.createComponent(u);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/asyncCom/@tencent/stock-mini-mins/component/StockItemChart.js",
  }
);
require("pages/asyncCom/@tencent/stock-mini-mins/component/StockItemChart.js");
