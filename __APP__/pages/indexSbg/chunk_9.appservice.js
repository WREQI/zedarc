$gwx50_XC_10 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx50_XC_10 || [];
    function gz$gwx50_XC_10_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx50_XC_10_1)
        return __WXML_GLOBAL__.ops_cached.$gwx50_XC_10_1;
      __WXML_GLOBAL__.ops_cached.$gwx50_XC_10_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([
          [4],
          [
            [5],
            [
              [5],
              [[5], [[5], [1, "_div"]], [1, "hold-list-container"]],
              [1, "data-v-1dc1fd80"],
            ],
            [[7], [3, "l"]],
          ],
        ]);
        Z([[7], [3, "b"]]);
        Z([3, "__l"]);
        Z([[7], [3, "a"]]);
        Z([3, "data-v-1dc1fd80"]);
        Z([3, "1dc1fd80-0"]);
        Z(z[1]);
        Z([[7], [3, "i"]]);
        Z([[7], [3, "k"]]);
        Z([[7], [3, "j"]]);
        Z([3, "stock-scroll-list data-v-1dc1fd80"]);
        Z([[7], [3, "g"]]);
        Z([[7], [3, "f"]]);
        Z([3, "100"]);
        Z([[7], [3, "h"]]);
        Z([[7], [3, "e"]]);
        Z([3, "stock"]);
        Z([[7], [3, "c"]]);
        Z([3, "p"]);
        Z([[6], [[7], [3, "stock"]], [3, "o"]]);
        Z([3, "_div stock-item portfolio-stock-item data-v-1dc1fd80"]);
        Z([3, "_div item-wrap data-v-1dc1fd80"]);
        Z([3, "press"]);
        Z([3, "_span stock-info-scode text-gray data-v-1dc1fd80"]);
        Z([[6], [[7], [3, "stock"]], [3, "d"]]);
        Z(z[2]);
        Z(z[4]);
        Z([[6], [[7], [3, "stock"]], [3, "c"]]);
        Z(z[24]);
        Z([[6], [[7], [3, "stock"]], [3, "f"]]);
        Z([[6], [[7], [3, "stock"]], [3, "g"]]);
        Z([[6], [[7], [3, "stock"]], [3, "h"]]);
        Z(z[2]);
        Z([3, "item-chart-wrapper column data-v-1dc1fd80"]);
        Z([[6], [[7], [3, "stock"]], [3, "i"]]);
        Z([[6], [[7], [3, "stock"]], [3, "j"]]);
        Z([[7], [3, "d"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx50_XC_10_1);
      return __WXML_GLOBAL__.ops_cached.$gwx50_XC_10_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx50_XC_10 = z;
    __WXML_GLOBAL__.ops_init.$gwx50_XC_10 = true;
    var x = [
      "./pages/indexSbg/@tencent/wzq-union-portfolio/components/PositionList.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx50_XC_10_1();
      var o4I = _n("view");
      _rz(z, o4I, "class", 0, e, s, gg);
      var l5I = _v();
      _(o4I, l5I);
      if (_oz(z, 1, e, s, gg)) {
        l5I.wxVkey = 1;
        var a6I = _mz(
          z,
          "caption-bar",
          ["bind:__l", 2, "bindsort", 1, "class", 2, "uI", 3, "uP", 4],
          [],
          e,
          s,
          gg
        );
        _(l5I, a6I);
      }
      var t7I = _mz(
        z,
        "scroll-view",
        [
          "scrollY",
          -1,
          "bindrefresherpulling",
          7,
          "bindrefresherrefresh",
          1,
          "bindrefresherrestore",
          2,
          "class",
          3,
          "refresherDefaultStyle",
          4,
          "refresherEnabled",
          5,
          "refresherThreshold",
          6,
          "refresherTriggered",
          7,
          "style",
          8,
        ],
        [],
        e,
        s,
        gg
      );
      var b9I = _v();
      _(t7I, b9I);
      var o0I = function (oBJ, xAJ, fCJ, gg) {
        var hEJ = _mz(z, "view", ["bindtap", 19, "class", 1], [], oBJ, xAJ, gg);
        var oFJ = _mz(
          z,
          "view",
          ["class", 21, "hoverClass", 1],
          [],
          oBJ,
          xAJ,
          gg
        );
        var oHJ = _n("label");
        _rz(z, oHJ, "class", 23, oBJ, xAJ, gg);
        var lIJ = _v();
        _(oHJ, lIJ);
        if (_oz(z, 24, oBJ, xAJ, gg)) {
          lIJ.wxVkey = 1;
          var tKJ = _mz(
            z,
            "market-icon-sprite",
            ["bind:__l", 25, "class", 1, "uI", 2, "uP", 3],
            [],
            oBJ,
            xAJ,
            gg
          );
          _(lIJ, tKJ);
        }
        var aJJ = _v();
        _(oHJ, aJJ);
        if (_oz(z, 29, oBJ, xAJ, gg)) {
          aJJ.wxVkey = 1;
        }
        lIJ.wxXCkey = 1;
        lIJ.wxXCkey = 3;
        aJJ.wxXCkey = 1;
        _(oFJ, oHJ);
        var cGJ = _v();
        _(oFJ, cGJ);
        if (_oz(z, 30, oBJ, xAJ, gg)) {
          cGJ.wxVkey = 1;
          var eLJ = _v();
          _(cGJ, eLJ);
          if (_oz(z, 31, oBJ, xAJ, gg)) {
            eLJ.wxVkey = 1;
            var bMJ = _mz(
              z,
              "stock-item-chart",
              ["bind:__l", 32, "class", 1, "uI", 2, "uP", 3],
              [],
              oBJ,
              xAJ,
              gg
            );
            _(eLJ, bMJ);
          }
          eLJ.wxXCkey = 1;
          eLJ.wxXCkey = 3;
        } else {
          cGJ.wxVkey = 2;
        }
        cGJ.wxXCkey = 1;
        cGJ.wxXCkey = 3;
        _(hEJ, oFJ);
        _(fCJ, hEJ);
        return fCJ;
      };
      b9I.wxXCkey = 4;
      _2z(z, 17, o0I, e, s, gg, b9I, "stock", "index", "p");
      var e8I = _v();
      _(t7I, e8I);
      if (_oz(z, 36, e, s, gg)) {
        e8I.wxVkey = 1;
      }
      e8I.wxXCkey = 1;
      _(o4I, t7I);
      l5I.wxXCkey = 1;
      l5I.wxXCkey = 3;
      _(r, o4I);
      return r;
    };
    e_[x[0]] = { f: m0, j: [], i: [], ti: [], ic: [] };
    if (path && e_[path]) {
      return function (env, dd, global) {
        $gwxc = 0;
        var root = { tag: "wx-page" };
        root.children = [];
        g = "$gwx50_XC_10";
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
if (__vd_version_info__.delayedGwx || false) $gwx50_XC_10();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/indexSbg/@tencent/wzq-union-portfolio/components/PositionList.wxml"
  ] = [
    $gwx50_XC_10,
    "./pages/indexSbg/@tencent/wzq-union-portfolio/components/PositionList.wxml",
  ];
else
  __wxAppCode__[
    "pages/indexSbg/@tencent/wzq-union-portfolio/components/PositionList.wxml"
  ] = $gwx50_XC_10(
    "./pages/indexSbg/@tencent/wzq-union-portfolio/components/PositionList.wxml"
  );
__wxRoute =
  "pages/indexSbg/@tencent/wzq-union-portfolio/components/PositionList";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/indexSbg/@tencent/wzq-union-portfolio/components/PositionList.js";
define(
  "pages/indexSbg/@tencent/wzq-union-portfolio/components/PositionList.js",
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
    var e = function (t, e, n) {
        return new Promise(function (r, o) {
          var i = function (t) {
              try {
                c(n.next(t));
              } catch (t) {
                o(t);
              }
            },
            s = function (t) {
              try {
                c(n.throw(t));
              } catch (t) {
                o(t);
              }
            },
            c = function (t) {
              return t.done ? r(t.value) : Promise.resolve(t.value).then(i, s);
            };
          c((n = n.apply(t, e)).next());
        });
      },
      n = require("../../../../../common/vendor.js"),
      r = require("../store/useStocksStore.js"),
      o = require("../../stock-mini-mins/api/StockMiniChartApiV2.js"),
      i = "position",
      s = {
        sharedComponents: !0,
        behaviors: ["wx://component-export"],
        export: function () {
          return {};
        },
        components: {
          MarketIconSprite: function () {
            return "../../../../detailSbg/@tencent/stock-markets-base/components/MarketIconSprite.js";
          },
          CaptionBar: function () {
            return "./CaptionBar/CaptionBar.js";
          },
          StockItemChart: function () {
            return "../../../../asyncCom/@tencent/stock-mini-mins/component/StockItemChartV2.js";
          },
        },
        props: {
          stockList: {
            type: Array,
            default: function () {
              return [];
            },
          },
          tab: {
            type: Object,
            default: function () {
              return {};
            },
          },
          containerHeight: { type: String, default: "100%" },
          isCurrent: { type: Boolean, default: !1 },
          fullUrl: { type: String, default: "" },
          skin: { type: String, default: "white" },
          isMiniChartHide: { type: Boolean, default: void 0 },
          isLite: { type: Boolean, default: !1 },
        },
        emits: ["refresh"],
        setup: function (s, c) {
          var a = this,
            u = c.emit,
            l = n.computed(function () {
              return !0;
            }),
            p = n.computed(function () {
              return s.isLite;
            }),
            f =
              void 0 !== n.wx$1 &&
              "function" == typeof n.wx$1.request &&
              "function" == typeof n.wx$1.getSystemInfoSync,
            d = !1,
            m = !1,
            h = n.ref(!1),
            k = n.ref(!f);
          f &&
            setTimeout(function () {
              return (k.value = !0);
            }, 100);
          var S = n.computed(function () {
              return "width: 100%; height: ".concat(s.containerHeight);
            }),
            y = n.computed(function () {
              return r.formatDataFromPosition(s.stockList || []);
            }),
            v = r.useStocksStore(),
            g = n.computed(function () {
              return (
                p.value || (void 0 !== v.isMiniChartHide && !v.isMiniChartHide)
              );
            }),
            w = o.useViewStore(),
            C = n.computed(function () {
              return w.stockItemHeight || 98.4;
            }),
            b = n.computed(function () {
              var t;
              return (
                !!(
                  f &&
                  (null == (t = s.containerHeight)
                    ? void 0
                    : t.includes("px")) &&
                  s.stockList.length
                ) &&
                (s.stockList.length + 1) * C.value >=
                  parseFloat(s.containerHeight)
              );
            });
          n.watch(
            function () {
              return s.stockList;
            },
            function (n) {
              return e(
                a,
                null,
                t().mark(function e() {
                  return t().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          s.stockList.length && P(n);
                        case 1:
                        case "end":
                          return t.stop();
                      }
                  }, e);
                })
              );
            },
            { deep: !0 }
          ),
            n.watch(
              function () {
                return s.isCurrent;
              },
              function (t) {
                t &&
                  s.stockList.length &&
                  n.nextTick$1(function () {
                    P(s.stockList);
                  });
              }
            ),
            n.onMounted(function () {
              P(s.stockList);
            });
          var P = function (n) {
              return e(
                a,
                null,
                t().mark(function e() {
                  return t().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (((t.t0 = l.value && v.isMiniChartHide), t.t0)) {
                            t.next = 7;
                            break;
                          }
                          if (((t.t1 = n && n.length > 0), !t.t1)) {
                            t.next = 7;
                            break;
                          }
                          return (
                            (t.next = 6),
                            o.StockMiniChartApi.batchGetMiniMins(
                              n,
                              i,
                              s.fullUrl
                            )
                          );
                        case 6:
                          o.StockMiniChartApi.drawStocksMins(n, i);
                        case 7:
                        case "end":
                          return t.stop();
                      }
                  }, e);
                })
              );
            },
            M = function () {
              return e(
                a,
                null,
                t().mark(function e() {
                  return t().wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          u("refresh"), P(s.stockList);
                        case 1:
                        case "end":
                          return t.stop();
                      }
                  }, e);
                })
              );
            };
          return {
            isMPPro: l,
            list: y,
            mpTriggered: h,
            enabled: k,
            mpScrollStyle: S,
            isMiniChartShow: g,
            showMpPlaceHolder: b,
            mpStartPull: function () {
              (h.value = !0),
                f &&
                  !0 === d &&
                  ((d = !1),
                  n.StockBridge && n.StockBridge.busEmit("switchBigTitle", !1));
            },
            mpPullEnd: function () {
              h.value && (h.value = !1);
            },
            onPullRefresh: function () {
              if (!m) {
                M(), (m = !0);
                var t = setTimeout(function () {
                  (h.value = !1), (m = !1), clearTimeout(t);
                }, 600);
              }
            },
            onListSort: function (t) {
              var e = t || {},
                n = e.orderBy,
                r = e.order;
              0 !== r
                ? (u("sort", {
                    sortKey: { rise_per: "zdf", price: "new_price" }[n] || n,
                    sortOrder: 1 === r ? 2 : 1,
                  }),
                  P(s.stockList))
                : u("sort", { sortOrder: 0 });
            },
            navigateStockDetail: function (t) {
              u("jumpStockDetail", t);
            },
          };
        },
      };
    Array ||
      (
        n.resolveComponent("caption-bar") +
        n.resolveComponent("market-icon-sprite") +
        n.resolveComponent("StockItemChart")
      )();
    var c = n._export_sfc(s, [
      [
        "render",
        function (t, e, r, o, i, s) {
          return n.e(
            {
              a: n.o(o.onListSort, 2688),
              b: n.p({
                groupId: "position",
                name: "股票(".concat(r.stockList.length, ")"),
              }),
              c: n.f(o.list, function (t, e, i) {
                return n.e(
                  {
                    a: n.t(t.name || "--"),
                    b: n.n(t.name && t.name.length > 14 ? "small" : ""),
                    c: "1dc1fd80-1-" + i,
                    d: n.p({
                      type: t.type,
                      scode: t.scode,
                      market: t.market,
                      "stock-type": t.stock_type || t.type,
                    }),
                    e: n.t(t.trimedCode),
                    f:
                      1 === t.delay &&
                      (t.HK_INDEX > 20 || void 0 === t.HK_INDEX),
                  },
                  (1 === t.delay && (t.HK_INDEX > 20 || t.HK_INDEX), {}),
                  { g: "1" === t.usable },
                  "1" === t.usable
                    ? n.e(
                        {
                          h:
                            o.isMiniChartShow &&
                            "退市" !== t.riseDropVal &&
                            "待上市" !== t.riseDropVal &&
                            "待发行" !== t.riseDropVal,
                        },
                        o.isMiniChartShow &&
                          "退市" !== t.riseDropVal &&
                          "待上市" !== t.riseDropVal &&
                          "待发行" !== t.riseDropVal
                          ? {
                              i: "1dc1fd80-2-" + i,
                              j: n.p({
                                "mini-size": !o.isMPPro,
                                "fill-chart": o.isMPPro,
                                "cell-style":
                                  t.riseDropChartStyle || t.riseDropStyle,
                                "choose-symbol": t.chooseSymbol,
                                "tab-id": "position",
                                "rise-drop-val": t.riseDropVal,
                                skin: r.skin,
                                "chart-size": o.isMPPro ? "medium" : "mini",
                              }),
                            }
                          : {},
                        {
                          k: n.t(t.priceVal || "--"),
                          l: n.t(t.riseDropVal || "--"),
                          m: n.n(t.riseDropStyle),
                          n: n.n(t.riseDropVal.length > 7 ? "small" : ""),
                        }
                      )
                    : {},
                  {
                    o: n.o(
                      function (e) {
                        return o.navigateStockDetail(t);
                      },
                      2689,
                      t.scode
                    ),
                    p: t.scode,
                  }
                );
              }),
              d: o.showMpPlaceHolder,
            },
            (o.showMpPlaceHolder, {}),
            {
              e: n.s(o.mpScrollStyle),
              f: o.enabled,
              g: "black" === r.skin ? "white" : "black",
              h: o.mpTriggered,
              i: n.o(function () {
                return o.mpStartPull && o.mpStartPull.apply(o, arguments);
              }, 2690),
              j: n.o(function () {
                return o.mpPullEnd && o.mpPullEnd.apply(o, arguments);
              }, 2691),
              k: n.o(function () {
                return o.onPullRefresh && o.onPullRefresh.apply(o, arguments);
              }, 2692),
              l: n.n({ "mp-pro": o.isMPPro }),
            }
          );
        },
      ],
      ["__scopeId", "data-v-1dc1fd80"],
    ]);
    wx.createComponent(c);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/indexSbg/@tencent/wzq-union-portfolio/components/PositionList.js",
  }
);
require("pages/indexSbg/@tencent/wzq-union-portfolio/components/PositionList.js");
