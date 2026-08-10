$gwx9_XC_4 = (function (
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
    var z = __WXML_GLOBAL__.ops_set.$gwx9_XC_4 || [];
    function gz$gwx9_XC_4_1() {
      if (__WXML_GLOBAL__.ops_cached.$gwx9_XC_4_1)
        return __WXML_GLOBAL__.ops_cached.$gwx9_XC_4_1;
      __WXML_GLOBAL__.ops_cached.$gwx9_XC_4_1 = [];
      (function (z) {
        var a = 11;
        function Z(ops) {
          z.push(ops);
        }
        Z([[7], [3, "a"]]);
        Z([[7], [3, "h"]]);
        Z([
          [4],
          [
            [5],
            [
              [5],
              [[5], [[5], [1, "_div"]], [1, "data-v-3647ec42"]],
              [1, "card-wrapper"],
            ],
            [[7], [3, "g"]],
          ],
        ]);
        Z([3, "_div content-wrapper data-v-3647ec42"]);
        Z([[7], [3, "b"]]);
        Z([[7], [3, "e"]]);
        Z([3, "__l"]);
        Z([3, "data-v-3647ec42"]);
        Z([3, "3647ec42-0"]);
        Z(z[5]);
        Z([[7], [3, "f"]]);
      })(__WXML_GLOBAL__.ops_cached.$gwx9_XC_4_1);
      return __WXML_GLOBAL__.ops_cached.$gwx9_XC_4_1;
    }
    __WXML_GLOBAL__.ops_set.$gwx9_XC_4 = z;
    __WXML_GLOBAL__.ops_init.$gwx9_XC_4 = true;
    var x = [
      "./pages/stock-widget/@tencent/stock-widget/cardKits/yjqsCard.wxml",
    ];
    d_[x[0]] = {};
    var m0 = function (e, s, r, gg) {
      var z = gz$gwx9_XC_4_1();
      var lQI = _v();
      _(r, lQI);
      if (_oz(z, 0, e, s, gg)) {
        lQI.wxVkey = 1;
        var aRI = _mz(z, "view", ["catchtap", 1, "class", 1], [], e, s, gg);
        var eTI = _n("view");
        _rz(z, eTI, "class", 3, e, s, gg);
        var bUI = _v();
        _(eTI, bUI);
        if (_oz(z, 4, e, s, gg)) {
          bUI.wxVkey = 1;
        }
        var oVI = _v();
        _(eTI, oVI);
        if (_oz(z, 5, e, s, gg)) {
          oVI.wxVkey = 1;
          var xWI = _mz(
            z,
            "performance-trends",
            ["bind:__l", 6, "class", 1, "uI", 2, "uP", 3],
            [],
            e,
            s,
            gg
          );
          _(oVI, xWI);
        }
        bUI.wxXCkey = 1;
        oVI.wxXCkey = 1;
        oVI.wxXCkey = 3;
        _(aRI, eTI);
        var tSI = _v();
        _(aRI, tSI);
        if (_oz(z, 10, e, s, gg)) {
          tSI.wxVkey = 1;
        }
        tSI.wxXCkey = 1;
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
        g = "$gwx9_XC_4";
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
if (__vd_version_info__.delayedGwx || false) $gwx9_XC_4();
if (__vd_version_info__.delayedGwx)
  __wxAppCode__[
    "pages/stock-widget/@tencent/stock-widget/cardKits/yjqsCard.wxml"
  ] = [
    $gwx9_XC_4,
    "./pages/stock-widget/@tencent/stock-widget/cardKits/yjqsCard.wxml",
  ];
else
  __wxAppCode__[
    "pages/stock-widget/@tencent/stock-widget/cardKits/yjqsCard.wxml"
  ] = $gwx9_XC_4(
    "./pages/stock-widget/@tencent/stock-widget/cardKits/yjqsCard.wxml"
  );
__wxRoute = "pages/stock-widget/@tencent/stock-widget/cardKits/yjqsCard";
__wxRouteBegin = true;
__wxAppCurrentFile__ =
  "pages/stock-widget/@tencent/stock-widget/cardKits/yjqsCard.js";
define(
  "pages/stock-widget/@tencent/stock-widget/cardKits/yjqsCard.js",
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
      r = require("../../../../../@babel/runtime/helpers/regeneratorRuntime"),
      t = require("../../../../../@babel/runtime/helpers/slicedToArray"),
      n = Object.defineProperty,
      a = Object.getOwnPropertySymbols,
      o = Object.prototype.hasOwnProperty,
      i = Object.prototype.propertyIsEnumerable,
      u = function (e, r, t) {
        return r in e
          ? n(e, r, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: t,
            })
          : (e[r] = t);
      },
      l = require("../../../../../common/vendor.js"),
      s = require("../api/cardKit.js"),
      c = require("../../stock-hq-data/index.js"),
      d = require("../util/route.js"),
      p = {
        options: { styleIsolation: "shared" },
        components: {
          PerformanceTrends: function () {
            return "../../../../detailSbg/@tencent/wzq-detail-finance/components/PerformanceTrends.js";
          },
        },
        props: {
          source: { type: String, required: !0 },
          symbol: { type: String, required: !0 },
          stockName: { type: String, default: "" },
          skin: { type: String, default: "white" },
          position: { type: [Number, String], default: 0 },
          contexObj: {
            type: Object,
            default: function () {
              return {};
            },
          },
        },
        setup: function (n) {
          var p = this,
            f = l.computed(function () {
              var e, r;
              return "searchAi" === n.source
                ? {
                    reportPrefix: "jichu.ai_search",
                    reportExtra: {
                      session: null == (e = n.contexObj) ? void 0 : e.sessionId,
                      requestid:
                        null == (r = n.contexObj) ? void 0 : r.requestId,
                    },
                  }
                : {};
            }),
            v = l.computed(function () {
              return c.utils.splitSymbol(n.symbol).market;
            }),
            y = l.computed(function () {
              return c.utils.splitSymbol(n.symbol).scode;
            }),
            b = l.computed(function () {
              return c.utils.isHSMarket(v.value);
            }),
            m = l.computed(function () {
              return c.utils.trimScode(y.value);
            }),
            h = l.computed(function () {
              return !d.isAPP || b.value;
            }),
            k = function () {
              var e =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {},
                r = e.latest,
                t = e.yysr,
                n = e.jlr,
                a = e.eps,
                o = {};
              r && (o.latest = r);
              var i = { yysr: t, jlr: n, eps: a };
              return (
                Object.keys(i).forEach(function (e) {
                  var r = (function () {
                    var e =
                        arguments.length > 0 && void 0 !== arguments[0]
                          ? arguments[0]
                          : {},
                      r = {};
                    return (
                      Object.keys(e || {}).forEach(function (t) {
                        var n = e[t];
                        if (Array.isArray(n)) {
                          var a = n.filter(function (e) {
                            return (
                              e && +e.value && !Number.isNaN(Number(e.value))
                            );
                          });
                          a.length && (r[t] = a);
                        }
                      }),
                      r
                    );
                  })(i[e]);
                  Object.keys(r).length && (o[e] = r);
                }),
                Object.keys(o).length ? o : null
              );
            },
            g = function (e) {
              if (
                0 != +(null == e ? void 0 : e.code) ||
                !(null == e ? void 0 : e.data)
              )
                return null;
              var r = e.data;
              return k({
                latest: r.latest,
                yysr: r.yysr,
                jlr: r.jlr,
                eps: r.eps,
              });
            },
            j = d.useHqCardKit({
              request: function () {
                return (
                  (e = p),
                  null,
                  (a = r().mark(function () {
                    var e, a, o, i, u, l, d, p, f, m;
                    return r().wrap(function (r) {
                      for (;;)
                        switch ((r.prev = r.next)) {
                          case 0:
                            if (!b.value) {
                              r.next = 8;
                              break;
                            }
                            return (
                              (r.next = 3),
                              Promise.all([
                                s.getFinanceBasic(s.HQBridge, n.symbol),
                                s.getFinanceMain(s.HQBridge, n.symbol),
                              ])
                            );
                          case 3:
                            return (
                              (u = r.sent),
                              (l = t(u, 2)),
                              (d = l[0]),
                              (p = l[1]),
                              r.abrupt("return", {
                                marketType: "HS",
                                payload: { financeBasic: d, financeMain: p },
                              })
                            );
                          case 8:
                            if (!c.utils.isHKMarket(v.value)) {
                              r.next = 13;
                              break;
                            }
                            return (
                              (r.next = 11),
                              s.getFinanceData(s.HQBridge, {
                                stockCode: n.symbol,
                                subReq: ["hkcwbbYjqs"],
                                "hkcwbbYjqs.symbol": n.symbol,
                              })
                            );
                          case 11:
                            return (
                              (f = r.sent),
                              r.abrupt("return", {
                                marketType: "HK",
                                payload:
                                  null ==
                                  (a =
                                    null == (e = null == f ? void 0 : f.data)
                                      ? void 0
                                      : e.subOrgRspData)
                                    ? void 0
                                    : a.hkcwbbYjqs,
                              })
                            );
                          case 13:
                            if (!c.utils.isUSMarket(v.value)) {
                              r.next = 18;
                              break;
                            }
                            return (
                              (r.next = 16),
                              s.getFinanceData(s.HQBridge, {
                                stockCode: n.symbol,
                                subReq: ["finDetailYjqs"],
                                "finDetailYjqs.symbol": y.value,
                              })
                            );
                          case 16:
                            return (
                              (m = r.sent),
                              r.abrupt("return", {
                                marketType: "US",
                                payload:
                                  null ==
                                  (i =
                                    null == (o = null == m ? void 0 : m.data)
                                      ? void 0
                                      : o.subOrgRspData)
                                    ? void 0
                                    : i.finDetailYjqs,
                              })
                            );
                          case 18:
                            return r.abrupt("return", null);
                          case 19:
                          case "end":
                            return r.stop();
                        }
                    }, o);
                  })),
                  new Promise(function (r, t) {
                    var n = function (e) {
                        try {
                          i(a.next(e));
                        } catch (e) {
                          t(e);
                        }
                      },
                      o = function (e) {
                        try {
                          i(a.throw(e));
                        } catch (e) {
                          t(e);
                        }
                      },
                      i = function (e) {
                        return e.done
                          ? r(e.value)
                          : Promise.resolve(e.value).then(n, o);
                      };
                    i((a = a.apply(e, null)).next());
                  })
                );
                var e, a;
              },
              formatData: function (r) {
                if (!r) return null;
                s.HQBridge.report(
                  "".concat(f.value.reportPrefix, ".plugin_expose"),
                  (function (r, t) {
                    for (var n in t || (t = {})) o.call(t, n) && u(r, n, t[n]);
                    if (a) {
                      var l,
                        s = e(a(t));
                      try {
                        for (s.s(); !(l = s.n()).done; ) {
                          n = l.value;
                          i.call(t, n) && u(r, n, t[n]);
                        }
                      } catch (e) {
                        s.e(e);
                      } finally {
                        s.f();
                      }
                    }
                    return r;
                  })({ widgettype: "financetrends" }, n.contexObj)
                );
                var t = {
                  HS: function (e) {
                    return (function (e, r) {
                      var t, n, a, o, i;
                      if (
                        0 != +(null == e ? void 0 : e.code) ||
                        0 != +(null == r ? void 0 : r.code)
                      )
                        return null;
                      var u =
                          (null == (t = null == e ? void 0 : e.data)
                            ? void 0
                            : t.lrb) || {},
                        l = u.NPParentCompanyOwners,
                        s = u.NPFromParentCompanyOwners,
                        c = u.OperatingRevenue;
                      return k({
                        latest:
                          null == (n = null == e ? void 0 : e.data)
                            ? void 0
                            : n.latest,
                        yysr: c,
                        jlr: s || l,
                        eps:
                          null ==
                          (i =
                            null ==
                            (o =
                              null == (a = null == r ? void 0 : r.data)
                                ? void 0
                                : a.data)
                              ? void 0
                              : o.ylnl)
                            ? void 0
                            : i.EPS,
                      });
                    })(
                      null == e ? void 0 : e.financeBasic,
                      null == e ? void 0 : e.financeMain
                    );
                  },
                  HK: g,
                  US: g,
                }[r.marketType];
                return t ? t(r.payload) : null;
              },
            }),
            w = j.cardData,
            q = j.refresh;
          return {
            sourceData: f,
            showViewMore: h,
            cardData: w,
            market: v,
            scode: y,
            showStockCode: m,
            handleCardClick: function () {
              if (h.value) {
                var e = f.value.reportPrefix;
                s.HQBridge.report("".concat(e, ".ai_plugin_click"), {
                  widgettype: "performanceTrends",
                  stockid: n.symbol,
                  requestid: n.contexObj.requestId || "",
                }),
                  s.HQBridge.report("".concat(e, ".performanceTrends_click"));
                var r = d.isAPP
                  ? { name: n.stockName, selectedTabTitle: "财务" }
                  : { tab: "finance", tabCurrentModule: "performanceTrends" };
                d.goToStockDetail(v.value, y.value, r);
              }
            },
            refresh: q,
          };
        },
        onPageShow: function () {
          this.refresh();
        },
      };
    Array || l.resolveComponent("performance-trends")();
    var f = l._export_sfc(p, [
      [
        "render",
        function (e, r, t, n, a, o) {
          return l.e(
            { a: n.cardData },
            n.cardData
              ? l.e(
                  { b: t.stockName },
                  t.stockName
                    ? { c: l.t(t.stockName), d: l.t(n.showStockCode) }
                    : {},
                  {
                    e: l.p({
                      "chart-id": "hytrendChart".concat(t.position),
                      "chart-style": "width: 558rpx; height: 288rpx",
                      market: n.market,
                      scode: n.scode,
                      "stock-type": e.stockType,
                      skin: t.skin,
                      data: n.cardData,
                      "disable-tooltips": !0,
                      "page-name": n.sourceData.reportPrefix,
                    }),
                    f: n.showViewMore,
                  },
                  (n.showViewMore, {}),
                  {
                    g: l.n("skin-".concat(t.skin)),
                    h: l.o(function () {
                      return (
                        n.handleCardClick &&
                        n.handleCardClick.apply(n, arguments)
                      );
                    }, 5792),
                  }
                )
              : {}
          );
        },
      ],
      ["__scopeId", "data-v-3647ec42"],
    ]);
    wx.createComponent(f);
  },
  {
    isPage: false,
    isComponent: true,
    currentFile:
      "pages/stock-widget/@tencent/stock-widget/cardKits/yjqsCard.js",
  }
);
require("pages/stock-widget/@tencent/stock-widget/cardKits/yjqsCard.js");
